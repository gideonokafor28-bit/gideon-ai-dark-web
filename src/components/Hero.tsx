
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-28 pb-20 lg:pt-36 lg:pb-32 hero-gradient">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-6">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
                The Next Generation
              </span>
              <br />
              <span className="bg-gradient-to-r from-gideon to-gideon-300 text-transparent bg-clip-text">
                AI Assistant
              </span>
            </h1>
            
            <p className="text-gray-300 text-lg mb-8 max-w-lg mx-auto lg:mx-0">
              Gideon AI brings advanced artificial intelligence to your fingertips. 
              Powerful enough to handle complex tasks, intuitive enough for everyone.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="bg-gideon hover:bg-gideon-600 text-white px-8 py-6 text-lg">
                Get Started 
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-6 text-lg">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative">
            <div className="relative">
              {/* Main abstract shape */}
              <div className="w-full aspect-square max-w-md mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gideon/50 to-gideon-900/30 rounded-full animate-pulse-slow blur-xl"></div>
                <div className="absolute inset-10 bg-gradient-to-br from-dark-700 to-dark-900 rounded-full"></div>
                <div className="absolute inset-[15%] bg-gradient-to-br from-gideon-700/20 to-gideon-900/20 rounded-full flex items-center justify-center">
                  <div className="w-1/3 aspect-square bg-gideon/30 rounded-full animate-float"></div>
                </div>
                
                {/* Orbital rings */}
                <div className="absolute inset-0 border-2 border-gideon/10 rounded-full rotate-45"></div>
                <div className="absolute inset-5 border border-gideon/10 rounded-full -rotate-12"></div>
                <div className="absolute inset-10 border border-gideon/10 rounded-full rotate-90"></div>
                
                {/* Particles */}
                <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-gideon rounded-full animate-pulse"></div>
                <div className="absolute bottom-1/3 left-1/3 w-6 h-6 bg-gideon/50 rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-gideon/30 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="w-full h-16 mt-12 overflow-hidden relative">
        <svg className="absolute bottom-0 w-full h-20" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path 
            d="M0,96L48,90.7C96,85,192,75,288,64C384,53,480,43,576,48C672,53,768,75,864,80C960,85,1056,75,1152,69.3C1248,64,1344,64,1392,64L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" 
            fill="#1A1A1A" 
            fillOpacity="1"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
