import { Container, TextLink } from "@/components/ui";

export default function NotFound() {
  return (
    <Container className="page">
      <h1 className="page-title">Not found</h1>
      <p className="lede">
        That page is not on this site. <TextLink href="/">Home</TextLink>.
      </p>
    </Container>
  );
}
