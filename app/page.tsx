import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { EmailForm } from "@/components/email-form"
import { AlertTriangle, Briefcase, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Landing() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link className="flex items-center justify-center" href="#">
          <Globe className="h-6 w-6 text-blue-500" />
          <span className="ml-2 text-lg font-bold">Cloud Busy</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-blue-500 transition-colors" href="#about">
            About
          </Link>
          <Link className="text-sm font-medium hover:text-blue-500 transition-colors" href="#services">
            Services
          </Link>
          <Link className="text-sm font-medium hover:text-blue-500 transition-colors" href="#team">
            Team
          </Link>
          <Link className="text-sm font-medium hover:text-blue-500 transition-colors" href="#contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                    Masters of Tech Solutions and Innovation
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Empowering businesses with cutting-edge technology solutions. From disaster response to job market
                    innovation, we build tomorrow's digital infrastructure.
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center md:gap-8">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold text-blue-500">50+</h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Projects Delivered</p>
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold text-blue-500">100+</h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Happy Clients</p>
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold text-blue-500">24/7</h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Support Available</p>
                  </div>
                </div>
              </div>
              <Image
                alt="Modern office building"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:aspect-square"
                height="550"
                src="/splash1.jpg"
                width="550"
              />
            </div>
          </div>
        </section>
        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Key Solutions</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Innovative technology solutions that make a difference in people's lives
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Card className="group hover:shadow-lg transition-all duration-200">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <AlertTriangle className="h-12 w-12 text-blue-500 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-bold">Disaster Alert & Response</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Real-time disaster monitoring and response system helping communities stay safe and prepared
                  </p>
                </CardContent>
              </Card>
              <Card className="group hover:shadow-lg transition-all duration-200">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Briefcase className="h-12 w-12 text-blue-500 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-bold">Job Repository System</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Comprehensive job matching platform connecting talented professionals with opportunities
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="team" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Expert Team</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Meet the minds behind our innovative solutions
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              {[
                { img: "profile1.jpg", role: "Technical Lead", title: "Senior Engineer" },
                { img: "profile2.jpg", role: "Solutions Architect", title: "Principal Engineer" },
                { img: "profile3.jpg", role: "Product Manager", title: "Senior Manager" },
              ].map((member, i) => (
                <Card key={i} className="group hover:shadow-lg transition-all duration-200">
                  <CardContent className="flex flex-col items-center space-y-4 p-6">
                    <div className="aspect-square overflow-hidden rounded-full">
                      <Image
                        alt={member.title}
                        className="object-cover group-hover:scale-105 transition-transform duration-200"
                        height="200"
                        src={`/${member.img}`}
                        width="200"
                      />
                    </div>
                    <h3 className="text-xl font-bold">{member.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{member.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Ready to Transform Your Business?</h2>
                <p className="max-w-[600px] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Let's discuss how our solutions can help your organization thrive in the digital age.
                </p>
              </div>
              <EmailForm />
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Cloud Busy. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:text-blue-500 transition-colors" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:text-blue-500 transition-colors" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}