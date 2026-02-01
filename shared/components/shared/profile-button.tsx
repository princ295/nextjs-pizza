'use client'
import { User } from "lucide-react"
import { Button } from "../ui/button"


export const ProfileButton = () => {


  return (
    <div>
       <Button onClick={() => {}} variant="outline" className="flex items-center gap-1 cursor-pointer rounded-xl">
          <User size={16} />
          Login
        </Button>
    </div>
  )
}