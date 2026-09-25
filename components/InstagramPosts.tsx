"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    instgrm?: { Embeds: { process(): void } };
  }
}

function permalink(url: string) {
  return url.split("?")[0].replace(/\/?$/, "/");
}

function blockquote(url: string) {
  return `<blockquote class="instagram-media" data-instgrm-permalink="${url}" data-instgrm-version="14" style="margin:0;min-width:0;width:100%;max-width:100%;border:0;border-radius:12px;"><a href="${url}">View this post on Instagram</a></blockquote>`;
}

function messageType(data: unknown) {
  if (typeof data !== "string") return (data as { type?: unknown })?.type;
  try {
    return JSON.parse(data).type;
  } catch {
    return undefined;
  }
}

export function InstagramPosts({ posts }: { posts: string[] }) {
  const urls = [...new Set(posts.map(permalink))];
  const row = useRef<HTMLDivElement>(null);
  // Private posts and accounts with embeds turned off never send MOUNTED, so they stay hidden.
  const [mounted, setMounted] = useState<string[]>([]);

  useEffect(() => {
    function onMessage(event: MessageEvent) {
      if (event.origin !== "https://www.instagram.com") return;
      if (messageType(event.data) !== "MOUNTED") return;
      const frame = [...(row.current?.querySelectorAll("iframe") ?? [])].find(
        (f) => f.contentWindow === event.source,
      );
      const url = frame?.closest<HTMLElement>(".ig-post")?.dataset.url;
      if (url) setMounted((m) => (m.includes(url) ? m : [...m, url]));
    }
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  const touched = useRef(false);

  // Scroll snapping holds whichever post mounted first, so a post that mounts
  // later in front of it would leave the row scrolled partway in.
  useEffect(() => {
    if (!touched.current && row.current) row.current.scrollLeft = 0;
  }, [mounted]);

  useEffect(() => {
    window.instgrm?.Embeds.process();
  }, [posts]);

  return (
    <>
      <div
        className="ig-posts"
        ref={row}
        onPointerDown={() => (touched.current = true)}
        onWheel={() => (touched.current = true)}
        onKeyDown={() => (touched.current = true)}
      >
        {urls.map((url) => {
          const ready = mounted.includes(url);
          return (
            // embed.js swaps the blockquote for an iframe, so React must not own it.
            <div
              key={url}
              className="ig-post"
              data-url={url}
              data-ready={ready ? "" : undefined}
              inert={!ready}
              dangerouslySetInnerHTML={{ __html: blockquote(url) }}
            />
          );
        })}
      </div>
      <Script
        id="instagram-embed"
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
        onReady={() => window.instgrm?.Embeds.process()}
      />
    </>
  );
}
