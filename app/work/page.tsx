import type { Metadata } from "next";
import { WorkIndex } from "@/components/WorkIndex";
import { Container } from "@/components/ui";
import { copy, isWritten } from "@/lib/copy";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected projects.",
};

export default function WorkPage() {
  return (
    <Container className="page">
      <h1 className="page-title">Work</h1>
      {isWritten(copy.workIntro) && (
        <p className="lede">{copy.workIntro}</p>
      )}
      <WorkIndex projects={projects} />
    </Container>
  );
}
