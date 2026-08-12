"use client";

import Image from "next/image";
import { useState } from "react";

import {
  navigationActions,
  navigationData,
} from "@/data/navigation";

export default function Header() {
  const [activeItem, setActiveItem] = useState(
    navigationData.find((item) => item.active)?.label ?? "Home",
  );

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative h-[84px] w-full bg-[#F5F7FA]">
      <div className="relative mx-auto h-full w-full max-w-[1440px]">
        {/* Logo */}
        <a
          href="#home"
          className="
            absolute left-[105px] top-[30px]
            flex h-[24px] w-[154.49px] items-center

            max-[1199px]:left-[48px]
            max-[767px]:left-[24px]
          "
        >
          <Image
            src="/images/logo.png"
            alt="Nexcent"
            width={155}
            height={24}
            className="h-[24px] w-[154.49px] object-contain"
            priority
          />
        </a>

        {/* Desktop Navigation */}
        <nav
          className="
            absolute left-[425.5px] top-[30px]
            flex h-[24px] items-center gap-[50px]

            max-[1199px]:left-[280px]
            max-[1199px]:gap-[28px]

            max-[1023px]:hidden
          "
        >
          {navigationData.map((item) => {
            const isActive = activeItem === item.label;

            return (
              <a
                key={item.label}
                href={item.href}
                onClick={() => {
                  setActiveItem(item.label);
                  setMenuOpen(false);
                }}
                className={`whitespace-nowrap text-[16px] leading-[24px] tracking-[0%] text-[#18191F] ${
                  isActive ? "font-[500]" : "font-[400]"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div
          className="
            absolute left-[1138px] top-[22px]
            flex h-[40px] w-[182px] flex-row gap-[14px]

            max-[1199px]:right-[48px]
            max-[1199px]:left-auto

            max-[1023px]:hidden
          "
        >
          {/* Login */}
          <a
            href={navigationActions.login.href}
            className="
              flex h-[40px] w-[77px] shrink-0
              items-center justify-center
              rounded-[6px]
              bg-[#F5F7FA]
              px-[20px] py-[10px]
              text-[14px] font-[500] leading-[20px]
              text-[#4CAF4F]
            "
          >
            {navigationActions.login.label}
          </a>

          {/* Sign Up */}
          <a
            href={navigationActions.signup.href}
            className="
              flex h-[40px] w-[91px] shrink-0
              items-center justify-center
              rounded-[6px]
              bg-[#4CAF4F]
              px-[20px] py-[10px]
              text-[14px] font-[500] leading-[20px]
              text-white
            "
          >
            {navigationActions.signup.label}
          </a>
        </div>

        {/* Mobile / Tablet Menu Button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((previous) => !previous)}
          className="
            absolute right-[48px] top-[22px]
            hidden h-[40px] w-[40px]
            items-center justify-center
            rounded-[6px]

            max-[1023px]:flex
            max-[767px]:right-[24px]
          "
        >
          <span className="flex flex-col gap-[5px]">
            <span className="h-[2px] w-[22px] bg-[#18191F]" />
            <span className="h-[2px] w-[22px] bg-[#18191F]" />
            <span className="h-[2px] w-[22px] bg-[#18191F]" />
          </span>
        </button>

        {/* Mobile / Tablet Navigation */}
        {menuOpen && (
          <div
            className="
              absolute left-0 top-[84px] z-50
              w-full
              border-t border-[#E5E7EB]
              bg-[#F5F7FA]
              px-[48px] py-[24px]
              shadow-[0_8px_16px_rgba(0,0,0,0.08)]

              max-[767px]:px-[24px]
            "
          >
            <nav className="flex flex-col gap-[20px]">
              {navigationData.map((item) => {
                const isActive = activeItem === item.label;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => {
                      setActiveItem(item.label);
                      setMenuOpen(false);
                    }}
                    className={`text-[16px] leading-[24px] text-[#18191F] ${
                      isActive ? "font-[500]" : "font-[400]"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>

            {/* Mobile Actions */}
            <div className="mt-[24px] flex gap-[14px]">
              <a
                href={navigationActions.login.href}
                className="
                  flex h-[40px] flex-1
                  items-center justify-center
                  rounded-[6px]
                  bg-[#F5F7FA]
                  px-[20px] py-[10px]
                  text-[14px] font-[500] leading-[20px]
                  text-[#4CAF4F]
                "
              >
                {navigationActions.login.label}
              </a>

              <a
                href={navigationActions.signup.href}
                className="
                  flex h-[40px] flex-1
                  items-center justify-center
                  rounded-[6px]
                  bg-[#4CAF4F]
                  px-[20px] py-[10px]
                  text-[14px] font-[500] leading-[20px]
                  text-white
                "
              >
                {navigationActions.signup.label}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}