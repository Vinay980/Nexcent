import { clientsData } from "@/data/clients";

export const customersData = {
  testimonial:
    "Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.",

  image: {
    src: "/images/customer/image 9.png",
    alt: "Customer testimonial",
    width: 326,
    height: 326,
  },

  customer: {
    name: "Tim Smith",
    organization: "British Dragon Boat Racing Association",
  },

  logos: [
    clientsData.logos[0],
    clientsData.logos[1],
    clientsData.logos[2],
    clientsData.logos[3],
    clientsData.logos[4],
    clientsData.logos[5],
  ],

  cta: {
    label: "Meet all customers",
    href: "#",
  },

  arrow: {
    src: "/images/icons/Right.png",
    width: 24,
    height: 24,
  },
};