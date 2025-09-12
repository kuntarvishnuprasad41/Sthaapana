// middleware.js
import { NextResponse } from 'next/server'

export function middleware(req) {
    const locale = req.cookies.NEXT_LOCALE || 'en'
    return NextResponse.next()
}

export const config = {
    matcher: ['/((?!_next|favicon.ico).*)'],
}
