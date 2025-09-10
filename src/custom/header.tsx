import { Separator } from "@/components/ui/separator"
import Link from "next/link"

export default function Header(){
    return(
        <div className="fixed w-full shadow-sm">
            <div className="mx-auto flex justify-between p-4">
                {/*logo*/}
                <div className="font-bold text-xl">Portfolio</div>
                {/*navigation*/}
                <div className="flex items-center space-x-8">
                    <Link href="/">Home</Link>
                    <Separator orientation="vertical" />
                    <Link href="/about">About</Link>
                    <Separator orientation="vertical" />
                    <Link href="/projects">Projects</Link>
                    <Separator orientation="vertical" />
                    <Link href="/contact">Contact</Link>
                </div>
            </div>
            <Separator />
        </div>
    )
}