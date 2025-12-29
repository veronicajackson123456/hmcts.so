import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Server,
  Zap,
  Smartphone,
  Grid3x3,
  GraduationCap,
  Wrench,
  TrendingUp,
  MessageSquare,
  Shield,
  Calendar,
  ChevronDown,
} from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-emerald-50 to-white py-16">
          <div className="container mx-auto px-4 max-w-6xl text-center">
            <Badge
              variant="outline"
              className="mb-6 border-orange-400 text-orange-600 bg-orange-50 rounded-full px-4 py-2"
            >
              🎓 Our Solutions & Training
            </Badge>
            <h1 className="text-5xl font-bold mb-4 text-pretty">
              Transform Your <span className="text-teal-600">Hospitality Business</span>
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Comprehensive products and solutions to help hotels, resorts, and hospitality businesses improve
              operations, offer better services, and stay competitive in the market.
            </p>
          </div>
        </section>

        {/* Custom Technology Solutions */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <Collapsible defaultOpen>
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-4">
                <CollapsibleTrigger className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                      <Server className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <h2 className="text-2xl font-bold text-gray-900">Custom Technology Solutions</h2>
                      <p className="text-sm text-gray-600">4 Solutions Available</p>
                    </div>
                  </div>
                  <ChevronDown className="w-6 h-6 text-gray-500" />
                </CollapsibleTrigger>

                <CollapsibleContent>
                  <div className="p-6 pt-0 grid md:grid-cols-2 gap-6">
                    {/* Property Management Systems */}
                    <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center shrink-0">
                          <Server className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-gray-900 mb-2">Property Management Systems (PMS)</h3>
                          <p className="text-gray-700 text-sm leading-relaxed">
                            Software solutions that streamline reservations, check-ins, check-outs, billing, and
                            housekeeping.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Smart Room Technologies */}
                    <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center shrink-0">
                          <Zap className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-gray-900 mb-2">Smart Room Technologies</h3>
                          <p className="text-gray-700 text-sm leading-relaxed">
                            Smart thermostats, lighting control systems, and in-room tablets that allow guests to
                            control room settings. Voice-activated assistants tailored for hotel room functions.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Guest Experience Enhancements */}
                    <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center shrink-0">
                          <Smartphone className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-gray-900 mb-2">Guest Experience Enhancements</h3>
                          <p className="text-gray-700 text-sm leading-relaxed">
                            Mobile check-in/check-out solutions. Digital concierge services, including apps that provide
                            information on hotel amenities and local attractions.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Integrated Platforms */}
                    <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center shrink-0">
                          <Grid3x3 className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-gray-900 mb-2">Integrated Platforms</h3>
                          <p className="text-gray-700 text-sm leading-relaxed">
                            Systems that integrate with existing hotel management software to provide a unified
                            dashboard for all operations.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CollapsibleContent>
              </div>
            </Collapsible>

            {/* Hospitality Management Products */}
            <Collapsible>
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-4">
                <CollapsibleTrigger className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <h2 className="text-2xl font-bold text-gray-900">Hospitality Management Products</h2>
                      <p className="text-sm text-gray-600">4 Solutions Available</p>
                    </div>
                  </div>
                  <ChevronDown className="w-6 h-6 text-gray-500" />
                </CollapsibleTrigger>

                <CollapsibleContent>
                  <div className="p-6 pt-0 grid md:grid-cols-2 gap-6">
                    {/* Staff Training Programs */}
                    <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center shrink-0">
                          <GraduationCap className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-gray-900 mb-2">Staff Training Programs</h3>
                          <p className="text-gray-700 text-sm leading-relaxed">
                            Comprehensive training modules for front desk, housekeeping, and management staff. Online
                            courses and workshops on customer service and hospitality management.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Operational Tools */}
                    <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center shrink-0">
                          <Wrench className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-gray-900 mb-2">Operational Tools</h3>
                          <p className="text-gray-700 text-sm leading-relaxed">
                            Software for inventory management, scheduling, and payroll. Tools for monitoring and
                            improving service quality.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Market Analysis Tools */}
                    <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center shrink-0">
                          <TrendingUp className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-gray-900 mb-2">Market Analysis Tools</h3>
                          <p className="text-gray-700 text-sm leading-relaxed">
                            Analytics platforms that provide insights into market trends, customer preferences, and
                            competitive analysis.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Customer Feedback Systems */}
                    <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center shrink-0">
                          <MessageSquare className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-gray-900 mb-2">Customer Feedback Systems</h3>
                          <p className="text-gray-700 text-sm leading-relaxed">
                            Solutions for collecting and analyzing guest feedback to improve services.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CollapsibleContent>
              </div>
            </Collapsible>

            {/* Additional Offerings */}
            <Collapsible>
              <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <CollapsibleTrigger className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <h2 className="text-2xl font-bold text-gray-900">Additional Offerings</h2>
                      <p className="text-sm text-gray-600">2 Solutions Available</p>
                    </div>
                  </div>
                  <ChevronDown className="w-6 h-6 text-gray-500" />
                </CollapsibleTrigger>

                <CollapsibleContent>
                  <div className="p-6 pt-0 grid md:grid-cols-2 gap-6">
                    {/* Security Solutions */}
                    <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center shrink-0">
                          <Shield className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-gray-900 mb-2">Security Solutions</h3>
                          <p className="text-gray-700 text-sm leading-relaxed">
                            Surveillance systems, access control systems, and cybersecurity measures to protect guest
                            data and hotel operations.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Event Management Software */}
                    <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center shrink-0">
                          <Calendar className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-gray-900 mb-2">Event Management Software</h3>
                          <p className="text-gray-700 text-sm leading-relaxed">
                            Tools for planning and managing events, conferences, and banquets within the hospitality
                            venue.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CollapsibleContent>
              </div>
            </Collapsible>
          </div>
        </section>

        {/* Why Choose Our Solutions */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-12 border border-orange-200">
              <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Why Choose Our Solutions?</h2>
              <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
                Our comprehensive offerings help hospitality businesses stay competitive and deliver exceptional guest
                experiences.
              </p>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {/* Streamlined Operations */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Server className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Streamlined Operations</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Improve efficiency and reduce operational costs with integrated systems.
                  </p>
                </div>

                {/* Expert Training */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Training</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Empower your team with comprehensive training and development programs.
                  </p>
                </div>

                {/* Enhanced Security */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Enhanced Security</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Protect your guests and operations with advanced security solutions.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <Button
                  size="lg"
                  className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-6 text-lg rounded-full shadow-lg"
                >
                  Get Started Today
                </Button>
                <p className="text-gray-600 text-sm mt-4">Join hundreds of properties transforming their operations</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
