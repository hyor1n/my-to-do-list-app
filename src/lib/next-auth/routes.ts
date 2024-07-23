/**
 * Sebuah array yang berisi routes yang dapat diakses publik.
 * Routes ini tidak memerlukan autentikasi.
 * @type {string[]}
 */
export const publicRoutes: string[] = ['/'];

/**
 * Sebuah array yang berisi routes untuk keperluan autentikasi.
 * Routes ini akan me-redirect seseorang yang sudah login ke /dashboard.
 * @type {string[]}
 */
export const authRoutes: string[] = ['/login', '/register'];

/**
 * Prefix untuk routes API yang memerlukan autentikasi (login/logout/register).
 * @type {string}
 */
export const apiAuthPrefix: string = '/api/auth';

/**
 * Prefix untuk routes API uploadthing (S3).
 * @type {string}
 */
export const apiUTPrefix: string = '/api/uploadthing';

/**
 * Route default pengguna setelah login.
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT: string = '/';
