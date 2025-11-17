// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { Logo } from "../ui/logo";
// import { Button } from "../ui/button";
// import { LanguageSwitcher } from "../ui/language-switcher";
// import { Menu, X } from "lucide-react";
// import { useTranslation } from "../../lib/i18n";

// export function Header() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const pathname = usePathname();
//   const { t, locale } = useTranslation();

//   const navigation = [
//     {
//       name: t("nav.aboutUs"),
//       href: locale === "kan" ? "/kan/about" : "/about",
//       key: "nav.aboutUs",
//     },
//     {
//       name: t("nav.SthaapanaExperience"),
//       href: locale === "kan" ? "/kan/experience" : "/experience",
//       key: "nav.SthaapanaExperience",
//     },
//     {
//       name: t("nav.ourProjects"),
//       href: locale === "kan" ? "/kan/projects" : "/projects",
//       key: "nav.ourProjects",
//     },
//     {
//       name: t("nav.contactUs"),
//       href: locale === "kan" ? "/kan/contact" : "/contact",
//       key: "nav.contactUs",
//     },
//   ];

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
//       <nav
//         className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
//         aria-label="Global"
//       >
//         {/* Logo */}
//         <div className="flex lg:flex-1">
//           <Link href={locale === "kan" ? "/kan" : "/"}>
//             <Logo />
//           </Link>
//         </div>

//         {/* Mobile menu button */}
//         <div className="flex lg:hidden">
//           <Button
//             variant="ghost"
//             className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
//             onClick={() => setMobileMenuOpen(true)}
//           >
//             <Menu className="h-6 w-6" aria-hidden="true" />
//           </Button>
//         </div>

//         {/* Desktop navigation */}
//         <div className="hidden lg:flex lg:gap-x-12">
//           {navigation.map((item) => (
//             <Link
//               key={item.key}
//               href={item.href}
//               className={`text-sm font-semibold leading-6 transition-colors hover:text-yellow-400 ${
//                 pathname === item.href ? "text-yellow-400" : "text-white"
//               }`}
//             >
//               {item.name}
//             </Link>
//           ))}
//         </div>

//         {/* Desktop right side */}
//         <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-4">
//           <LanguageSwitcher />
//           {/* <Link href={locale === "kan" ? "/kan/contact" : "/contact"}>
//             <Button
//               variant="outline"
//               className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black bg-transparent"
//             >
//               {t("home.cta.button")}
//             </Button>
//           </Link> */}
//         </div>
//       </nav>

//       {/* Mobile menu */}
//       {mobileMenuOpen && (
//         <div className="lg:hidden">
//           {/* Overlay */}
//           <div
//             className="fixed inset-0 bg-black z-40"
//             onClick={() => setMobileMenuOpen(false)}
//           />

//           {/* Fullscreen sliding menu */}
//           <div
//             className={`fixed inset-0 z-[60] transform transition-transform duration-300 flex flex-col bg-black ${
//               mobileMenuOpen
//                 ? "translate-x-0 bg-black"
//                 : "translate-x-full bg-black"
//             }`}
//           >
//             <div className="bg-black w-full h-full flex flex-col">
//               {/* Header */}
//               <div className="flex items-center justify-between px-6 py-6 bg-black">
//                 <Link href={locale === "kan" ? "/kan" : "/"}>
//                   <Logo />
//                 </Link>
//                 <Button
//                   variant="ghost"
//                   className="-m-2.5 rounded-md p-2.5 text-white"
//                   onClick={() => setMobileMenuOpen(false)}
//                 >
//                   <X className="h-6 w-6" aria-hidden="true" />
//                 </Button>
//               </div>

//               {/* Nav items + CTA */}
//               <div className="mt-6 flex-1 px-6 flow-root bg-black">
//                 <div className="-my-6 divide-y divide-white/10 flex flex-col h-full">
//                   {/* Navigation links */}
//                   <div className="space-y-2 py-6 flex-1">
//                     {navigation.map((item) => (
//                       <Link
//                         key={item.key}
//                         href={item.href}
//                         className={`block rounded-lg px-3 py-2 text-base font-semibold leading-7 transition-colors hover:bg-white/10 ${
//                           pathname === item.href
//                             ? "text-yellow-400"
//                             : "text-white"
//                         }`}
//                         onClick={() => setMobileMenuOpen(false)}
//                       >
//                         {item.name}
//                       </Link>
//                     ))}
//                   </div>

//                   {/* Language switcher + button */}
//                   <div className="py-6 space-y-4 pb-8">
//                     <LanguageSwitcher />
//                     {/* <Link href={locale === "kan" ? "/kan/contact" : "/contact"}>
//                       <Button
//                         variant="outline"
//                         className="w-full border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black bg-transparent"
//                       >
//                         {t("home.cta.button")}
//                       </Button>
//                     </Link> */}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "../ui/logo";
import { Button } from "../ui/button";
import { LanguageSwitcher } from "../ui/language-switcher";
import { Menu, X } from "lucide-react";
import { useTranslation } from "../../lib/i18n";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { t, locale } = useTranslation();

  const navigation = [
    {
      name: t("nav.aboutUs"),
      href: locale === "kan" ? "/kan/about" : "/about",
      key: "nav.aboutUs",
    },
    {
      name: t("nav.SthaapanaExperience"),
      href: locale === "kan" ? "/kan/experience" : "/experience",
      key: "nav.SthaapanaExperience",
    },
    {
      name: t("nav.ourProjects"),
      href: locale === "kan" ? "/kan/projects" : "/projects",
      key: "nav.ourProjects",
    },
    {
      name: t("nav.contactUs"),
      href: locale === "kan" ? "/kan/contact" : "/contact",
      key: "nav.contactUs",
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href={locale === "kan" ? "/kan" : "/"}>
            <Logo />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <Button
            variant="ghost"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </Button>
        </div>

        {/* Desktop navigation */}
        <div
          className={`hidden lg:flex ${
            locale === "kan" ? "lg:gap-x-16 text-lg" : "lg:gap-x-12 text-sm"
          } font-semibold leading-6`}
          // Uncomment this line if you want RTL order for Arabic
          // style={{ direction: locale === "kan" ? "rtl" : "ltr" }}
        >
          {navigation.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className={`transition-colors hover:text-yellow-400 ${
                pathname === item.href ? "text-yellow-400" : "text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop right side */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-4">
          <LanguageSwitcher />
          {/* <Link href={locale === "kan" ? "/kan/contact" : "/contact"}>
            <Button
              variant="outline"
              className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black bg-transparent"
            >
              {t("home.cta.button")}
            </Button>
          </Link> */}
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black z-40"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Fullscreen sliding menu */}
          <div
            className={`fixed inset-0 z-[60] transform transition-transform duration-300 flex flex-col bg-black ${
              mobileMenuOpen
                ? "translate-x-0 bg-black"
                : "translate-x-full bg-black"
            }`}
          >
            <div className="bg-black w-full h-full flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-6 bg-black">
                <Link href={locale === "kan" ? "/kan" : "/"}>
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

              {/* Nav items + CTA */}
              <div className="mt-6 flex-1 px-6 flow-root bg-black">
                <div className="-my-6 divide-y divide-white/10 flex flex-col h-full">
                  {/* Navigation links */}
                  <div className="space-y-2 py-6 flex-1">
                    {navigation.map((item) => (
                      <Link
                        key={item.key}
                        href={item.href}
                        className={`block rounded-lg px-3 py-2 ${
                          locale === "kan" ? "text-lg" : "text-base"
                        } font-semibold leading-7 transition-colors hover:bg-white/10 ${
                          pathname === item.href
                            ? "text-yellow-400"
                            : "text-white"
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>

                  {/* Language switcher + button */}
                  <div className="py-6 space-y-4 pb-8">
                    <LanguageSwitcher />
                    {/* <Link href={locale === "kan" ? "/kan/contact" : "/contact"}>
                      <Button
                        variant="outline"
                        className="w-full border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black bg-transparent"
                      >
                        {t("home.cta.button")}
                      </Button>
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
