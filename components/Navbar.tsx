"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AiOutlineMenu } from "react-icons/ai";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import LoadingBar from "react-top-loading-bar";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./theme-btn";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();
  useEffect(() => {
    setProgress(20);
    setTimeout(() => {
      setProgress(40);
    }, 100);
    setTimeout(() => {
      setProgress(100);
    }, 500);
    return () => {
      setProgress(0);
    };
  }, [pathname]);

  return (
    <nav className="w-full bg-background/50 sticky top-0 border backdrop-blur shadow-lg z-10">
      <LoadingBar
        color="#6028ff"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold ">
              ZainBlog
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <Link
              href="/"
              className="font-semibold px-3 py-2 rounded-md text-sm"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="font-semibold px-3 py-2 rounded-md text-sm"
            >
              About
            </Link>
            <Link
              href="/blog"
              className=" font-semibold px-3 py-2 rounded-md text-sm"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className=" font-semibold px-3 py-2 rounded-md text-sm "
            >
              Contact
            </Link>
            <div className="flex items-center">
              <Button variant="outline" className="mx-1">
                Login
              </Button>
              <Button variant="outline" className="mx-1">
                Signup
              </Button>
              <div className="ml-4 ">
                <ModeToggle />
              </div>
            </div>
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden flex items-center">
            <div className="mx-2">
              <ModeToggle />
            </div>
            <Sheet>
              <SheetTrigger className=" hover:scale-105 transition-transform durationduration-2000 hover:font-semibold focus:outline-none">
                <AiOutlineMenu size={30} />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>ZainBlog</SheetTitle>
                  <SheetDescription>
                    <div className="md:hidden">
                      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link
                          href="/"
                          className="block  hover:scale-105 transition-transform duration-300 hovduration-200font-semibold px-3 py-2 rounded-md text-base font-medium"
                        >
                          Home
                        </Link>
                        <Link
                          href="/blog"
                          className="block  hover:scale-105 transition-transform duration-300 hovduration-200font-semibold px-3 py-2 rounded-md text-base font-medium"
                        >
                          Blog
                        </Link>
                        <Link
                          href="/contact"
                          className="block  hover:scale-105 transition-transform duration-300 hovduration-200font-semibold px-3 py-2 rounded-md text-base font-medium"
                        >
                          Contact
                        </Link>
                      </div>
                    </div>
                    <div>
                      <Button variant="outline" className="mx- text-xs">
                        Login
                      </Button>
                      <Button variant="outline" className="mx-1 text-xs">
                        Signup
                      </Button>
                    </div>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
