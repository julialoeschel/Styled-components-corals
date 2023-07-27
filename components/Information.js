import styled from "styled-components";
import Link from "next/link";

export default function Information() {
  const StyledText = styled.p`
    color: green;
    margin: 1rem;
    font-size: 1.5rem;
  `;

  const StyledLink = styled(Link)`
    color: red;
  `;

  return (
    <>
      <StyledText>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis
        explicabo esse aliquam dolore libero quo animi non vel quod minima
        eligendi deleniti ullam soluta, doloribus adipisci ex, tenetur, saepe
        suscipit!
      </StyledText>
      <StyledLink href="/">read more</StyledLink>
    </>
  );
}
