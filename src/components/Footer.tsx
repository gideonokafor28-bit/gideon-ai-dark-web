
import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark-900 py-12 border-t border-dark-700">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <a href="/" className="text-2xl font-bold text-white flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded-full bg-gideon"></div>
              <span>GideonAI</span>
            </a>
            <p className="text-gray-400 mb-6">
              The next generation AI assistant for businesses and individuals. Powerful, intuitive, and secure.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gideon transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gideon transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gideon transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gideon transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gideon transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-gideon transition-colors">Features</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gideon transition-colors">Pricing</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gideon transition-colors">API</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gideon transition-colors">Integrations</a>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-gideon transition-colors">Documentation</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gideon transition-colors">Tutorials</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gideon transition-colors">Blog</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gideon transition-colors">Support</a>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-gideon transition-colors">About</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gideon transition-colors">Careers</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gideon transition-colors">Press</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gideon transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-gideon transition-colors">Privacy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-gideon transition-colors">Terms</Link>
              </li>
              <li>
                <Link to="/security" className="text-gray-400 hover:text-gideon transition-colors">Security</Link>
              </li>
              <li>
                <Link to="/cookies" className="text-gray-400 hover:text-gideon transition-colors">Cookies</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-dark-700 text-center md:flex md:justify-between md:items-center">
          <p className="text-gray-500 mb-4 md:mb-0">
            © {new Date().getFullYear()} GideonAI. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6">
            <Link to="/privacy" className="text-gray-500 hover:text-gideon transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-500 hover:text-gideon transition-colors">Terms of Service</Link>
            <Link to="/cookies" className="text-gray-500 hover:text-gideon transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
