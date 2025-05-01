
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Cookie } from "lucide-react";

const Cookies = () => {
  return (
    <div className="min-h-screen bg-dark-900 text-white">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 heading">
              <span className="bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
                Cookie Policy
              </span>
            </h1>
            <div className="flex justify-center mb-6">
              <Cookie className="h-12 w-12 text-gideon" />
            </div>
            <p className="text-gray-400">Last Updated: May 1, 2025</p>
          </div>
          
          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold mb-4">What Are Cookies</h2>
              <p>
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">How We Use Cookies</h2>
              <p className="mb-4">
                We use cookies for various purposes, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <span className="font-medium">Essential cookies:</span> These are necessary for the website to function properly and cannot be switched off in our systems.
                </li>
                <li>
                  <span className="font-medium">Performance cookies:</span> These help us understand how visitors interact with our website by collecting and reporting information anonymously.
                </li>
                <li>
                  <span className="font-medium">Functionality cookies:</span> These enable enhanced functionality and personalization, such as remembering your preferences.
                </li>
                <li>
                  <span className="font-medium">Analytics cookies:</span> These help us analyze and improve the performance and design of our website and services.
                </li>
                <li>
                  <span className="font-medium">Targeting cookies:</span> These may be set by our advertising partners to build a profile of your interests and show you relevant advertisements on other sites.
                </li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Types of Cookies We Use</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-700 mt-4">
                  <thead>
                    <tr className="bg-dark-800">
                      <th className="px-4 py-3 border-b border-gray-700 text-left">Name</th>
                      <th className="px-4 py-3 border-b border-gray-700 text-left">Purpose</th>
                      <th className="px-4 py-3 border-b border-gray-700 text-left">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-3 border-b border-gray-700">Session Cookie</td>
                      <td className="px-4 py-3 border-b border-gray-700">Maintains user session and login status</td>
                      <td className="px-4 py-3 border-b border-gray-700">Session</td>
                    </tr>
                    <tr className="bg-dark-800">
                      <td className="px-4 py-3 border-b border-gray-700">_ga (Google Analytics)</td>
                      <td className="px-4 py-3 border-b border-gray-700">Used to distinguish users for analytics</td>
                      <td className="px-4 py-3 border-b border-gray-700">2 years</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 border-b border-gray-700">_ai_preferences</td>
                      <td className="px-4 py-3 border-b border-gray-700">Stores user preferences for AI interactions</td>
                      <td className="px-4 py-3 border-b border-gray-700">1 year</td>
                    </tr>
                    <tr className="bg-dark-800">
                      <td className="px-4 py-3 border-b border-gray-700">_gideonai_theme</td>
                      <td className="px-4 py-3 border-b border-gray-700">Remembers user interface preferences</td>
                      <td className="px-4 py-3 border-b border-gray-700">6 months</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Managing Cookies</h2>
              <p className="mb-4">
                Most web browsers allow you to manage your cookie preferences. You can:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Delete cookies from your browser</li>
                <li>Block cookies by activating the setting on your browser that allows you to refuse all or some cookies</li>
                <li>Set your browser to notify you when you receive a cookie</li>
              </ul>
              <p className="mt-4">
                Please note that if you choose to disable cookies, some features of our website may not function properly.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Changes to This Cookie Policy</h2>
              <p>
                We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page and updating the "Last Updated" date.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p>
                If you have any questions about our Cookie Policy, please contact us at{" "}
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

export default Cookies;
