"use client"

import type React from "react"
import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"

interface FooterAccordionProps {
  title: string
  children: React.ReactNode
}

export function FooterAccordion({ title, children }: FooterAccordionProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-400 md:border-none">
      {/* Always show title */}
      <div className="pb-4">
        {/* Mobile: toggleable heading */}
        <div
          className="flex items-center justify-between text-left md:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="font-semibold">{title}</span>
          {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </div>

        {/* Desktop: static title */}
        <div className="hidden md:block font-semibold text-lg text-black">
          {title}
        </div>
      </div>

      {/* Accordion Content */}
      <div className={cn("hidden md:block", isOpen && "block")}>
        <div className="pb-4 md:pb-0">{children}</div>
      </div>
    </div>
  )
}
