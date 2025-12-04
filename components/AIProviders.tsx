import { SiOpenai, SiAnthropic } from "react-icons/si";
import { FiZap } from "react-icons/fi";

const providers = [
  {
    icon: <SiOpenai className="w-12 h-12" />,
    name: "OpenAI",
    description:
      "GPT-4 and GPT-3.5 integration for intelligent workflow suggestions and automation.",
    features: ["GPT-4 Turbo", "GPT-3.5", "Function Calling"],
  },
  {
    icon: <SiAnthropic className="w-12 h-12" />,
    name: "Anthropic Claude",
    description:
      "Claude 3.5 Sonnet and other models for advanced reasoning and context understanding.",
    features: ["Claude 3.5 Sonnet", "Claude 3 Opus", "Long Context"],
  },
  {
    icon: <FiZap className="w-12 h-12" />,
    name: "Groq",
    description:
      "Lightning-fast inference with Llama and Mixtral models for real-time automation.",
    features: ["Llama 3.1", "Mixtral 8x7B", "Ultra-Fast"],
  },
];

export default function AIProviders() {
  return (
    <section
      id="ai-providers"
      className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            AI Provider Integration
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Connect with leading AI providers to supercharge your automation
            workflows
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {providers.map((provider, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary hover:shadow-xl transition-all duration-300"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-medical/20 dark:from-primary/30 dark:to-medical/30 rounded-xl flex items-center justify-center mb-6 text-primary dark:text-primary mx-auto">
                {provider.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3 text-center">
                {provider.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 text-center">
                {provider.description}
              </p>
              <div className="space-y-2">
                {provider.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-center text-gray-600 dark:text-gray-400"
                  >
                    <span className="w-1.5 h-1.5 bg-medical rounded-full mr-2"></span>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            Use your own API keys or let Combly handle the complexity
          </p>
        </div>
      </div>
    </section>
  );
}
