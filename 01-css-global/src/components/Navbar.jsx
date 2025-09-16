const Navbar = ({ theme, toggleTheme }) => {
  return (
    <nav className="navbar">
      <div className="logo">Mini Loja</div>
      <div className="navbar-right-side">
        <button onClick={toggleTheme} className="theme-toggle-btn">
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
        <span>Carrinho (0)</span>
      </div>
    </nav>
  );
};

export default Navbar;