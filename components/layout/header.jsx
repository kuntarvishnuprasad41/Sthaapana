"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Logo } from "../ui/logo"
import { Button } from "../ui/button"
import { LanguageSwitcher } from "../ui/language-switcher"
import { Menu, X } from "lucide-react"
import { useTranslation } from "../../lib/i18n"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const { t, locale } = useTranslation()

  const navigation = [
    { name: t("nav.aboutUs"), href: locale === "ar" ? "/ar/about" : "/about", key: "nav.aboutUs" },
    {
      name: t("nav.riyashExperience"),
      href: locale === "ar" ? "/ar/experience" : "/experience",
      key: "nav.riyashExperience",
    },
    { name: t("nav.ourProjects"), href: locale === "ar" ? "/ar/projects" : "/projects", key: "nav.ourProjects" },
    { name: t("nav.contactUs"), href: locale === "ar" ? "/ar/contact" : "/contact", key: "nav.contactUs" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href={locale === "ar" ? "/ar" : "/"}>
            <Logo />
          </Link>
        </div>

        <div className="flex lg:hidden">
          <Button
            variant="ghost"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </Button>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className={`text-sm font-semibold leading-6 transition-colors hover:text-yellow-400 ${
                pathname === item.href ? "text-yellow-400" : "text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-4">
          <LanguageSwitcher />
          <Button
            variant="outline"
            className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black bg-transparent"
          >
            {t("home.cta.button")}
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
            <div className="flex items-center justify-between">
              <Link href={locale === "ar" ? "/ar" : "/"}>
                <Logo />
              </Link>
              <Button
                variant="ghost"
                className="-m-2.5 rounded-md p-2.5 text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </Button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-white/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.key}
                      href={item.href}
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 transition-colors hover:bg-white/10 ${
                        pathname === item.href ? "text-yellow-400" : "text-white"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6 space-y-4">
                  <LanguageSwitcher />
                  <Button
                    variant="outline"
                    className="w-full border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black bg-transparent"
                  >
                    {t("home.cta.button")}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
