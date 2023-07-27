import styled from "styled-components";

export default styled.button`
  border: none;
  cursor: pointer;
  padding: 1rem;
  font-family: inherit;

  color: white;
  background-color: ${({ $color }) =>
    $color === "danger" ? "var(--secondary-color)" : "var(--primary-color)"};

  &:hover {
    color: black;
    background-color: var(--primary-background);
  }
`;
