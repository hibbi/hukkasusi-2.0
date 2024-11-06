import Image from "next/image"

export default function Marquee() {
  return (
    <div className="">
              <div className="relative">
                <div className="leading-none text-6xl overflow-hidden select-none origin-top">
                  <div className="flex overflow-hidden">
                    <div className="flex items-center gap-10 mr-30 whitespace-nowrap animate-[scroll_40s_linear_infinite] hover:[animation-play-state:paused] tracking-tight">
                      <div className="uppercase font-bold">opetus</div>
                      <div className="relative aspect-[1.4] h-[.63em]">
                        <figure className="overflow-hidden absolute inset-0">
                          <div className="absolute inset-0">
                            <Image
                              className="w-full h-full object-cover object-center absolute top-0 left-0"
                              alt={"Konsta ja Vatu"}
                              src="/marquee.jpg"
                              width={800}
                              height={578}
                            />
                          </div>
                        </figure>
                      </div>
                      <div className="uppercase font-bold">portfolio</div>
                      <div className="relative aspect-[1.4] h-[.63em]">
                        <figure className="overflow-hidden absolute inset-0">
                          <div className="absolute inset-0">
                            <Image
                              className="w-full h-full object-cover object-center absolute top-0 left-0"
                              alt={"Konsta ja Vatu"}
                              src="/marquee-2.jpg"
                              width={800}
                              height={578}
                            />
                          </div>
                        </figure>
                      </div>
                      <div className="uppercase font-bold">opetus</div>
                      <div className="uppercase font-bold">portfolio</div>
                      <div className="uppercase font-bold">opetus</div>
                      <div className="relative aspect-[1.4] h-[0.63em]">
                        <figure className="overflow-hidden absolute inset-0">
                          <div className="absolute inset-0">
                            <Image
                              className="w-full h-full object-cover object-center"
                              alt="Konsta ja Vatu"
                              src="/marquee.jpg"
                              width={800}
                              height={578}
                            />
                          </div>
                        </figure>
                      </div>
                      <div className="uppercase font-bold">portfolio</div>
                      <div className="relative aspect-[1.4] h-[0.63em]">
                        <figure className="overflow-hidden absolute inset-0">
                          <div className="absolute inset-0">
                            <Image
                              className="w-full h-full object-cover object-center"
                              alt="Konsta ja Vatu"
                              src="/marquee-2.jpg"
                              width={800}
                              height={578}
                            />
                          </div>
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  )
}