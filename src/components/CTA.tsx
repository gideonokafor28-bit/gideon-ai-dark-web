
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

const CTA = () => {
  return (
    <section id="contact" className="py-20 bg-dark-800 overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute -right-40 -top-40 w-80 h-80 bg-gideon/20 rounded-full blur-3xl"></div>
        <div className="absolute -left-20 -bottom-40 w-80 h-80 bg-gideon/15 rounded-full blur-3xl"></div>
      </div>
    
      <div className="container mx-auto px-4 relative">
        <div className="glass max-w-4xl mx-auto p-8 lg:p-12 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 heading">
            <span className="bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
              Ready to Experience the Future of AI?
            </span>
          </h2>
          
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            Join thousands of users and businesses already transforming their workflows 
            with Gideon AI. Start your journey today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gideon hover:bg-gideon-600 text-white px-8 py-6 text-lg">
              Get Started 
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-6 text-lg">
              <Mail className="mr-2 h-5 w-5" />
              Contact Sales
            </Button>
          </div>
          
          <div className="mt-10 pt-6 border-t border-gray-700/50">
            <p className="text-gray-400">
              Have questions? Reach out at{" "}
              <a href="mailto:gideonokafor28@gmail.com" className="text-gideon hover:text-gideon-400 underline underline-offset-2">
                gideonokafor28@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
