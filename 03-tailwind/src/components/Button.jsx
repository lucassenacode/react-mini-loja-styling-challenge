// botão 40px, borda 2px e hover igual ao CSS Global
const base =
  "inline-flex h-10 items-center justify-center rounded-[5px] text-[1rem] font-bold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] disabled:opacity-50 disabled:cursor-not-allowed";

const variants = {
  // fundo primário; no hover fica transparente com texto primário
  solid:
    "border-2 border-[var(--primary)] bg-[var(--primary)] text-white hover:bg-transparent hover:text-[var(--primary)] px-4",
  outline:
    "border-2 border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white px-4",
  ghost:
    "text-[var(--primary)] px-3",
};

const Button = ({ children, variant = "solid", className = "", ...props }) => {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
