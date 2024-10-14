import { NextRequest } from 'next/server'
import * as Controller from '@/server/controllers/alquran.controller'

export const GET = async (req: NextRequest) => Controller.GET(req)