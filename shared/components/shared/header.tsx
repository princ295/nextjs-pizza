import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ProfileButton } from "./profile-button";
import { Button } from "../ui/button";
import { ShoppingCart } from "lucide-react";
import { Container } from "./container";
import { cn } from "@/shared/lib/utils";


interface Props {
  hasSearch?: boolean;
  hasCart?: boolean;
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {

  return (
    <header className={cn(className)}>
      <Container className="flex items-center justify-between py-6">
        {/* logo */}
        <Link href="/">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="Logo" width={35} height={35} className=""/>
            <div>
              <h1 className="text-2xl uppercase font-black">Next Pizza</h1>
              <p className="text-sm text-black font-semibold">the #1 chain in India</p>
              <p className="text-sm text-orange-400 leading-3 font-semibold">it couldn't be more delicious</p>
            </div>
          </div>
        </Link>

        {/* serach */}

        {/* card */}
        <div className="flex items-center gap-2">
          <ProfileButton />

          <Button variant='outline' className="rounded-xl cursor-pointer">
            <ShoppingCart size={16} />
          </Button>

        </div>

      </Container>
    </header>
  )
}