import { communityData } from "@/data/community";

export default function Community() {
  return (
    <section
      className="
        w-full bg-white
        px-[20px]

        min-[768px]:px-[48px]

        min-[1200px]:h-[120px]
        min-[1200px]:px-0

        max-[1199px]:h-auto
        max-[1199px]:py-[40px]

        max-[767px]:px-[20px]
        max-[767px]:py-[32px]
      "
    >
      <div
        className="
          mx-auto flex w-full
          flex-col items-center gap-[8px]

          min-[1200px]:h-[120px]

          max-[1199px]:max-w-[900px]
        "
      >
        {/* Heading */}
        <h2
          className="
            w-full
            text-center
            text-[32px]
            font-[600]
            leading-[40px]
            tracking-[0]
            text-[#4D4D4D]

            min-[480px]:text-[34px]
            min-[480px]:leading-[42px]

            min-[768px]:w-[542px]
            min-[768px]:text-[36px]
            min-[768px]:leading-[44px]

            min-[1200px]:h-[88px]
            min-[1200px]:w-[542px]

            max-[479px]:text-[28px]
            max-[479px]:leading-[36px]
          "
        >
          <span className="block whitespace-nowrap max-[479px]:whitespace-normal">
            {communityData.title.firstLine}
          </span>

          <span className="block whitespace-nowrap max-[479px]:whitespace-normal">
            {communityData.title.secondLine}
          </span>
        </h2>

        {/* Description */}
        <p
          className="
            w-full
            text-center
            text-[14px]
            font-[400]
            leading-[20px]
            tracking-[0]
            text-[#717171]

            min-[768px]:text-[16px]
            min-[768px]:leading-[24px]

            min-[1200px]:h-[24px]
            min-[1200px]:w-[1440px]

            max-[1199px]:max-w-[900px]

            max-[767px]:max-w-[100%]
          "
        >
          {communityData.description}
        </p>
      </div>
    </section>
  );
}