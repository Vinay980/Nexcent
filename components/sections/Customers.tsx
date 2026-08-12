import Image from "next/image";

import { customersData } from "@/data/customers";

export default function Customers() {
  return (
    <section
      className="
        mt-[40px]
        h-[390px]
        w-full
        bg-[#F5F7FA]
        px-[144px]
        py-[32px]

        max-[1199px]:h-auto
        max-[1199px]:px-[48px]
        max-[1199px]:py-[40px]

        max-[767px]:px-[20px]
        max-[767px]:py-[32px]
      "
    >
      <div
        className="
          flex h-[326px] w-[1152px]
          flex-row gap-[78px]

          max-[1199px]:mx-auto
          max-[1199px]:h-auto
          max-[1199px]:w-full
          max-[1199px]:max-w-[900px]
          max-[1199px]:flex-col
          max-[1199px]:items-center
          max-[1199px]:gap-[40px]

          max-[767px]:gap-[32px]
        "
      >
        {/* Customer Image */}
        <Image
          src={customersData.image.src}
          alt={customersData.image.alt}
          width={326}
          height={326}
          className="
            h-[326px]
            w-[326px]
            shrink-0
            rounded-[8px]
            object-cover
            shadow-[0_8px_16px_0_rgba(171,190,209,0.4)]

            max-[767px]:h-[280px]
            max-[767px]:w-[280px]

            max-[479px]:h-[240px]
            max-[479px]:w-[240px]
          "
        />

        {/* Frame 11 */}
        <div
          className="
            flex h-[324px] w-[748px]
            flex-col gap-[32px]

            max-[1199px]:h-auto
            max-[1199px]:w-full
            max-[1199px]:max-w-[748px]

            max-[767px]:gap-[24px]
          "
        >
          {/* Content */}
          <div
            className="
              flex h-[244px] w-[748px]
              flex-col gap-[16px]

              max-[1199px]:h-auto
              max-[1199px]:w-full
            "
          >
            {/* Testimonial */}
            <p
              className="
                h-[168px]
                w-[748px]
                text-[16px]
                font-[500]
                leading-[24px]
                text-[#717171]

                max-[1199px]:h-auto
                max-[1199px]:w-full

                max-[767px]:text-[14px]
                max-[767px]:leading-[22px]
              "
            >
              {customersData.testimonial}
            </p>

            {/* Customer Information */}
            <div
              className="
                flex h-[60px] w-[748px]
                flex-col gap-[8px]

                max-[1199px]:h-auto
                max-[1199px]:w-full
              "
            >
              <h3
                className="
                  h-[28px]
                  w-[748px]
                  text-[20px]
                  font-[600]
                  leading-[28px]
                  text-[#4CAF4F]

                  max-[1199px]:h-auto
                  max-[1199px]:w-full
                "
              >
                {customersData.customer.name}
              </h3>

              <p
                className="
                  h-[24px]
                  w-[748px]
                  text-[16px]
                  font-[400]
                  leading-[24px]
                  text-[#89939E]

                  max-[1199px]:h-auto
                  max-[1199px]:w-full
                "
              >
                {customersData.customer.organization}
              </p>
            </div>
          </div>

          {/* Frame 14 */}
          <div
            className="
              flex h-[48px] w-[748px]
              flex-row items-center gap-[32px]

              max-[1199px]:h-auto
              max-[1199px]:w-full
              max-[1199px]:flex-wrap

              max-[767px]:gap-[20px]
            "
          >
            {/* Frame 13 - Logos */}
            <div
              className="
                flex h-[44px] w-[484px]
                items-center justify-between
                p-[8px]

                max-[1199px]:h-auto
                max-[1199px]:w-full
                max-[1199px]:max-w-[484px]
                max-[1199px]:justify-start
                max-[1199px]:gap-[20px]
                max-[1199px]:flex-wrap
              "
            >
              {customersData.logos.map((logo, index) => (
                <Image
                  key={`${logo}-${index}`}
                  src={logo}
                  alt=""
                  width={48}
                  height={48}
                  className="
                    h-[48px]
                    w-[48px]
                    shrink-0
                    rounded-[8px]
                    object-contain
                  "
                />
              ))}
            </div>

            {/* Meet all customers */}
            <a
              href={customersData.cta.href}
              className="
                flex h-[28px] w-[188px]
                shrink-0
                items-center
                whitespace-nowrap

                max-[1199px]:w-auto
                max-[767px]:w-full
              "
            >
              <span className="text-[20px] font-[600] leading-[28px] text-[#4CAF4F]">
                {customersData.cta.label}
              </span>

              <Image
                src={customersData.arrow.src}
                alt=""
                width={24}
                height={24}
                className="ml-[8px] h-[24px] w-[24px]"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}