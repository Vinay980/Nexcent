import Image from "next/image";

import { communityUpdatesData } from "@/data/communityUpdates";

export default function CommunityUpdates() {
  return (
    <section
      className="
        flex w-full flex-col
        gap-[32px]
        bg-white
        px-[20px]
        py-[48px]

        min-[768px]:gap-[32px]
        min-[768px]:px-[48px]
        min-[768px]:py-[56px]

        min-[1200px]:h-[506px]
        min-[1200px]:gap-[16px]
        min-[1200px]:px-0
        min-[1200px]:py-[48px]
      "
    >
      {/* Community Heading */}
      <div
        className="
          mx-auto flex w-full
          flex-col items-center gap-[8px]

          min-[768px]:max-w-[1110px]

          min-[1200px]:h-[124px]
          min-[1200px]:w-[1110px]
        "
      >
        <h2
          className="
            w-full
            text-center
            text-[32px]
            font-[600]
            leading-[40px]
            text-[#4D4D4D]

            min-[480px]:text-[34px]
            min-[480px]:leading-[42px]

            min-[768px]:text-[36px]
            min-[768px]:leading-[44px]

            min-[1200px]:h-[44px]
            min-[1200px]:w-[1110px]
          "
        >
          {communityUpdatesData.title}
        </h2>

        <p
          className="
            w-full
            text-center
            text-[14px]
            font-[400]
            leading-[20px]
            text-[#717171]

            min-[480px]:max-w-[628px]

            min-[768px]:text-[16px]
            min-[768px]:leading-[24px]

            min-[1200px]:h-[72px]
            min-[1200px]:w-[628px]
          "
        >
          {communityUpdatesData.description}
        </p>
      </div>

      {/* Cards */}
      <div
        className="
          mx-auto grid w-full
          grid-cols-1
          justify-items-center
          gap-[88px]

          min-[600px]:grid-cols-2
          min-[600px]:gap-x-[24px]
          min-[600px]:gap-y-[88px]

          min-[900px]:grid-cols-3
          min-[900px]:gap-x-[24px]

          min-[1200px]:flex
          min-[1200px]:h-[366px]
          min-[1200px]:w-full
          min-[1200px]:flex-row
          min-[1200px]:items-start
          min-[1200px]:justify-between
          min-[1200px]:gap-0
          min-[1200px]:px-[144px]
        "
      >
        {communityUpdatesData.posts.map((post) => (
          <article
            key={post.title}
            className="
              relative
              h-[366px]
              w-[368px]
              max-w-full
              shrink-0
            "
          >
            {/* Image */}
            <Image
              src={post.image}
              alt={post.title}
              width={368}
              height={286}
              className="
                absolute left-0 top-0
                h-[286px] w-[368px]
                max-w-full
                rounded-[8px]
                object-cover
              "
            />

            {/* Content Card */}
            <div
              className="
                absolute left-1/2 top-[190px]
                z-10
                flex h-[176px] w-[317px]
                max-w-[calc(100%-24px)]
                -translate-x-1/2
                flex-col
                gap-[16px]
                rounded-[8px]
                bg-[#F5F7FA]
                p-[16px]
                shadow-[0_8px_16px_0_rgba(171,190,209,0.4)]

                min-[1200px]:h-[176px]
                min-[1200px]:w-[317px]
                min-[1200px]:max-w-none
              "
            >
              {/* Title */}
              <h3
                className="
                  h-[84px]
                  w-full
                  text-center
                  text-[18px]
                  font-[600]
                  leading-[26px]
                  text-[#717171]

                  min-[768px]:text-[20px]
                  min-[768px]:leading-[28px]

                  min-[1200px]:h-[84px]
                  min-[1200px]:w-[285px]
                  min-[1200px]:text-[20px]
                  min-[1200px]:leading-[28px]
                "
              >
                {post.title}
              </h3>

              {/* Read More */}
              <div
                className="
                  flex h-[44px] w-full
                  items-center
                  justify-center
                  gap-[8px]
                  p-[8px]

                  min-[1200px]:w-[285px]
                "
              >
                <a
                  href={post.href}
                  className="
                    whitespace-nowrap
                    text-[18px]
                    font-[600]
                    leading-[28px]
                    text-[#4CAF4F]

                    min-[768px]:text-[20px]
                    min-[1200px]:h-[28px]
                    min-[1200px]:w-[99px]
                    min-[1200px]:text-[20px]
                  "
                >
                  {post.readMore}
                </a>

                <span
                  aria-hidden="true"
                  className="
                    text-[18px]
                    font-[600]
                    leading-[28px]
                    text-[#4CAF4F]

                    min-[768px]:text-[20px]
                  "
                >
                  →
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}