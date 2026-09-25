"use client";

import { useEffect, useRef, useState } from "react";
import type { Song } from "@/lib/site";

// Horizontal shift is a percentage of the card's own width.
const slots = [
  { shift: 0, scale: 1.12, opacity: 1 },
  { shift: 105, scale: 0.88, opacity: 0.6 },
  { shift: 190, scale: 0.72, opacity: 0.32 },
];

function offsetFrom(index: number, active: number, count: number) {
  let offset = (index - active) % count;
  if (offset > count / 2) offset -= count;
  if (offset < -count / 2) offset += count;
  return offset;
}

export function SongCarousel({ songs }: { songs: Song[] }) {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);

  // Some designs render a second copy of the carousel inside a hidden
  // layout; only load the Spotify embeds for the copy that is on screen.
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px 0px" },
    );
    observer.observe(stage);
    return () => observer.disconnect();
  }, []);
  const count = songs.length;
  const go = (index: number) => setActive(index);
  const step = (delta: number) =>
    setActive((current) => (current + delta + count) % count);

  return (
    <div
      className="songs"
      role="region"
      aria-roledescription="carousel"
      aria-label="Current favorite songs"
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") step(-1);
        if (event.key === "ArrowRight") step(1);
      }}
    >
      <div className="songs-row">
        <button
          type="button"
          className="songs-arrow"
          aria-label="Previous song"
          onClick={() => step(-1)}
        >
          <svg viewBox="0 0 24 24" aria-hidden>
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
        <div className="songs-stage" ref={stageRef}>
          {songs.map((song, index) => {
            const offset = offsetFrom(index, active, count);
            const slot = slots[Math.abs(offset)];
            const isActive = offset === 0;
            return (
              <div
                key={song.spotifyId}
                className="songs-card"
                aria-hidden={!isActive}
                onClick={isActive ? undefined : () => go(index)}
                style={{
                  transform: `translate(calc(-50% + ${Math.sign(offset) * (slot?.shift ?? 0)}%), -50%) scale(${slot?.scale ?? 0.6})`,
                  opacity: slot?.opacity ?? 0,
                  zIndex: 10 - Math.abs(offset),
                  pointerEvents: slot ? "auto" : "none",
                  cursor: isActive ? "default" : "pointer",
                }}
              >
                {visible ? (
                  <iframe
                    title={`${song.title} by ${song.artist} on Spotify`}
                    src={`https://open.spotify.com/embed/track/${song.spotifyId}?utm_source=generator`}
                    width="100%"
                    height="152"
                    tabIndex={isActive ? 0 : -1}
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    style={{ pointerEvents: isActive ? "auto" : "none" }}
                  />
                ) : (
                  <div className="songs-placeholder" />
                )}
              </div>
            );
          })}
        </div>
        <button
          type="button"
          className="songs-arrow"
          aria-label="Next song"
          onClick={() => step(1)}
        >
          <svg viewBox="0 0 24 24" aria-hidden>
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>
      <div className="songs-dots">
        {songs.map((song, index) => (
          <button
            key={song.spotifyId}
            type="button"
            className="songs-dot"
            aria-label={`Play ${song.title} by ${song.artist}`}
            aria-current={index === active ? "true" : undefined}
            onClick={() => go(index)}
          />
        ))}
      </div>
      <p className="songs-caption" aria-live="polite">
        {songs[active].title} · {songs[active].artist}
      </p>
    </div>
  );
}
