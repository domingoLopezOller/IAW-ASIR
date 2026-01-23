import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["es", "en"];
const defaultLocale = "en";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const hasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}`)
  );

  if (hasLocale) return;

  const browserLang = request.headers
    .get("accept-language")
    ?.split(",")[0]
    .split("-")[0];

  const locale = locales.includes(browserLang ?? "")
    ? browserLang
    : defaultLocale;

  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}