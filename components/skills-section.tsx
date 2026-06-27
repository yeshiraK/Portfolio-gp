export function SkillsSection() {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      skills: ["Python", "LangChain", "RAG", "LLMs", "NLP", "scikit-learn", "FAISS", "ChromaDB"],
    },
    {
      title: "Web & Backend",
      skills: ["HTML", "CSS", "REST APIs", "PostgreSQL", "SQL"],
    },
    {
      title: "Data & Analysis",
      skills: ["Pandas", "Matplotlib", "Seaborn", "NumPy", "SciPy", "PCA", "TF-IDF"],
    },
    {
      title: "Tools & Libraries",
      skills: ["Git", "GitHub", "OCR", "Streamlit", "PyTorch"],
    },
  ]

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-[52px] md:leading-[60px] font-bold mb-4">
              My <span className="bg-[#FF4A60] text-white px-3 py-1 inline-block">Tech Stack</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white border-[3px] border-black rounded-[32px] p-8 hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300"
              >
                <h3 className="text-[28px] leading-[40px] font-bold mb-6 text-[#0B0B0B]">{category.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-[#F0F0F0] border-2 border-black rounded-full px-4 py-2 text-sm font-semibold text-[#0B0B0B] hover:bg-[#E0E0E0] transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
