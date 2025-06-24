"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageCircle, Users, Home, Settings, Bell, TrendingUp, Calendar, MapPin, Heart, Menu, X } from "lucide-react"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [notifications, setNotifications] = useState(3)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Mock data with more realistic information
  const userStats = {
    activeChats: 5,
    connectedAgents: 8,
    propertiesViewed: 24,
    savedProperties: 12,
    profileCompletion: 85,
  }

  const recentChats = [
    {
      id: 1,
      agent: "Adebayo Johnson",
      lastMessage:
        "I found 3 perfect apartments in Lekki that match your budget. Would you like to schedule a viewing?",
      time: "2 min ago",
      unread: 2,
      avatar: "/placeholder.svg?height=40&width=40",
      online: true,
      propertyCount: 3,
    },
    {
      id: 2,
      agent: "Funmi Adebola",
      lastMessage: "The property viewing is confirmed for tomorrow at 2 PM. I'll send you the location details.",
      time: "1 hour ago",
      unread: 0,
      avatar: "/placeholder.svg?height=40&width=40",
      online: true,
      propertyCount: 1,
    },
    {
      id: 3,
      agent: "Kemi Okafor",
      lastMessage: "Great news! The landlord accepted your offer. Let's proceed with the documentation.",
      time: "3 hours ago",
      unread: 1,
      avatar: "/placeholder.svg?height=40&width=40",
      online: false,
      propertyCount: 0,
    },
  ]

  const recommendedProperties = [
    {
      id: 1,
      title: "Luxury 2BR Apartment",
      location: "Lekki Phase 1",
      price: 1800000,
      image: "/placeholder.svg?height=120&width=200",
      bedrooms: 2,
      bathrooms: 2,
      agent: "Adebayo Johnson",
      matchScore: 95,
      saved: false,
    },
    {
      id: 2,
      title: "Modern Studio",
      location: "Victoria Island",
      price: 1200000,
      image: "/placeholder.svg?height=120&width=200",
      bedrooms: 1,
      bathrooms: 1,
      agent: "Funmi Adebola",
      matchScore: 88,
      saved: true,
    },
  ]

  const upcomingViewings = [
    {
      id: 1,
      property: "Luxury 2BR Apartment",
      agent: "Adebayo Johnson",
      date: "Tomorrow",
      time: "2:00 PM",
      location: "Lekki Phase 1",
    },
    {
      id: 2,
      property: "Modern Family House",
      agent: "Kemi Okafor",
      date: "Friday",
      time: "10:00 AM",
      location: "Ikeja GRA",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <Image
                src="/logo.png"
                alt="House Hunt Made Easy"
                width={200}
                height={60}
                className="h-8 sm:h-10 w-auto"
              />
              <Badge
                variant="secondary"
                className="hidden sm:inline-flex bg-gray-100 text-gray-800 border-gray-200 text-xs"
              >
                Premium Member
              </Badge>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="relative">
                <Button variant="ghost" size="sm" className="relative">
                  <Bell className="h-4 w-4" />
                  {notifications > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {notifications}
                    </span>
                  )}
                </Button>
              </div>
              <Button variant="ghost" size="sm">
                <Settings className="h-4 w-4" />
              </Button>
              <div className="flex items-center space-x-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium hidden lg:inline">John Doe</span>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button variant="ghost" size="sm" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t py-4">
              <div className="flex flex-col space-y-3">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/placeholder.svg?height=40&width=40" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">John Doe</p>
                    <Badge variant="secondary" className="bg-gray-100 text-gray-800 text-xs">
                      Premium Member
                    </Badge>
                  </div>
                </div>
                <div className="flex items-center space-x-4 pt-2">
                  <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                    <Bell className="h-4 w-4" />
                    <span className="text-sm">Notifications</span>
                    {notifications > 0 && (
                      <Badge variant="destructive" className="text-xs">
                        {notifications}
                      </Badge>
                    )}
                  </Button>
                  <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                    <Settings className="h-4 w-4" />
                    <span className="text-sm">Settings</span>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        {/* Welcome Section */}
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="mb-4 sm:mb-0">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black">Welcome back, John! 👋</h1>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg mt-1 sm:mt-2">
                Let's find your perfect home today
              </p>
            </div>
            <div className="text-left sm:text-right">
              <p className="text-xs sm:text-sm text-gray-500">Profile Completion</p>
              <div className="flex items-center space-x-2 mt-1">
                <Progress value={userStats.profileCompletion} className="w-20 sm:w-24" />
                <span className="text-xs sm:text-sm font-medium">{userStats.profileCompletion}%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8">
          <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-3 sm:p-4 lg:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-xs sm:text-sm font-medium">Active Chats</p>
                  <p className="text-xl sm:text-2xl lg:text-3xl font-bold">{userStats.activeChats}</p>
                  <p className="text-gray-500 text-xs mt-1 hidden sm:block">+2 from yesterday</p>
                </div>
                <div className="bg-gray-100 rounded-full p-2 sm:p-3">
                  <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-3 sm:p-4 lg:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-xs sm:text-sm font-medium">Connected Agents</p>
                  <p className="text-xl sm:text-2xl lg:text-3xl font-bold">{userStats.connectedAgents}</p>
                  <p className="text-gray-500 text-xs mt-1 hidden sm:block">Across Lagos</p>
                </div>
                <div className="bg-gray-100 rounded-full p-2 sm:p-3">
                  <Users className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-3 sm:p-4 lg:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-xs sm:text-sm font-medium">Properties Viewed</p>
                  <p className="text-xl sm:text-2xl lg:text-3xl font-bold">{userStats.propertiesViewed}</p>
                  <p className="text-gray-500 text-xs mt-1 hidden sm:block">This month</p>
                </div>
                <div className="bg-gray-100 rounded-full p-2 sm:p-3">
                  <Home className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-3 sm:p-4 lg:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-xs sm:text-sm font-medium">Saved Properties</p>
                  <p className="text-xl sm:text-2xl lg:text-3xl font-bold">{userStats.savedProperties}</p>
                  <p className="text-gray-500 text-xs mt-1 hidden sm:block">In wishlist</p>
                </div>
                <div className="bg-gray-100 rounded-full p-2 sm:p-3">
                  <Heart className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4 sm:space-y-6">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 bg-gray-100">
            <TabsTrigger
              value="overview"
              className="data-[state=active]:bg-white data-[state=active]:shadow-sm text-xs sm:text-sm"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="chats"
              className="data-[state=active]:bg-white data-[state=active]:shadow-sm text-xs sm:text-sm"
            >
              Chats
            </TabsTrigger>
            <TabsTrigger
              value="properties"
              className="data-[state=active]:bg-white data-[state=active]:shadow-sm text-xs sm:text-sm"
            >
              Properties
            </TabsTrigger>
            <TabsTrigger
              value="schedule"
              className="data-[state=active]:bg-white data-[state=active]:shadow-sm text-xs sm:text-sm"
            >
              Schedule
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
              {/* Recent Chats */}
              <div className="lg:col-span-2">
                <Card className="shadow-sm border border-gray-200 bg-white">
                  <CardHeader className="pb-3 sm:pb-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center space-x-2 text-base sm:text-lg">
                        <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" />
                        <span>Recent Conversations</span>
                      </CardTitle>
                      <Link href="/chat">
                        <Button variant="outline" size="sm" className="hover:bg-gray-50 text-xs sm:text-sm">
                          View All
                        </Button>
                      </Link>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 sm:space-y-4">
                      {recentChats.map((chat) => (
                        <div
                          key={chat.id}
                          className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors border border-gray-100"
                        >
                          <div className="relative">
                            <Avatar className="h-10 w-10 sm:h-12 sm:w-12">
                              <AvatarImage src={chat.avatar || "/placeholder.svg"} />
                              <AvatarFallback>
                                {chat.agent
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            {chat.online && (
                              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-1">
                              <p className="text-sm font-semibold text-gray-900 truncate">{chat.agent}</p>
                              <div className="flex items-center space-x-2">
                                <p className="text-xs text-gray-500">{chat.time}</p>
                                {chat.unread > 0 && (
                                  <Badge
                                    variant="destructive"
                                    className="text-xs h-5 w-5 rounded-full p-0 flex items-center justify-center"
                                  >
                                    {chat.unread}
                                  </Badge>
                                )}
                              </div>
                            </div>
                            <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">{chat.lastMessage}</p>
                            {chat.propertyCount > 0 && (
                              <div className="mt-2">
                                <Badge variant="secondary" className="text-xs">
                                  {chat.propertyCount} properties shared
                                </Badge>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Recommended Properties */}
              <div>
                <Card className="shadow-sm border border-gray-200 bg-white">
                  <CardHeader className="pb-3 sm:pb-4">
                    <CardTitle className="flex items-center space-x-2 text-base sm:text-lg">
                      <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" />
                      <span>Perfect Matches</span>
                    </CardTitle>
                    <CardDescription className="text-xs sm:text-sm">
                      Properties that match your preferences
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 sm:space-y-4">
                      {recommendedProperties.map((property) => (
                        <div
                          key={property.id}
                          className="border rounded-xl p-3 sm:p-4 hover:shadow-sm transition-shadow"
                        >
                          <div className="flex items-center justify-between mb-3">
                            <Badge variant="secondary" className="bg-gray-100 text-gray-800 text-xs">
                              {property.matchScore}% match
                            </Badge>
                            <Button variant="ghost" size="sm" className="p-1">
                              <Heart
                                className={`h-4 w-4 ${property.saved ? "fill-red-500 text-red-500" : "text-gray-400"}`}
                              />
                            </Button>
                          </div>
                          <Image
                            src={property.image || "/placeholder.svg"}
                            alt={property.title}
                            width={200}
                            height={120}
                            className="w-full h-20 sm:h-24 object-cover rounded-lg mb-3"
                          />
                          <h3 className="font-semibold text-sm mb-1">{property.title}</h3>
                          <div className="flex items-center text-xs text-gray-600 mb-2">
                            <MapPin className="h-3 w-3 mr-1" />
                            {property.location}
                          </div>
                          <p className="text-sm sm:text-base font-bold text-black mb-2">
                            ₦{property.price.toLocaleString()}/year
                          </p>
                          <div className="flex items-center justify-between text-xs text-gray-500">
                            <span>
                              {property.bedrooms} bed • {property.bathrooms} bath
                            </span>
                            <span className="truncate ml-2">by {property.agent}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4">
                      <Link href="/properties">
                        <Button variant="outline" className="w-full text-xs sm:text-sm">
                          View All Properties
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="schedule" className="space-y-4 sm:space-y-6">
            <Card className="shadow-sm border border-gray-200 bg-white">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-base sm:text-lg">
                  <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" />
                  <span>Upcoming Property Viewings</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 sm:space-y-4">
                  {upcomingViewings.map((viewing) => (
                    <div
                      key={viewing.id}
                      className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 p-3 sm:p-4 border rounded-xl hover:bg-gray-50 transition-colors"
                    >
                      <div className="bg-gray-100 rounded-full p-3 w-fit">
                        <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-sm sm:text-base">{viewing.property}</h3>
                        <p className="text-xs sm:text-sm text-gray-600">with {viewing.agent}</p>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-1 text-xs sm:text-sm text-gray-500">
                          <span>
                            {viewing.date} at {viewing.time}
                          </span>
                          <span className="flex items-center">
                            <MapPin className="h-3 w-3 mr-1" />
                            {viewing.location}
                          </span>
                        </div>
                      </div>
                      <Button size="sm" variant="outline" className="text-xs sm:text-sm w-full sm:w-auto">
                        Reschedule
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
