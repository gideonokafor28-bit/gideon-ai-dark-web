
import React from "react";
import { Brain, Cpu, Database, Globe, Lock, MessageSquare } from "lucide-react";

const featureItems = [
  {
    icon: <Brain className="h-8 w-8 text-gideon" />,
    title: "Advanced AI",
    description: "Powered by state-of-the-art deep learning models to understand natural language and context.",
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-gideon" />,
    title: "Natural Conversations",
    description: "Talk with Gideon as you would with a human, with contextual understanding and memory.",
  },
  {
    icon: <Globe className="h-8 w-8 text-gideon" />,
    title: "Multilingual Support",
    description: "Communicate in over 50 languages with native-level translation and understanding.",
  },
  {
    icon: <Cpu className="h-8 w-8 text-gideon" />,
    title: "Task Automation",
    description: "Automate repetitive tasks and workflows with custom AI assistants.",
  },
  {
    icon: <Database className="h-8 w-8 text-gideon" />,
    title: "Knowledge Integration",
    description: "Connect to your data sources for personalized insights and information.",
  },
  {
    icon: <Lock className="h-8 w-8 text-gideon" />,
    title: "Enterprise Security",
    description: "Bank-level encryption and privacy controls to keep your data safe and secure.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-dark-800">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 heading">
            <span className="bg-gradient-to-r from-gideon to-gideon-300 text-transparent bg-clip-text">
              Powerful Features
            </span>
          </h2>
          <p className="text-gray-300 text-lg">
            Gideon AI combines cutting-edge technology with intuitive design to deliver 
            an AI assistant that truly understands your needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureItems.map((feature, index) => (
            <div 
              key={index} 
              className="bg-dark-900 p-8 rounded-lg border border-dark-700 hover:border-gideon/50 transition-all hover:shadow-[0_0_15px_rgba(74,111,165,0.15)] group"
            >
              <div className="mb-4 p-3 bg-dark-800 rounded-lg inline-block group-hover:bg-gideon/10 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-gideon transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
