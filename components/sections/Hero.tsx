import Image from "next/image";

import { heroData } from "@/data/hero";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        h-[599px]
        bg-[#F5F7FA]
        px-[144px]
        py-[96px]

        max-[1199px]:h-auto
        max-[1199px]:min-h-[599px]
        max-[1199px]:px-[48px]
        max-[1199px]:py-[80px]

        max-[767px]:min-h-0
        max-[767px]:px-[20px]
        max-[767px]:py-[64px]
      "
    >
      <div
        className="
          mx-auto flex h-full max-w-[1152px]
          items-center gap-[104px]

          max-[1199px]:gap-[48px]

          max-[767px]:flex-col
          max-[767px]:justify-center
          max-[767px]:gap-[48px]
        "
      >
        {/* Content */}
        <div
          className="
            flex w-[657px]
            shrink-0 flex-col

            max-[1199px]:w-full
            max-[1199px]:max-w-[657px]

            max-[767px]:w-full
            max-[767px]:max-w-none
          "
        >
          <h1
            className="
              text-[64px]
              font-semibold
              leading-[76px]
              text-[#4D4D4D]

              max-[1199px]:text-[56px]
              max-[1199px]:leading-[68px]

              max-[767px]:text-[44px]
              max-[767px]:leading-[54px]

              max-[479px]:text-[36px]
              max-[479px]:leading-[44px]
            "
          >
            {heroData.title.firstLine}
            <br />
            <span className="text-[#4CAF4F]">
              {heroData.title.secondLine}
            </span>
          </h1>

          <p
            className="
              mt-[16px]
              text-[16px]
              font-normal
              leading-[24px]
              text-[#717171]
            "
          >
            {heroData.description}
          </p>

          <button
            type="button"
            className="
              mt-[32px]
              flex h-[52px] w-[128px]
              items-center justify-center
              rounded-[4px]
              bg-[#4CAF4F]
              text-[16px]
              font-medium
              leading-[24px]
              text-white
            "
          >
            {heroData.action.label}
          </button>
        </div>

        {/* Illustration */}
        <div
          className="
            shrink-0

            max-[1199px]:flex
            max-[1199px]:justify-center
            max-[1199px]:w-full

            max-[767px]:w-auto
          "
        >
          <Image
            src={heroData.image.src}
            alt={heroData.image.alt}
            width={391}
            height={407}
            priority
            className="
              h-[407px]
              w-[391px]
              object-contain

              max-[1199px]:h-auto
              max-[1199px]:w-full
              max-[1199px]:max-w-[391px]

              max-[767px]:h-auto
              max-[767px]:w-[320px]

              max-[479px]:w-[280px]
            "
          />
        </div>
      </div>

      <div
        className="
          absolute
          bottom-[16px]
          left-1/2
          flex
          -translate-x-1/2
          items-center
          gap-[8px]
        "
      >
        {Array.from({ length: heroData.slides.total }).map((_, index) => (
          <span
            key={index}
            className={`h-[8px] w-[8px] rounded-full ${
              index + 1 === heroData.slides.active
                ? "bg-[#4CAF4F]"
                : "bg-[#C8E6C9]"
            }`}
          />
        ))}
      </div>
    </section>
  );
}