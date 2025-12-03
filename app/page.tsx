'use client'

import { ChevronDown, Search, User, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import LoadingScreen from "./loading"

export default function HouseHuntLanding() {
  return (
    <>
      <LoadingScreen />
      <div className="min-h-screen bg-white">
        {/* Top notification bar */}
        <div className="bg-[#6B46C1] text-white text-center py-3 px-4 sticky top-0 z-50">
          <span className="text-sm">
            Find your dream home with expert agents{" "}
            <a href="#" className="underline font-medium">
              Download now
            </a>
          </span>
        </div>

        {/* Header */}
        <header className="bg-white border-b border-gray-100 px-4 py-4 sticky top-12 z-40 shadow-sm">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <img src="/logo.png" alt="House Hunt Logo" className="h-8 w-auto" />
            </div>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <div className="flex items-center space-x-1 text-gray-700 hover:text-black cursor-pointer">
                <span className="text-sm font-medium">Find Agents</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <div className="flex items-center space-x-1 text-gray-700 hover:text-black cursor-pointer">
                <span className="text-sm font-medium">Browse Properties</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <div className="flex items-center space-x-1 text-gray-700 hover:text-black cursor-pointer">
                <span className="text-sm font-medium">How it Works</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <span className="text-gray-700 hover:text-black cursor-pointer text-sm font-medium">Market Analysis</span>
              <div className="flex items-center space-x-1 text-gray-700 hover:text-black cursor-pointer">
                <span className="text-sm font-medium">Home Buying Resources</span>
                <ChevronDown className="w-4 h-4" />
              </div>
            </nav>

            {/* Right side buttons */}
            <div className="flex items-center space-x-4">
              <Search className="w-5 h-5 text-gray-600 cursor-pointer" />
              <User className="w-5 h-5 text-gray-600 cursor-pointer" />
              <Button
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 rounded-full px-4 py-2 text-sm font-medium bg-transparent"
              >
                Web Platform
              </Button>
              <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-4 py-2 text-sm font-medium">
                Download the App
              </Button>
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="bg-[#F3F0FF]">
          <div className="max-w-6xl mx-auto px-4 py-8 text-center">
            {/* Main heading with mascot */}
            <div className="mb-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#2D2D2D] leading-tight mb-4">
                House hunting made easy with expert agents{" "}
                <img
                  src="/mini-chompy.svg"
                  alt="House Hunt mascot"
                  className="inline-block w-16 h-10 md:w-20 md:h-12 ml-2 align-middle"
                />
              </h1>
            </div>

            {/* Description text */}
            <div className="mb-8">
              <p className="text-lg md:text-xl text-[#5A5A5A] leading-relaxed max-w-4xl mx-auto font-normal">
                Finding your dream home should never be overwhelming. House Hunt connects you with experienced real estate agents who work with you to find the perfect property—without any hidden fees or complicated processes.
              </p>
            </div>

            {/* Download button */}
            <div className="mb-8">
              <Button className="bg-[#A78BFA] hover:bg-[#9F7AEA] text-[#2D2D2D] font-semibold text-lg px-8 py-4 rounded-full flex items-center space-x-2 mx-auto shadow-lg">
                <span>Download the App</span>
                <Download className="w-5 h-5" />
              </Button>
            </div>
          </div>



          {/* Get immediate access section */}
          <div className="bg-[#F5F5F7] px-4 py-16">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Left content */}
                <div className="space-y-6">
                  <h2 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] leading-tight">
                    Get immediate access to expert real estate agents
                  </h2>
                  <p className="text-lg text-[#5A5A5A] leading-relaxed">
                    You make the choice—connect with agents in your area or browse properties nationwide. Then enjoy personalized house hunting support as soon as you sign up. See how easy it is to find your perfect home?
                  </p>
                  <Button className="bg-[#2D2D2D] hover:bg-[#1A1A1A] text-white font-semibold text-lg px-8 py-4 rounded-full">
                    Let's find your home!
                  </Button>
                </div>

                {/* Right phone mockup */}
                <div className="flex justify-center lg:justify-end">
                  <div className="relative">
                    {/* iPhone frame */}
                    <div className="w-80 h-[600px] bg-black rounded-[3rem] p-2 shadow-2xl">
                      <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                        {/* Notch */}
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>

                        {/* Screen content */}
                        <div className="pt-12 px-4 h-full flex flex-col">
                          {/* Agent selection section */}
                          <div className="space-y-3 mb-8">
                            {/* First agent option */}
                            <div className="flex items-center space-x-3 p-3 rounded-lg">
                              <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
                              <span className="text-gray-600">Sarah Johnson - Downtown</span>
                            </div>

                            {/* Selected agent option */}
                            <div className="flex items-center space-x-3 p-3 bg-[#A3D977] rounded-lg">
                              <div className="w-5 h-5 bg-[#4A7C59] rounded-full flex items-center justify-center">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                              </div>
                              <span className="text-[#2D2D2D] font-medium">Mike Chen - Suburban Expert</span>
                            </div>

                            {/* Third agent option */}
                            <div className="flex items-center space-x-3 p-3 rounded-lg">
                              <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
                              <span className="text-gray-600">Lisa Rodriguez - Luxury Homes</span>
                            </div>

                            {/* Choose button */}
                            <button className="w-full bg-[#A3D977] text-[#2D2D2D] font-semibold py-3 rounded-lg mt-4">
                              Choose your agent
                            </button>
                          </div>

                          {/* Messaging section */}
                          <div className="flex-1 flex flex-col justify-end space-y-4">
                            {/* Incoming message */}
                            <div className="flex justify-start">
                              <div className="bg-[#B8A9FF] text-[#2D2D2D] px-4 py-2 rounded-2xl rounded-bl-md max-w-xs">
                                Hi Michelle! I found 3 perfect homes for you 🏠
                              </div>
                            </div>

                            {/* Question */}
                            <div className="text-center text-sm text-gray-500 py-2">When can we schedule a viewing?</div>

                            {/* Outgoing message */}
                            <div className="flex justify-end">
                              <div className="bg-[#B8A9FF] text-[#2D2D2D] px-4 py-2 rounded-2xl rounded-br-md max-w-xs">
                                This weekend works! Using House Hunt
                              </div>
                            </div>

                            {/* Message input */}
                            <div className="flex items-center space-x-2 p-3 bg-gray-100 rounded-full mb-4">
                              <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
                              <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
                              <input
                                type="text"
                                placeholder="Type a message"
                                className="flex-1 bg-transparent text-sm text-gray-500 outline-none"
                                readOnly
                              />
                              <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Ready to save hundreds section */}
          <div className="bg-[#F5F5F7] px-4 py-16">
            <div className="max-w-6xl mx-auto">
              {/* Section heading */}
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] leading-tight max-w-4xl mx-auto">
                  Ready to find your dream home with our app?
                </h2>
              </div>

              {/* Three columns */}
              <div className="grid md:grid-cols-3 gap-6">
                {/* Column 1: Download app */}
                <div className="text-center space-y-4">
                  {/* Phone mockup 1 */}
                  <div className="flex justify-center">
                    <div className="w-56 h-72 bg-[#4A4A4A] rounded-3xl p-3 shadow-xl">
                      <div className="w-full h-full bg-[#B8A9FF] rounded-2xl flex items-center justify-center relative overflow-hidden">
                        {/* Download icon circle */}
                        <div className="w-24 h-24 bg-[#6B46C1] rounded-full flex items-center justify-center">
                          <div className="w-16 h-16 bg-[#2D2D2D] rounded-full flex items-center justify-center">
                            <Download className="w-8 h-8 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-[#2D2D2D]">1. Download the House Hunt app</h3>
                    <p className="text-[#5A5A5A] leading-relaxed text-sm">
                      Not to brag, but we've got over 100,000 successful home purchases for a reason. Whether you need a primary residence or investment property, we've got you covered.
                    </p>
                  </div>
                </div>

                {/* Column 2: Start talking */}
                <div className="text-center space-y-4">
                  {/* Phone mockup 2 */}
                  <div className="flex justify-center">
                    <div className="w-56 h-72 bg-[#4A4A4A] rounded-3xl p-3 shadow-xl">
                      <div className="w-full h-full bg-white rounded-2xl overflow-hidden relative">
                        {/* Header */}
                        <div className="bg-white p-4 border-b border-gray-100 flex items-center justify-between">
                          <div className="w-6 h-6 flex items-center justify-center">
                            <div className="w-4 h-4 border-l-2 border-b-2 border-gray-400 transform rotate-45"></div>
                          </div>
                          <div className="flex flex-col items-center">
                            <div className="w-8 h-8 bg-[#B8A9FF] rounded-full flex items-center justify-center mb-1">
                              <span className="text-xs font-bold text-white">MC</span>
                            </div>
                            <span className="text-xs font-medium text-[#2D2D2D]">Mike Chen</span>
                          </div>
                          <div className="flex space-x-2">
                            <div className="w-6 h-6 bg-gray-300 rounded"></div>
                            <div className="w-6 h-6 bg-gray-300 rounded"></div>
                          </div>
                        </div>

                        {/* Messages */}
                        <div className="p-4 space-y-4 flex flex-col justify-end h-full">
                          <div className="flex justify-start">
                            <div className="bg-gray-100 text-[#2D2D2D] px-3 py-2 rounded-2xl rounded-bl-md max-w-xs text-sm">
                              I found a beautiful 3BR in your preferred area!
                            </div>
                          </div>
                          <div className="flex justify-end">
                            <div className="bg-[#B8A9FF] text-[#2D2D2D] px-3 py-2 rounded-2xl rounded-br-md max-w-xs text-sm">
                              Can we schedule a viewing?
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-[#2D2D2D]">2. Connect with expert agents</h3>
                    <p className="text-[#5A5A5A] leading-relaxed text-sm">
                      Sign up and get matched with experienced real estate agents in your area. From there, personalized house hunting support is free, immediate, and all yours.
                    </p>
                  </div>
                </div>

                {/* Column 3: Go wireless */}
                <div className="text-center space-y-4">
                  {/* Phone mockup 3 */}
                  <div className="flex justify-center">
                    <div className="w-56 h-72 bg-[#4A4A4A] rounded-3xl p-3 shadow-xl">
                      <div className="w-full h-full bg-white rounded-2xl flex flex-col items-center justify-center space-y-6 p-6">
                        {/* House icon */}
                        <div className="w-20 h-20 bg-[#B8A9FF] rounded-full flex items-center justify-center">
                          <div className="w-8 h-8 text-[#2D2D2D]">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                            </svg>
                          </div>
                        </div>

                        {/* Schedule viewing button */}
                        <div className="w-full">
                          <button className="w-full bg-[#A3D977] text-[#2D2D2D] font-semibold py-3 px-6 rounded-lg flex items-center justify-center space-x-2">
                            <div className="w-5 h-5 grid grid-cols-2 gap-0.5">
                              <div className="bg-[#2D2D2D] rounded-sm"></div>
                              <div className="bg-[#2D2D2D] rounded-sm"></div>
                              <div className="bg-[#2D2D2D] rounded-sm"></div>
                              <div className="bg-[#2D2D2D] rounded-sm"></div>
                            </div>
                            <span>Schedule Viewing</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-[#2D2D2D]">3. Find your dream home</h3>
                    <p className="text-[#5A5A5A] leading-relaxed text-sm">
                      It might sound too good to be true, but it's not. Our agents unlock access to exclusive listings and provide personalized guidance, plus <span className="font-bold text-[#2D2D2D]">free market analysis</span> and negotiation support for $0/month.
                    </p>
                    <a href="#" className="inline-block text-[#2D2D2D] font-semibold underline hover:no-underline text-sm">
                      Browse Properties
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Data plan options section */}
          <div className="bg-[#F5F5F7] px-4 py-16">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Left phone mockup */}
                <div className="flex justify-center lg:justify-start">
                  <div className="relative">
                    {/* iPhone frame */}
                    <div className="w-80 h-[650px] bg-black rounded-[3rem] p-2 shadow-2xl">
                      <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                        {/* Notch */}
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>

                        {/* Screen content */}
                        <div className="pt-12 px-4 h-full flex flex-col space-y-4">
                          {/* Free Market Analysis */}
                          <div className="bg-[#B8A9FF] rounded-2xl p-4 flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                                <div className="w-4 h-4">
                                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-[#B8A9FF]">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                  </svg>
                                </div>
                              </div>
                              <div>
                                <div className="font-bold text-[#2D2D2D] text-sm">Free Market Analysis</div>
                                <div className="text-xs text-[#5A5A5A]">Property Values and Trends</div>
                              </div>
                            </div>
                            <div className="w-6 h-6 flex items-center justify-center">
                              <div className="w-1 h-1 bg-[#2D2D2D] rounded-full"></div>
                              <div className="w-1 h-1 bg-[#2D2D2D] rounded-full mx-1"></div>
                              <div className="w-1 h-1 bg-[#2D2D2D] rounded-full"></div>
                            </div>
                          </div>

                          {/* Get Premium Features */}
                          <div className="bg-[#A3D977] rounded-2xl p-4 flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 bg-[#4A7C59] rounded-full flex items-center justify-center">
                                <div className="w-3 h-3 bg-white rounded-full"></div>
                              </div>
                              <div>
                                <div className="font-bold text-[#2D2D2D] text-sm">Get Premium Features</div>
                                <div className="text-xs text-[#2D2D2D]">Advanced Search & Alerts</div>
                              </div>
                            </div>
                            <div className="w-6 h-6 flex items-center justify-center">
                              <div className="w-4 h-4 border-l-2 border-b-2 border-[#2D2D2D] transform rotate-45"></div>
                            </div>
                          </div>

                          {/* Virtual Tour Pass */}
                          <div className="bg-[#E8E8F0] rounded-2xl p-4 flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 bg-[#B8A9FF] rounded-full flex items-center justify-center">
                                <div className="flex space-x-0.5">
                                  <div className="w-1 h-3 bg-white rounded-sm"></div>
                                  <div className="w-1 h-4 bg-white rounded-sm"></div>
                                  <div className="w-1 h-2 bg-white rounded-sm"></div>
                                  <div className="w-1 h-4 bg-white rounded-sm"></div>
                                </div>
                              </div>
                              <div>
                                <div className="font-bold text-[#2D2D2D] text-sm">Virtual Tour</div>
                                <div className="font-bold text-[#2D2D2D] text-sm">Hour Pass</div>
                              </div>
                            </div>
                          </div>

                          {/* In-Person Tour Pass */}
                          <div className="bg-[#E8E8F0] rounded-2xl p-4 flex items-center justify-between relative">
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 bg-[#B8A9FF] rounded-full flex items-center justify-center">
                                <div className="flex space-x-0.5">
                                  <div className="w-1 h-3 bg-white rounded-sm"></div>
                                  <div className="w-1 h-4 bg-white rounded-sm"></div>
                                  <div className="w-1 h-2 bg-white rounded-sm"></div>
                                  <div className="w-1 h-4 bg-white rounded-sm"></div>
                                </div>
                              </div>
                              <div>
                                <div className="font-bold text-[#2D2D2D] text-sm">In-Person Tour</div>
                                <div className="font-bold text-[#2D2D2D] text-sm">Day Pass</div>
                              </div>
                            </div>
                            <div className="absolute right-4 top-2">
                              <div className="flex items-center space-x-1">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span className="text-xs text-[#2D2D2D] font-medium">Active</span>
                              </div>
                            </div>
                          </div>

                          {/* Add button */}
                          <div className="flex justify-center py-4">
                            <div className="bg-[#A3D977] rounded-2xl p-4 flex items-center justify-center w-20 h-16 relative">
                              <div className="text-[#2D2D2D] font-bold text-2xl">+</div>
                              <div className="absolute -bottom-2 -right-2 bg-[#A3D977] rounded-lg px-2 py-1">
                                <span className="text-xs font-bold text-[#2D2D2D]">Add</span>
                              </div>
                            </div>
                          </div>

                          {/* Premium Monthly Pass */}
                          <div className="bg-[#E8B8FF] rounded-2xl p-4 flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 bg-[#B8A9FF] rounded-full flex items-center justify-center">
                                <div className="flex space-x-0.5">
                                  <div className="w-1 h-3 bg-white rounded-sm"></div>
                                  <div className="w-1 h-4 bg-white rounded-sm"></div>
                                  <div className="w-1 h-2 bg-white rounded-sm"></div>
                                  <div className="w-1 h-4 bg-white rounded-sm"></div>
                                </div>
                              </div>
                              <div>
                                <div className="font-bold text-[#2D2D2D] text-sm">Premium</div>
                                <div className="font-bold text-[#2D2D2D] text-sm">Month Pass</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right content */}
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] leading-tight">
                    Plus, get more than just your average house hunting tools
                  </h2>
                  <p className="text-base text-[#5A5A5A] leading-relaxed">
                    House hunting is unpredictable, so we've got options. Whether you're a first-time buyer or experienced investor, House Hunt lets you choose how much support you want. We don't box you in like the other platforms. Instead, we give you the flexibility to only pay for what you want, when you want it.
                  </p>
                  <Button className="bg-[#2D2D2D] hover:bg-[#1A1A1A] text-white font-semibold px-6 py-3 rounded-full">
                    Premium Features
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials section */}
          <div className="bg-[#3A3A3A] px-4 py-16">
            <div className="max-w-6xl mx-auto">
              {/* Section heading */}
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">Why people love House Hunt</h2>
              </div>

              {/* Testimonials grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Real Estate Weekly testimonial */}
                <div className="bg-white rounded-3xl p-4 space-y-4 md:col-span-2 lg:col-span-1 lg:row-span-2">
                  <div className="space-y-4">
                    <p className="text-[#2D2D2D] text-lg leading-relaxed font-medium">
                      "A revolutionary platform that may have the solution homebuyers have been seeking for years. Expert agent connections – without expensive realtor fees or complicated contracts."
                    </p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">RE</span>
                    </div>
                    <div>
                      <div className="font-bold text-[#2D2D2D] text-lg">REAL ESTATE</div>
                      <div className="font-bold text-[#2D2D2D] text-lg">WEEKLY</div>
                    </div>
                  </div>
                </div>

                {/* Micah testimonial */}
                <div className="bg-[#A8B5E8] rounded-3xl p-4 space-y-3 md:col-span-2 lg:col-span-1">
                  <div className="space-y-4">
                    <p className="text-[#2D2D2D] text-lg leading-relaxed font-medium">
                      "It works just like any real estate platform but you have no surprise fees, hidden costs, or complicated contracts to sign."
                    </p>
                    <div>
                      <div className="text-[#4A4A9E] text-3xl font-bold">Micah</div>
                      <div className="text-[#2D2D2D] text-sm font-medium">Austin, TX</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                      <div className="w-4 h-4 text-green-500">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      </div>
                      <span className="text-green-600 font-bold text-sm">Trustpilot</span>
                    </div>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-4 h-4 text-green-500">
                          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* App Store rating */}
                <div className="bg-[#4A4A9E] rounded-3xl p-4 flex flex-col justify-center items-center space-y-3 md:col-span-1 lg:col-span-1">
                  <div className="flex items-center space-x-2">
                    <span className="text-white text-4xl font-bold">4.8</span>
                    <div className="w-6 h-6 text-white">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-white text-xl font-bold">685k App Store</div>
                    <div className="text-white text-xl font-bold">Ratings</div>
                  </div>
                </div>

                {/* Forbes testimonial */}
                <div className="bg-white rounded-3xl p-4 space-y-4 md:col-span-1 lg:col-span-1">
                  <div className="space-y-4">
                    <p className="text-[#2D2D2D] text-lg leading-relaxed font-medium">
                      "It's hard to beat a monthly fee of zero dollars, but that's what you'll pay for expert agent connections and house hunting support with House Hunt."
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div className="text-[#7B2CBF] text-2xl font-bold">forbes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-[#1A1A1A] text-white">
          {/* Download App Button */}
          <div className="flex justify-center pt-12 pb-8">
            <Button className="bg-[#A78BFA] hover:bg-[#9F7AEA] text-[#2D2D2D] font-semibold text-lg px-8 py-4 rounded-full flex items-center space-x-2">
              <span>Download the App</span>
              <Download className="w-5 h-5" />
            </Button>
          </div>

          {/* Main Footer Content */}
          <div className="max-w-6xl mx-auto px-4 pb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {/* Branding & Social Media */}
              <div className="space-y-6">
                {/* Logo */}
                <div className="w-12 h-12 bg-[#A78BFA] rounded-full flex items-center justify-center">
                  <span className="text-[#2D2D2D] font-bold text-lg">HH</span>
                </div>
                
                {/* Social Media Icons */}
                <div className="flex space-x-4">
                  <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                    <span className="text-[#1A1A1A] text-xs font-bold">T</span>
                  </div>
                  <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                    <span className="text-[#1A1A1A] text-xs font-bold">I</span>
                  </div>
                  <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                    <span className="text-[#1A1A1A] text-xs font-bold">F</span>
                  </div>
                  <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                    <span className="text-[#1A1A1A] text-xs font-bold">L</span>
                  </div>
                </div>
              </div>

              {/* House Hunt Links */}
              <div className="space-y-4">
                <h3 className="text-[#A78BFA] font-semibold text-lg">House Hunt</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-[#A78BFA] transition-colors">Find Agents</a></li>
                  <li><a href="#" className="hover:text-[#A78BFA] transition-colors">Browse Properties</a></li>
                  <li><a href="#" className="hover:text-[#A78BFA] transition-colors">Market Analysis</a></li>
                  <li><a href="#" className="hover:text-[#A78BFA] transition-colors">Virtual Tours</a></li>
                  <li><a href="#" className="hover:text-[#A78BFA] transition-colors">Online Support</a></li>
                  <li><a href="#" className="hover:text-[#A78BFA] transition-colors">Accessibility</a></li>
                  <li><a href="#" className="hover:text-[#A78BFA] transition-colors">Blog</a></li>
                </ul>
              </div>

              {/* Downloads */}
              <div className="space-y-4">
                <h3 className="text-[#A78BFA] font-semibold text-lg">Downloads</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-[#A78BFA] transition-colors">Android</a></li>
                  <li><a href="#" className="hover:text-[#A78BFA] transition-colors">iOS / iPadOS</a></li>
                  <li><a href="#" className="hover:text-[#A78BFA] transition-colors">Windows</a></li>
                  <li><a href="#" className="hover:text-[#A78BFA] transition-colors">macOS</a></li>
                </ul>
              </div>

              {/* Company */}
              <div className="space-y-4">
                <h3 className="text-[#A78BFA] font-semibold text-lg">Company</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-[#A78BFA] transition-colors">About</a></li>
                  <li><a href="#" className="hover:text-[#A78BFA] transition-colors">Careers</a></li>
                  <li><a href="#" className="hover:text-[#A78BFA] transition-colors">Advertising</a></li>
                  <li><a href="#" className="hover:text-[#A78BFA] transition-colors">Press</a></li>
                  <li><a href="#" className="hover:text-[#A78BFA] transition-colors">Contact</a></li>
                  <li><a href="#" className="hover:text-[#A78BFA] transition-colors">Legal</a></li>
                </ul>
              </div>

              {/* Resources */}
              <div className="space-y-4">
                <h3 className="text-[#A78BFA] font-semibold text-lg">Resources</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-[#A78BFA] transition-colors">First-Time Homebuyer Guide</a></li>
                  <li><a href="#" className="hover:text-[#A78BFA] transition-colors">Investment Property Guide</a></li>
                  <li><a href="#" className="hover:text-[#A78BFA] transition-colors">Mortgage Calculator</a></li>
                  <li><a href="#" className="hover:text-[#A78BFA] transition-colors">Home Buying Checklist</a></li>
                  <li><a href="#" className="hover:text-[#A78BFA] transition-colors">Real Estate Market Trends</a></li>
                  <li><a href="#" className="hover:text-[#A78BFA] transition-colors">Best Real Estate Apps</a></li>
                  <li><a href="#" className="hover:text-[#A78BFA] transition-colors">Moving Guide</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Section - Copyright and Legal */}
          <div className="border-t border-gray-800">
            <div className="max-w-6xl mx-auto px-4 py-6">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="text-sm">
                  © 2025 House Hunt, Inc. All Rights Reserved.
                </div>
                <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
                  <a href="#" className="hover:text-[#A78BFA] transition-colors">Terms of Use</a>
                  <a href="#" className="hover:text-[#A78BFA] transition-colors">Privacy Policy</a>
                  <a href="#" className="hover:text-[#A78BFA] transition-colors">Privacy Settings</a>
                  <a href="#" className="hover:text-[#A78BFA] transition-colors">Candidate Privacy Policy</a>
                  <a href="#" className="hover:text-[#A78BFA] transition-colors">Fair Housing Policy</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
