import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function GDPRPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Data Protection & GDPR Compliance</h1>
          <p className="text-lg text-gray-600 mb-12">Version 1.0</p>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-8">
              This Data Protection Policy outlines how HMCTS ("Company", "us", "our", and "we") complies with the
              General Data Protection Regulation (GDPR) and other applicable data protection laws regarding personal
              data collected through our website located at hospitalitysoftwaresolutions.com (the "Site").
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What is GDPR?</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              The General Data Protection Regulation (GDPR) is a European Union regulation that governs data protection
              and privacy rights. It applies to any organization that processes personal data of EU residents,
              regardless of where the organization is located.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Our Data Protection Principles</h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              We are committed to complying with GDPR and operating under the following principles:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
              <li className="leading-relaxed">
                <strong>Lawfulness, Fairness & Transparency:</strong> We only process personal data on the basis of
                lawful grounds (e.g., consent, contract, legal obligation). We are transparent about our data practices.
              </li>
              <li className="leading-relaxed">
                <strong>Purpose Limitation:</strong> We collect personal data only for specified, explicit, and
                legitimate purposes and do not process it further in ways incompatible with those purposes.
              </li>
              <li className="leading-relaxed">
                <strong>Data Minimization:</strong> We collect only the personal data that is adequate, relevant, and
                limited to what is necessary.
              </li>
              <li className="leading-relaxed">
                <strong>Accuracy:</strong> We ensure personal data is accurate and kept up to date. We take reasonable
                steps to erase or correct inaccurate data.
              </li>
              <li className="leading-relaxed">
                <strong>Storage Limitation:</strong> We retain personal data only for as long as necessary to fulfill the
                purposes for which it was collected.
              </li>
              <li className="leading-relaxed">
                <strong>Integrity & Confidentiality:</strong> We implement appropriate technical and organizational
                measures to ensure personal data is secure, protected against unauthorized processing, and safeguarded
                against accidental loss.
              </li>
              <li className="leading-relaxed">
                <strong>Accountability:</strong> We are responsible for and can demonstrate compliance with all GDPR
                principles.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Legal Basis for Processing</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              We process personal data on one or more of the following legal bases:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
              <li className="leading-relaxed">
                <strong>Consent:</strong> You have given explicit, informed consent for us to process your personal data
                for a specific purpose.
              </li>
              <li className="leading-relaxed">
                <strong>Contract:</strong> Processing is necessary to perform a contract with you or to take steps at
                your request before entering into a contract.
              </li>
              <li className="leading-relaxed">
                <strong>Legal Obligation:</strong> We are required by law to process your personal data.
              </li>
              <li className="leading-relaxed">
                <strong>Vital Interests:</strong> Processing is necessary to protect vital interests of you or another
                person.
              </li>
              <li className="leading-relaxed">
                <strong>Legitimate Interests:</strong> Processing is necessary for the legitimate interests pursued by
                us or a third party, provided those interests do not override your rights.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Your Rights Under GDPR</h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Under GDPR, you have the following rights:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
              <li className="leading-relaxed">
                <strong>Right of Access:</strong> You have the right to request and obtain confirmation of whether we
                process your personal data, and if so, obtain access to that data in a portable format.
              </li>
              <li className="leading-relaxed">
                <strong>Right to Rectification:</strong> You have the right to request correction of inaccurate personal
                data.
              </li>
              <li className="leading-relaxed">
                <strong>Right to Erasure:</strong> You have the right to request deletion of your personal data, subject
                to certain exceptions (e.g., legal obligations).
              </li>
              <li className="leading-relaxed">
                <strong>Right to Restrict Processing:</strong> You have the right to request that we restrict our
                processing of your personal data.
              </li>
              <li className="leading-relaxed">
                <strong>Right to Data Portability:</strong> You have the right to receive your personal data in a
                structured, commonly used, machine-readable format and to transmit it to another controller.
              </li>
              <li className="leading-relaxed">
                <strong>Right to Object:</strong> You have the right to object to processing for direct marketing
                purposes or on grounds relating to your particular situation.
              </li>
              <li className="leading-relaxed">
                <strong>Right Not to Be Subject to Automated Decision-Making:</strong> You have the right not to be
                subject to a decision based solely on automated processing.
              </li>
              <li className="leading-relaxed">
                <strong>Right to Withdraw Consent:</strong> You have the right to withdraw consent at any time, without
                affecting the lawfulness of processing before withdrawal.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Exercising Your Rights</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              To exercise any of your GDPR rights, please submit a written request to us at
              info@hospitalitysoftwaresolutions.com. We will respond to your request within 30 days. In some cases, we
              may require you to provide additional information to verify your identity.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Data Transfers Outside the EU</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              We may transfer your personal data outside the European Economic Area (EEA) only if we have a lawful basis
              to do so, such as through Standard Contractual Clauses, Binding Corporate Rules, or adequacy decisions.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Data Protection Officer</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              If we have a Data Protection Officer (DPO), their contact information is available upon request. If you
              have concerns about our data practices, you can contact our DPO at info@hospitalitysoftwaresolutions.com.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Data Breach Notification</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              In the event of a data breach affecting your personal data, we will notify you and relevant authorities
              within 72 hours of becoming aware of the breach, unless the data is unlikely to pose a risk to your rights
              and freedoms.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Complaints</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              You have the right to lodge a complaint with your local data protection authority if you believe we have
              violated your GDPR rights. You can find your national data protection authority online.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Contact Us</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              For questions about our data protection practices or to exercise your rights under GDPR, please contact
              us at:
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
              We may update this Data Protection & GDPR Compliance Policy from time to time. Changes will be effective
              immediately upon posting to the Site. Your continued use constitutes acceptance of the updated Policy.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
