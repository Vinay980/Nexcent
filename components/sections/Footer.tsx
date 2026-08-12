import Image from "next/image";

import { footerData } from "@/data/footer";

export default function Footer() {
  return (
    <footer
      className="
        flex h-[328px] w-full
        bg-[#263238]
        px-[165px] py-[64px]

        max-[1199px]:h-auto
        max-[1199px]:min-h-[328px]
        max-[1199px]:flex-col
        max-[1199px]:gap-[48px]
        max-[1199px]:px-[48px]
        max-[1199px]:py-[56px]

        max-[767px]:gap-[40px]
        max-[767px]:px-[24px]
        max-[767px]:py-[48px]
      "
    >
      {/* Company Info */}
      <div
        className="
          flex h-[189.67px] w-[350px]
          shrink-0 flex-col gap-[40px]

          max-[1199px]:h-auto
          max-[1199px]:w-full
          max-[1199px]:max-w-[350px]

          max-[767px]:gap-[32px]
        "
      >
        {/* Logo */}
        <div className="flex h-[29.67px] w-[191px] shrink-0 items-center">
          <Image
            src={footerData.companyInfo.logo.src}
            alt={footerData.companyInfo.logo.alt}
            width={191}
            height={30}
            className="h-[29.67px] w-[191px] object-contain"
          />
        </div>

        {/* Copyright */}
        <div className="flex flex-col">
          <p className="text-[14px] font-[400] leading-[20px] text-[#F5F7FA]">
            {footerData.companyInfo.copyright}
          </p>

          <p className="mt-[8px] text-[14px] font-[400] leading-[20px] text-[#F5F7FA]">
            {footerData.companyInfo.rights}
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex h-[32px] flex-row gap-[16px]">
          {footerData.companyInfo.socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              aria-label={social.name}
              className="flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[#37474F]"
            >
              <Image
                src={social.icon}
                alt=""
                width={18}
                height={18}
                className="h-[18px] w-[18px] object-contain"
              />
            </a>
          ))}
        </div>
      </div>

      {/* Links */}
      <div
        className="
          ml-[125px]
          flex h-[200px] w-[635px]
          shrink-0 flex-row gap-[30px]

          max-[1199px]:ml-0
          max-[1199px]:h-auto
          max-[1199px]:w-full
          max-[1199px]:max-w-[800px]
          max-[1199px]:flex-wrap
          max-[1199px]:gap-x-[48px]
          max-[1199px]:gap-y-[40px]

          max-[767px]:gap-x-[32px]
          max-[767px]:gap-y-[40px]
        "
      >
        {/* Company */}
        <div
          className="
            flex h-[200px] w-[160px]
            shrink-0 flex-col gap-[24px]

            max-[767px]:h-auto
          "
        >
          <h3 className="h-[28px] w-[160px] text-[20px] font-[600] leading-[28px] text-white">
            {footerData.links.company.title}
          </h3>

          <div className="flex flex-col gap-[12px]">
            {footerData.links.company.items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[14px] font-[400] leading-[20px] text-[#F5F7FA]"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* Support */}
        <div
          className="
            flex h-[200px] w-[160px]
            shrink-0 flex-col gap-[24px]

            max-[767px]:h-auto
          "
        >
          <h3 className="h-[28px] w-[160px] text-[20px] font-[600] leading-[28px] text-white">
            {footerData.links.support.title}
          </h3>

          <div className="flex flex-col gap-[12px]">
            {footerData.links.support.items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[14px] font-[400] leading-[20px] text-[#F5F7FA]"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* Stay Up To Date */}
        <div
          className="
            flex h-[92px] w-[255px]
            shrink-0 flex-col gap-[24px]

            max-[1199px]:h-auto

            max-[767px]:w-full
            max-[767px]:max-w-[350px]
          "
        >
          <h3 className="h-[28px] w-[160px] text-[20px] font-[600] leading-[28px] text-white">
            {footerData.newsletter.title}
          </h3>

          <div className="flex h-[40px] w-[255px] items-center justify-between rounded-[8px] bg-white/20 px-[12px] max-[767px]:w-full">
            <span className="truncate text-[14px] font-[400] leading-[20px] text-[#D9DBE1]">
              {footerData.newsletter.placeholder}
            </span>

            <Image
              src={footerData.newsletter.icon}
              alt=""
              width={18}
              height={18}
              className="h-[18px] w-[18px] shrink-0 object-contain"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}