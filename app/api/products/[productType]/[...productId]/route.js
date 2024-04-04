import { NextResponse } from "next/server";
import { products } from "@/data.json";

export async function GET(req, context) {
    const { params } = context
    console.log(params)
    const productId = products.filter(data => params.productId.toString() === data.id)
  return NextResponse.json(productId);
}