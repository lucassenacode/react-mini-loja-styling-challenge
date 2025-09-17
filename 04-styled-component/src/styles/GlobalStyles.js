import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  /* Reset + tokens */
  * { margin:0; padding:0; box-sizing:border-box; }

  body {
    font-family: sans-serif;
    background-color: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
    transition: background-color .3s, color .3s;
  }

  main { padding: 20px; }

  /* Grid breakpoints iguais ao Global */
  :root {
    --gap: 20px;
  }

  /* Skeleton helpers */
  .skeleton { position: relative; overflow: hidden; background-color: ${({ theme }) => theme.card}; }
  .skeleton-line { background-color: #e0e0e0; border-radius: 4px; }

  .skeleton.skeleton-shimmer::after {
    content:'';
    position:absolute;
    top:0; left:-150%;
    width:150%; height:100%;
    background: linear-gradient(90deg, transparent, ${({ theme }) => theme.isDark ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.2)"} , transparent);
    animation: shimmer 1.5s infinite;
  }

  @keyframes shimmer {
    0% { left: -150%; }
    100% { left: 150%; }
  }
`;
