import Image from "next/image";

import { communityCards } from "@/data/communityCards";

export default function CommunityCards() {
  return (
    <section
      className="
        w-full bg-white
        px-[20px] pb-[48px]

        min-[768px]:px-[48px]
        min-[768px]:pb-[56px]

        min-[1200px]:h-[280px]
        min-[1200px]:px-[144px]
        min-[1200px]:pb-0
      "
    >
      <div
        className="
          mx-auto flex w-full max-w-[1152px]
          flex-col items-center gap-[24px]

          min-[768px]:grid
          min-[768px]:grid-cols-2
          min-[768px]:gap-[24px]

          min-[1200px]:h-full
          min-[1200px]:flex
          min-[1200px]:flex-row
          min-[1200px]:items-start
          min-[1200px]:justify-between
          min-[1200px]:gap-0
        "
      >
        {communityCards.map((card, index) => (
          <article
            key={card.title}
            className={`
              flex w-full
              flex-col items-center
              gap-[8px]
              rounded-[8px]
              bg-white
              px-[24px]
              py-[24px]
              shadow-[0_2px_4px_0_rgba(171,190,209,0.2)]

              min-[480px]:max-w-[360px]

              min-[768px]:w-full
              min-[768px]:max-w-none

              min-[1200px]:w-[299px]
              min-[1200px]:shrink-0
              ${
                index === 1
                  ? "min-[1200px]:h-[280px]"
                  : "min-[1200px]:h-[260px]"
              }
            `}
          >
            {/* Icon */}
            <div className="flex h-[56px] w-[65px] shrink-0 items-center justify-center">
              <Image
                src={card.icon}
                alt=""
                width={65}
                height={56}
                className="h-[56px] w-[65px] object-contain"
              />
            </div>

            {/* Content */}
            <div className="flex w-full flex-col items-center gap-[12px]">
              <h3
                className={`
                  w-full
                  text-center
                  text-[24px]
                  font-[700]
                  leading-[32px]
                  text-[#4D4D4D]

                  min-[768px]:text-[28px]
                  min-[768px]:leading-[36px]

                  min-[1200px]:text-[28px]
                  min-[1200px]:leading-[36px]
                  ${
                    index === 2
                      ? "min-[1200px]:w-[231px]"
                      : "min-[1200px]:w-[267px]"
                  }
                `}
              >
                {card.title}
              </h3>

              <p
                className={`
                  w-full
                  text-center
                  text-[14px]
                  font-[400]
                  leading-[20px]
                  text-[#717171]

                  min-[1200px]:text-[14px]
                  min-[1200px]:leading-[20px]
                  ${
                    index === 1
                      ? "min-[1200px]:w-[240px]"
                      : "min-[1200px]:w-[251px]"
                  }
                `}
              >
                {card.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}