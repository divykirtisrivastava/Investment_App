import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Check for the presence of a token in the cookies
  const token = Boolean(request.cookies.get('tradetoken'));

  // Define protected paths
  const isProtectedPath = path === '/dashboard';
  
  // Redirect authenticated users away from the signin page
  if (path === '/signin' && token) {
    return NextResponse.redirect(new URL('/dashboard', request.nextUrl));
  }

  // Redirect unauthenticated users away from protected paths
  if (isProtectedPath && !token) {
    return NextResponse.redirect(new URL('/signin', request.nextUrl));
  }

  // Add more conditions as necessary for other routes
}

// Specify which paths this middleware should apply to
export const config = {
  matcher: [
    '/profile',
    '/signin',
    '/register',
    '/dashboard'
  ]
}
