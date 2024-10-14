import { NextResponse } from "next/server";

export const handleError = (error: unknown) => {
    const statusCode = error instanceof Error && error.message === 'Invalid page or limit parameter' ? 400 : 500;
    return NextResponse.json({
        status: false,
        statusCode,
        message: error instanceof Error ? error.message : 'Unknown error occurred',
        stack: process.env.NEXT_PUBLIC_ENV === 'production' ? '🥞' : error instanceof Error ? error.stack : 'No stack trace available',
    }, { status: statusCode });
}
