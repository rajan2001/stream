
export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="h-screen w-screen flex items-center justify-center">
            {children}
        </div>
    );
}
