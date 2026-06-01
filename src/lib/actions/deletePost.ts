"use server"
import { prisma } from "@/lib/prisma"
import { redirect } from "next/navigation"

// ActionStateの型定義
type ActionState = {
  success: boolean
  errors: Record<string, string[] | undefined>
}

export async function deletePost(postId: string): Promise<ActionState> {
  await prisma.post.delete({
    where: { id: postId },
  })

  redirect("/dashboard")
}
