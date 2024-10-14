import { NextRequest, NextResponse } from "next/server";
import * as service from '../services/alquran.service'

export const GET = async (req: NextRequest) => {
    try {
        const url = new URL(req.url);
        const name = url.searchParams.get('name') || '';
        const revelation = url.searchParams.get('revelation') || '';
        const page = parseInt(url.searchParams.get('page') || '1', 10);
        const limit = parseInt(url.searchParams.get('limit') || '10', 10);

        if (isNaN(page) || isNaN(limit) || page < 1 || limit < 1) {
            throw new Error('Invalid page or limit parameter');
        }

        const filters = { name, revelation };
        const data = await service.getAll(filters, page, limit);

        return NextResponse.json({
            status: true,
            statusCode: 200,
            message: 'Success retrieved all data',
            data
        });
    } catch (error) {
        console.error('Error in GET request:', error);
        
        const statusCode = error instanceof Error && error.message === 'Invalid page or limit parameter' ? 400 : 500;
        
        return NextResponse.json({
            status: false,
            statusCode,
            message: error instanceof Error ? error.message : 'Unknown error occurred',
            stack: process.env.NEXT_PUBLIC_ENV === 'production' ? '🥞' : error instanceof Error ? error.stack : 'No stack trace available',
        }, { status: statusCode });
    }
}