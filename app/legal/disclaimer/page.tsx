import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Disclaimer</h1>
          <p className="text-lg text-gray-600 mb-12">Version 1.0</p>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-8">
              This Disclaimer ("Disclaimer") applies to the website located at hospitalitysoftwaresolutions.com (the
              "Site") and is provided by HMCTS ("Company", "us", "our", and "we"). Please read this Disclaimer
              carefully before using the Site.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">General Disclaimer</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              The content, materials, information, and resources available on the Site are provided on an "as-is" and
              "as-available" basis without warranties of any kind, either expressed or implied. We make no guarantees
              regarding the accuracy, completeness, timeliness, or reliability of the Site's content.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">No Professional Advice</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              The information provided on the Site is for general informational purposes only and should not be
              construed as professional advice, including legal, financial, medical, or business advice. We are not
              responsible for decisions or actions taken based on the Site's content. You should consult with qualified
              professionals before making any decisions based on information from the Site.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">No Liability</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              To the fullest extent permitted by law, HMCTS, its officers, directors, employees, and agents shall not
              be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use
              of the Site or inability to access the Site, even if we have been advised of the possibility of such
              damages.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              This includes, but is not limited to, damages related to lost profits, lost data, business interruption,
              or any other commercial damages, even if HMCTS is aware of the possibility of such damages.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Third-Party Content</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              The Site may contain links to third-party websites and may display content from third parties. We do not
              endorse, warrant, or assume responsibility for the accuracy, legality, or appropriateness of such
              third-party content. Your access to third-party websites is at your own risk and subject to their terms
              of use and privacy policies.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Technical Issues</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              While we strive to maintain the Site's functionality, we make no guarantees that the Site will be
              error-free, uninterrupted, or free from viruses or malicious code. We are not liable for any technical
              issues, service disruptions, or data loss resulting from your use of the Site.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">User Responsibility</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              You are responsible for your use of the Site and assume all risks associated with it. You are solely
              responsible for maintaining the confidentiality of your account information and for all activities that
              occur under your account. You agree not to use the Site for any illegal or unauthorized purpose.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Product & Service Disclaimer</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              While we endeavor to provide high-quality products and services, we make no warranties regarding their
              performance, fitness for a particular purpose, or merchantability. Results may vary based on individual
              circumstances, and we cannot guarantee specific outcomes.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Health & Safety Disclaimer</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              The Site is not intended to provide medical, health, or safety advice. If you have health concerns, please
              consult with qualified healthcare professionals. We are not responsible for any adverse effects resulting
              from your use of information found on the Site.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Financial Disclaimer</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              The Site does not provide financial, investment, or tax advice. Information about products or services
              should not be interpreted as an endorsement or recommendation. Consult with qualified financial
              professionals before making investment decisions.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Jurisdiction</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              This Disclaimer is governed by the laws of the relevant country of the website owner's choice. Any
              disputes arising from your use of the Site shall be resolved in accordance with applicable law.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Contact Us</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              For questions about this Disclaimer, please contact us at:
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

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Changes to This Disclaimer</h2>

            <p className="text-gray-700 leading-relaxed">
              We reserve the right to update this Disclaimer at any time. Changes will be effective immediately upon
              posting to the Site. Your continued use constitutes acceptance of the updated Disclaimer.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
