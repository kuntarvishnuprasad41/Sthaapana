"use client";

import { useRouter, usePathname } from "next/navigation";
import { Button } from "./button";
import { Globe } from "lucide-react";
import { useState } from "react";

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Extract current locale from pathname
  const currentLocale = pathname.startsWith("/kan") ? "kan" : "en";

  const switchLanguage = (locale) => {
    let newPath = pathname;

    if (currentLocale === "kan" && locale === "en") {
      // Remove /ar prefix
      newPath = pathname.replace("/kan", "") || "/";
    } else if (currentLocale === "en" && locale === "kan") {
      // Add /ar prefix
      newPath = `/kan${pathname}`;
    }

    router.push(newPath);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="text-white hover:text-[#009BDE] flex items-center gap-2"
      >
        <Globe className="h-4 w-4" />
        <span className="text-sm font-medium">
          {currentLocale === "kan" ? "Kannada" : "English"}
        </span>
      </Button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-black/90 backdrop-blur-md border border-white/10 rounded-md shadow-lg z-50">
          <div className="py-1">
            <button
              onClick={() => switchLanguage("en")}
              className={`block w-full text-left px-4 py-2 text-sm hover:bg-white/10 transition-colors ${
                currentLocale === "en" ? "text-[#009BDE]" : "text-white"
              }`}
            >
              English
            </button>
            <button
              onClick={() => switchLanguage("kan")}
              className={`block w-full text-left px-4 py-2 text-sm hover:bg-white/10 transition-colors ${
                currentLocale === "kan" ? "text-[#009BDE]" : "text-white"
              }`}
            >
              Kannada
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
