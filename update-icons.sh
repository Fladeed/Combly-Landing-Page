#!/bin/bash

# Features Component
cat > components/Features.tsx << 'EOF'
import { FiTarget, FiCpu, FiZap, FiGlobe, FiMessageCircle, FiCommand, FiActivity, FiMic, FiPackage } from "react-icons/fi";

export default function Features() {
  const features = [
    {
      icon: FiTarget,
      title: "Visual Element Selection",
      description: "Click-to-select any element on any webpage. Smart XPath generation with fallback alternatives.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: FiCpu,
      title: "Multi-AI Integration",
      description: "OpenAI GPT-4, Anthropic Claude, and Groq support. Switch providers and models on the fly.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: FiZap,
      title: "Visual Workflows",
      description: "Node-based workflow builder with drag-and-drop. Create complex automations visually.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: FiGlobe,
      title: "Cross-Website Automation",
      description: "Navigate and automate across multiple websites in a single workflow with smart tab management.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: FiMessageCircle,
      title: "Comby AI Chat",
      description: "Floating AI assistant on every page. Context-aware conversations with persistent history.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: FiCommand,
      title: "Quick Search (Ctrl+K)",
      description: "Command palette to instantly find and execute any automation. Fuzzy search across all items.",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: FiActivity,
      title: "Blood Analysis AI",
      description: "Smart detection and analysis of medical test results. Specialized healthcare automation.",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: FiMic,
      title: "Audio Recording",
      description: "Browser-based recording with AI transcription. Use voice input in your workflows.",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: FiPackage,
      title: "Import/Export",
      description: "Backup, share, and version control your automations. JSON workflow format for teams.",
      color: "from-violet-500 to-purple-500"
    }
  ];

  return (
    <section id="features" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Powerful Features for
            <span className="bg-primary-gradient bg-clip-text text-transparent"> Every Use Case</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to automate, integrate, and accelerate your web workflows
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl border-2 border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all duration-300 bg-white"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
EOF

# HowItWorks Component
cat > components/HowItWorks.tsx << 'EOF'
import { FiTarget, FiSettings, FiGitBranch, FiTrendingUp } from "react-icons/fi";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Select Elements",
      description: "Click on any input or output elements on a webpage. Combly intelligently captures them with robust XPath selectors.",
      icon: FiTarget
    },
    {
      number: "02",
      title: "Configure AI",
      description: "Choose your AI provider (OpenAI, Claude, Groq), select a model, and create or use existing prompts for processing.",
      icon: FiSettings
    },
    {
      number: "03",
      title: "Build Workflows",
      description: "Create simple Comblies or advanced visual workflows with nodes for input, processing, actions, and output.",
      icon: FiGitBranch
    },
    {
      number: "04",
      title: "Automate & Scale",
      description: "Execute with one click or keyboard shortcuts. Run across multiple websites and pages automatically.",
      icon: FiTrendingUp
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            How It <span className="bg-primary-gradient bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From selection to automation in four simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow h-full">
                  <div className="text-6xl font-bold text-primary/10 mb-4">{step.number}</div>
                  <div className="w-16 h-16 bg-primary-gradient rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
EOF

# UseCases Component
cat > components/UseCases.tsx << 'EOF'
import { FiBriefcase, FiHeart, FiBook, FiCode, FiCheck } from "react-icons/fi";

export default function UseCases() {
  const useCases = [
    {
      category: "Business",
      icon: FiBriefcase,
      examples: [
        "Automated form filling with AI-generated content",
        "Cross-platform data extraction and migration",
        "Intelligent report generation from web sources",
        "Customer support automation with context"
      ]
    },
    {
      category: "Healthcare",
      icon: FiHeart,
      examples: [
        "Blood test analysis and interpretation",
        "Medical record data extraction",
        "Patient information management",
        "Healthcare workflow automation"
      ]
    },
    {
      category: "Research",
      icon: FiBook,
      examples: [
        "Web scraping with AI summarization",
        "Multi-source data aggregation",
        "Academic research assistance",
        "Automated literature review"
      ]
    },
    {
      category: "Development",
      icon: FiCode,
      examples: [
        "End-to-end testing automation",
        "Cross-browser workflow testing",
        "Development task automation",
        "API testing with visual feedback"
      ]
    }
  ];

  return (
    <section id="use-cases" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Built for <span className="bg-primary-gradient bg-clip-text text-transparent">Every Industry</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From healthcare to development, Combly adapts to your workflow
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-100 hover:border-primary/30 transition-all"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-primary-gradient rounded-xl flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold">{useCase.category}</h3>
                </div>
                <ul className="space-y-3">
                  {useCase.examples.map((example, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <FiCheck className="w-6 h-6 text-success flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
EOF

# AIProviders Component
cat > components/AIProviders.tsx << 'EOF'
import { FiCpu, FiZap } from "react-icons/fi";
import { SiOpenai, SiAnthropic } from "react-icons/si";

export default function AIProviders() {
  const providers = [
    {
      name: "OpenAI",
      models: ["GPT-4", "GPT-4o", "GPT-4o-mini"],
      icon: SiOpenai,
      color: "from-green-400 to-emerald-500"
    },
    {
      name: "Anthropic Claude",
      models: ["Claude Sonnet 4.5", "Claude Opus"],
      icon: SiAnthropic,
      color: "from-orange-400 to-red-500"
    },
    {
      name: "Groq",
      models: ["Fast LLM Inference"],
      icon: FiZap,
      color: "from-purple-400 to-pink-500"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Powered by <span className="bg-primary-gradient bg-clip-text text-transparent">Leading AI</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from multiple AI providers and models for optimal performance
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {providers.map((provider, index) => {
            const Icon = provider.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${provider.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{provider.name}</h3>
                <div className="space-y-2">
                  {provider.models.map((model, i) => (
                    <div key={i} className="text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded-lg">
                      {model}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Configure temperature, max tokens, and system prompts for each AI interaction
          </p>
        </div>
      </div>
    </section>
  );
}
EOF

# CTA Component
cat > components/CTA.tsx << 'EOF'
import { FiDownload, FiBook } from "react-icons/fi";

export default function CTA() {
  return (
    <section id="download" className="py-20 px-6 bg-primary-gradient">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold text-white">
            Ready to Transform Your Browsing?
          </h2>
          <p className="text-xl md:text-2xl text-white/90">
            Install Combly.ai and start automating your web workflows today
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <a
              href="#"
              className="px-8 py-4 bg-white text-primary rounded-xl font-semibold text-lg hover:shadow-2xl transition-shadow inline-flex items-center gap-2"
            >
              <FiDownload className="w-5 h-5" />
              Install for Chrome
            </a>
            <a
              href="#"
              className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold text-lg hover:bg-white/10 transition-colors inline-flex items-center gap-2"
            >
              <FiBook className="w-5 h-5" />
              View Documentation
            </a>
          </div>

          <div className="pt-8 flex justify-center gap-8 text-white/80">
            <div>
              <div className="text-3xl font-bold">10K+</div>
              <div className="text-sm">Active Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold">500K+</div>
              <div className="text-sm">Automations Run</div>
            </div>
            <div>
              <div className="text-3xl font-bold">4.9★</div>
              <div className="text-sm">User Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
EOF

echo "✅ All components updated with react-icons!"
