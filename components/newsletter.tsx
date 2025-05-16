"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Check, ArrowRight } from "lucide-react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Basic email validation
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address")
      return
    }

    // Reset error state
    setError("")

    // Simulate API call
    setTimeout(() => {
      setSubscribed(true)
      // Reset after 3 seconds for demo purposes
      setTimeout(() => {
        setSubscribed(false)
        setEmail("")
      }, 3000)
    }, 500)
  }

  return (
    <section className="bg-gray-50 py-12 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">SIGN UP FOR UPDATES</h2>
          <p className="text-gray-600">Be the first to know about new arrivals, sales and exclusive offers</p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`h-12 ${error ? "border-red-500" : ""}`}
                disabled={subscribed}
              />
              {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            </div>
            <Button type="submit" className="h-12 px-6" disabled={subscribed}>
              {subscribed ? (
                <span className="flex items-center">
                  <Check className="h-5 w-5 mr-2" />
                  Subscribed
                </span>
              ) : (
                <span className="flex items-center">
                  Subscribe
                  <ArrowRight className="h-4 w-4 ml-2" />
                </span>
              )}
            </Button>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
          </p>
        </form>
      </div>
    </section>
  )
}
