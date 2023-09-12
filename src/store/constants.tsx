import { sloganCardProps } from "@/components";

export interface AboutProps {
  title: string;
  description: string;
  image: string;
}

export const abouts: AboutProps[] = [
  {
    title: "Cute Models",
    description:
      "From our in-house Design and Creative studios to our monthly birthday cupcake breaks. We love to build moments.",
    image: "boys-shirts-100x100.jpg",
  },
  {
    title: "Awesome Products",
    description:
      "From our in-house Design and Creative studios to our monthly birthday cupcake breaks. We love to build moments.",
    image: "boys-jumpsuits-100x100.jpg",
  },
  {
    title: "Best Quality",
    description:
      "From our in-house Design and Creative studios to our monthly birthday cupcake breaks. We love to build moments.",
    image: "boys-jeans-100x100.jpg",
  },
];

export const Collections: sloganCardProps[] = [
  {
    id: 1,
    title: "Uy Tín",
    type: "Làm nên thương hiệu",
    image: "banner-girls-home.jpg",
    description: "Wolrd's Best Brand",
  },
  {
    id: 2,
    title: "Chất Lượng",
    type: "Trong từng sản phẩm",
    image: "banner-boys-home.jpg",
    description: "Increddible Quality",
  },
  {
    id: 3,
    title: "Đa Dạng",
    type: "mẫu mã phong phú",
    image: "banner-toys-home.jpg",
    description: "For all ages",
  },
];
