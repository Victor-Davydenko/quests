import { i18nRouter } from 'next-i18n-router';
import { NextRequest, NextResponse } from 'next/server';
import { SESSION_COOKIE } from '@/contstants/constants';
import { cookies } from 'next/headers';
import i18nConfig from '../i18nConfig';

export function middleware(request: NextRequest) {
  const sessionCookie = cookies().get(SESSION_COOKIE)?.value;
  const path = request.nextUrl.pathname;
  if (!sessionCookie && path.includes('/bookQuest')) {
    const absoluteURL = new URL('/signin', request.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }
  if (sessionCookie && (path.includes('signin') || path.includes('signup'))) {
    const absoluteURL = new URL('/', request.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }
  return i18nRouter(request, i18nConfig);
}

// applies this middleware only to files in the app directory
export const config = {
  matcher: '/((?!api|static|.*\\..*|_next).*)',
};
