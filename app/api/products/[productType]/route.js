import { NextResponse } from "next/server";
import { products } from "@/data.json";

export async function GET(req, context) {
    const { params } = context
    const productType = products.filter(data => params.productType === data.type)
  return NextResponse.json(productType);
}
