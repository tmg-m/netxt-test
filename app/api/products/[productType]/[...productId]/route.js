import { NextResponse } from "next/server";
import { data } from "@/data.json";

export async function GET(req, context) {
    const { params } = context
    const productId = data.products.filter(data => params.productId.toString() === data.id)
  return NextResponse.json(productId);
}