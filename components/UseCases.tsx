import { FiBriefcase, FiHeart, FiBook, FiCode } from "react-icons/fi";

const useCases = [
  {
    icon: <FiBriefcase className="w-8 h-8" />,
    title: "Business Automation",
    description:
      "Automate data entry, form filling, report generation, and repetitive business tasks.",
    examples: [
      "Automated invoice processing",
      "Lead data extraction",
      "Report generation",
    ],
  },
  {
    icon: <FiHeart className="w-8 h-8" />,
    title: "Healthcare & Medical",
    description:
      "Streamline patient data management, medical records, and healthcare workflows.",
    examples: [
      "Patient record updates",
      "Lab result processing",
      "Appointment scheduling",
    ],
  },
  {
    icon: <FiBook className="w-8 h-8" />,
    title: "Research & Data Collection",
    description:
      "Extract and analyze data from multiple sources for research and analysis.",
    examples: [
      "Web scraping research",
      "Competitive analysis",
      "Market research",
    ],
  },
  {
    icon: <FiCode className="w-8 h-8" />,
    title: "Development & Testing",
    description:
      "Automate testing workflows, development tasks, and quality assurance processes.",
    examples: [
      "Automated UI testing",
      "Form validation",
      "Integration testing",
    ],
  },
];

export default function UseCases() {
  return (
    <section id="use-cases" className="py-20 bg-white dark:bg-gray-900 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Use Cases
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Powerful automation across industries and workflows
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-medical/20 dark:from-primary/30 dark:to-medical/30 rounded-xl flex items-center justify-center mb-4 text-primary dark:text-primary">
                {useCase.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                {useCase.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {useCase.description}
              </p>
              <ul className="space-y-2">
                {useCase.examples.map((example, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-gray-600 dark:text-gray-400"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                    {example}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
