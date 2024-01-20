import { NextResponse } from "next/server";
import prisma from "../../libs/prismadb";

export const GET = async (req: Request, res: NextResponse) => {
  try {
    const posts = await prisma?.post.findMany();

    return NextResponse.json({ message: "Success", posts }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { message: "Error", error: error.message },
      { status: 500 }
    );
  }
};

export const POST = async (req: Request, res: NextResponse) => {
  try {
    const { title, description } = await req.json();
    const post = await prisma.post.create({ data: { description, title } });
    return NextResponse.json({ message: "Success", post }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
};
