import { NextRequest } from 'next/server'
import * as controller from '@/server/controllers/alquran.controller'

export const GET = async (req: NextRequest) => controller.GET(req)