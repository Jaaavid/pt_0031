import Header from '../components/Header';
import Logo from '../components/Logo';

export const metadata = {
  title: "Terms of Service - Casino Top Choices",
  description: "Terms of Service for Casino Top Choices. Read our terms and conditions for using our casino comparison website.",
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="container mx-auto px-4 py-8 sm:py-12 lg:py-16 max-w-4xl">
        <div className="bg-zinc-900 rounded-3xl p-6 sm:p-8 lg:p-12 border border-white/10 shadow-lg">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 sm:mb-8">
            Terms of Service
          </h1>
          
          <div className="text-gray-400 text-sm sm:text-base leading-relaxed space-y-6">
            <p className="text-gray-500 italic">
              Last updated: {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using topukpicks.com (the "Website" or "Service"), you accept and agree
                to be bound by the terms and provision of this agreement. If you do not agree to abide by the 
                above, please do not use this Service.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">2. Description of Service</h2>
              <p>
                Casino Top Choices is an information and comparison website that provides reviews, ratings, and 
                information about online casino operators. We are an independent comparison service and do not 
                operate any gambling services ourselves.
              </p>
              <p className="mt-3">
                Our Service includes:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                <li>Casino reviews and ratings</li>
                <li>Comparison of casino features, bonuses, and services</li>
                <li>Educational content about online gambling</li>
                <li>Links to third-party casino operators</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">3. Age Restrictions</h2>
              <p>
                You must be at least 18 years old to use this Service. By using this Service, you represent 
                and warrant that you are at least 18 years of age and have the legal capacity to enter into 
                this agreement.
              </p>
              <p className="mt-3">
                Online gambling is illegal for individuals under the age of 18 in the United Kingdom. We do 
                not knowingly provide information to minors.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">4. Use of Service</h2>
              <p>You agree to use the Service only for lawful purposes and in accordance with these Terms. 
                You agree not to:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                <li>Use the Service in any way that violates any applicable law or regulation</li>
                <li>Attempt to gain unauthorized access to any portion of the Service</li>
                <li>Interfere with or disrupt the Service or servers connected to the Service</li>
                <li>Use any automated system to access the Service without our express written permission</li>
                <li>Reproduce, duplicate, copy, or resell any part of the Service without our permission</li>
                <li>Use the Service to transmit any viruses, malware, or harmful code</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">5. Third-Party Links and Services</h2>
              <p>
                Our Service contains links to third-party websites, including online casino operators. We are 
                not responsible for the content, privacy policies, or practices of any third-party websites.
              </p>
              <p className="mt-3">
                When you click on links to third-party casinos, you will leave our Website and be subject to 
                the terms and conditions and privacy policies of those third-party websites. We encourage you 
                to review the terms and privacy policies of any third-party websites you visit.
              </p>
              <p className="mt-3">
                We may receive compensation from casino operators when you click on links or sign up through 
                our Service. This does not affect our editorial independence or the accuracy of our reviews.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">6. Disclaimer of Warranties</h2>
              <p>
                The information on this Website is provided on an "as is" basis. To the fullest extent 
                permitted by law, we exclude all representations, warranties, and conditions relating to our 
                Website and the use of this Website.
              </p>
              <p className="mt-3">
                We do not warrant that:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                <li>The information on this Website is complete, accurate, or up-to-date</li>
                <li>The Website will be available at all times or free from errors</li>
                <li>The Website is free from viruses or other harmful components</li>
                <li>Any casino operator will meet your expectations or requirements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">7. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by applicable law, Casino Top Choices and its owners, employees, 
                and affiliates shall not be liable for any indirect, incidental, special, consequential, or 
                punitive damages, including without limitation, loss of profits, data, use, goodwill, or other 
                intangible losses, resulting from:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                <li>Your use or inability to use the Service</li>
                <li>Any conduct or content of third parties on the Service</li>
                <li>Any unauthorized access to or use of our servers</li>
                <li>Any interruption or cessation of transmission to or from the Service</li>
                <li>Any bugs, viruses, or similar items transmitted through the Service</li>
                <li>Any gambling losses incurred at third-party casino operators</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">8. Responsible Gambling</h2>
              <p>
                We are committed to promoting responsible gambling. Gambling should be entertaining and not 
                seen as a way to make money or solve financial problems.
              </p>
              <p className="mt-3">
                If you or someone you know has a gambling problem, please seek help:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                <li><strong>BeGambleAware:</strong> Visit{' '}
                  <a href="https://www.begambleaware.org" target="_blank" rel="noopener noreferrer" 
                     className="text-emerald-400 hover:text-emerald-300 underline">
                    begambleaware.org
                  </a>
                </li>
                <li><strong>GamCare:</strong> Call 0808 8020 133 or visit{' '}
                  <a href="https://www.gamcare.org.uk" target="_blank" rel="noopener noreferrer" 
                     className="text-emerald-400 hover:text-emerald-300 underline">
                    gamcare.org.uk
                  </a>
                </li>
                <li><strong>National Gambling Helpline:</strong> 0808 8020 133</li>
              </ul>
              <p className="mt-3">
                Never gamble with money you cannot afford to lose. Set limits on your gambling and stick to them.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">9. Intellectual Property</h2>
              <p>
                The Service and its original content, features, and functionality are owned by Casino Top Choices 
                and are protected by international copyright, trademark, patent, trade secret, and other 
                intellectual property laws.
              </p>
              <p className="mt-3">
                You may not reproduce, distribute, modify, create derivative works of, publicly display, 
                publicly perform, republish, download, store, or transmit any of the material on our Website 
                without our prior written consent.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">10. Affiliate Disclosure</h2>
              <p>
                Casino Top Choices may receive compensation from casino operators when users click on links or 
                sign up through our Service. This compensation helps us maintain and improve our Service.
              </p>
              <p className="mt-3">
                Our reviews and ratings are based on our independent evaluation and are not influenced by 
                affiliate relationships. We are committed to providing honest, accurate, and unbiased 
                information to our users.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">11. Changes to Terms</h2>
              <p>
                We reserve the right to modify or replace these Terms at any time. If a revision is material, 
                we will try to provide at least 30 days notice prior to any new terms taking effect.
              </p>
              <p className="mt-3">
                What constitutes a material change will be determined at our sole discretion. By continuing 
                to access or use our Service after those revisions become effective, you agree to be bound by 
                the revised terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">12. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of England and Wales, 
                without regard to its conflict of law provisions.
              </p>
              <p className="mt-3">
                Any disputes arising out of or relating to these Terms or the Service shall be subject to the 
                exclusive jurisdiction of the courts of England and Wales.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">13. Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="mt-3 bg-white/5 rounded-2xl p-4 border border-white/10">
                <p className="font-semibold text-white">Casino Top Choices</p>
                <p>Website: <a href="https://www.topukpicks.com" className="text-emerald-400 hover:text-emerald-300 underline">topukpicks.com</a></p>
                <p>Email: Please use our contact form on the website</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">14. Severability</h2>
              <p>
                If any provision of these Terms is held to be invalid or unenforceable by a court, the 
                remaining provisions of these Terms will remain in effect. These Terms constitute the entire 
                agreement between us regarding our Service.
              </p>
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
