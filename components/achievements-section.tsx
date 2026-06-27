export function AchievementsSection() {
  const achievements = [
    {
      emoji: "🏆",
      title: "Winner — ML Battle Arena",
      organization: "SRMIST",
      date: "Feb 2026",
    },
    {
      emoji: "🏆",
      title: "Winner — React JS Hackathon",
      organization: "GDG, Google Developer Groups · VIT",
      date: "Dec 2024",
    },
    {
      emoji: "🏆",
      title: "Winner — Next.js:3000 Hackathon",
      organization: "GDG, Google Developer Groups · VIT",
      date: "March 2025",
    },
    {
      emoji: "⭐",
      title: "Selected Participant — Amazon ML Summer School 2025",
      organization: "Successfully completed the program",
      date: "",
    },
  ]

  return (
    <section id="achievements" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-[52px] md:leading-[60px] font-bold mb-4">
              My <span className="bg-[#FFC224] text-black px-3 py-1 inline-block">achievements</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white border-[3px] border-black rounded-[32px] p-8 hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300"
              >
                <div className="text-4xl mb-4">{achievement.emoji}</div>
                <h3 className="text-[24px] leading-[32px] font-bold mb-2 text-[#0B0B0B]">{achievement.title}</h3>
                <p className="text-[16px] leading-[24px] font-medium text-[#393939] mb-2">{achievement.organization}</p>
                {achievement.date && (
                  <p className="text-[14px] leading-[22px] text-[#6366F1] font-semibold">{achievement.date}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
