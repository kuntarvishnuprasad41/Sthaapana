"use client"

import { usePathname } from "next/navigation"
import en from "../locales/en/common.json"
import ar from "../locales/kan/common.json"

const translations = {
  en,
  ar,
}

export function useTranslation() {
  const pathname = usePathname()

  const locale = pathname.startsWith("/kan") ? "kan" : "en"

  const t = (key) => {
    const keys = key.split(".")
    let value = translations[locale] || translations.en

    for (const k of keys) {
      value = value?.[k]
    }

    return value || key
  }

  return { t, locale }
}

export function getStaticTranslations(locale) {
  return translations[locale] || translations.en
}
