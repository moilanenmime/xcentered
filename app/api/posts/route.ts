import { NextResponse } from "next/server";
import { getAllPosts } from "@/lib/posts";

export const runtime = "nodejs"; // fs requires Node runtime
export const dynamic = "force-dynamic"; // ensure fresh list at build

export async function GET() {
  const posts = getAllPosts();
  return NextResponse.json(posts, { status: 200 });
}
