import { Action } from "./Actions"
import { Logo } from "./Logo"
import { Search } from "./Search"

export const Navbar = () => {
    return <div
        className="fixed h-20 top-0 z-[49] bg-[#252731] px-2 lg:px-4 flex justify-between items-center shadow-md w-full">
        <Logo />
        <Search />
        <Action />
    </div>
}