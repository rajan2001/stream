import Image from "next/image"
import Link from "next/link"

export const Logo = () => {
    return <Link href={'/'}>
        <div className="flex  gap-x-4 items-center hover:opacity-75 transition">
            <div className="h-16 w-16 mr-8 lg:mr-0">
                <Image src={"/logo.png"} width={100} height={100} alt="logo" className=" object-cover" />
            </div>
            <div className="font-bold hidden lg:block">
                STREAM
                <p className="font-light text-xs">Let&apos;s connect</p>
            </div>
        </div>
    </Link>
}