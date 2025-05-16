"use client"

import { useState } from "react"
import Link from "next/link"
import { X, ChevronRight } from 'lucide-react'
import { cn } from "@/lib/utils"

type Category = {
  name: string
  href: string
  subcategories?: { name: string; href: string; highlight?: boolean }[]
}

const categories: Category[] = [
  {
    name: "WOMENSWEAR",
    href: "/womenswear",
    subcategories: [
      { name: "Womenswear homepage", href: "/womenswear" },
      { name: "Members' sale", href: "/womenswear/sale", highlight: true },
      { name: "New in", href: "/womenswear/new-in" },
      { name: "Vacation", href: "/womenswear/vacation" },
      { name: "Brands", href: "/womenswear/brands" },
      { name: "Clothing", href: "/womenswear/clothing" },
      { name: "Shoes", href: "/womenswear/shoes" },
      { name: "Bags", href: "/womenswear/bags" },
      { name: "Accessories", href: "/womenswear/accessories" },
      { name: "Watches", href: "/womenswear/watches" },
      { name: "Homeware", href: "/womenswear/homeware" },
    ],
  },
  {
    name: "MENSWEAR",
    href: "/menswear",
    subcategories: [
      { name: "Menswear homepage", href: "/menswear" },
      { name: "Members' sale", href: "/menswear/sale", highlight: true },
      { name: "New in", href: "/menswear/new-in" },
      { name: "Vacation", href: "/menswear/vacation" },
      { name: "Brands", href: "/menswear/brands" },
      { name: "Clothing", href: "/menswear/clothing" },
      { name: "Shoes", href: "/menswear/shoes" },
      { name: "Bags", href: "/menswear/bags" },
      { name: "Accessories", href: "/menswear/accessories" },
      { name: "Watches", href: "/menswear/watches" },
      { name: "Homeware", href: "/menswear/homeware" },
    ],
  },
  {
    name: "KIDSWEAR",
    href: "/kidswear",
    subcategories: [
      { name: "Kidswear homepage", href: "/kidswear" },
      { name: "Members' sale", href: "/kidswear/sale", highlight: true },
      { name: "New in", href: "/kidswear/new-in" },
      { name: "Brands", href: "/kidswear/brands" },
      { name: "Clothing", href: "/kidswear/clothing" },
      { name: "Shoes", href: "/kidswear/shoes" },
      { name: "Accessories", href: "/kidswear/accessories" },
    ],
  },
]

interface MobileSidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileSidebar({ isOpen, onClose }: MobileSidebarProps) {
  const [activeCategory, setActiveCategory] = useState("MENSWEAR")

  const handleCategoryClick = (categoryName: string) => {
    setActiveCategory(categoryName)
  }

  const activeCategoryData = categories.find((cat) => cat.name === activeCategory)

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 bg-white transform transition-transform duration-300 ease-in-out",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <Link href="/" className="flex items-center" onClick={onClose}>
            <span className="font-bold text-xl">FF</span>
          </Link>
          <button onClick={onClose} className="p-2 hover:bg-gray-100/75 cursor-pointer rounded-md w-10 h-10" aria-label="Close menu">
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Category Tabs */}
        <div className="flex border-b">
          {categories.map((category) => (
            <button
              key={category.name}
              className={cn(
                "px-4 py-3 text-sm font-medium flex-1 text-center hover:bg-gray-100/75 cursor-pointer",
                activeCategory === category.name
                  ? "border-b-2 border-black text-black"
                  : "text-gray-500"
              )}
              onClick={() => handleCategoryClick(category.name)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Subcategories */}
        <div className="flex-1 overflow-y-auto pb-28">
          {activeCategoryData?.subcategories?.map((subcategory) => (
            <div
              key={subcategory.name}
              className="flex items-center justify-between px-4 py-4 border-b cursor-pointer hover:bg-gray-100"
              onClick={onClose}
            >
              <span className={subcategory.highlight ? "text-red-500" : ""}>
                {subcategory.name}
              </span>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
