import {
  FiTarget,
  FiCpu,
  FiZap,
  FiGlobe,
  FiMessageCircle,
  FiCommand,
  FiActivity,
  FiMic,
  FiPackage,
} from "react-icons/fi";

const features = [
  {
    icon: <FiTarget className="w-8 h-8" />,
    title: "Visual Element Selection",
    description:
      "Point-and-click interface to select any element on a webpage with smart XPath generation.",
  },
  {
    icon: <FiCpu className="w-8 h-8" />,
    title: "AI-Powered Assistance",
    description:
      "Integrated AI helps you build workflows, suggest optimizations, and troubleshoot issues.",
  },
  {
    icon: <FiZap className="w-8 h-8" />,
    title: "Instant Execution",
    description:
      "Run workflows instantly with a single click or keyboard shortcut. No delays, pure speed.",
  },
  {
    icon: <FiGlobe className="w-8 h-8" />,
    title: "Cross-Website Automation",
    description:
      "Seamlessly execute workflows across multiple websites and tabs in a single flow.",
  },
  {
    icon: <FiMessageCircle className="w-8 h-8" />,
    title: "Smart AI Chat Integration",
    description:
      "Chat with AI while building workflows. Get suggestions, explanations, and quick fixes.",
  },
  {
    icon: <FiCommand className="w-8 h-8" />,
    title: "Flexible Action Types",
    description:
      "50+ action types including clicks, inputs, extractions, conditionals, and API calls.",
  },
  {
    icon: <FiActivity className="w-8 h-8" />,
    title: "Real-time Debugging",
    description:
      "Visual feedback and detailed logs help you identify and fix issues instantly.",
  },
  {
    icon: <FiMic className="w-8 h-8" />,
    title: "Voice Commands",
    description:
      "Control workflows with voice commands for hands-free automation execution.",
  },
  {
    icon: <FiPackage className="w-8 h-8" />,
    title: "Export & Share",
    description:
      "Export workflows as JSON, share with your team, or import pre-built templates.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-900 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Everything you need to build intelligent automation workflows
            without writing a single line of code.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-medical/20 dark:from-primary/30 dark:to-medical/30 rounded-xl flex items-center justify-center mb-4 text-primary dark:text-primary">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
