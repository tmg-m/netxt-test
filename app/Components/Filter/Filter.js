"use client"

import { useState } from "react";

export default function Filter({data}) {
  const [products, setProducts] = useState(data)
  return (
    <div className="flex items-center">
        Filter
    </div>
  );
}
