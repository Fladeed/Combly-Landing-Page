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
