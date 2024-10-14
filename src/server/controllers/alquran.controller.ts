import { NextRequest, NextResponse } from "next/server";
import * as Service from '../services/alquran.service'
import * as middleware from "@/middlewares";

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
        const data = await Service.getAll(filters, page, limit);

        return NextResponse.json({
            status: true,
            statusCode: 200,
            message: 'Success retrieved all data',
            data
        });
    } catch (error) {
        return middleware.handleError(error)
    }
}

export const GETID = async (req: NextRequest, { params }: { params: { id: string } }) => {
    try {
        const { id } = params

        if (!id) {
            throw new Error('ID parameter is required');
        }

        const data = await Service.getByID(id);

        if (!data) {
            throw new Error('Data not found');
        }

        return NextResponse.json({
            status: true,
            statusCode: 200,
            message: 'Successfully retrieved data by ID',
            data
        });

    } catch (error) {
        return middleware.handleError(error)
    }
}