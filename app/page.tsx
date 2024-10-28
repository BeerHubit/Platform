'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Moon, Sun, ChevronLeft, ChevronRight } from "lucide-react"

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(false)
  const [showRegisterForm, setShowRegisterForm] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const openRegisterForm = () => {
    setShowRegisterForm(true)
  }

  const closeRegisterForm = () => {
    setShowRegisterForm(false)
  }

  const blogPosts = [
    { title: "Top 10 Craft Beers of 2024", excerpt: "Discover the best craft beers this year has to offer.", tag: "Guide", image: "/placeholder.svg?height=200&width=300" },
    { title: "Homebrewing 101: Getting Started", excerpt: "Learn the basics of brewing your own beer at home.", tag: "Tutorial", image: "/placeholder.svg?height=200&width=300" },
    { title: "Beer and Food Pairing Guide", excerpt: "Elevate your dining experience with perfect beer pairings.", tag: "Pairing", image: "/placeholder.svg?height=200&width=300" },
    { title: "The Rise of Non-Alcoholic Craft Beers", excerpt: "Exploring the growing trend of non-alcoholic craft options.", tag: "Trends", image: "/placeholder.svg?height=200&width=300" },
  ]

  const academyCourses = [
    { title: "Beer Brewing Fundamentals", description: "Master the basics of brewing your own beer at home.", image: "/placeholder.svg?height=200&width=300" },
    { title: "Advanced Hop Techniques", description: "Explore advanced hopping methods for unique flavors.", image: "/placeholder.svg?height=200&width=300" },
    { title: "Sour Beer Production", description: "Learn the art and science of crafting sour beers.", image: "/placeholder.svg?height=200&width=300" },
    { title: "Beer Tasting Mastery", description: "Develop your palate and learn to identify beer styles and flavors.", image: "/placeholder.svg?height=200&width=300" },
  ]

  const shopItems = [
    { name: "BeerHub Tasting Glass Set", price: "$24.99", image: "/placeholder.svg?height=200&width=300" },
    { name: "Craft Beer of the Month Subscription", price: "From $39.99/mo", image: "/placeholder.svg?height=200&width=300" },
    { name: "Home Brewing Starter Kit", price: "$89.99", image: "/placeholder.svg?height=200&width=300" },
    { name: "BeerHub Branded Cooler", price: "$49.99", image: "/placeholder.svg?height=200&width=300" },
  ]

  return (
    <div className={`flex flex-col min-h-screen ${darkMode ? 'dark' : ''}`}>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&display=swap');
        body {
          font-family: 'Sora', sans-serif;
        }
      `}</style>
      <header className="bg-white dark:bg-gray-900 shadow-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-yellow-500"
            >
              <path d="M17 11h1a3 3 0 0 1 0 6h-1" />
              <path d="M9 12v6" />
              <path d="M13 12v6" />
              <path d="M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 3 11 3s2 .5 3 .5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z" />
              <path d="M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8" />
            </svg>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">BeerHub</span>
          </Link>
          
          <nav className="hidden md:flex space-x-4 items-center">
            <Button variant="ghost" asChild className="text-gray-700 dark:text-gray-300">
              <Link href="/academy">Academy</Link>
            </Button>
            <Button variant="ghost" asChild className="text-gray-700 dark:text-gray-300">
              <Link href="/forum">Forum</Link>
            </Button>
            <Button variant="ghost" asChild className="text-gray-700 dark:text-gray-300">
              <Link href="/blog">Blog</Link>
            </Button>
            <Button variant="ghost" asChild className="text-gray-700 dark:text-gray-300">
              <Link href="/shop">Shop</Link>
            </Button>
            <Button variant="outline" asChild className="text-gray-700 dark:text-gray-300">
              <Link href="/login">Log In</Link>
            </Button>
            <Button variant="default" onClick={openRegisterForm} className="bg-yellow-500 text-white hover:bg-yellow-600 dark:bg-orange-400 dark:text-grey-300">
              Register
            </Button>
            <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
              {darkMode ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
              <span className="sr-only">Toggle dark mode</span>
            </Button>
          </nav>
          
          <Button variant="outline" className="md:hidden">
            Menu
          </Button>
        </div>
      </header>
      
      <main className="flex-grow bg-gray-100 dark:bg-gray-800">
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Join the Ultimate Craft Beer Community
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                Connect with fellow beer enthusiasts and discover amazing brews
              </p>
              <Button onClick={openRegisterForm} size="lg" className="bg-yellow-500 text-white hover:bg-yellow-600">
                Join Our Community
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Why Join BeerHub?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "Connect with passionate beer lovers",
                "Access exclusive beer reviews and ratings",
                "Participate in virtual tasting events",
                "Learn from expert brewers and sommeliers",
                "Discover limited edition and rare beers",
                "Share your own beer creations and get feedback"
              ].map((advantage, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <svg className="h-6 w-6 text-yellow-500 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700 dark:text-gray-300">{advantage}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">BeerHub Academy</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {academyCourses.map((course, index) => (
                <Card key={index} className="bg-white dark:bg-gray-800">
                  <Image src={course.image} alt={course.title} width={300} height={200} className="w-full h-40 object-cover" />
                  <CardHeader>
                    <CardTitle className="text-lg">{course.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400">{course.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button asChild className="bg-yellow-500 text-white hover:bg-yellow-600">
                <Link href="/academy">Explore All Courses</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Join the Conversation</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Connect with beer enthusiasts, share your experiences, and get expert advice in our community forum.
            </p>
            <Button asChild size="lg" className="bg-yellow-500 text-white hover:bg-yellow-600">
              <Link href="/forum">Visit the Forum</Link>
            </Button>
          </div>
        </section>

        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Latest from BeerHub</h2>
            <div className="relative">
              <div className="flex overflow-x-auto space-x-6 pb-4">
                {blogPosts.map((post, index) => (
                  <Card key={index} className="flex-shrink-0 w-80 bg-white dark:bg-gray-800">
                    <Image src={post.image} alt={post.title} width={300} height={200} className="w-full h-40 object-cover" />
                    <CardHeader>
                      <div className="flex justify-between items-center mb-2">
                        <Badge variant="secondary">{post.tag}</Badge>
                      </div>
                      <CardTitle className="text-lg">{post.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-400">{post.excerpt}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <Button variant="outline" size="icon" className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">BeerHub Shop</h2>
            <div className="relative">
              <div className="flex overflow-x-auto space-x-6 pb-4">
                {shopItems.map((item, index) => (
                  <Card key={index} className="flex-shrink-0 w-64 bg-white dark:bg-gray-800">
                    <Image src={item.image} alt={item.name} width={300} height={200} className="w-full h-40 object-cover" />
                    <CardHeader>
                      <CardTitle className="text-lg">{item.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg font-bold text-yellow-500">{item.price}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <Button variant="outline" size="icon" className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="text-center mt-8">
              <Button asChild className="bg-yellow-500 text-white hover:bg-yellow-600">
                <Link href="/shop">Visit the Shop</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="max-w-3xl mx-auto">
              <AccordionItem value="item-1">
                <AccordionTrigger>What is BeerHub?</AccordionTrigger>
                <AccordionContent>
                  BeerHub is an online community platform for beer enthusiasts, offering a space to connect, learn, and discover new craft beers.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How do I join the BeerHub community?</AccordionTrigger>
                <AccordionContent>
                  To join BeerHub, simply click the "Register" button at the top of the page and fill out the registration form. It's free and only takes a minute!
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>What can I learn in the BeerHub Academy?</AccordionTrigger>
                <AccordionContent>
                  The BeerHub Academy offers courses on various aspects of beer, including brewing techniques, tasting skills, and beer history. Both beginners and advanced enthusiasts can find valuable content.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>How can I participate in the BeerHub forum?</AccordionTrigger>
                <AccordionContent>
                  Once you're registered, you can access the forum to ask questions, share experiences, and engage in discussions with other beer lovers. Simply navigate to the Forum section and start or join a conversation!
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Does BeerHub sell beer?</AccordionTrigger>
                <AccordionContent>
                  While BeerHub doesn't directly sell beer, our shop offers beer-related merchandise, tasting kits, and brewing equipment. We also provide information on where to find featured craft beers.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>How can I contribute to the BeerHub blog?</AccordionTrigger>
                <AccordionContent>
                  We welcome contributions from our community! If you're interested in writing for the BeerHub blog, please contact our editorial team through the "Write for Us" link in the Blog section.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>
      
      <footer className="bg-gray-100 dark:bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">About</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-yellow-500">About Us</Link></li>
                <li><Link href="/careers" className="text-gray-600 dark:text-gray-400 hover:text-yellow-500">Careers</Link></li>
                <li><Link href="/press" className="text-gray-600 dark:text-gray-400 hover:text-yellow-500">Press</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Support</h3>
              <ul className="space-y-2">
                <li><Link href="/help" className="text-gray-600 dark:text-gray-400 hover:text-yellow-500">Help Center</Link></li>
                <li><Link href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-yellow-500">Contact Us</Link></li>
                <li><Link href="/faq" className="text-gray-600 dark:text-gray-400 hover:text-yellow-500">FAQs</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="/terms" className="text-gray-600 dark:text-gray-400 hover:text-yellow-500">Terms of Service</Link></li>
                <li><Link href="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-yellow-500">Privacy Policy</Link></li>
                <li><Link href="/cookies" className="text-gray-600 dark:text-gray-400 hover:text-yellow-500">Cookie Policy</Link></li>
              </ul>
            </div>
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-yellow-500"
                >
                  <path d="M17 11h1a3 3 0 0 1 0 6h-1" />
                  <path d="M9 12v6" />
                  <path d="M13 12v6" />
                  <path d="M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 3 11 3s2 .5 3 .5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z" />
                  <path d="M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8" />
                </svg>
                <span className="text-2xl font-bold text-gray-900 dark:text-white">BeerHub</span>
              </Link>
              <p className="text-gray-600 dark:text-gray-400">Connecting beer lovers worldwide</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
            <p className="text-gray-600 dark:text-gray-400">&copy; 2024 BeerHub. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {showRegisterForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full">
            <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Join BeerHub Community</h3>
              <Button variant="ghost" size="icon" onClick={closeRegisterForm}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </Button>
            </div>
            <form className="p-6 space-y-4">
              <div>
                <Label htmlFor="username">Username</Label>
                <Input id="username" type="text" placeholder="Enter your username" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Enter your password" />
              </div>
              <div>
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input id="confirm-password" type="password" placeholder="Confirm your password" />
              </div>
              <Button type="submit" className="w-full bg-yellow-500 text-white hover:bg-yellow-600">
                Create Account
              </Button>
            </form>
            <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700 text-center text-sm text-gray-600 dark:text-gray-300 rounded-b-lg">
              Already have an account? <Link href="/login" className="text-yellow-500 hover:underline">Log in</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}