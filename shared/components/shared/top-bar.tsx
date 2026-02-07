import { getCategories } from "@/shared/lib/get-categories";

import Link from "next/link";
import React from "react"
import { Container } from "./container";

interface Props {
  className?: string;
  categories?: any[]
}

export const TopBar: React.FC<Props> = async () => {

  const categories = await getCategories();
  console.log(categories, "categories")

  return (
    <Container className="flex items-center justify-between">
      <nav className="flex items-center justify-between">
        {categories.map(({ id, name }) => (
          <a className="py-5 text-[16px] text-black font-semibold mx-2"
            key={id}
            href={`/#${name}`}
          >
            {name}
          </a>
        ))}
      </nav>
      <div>Lorem</div>
    </Container>
  )
}