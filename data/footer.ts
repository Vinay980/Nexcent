export const footerData = {
  companyInfo: {
    logo: {
      src: "/images/logo-white.png",
      alt: "Nexcent",
    },

    copyright: "Copyright © 2020 Nexcent ltd.",
    rights: "All rights reserved",

    socialLinks: [
      {
        name: "Instagram",
        href: "#",
        icon: "/images/icons/instagram.png",
      },
      {
        name: "Dribbble",
        href: "#",
        icon: "/images/icons/dribbble.png",
      },
      {
        name: "Twitter",
        href: "#",
        icon: "/images/icons/twitter.png",
      },
      {
        name: "YouTube",
        href: "#",
        icon: "/images/icons/youtube.png",
      },
    ],
  },

  links: {
    company: {
      title: "Company",
      items: [
        {
          label: "About us",
          href: "#",
        },
        {
          label: "Blog",
          href: "#",
        },
        {
          label: "Contact us",
          href: "#",
        },
        {
          label: "Pricing",
          href: "#",
        },
        {
          label: "Testimonials",
          href: "#",
        },
      ],
    },

    support: {
      title: "Support",
      items: [
        {
          label: "Help center",
          href: "#",
        },
        {
          label: "Terms of service",
          href: "#",
        },
        {
          label: "Legal",
          href: "#",
        },
        {
          label: "Privacy policy",
          href: "#",
        },
        {
          label: "Status",
          href: "#",
        },
      ],
    },
  },

  newsletter: {
    title: "Stay up to date",
    placeholder: "Your email address",
    icon: "/images/icons/send.png",
  },
} as const;