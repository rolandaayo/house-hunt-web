import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, MessageCircle, Shield, Star } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Image
                src="/logo.png"
                alt="House Hunt Made Easy"
                width={200}
                height={60}
                className="h-8 sm:h-10 md:h-12 w-auto"
              />
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <Link href="/login">
                <Button variant="outline" size="sm" className="text-xs sm:text-sm">
                  Login
                </Button>
              </Link>
              <Link href="/register">
                <Button size="sm" className="bg-black text-white hover:bg-gray-800 text-xs sm:text-sm">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="mobile-spacing bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 sm:mb-6 leading-tight">
              Find Your Perfect
              <span className="block mt-2">Dream Home</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
              Connect with Lagos' most trusted real estate agents. One payment, unlimited access to your future home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <Link href="/register">
                <Button
                  size="lg"
                  className="w-full sm:w-auto px-6 sm:px-12 py-3 sm:py-4 text-sm sm:text-lg bg-black text-white hover:bg-gray-800 font-bold"
                >
                  Start Your Journey - ₦1,000
                </Button>
              </Link>
              <Link href="/properties">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg border-2 border-black text-black hover:bg-gray-50"
                >
                  Explore Properties
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mobile-spacing bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mobile-margin">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6">
              Why Choose <span className="text-gray-600">House Hunt Made Easy?</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the future of property hunting with our innovative platform
            </p>
          </div>

          <div className="responsive-grid-3 gap-4 sm:gap-6 md:gap-8">
            <Card className="card-hover border border-gray-200 bg-white">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto mb-4 sm:mb-6 w-16 sm:w-20 h-16 sm:h-20 bg-black rounded-2xl flex items-center justify-center">
                  <Users className="h-6 sm:h-8 md:h-10 w-6 sm:w-8 md:w-10 text-white" />
                </div>
                <CardTitle className="text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3">Verified Agents</CardTitle>
                <CardDescription className="text-sm sm:text-base md:text-lg text-gray-600">
                  Connect with licensed and verified real estate professionals across Lagos State
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="card-hover border border-gray-200 bg-white">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto mb-4 sm:mb-6 w-16 sm:w-20 h-16 sm:h-20 bg-black rounded-2xl flex items-center justify-center">
                  <MessageCircle className="h-6 sm:h-8 md:h-10 w-6 sm:w-8 md:w-10 text-white" />
                </div>
                <CardTitle className="text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3">Instant Chat</CardTitle>
                <CardDescription className="text-sm sm:text-base md:text-lg text-gray-600">
                  Real-time messaging with agents, share preferences, and get immediate responses
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="card-hover border border-gray-200 bg-white">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto mb-4 sm:mb-6 w-16 sm:w-20 h-16 sm:h-20 bg-black rounded-2xl flex items-center justify-center">
                  <Shield className="h-6 sm:h-8 md:h-10 w-6 sm:w-8 md:w-10 text-white" />
                </div>
                <CardTitle className="text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3">One-Time Payment</CardTitle>
                <CardDescription className="text-sm sm:text-base md:text-lg text-gray-600">
                  Pay once, access forever. No hidden fees, no subscriptions, just results
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="mobile-spacing bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mobile-margin">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4">How It Works</h2>
          </div>

          <div className="responsive-grid gap-4 sm:gap-6 md:gap-8">
            <div className="text-center">
              <div className="bg-black text-white rounded-full w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center mx-auto mb-3 sm:mb-4 text-lg sm:text-xl font-bold">
                1
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">Sign Up</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Create your account and tell us what you're looking for
              </p>
            </div>

            <div className="text-center">
              <div className="bg-black text-white rounded-full w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center mx-auto mb-3 sm:mb-4 text-lg sm:text-xl font-bold">
                2
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">Pay ₦1,000</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Make a one-time payment to unlock access to all agents
              </p>
            </div>

            <div className="text-center">
              <div className="bg-black text-white rounded-full w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center mx-auto mb-3 sm:mb-4 text-lg sm:text-xl font-bold">
                3
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">Connect</h3>
              <p className="text-sm sm:text-base text-gray-600">Browse and connect with verified agents in your area</p>
            </div>

            <div className="text-center">
              <div className="bg-black text-white rounded-full w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center mx-auto mb-3 sm:mb-4 text-lg sm:text-xl font-bold">
                4
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">Find Home</h3>
              <p className="text-sm sm:text-base text-gray-600">Chat with agents and find your perfect home</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mobile-spacing bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mobile-margin">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4">What Our Users Say</h2>
          </div>

          <div className="responsive-grid-3 gap-4 sm:gap-6 md:gap-8">
            <Card className="border border-gray-200">
              <CardContent className="pt-4 sm:pt-6">
                <div className="flex items-center mb-3 sm:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                  "Found my dream apartment in Lekki within a week! The agents were professional and helpful."
                </p>
                <div className="font-semibold text-sm sm:text-base">- Adebayo O.</div>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="pt-4 sm:pt-6">
                <div className="flex items-center mb-3 sm:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                  "Best ₦1,000 I've ever spent! Connected with 5 different agents and got multiple options."
                </p>
                <div className="font-semibold text-sm sm:text-base">- Funmi A.</div>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="pt-4 sm:pt-6">
                <div className="flex items-center mb-3 sm:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                  "The chat feature made everything so easy. No more endless phone calls!"
                </p>
                <div className="font-semibold text-sm sm:text-base">- Kemi S.</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mobile-spacing bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Ready to Find Your Dream Home?</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto">
            Join thousands of satisfied customers who found their perfect home through our platform
          </p>
          <Link href="/register">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-100 px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold"
            >
              Get Started Now - ₦1,000 Only
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="col-span-1 sm:col-span-2 md:col-span-1">
              <Image
                src="/logo.png"
                alt="House Hunt Made Easy"
                width={200}
                height={60}
                className="h-8 sm:h-10 md:h-12 w-auto mb-3 sm:mb-4 filter invert"
              />
              <p className="text-sm sm:text-base text-gray-400">
                Your trusted partner in finding the perfect home in Lagos State.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h3>
              <ul className="space-y-1 sm:space-y-2">
                <li>
                  <Link href="/properties" className="text-sm sm:text-base text-gray-400 hover:text-white">
                    Properties
                  </Link>
                </li>
                <li>
                  <Link href="/agents" className="text-sm sm:text-base text-gray-400 hover:text-white">
                    Agents
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-sm sm:text-base text-gray-400 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm sm:text-base text-gray-400 hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Support</h3>
              <ul className="space-y-1 sm:space-y-2">
                <li>
                  <Link href="/help" className="text-sm sm:text-base text-gray-400 hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-sm sm:text-base text-gray-400 hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-sm sm:text-base text-gray-400 hover:text-white">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contact Info</h3>
              <div className="space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-400">
                <p>Lagos, Nigeria</p>
                <p>info@househuntmadeeasy.com</p>
                <p>+234 800 123 4567</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-sm sm:text-base text-gray-400">
            <p>&copy; 2024 House Hunt Made Easy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
