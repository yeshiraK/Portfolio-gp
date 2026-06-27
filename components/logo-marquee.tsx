export function LogoMarquee() {
  const skills = [
    "Python",
    "LangChain",
    "RAG",
    "LLMs",
    "React",
    "Next.js",
    "PostgreSQL",
    "Machine Learning",
    "NLP",
    "FastAPI",
    "Git",
  ]

  return (
    <div className="overflow-hidden">
      <div className="relative overflow-hidden bg-black py-16 -rotate-[5deg] mt-32 mb-16 min-w-[120vw] -mx-[10vw] left-0">
        <div className="flex items-center gap-8 animate-marquee whitespace-nowrap">
          {[...skills, ...skills, ...skills, ...skills].map((skill, index) => (
            <span key={index} className="text-white font-bold text-2xl">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
