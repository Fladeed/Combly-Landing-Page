export default function AIProviders() {
  const providers = [
    {
      name: "OpenAI",
      models: ["GPT-4", "GPT-4o", "GPT-4o-mini"],
      icon: "🚀",
      color: "from-green-400 to-emerald-500"
    },
    {
      name: "Anthropic Claude",
      models: ["Claude Sonnet 4.5", "Claude Opus"],
      icon: "🧠",
      color: "from-orange-400 to-red-500"
    },
    {
      name: "Groq",
      models: ["Fast LLM Inference"],
      icon: "⚡",
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
          {providers.map((provider, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all group"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${provider.color} rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform`}>
                {provider.icon}
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
          ))}
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
