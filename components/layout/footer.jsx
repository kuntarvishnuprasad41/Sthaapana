"use client";

import Link from "next/link";
import { LogoB } from "../ui/logo";
import { Linkedin, Instagram, Facebook } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6"; // X.com logo
import { useTranslation } from "@/lib/i18n";

const navigation = [
  { name: "about", href: "/about" },
  { name: "experience", href: "/experience" },
  { name: "projects", href: "/projects" },
  { name: "contact", href: "/contact" },
];

const socialLinks = [
  { name: "LinkedIn", href: "#", icon: Linkedin },
  { name: "Instagram", href: "#", icon: Instagram },
  { name: "Facebook", href: "#", icon: Facebook },
  { name: "Twitter", href: "#", icon: FaXTwitter },
];

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gradient-to-r from-yellow-400 to-yellow-600">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        {/* Social links */}
        <div className="flex justify-center space-x-6 md:order-2">
          {socialLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-black hover:text-gray-700 transition-colors"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </Link>
          ))}
        </div>

        {/* Navigation + Privacy */}
        <div className="mt-8 md:order-1 md:mt-0">
          <div className="flex flex-col md:flex-row md:items-center md:space-x-8">
            <LogoB className="mb-4 md:mb-0" />
            <div className="flex flex-wrap justify-center space-x-6 text-sm">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-black hover:text-gray-700 transition-colors"
                >
                  {t(`footer.navigation.${item.name}`)}
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-4 flex flex-col md:flex-row md:items-center md:justify-between text-sm text-black">
            <Link
              href="/privacy"
              className="hover:text-gray-700 transition-colors"
            >
              {t("footer.privacy")}
            </Link>
            <p className="mt-2 md:mt-0">© Riyash 2025. {t("footer.rights")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
