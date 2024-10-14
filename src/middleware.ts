import { NextResponse } from 'next/server';
import { handleError } from './middlewares';

export function middleware() {
    try {
        return NextResponse.next();
    } catch (error) {
        return handleError(error);
    }
}

export const config = {
    matcher: '/api/:path*',
};