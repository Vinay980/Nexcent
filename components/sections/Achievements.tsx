import Image from "next/image";

import { achievementsData } from "@/data/achievements";

export default function Achievements() {
  return (
    <section
      className="
        w-full bg-[#F5F7FA]
        px-[20px] py-[48px]

        min-[768px]:px-[48px]
        min-[768px]:py-[56px]

        min-[1200px]:h-[288px]
        min-[1200px]:px-[144px]
        min-[1200px]:py-[64px]
      "
    >
      <div
        className="
          mx-auto flex w-full max-w-[1152px]
          flex-col gap-[40px]

          min-[768px]:gap-[48px]

          min-[1200px]:h-[160px]
          min-[1200px]:flex-row
          min-[1200px]:items-start
          min-[1200px]:justify-between
          min-[1200px]:gap-0
        "
      >
        {/* Section Heading */}
        <div
          className="
            flex w-full flex-col gap-[8px]

            min-[1200px]:h-[120px]
            min-[1200px]:w-[540px]
          "
        >
          <h2
            className="
              w-full
              text-[32px]
              font-[600]
              leading-[40px]
              text-[#4D4D4D]

              min-[480px]:text-[34px]
              min-[480px]:leading-[42px]

              min-[768px]:w-[540px]
              min-[768px]:text-[36px]
              min-[768px]:leading-[44px]

              min-[1200px]:h-[88px]
              min-[1200px]:w-[408px]
            "
          >
            {achievementsData.heading.firstLine}
            <br />
            <span className="text-[#4CAF4F]">
              {achievementsData.heading.highlightedLine}
            </span>
          </h2>

          <p
            className="
              w-full
              text-[14px]
              font-[400]
              leading-[20px]
              text-[#18191F]

              min-[768px]:w-[540px]
              min-[768px]:text-[16px]
              min-[768px]:leading-[24px]

              min-[1200px]:h-[24px]
            "
          >
            {achievementsData.description}
          </p>
        </div>

        {/* Counts */}
        <div
          className="
            grid w-full
            grid-cols-1
            gap-[24px]

            min-[480px]:grid-cols-2
            min-[480px]:gap-[30px]

            min-[768px]:w-[540px]

            min-[1200px]:h-[160px]
            min-[1200px]:grid-cols-1
            min-[1200px]:gap-[40px]
          "
        >
          {/* Row 1 */}
          <div
            className="
              flex w-full flex-row gap-[30px]

              min-[1200px]:h-[60px]
              min-[1200px]:w-[540px]
            "
          >
            {achievementsData.stats.slice(0, 2).map((stat) => (
              <StatItem key={stat.label} stat={stat} />
            ))}
          </div>

          {/* Row 2 */}
          <div
            className="
              flex w-full flex-row gap-[30px]

              min-[1200px]:h-[60px]
              min-[1200px]:w-[540px]
            "
          >
            {achievementsData.stats.slice(2, 4).map((stat) => (
              <StatItem key={stat.label} stat={stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StatItem({
  stat,
}: {
  stat: {
    value: string;
    label: string;
    icon: string;
  };
}) {
  return (
    <div
      className="
        flex min-w-0 flex-1 flex-row gap-[12px]

        min-[768px]:gap-[16px]

        min-[1200px]:h-[60px]
        min-[1200px]:w-[255px]
        min-[1200px]:flex-none
      "
    >
      <Image
        src={stat.icon}
        alt=""
        width={48}
        height={48}
        className="h-[48px] w-[48px] shrink-0 object-contain"
      />

      <div
        className="
          flex min-w-0 flex-1 flex-col

          min-[1200px]:h-[60px]
          min-[1200px]:w-[191px]
          min-[1200px]:flex-none
        "
      >
        <span
          className="
            truncate
            text-[24px]
            font-[700]
            leading-[32px]
            text-[#4D4D4D]

            min-[768px]:text-[28px]
            min-[768px]:leading-[36px]

            min-[1200px]:h-[36px]
            min-[1200px]:w-[191px]
          "
        >
          {stat.value}
        </span>

        <span
          className="
            truncate
            text-[14px]
            font-[400]
            leading-[20px]
            text-[#717171]

            min-[768px]:text-[16px]
            min-[768px]:leading-[24px]

            min-[1200px]:h-[24px]
            min-[1200px]:w-[191px]
          "
        >
          {stat.label}
        </span>
      </div>
    </div>
  );
}