import Header from '../components/Header';
import Logo from '../components/Logo';

export const metadata = {
  title: "Privacy Policy - Casino Top Choices",
  description: "Privacy Policy for Casino Top Choices. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="container mx-auto px-4 py-8 sm:py-12 lg:py-16 max-w-4xl">
        <div className="bg-zinc-900 rounded-3xl p-6 sm:p-8 lg:p-12 border border-white/10 shadow-lg">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 sm:mb-8">
            Privacy Policy
          </h1>
          
          <div className="text-gray-400 text-sm sm:text-base leading-relaxed space-y-6">
            <p className="text-gray-500 italic">
              Last updated: {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">1. Introduction</h2>
              <p>
                Welcome to Casino Top Choices ("we," "our," or "us"). We operate the website topukpicks.com
                (the "Service"). This Privacy Policy explains how we collect, use, disclose, and safeguard 
                your information when you visit our website.
              </p>
              <p>
                By using our Service, you agree to the collection and use of information in accordance with 
                this policy. If you do not agree with our policies and practices, do not use our Service.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
              
              <h3 className="text-lg sm:text-xl font-semibold text-gray-200 mb-3 mt-4">2.1 Information You Provide</h3>
              <p>
                We may collect information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                <li>Contact us through our website</li>
                <li>Subscribe to our newsletter</li>
                <li>Participate in surveys or promotions</li>
                <li>Interact with our Service in other ways</li>
              </ul>
              <p className="mt-3">
                This information may include your name, email address, and any other information you choose to provide.
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-200 mb-3 mt-4">2.2 Automatically Collected Information</h3>
              <p>
                When you visit our Service, we may automatically collect certain information about your device, 
                including:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages you visit and time spent on pages</li>
                <li>Referring website addresses</li>
                <li>Date and time of your visit</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
              <p>We use the information we collect for various purposes, including:</p>
              <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                <li>To provide, maintain, and improve our Service</li>
                <li>To analyze how our Service is used</li>
                <li>To send you newsletters, marketing communications, and updates (with your consent)</li>
                <li>To respond to your inquiries and provide customer support</li>
                <li>To detect, prevent, and address technical issues</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">4. Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to track activity on our Service and hold 
                certain information. Cookies are files with a small amount of data which may include an 
                anonymous unique identifier.
              </p>
              <p className="mt-3">
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. 
                However, if you do not accept cookies, you may not be able to use some portions of our Service.
              </p>
              <p className="mt-3">
                We use cookies for:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                <li>Essential website functionality</li>
                <li>Analytics and performance monitoring</li>
                <li>Personalization of content</li>
                <li>Advertising and marketing purposes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">5. Third-Party Services</h2>
              <p>
                Our Service may contain links to third-party websites or services that are not owned or 
                controlled by us. We are not responsible for the privacy practices of these third parties.
              </p>
              <p className="mt-3">
                We may use third-party services such as:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                <li>Analytics providers (e.g., Google Analytics)</li>
                <li>Advertising networks</li>
                <li>Social media platforms</li>
                <li>Payment processors (if applicable)</li>
              </ul>
              <p className="mt-3">
                These third parties may collect information about your use of our Service and other websites 
                to provide you with relevant advertisements.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">6. Data Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to protect your 
                personal information. However, no method of transmission over the Internet or electronic 
                storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">7. Your Rights (UK GDPR)</h2>
              <p>
                Under UK GDPR, you have the following rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                <li><strong>Right of Access:</strong> You can request copies of your personal data</li>
                <li><strong>Right to Rectification:</strong> You can request correction of inaccurate data</li>
                <li><strong>Right to Erasure:</strong> You can request deletion of your personal data</li>
                <li><strong>Right to Restrict Processing:</strong> You can request limitation of data processing</li>
                <li><strong>Right to Data Portability:</strong> You can request transfer of your data</li>
                <li><strong>Right to Object:</strong> You can object to processing of your personal data</li>
                <li><strong>Right to Withdraw Consent:</strong> You can withdraw consent at any time</li>
              </ul>
              <p className="mt-3">
                To exercise these rights, please contact us using the information provided in the Contact 
                section below.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">8. Data Retention</h2>
              <p>
                We will retain your personal information only for as long as necessary to fulfill the purposes 
                outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">9. Children's Privacy</h2>
              <p>
                Our Service is not intended for individuals under the age of 18. We do not knowingly collect 
                personal information from children under 18. If you are a parent or guardian and believe your 
                child has provided us with personal information, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">10. Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by 
                posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
              <p className="mt-3">
                You are advised to review this Privacy Policy periodically for any changes. Changes to this 
                Privacy Policy are effective when they are posted on this page.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">11. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or wish to exercise your rights, please 
                contact us:
              </p>
              <div className="mt-3 bg-white/5 rounded-2xl p-4 border border-white/10">
                <p className="font-semibold text-white">Casino Top Choices</p>
                <p>Website: <a href="https://www.topukpicks.com" className="text-emerald-400 hover:text-emerald-300 underline">topukpicks.com</a></p>
                <p>Email: Please use our contact form on the website</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <footer className="bg-black border-t border-white/10 py-6 sm:py-8 lg:py-12 mt-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex justify-center mb-6 sm:mb-8">
            <Logo />
          </div>
          <div className="border-t border-white/10 pt-4 sm:pt-6 text-center">
            <p className="text-gray-500 text-xs sm:text-sm">
              © 2026 topukpicks.com. For educational purposes only. 18+ only. Please gamble responsibly.
            </p>
            <div className="mt-4 flex justify-center gap-4 text-xs sm:text-sm">
              <a href="/" className="text-emerald-400 hover:text-emerald-300">Home</a>
              <span className="text-gray-600">|</span>
              <a href="/privacy" className="text-emerald-400 hover:text-emerald-300">Privacy Policy</a>
              <span className="text-gray-600">|</span>
              <a href="/terms" className="text-emerald-400 hover:text-emerald-300">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
