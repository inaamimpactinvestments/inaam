
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const handleWaitlistClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open('https://inaamyourmoney.notion.site/20710e25656b8102b835ca8c1e7fcfd5?pvs=105', '_blank');
  };

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4 px-6 md:px-10 flex justify-center"
    >
      <div 
        className={cn(
          "max-w-3xl w-full mx-auto rounded-full px-6 py-3 transition-all duration-300 border relative",
          scrolled 
            ? "bg-white/90 backdrop-blur-md shadow-lg border-gray-200" 
            : "bg-transparent backdrop-blur-sm border-white/20",
          "apple-menu-glow overflow-hidden"
        )}
      >
        {/* Animated subtle gradient border effect */}
        <div className="absolute inset-0 z-0 apple-menu-border-animation rounded-full"></div>
        
        <div className="flex items-center justify-between relative z-10">
          <Link to="/home" className="flex items-center transition-opacity duration-300">
            <img 
              src="/lovable-uploads/0a23badb-d7a6-419a-89ce-8103e50caea0.png" 
              alt="inaam" 
              className="h-8 md:h-10 transition-all duration-300 ease-in-out"
            />
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 transition-colors font-inter text-sm font-medium text-[#222222] hover:text-gray-600">
                <span>Menu</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg rounded-md">
                <DropdownMenuItem asChild>
                  <Link to="/product" className="w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Product
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/learn" className="w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Learn
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/pricing" className="w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Pricing
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/about" className="w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    About
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/faq" className="w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    FAQ
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <a 
              href="#"
              onClick={handleWaitlistClick}
              className="transition-colors font-inter text-sm font-medium text-[#222222] hover:text-gray-600 cursor-pointer"
            >
              Join Waitlist
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
