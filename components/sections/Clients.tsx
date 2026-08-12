import Image from "next/image";

import { clientsData } from "@/data/clients";

export default function Clients() {
  return (
    <section
      className="
        h-[190px] w-full bg-white px-[144px]

        max-[1199px]:h-auto
        max-[1199px]:px-[48px]
        max-[1199px]:py-[48px]

        max-[767px]:px-[20px]
        max-[767px]:py-[40px]
      "
    >
      <div
        className="
          flex w-[1152px] flex-col gap-[16px]

          max-[1199px]:mx-auto
          max-[1199px]:w-full
          max-[1199px]:max-w-[1152px]
        "
      >
        {/* Heading */}
        <h2
          className="
            h-[44px] w-[1110px]
            text-center text-[36px] font-semibold leading-[44px]
            text-[#4D4D4D]

            max-[1199px]:h-auto
            max-[1199px]:w-full

            max-[767px]:text-[32px]
            max-[767px]:leading-[40px]
          "
        >
          {clientsData.title}
        </h2>

        {/* Description */}
        <p
          className="
            h-[24px] w-[1110px]
            text-center text-[16px] font-normal leading-[24px]
            text-[#717171]

            max-[1199px]:h-auto
            max-[1199px]:w-full

            max-[767px]:text-[14px]
            max-[767px]:leading-[20px]
          "
        >
          {clientsData.description}
        </p>

        {/* Clients Logos */}
        <div
          className="
            flex h-[98px] w-[1152px]
            items-center justify-between

            max-[1199px]:h-auto
            max-[1199px]:w-full
            max-[1199px]:flex-wrap
            max-[1199px]:justify-center
            max-[1199px]:gap-x-[60px]
            max-[1199px]:gap-y-[28px]

            max-[767px]:gap-x-[32px]
            max-[767px]:gap-y-[24px]
          "
        >
          {clientsData.logos.map((logo) => (
            <Image
              key={logo.src}
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="
                shrink-0 object-contain

                max-[1199px]:max-w-[140px]
                max-[1199px]:h-auto

                max-[767px]:max-w-[110px]
              "
            />
          ))}
        </div>
      </div>
    </section>
  );
}