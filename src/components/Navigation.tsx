// import { useState, useEffect } from "react";
// import { Menu, X } from "lucide-react";
// import logo from "@/assets/logo.png";
// import { QuoteDialog } from "@/components/QuoteDialog";

// export const Navigation = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       // When user scrolls more than 50px, mark navbar as scrolled
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navLinks = [
//     { label: "Home", href: "#home" },
//     { label: "About", href: "#about" },
//     { label: "Projects", href: "#projects" },
//     { label: "Team", href: "#team" },
//     { label: "Contact", href: "#contact" },
//   ];

//   return (
//     <nav
//       className={`fixed top-0 z-50 w-full transition-all duration-300 ${
//         isScrolled
//           ? "border-b border-border/40 bg-white shadow-sm"
//           : "bg-transparent border-transparent shadow-none"
//       }`}
//     >
//       <div className="container mx-auto px-6 md:px-12">
//         <div className="flex h-20 items-center justify-between">
//           {/* Logo + text */}
//           <div className="flex items-center gap-3">
//             {/* Logo image */}
//             <img
//               src={logo}
//               alt="A-1 Enterprises Logo"
//               className={`h-12 w-auto transition-all duration-300 ${
//                 isScrolled ? "brightness-100" : "brightness-200"
//               }`}
//             />

//             {/* Text title */}
//             <h1
//               className={`text-2xl font-bold transition-colors duration-300 ${
//                 isScrolled ? "text-black" : "text-white"
//               }`}
//             >
//               A-1 <span className="text-gradient">Enterprises</span>
//             </h1>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden items-center gap-8 md:flex">
//             {navLinks.map((link) => (
//               <a
//                 key={link.label}
//                 href={link.href}
//                 className={`text-sm font-medium transition-colors ${
//                   isScrolled
//                     ? "text-muted-foreground hover:text-primary"
//                     : "text-white hover:text-accent"
//                 }`}
//               >
//                 {link.label}
//               </a>
//             ))}

//             <QuoteDialog
//               buttonClassName={`transition-all duration-300 ${
//                 isScrolled
//                   ? "bg-gradient-to-r from-primary to-accent hover:shadow-glow text-white"
//                   : "bg-white/20 text-white hover:bg-white/30"
//               }`}
//             />
//           </div>

//           {/* Mobile Menu Button */}
//           <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
//             {isOpen ? (
//               <X className={`h-6 w-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
//             ) : (
//               <Menu className={`h-6 w-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
//             )}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <div
//             className={`border-t py-6 md:hidden transition-all duration-300 ${
//               isScrolled ? "border-border/50 bg-white/95" : "bg-black/50 border-white/20"
//             }`}
//           >
//             <div className="flex flex-col gap-4">
//               {navLinks.map((link) => (
//                 <a
//                   key={link.label}
//                   href={link.href}
//                   onClick={() => setIsOpen(false)}
//                   className={`text-sm font-medium transition-colors ${
//                     isScrolled
//                       ? "text-muted-foreground hover:text-primary"
//                       : "text-white hover:text-accent"
//                   }`}
//                 >
//                   {link.label}
//                 </a>
//               ))}

//               <QuoteDialog
//                 buttonClassName={`transition-all duration-300 ${
//                   isScrolled
//                     ? "bg-gradient-to-r from-primary to-accent text-white"
//                     : "bg-white/20 text-white hover:bg-white/30"
//                 }`}
//               />
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { QuoteDialog } from "@/components/QuoteDialog";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Team", href: "#team" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "border-b border-border/40 bg-white shadow-sm"
          : "bg-transparent border-transparent shadow-none"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex h-20 items-center justify-between">
          {/* Logo + text (clickable) */}
          <a
            href="#home"
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            <img
              src={logo}
              alt="A-1 Enterprises Logo"
              className={`h-12 w-auto transition-all duration-300 ${
                isScrolled ? "brightness-100" : "brightness-200"
              }`}
            />

            <h1
              className={`text-2xl font-bold transition-colors duration-300 ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              A-1 <span className="text-gradient">Enterprises</span>
            </h1>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isScrolled
                    ? "text-muted-foreground hover:text-primary"
                    : "text-white hover:text-accent"
                }`}
              >
                {link.label}
              </a>
            ))}

            <QuoteDialog
              buttonClassName={`transition-all duration-300 ${
                isScrolled
                  ? "bg-gradient-to-r from-primary to-accent hover:shadow-glow text-white"
                  : "bg-white/20 text-white hover:bg-white/30"
              }`}
            />
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? (
              <X
                className={`h-6 w-6 ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
              />
            ) : (
              <Menu
                className={`h-6 w-6 ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
              />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div
            className={`border-t py-6 md:hidden transition-all duration-300 ${
              isScrolled
                ? "border-border/50 bg-white/95"
                : "bg-black/50 border-white/20"
            }`}
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium transition-colors ${
                    isScrolled
                      ? "text-muted-foreground hover:text-primary"
                      : "text-white hover:text-accent"
                  }`}
                >
                  {link.label}
                </a>
              ))}

              <QuoteDialog
                buttonClassName={`transition-all duration-300 ${
                  isScrolled
                    ? "bg-gradient-to-r from-primary to-accent text-white"
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
