import { Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ProjectsSection() {
  const projects = [
    {
      title: "Self-Pruning Neural Network",
      description:
        "Developed a self-pruning neural network in PyTorch that dynamically learns which connections to remove during training using custom prunable layers, learnable sigmoid gates, and L1 sparsity regularization. Evaluated on the CIFAR-10 dataset, the model achieved 97.9% weight sparsity (47× compression) while retaining test accuracy, with comprehensive analysis through λ ablation studies, ROC curves, confusion matrices, and gate distribution visualizations.",
      tags: ["Python", "PyTorch", "NumPy", "CIFAR-10"],
      github: "https://github.com/yeshiraK/self-pruning-neural-network",
    },
    {
      title: "Multimodal Product Price Prediction",
      description:
        "Designed and implemented a multimodal product price prediction model that combines text, image, and numerical data to estimate product prices. The solution leveraged LightGBM, TF-IDF, and PCA to process over 75,000 product records, using custom evaluation metrics and cross-validation to build an efficient and accurate prediction pipeline.",
      tags: ["Python", "LightGBM", "TF-IDF", "PCA", "scikit-learn", "NumPy"],
      github: "",
    },
    {
      title: "FloatChat — ARGO Oceanographic AI",
      description:
        "AI platform for exploring ARGO oceanographic datasets with natural language querying, anomaly detection using Isolation Forest, and interactive dashboards.",
      tags: ["Python", "Streamlit", "PostgreSQL", "Pandas", "scikit-learn", "Plotly"],
      github: "",
    },
    {
      title: "Document Intelligence",
      description:
        "Built an Intelligent Document Processing platform that extracts structured data from PDFs, invoices, and other business documents using OCR, Gemini, and LangChain. The application automates document understanding, transforms unstructured content into structured datasets, and enables efficient analytics and AI-powered information retrieval.",
      tags: ["Python", "Gemini API", "LangChain", "OCR", "Pandas", "pdfplumber", "FAISS", "ChromaDB", "Streamlit"],
      github: "",
    },
    {
      title: "Mini-CRM",
      description:
        "Developed XenoCRM, an AI-native CRM that leverages Gemini AI to simplify customer management, audience segmentation, and campaign creation through natural language interactions. Built with Next.js, TypeScript, Neon PostgreSQL, and Drizzle ORM, the platform includes real-time analytics, callback-driven campaign delivery simulation, and an intuitive dashboard for tracking customer engagement and marketing performance.",
      tags: ["Next.js", "Tailwind CSS", "Gemini 2.5 Flash", "Neon PostgreSQL", "Drizzle ORM", "Vercel", "Railway"],
      github: "https://mini-crm-bice-ten.vercel.app/",
    },
    {
      title: "Transaction validator",
      description:
        "Built TransactValidator, a browser-based data validation platform that analyzes transaction datasets, performs comprehensive quality checks, and generates clean outputs, error reports, and AI-powered insights. Developed using React, Vite, Papa Parse, and Groq-powered Llama models, the application streamlines dataset validation through interactive analytics, automated processing, and exportable reports.",
      tags: ["React + Vite", "JavaScript", "Papa Parse", "Groq API", "Llama", "JSZip"],
      github: "https://transact-validator.vercel.app/",
    },
  ]

  return (
    <section id="projects" className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Take a look at my <span className="bg-[#FFC224] text-black px-3 py-1 inline-block">projects</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white border-4 border-black rounded-3xl overflow-hidden hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 flex flex-col"
            >
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <h3 className="text-xl md:text-[28px] font-bold mb-3 leading-tight md:leading-[40px] text-[#0B0B0B]">
                  {project.title}
                </h3>

                <p className="text-base md:text-[16px] text-[#393939] mb-6 leading-relaxed font-medium flex-1 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-gray-200 text-[#0B0B0B] text-xs font-semibold px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-black text-white hover:bg-black/90 rounded-lg px-5 py-2.5 font-semibold text-sm md:text-base w-fit transition-colors"
                >
                  <Github className="w-4 h-4" />
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <a
            href="https://github.com/yeshiraK"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-black text-white hover:bg-black/90 rounded-lg px-8 py-4 font-semibold text-base md:text-lg transition-colors"
          >
            <Github className="w-5 h-5" />
            View all on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
