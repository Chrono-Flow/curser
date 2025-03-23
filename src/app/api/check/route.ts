import { NextResponse } from "next/server";
import { Generate } from "../../../../utils";

export async function GET() {
    return new NextResponse((await Generate("do you sleep? ")).text())
}