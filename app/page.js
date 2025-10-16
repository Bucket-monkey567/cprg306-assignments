import Link from "next/link";

export default function Home() {
  return (
    <main className="m-3">
      <h1 className="text-2xl">CPRG 306: Web Development 2 - Assignments</h1>
      <Link href="week-2" className="text-xl text-bold m-2 bg-slate-600 border-r-white border-2 rounded-md">Week 2</Link>
      <br />
      <Link href="week-3" className="text-xl text-bold m-2 bg-slate-600 border-r-white border-2 rounded-md">Week 3</Link>
      <br />
      <Link href="week-4" className="text-xl text-bold m-2 bg-slate-600 border-r-white border-2 rounded-md">Week 4</Link>
      <br />
      <Link href="week-5" className="text-xl text-bold m-2 bg-slate-600 border-r-white border-2 rounded-md">Week 5</Link>
      <br />
      <Link href="week-6" className="text-xl text-bold m-2 bg-slate-600 border-r-white border-2 rounded-md">Week 6</Link>
    </main>
  );
}
