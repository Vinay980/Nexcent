import Image from "next/image";

import { ctaData } from "@/data/cta";

export default function CTA() {
  return (
    <section
      className="
        flex h-[300px] w-full
        flex-col items-center
        gap-[32px]
        bg-[#F5F7FA]
        px-0 py-[32px]

        max-[1199px]:h-auto
        max-[1199px]:min-h-[300px]
        max-[1199px]:px-[48px]
        max-[1199px]:py-[40px]

        max-[767px]:gap-[24px]
        max-[767px]:px-[20px]
        max-[767px]:py-[40px]
      "
    >
      <h2
        className="
          h-[152px] w-[887px]
          text-center
          text-[64px]
          font-[600]
          leading-[76px]
          tracking-[0%]
          text-[#263238]

          max-[1199px]:h-auto
          max-[1199px]:w-full
          max-[1199px]:max-w-[887px]

          max-[767px]:text-[40px]
          max-[767px]:leading-[48px]

          max-[479px]:text-[32px]
          max-[479px]:leading-[40px]
        "
      >
        {ctaData.title}
      </h2>

      <a
        href={ctaData.action.href}
        className="
          flex h-[52px] w-[178px]
          shrink-0
          items-center justify-center
          gap-[8px]
          whitespace-nowrap
          rounded-[4px]
          bg-[#4CAF4F]
          px-[32px] py-[14px]
          text-[16px]
          font-[500]
          leading-[24px]
          text-white
        "
      >
        <span className="whitespace-nowrap">
          {ctaData.action.label}
        </span>

        <Image
          src={ctaData.arrow.src}
          alt=""
          width={24}
          height={24}
          className="h-[24px] w-[24px] shrink-0 object-contain brightness-0 invert"
        />
      </a>
    </section>
  );
}