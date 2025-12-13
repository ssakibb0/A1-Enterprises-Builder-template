import logo from "@/assets/a1-logo.png";

export const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-secondary/20 py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="A-1 Enterprises" className="h-12 w-auto" />
              <h3 className="text-2xl font-bold">
                A-1 <span className="text-gradient">Enterprises</span>
              </h3>
            </div>
            <p className="text-sm text-muted-foreground">Excellence in Civil Contracting</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} A-1 Enterprises. All rights reserved.
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              Building the future, one project at a time.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};