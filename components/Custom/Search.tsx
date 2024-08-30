"use client"
import { SearchIcon, X } from "lucide-react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { useCallback, useState } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

export const Search = () => {
    const [value, setVaule] = useState('')
    const router = useRouter()
    const query = useSearchParams()
    const pathname = usePathname()


    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(query.toString())
            params.set(name, value)
            return params.toString()
        },
        [query]
    )

    const handleSubmit = (e: any) => {
        e.preventDefault()
        router.push(pathname + '?' + createQueryString('term', value))
    }

    return <form className=" relative flex items-center lg:w-[400px] w-full" onSubmit={handleSubmit}>
        <Input value={value} onChange={(e) => setVaule(e.target.value)} placeholder="Search" className="rounded-r-none  bg-black/30 border-0 focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 " />
        {value && <X className="h-5 w-5 cursor-pointer hover:opacity-75 transition absolute top-2 right-14" onClick={() => setVaule('')} />}
        <Button type="submit" variant={"secondary"} size={"sm"} className="bg-transparent">
            <SearchIcon className="h-5 w-5 text-muted-foreground" />
        </Button>
    </form>
}