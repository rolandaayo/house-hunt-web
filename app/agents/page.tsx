"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  MessageCircle,
  Star,
  MapPin,
  Phone,
  Mail,
  Search,
  Filter,
  ArrowLeft,
  Award,
  TrendingUp,
  Users,
  CheckCircle,
  Menu,
  X,
} from "lucide-react"

export default function AgentsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [locationFilter, setLocationFilter] = useState("all")
  const [specializationFilter, setSpecializationFilter] = useState("all")
  const [activeTab, setActiveTab] = useState("all")
  const [filtersOpen, setFiltersOpen] = useState(false)

  // Enhanced agents data
  const agents = [
    {
      id: 1,
      name: "Adebayo Johnson",
      specialization: "Luxury Apartments & High-End Properties",
      location: "Lekki, Victoria Island, Ikoyi",
      rating: 4.9,
      reviews: 156,
      avatar: "/placeholder.svg?height=120&width=120",
      verified: true,
      experience: "8 years",
      properties: 45,
      completedDeals: 234,
      responseTime: "< 30 mins",
      languages: ["English", "Yoruba"],
      description:
        "Luxury property specialist with extensive experience in high-end residential and commercial properties. Known for exceptional client service and market expertise.",
      phone: "+234 801 234 5678",
      email: "adebayo@househunt.com",
      achievements: ["Top Agent 2023", "Customer Choice Award", "5-Star Rating"],
      recentSales: [
        { property: "Luxury Penthouse", location: "Ikoyi", price: "₦15M" },
        { property: "Executive Duplex", location: "Lekki", price: "₦8M" },
      ],
      online: true,
      featured: true,
    },
    {
      id: 2,
      name: "Funmi Adebola",
      specialization: "Family Homes & Residential Properties",
      location: "Ikeja, Gbagada, Magodo",
      rating: 4.8,
      reviews: 124,
      avatar: "/placeholder.svg?height=120&width=120",
      verified: true,
      experience: "6 years",
      properties: 38,
      completedDeals: 189,
      responseTime: "< 1 hour",
      languages: ["English", "Yoruba", "Igbo"],
      description:
        "Family-focused real estate expert helping families find safe, comfortable homes in great communities. Specializes in residential properties and family neighborhoods.",
      phone: "+234 802 345 6789",
      email: "funmi@househunt.com",
      achievements: ["Family Choice Award", "Community Expert", "Trusted Agent"],
      recentSales: [
        { property: "4BR Family House", location: "Ikeja GRA", price: "₦5.2M" },
        { property: "3BR Duplex", location: "Magodo", price: "₦4.8M" },
      ],
      online: true,
      featured: true,
    },
    {
      id: 3,
      name: "Kemi Okafor",
      specialization: "Affordable Housing & First-Time Buyers",
      location: "Surulere, Yaba, Mushin",
      rating: 4.7,
      reviews: 98,
      avatar: "/placeholder.svg?height=120&width=120",
      verified: true,
      experience: "5 years",
      properties: 52,
      completedDeals: 167,
      responseTime: "< 45 mins",
      languages: ["English", "Yoruba"],
      description:
        "Dedicated to helping young professionals and first-time buyers find quality, affordable housing. Expert in budget-friendly options without compromising on quality.",
      phone: "+234 803 456 7890",
      email: "kemi@househunt.com",
      achievements: ["Rising Star 2023", "Budget Expert", "Youth Advocate"],
      recentSales: [
        { property: "2BR Apartment", location: "Surulere", price: "₦1.8M" },
        { property: "Studio Apartment", location: "Yaba", price: "₦1.2M" },
      ],
      online: false,
      featured: false,
    },
    {
      id: 4,
      name: "Tunde Bakare",
      specialization: "Commercial Properties & Investment",
      location: "Victoria Island, Ikoyi, Lagos Island",
      rating: 4.9,
      reviews: 89,
      avatar: "/placeholder.svg?height=120&width=120",
      verified: true,
      experience: "10 years",
      properties: 67,
      completedDeals: 298,
      responseTime: "< 20 mins",
      languages: ["English", "Yoruba"],
      description:
        "Commercial real estate specialist with extensive experience in office spaces, retail properties, and investment opportunities. Trusted by major corporations.",
      phone: "+234 804 567 8901",
      email: "tunde@househunt.com",
      achievements: ["Commercial Expert", "Investment Advisor", "Corporate Partner"],
      recentSales: [
        { property: "Office Complex", location: "VI", price: "₦25M" },
        { property: "Retail Space", location: "Ikoyi", price: "₦12M" },
      ],
      online: true,
      featured: true,
    },
  ]

  const filteredAgents = agents.filter((agent) => {
    const matchesSearch =
      agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      agent.specialization.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesLocation =
      locationFilter === "all" || agent.location.toLowerCase().includes(locationFilter.toLowerCase())
    const matchesSpecialization =
      specializationFilter === "all" || agent.specialization.toLowerCase().includes(specializationFilter.toLowerCase())
    const matchesTab =
      activeTab === "all" || (activeTab === "featured" && agent.featured) || (activeTab === "online" && agent.online)

    return matchesSearch && matchesLocation && matchesSpecialization && matchesTab
  })

  const AgentCard = ({ agent }: { agent: (typeof agents)[0] }) => (
    <Card className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 bg-white overflow-hidden">
      <div className="relative">
        {agent.featured && (
          <div className="absolute top-0 left-0 right-0 bg-black text-white text-center py-1 text-xs font-bold">
            ⭐ FEATURED AGENT
          </div>
        )}
        <CardHeader className={`pb-3 sm:pb-4 ${agent.featured ? "pt-6 sm:pt-8" : "pt-4 sm:pt-6"}`}>
          <div className="flex items-start space-x-3 sm:space-x-4">
            <div className="relative">
              <Avatar className="h-16 w-16 sm:h-20 sm:w-20 border-4 border-white shadow-lg">
                <AvatarImage src={agent.avatar || "/placeholder.svg"} />
                <AvatarFallback className="text-sm sm:text-lg font-bold bg-black text-white">
                  {agent.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              {agent.online && (
                <div className="absolute bottom-1 right-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full border-2 border-white"></div>
              )}
            </div>
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-2 mb-2">
                <CardTitle className="text-base sm:text-lg lg:text-xl">{agent.name}</CardTitle>
                {agent.verified && (
                  <Badge className="bg-gray-100 text-gray-800 border-gray-200 w-fit">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Verified
                  </Badge>
                )}
              </div>
              <p className="text-xs sm:text-sm text-gray-600 mb-2">{agent.specialization}</p>
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-xs sm:text-sm space-y-1 sm:space-y-0">
                <div className="flex items-center space-x-1">
                  <Star className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 fill-current" />
                  <span className="font-medium">{agent.rating}</span>
                  <span className="text-gray-500">({agent.reviews})</span>
                </div>
                <Badge variant="outline" className="text-xs w-fit">
                  {agent.experience} exp
                </Badge>
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent className="pt-0 px-3 sm:px-4 lg:px-6 pb-4 sm:pb-6">
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center text-xs sm:text-sm text-gray-600">
              <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 text-gray-500" />
              <span className="line-clamp-1">{agent.location}</span>
            </div>

            <p className="text-xs sm:text-sm text-gray-700 line-clamp-3">{agent.description}</p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-2 sm:gap-4 text-xs sm:text-sm">
              <div className="bg-gray-50 rounded-lg p-2 sm:p-3">
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 text-gray-600" />
                  <span className="text-gray-600">Properties</span>
                </div>
                <p className="font-bold text-black">{agent.properties}</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-2 sm:p-3">
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <Users className="h-3 w-3 sm:h-4 sm:w-4 text-gray-600" />
                  <span className="text-gray-600">Deals</span>
                </div>
                <p className="font-bold text-black">{agent.completedDeals}</p>
              </div>
            </div>

            {/* Response Time */}
            <div className="flex items-center justify-between text-xs sm:text-sm">
              <span className="text-gray-600">Response Time:</span>
              <Badge variant="secondary" className="bg-gray-100 text-gray-800">
                {agent.responseTime}
              </Badge>
            </div>

            {/* Languages */}
            <div>
              <p className="text-xs text-gray-500 mb-2">Languages:</p>
              <div className="flex flex-wrap gap-1">
                {agent.languages.map((lang, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {lang}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <p className="text-xs text-gray-500 mb-2">Achievements:</p>
              <div className="flex flex-wrap gap-1">
                {agent.achievements.slice(0, 2).map((achievement, index) => (
                  <Badge key={index} variant="secondary" className="text-xs bg-gray-100 text-gray-800">
                    <Award className="h-3 w-3 mr-1" />
                    {achievement}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Recent Sales */}
            <div>
              <p className="text-xs text-gray-500 mb-2">Recent Sales:</p>
              <div className="space-y-1">
                {agent.recentSales.slice(0, 2).map((sale, index) => (
                  <div key={index} className="text-xs bg-gray-50 rounded p-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{sale.property}</span>
                      <span className="text-black font-bold">{sale.price}</span>
                    </div>
                    <span className="text-gray-500">{sale.location}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 pt-3 sm:pt-4 border-t">
              <Link href={`/chat/${agent.id}`} className="flex-1">
                <Button className="w-full bg-black text-white hover:bg-gray-800 text-xs sm:text-sm">
                  <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                  Chat Now
                </Button>
              </Link>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" className="hover:bg-gray-50 flex-1 sm:flex-none">
                  <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
                <Button variant="outline" size="sm" className="hover:bg-gray-50 flex-1 sm:flex-none">
                  <Mail className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link href="/dashboard" className="mr-2 sm:mr-4">
                <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
              <Image
                src="/logo.png"
                alt="House Hunt Made Easy"
                width={200}
                height={60}
                className="h-8 sm:h-10 w-auto"
              />
            </div>
            <Link href="/dashboard">
              <Button variant="outline" className="hover:bg-gray-50 text-xs sm:text-sm">
                Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        {/* Enhanced Header Section */}
        <div className="mb-6 sm:mb-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-3 sm:mb-4">
            Meet Your Perfect Agent
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with Lagos' most trusted and verified real estate professionals
          </p>
        </div>

        {/* Enhanced Search and Filters */}
        <Card className="mb-6 sm:mb-8 shadow-sm border border-gray-200 bg-white">
          <CardContent className="p-4 sm:p-6">
            {/* Mobile Search */}
            <div className="block md:hidden mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search agents..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12 border-2 focus:border-black"
                />
              </div>
              <Button
                variant="outline"
                className="w-full mt-3 h-12 border-2 hover:border-black"
                onClick={() => setFiltersOpen(!filtersOpen)}
              >
                <Filter className="h-4 w-4 mr-2" />
                {filtersOpen ? "Hide Filters" : "Show Filters"}
                {filtersOpen ? <X className="h-4 w-4 ml-2" /> : <Menu className="h-4 w-4 ml-2" />}
              </Button>
            </div>

            {/* Desktop Filters */}
            <div className="hidden md:grid md:grid-cols-4 gap-4 mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search agents..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12 border-2 focus:border-black"
                />
              </div>

              <Select onValueChange={setLocationFilter} value={locationFilter}>
                <SelectTrigger className="h-12 border-2 focus:border-black">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="lekki">Lekki</SelectItem>
                  <SelectItem value="victoria island">Victoria Island</SelectItem>
                  <SelectItem value="ikoyi">Ikoyi</SelectItem>
                  <SelectItem value="ikeja">Ikeja</SelectItem>
                  <SelectItem value="surulere">Surulere</SelectItem>
                  <SelectItem value="yaba">Yaba</SelectItem>
                  <SelectItem value="gbagada">Gbagada</SelectItem>
                </SelectContent>
              </Select>

              <Select onValueChange={setSpecializationFilter} value={specializationFilter}>
                <SelectTrigger className="h-12 border-2 focus:border-black">
                  <SelectValue placeholder="Specialization" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Specializations</SelectItem>
                  <SelectItem value="luxury">Luxury Properties</SelectItem>
                  <SelectItem value="family">Family Homes</SelectItem>
                  <SelectItem value="affordable">Affordable Housing</SelectItem>
                  <SelectItem value="commercial">Commercial</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" className="h-12 border-2 hover:border-black">
                <Filter className="h-4 w-4 mr-2" />
                More Filters
              </Button>
            </div>

            {/* Mobile Filters (Collapsible) */}
            {filtersOpen && (
              <div className="block md:hidden space-y-3 mt-4">
                <Select onValueChange={setLocationFilter} value={locationFilter}>
                  <SelectTrigger className="h-12 border-2 focus:border-black">
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Locations</SelectItem>
                    <SelectItem value="lekki">Lekki</SelectItem>
                    <SelectItem value="victoria island">Victoria Island</SelectItem>
                    <SelectItem value="ikoyi">Ikoyi</SelectItem>
                    <SelectItem value="ikeja">Ikeja</SelectItem>
                    <SelectItem value="surulere">Surulere</SelectItem>
                    <SelectItem value="yaba">Yaba</SelectItem>
                    <SelectItem value="gbagada">Gbagada</SelectItem>
                  </SelectContent>
                </Select>

                <Select onValueChange={setSpecializationFilter} value={specializationFilter}>
                  <SelectTrigger className="h-12 border-2 focus:border-black">
                    <SelectValue placeholder="Specialization" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Specializations</SelectItem>
                    <SelectItem value="luxury">Luxury Properties</SelectItem>
                    <SelectItem value="family">Family Homes</SelectItem>
                    <SelectItem value="affordable">Affordable Housing</SelectItem>
                    <SelectItem value="commercial">Commercial</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            {/* Agent Categories Tabs */}
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-3 bg-gray-100">
                <TabsTrigger
                  value="all"
                  className="data-[state=active]:bg-white data-[state=active]:shadow-sm text-xs sm:text-sm"
                >
                  All Agents ({agents.length})
                </TabsTrigger>
                <TabsTrigger
                  value="featured"
                  className="data-[state=active]:bg-white data-[state=active]:shadow-sm text-xs sm:text-sm"
                >
                  Featured ({agents.filter((a) => a.featured).length})
                </TabsTrigger>
                <TabsTrigger
                  value="online"
                  className="data-[state=active]:bg-white data-[state=active]:shadow-sm text-xs sm:text-sm"
                >
                  Online Now ({agents.filter((a) => a.online).length})
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </CardContent>
        </Card>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filteredAgents.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>

        {filteredAgents.length === 0 && (
          <div className="text-center py-12 sm:py-16">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-10 w-10 sm:h-12 sm:w-12 text-gray-400" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">No agents found</h3>
            <p className="text-gray-500 text-base sm:text-lg mb-4 sm:mb-6">Try adjusting your search criteria</p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("")
                setLocationFilter("all")
                setSpecializationFilter("all")
                setActiveTab("all")
              }}
              className="px-6 sm:px-8"
            >
              Clear All Filters
            </Button>
          </div>
        )}

        {/* Enhanced CTA Section */}
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <Card className="bg-black text-white border-0 shadow-lg overflow-hidden relative">
            <CardContent className="relative p-8 sm:p-12 text-center">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Ready to Connect with Top Agents?</h2>
                <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                  Get instant access to Lagos' most trusted real estate professionals. Start chatting with verified
                  agents today for just ₦1,000!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/register">
                    <Button
                      size="lg"
                      className="w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-4 text-sm sm:text-lg font-bold bg-white text-black hover:bg-gray-100"
                    >
                      Get Started - ₦1,000 Only
                    </Button>
                  </Link>
                  <Link href="/properties">
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg border-2 border-white text-white hover:bg-white hover:text-black"
                    >
                      Browse Properties
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
