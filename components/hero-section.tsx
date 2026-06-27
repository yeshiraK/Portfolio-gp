import Image from "next/image"
import { Mail, FolderOpen } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div className="space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            I&apos;m{" "}
            <span className="bg-[#FF6B7A] text-white px-2 sm:px-3 py-1 inline-block">
              Yeshwanthy S
            </span>
            , an{" "}
            <span className="bg-[#2F81F7] text-white px-2 sm:px-3 py-1 inline-block">
              AI/ML Developer
            </span>
          </h1>

          <p className="text-[#393939] text-[16px] md:text-[18px] font-medium leading-[28px] md:leading-[30px] max-w-xl">
            Pre-final year Computer Science student passionate about AI,
            Machine Learning, and building intelligent applications. I enjoy
            transforming real-world problems into practical AI solutions using
            Python, LLMs, and modern technologies.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-7 pt-4">
            <Button
              asChild
              className="bg-[#0B0B0B] text-white hover:bg-black/90 rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[220px]"
            >
              <a href="mailto:yeshikrishnan@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                Get in Touch
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              className="bg-white border-[3px] border-black hover:bg-gray-50 rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[220px]"
            >
              <a href="#projects">
                <FolderOpen className="w-5 h-5 mr-2" />
                View Projects
              </a>
            </Button>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-full max-w-md aspect-square bg-[#FDB927] border-4 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <Image
              src="/images/girl.png"
              alt="Yeshwanthy - AI/ML Developer"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}