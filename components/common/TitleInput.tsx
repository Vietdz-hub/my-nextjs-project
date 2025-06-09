import type { KeyboardEvent, ChangeEvent } from "react"

interface Props {
  value: string
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
  onKeyDown: (e: KeyboardEvent<HTMLTextAreaElement>) => void
}

export default function TitleInput({ value, onChange, onKeyDown }: Props) {
  return (
    <textarea
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      className="w-full text-5xl font-bold bg-transparent border-none outline-none text-gray-200 placeholder-gray-500 resize-none overflow-hidden"
      placeholder="新規ページ"
      rows={1}
      style={{ height: "auto" }}
      onInput={(e) => {
        const target = e.target as HTMLTextAreaElement
        target.style.height = "auto"
        target.style.height = `${target.scrollHeight}px`
      }}
    />
  )
}