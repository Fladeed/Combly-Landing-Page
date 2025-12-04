export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 bg-hero-gradient">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-8">
          <div className="inline-block">
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              🚀 AI-Powered Browser Automation
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Transform Your Web Browsing
            <br />
            <span className="bg-primary-gradient bg-clip-text text-transparent">
              with AI Intelligence
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Combly.ai combines visual element selection, AI processing, and workflow automation
            to supercharge your productivity across any website.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <a
              href="#download"
              className="px-8 py-4 bg-primary-gradient text-white rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl"
            >
              Get Started Free
            </a>
            <a
              href="#features"
              className="px-8 py-4 border-2 border-primary text-primary rounded-xl font-semibold text-lg hover:bg-primary/5 transition-colors"
            >
              Explore Features
            </a>
          </div>

          <div className="pt-12">
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-success/20 rounded-lg flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-primary-gradient rounded-full mx-auto flex items-center justify-center">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                    </svg>
                  </div>
                  <p className="text-gray-500 text-lg">Visual Workflow Builder Demo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
