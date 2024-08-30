import { SignInButton, UserButton } from "@clerk/nextjs"
import { currentUser } from "@clerk/nextjs/server"
import { Button } from "../ui/button"
import Link from "next/link"
import { Clapperboard } from "lucide-react"

export const Action = async () => {
    const user = await currentUser()
    return <div className="flex items-center justify-end gap-x-4 ml-4 lg:ml-0">
        {
            !user ? <SignInButton>
                <Button variant={"primary"}>Login</Button>
            </SignInButton> : <>
                <Link href={"/u/item"} className="flex items-center text-sm hover:opacity-75">
                    <Clapperboard className="h-5 w-5 mr-2" />
                    <span className="hidden lg:block">Dashboard</span>
                </Link>
                <UserButton />
            </>

        }

    </div>
}