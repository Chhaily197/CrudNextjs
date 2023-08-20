import connetMongoDB from "@/app/libs/mongodb";
import Topic from "@/models/topic";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest){
     const { title, descritption } = await req.json();
     await connetMongoDB();
     await Topic.create({title, descritption});
     return NextResponse.json({ message: "Topic Created" }, { status: 201});
}

export async function GET(req: NextRequest){
     await connetMongoDB();
     const topics = await Topic.find();
     return NextResponse.json({ topics });
}

export async function DELETE(req: NextRequest){
     const id = req.nextUrl.searchParams.get('id');
     await connetMongoDB();
     await Topic.findByIdAndDelete(id);
     return NextResponse.json({ message: 'Topic delted'}, { status: 200});
}