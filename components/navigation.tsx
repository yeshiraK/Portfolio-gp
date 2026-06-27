import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  return (
    <div className="container mx-auto px-4 pt-8 pb-4">
      <nav className="flex items-center justify-between bg-white border-4 border-black rounded-xl px-5 py-3 max-w-4xl mx-auto shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
        <div className="flex items-center gap-6 flex-1 justify-center">
          <a href="#home" className="text-[16px] md:text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity">
            Home
          </a>
          <a href="#about" className="text-[16px] md:text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity">
            About
          </a>
          <a href="#skills" className="text-[16px] md:text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity">
            Skills
          </a>
          <a href="#projects" className="text-[16px] md:text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity">
            Projects
          </a>
          <a href="#achievements" className="text-[16px] md:text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity">
            Achievements
          </a>
          <a href="#contact" className="text-[16px] md:text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity">
            Contact
          </a>
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          <Button variant="outline" className="hidden sm:flex bg-white border-[2px] border-black hover:bg-gray-50 rounded-lg px-4 md:px-5 h-10 md:h-11 text-xs md:text-sm font-semibold whitespace-nowrap">
            Download Resume
          </Button>
          <Button className="bg-black text-white hover:bg-black/90 rounded-sm px-5 h-12 min-w-[48px] flex-shrink-0">
            <Mail className="w-10 h-10" strokeWidth={2.5} />
          </Button>
        </div>
      </nav>
    </div>
  )
}
