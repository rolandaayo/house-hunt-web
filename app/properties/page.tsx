"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  MapPin,
  Bed,
  Bath,
  Car,
  Heart,
  Share,
  Search,
  Filter,
  ArrowLeft,
  Grid3X3,
  List,
  Star,
  Home,
  Menu,
  X,
} from "lucide-react"

export default function PropertiesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [locationFilter, setLocationFilter] = useState("all")
  const [priceFilter, setPriceFilter] = useState("all")
  const [propertyTypeFilter, setPropertyTypeFilter] = useState("all")
  const [viewMode, setViewMode] = useState("grid")
  const [savedProperties, setSavedProperties] = useState<number[]>([])
  const [filtersOpen, setFiltersOpen] = useState(false)

  // Enhanced properties data with more details
  const properties = [
    {
      id: 1,
      title: "Luxury 2-Bedroom Apartment with Ocean View",
      location: "Lekki Phase 1",
      price: 1800000,
      type: "Apartment",
      bedrooms: 2,
      bathrooms: 2,
      parking: 1,
      images: [
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
      ],
      agent: {
        name: "Adebayo Johnson",
        rating: 4.9,
        phone: "+234 801 234 5678",
      },
      featured: true,
      description:
        "Stunning modern apartment with panoramic ocean views, premium finishes, and world-class amenities in the heart of Lekki.",
      amenities: ["Swimming Pool", "Gym", "24/7 Security", "Parking", "WiFi", "Generator"],
      yearBuilt: 2022,
      size: "120 sqm",
      furnished: true,
      availability: "Immediate",
      rating: 4.8,
      reviews: 24,
    },
    {
      id: 2,
      title: "Executive 3-Bedroom Duplex",
      location: "Victoria Island",
      price: 4200000,
      type: "Duplex",
      bedrooms: 3,
      bathrooms: 4,
      parking: 2,
      images: ["/placeholder.svg?height=300&width=400", "/placeholder.svg?height=300&width=400"],
      agent: {
        name: "Funmi Adebola",
        rating: 4.8,
        phone: "+234 802 345 6789",
      },
      featured: true,
      description:
        "Spacious executive duplex in prime Victoria Island location with modern amenities and excellent security.",
      amenities: ["Swimming Pool", "Gym", "24/7 Security", "Parking", "Generator", "Elevator"],
      yearBuilt: 2021,
      size: "200 sqm",
      furnished: false,
      availability: "Available",
      rating: 4.7,
      reviews: 18,
    },
    {
      id: 3,
      title: "Cozy Studio Apartment for Young Professionals",
      location: "Yaba",
      price: 900000,
      type: "Studio",
      bedrooms: 1,
      bathrooms: 1,
      parking: 0,
      images: ["/placeholder.svg?height=300&width=400"],
      agent: {
        name: "Kemi Okafor",
        rating: 4.6,
        phone: "+234 803 456 7890",
      },
      featured: false,
      description:
        "Perfect studio apartment for young professionals, strategically located near business districts and universities.",
      amenities: ["WiFi", "24/7 Security", "Generator", "Laundry"],
      yearBuilt: 2020,
      size: "45 sqm",
      furnished: true,
      availability: "Available",
      rating: 4.5,
      reviews: 12,
    },
    {
      id: 4,
      title: "Family House with Beautiful Garden",
      location: "Ikeja GRA",
      price: 3200000,
      type: "House",
      bedrooms: 4,
      bathrooms: 3,
      parking: 3,
      images: ["/placeholder.svg?height=300&width=400", "/placeholder.svg?height=300&width=400"],
      agent: {
        name: "Tunde Bakare",
        rating: 4.9,
        phone: "+234 804 567 8901",
      },
      featured: true,
      description: "Spacious family home with beautiful landscaped garden in the prestigious Ikeja GRA neighborhood.",
      amenities: ["Garden", "24/7 Security", "Parking", "Generator", "Study Room"],
      yearBuilt: 2019,
      size: "250 sqm",
      furnished: false,
      availability: "Available",
      rating: 4.9,
      reviews: 31,
    },
  ]

  const filteredProperties = properties.filter((property) => {
    const matchesSearch =
      property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.location.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesLocation =
      locationFilter === "all" || property.location.toLowerCase().includes(locationFilter.toLowerCase())
    const matchesPrice =
      priceFilter === "all" ||
      (priceFilter === "under-1m" && property.price < 1000000) ||
      (priceFilter === "1m-2m" && property.price >= 1000000 && property.price <= 2000000) ||
      (priceFilter === "2m-5m" && property.price > 2000000 && property.price <= 5000000) ||
      (priceFilter === "above-5m" && property.price > 5000000)
    const matchesType = propertyTypeFilter === "all" || property.type.toLowerCase() === propertyTypeFilter.toLowerCase()

    return matchesSearch && matchesLocation && matchesPrice && matchesType
  })

  const toggleSaved = (propertyId: number) => {
    setSavedProperties((prev) =>
      prev.includes(propertyId) ? prev.filter((id) => id !== propertyId) : [...prev, propertyId],
    )
  }

  const PropertyCard = ({ property }: { property: (typeof properties)[0] }) => (
    <Card className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-200 bg-white">
      <div className="relative">
        <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
          <Image
            src={property.images[0] || "/placeholder.svg"}
            alt={property.title}
            width={400}
            height={300}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Badges */}
        <div className="absolute top-2 sm:top-3 left-2 sm:left-3 flex flex-col space-y-1 sm:space-y-2">
          {property.featured && <Badge className="bg-black text-white font-bold text-xs">Featured</Badge>}
          {property.furnished && (
            <Badge variant="secondary" className="bg-white text-black text-xs">
              Furnished
            </Badge>
          )}
        </div>

        {/* Action Buttons */}
        <div className="absolute top-2 sm:top-3 right-2 sm:right-3 flex space-x-1 sm:space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            variant="secondary"
            size="sm"
            className="p-1.5 sm:p-2 h-7 w-7 sm:h-8 sm:w-8 bg-white/90 hover:bg-white"
            onClick={() => toggleSaved(property.id)}
          >
            <Heart
              className={`h-3 w-3 sm:h-4 sm:w-4 ${savedProperties.includes(property.id) ? "fill-red-500 text-red-500" : "text-gray-600"}`}
            />
          </Button>
          <Button
            variant="secondary"
            size="sm"
            className="p-1.5 sm:p-2 h-7 w-7 sm:h-8 sm:w-8 bg-white/90 hover:bg-white"
          >
            <Share className="h-3 w-3 sm:h-4 sm:w-4 text-gray-600" />
          </Button>
        </div>

        {/* Price Badge */}
        <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3">
          <Badge className="bg-white text-black font-bold text-sm sm:text-base px-2 sm:px-3 py-1">
            ₦{property.price.toLocaleString()}/year
          </Badge>
        </div>
      </div>

      <CardContent className="p-3 sm:p-4 lg:p-6">
        <div className="mb-3 sm:mb-4">
          <h3 className="font-bold text-base sm:text-lg lg:text-xl mb-2 line-clamp-2 group-hover:text-gray-600 transition-colors">
            {property.title}
          </h3>
          <div className="flex items-center text-gray-600 text-xs sm:text-sm mb-2 sm:mb-3">
            <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 text-gray-500" />
            {property.location}
          </div>

          {/* Rating */}
          <div className="flex items-center space-x-2 mb-2 sm:mb-3">
            <div className="flex items-center">
              <Star className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 fill-current" />
              <span className="text-xs sm:text-sm font-medium ml-1">{property.rating}</span>
            </div>
            <span className="text-xs sm:text-sm text-gray-500">({property.reviews} reviews)</span>
          </div>
        </div>

        {/* Property Details */}
        <div className="flex items-center justify-between text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
          <div className="flex items-center space-x-3 sm:space-x-4">
            <div className="flex items-center">
              <Bed className="h-3 w-3 sm:h-4 sm:w-4 mr-1 text-gray-500" />
              {property.bedrooms}
            </div>
            <div className="flex items-center">
              <Bath className="h-3 w-3 sm:h-4 sm:w-4 mr-1 text-gray-500" />
              {property.bathrooms}
            </div>
            {property.parking > 0 && (
              <div className="flex items-center">
                <Car className="h-3 w-3 sm:h-4 sm:w-4 mr-1 text-gray-500" />
                {property.parking}
              </div>
            )}
          </div>
          <span className="text-xs bg-gray-100 px-2 py-1 rounded">{property.size}</span>
        </div>

        {/* Amenities */}
        <div className="mb-3 sm:mb-4">
          <div className="flex flex-wrap gap-1">
            {property.amenities.slice(0, 3).map((amenity, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {amenity}
              </Badge>
            ))}
            {property.amenities.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{property.amenities.length - 3} more
              </Badge>
            )}
          </div>
        </div>

        <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 line-clamp-2">{property.description}</p>

        {/* Agent Info & CTA */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-3 sm:pt-4 border-t space-y-3 sm:space-y-0">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-black rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">
                {property.agent.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
            </div>
            <div>
              <p className="text-xs sm:text-sm font-medium">{property.agent.name}</p>
              <div className="flex items-center">
                <Star className="h-2 w-2 sm:h-3 sm:w-3 text-yellow-400 fill-current" />
                <span className="text-xs text-gray-500 ml-1">{property.agent.rating}</span>
              </div>
            </div>
          </div>
          <Link href="/register">
            <Button size="sm" className="w-full sm:w-auto bg-black text-white hover:bg-gray-800 text-xs sm:text-sm">
              Contact Agent
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link href="/" className="mr-2 sm:mr-4">
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
            <div className="flex items-center space-x-2 sm:space-x-4">
              <Link href="/login">
                <Button variant="outline" size="sm" className="text-xs sm:text-sm">
                  Login
                </Button>
              </Link>
              <Link href="/register">
                <Button className="bg-black text-white hover:bg-gray-800 text-xs sm:text-sm" size="sm">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        {/* Enhanced Header Section */}
        <div className="mb-6 sm:mb-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-3 sm:mb-4">
            Discover Your Perfect Home
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Explore premium properties across Lagos State with verified agents ready to help you find your dream home
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
                  placeholder="Search properties, locations..."
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
            <div className="hidden md:grid md:grid-cols-6 gap-4 mb-4">
              <div className="relative md:col-span-2">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search properties, locations..."
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
                  <SelectItem value="yaba">Yaba</SelectItem>
                </SelectContent>
              </Select>

              <Select onValueChange={setPriceFilter} value={priceFilter}>
                <SelectTrigger className="h-12 border-2 focus:border-black">
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="under-1m">Under ₦1M</SelectItem>
                  <SelectItem value="1m-2m">₦1M - ₦2M</SelectItem>
                  <SelectItem value="2m-5m">₦2M - ₦5M</SelectItem>
                  <SelectItem value="above-5m">Above ₦5M</SelectItem>
                </SelectContent>
              </Select>

              <Select onValueChange={setPropertyTypeFilter} value={propertyTypeFilter}>
                <SelectTrigger className="h-12 border-2 focus:border-black">
                  <SelectValue placeholder="Property Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="apartment">Apartment</SelectItem>
                  <SelectItem value="house">House</SelectItem>
                  <SelectItem value="duplex">Duplex</SelectItem>
                  <SelectItem value="studio">Studio</SelectItem>
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
                    <SelectItem value="yaba">Yaba</SelectItem>
                  </SelectContent>
                </Select>

                <Select onValueChange={setPriceFilter} value={priceFilter}>
                  <SelectTrigger className="h-12 border-2 focus:border-black">
                    <SelectValue placeholder="Price Range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Prices</SelectItem>
                    <SelectItem value="under-1m">Under ₦1M</SelectItem>
                    <SelectItem value="1m-2m">₦1M - ₦2M</SelectItem>
                    <SelectItem value="2m-5m">₦2M - ₦5M</SelectItem>
                    <SelectItem value="above-5m">Above ₦5M</SelectItem>
                  </SelectContent>
                </Select>

                <Select onValueChange={setPropertyTypeFilter} value={propertyTypeFilter}>
                  <SelectTrigger className="h-12 border-2 focus:border-black">
                    <SelectValue placeholder="Property Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="apartment">Apartment</SelectItem>
                    <SelectItem value="house">House</SelectItem>
                    <SelectItem value="duplex">Duplex</SelectItem>
                    <SelectItem value="studio">Studio</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            {/* View Mode Toggle and Results Count */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
              <p className="text-xs sm:text-sm text-gray-600">
                Showing {filteredProperties.length} of {properties.length} properties
              </p>
              <div className="flex items-center space-x-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="bg-black text-white hover:bg-gray-800"
                >
                  <Grid3X3 className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="bg-black text-white hover:bg-gray-800"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Properties Grid */}
        <div
          className={`grid gap-4 sm:gap-6 lg:gap-8 ${
            viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
          }`}
        >
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {filteredProperties.length === 0 && (
          <div className="text-center py-12 sm:py-16">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Home className="h-10 w-10 sm:h-12 sm:w-12 text-gray-400" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">No properties found</h3>
            <p className="text-gray-500 text-base sm:text-lg mb-4 sm:mb-6">Try adjusting your search criteria</p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("")
                setLocationFilter("all")
                setPriceFilter("all")
                setPropertyTypeFilter("all")
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
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Ready to Find Your Dream Home?</h2>
                <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                  Join thousands of satisfied customers who found their perfect home through our platform. Pay just
                  ₦1,000 to unlock direct access to all our verified agents!
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
                  <Link href="/agents">
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg border-2 border-white text-white hover:bg-white hover:text-black"
                    >
                      Meet Our Agents
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
