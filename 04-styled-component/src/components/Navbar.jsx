// src/components/Navbar.jsx
import styled from "styled-components";

const Bar = styled.nav`
  position: sticky; top: 0; z-index: 100;
  display: flex; align-items: center; justify-content: space-between;
  padding: 1rem 2rem;                     /* = 16px 32px */
  background-color: ${({ theme }) => theme.card};
  box-shadow: 0 2px 5px ${({ theme }) => theme.shadowRGBA};
  transition: background-color .3s;
`;

const Logo = styled.div`
  font-size: 1rem;                         /* igual ao Global */
  font-weight: 400;                        /* sem negrito */
  user-select: none;
`;

const Right = styled.div`
  display: flex; align-items: center; gap: 20px;
  font-size: 1rem;                         /* igual ao Global */
`;

const ThemeBtn = styled.button`
  background: none; border: none; cursor: pointer;
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;                       /* sol/lua do mesmo tamanho */
  line-height: 1; border-radius: 4px;
  &:focus-visible { outline: 3px solid ${({ theme }) => theme.primary}; outline-offset: 2px; }
`;

const Navbar = ({ theme, toggleTheme }) => (
  <Bar role="navigation" aria-label="Barra de navegação">
    <Logo>Mini Loja</Logo>
    <Right>
      <ThemeBtn onClick={toggleTheme} aria-label="Alternar tema">
        {theme === "light" ? "🌙" : "☀️"}
      </ThemeBtn>
      <span>Carrinho (0)</span>
    </Right>
  </Bar>
);

export default Navbar;
