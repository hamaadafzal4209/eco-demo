"use client"

import { useState, useRef, useEffect } from "react"
import { X, Check, Globe } from 'lucide-react'
import { cn } from "@/lib/utils"

type Language = {
  code: string
  name: string
  nativeName: string
  flag: string
}

const languages: Language[] = [
  {
    code: "zh-CN",
    name: "Chinese (Simplified)",
    nativeName: "中文 (简体)",
    flag: "/placeholder.svg?height=20&width=30"
  },
  {
    code: "en-US",
    name: "English (American)",
    nativeName: "English (American)",
    flag: "/placeholder.svg?height=20&width=30"
  },
  {
    code: "es-LA",
    name: "Spanish (Latin American)",
    nativeName: "Español (latinoamericano)",
    flag: "/placeholder.svg?height=20&width=30"
  },
  {
    code: "fr",
    name: "French",
    nativeName: "Français",
    flag: "/placeholder.svg?height=20&width=30"
  },
  {
    code: "de",
    name: "German",
    nativeName: "Deutsch",
    flag: "/placeholder.svg?height=20&width=30"
  }
]

type Tab = "language" | "region"

export function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(languages[1]) // Default to English
  const [activeTab, setActiveTab] = useState<Tab>("language")
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleLanguageSelect = (language: Language) => {
    setSelectedLanguage(language)
    setIsOpen(false)
    // Here you would typically update the app's language context/state
  }

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center h-10 w-10 rounded-md focus:outline-none hover:bg-gray-100"
        aria-label="Select language"
      >
       <Globe className="w-5 h-5 cursor-pointer" />
      </button>

      {/* Dropdown Panel */}
      {isOpen && (
        <div className="absolute -right-32 sm:right-0 mt-2 w-80 sm:w-96 md:w-md bg-white rounded-md shadow-lg z-50 border">
          {/* Header with tabs and close button */}
          <div className="flex justify-between items-center border-b">
            <div className="flex">
              <button
                className={cn(
                  "px-6 py-4 text-sm font-medium cursor-pointer hover:bg-gray-100",
                  activeTab === "language" 
                    ? "border-b-2 border-black" 
                    : "text-gray-500 hover:text-black"
                )}
                onClick={() => setActiveTab("language")}
              >
                LANGUAGE
              </button>
              <button
                className={cn(
                  "px-6 py-4 text-sm font-medium cursor-pointer hover:bg-gray-100",
                  activeTab === "region" 
                    ? "border-b-2 border-black" 
                    : "text-gray-500 hover:text-black"
                )}
                onClick={() => setActiveTab("region")}
              >
                REGION
              </button>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-4 hover:bg-gray-100 cursor-pointer"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            {activeTab === "language" && (
              <>
                <h3 className="text-lg font-medium mb-4">
                 {" Choose the language you'd like to browse the site in"}
                </h3>
                <div className="max-h-80 overflow-y-auto">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      className="w-full text-left py-4 px-2 border-b flex justify-between items-center hover:bg-gray-50"
                      onClick={() => handleLanguageSelect(language)}
                    >
                      <div>
                        <div className="font-medium">{language.nativeName}</div>
                        <div className="text-sm text-gray-500">{language.name}</div>
                      </div>
                      {selectedLanguage.code === language.code && (
                        <Check className="h-5 w-5" />
                      )}
                    </button>
                  ))}
                </div>
              </>
            )}
            {activeTab === "region" && (
              <div className="p-4">
                <h3 className="text-lg font-medium mb-4">
                  Select your region
                </h3>
                <p className="text-gray-500">
                  Region selection options would appear here.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
