import { NextResponse } from 'next/server';
export async function GET(_:Request,{params}:{params:Promise<{jobId:string}>}){ const {jobId}=await params; return NextResponse.json({jobId,status:'completed-or-expired',persisted:false,message:'ContentEngin jobs produce downloadable files and do not save assets/source images in the database.'}); }
