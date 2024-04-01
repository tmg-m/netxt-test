import Link from "next/link";

export default function CtaBtn({id, typeBtn}) {
  return (
    <div className={`flex items-center justify-center px-8 py-3 text-white rounded-3xl cursor-pointer ${typeBtn === 'checkout' ?  'bg-red-600' : 'bg-black'}`}>
        <Link href={`/products/&${typeBtn}`}>{typeBtn === 'checkout' ?  'Buy' : 'Add to Cart'}</Link>
    </div>
  );
}
