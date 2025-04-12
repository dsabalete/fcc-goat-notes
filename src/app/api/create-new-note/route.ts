import { prisma } from '@/db/prisma'
import { NextResponse } from 'next/server'

export async function POST(request: NextResponse) {
  const { searchParams } = new URL(request.url)
  const userId = searchParams.get("userId") || ""

  const { id } = await prisma.note.create({
    data: {
      authorId: userId,
      text: "",
    },
  })

  return NextResponse.json({ noteId: id })
}