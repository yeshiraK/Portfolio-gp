import { FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function ExperienceSection() {
  const experiences = [
    {
      period: "May 2025 — July 2025",
      title: "Software Developer (AIML) Intern",
      company: "Synergech Technologies Pvt Ltd, Chennai",
      points: [
        "Developed a reusable Python-based Intelligent Document Processor that converted multiple document formats into structured datasets, enabling automated data extraction and downstream analytics workflows.",
        "Delivered a Terraform Automation System for a client, enabling natural language-driven multi-cloud infrastructure deployments across AWS, GCP, and Azure via LangChain and Gemini API integration.",
        "Created a Financial Document Analytics Engine for a client, processing invoices, Excel sheets, and multi-format documents into structured datasets with an NLP-based recommendation chatbot for decision support.",
      ],
    },
    {
      period: "March 2025 — May 2026",
      title: "Software Development Lead",
      company: "DiSAI — Digital Security Association of India, SRMIST",
      points: [
        "Led software development initiatives for the association, overseeing technical projects and guiding junior developers in building secure and scalable applications",
      ],
    },
  ]

  return (
    <section className="bg-black py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div className="text-white pt-0 md:pt-12 md:sticky md:top-12 self-start">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 md:mb-8 leading-[1.3]">
              Take a look at my <span className="bg-[#6366F1] text-white px-3 py-1 inline-block">experience</span>
            </h2>
            <p className="text-gray-400 mb-8 md:mb-10 leading-relaxed text-base md:text-lg">
              I build and deploy machine learning solutions that solve real business problems. My experience spans Python, data preprocessing, model training, and turning ML prototypes into usable tools. I focus on writing clean code and translating technical work into measurable impact.
            </p>
           <a
  href="https://drive.google.com/file/d/1CAP4iQIMmtDQn2dagzo4gET2eXvpFLmP/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-white text-black px-6 py-3 rounded-lg inline-flex items-center gap-2"
>
  <FileText className="w-5 h-5" />
  See full resume
</a>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white border-4 border-black rounded-3xl overflow-hidden">
                <div className="flex items-center justify-between mb-4 md:mb-6 pt-6 md:pt-8 px-6 md:px-8">
                  <div className="text-base md:text-[22px] leading-tight md:leading-[34px] font-bold text-[#0B0B0B]">
                    {exp.period}
                  </div>
                </div>

                <div className="border-t-[3px] border-black mb-4 md:mb-6"></div>

                <div className="px-6 md:px-8 pb-6 md:pb-8">
                  <h3 className="text-xl md:text-[28px] leading-tight md:leading-[40px] font-bold text-[#0B0B0B] mb-2 md:mb-3">
                    {exp.title}
                  </h3>
                  <p className="text-[#6366F1] text-sm md:text-[16px] leading-relaxed font-semibold mb-4">
                    {exp.company}
                  </p>
                  <ul className="space-y-2">
                    {exp.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="text-[#393939] text-base md:text-[18px] leading-relaxed md:leading-[28px] flex items-start gap-3">
                        <span className="text-[#0B0B0B] font-bold mt-1">·</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
