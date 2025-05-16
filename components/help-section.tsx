import type React from "react"
import { FolderIcon as Hanger, HelpCircle, MessageSquare } from "lucide-react"

interface HelpCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

function HelpCard({ icon, title, description }: HelpCardProps) {
  return (
    <div className="flex flex-col p-6 border rounded-lg hover:shadow-md transition-shadow duration-300">
      <div className="mb-4 text-gray-800">{icon}</div>
      <h3 className="text-lg font-semibold uppercase mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

export function HelpSection() {
  return (
    <section className="py-12 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <HelpCard
            icon={<Hanger className="h-6 w-6" />}
            title="HOW TO SHOP"
            description="Your guide to shopping and placing orders"
          />
          <HelpCard
            icon={<HelpCircle className="h-6 w-6" />}
            title="FAQS"
            description="Your questions answered"
          />
          <HelpCard
            icon={<MessageSquare className="h-6 w-6" />}
            title="NEED HELP?"
            description="Contact our global Customer Service team"
          />
        </div>
      </div>
    </section>
  )
}
