"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Instagram, Linkedin, Facebook, Youtube } from "lucide-react"
import { usePathname } from "next/navigation"

export default function Footer() {
    const socialLinks = [
        { icon: <Instagram size={18} />, href: "#" },
        { icon: <Linkedin size={18} />, href: "#" },
        { icon: <Facebook size={18} />, href: "#" },
        { icon: <Youtube size={18} />, href: "#" },
    ]

    const footerLinks = [
        { label: "About", href: "#" },
        { label: "Terms & Conditions", href: "#" },
        { label: "Privacy Policy", href: "#" },
    ]
    const path = usePathname();
    const shouldHideCTA = path.includes('system') || path.includes('demo') || path.includes('test-drive') || path.includes('competition'); 

    return (
        <footer className="bg-black text-white px-4 md:px-6 pt-12 md:pt-20 pb-8 md:pb-10">
            <div className="w-full max-w-6xl mx-auto px-4 md:px-0">

                {/* CTA Box */}
                {!shouldHideCTA && (
                    <div
                        className="rounded-xl md:rounded-2xl border border-[#545b56] 
                     bg-[#0b160e] p-6 md:p-8  text-center mb-12 md:mb-20"
                    >
                        <h2 className="text-xl md:text-3xl font-bold leading-tight">
                            Ready To Level Up Your Business?
                        </h2>

                        <p className="text-white text-md md:text-base mt-3 md:mt-4 max-w-3xl mx-auto leading-relaxed">
                            Join the growing wave of home-service companies that have automated
                            their operations and unlocked major gains in lead conversion,
                            customer happiness, and revenue—without adding more work to their plate.
                        </p>

                        <div className="mt-6 md:mt-8 flex flex-col md:flex-row flex-wrap justify-center gap-3 md:gap-4">
                            <Button className="rounded-lg md:rounded-xl px-4 md:px-6 text-md md:text-base bg-linear-to-r from-[#13C6DD] to-[#6DDA8F] text-black hover:opacity-90 w-full md:w-auto">
                                Book Demo
                            </Button>

                            <Button
                                variant="destructive"
                                className="rounded-lg md:rounded-xl px-4 md:px-6 text-md md:text-base w-full md:w-auto"
                            >
                                Try AI
                            </Button>
                        </div>
                    </div>
                )}

                {/* Social Icons */}
                <div className="flex justify-center gap-4 md:gap-6 mb-6 md:mb-8">
                    {socialLinks.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            className="h-9 w-9 md:h-10 md:w-10 flex items-center justify-center rounded-full 
              bg-[#0b160e] border border-white/10 
              hover:border-[#6DDA8F]/40 hover:scale-105 
              transition cursor-pointer"
                        >
                            {item.icon}
                        </Link>
                    ))}
                </div>

                {/* Footer Links */}
                <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 text-xs md:text-md md:text-base text-white flex-wrap">
                    {footerLinks.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            className="hover:text-white transition text-center"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

            </div>
        </footer>
    )
}