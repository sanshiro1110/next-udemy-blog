import { signOut } from "@/auth"
import { Button } from "@/components/ui/button"
import { Session } from "next-auth"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Setting({ session }: { session: Session }) {
  const handleLogout = async () => {
    "use server"
    await signOut({ redirectTo: "/login" })
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="ghost" className="font-medium" />}>{session.user?.name}</DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
          ログアウト
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
