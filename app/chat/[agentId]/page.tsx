"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowLeft,
  Send,
  Phone,
  Video,
  MoreVertical,
  Star,
  Paperclip,
  ImageIcon,
  MapPin,
  Bed,
  Bath,
  Car,
  Calendar,
  Menu,
  X,
} from "lucide-react"

interface Message {
  id: number
  sender: "user" | "agent"
  content: string
  timestamp: string
  type: "text" | "image" | "property" | "appointment"
  data?: any
}

export default function ChatPage({ params }: { params: { agentId: string } }) {
  const [message, setMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "agent",
      content: "Hello! 👋 I'm excited to help you find your perfect home. What type of property are you looking for?",
      timestamp: "10:30 AM",
      type: "text",
    },
    {
      id: 2,
      sender: "user",
      content: "Hi! I'm looking for a 2-bedroom apartment in Lekki, budget around ₦1.5M annually.",
      timestamp: "10:32 AM",
      type: "text",
    },
    {
      id: 3,
      sender: "agent",
      content:
        "Perfect! I have several great options in that range. Let me share a few properties that match your criteria.",
      timestamp: "10:33 AM",
      type: "text",
    },
    {
      id: 4,
      sender: "agent",
      content: "",
      timestamp: "10:34 AM",
      type: "property",
      data: {
        title: "Modern 2BR Apartment",
        location: "Lekki Phase 1",
        price: 1500000,
        bedrooms: 2,
        bathrooms: 2,
        parking: 1,
        image: "/placeholder.svg?height=200&width=300",
        description: "Beautiful modern apartment with ocean view",
      },
    },
    {
      id: 5,
      sender: "agent",
      content: "Would you like to schedule a viewing for this property? I'm available tomorrow afternoon.",
      timestamp: "10:35 AM",
      type: "text",
    },
  ])

  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Enhanced agent data
  const agent = {
    id: params.agentId,
    name: "Adebayo Johnson",
    specialization: "Luxury Apartments",
    location: "Lekki, Victoria Island",
    rating: 4.9,
    reviews: 156,
    avatar: "/placeholder.svg?height=40&width=40",
    verified: true,
    online: true,
    responseTime: "< 30 mins",
    completedDeals: 234,
    lastSeen: "Active now",
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!message.trim()) return

    const newMessage: Message = {
      id: messages.length + 1,
      sender: "user",
      content: message,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      type: "text",
    }

    setMessages((prev) => [...prev, newMessage])
    setMessage("")
    setIsTyping(true)

    // Simulate agent response with typing indicator
    setTimeout(() => {
      setIsTyping(false)
      const responses = [
        "That sounds great! Let me check my available properties for you.",
        "I have some excellent options that match your criteria. Would you like me to share them?",
        "Perfect! I can arrange a viewing for you. When would be convenient?",
        "Thank you for that information. I'll get back to you with some great options shortly!",
      ]

      const agentResponse: Message = {
        id: messages.length + 2,
        sender: "agent",
        content: responses[Math.floor(Math.random() * responses.length)],
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        type: "text",
      }
      setMessages((prev) => [...prev, agentResponse])
    }, 2000)
  }

  const PropertyMessage = ({ data }: { data: any }) => (
    <Card className="max-w-xs sm:max-w-sm border-0 shadow-lg overflow-hidden">
      <div className="relative">
        <Image
          src={data.image || "/placeholder.svg"}
          alt={data.title}
          width={300}
          height={200}
          className="w-full h-32 sm:h-40 object-cover"
        />
        <Badge className="absolute top-2 left-2 bg-black text-white text-xs">₦{data.price.toLocaleString()}/year</Badge>
      </div>
      <CardContent className="p-3 sm:p-4">
        <h3 className="font-semibold text-sm sm:text-base mb-2">{data.title}</h3>
        <div className="flex items-center text-xs sm:text-sm text-gray-600 mb-2">
          <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
          {data.location}
        </div>
        <div className="flex items-center space-x-3 sm:space-x-4 text-xs sm:text-sm text-gray-600 mb-3">
          <div className="flex items-center">
            <Bed className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
            {data.bedrooms}
          </div>
          <div className="flex items-center">
            <Bath className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
            {data.bathrooms}
          </div>
          <div className="flex items-center">
            <Car className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
            {data.parking}
          </div>
        </div>
        <p className="text-xs sm:text-sm text-gray-600 mb-3">{data.description}</p>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
          <Button size="sm" className="flex-1 bg-black text-white hover:bg-gray-800 text-xs">
            View Details
          </Button>
          <Button size="sm" variant="outline" className="flex-1 text-xs">
            Schedule Tour
          </Button>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link href="/agents" className="mr-2 sm:mr-4">
                <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
              <Image src="/logo.png" alt="House Hunt Made Easy" width={200} height={60} className="h-6 sm:h-8 w-auto" />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button variant="ghost" size="sm" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Enhanced Chat Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-3 sm:py-4 shadow-sm">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 sm:space-x-4 flex-1 min-w-0">
              <div className="relative">
                <Avatar className="h-10 w-10 sm:h-12 sm:w-12 border-2 border-white shadow-lg">
                  <AvatarImage src={agent.avatar || "/placeholder.svg"} />
                  <AvatarFallback className="bg-black text-white font-bold text-sm">
                    {agent.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                {agent.online && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full border-2 border-white"></div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-2 mb-1">
                  <h2 className="font-bold text-sm sm:text-base lg:text-lg truncate">{agent.name}</h2>
                  {agent.verified && (
                    <Badge className="bg-gray-100 text-gray-800 border-gray-200 text-xs w-fit">Verified</Badge>
                  )}
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-xs sm:text-sm text-gray-600 space-y-1 sm:space-y-0">
                  <span className="truncate">{agent.specialization}</span>
                  <div className="flex items-center space-x-1">
                    <Star className="h-3 w-3 text-yellow-400 fill-current" />
                    <span>{agent.rating}</span>
                    <span>({agent.reviews})</span>
                  </div>
                </div>
                <div className="flex items-center space-x-1 text-xs text-gray-500 mt-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-green-600 font-medium">{agent.lastSeen}</span>
                  <span>• Responds in {agent.responseTime}</span>
                </div>
              </div>
            </div>

            {/* Desktop Action Buttons */}
            <div className="hidden md:flex items-center space-x-2">
              <Button variant="outline" size="sm" className="hover:bg-gray-50">
                <Phone className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="hover:bg-gray-50">
                <Video className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="hover:bg-gray-50">
                <Calendar className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="hover:bg-gray-50">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Mobile Action Buttons */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pt-4 border-t">
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" className="flex-1 hover:bg-gray-50">
                  <Phone className="h-4 w-4 mr-2" />
                  Call
                </Button>
                <Button variant="outline" size="sm" className="flex-1 hover:bg-gray-50">
                  <Video className="h-4 w-4 mr-2" />
                  Video
                </Button>
                <Button variant="outline" size="sm" className="flex-1 hover:bg-gray-50">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Enhanced Messages */}
      <div className="flex-1 overflow-y-auto bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-4 sm:py-6">
          <div className="space-y-4 sm:space-y-6">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div className="flex items-end space-x-2 sm:space-x-3 max-w-xs sm:max-w-sm lg:max-w-md">
                  {msg.sender === "agent" && (
                    <Avatar className="h-6 w-6 sm:h-8 sm:w-8 mb-1">
                      <AvatarImage src={agent.avatar || "/placeholder.svg"} />
                      <AvatarFallback className="text-xs bg-black text-white">
                        {agent.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                  )}
                  <div className="flex flex-col">
                    <div
                      className={`px-3 sm:px-4 py-2 sm:py-3 rounded-2xl shadow-sm ${
                        msg.sender === "user"
                          ? "bg-black text-white rounded-br-sm"
                          : "bg-white border border-gray-200 text-gray-800 rounded-bl-sm"
                      }`}
                    >
                      {msg.type === "text" && <p className="text-xs sm:text-sm leading-relaxed">{msg.content}</p>}
                      {msg.type === "property" && <PropertyMessage data={msg.data} />}
                    </div>
                    <p
                      className={`text-xs mt-1 ${msg.sender === "user" ? "text-right text-gray-500" : "text-left text-gray-500"}`}
                    >
                      {msg.timestamp}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-end space-x-2 sm:space-x-3">
                  <Avatar className="h-6 w-6 sm:h-8 sm:w-8 mb-1">
                    <AvatarImage src={agent.avatar || "/placeholder.svg"} />
                    <AvatarFallback className="text-xs bg-black text-white">
                      {agent.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-sm px-3 sm:px-4 py-2 sm:py-3 shadow-sm">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        </div>
      </div>

      {/* Enhanced Message Input */}
      <div className="bg-white border-t border-gray-200 px-4 py-3 sm:py-4 shadow-lg">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSendMessage} className="flex items-center space-x-2 sm:space-x-3">
            <Button type="button" variant="outline" size="sm" className="hover:bg-gray-50 hidden sm:flex">
              <Paperclip className="h-4 w-4" />
            </Button>
            <Button type="button" variant="outline" size="sm" className="hover:bg-gray-50 hidden sm:flex">
              <ImageIcon className="h-4 w-4" />
            </Button>
            <div className="flex-1 relative">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="pr-12 h-10 sm:h-12 border-2 focus:border-black rounded-full text-sm"
              />
              <Button
                type="submit"
                disabled={!message.trim()}
                className="absolute right-1 top-1 h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-black hover:bg-gray-800 disabled:opacity-50"
                size="sm"
              >
                <Send className="h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
            </div>
          </form>

          {/* Quick Actions */}
          <div className="flex flex-wrap items-center gap-2 mt-3">
            <Button variant="outline" size="sm" className="text-xs hover:bg-gray-50">
              Schedule Viewing
            </Button>
            <Button variant="outline" size="sm" className="text-xs hover:bg-gray-50">
              Request Property List
            </Button>
            <Button variant="outline" size="sm" className="text-xs hover:bg-gray-50">
              Ask About Pricing
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
