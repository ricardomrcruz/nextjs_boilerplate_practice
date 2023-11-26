import Link from "next/link";

export default function AdminNav() {


    return(

        <header className="h-full w-64  p-6 bg-[#363636]">
            <Link href={"/admin"}>
                <h1 className="text-[#ac362e] text-4xl">BackOffice</h1>
            </Link>

            

        </header>


    )
}