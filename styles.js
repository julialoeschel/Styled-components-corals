import { createGlobalStyle } from "styled-components";
import { Satisfy } from "next/font/google";
import { Open_Sans } from "next/font/google";

const satisfy = Satisfy({ subsets: ["latin"], weight: "400" });
const opensans = Open_Sans({ subsets: ["latin"] });

export default createGlobalStyle`
  *, 
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
    --primary-color: #22babb; 
    --secondary-color: #f24405;
    --primary-background: #d3d3d3;
  }

  body {
    margin: 0;
    font-family: ${satisfy.style.fontFamily};
    padding: 2rem;
  }
`;
