import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <Link href="week-2" className="text-xl text-bold">Week 2</Link>
      <br></br>
      <Link href="week-3" className="text-xl text-bold">Week 3</Link>
      <br></br>
      <Link href="week-4" className="text-xl text-bold">Week 4</Link>
    </main>
  );
}
