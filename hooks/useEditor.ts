import { useRef, useState } from "react"

export default function useEditor() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const contentRef = useRef<HTMLTextAreaElement>(null)

  const handleTitleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" || e.key === "ArrowDown") {
      e.preventDefault()
      contentRef.current?.focus()
    }
  }

  const handleContentKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "ArrowUp" && e.currentTarget.selectionStart === 0) {
      e.preventDefault()
      const titleEl = document.querySelector('textarea[placeholder="新規ページ"]') as HTMLTextAreaElement
      titleEl?.focus()
      titleEl?.setSelectionRange(titleEl.value.length, titleEl.value.length)
    }
  }

  return { title, setTitle, content, setContent, contentRef, handleTitleKeyDown, handleContentKeyDown }
}