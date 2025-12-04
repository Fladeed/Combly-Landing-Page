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
