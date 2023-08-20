import connetMongoDB from "@/app/libs/mongodb";
import Book from "@/models/book";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest, { params }: {params: {id: string}}){
     const { id } = params;
     const { newTitle: title, newAuthor: author, newDes: des } = await req.json();
     await connetMongoDB();
     await Book.findByIdAndUpdate(id, {title, author, des});
     return NextResponse.json({ message: "Book updated"}, { status: 200});
}

export async function GET(req: NextRequest ,{params}: {params: {id: string}}){
     const { id } = params;
     await connetMongoDB();
     const book = await Book.findOne({_id: id});
     return NextResponse.json({ book }, { status: 200});
}