import Link from "next/link";

export default function CtaBtn({id}) {
  return (
    <div className="flex items-center justify-center px-8 py-3 bg-slate-600 rounded-full cursor-pointer">
        <Link href={`/products/${id}`}>Click here</Link>
    </div>
  );
}
