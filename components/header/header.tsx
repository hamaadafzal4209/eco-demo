"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  ShoppingBag,
  User,
  Search,
  X,
  Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMobile } from "@/hooks/use-mobile";
import { LanguageSelector } from "./language-selector";
import { MobileSidebar } from "./mobile-sidebar";

const categories = ["Womenswear", "Menswear", "Kidswear"];
const subCategories = [
  "New Arrivals",
  "Bestsellers",
  "Dresses",
  "Tops",
  "Bottoms",
  "Outerwear",
  "Activewear",
  "Accessories",
  "Shoes",
  "Sale",
  "Bestsellers",
  "Dresses",
  "Tops",
  "Bottoms",
];

export function Header() {
  const isMobile = useMobile();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  const updateScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth);
    }
  };

  useEffect(() => {
    const scrollEl = scrollContainerRef.current;
    if (!scrollEl) return;

    updateScrollButtons(); // initial check

    scrollEl.addEventListener("scroll", updateScrollButtons);
    window.addEventListener("resize", updateScrollButtons); // responsive

    return () => {
      scrollEl.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
      setTimeout(updateScrollButtons, 200); // slight delay to allow scroll
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
      setTimeout(updateScrollButtons, 200);
    }
  };

  return (
    <>
      {/* Notification Banner */}
      <div className="bg-gray-100 text-left px-4 underline cursor-pointer sm:text-center py-2 text-sm">
        New pieces added daily
      </div>

      <header className="sticky top-0 z-40 w-full bg-white border-b">
        <div className="container flex items-center justify-between h-16 px-4 mx-auto">
          <div className="flex items-center">
            {isMobile ? (
              <Button
                variant="ghost"
                size="icon"
                className="mr-2 w-10 h-10 cursor-pointer"
                onClick={() => setIsSidebarOpen(true)}
              >
                <Menu className="h-6 w-6" />
              </Button>
            ) : (
              <nav className="hidden gap-2 md:flex">
                {categories.map((category, index) => (
                  <div
                    key={category}
                    className={`text-base px-4 py-2 rounded-md ${
                      index === 1 ? "font-semibold" : "font-normal"
                    } transition-colors hover:text-primary hover:bg-gray-100 cursor-pointer `}
                  >
                    {category}
                  </div>
                ))}
              </nav>
            )}

            {/* Mobile Search Icon */}
            {isMobile && (
              <Button
                variant="ghost"
                size="icon"
                className="w-10 h-10 cursor-pointer"
                onClick={() => setIsSearchOpen(true)}
              >
                <Search />
              </Button>
            )}
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link href="/">
              <span className="text-2xl font-bold tracking-wide text-gray-800">
                ShopEase
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            {!isMobile && <LanguageSelector />}

            <Button
              variant="ghost"
              size="icon"
              className="relative h-10 w-10 cursor-pointer"
            >
              <Heart />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="relative h-10 w-10 cursor-pointer"
            >
              <ShoppingBag />
              <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-primary text-[10px] font-bold text-primary-foreground flex items-center justify-center">
                3
              </span>
            </Button>

            {!isMobile && (
              <Button
                variant="ghost"
                size="icon"
                className="relative h-10 w-10 cursor-pointer"
              >
                <User />
              </Button>
            )}
          </div>
        </div>

        {isMobile && isSearchOpen && (
          <div className="absolute inset-x-0 top-16 bg-white z-30 p-4 border-b">
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Search..."
                className="flex-1 h-10 px-3 text-sm border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                autoFocus
              />
              <Button
                variant="ghost"
                size="icon"
                className="ml-2"
                onClick={() => setIsSearchOpen(false)}
              >
                <X />
              </Button>
            </div>
          </div>
        )}

        {!isMobile && (
          <div className="container flex gap-6 items-center justify-between py-2 px-4 mx-auto ">
            {/* Left Side - Scrollable Category Menu */}
            <div className="flex items-center flex-1 overflow-hidden">
              {showLeftArrow && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 cursor-pointer shrink-0"
                  onClick={scrollLeft}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
              )}

              <div
                ref={scrollContainerRef}
                className="flex gap-2 overflow-x-auto scrollbar-hide px-2"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {subCategories.map((category,index) => (
                  <div
                    key={index}
                    className="text-base whitespace-nowrap py-2 hover:bg-gray-100 cursor-pointer px-4 rounded-md transition-colors hover:text-primary"
                  >
                    {category}
                  </div>
                ))}
              </div>

              {showRightArrow && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 cursor-pointer shrink-0"
                  onClick={scrollRight}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              )}
            </div>

            {/* Right Side - Search */}
            <div className="relative w-60">
              <input
                type="text"
                placeholder="Search..."
                className="w-full h-10 pl-8 pr-3 text-sm border border-gray-200 shadow rounded-md focus:outline-none "
              />
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
          </div>
        )}
      </header>

      {/* Mobile Sidebar */}
      <MobileSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
    </>
  );
}
