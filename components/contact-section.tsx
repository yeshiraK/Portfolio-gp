import { Mail, Phone, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  return (
    <section id="contact" className="bg-[#0B0B0B] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-[52px] md:leading-[60px] font-bold text-white mb-4">
            Get in <span className="bg-[#FF4A60] text-white px-3 py-1 inline-block">touch</span>
          </h2>

          <div className="space-y-6 mb-12">
            <a
              href="mailto:yeshikrishnan@gmail.com"
              className="flex items-center justify-center gap-3 text-white hover:text-[#FF4A60] transition-colors text-lg font-semibold"
            >
              <Mail className="w-6 h-6" />
              yeshikrishnan@gmail.com
            </a>


            <div className="flex justify-center gap-8">
              <a
                href="https://github.com/yeshiraK"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-base font-semibold"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/yeshwanthy-s"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-base font-semibold"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </div>
          </div>

          <a href="mailto:yeshikrishnan@gmail.com">
            <Button className="bg-black text-white border-[3px] border-white hover:bg-white hover:text-black rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto">
              <Mail className="w-5 h-5" />
              Send me an email
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
