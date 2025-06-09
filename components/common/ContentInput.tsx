import { forwardRef } from "react"
import type { KeyboardEvent, ChangeEvent } from "react"

interface Props {
  value: string
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
  onKeyDown: (e: KeyboardEvent<HTMLTextAreaElement>) => void
}

const ContentInput = forwardRef<HTMLTextAreaElement, Props>(({
  value,
  onChange,
  onKeyDown
}, ref) => (
  <textarea
    ref={ref}
    value={value}
    onChange={onChange}
    onKeyDown={onKeyDown}
    className="w-full min-h-[200px] bg-transparent border-none outline-none text-gray-300 text-base leading-relaxed resize-none placeholder-gray-600"
    placeholder="入力して、AIはスペースキーを、コマンドは半角の「/」を押す..."
    style={{ height: "auto" }}
    onInput={(e) => {
      const target = e.target as HTMLTextAreaElement
      target.style.height = "auto"
      target.style.height = `${target.scrollHeight}px`
    }}
  />
))

ContentInput.displayName = "ContentInput"
export default ContentInput