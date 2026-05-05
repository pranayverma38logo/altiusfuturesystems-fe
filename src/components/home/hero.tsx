'use client';

import { TextReveal } from '@/src/components/animation/text-reveal-animation';
import HeroVideo from '@/src/components/home/hero-video';
import Image from 'next/image';

const Hero = () => {
  return (
    <section
      className="relative min-h-[130vh] overflow-hidden pt-86 sm:pt-40 md:pt-32 lg:pt-36 xl:pt-[200px]"
      aria-labelledby="hero-heading"
    >
      <div className="main-container relative z-4">
        <div className="space-y-14 md:space-y-16">
          <div className="space-y-10 md:space-y-14">
            {/* content */}
            <div className="space-y-3 text-center">
              <TextReveal instant>
                <h1 className="font-sora mx-auto w-full max-w-[1036px] text-center text-3xl font-normal leading-[115%] sm:text-4xl md:text-sora-heading-2 md:leading-[110%] lg:text-sora-heading-1">
                  <span className="text-white">We aren&apos;t just building.</span>

                  <span className="-mt-1 block text-white/30">We&apos;re defining what&apos;s next.</span>
                </h1>
              </TextReveal>

              <TextReveal instant delay={0.2}>
                <p
                  className="font-inter-tight mx-auto w-full max-w-[360px] text-center text-sm font-normal text-white/50 sm:max-w-[420px] sm:text-base md:max-w-[450px] md:text-tagline-2"
                  aria-describedby="hero-heading"
                >
                  One vision. Powered by innovation, adaptability, and excellence.
                </p>
              </TextReveal>
            </div>

          </div>

        </div>
      </div>

      {/* hero gradient video background */}
      <HeroVideo />

      {/* overlays */}
      <div
        className="to-background-7 pointer-events-none absolute -bottom-10 left-0 z-20 h-[184px] w-full bg-linear-to-b from-transparent from-[10.09%] to-[89.05%] select-none"
        aria-hidden
      />
      <div
        className="to-background-7 pointer-events-none absolute -bottom-12 left-0 z-19 h-[104px] w-full bg-linear-to-b from-transparent from-[10.09%] to-[69.05%] select-none"
        aria-hidden
      />
      <div
        className="to-background-7 pointer-events-none absolute -bottom-2 left-0 z-18 h-10 w-full bg-linear-to-b from-transparent from-[10.09%] to-[55.05%] select-none"
        aria-hidden
      />

      {/* bottom blend */}
      <div
        className="absolute left-0 z-20 hidden h-[200px] w-full min-[1920px]:-bottom-5 lg:-bottom-22 lg:block xl:-bottom-17 2xl:-bottom-7"
        aria-hidden
      >
        <Image
          src="/images/blend.png"
          alt=""
          width={1920}
          height={200}
          className="size-full object-cover object-bottom"
        />
      </div>
    </section>
  );
};

export default Hero;
