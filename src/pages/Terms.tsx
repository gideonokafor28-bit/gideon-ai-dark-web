
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText } from "lucide-react";

const Terms = () => {
  return (
    <div className="min-h-screen bg-dark-900 text-white">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 heading">
              <span className="bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
                Terms of Service
              </span>
            </h1>
            <div className="flex justify-center mb-6">
              <FileText className="h-12 w-12 text-gideon" />
            </div>
            <p className="text-gray-400">Last Updated: May 1, 2025</p>
          </div>
          
          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
              <p>
                These Terms of Service ("Terms") govern your access to and use of GideonAI's website, services, and applications (collectively, the "Services"). By accessing or using the Services, you agree to be bound by these Terms. If you disagree with any part of these Terms, you may not access the Services.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Use of Services</h2>
              <p className="mb-4">By using our Services, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use our Services only for lawful purposes and in accordance with these Terms.</li>
                <li>Not use our Services to generate content that is harmful, offensive, or illegal.</li>
                <li>Not attempt to interfere with or disrupt the integrity or performance of the Services.</li>
                <li>Not reproduce, duplicate, copy, sell, resell, or exploit any portion of the Services.</li>
                <li>Maintain the security of your account credentials.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
              <p>
                The Services and their original content, features, and functionality are owned by GideonAI and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
              </p>
              <p className="mt-4">
                While you retain ownership of your content, by submitting content to our Services, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, and distribute your content in connection with providing and improving our Services.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Service Modifications and Termination</h2>
              <p>
                We reserve the right to modify or discontinue, temporarily or permanently, the Services with or without notice. We shall not be liable to you or to any third party for any modification, suspension, or discontinuance of the Service.
              </p>
              <p className="mt-4">
                We may terminate or suspend your access to our Services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Disclaimer of Warranties</h2>
              <p>
                The Services are provided on an "AS IS" and "AS AVAILABLE" basis. GideonAI expressly disclaims all warranties of any kind, whether express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
              <p>
                In no event shall GideonAI be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Services.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at{" "}
                <a href="mailto:gideonokafor28@gmail.com" className="text-gideon hover:text-gideon-400 underline underline-offset-2">
                  gideonokafor28@gmail.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;
