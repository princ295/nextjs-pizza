import { prisma } from "@/prisma/prisma-clients"



export const getCategories = async () => {

  const categories = await prisma.category.findMany()

  return categories
}