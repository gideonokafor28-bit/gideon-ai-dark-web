
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, ShieldAlert, Lock } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-dark-900 text-white">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 heading">
              <span className="bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
                Privacy Policy
              </span>
            </h1>
            <div className="flex justify-center mb-6">
              <Shield className="h-12 w-12 text-gideon" />
            </div>
            <p className="text-gray-400">Last Updated: May 1, 2025</p>
          </div>
          
          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
              <p>
                At GideonAI, we are committed to protecting your privacy and ensuring you have a positive experience on our website. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI services. Please read this privacy policy carefully.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
              <p className="mb-4">We collect several types of information for various purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Account Information: Email address, name, and other contact details you provide when creating an account.</li>
                <li>Usage Data: Information on how you interact with our AI tools and services.</li>
                <li>AI Interaction Content: The inputs you provide to our AI system and the outputs generated.</li>
                <li>Technical Data: IP address, browser type and version, time zone setting, browser plug-in types and versions, operating system, and platform.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide and maintain our services</li>
                <li>To improve and personalize your experience</li>
                <li>To train and develop our AI systems</li>
                <li>To communicate with you about service updates</li>
                <li>To detect and prevent fraudulent activities</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Data Retention</h2>
              <p>
                We retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Your Data Protection Rights</h2>
              <p className="mb-4">Depending on your location, you may have the following rights:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The right to access the personal information we have about you</li>
                <li>The right to request rectification of your personal information</li>
                <li>The right to request erasure of your personal information</li>
                <li>The right to restrict processing of your personal information</li>
                <li>The right to data portability</li>
                <li>The right to object to the processing of personal information</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at{" "}
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

export default Privacy;
