"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, CreditCard, Shield, CheckCircle } from "lucide-react"

export default function PaymentPage() {
  const [isProcessing, setIsProcessing] = useState(false)

  const handlePayment = async () => {
    setIsProcessing(true)

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      // Redirect to success page
      window.location.href = "/payment/success"
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/register" className="flex items-center">
              <ArrowLeft className="h-5 w-5 mr-2" />
              <Image src="/logo.png" alt="House Hunt Made Easy" width={200} height={60} className="h-12 w-auto" />
            </Link>
          </div>
        </div>
      </header>

      <div className="py-12">
        <div className="max-w-2xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Payment Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CreditCard className="h-5 w-5 mr-2" />
                  Payment Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b">
                    <span>Platform Access Fee</span>
                    <span className="font-semibold">₦1,000</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span>Processing Fee</span>
                    <span className="font-semibold">₦0</span>
                  </div>
                  <div className="flex justify-between items-center py-2 text-lg font-bold">
                    <span>Total</span>
                    <span>₦1,000</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-2">What You Get:</h3>
                  <ul className="text-sm text-green-800 space-y-1">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Unlimited access to verified agents
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Direct chat with agents
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Property recommendations
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      24/7 customer support
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card>
              <CardHeader>
                <CardTitle>Complete Your Payment</CardTitle>
                <CardDescription>Secure payment powered by Paystack</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-center p-8 border-2 border-dashed border-gray-300 rounded-lg">
                    <div className="text-center">
                      <CreditCard className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600 mb-4">
                        Click the button below to complete your payment securely with Paystack
                      </p>
                      <Button onClick={handlePayment} disabled={isProcessing} className="w-full" size="lg">
                        {isProcessing ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Processing...
                          </>
                        ) : (
                          "Pay ₦1,000 with Paystack"
                        )}
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                    <Shield className="h-4 w-4" />
                    <span>Secured by 256-bit SSL encryption</span>
                  </div>

                  <div className="text-xs text-gray-500 text-center">
                    By completing this payment, you agree to our Terms of Service and Privacy Policy. This is a one-time
                    payment that gives you lifetime access to our platform.
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
