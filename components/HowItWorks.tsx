import {
  FiTarget,
  FiSettings,
  FiGitBranch,
  FiTrendingUp,
} from "react-icons/fi";

const steps = [
  {
    icon: <FiTarget className="w-8 h-8" />,
    title: "Select Elements",
    description:
      "Use the visual selector to point and click on webpage elements you want to interact with.",
  },
  {
    icon: <FiSettings className="w-8 h-8" />,
    title: "Configure Actions",
    description:
      "Choose from 50+ action types and configure them with simple forms. No coding needed.",
  },
  {
    icon: <FiGitBranch className="w-8 h-8" />,
    title: "Build Workflows",
    description:
      "Chain actions together, add conditions, loops, and AI-powered logic to create powerful workflows.",
  },
  {
    icon: <FiTrendingUp className="w-8 h-8" />,
    title: "Execute & Optimize",
    description:
      "Run your workflows instantly and use AI assistance to optimize performance and reliability.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Create powerful automation workflows in four simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-medical rounded-full flex items-center justify-center mb-6 text-white font-bold text-xl">
                  {index + 1}
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-medical/20 dark:from-primary/30 dark:to-medical/30 rounded-xl flex items-center justify-center mb-4 text-primary dark:text-primary">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-medical"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
