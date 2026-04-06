import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Accessibility Statement</h1>
          <p className="text-lg text-gray-600 mb-12">Version 1.0</p>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-8">
              HMCTS is committed to ensuring digital accessibility and making the website located at
              hospitalitysoftwaresolutions.com (the "Site") accessible to all individuals, regardless of their abilities
              or disabilities. This Accessibility Statement outlines our commitment to accessibility and explains how
              users with disabilities can access our content.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Our Commitment</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              We are committed to complying with the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA and the
              Americans with Disabilities Act (ADA). We continuously work to improve the accessibility of the Site to
              ensure it is usable by all individuals, including those with disabilities.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Accessibility Features</h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              The Site includes the following accessibility features:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
              <li className="leading-relaxed">
                <strong>Keyboard Navigation:</strong> All interactive elements can be accessed using keyboard
                navigation without requiring a mouse.
              </li>
              <li className="leading-relaxed">
                <strong>Screen Reader Compatibility:</strong> The Site is compatible with screen readers such as
                JAWS, NVDA, and VoiceOver to assist individuals with visual impairments.
              </li>
              <li className="leading-relaxed">
                <strong>Alt Text for Images:</strong> All images on the Site include descriptive alt text to describe
                their content and purpose.
              </li>
              <li className="leading-relaxed">
                <strong>Color Contrast:</strong> Text and background colors meet WCAG AA standards for contrast to ensure
                readability for individuals with low vision or color blindness.
              </li>
              <li className="leading-relaxed">
                <strong>Resizable Text:</strong> Users can adjust the text size using browser settings without loss of
                functionality.
              </li>
              <li className="leading-relaxed">
                <strong>Clear Navigation:</strong> The Site has a clear and logical structure with descriptive headings
                and navigation links.
              </li>
              <li className="leading-relaxed">
                <strong>Captions & Transcripts:</strong> Videos include captions, and transcripts are available where
                applicable.
              </li>
              <li className="leading-relaxed">
                <strong>Accessible Forms:</strong> All forms include labels and error messages to assist users with
                filling out information.
              </li>
              <li className="leading-relaxed">
                <strong>Focus Indicators:</strong> Interactive elements have visible focus indicators for keyboard
                navigation.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Browser & Assistive Technology Support</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              The Site is designed to be compatible with common browsers and assistive technologies, including:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
              <li className="leading-relaxed">
                <strong>Browsers:</strong> Chrome, Firefox, Safari, Edge (latest versions)
              </li>
              <li className="leading-relaxed">
                <strong>Screen Readers:</strong> JAWS, NVDA, VoiceOver, TalkBack
              </li>
              <li className="leading-relaxed">
                <strong>Voice Control:</strong> Dragon NaturallySpeaking
              </li>
              <li className="leading-relaxed">
                <strong>Zoom Software:</strong> ZoomText, MAGic
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Accessibility Standards</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              The Site aims to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA, which include:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
              <li className="leading-relaxed">
                <strong>Perceivable:</strong> Information and user interface components are presented in a way that is
                perceivable to users.
              </li>
              <li className="leading-relaxed">
                <strong>Operable:</strong> User interface components and navigation are operable through various input
                methods.
              </li>
              <li className="leading-relaxed">
                <strong>Understandable:</strong> Information and user interface operation are understandable.
              </li>
              <li className="leading-relaxed">
                <strong>Robust:</strong> Content is compatible with current and future assistive technologies and user
                agents.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Known Accessibility Issues</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              While we strive to maintain full accessibility, there may be some areas of the Site that do not yet meet
              our accessibility standards. We are actively working to identify and remediate these issues. If you
              encounter accessibility barriers, please let us know so we can address them.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Accessibility Settings</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Users can adjust their accessibility preferences using the following methods:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
              <li className="leading-relaxed">
                <strong>Browser Settings:</strong> Adjust text size, color contrast, and font preferences in your
                browser settings.
              </li>
              <li className="leading-relaxed">
                <strong>Operating System:</strong> Use operating system accessibility features such as screen readers,
                magnification, and voice control.
              </li>
              <li className="leading-relaxed">
                <strong>Keyboard Shortcuts:</strong> Use standard keyboard shortcuts to navigate the Site without a
                mouse.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Reporting Accessibility Issues</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              If you encounter an accessibility barrier on the Site, please report it to us immediately. We take
              accessibility issues seriously and will work to resolve them promptly. To report an issue, please contact
              us at:
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-6 border-l-4 border-orange-500">
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong> info@hospitalitysoftwaresolutions.com
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Phone:</strong> +1 (845) 904-7626
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Address:</strong> 30 N GOULD STREET SHERIDAN, WYOMING 82801 USA
              </p>
              <p className="text-gray-700 text-sm">
                Please include a description of the accessibility issue, the page where you encountered it, the
                assistive technology or browser you used, and any recommended solutions.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Remediation Timeline</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              We are committed to promptly remediating accessibility issues. Depending on the complexity and severity of
              the issue, we aim to resolve reported accessibility problems within 30 days. Critical issues will be
              prioritized and addressed more quickly.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Accessibility Resources</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              For more information on web accessibility and assistive technologies, please visit the following resources:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
              <li className="leading-relaxed">
                <strong>Web Content Accessibility Guidelines (WCAG):</strong> https://www.w3.org/WAI/WCAG21/quickref/
              </li>
              <li className="leading-relaxed">
                <strong>Americans with Disabilities Act (ADA):</strong> https://www.ada.gov/
              </li>
              <li className="leading-relaxed">
                <strong>WebAIM:</strong> https://webaim.org/
              </li>
              <li className="leading-relaxed">
                <strong>The Paciello Group:</strong> https://www.paciellogroup.com/
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Contact Us</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              For accessibility inquiries or assistance, please contact us at:
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

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Changes to This Statement</h2>

            <p className="text-gray-700 leading-relaxed">
              We may update this Accessibility Statement from time to time as we improve the Site&apos;s accessibility.
              Changes will be effective immediately upon posting to the Site.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
