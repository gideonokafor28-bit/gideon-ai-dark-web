
import React from "react";
import { Shield, Zap, Layers } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-dark-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="w-full aspect-video bg-gradient-to-br from-dark-800 to-dark-950 rounded-lg overflow-hidden border border-dark-700 shadow-xl">
                {/* Abstract AI Visualization */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-1/2 aspect-square relative">
                    <div className="absolute inset-0 bg-gideon/10 rounded-full animate-pulse-slow"></div>
                    <div className="absolute inset-[10%] border border-gideon/20 rounded-full"></div>
                    <div className="absolute inset-[20%] border border-gideon/15 rounded-full"></div>
                    <div className="absolute inset-[30%] border border-gideon/10 rounded-full"></div>
                    <div className="absolute inset-[40%] bg-gideon/30 rounded-full animate-pulse"></div>
                  </div>
                </div>
                
                {/* Grid Pattern */}
                <div className="absolute inset-0" style={{
                  backgroundImage: 'linear-gradient(to right, #333333 1px, transparent 1px), linear-gradient(to bottom, #333333 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }}></div>
                
                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full">
                  <circle cx="20%" cy="30%" r="2" fill="#4A6FA5" />
                  <circle cx="40%" cy="70%" r="2" fill="#4A6FA5" />
                  <circle cx="65%" cy="40%" r="2" fill="#4A6FA5" />
                  <circle cx="80%" cy="60%" r="2" fill="#4A6FA5" />
                  <line x1="20%" y1="30%" x2="40%" y2="70%" stroke="#4A6FA5" strokeWidth="1" strokeOpacity="0.5" />
                  <line x1="40%" y1="70%" x2="65%" y2="40%" stroke="#4A6FA5" strokeWidth="1" strokeOpacity="0.5" />
                  <line x1="65%" y1="40%" x2="80%" y2="60%" stroke="#4A6FA5" strokeWidth="1" strokeOpacity="0.5" />
                </svg>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-5 -left-5 w-24 h-24 bg-gideon/10 rounded-lg -z-10"></div>
              <div className="absolute -top-5 -right-5 w-16 h-16 bg-gideon/5 rounded-lg -z-10"></div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 heading">
              <span className="bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
                About 
              </span>
              <span className="bg-gradient-to-r from-gideon to-gideon-300 text-transparent bg-clip-text">
                Gideon AI
              </span>
            </h2>
            
            <p className="text-gray-300 text-lg mb-6">
              Gideon AI is the next evolution in artificial intelligence assistants. Built on advanced neural networks,
              Gideon brings unparalleled intelligence and natural interaction to both individuals and enterprises.
            </p>
            
            <div className="space-y-6 mt-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gideon/10 rounded-lg">
                  <Zap className="h-6 w-6 text-gideon" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-white">Blazing Fast Performance</h3>
                  <p className="text-gray-400">
                    Powered by cutting-edge infrastructure to deliver responses in milliseconds, no matter the complexity.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gideon/10 rounded-lg">
                  <Layers className="h-6 w-6 text-gideon" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-white">Versatile Integration</h3>
                  <p className="text-gray-400">
                    Seamlessly integrates with your existing tools and workflows, from email to project management.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gideon/10 rounded-lg">
                  <Shield className="h-6 w-6 text-gideon" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-white">Privacy Focused</h3>
                  <p className="text-gray-400">
                    Your data belongs to you. Gideon AI is designed with privacy at its core, with customizable retention policies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
