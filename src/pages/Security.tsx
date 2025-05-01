
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShieldCheck, Lock } from "lucide-react";

const Security = () => {
  return (
    <div className="min-h-screen bg-dark-900 text-white">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 heading">
              <span className="bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
                Security Policy
              </span>
            </h1>
            <div className="flex justify-center mb-6">
              <ShieldCheck className="h-12 w-12 text-gideon" />
            </div>
            <p className="text-gray-400">Last Updated: May 1, 2025</p>
          </div>
          
          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Our Security Commitment</h2>
              <p>
                At GideonAI, we prioritize the security of your data and our AI systems. We employ industry-standard security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information and the data processed by our AI models.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Data Protection Measures</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Lock className="h-6 w-6 text-gideon mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-white">Encryption</h3>
                    <p>All data transmitted between your devices and our servers is encrypted using TLS. Data at rest is encrypted using AES-256 encryption.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <ShieldCheck className="h-6 w-6 text-gideon mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-white">Access Controls</h3>
                    <p>We implement strict access controls and authentication procedures to ensure only authorized personnel can access sensitive data and systems.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <ShieldCheck className="h-6 w-6 text-gideon mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-white">Regular Security Audits</h3>
                    <p>We conduct regular security assessments and penetration tests to identify and remediate potential vulnerabilities.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <ShieldCheck className="h-6 w-6 text-gideon mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-white">Monitoring</h3>
                    <p>Continuous monitoring systems detect and alert us to any suspicious activities or potential security incidents.</p>
                  </div>
                </div>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">AI System Security</h2>
              <p className="mb-4">
                Our AI systems are designed with security in mind:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>We employ robust safeguards against prompt injection and other AI-specific vulnerabilities.</li>
                <li>All AI model interactions are monitored for potential misuse or abuse.</li>
                <li>Regular model evaluations help identify and mitigate potential risks.</li>
                <li>We maintain strict separation between user data and our AI training processes.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Incident Response</h2>
              <p>
                In the event of a security incident, we have comprehensive procedures in place to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Quickly identify and contain the incident</li>
                <li>Investigate the cause and impact</li>
                <li>Notify affected users in accordance with applicable laws</li>
                <li>Implement measures to prevent similar incidents in the future</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Your Role in Security</h2>
              <p className="mb-4">
                You can help maintain the security of your account by:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Using strong, unique passwords for your GideonAI account</li>
                <li>Enabling two-factor authentication when available</li>
                <li>Being cautious about sharing sensitive information with our AI systems</li>
                <li>Logging out of your account when using shared devices</li>
                <li>Promptly reporting any suspicious activities or potential security issues</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p>
                If you have concerns about security or wish to report a potential vulnerability, please contact our security team at{" "}
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

export default Security;
