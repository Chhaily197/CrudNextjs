import Book from "@/models/book";
import connetMongoDB from "@/app/libs/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest){
     const { title, author, des } = await req.json();
     await connetMongoDB();
     const newBook = { title, author, des};
     await Book.create(newBook);
     return NextResponse.json({ message: 'Book created'}, {status: 201});
}

export async function GET(req: NextRequest, res: NextResponse){
     try {
          await connetMongoDB();
          const books = await Book.find();
          return NextResponse.json({books});
     } catch (error) {
          console.error(error);
     }
}

export async function DELETE(req: NextRequest){
     const id = req.nextUrl.searchParams.get('id');
     await connetMongoDB();
     await Book.findByIdAndDelete(id);
     return NextResponse.json({ message: 'Book Deleted'}, { status: 200});
}
