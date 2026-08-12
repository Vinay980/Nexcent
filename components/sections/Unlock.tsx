import Image from "next/image";

import { unlockData } from "@/data/unlock";

export default function Unlock() {
  return (
    <section
      className="
        h-[433px] w-full bg-white px-[144px]

        max-[1199px]:h-auto
        max-[1199px]:px-[48px]
        max-[1199px]:py-[56px]

        max-[767px]:px-[20px]
        max-[767px]:py-[48px]
      "
    >
      <div
        className="
          flex h-[433px] w-[1152px]
          flex-row items-center justify-between

          max-[1199px]:mx-auto
          max-[1199px]:h-auto
          max-[1199px]:w-full
          max-[1199px]:max-w-[900px]
          max-[1199px]:gap-[48px]

          max-[767px]:flex-col
          max-[767px]:justify-center
          max-[767px]:gap-[40px]
        "
      >
        {/* Frame 35 */}
        <div
          className="
            relative h-[433px] w-[442px] shrink-0

            max-[1199px]:h-auto
            max-[1199px]:w-full
            max-[1199px]:max-w-[442px]

            max-[767px]:h-auto
            max-[767px]:w-full
          "
        >
          <Image
            src={unlockData.image.src}
            alt={unlockData.image.alt}
            width={441.53}
            height={328.99}
            className="
              absolute left-0 top-[52px]
              h-[328.99px] w-[441.53px]
              object-contain

              max-[1199px]:relative
              max-[1199px]:left-auto
              max-[1199px]:top-auto
              max-[1199px]:h-auto
              max-[1199px]:w-full
              max-[1199px]:max-w-[441.53px]

              max-[767px]:mx-auto
              max-[767px]:w-full
              max-[767px]:max-w-[380px]
            "
          />
        </div>

        {/* Frame 6 */}
        <div
          className="
            flex h-[268px] w-[661px]
            flex-col gap-[32px]

            max-[1199px]:h-auto
            max-[1199px]:w-full
            max-[1199px]:max-w-[661px]

            max-[767px]:gap-[24px]
          "
        >
          {/* Frame 5 */}
          <div
            className="
              flex h-[184px] w-[601px]
              flex-col gap-[16px]

              max-[1199px]:h-auto
              max-[1199px]:w-full
            "
          >
            {/* Heading */}
            <h2
              className="
                h-[88px] w-[601px]
                text-[36px]
                font-[600]
                leading-[44px]
                text-[#4D4D4D]

                max-[1199px]:h-auto
                max-[1199px]:w-full

                max-[767px]:text-[32px]
                max-[767px]:leading-[40px]

                max-[479px]:text-[28px]
                max-[479px]:leading-[36px]
              "
            >
              {unlockData.title}
            </h2>

            {/* Description */}
            <p
              className="
                h-[80px] w-[601px]
                text-[14px]
                font-[400]
                leading-[20px]
                text-[#717171]

                max-[1199px]:h-auto
                max-[1199px]:w-full
              "
            >
              {unlockData.description}
            </p>
          </div>

          {/* Button */}
          <a
            href={unlockData.action.href}
            className="
              flex h-[52px] w-[151px]
              shrink-0
              items-center justify-center
              whitespace-nowrap
              rounded-[4px]
              bg-[#4CAF4F]
              px-[32px] py-[14px]
              text-center
              text-[16px]
              font-[500]
              leading-[24px]
              text-[#FFFFFF]
            "
          >
            {unlockData.action.label}
          </a>
        </div>
      </div>
    </section>
  );
}