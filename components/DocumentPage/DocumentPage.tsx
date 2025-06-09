"use client"

import TitleInput from "@/components/common/TitleInput"
import ContentInput from "@/components/common/ContentInput"
import useEditor from "@/hooks/useEditor"

export default function DocumentPage() {
  const { title, setTitle, content, setContent, contentRef, handleTitleKeyDown, handleContentKeyDown } = useEditor()

  return (
    <div className="min-h-screen bg-[#191919] text-gray-300">
      <div className="max-w-4xl mx-auto px-8 py-16">
        <div className="mb-8">
          <TitleInput
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onKeyDown={handleTitleKeyDown}
          />
        </div>

        <div className="space-y-4">
          <ContentInput
            ref={contentRef}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            onKeyDown={handleContentKeyDown}
          />
        </div>
      </div>
    </div>
  )
}