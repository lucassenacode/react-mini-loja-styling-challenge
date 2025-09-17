const Navbar = ({ theme, toggleTheme }) => {
  return (
    <nav
      className="sticky top-0 z-50 flex items-center justify-between px-8 py-4 bg-[var(--card)] transition-colors"
      style={{ boxShadow: "var(--shadow)" }}
      role="navigation"
      aria-label="Barra de navegação"
    >
      {/* mesmo tamanho e sem negrito */}
      <div className="text-[1rem] font-normal select-none">Mini Loja</div>

      {/* tamanhos iguais + sol 1.5rem + Carrinho (0) sem badge */}
      <div className="flex items-center gap-5 text-[1rem]">
        <button
          onClick={toggleTheme}
          aria-label="Alternar tema claro/escuro"
          aria-pressed={theme === "dark"}
          className="text-[1.5rem] leading-none rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]"
          title="Alternar tema"
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>
        <span className="select-none">Carrinho (0)</span>
      </div>
    </nav>
  );
};

export default Navbar;
