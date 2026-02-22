"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"

const navItems = [
    { name: "Home", href: "/" },
    { name: "Solutions", href: "/solutions" },
    { name: "Pricing", href: "/pricing" },
    { name: "Models", href: "/models" },
    { name: "Playground", href: "/playground" },
    { name: "Demo", href: "/demo" },
    { name: "Compare", href: "/compare" },
]

export default function Navbar() {
    const pathname = usePathname()

    return (
        <section className="sticky top-0 z-50 w-full bg-linear-to-t from-[#096e29] to-[#096e29]/90
         text-white border-b-[0.1px] border-white/50">
            <div className="w-11/12 mx-auto px-6 h-16 flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-3">
                    <div>
                        <Image src="/assets/logo.png" alt="Neverstop AI Logo" width={32} height={32} />
                    </div>
                    <span className="text-xl font-semibold tracking-tight">
                        Neverstop <span className="text-green-300">AI</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-8">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href

                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`relative text-base transition-all duration-300
                                ${isActive ? "text-white text-lg font-semibold" : " hover:text-white"}
                                after:absolute after:left-0 after:-bottom-1 after:h-0.5
                                after:bg-linear-to-r after:from-[#13C6DD] after:to-[#6DDA8F]
                                after:transition-all after:duration-300
                                ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}
                            `}
                            >
                                {item.name}
                            </Link>
                        )
                    })}
                </nav>

                {/* Right Section Desktop */}
                <div className="hidden lg:flex items-center">
                    <Button
                        className="bg-white text-black rounded-lg px-6 hover:bg-white/90"
                    >
                        Book Demo
                    </Button>
                </div>

                {/* Mobile Menu */}
                <div className="lg:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="text-white">
                                <Menu />
                            </Button>
                        </SheetTrigger>

                        <SheetContent
                            side="right"
                            className="bg-green-800 text-white border-none"
                        >
                            <div className="flex flex-col gap-6 mt-10">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="text-lg font-medium hover:text-green-300 transition"
                                    >
                                        {item.name}
                                    </Link>
                                ))}

                                <Button className="mt-6 bg-white text-black rounded-full">
                                    Book Demo
                                </Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>

            </div>
        </section>
    )
}