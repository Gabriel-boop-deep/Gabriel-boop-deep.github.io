const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="text-sm font-bold text-foreground">GN</span>
            <span className="text-xs text-muted-foreground">© 2025 Gabriel Nunes. Todos os direitos reservados.</span>
          </div>
          <p className="text-xs text-muted-foreground">
            Desenvolvimento Web · Design · Soluções Digitais
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
