import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Cookie Policy</h1>
          <p className="text-lg text-gray-600 mb-12">Version 1.0</p>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-8">
              This Cookie Policy ("Policy") explains how HMCTS ("Company", "us", "our", and "we") uses cookies and
              similar tracking technologies on our website located at hospitalitysoftwaresolutions.com (the "Site").
              By continuing to use the Site, you consent to our use of cookies as described in this Policy.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What Are Cookies?</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Cookies are small text files stored on your device when you visit a website. They serve various purposes,
              including remembering your preferences, tracking your activities, and providing a more personalized
              experience. Cookies may be either "persistent" (remaining on your device until deleted) or "session"
              (deleted when you close your browser).
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Types of Cookies We Use</h2>

            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
              <li className="leading-relaxed">
                <strong>Essential Cookies:</strong> These cookies are necessary for the Site to function properly. They
                enable core functionality such as user authentication, account management, and security features.
              </li>
              <li className="leading-relaxed">
                <strong>Performance Cookies:</strong> We use these cookies to analyze how users interact with the Site,
                including pages visited, time spent on pages, and actions taken. This information helps us improve the
                Site's performance and user experience.
              </li>
              <li className="leading-relaxed">
                <strong>Functional Cookies:</strong> These cookies remember your preferences and choices, such as
                language preferences, login information, and customization settings, to provide a more personalized
                experience.
              </li>
              <li className="leading-relaxed">
                <strong>Marketing/Advertising Cookies:</strong> We use these cookies to track your activity across the
                Site and third-party websites to deliver targeted advertisements and promotional content based on your
                interests.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Third-Party Cookies</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              We may allow third-party service providers, analytics providers, and advertising partners to place cookies
              on your device to track your activity and deliver targeted content. These third parties are bound by their
              own privacy policies. We are not responsible for their data practices.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Technologies Similar to Cookies</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              In addition to cookies, we use similar tracking technologies such as:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
              <li className="leading-relaxed">
                <strong>Pixels & Web Beacons:</strong> Tiny images embedded in web pages or emails that track page views
                and user interactions.
              </li>
              <li className="leading-relaxed">
                <strong>Local Storage:</strong> Data stored directly on your device that persists even after closing
                your browser.
              </li>
              <li className="leading-relaxed">
                <strong>Log Files:</strong> Automatically collected data about your device, IP address, browser type,
                and Site usage.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Your Cookie Choices</h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Browser Settings:</strong> Most web browsers allow you to control cookies through your browser
              settings. You can choose to accept or reject cookies, or be notified when a cookie is placed on your
              device. Refer to your browser's help documentation for instructions on managing cookies.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Opt-Out:</strong> You can opt out of certain tracking and marketing cookies by contacting us at
              info@hospitalitysoftwaresolutions.com. However, disabling certain cookies may affect the functionality of
              the Site.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Google Analytics</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              We use Google Analytics to collect and analyze Site usage data. Google Analytics uses cookies and similar
              technologies to track your activity. You can opt out of Google Analytics by using the Google Analytics
              opt-out browser add-on or by adjusting your privacy settings.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Data Retention</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              We retain cookie data for as long as necessary to fulfill the purposes outlined in this Policy. You can
              delete cookies from your device at any time through your browser settings.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Contact Us</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              If you have questions about this Cookie Policy or our use of cookies, please contact us at:
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-6 border-l-4 border-orange-500">
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong> info@hospitalitysoftwaresolutions.com
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Phone:</strong> +1 (845) 904-7626
              </p>
              <p className="text-gray-700">
                <strong>Address:</strong> 30 N GOULD STREET SHERIDAN, WYOMING 82801 USA
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Changes to This Policy</h2>

            <p className="text-gray-700 leading-relaxed">
              We may update this Cookie Policy from time to time. Changes will be effective upon posting to the Site.
              Your continued use of the Site means you accept the updates.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
