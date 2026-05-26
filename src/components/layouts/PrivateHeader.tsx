import Link from "next/link"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu"
import { auth } from "@/auth"
import Setting from "./Setting"

export default async function PublicHeader() {
  const session = await auth()
  if (!session?.user?.email) throw new Error("無効なセッション")

  return (
    <div>
      <header className="border-b bg-blue-200">
        <div className="container mx-auto px-3 py-4 flex items-center justify-between">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink render={<Link href="/dashboard" className="font-bold text-xl" />}>管理ページ</NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Setting session={session} />
        </div>
      </header>
    </div>
  )
}
