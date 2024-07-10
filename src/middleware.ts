import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { authMiddleware } from './app/middlewares/auth';

export function middleware(request: NextRequest) {
  const loggingResponse = authMiddleware(request);
  if (loggingResponse) {
    return loggingResponse;
  }
  return NextResponse.next();
}
export const config = {
  matcher: ['/bookings', '/admin/:path*'], // Apply middleware to all routes
};
