import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, MessageCircle, Users, Home } from "lucide-react"

export default function PaymentSuccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center py-4">
            <Image src="/logo.png" alt="House Hunt Made Easy" width={200} height={60} className="h-12 w-auto" />
          </div>
        </div>
      </header>

      <div className="py-12">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="mb-8">
            <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Payment Successful!</h1>
            <p className="text-lg text-gray-600">Welcome to House Hunt Made Easy! Your account is now active.</p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>What's Next?</CardTitle>
              <CardDescription>You now have full access to our platform. Here's how to get started:</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Browse Agents</h3>
                  <p className="text-sm text-gray-600">Explore our network of verified real estate agents</p>
                </div>

                <div className="text-center">
                  <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <MessageCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Start Chatting</h3>
                  <p className="text-sm text-gray-600">Connect and chat directly with agents</p>
                </div>

                <div className="text-center">
                  <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <Home className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Find Your Home</h3>
                  <p className="text-sm text-gray-600">Discover your perfect property in Lagos</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <Link href="/dashboard">
              <Button size="lg" className="w-full md:w-auto px-8">
                Go to Dashboard
              </Button>
            </Link>
            <div>
              <Link href="/agents">
                <Button variant="outline" size="lg" className="w-full md:w-auto px-8">
                  Browse Agents
                </Button>
              </Link>
            </div>
          </div>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">Need Help?</h3>
            <p className="text-sm text-blue-800 mb-3">Our support team is here to help you get started</p>
            <div className="space-y-2 text-sm">
              <p>📧 support@househuntmadeeasy.com</p>
              <p>📞 +234 800 123 4567</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
