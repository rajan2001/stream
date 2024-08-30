import { Navbar } from "@/components/Custom/Navbar";

export default function HomeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Navbar />
            <div className=" pt-20">
                {children}
            </div>
        </>
    );
}
