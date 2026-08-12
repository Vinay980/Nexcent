import Image from "next/image";

import { calendarData } from "@/data/calendar";

export default function Calendar() {
  return (
    <section
      className="
        w-full bg-white
        px-[20px] py-[48px]

        min-[768px]:px-[48px]
        min-[768px]:py-[56px]

        min-[1200px]:h-[433.4px]
        min-[1200px]:px-[144px]
        min-[1200px]:py-0
      "
    >
      <div
        className="
          mx-auto flex w-full max-w-[1152px]
          flex-col items-center gap-[40px]

          min-[768px]:gap-[48px]

          min-[1200px]:h-[433.4px]
          min-[1200px]:flex-row
          min-[1200px]:items-center
          min-[1200px]:justify-between
          min-[1200px]:gap-0
        "
      >
        {/* Illustration */}
        <div
          className="
            relative
            flex w-full justify-center

            min-[768px]:w-[442px]

            min-[1200px]:h-[433px]
            min-[1200px]:w-[442px]
            min-[1200px]:shrink-0
          "
        >
          <Image
            src={calendarData.image.src}
            alt={calendarData.image.alt}
            width={442}
            height={329}
            className="
              h-auto w-full max-w-[442px]
              object-contain

              min-[1200px]:absolute
              min-[1200px]:left-0
              min-[1200px]:top-[52px]
              min-[1200px]:h-[328.99px]
              min-[1200px]:w-[441.53px]
              min-[1200px]:max-w-none
            "
          />
        </div>

        {/* Content */}
        <div
          className="
            flex w-full flex-col gap-[32px]

            min-[768px]:max-w-[661px]

            min-[1200px]:h-[308px]
            min-[1200px]:w-[661px]
            min-[1200px]:shrink-0
          "
        >
          {/* Heading + Description */}
          <div
            className="
              flex w-full flex-col gap-[16px]

              min-[1200px]:h-[224px]
              min-[1200px]:w-[601px]
            "
          >
            {/* Heading */}
            <h2
              className="
                w-full
                text-[32px]
                font-[600]
                leading-[40px]
                text-[#4D4D4D]

                min-[480px]:text-[34px]
                min-[480px]:leading-[42px]

                min-[768px]:text-[36px]
                min-[768px]:leading-[44px]

                min-[1200px]:h-[88px]
                min-[1200px]:w-[601px]
              "
            >
              {calendarData.title}
            </h2>

            {/* Description */}
            <p
              className="
                w-full
                text-[14px]
                font-[400]
                leading-[20px]
                text-[#717171]

                min-[1200px]:h-[120px]
                min-[1200px]:w-[601px]
              "
            >
              {calendarData.description}
            </p>
          </div>

          {/* Learn More */}
          <a
            href={calendarData.action.href}
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
              text-white
            "
          >
            {calendarData.action.label}
          </a>
        </div>
      </div>
    </section>
  );
}