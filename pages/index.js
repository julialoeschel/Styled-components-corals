import Button from "@/components/Button";
import Link from "@/components/Link";
import Information from "@/components/Information";
import Container from "@/components/Container";

export default function HomePage() {
  return (
    <>
      <h1>Hello from Next.js</h1>

      <Container $direction="column">
        <Button>click me</Button>
        <Button $color="danger">click me</Button>
      </Container>
      <Container>
        <Button>click me</Button>
        <Button>click me</Button>
      </Container>
      <Link href="/"> styled Link</Link>
      <Information></Information>
    </>
  );
}
