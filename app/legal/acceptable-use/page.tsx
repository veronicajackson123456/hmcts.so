import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AcceptableUsePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Acceptable Use Policy</h1>
          <p className="text-lg text-gray-600 mb-12">Version 1.0</p>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-8">
              This Acceptable Use Policy ("Policy") is part of our Terms of Use and applies to all users of the website
              located at hospitalitysoftwaresolutions.com (the "Site") provided by HMCTS ("Company", "us", "our", and
              "we"). By accessing or using the Site, you agree to comply with this Policy.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Prohibited Activities</h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              You agree NOT to engage in any of the following activities:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
              <li className="leading-relaxed">
                <strong>Illegal Activities:</strong> Use the Site for any illegal purpose, including fraud, theft,
                hacking, or any activity that violates applicable laws and regulations.
              </li>
              <li className="leading-relaxed">
                <strong>Harassment & Abuse:</strong> Engage in harassment, bullying, threats, stalking, or any form of
                abusive behavior toward other users or staff members.
              </li>
              <li className="leading-relaxed">
                <strong>Hate Speech & Discrimination:</strong> Post content that is racist, sexist, homophobic,
                transphobic, or discriminatory in any way.
              </li>
              <li className="leading-relaxed">
                <strong>Unauthorized Access:</strong> Attempt to gain unauthorized access to accounts, systems, or
                restricted areas of the Site. This includes hacking, phishing, and social engineering.
              </li>
              <li className="leading-relaxed">
                <strong>Malware & Viruses:</strong> Upload, transmit, or introduce viruses, malware, spyware, or any
                malicious code to the Site.
              </li>
              <li className="leading-relaxed">
                <strong>Intellectual Property Infringement:</strong> Violate copyrights, trademarks, or other
                intellectual property rights of HMCTS or third parties.
              </li>
              <li className="leading-relaxed">
                <strong>Spam & Solicitation:</strong> Send unsolicited emails, spam, or promotional materials through
                the Site without authorization.
              </li>
              <li className="leading-relaxed">
                <strong>Impersonation:</strong> Impersonate another person, company, or entity, or misrepresent your
                affiliation with any person or organization.
              </li>
              <li className="leading-relaxed">
                <strong>Sensitive Information Disclosure:</strong> Share or post personal information of others without
                consent, including phone numbers, addresses, financial information, or medical records.
              </li>
              <li className="leading-relaxed">
                <strong>Exploitation:</strong> Engage in any form of exploitation, including child exploitation, human
                trafficking, or abuse.
              </li>
              <li className="leading-relaxed">
                <strong>Scraping & Automated Access:</strong> Use bots, scrapers, or automated tools to collect data from
                the Site without authorization.
              </li>
              <li className="leading-relaxed">
                <strong>Reverse Engineering:</strong> Attempt to reverse-engineer, decompile, or modify the Site's code
                or functionality.
              </li>
              <li className="leading-relaxed">
                <strong>Denial of Service:</strong> Engage in any activity that disrupts, overwhelms, or degrades the
                performance of the Site.
              </li>
              <li className="leading-relaxed">
                <strong>Content Violation:</strong> Post obscene, explicit, defamatory, or otherwise objectionable content
                that violates this Policy.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Account Security</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              You are responsible for maintaining the confidentiality of your account credentials and for all activities
              that occur under your account. You agree to:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
              <li className="leading-relaxed">Use a strong, unique password and change it regularly.</li>
              <li className="leading-relaxed">Never share your password with anyone.</li>
              <li className="leading-relaxed">Immediately notify us of any unauthorized access or suspicious activity.</li>
              <li className="leading-relaxed">Log out of your account when using shared computers or devices.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Content Guidelines</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              When posting content on the Site, you agree to:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
              <li className="leading-relaxed">Only post truthful and accurate information.</li>
              <li className="leading-relaxed">Respect intellectual property rights and provide proper attribution.</li>
              <li className="leading-relaxed">Not post misleading, deceptive, or fraudulent content.</li>
              <li className="leading-relaxed">Respect the privacy and dignity of others.</li>
              <li className="leading-relaxed">Use professional and respectful language.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Consequences of Violation</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              We take violations of this Policy seriously. Depending on the severity and frequency of violations, we may:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
              <li className="leading-relaxed">Issue a warning to the violating user.</li>
              <li className="leading-relaxed">Remove or edit violating content.</li>
              <li className="leading-relaxed">Suspend the user&apos;s account temporarily.</li>
              <li className="leading-relaxed">Permanently terminate the user&apos;s account and access to the Site.</li>
              <li className="leading-relaxed">Report the violation to appropriate law enforcement authorities.</li>
              <li className="leading-relaxed">Take legal action against the violating user.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Reporting Violations</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              If you discover any violations of this Policy, please report them to us immediately at
              info@hospitalitysoftwaresolutions.com. We will investigate all reports and take appropriate action.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Contact Us</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              For questions about this Acceptable Use Policy, please contact us at:
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
              We may update this Acceptable Use Policy from time to time. Changes will be effective immediately upon
              posting to the Site. Your continued use constitutes acceptance of the updated Policy.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
