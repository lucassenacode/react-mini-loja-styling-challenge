
import styles from './Navbar.module.css';
const Navbar = ({ theme, toggleTheme }) => {
  return (
    <nav className={styles.navbar}> 
      <div className={styles.logo}>Mini Loja</div>
      <div className={styles.navbarRightSide}>
        <button onClick={toggleTheme} className={styles.themeToggleBtn}>
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
        <span>Carrinho (0)</span>
      </div>
    </nav>
  );
};

export default Navbar;