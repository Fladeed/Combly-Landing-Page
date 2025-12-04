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
