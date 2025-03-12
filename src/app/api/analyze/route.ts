import { NextResponse } from 'next/server';
import { parsePdf } from '@/lib/pdf-parser';
import { analyzeDocument } from '@/lib/openai';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    
    // Parse PDF to extract text
    const text = await parsePdf(buffer);
    
    // Analyze the text using OpenAI
    const analysis = await analyzeDocument(text);
    
    // For now, return a simple response
    return NextResponse.json({
      success: true,
      result: {
        summary: analysis,
        keyPoints: [],
        simplifiedText: '',
      }
    });
  } catch (error) {
    console.error("Error processing document:", error);
    return NextResponse.json(
      { error: 'Failed to process document' },
      { status: 500 }
    );
  }
}