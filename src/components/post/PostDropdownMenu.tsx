"use client"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Link from "next/link"
import DeletePostDialog from "./DeletePostDialog"
import { useState } from "react"

export default function PostDropdownMenu({ postId }: { postId: string }) {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false) //ドロップダウン開閉フラグ
  const [showDeleteDialog, setShowDeleteDialog] = useState(false) //削除モーダル開閉フラグ
  const handleDeleteDialogChange = (open: boolean) => {
    setShowDeleteDialog(open)
    if (!open) {
      setIsDropDownOpen(false)
    }
  }
  return (
    <>
      <DropdownMenu open={isDropDownOpen} onOpenChange={setIsDropDownOpen}>
        <DropdownMenuTrigger className="px-2 py-1 border rounded-md">⋯</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <Link href={`/manage/posts/${postId}`} className="cursor-pointer">
              詳細
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={`/manage/posts/${postId}/edit`} className="cursor-pointer">
              編集
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem
            className="text-red-600 cursor-pointer"
            onClick={() => {
              setIsDropDownOpen(false)
              setShowDeleteDialog(true)
            }}
          >
            削除
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      {showDeleteDialog && <DeletePostDialog postId={postId} isOpen={showDeleteDialog} onOpenChange={handleDeleteDialogChange} />}
    </>
  )
}
