import createMiddleware from 'next-intl/middleware';
import { defaultLocale } from './config';
export default createMiddleware({
  locales: ['en', 'fa'],
  defaultLocale:"fa"
})
 
export const config = {
  matcher: ['/', '/(fa|en)/:path*']
};