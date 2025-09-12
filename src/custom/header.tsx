import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import {Avatar,AvatarImage,AvatarFallback} from "@/components/ui/avatar"

export default function Header(){
    return(
        <div className="w-full shadow-sm bg-gray-200">
            <div className="mx-auto flex justify-between p-4">
                {/*logo*/}
                <div className="font-bold text-xl">My Portfolio</div>
                {/*navigation*/}
                <div className="flex items-center space-x-8">
                    <Link href="/">Home</Link>
                    <Separator orientation="vertical" />
                    <Link href="/about">About</Link>
                    <Separator orientation="vertical" />
                    <Link href="/projects">Projects</Link>
                    <Separator orientation="vertical" />
                    <Link href="/contact">Contact</Link>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>AK</AvatarFallback>
                    </Avatar>
                </div>
            </div>
            <Separator />
        </div>
    )
}