import {
  BlogProps,
  CategoryCardCardProps,
  ColectionCardProps,
  ProductCardProps,
} from "@/components";
import { BlogPreviewProps as BlogPreview } from "@/components/BlogPreview";

export const products: ProductCardProps[] = [
  {
    id: 1,
    name: "Gấu Chó",
    image: "baby-prod21-1-390x439.jpg",
    price: 200000,
    promotion: 25,
  },
  { id: 2, name: "Gấu mèo", image: "baby-prod22-1-390x439.jpg", price: 200000 },
  {
    id: 3,
    name: "Gấu heo",
    image: "baby-prod17-2-390x439.jpg",
    price: 200000,
    promotion: 50,
  },
  { id: 4, name: "Gấu heo", image: "baby-prod23-1-390x439.jpg", price: 200000 },
  { id: 5, name: "Gấu heo", image: "baby-prod20-1-390x439.jpg", price: 200000 },
  { id: 6, name: "Gấu heo", image: "baby-prod19-1-390x439.jpg", price: 200000 },
  { id: 7, name: "Gấu heo", image: "baby-prod8-4-390x439.jpg", price: 200000 },
  { id: 8, name: "Gấu heo", image: "baby-prod24-1-390x439.jpg", price: 200000 },
];

export interface PopularPost {
  id: number;
  title: string;
  image: string;
}

export interface Categorie {
  id: number;
  name: string;
}

export const categories: Categorie[] = [
  { id: 1, name: "Fashion" },
  { id: 2, name: "Lifestyle" },
  { id: 3, name: "Party Time" },
];

export const shopCategories: CategoryCardCardProps[] = [
  { id: 1, title: "Girls", image: "girls-cat-thumb.jpg", type: "Clothing" },
  { id: 2, title: "Boys", image: "boys-cat-thumb.jpg", type: "Clothing" },
  {
    id: 3,
    title: "Shoes",
    image: "shoes-cat-thumb.jpg",
    type: "& Accessories",
  },
  { id: 4, title: "Toys", image: "toys-cat-thumb.jpg", type: "& Games" },
];

export const popularPosts: PopularPost[] = [
  {
    id: 1,
    title: "One Color, Five Looks for Girls",
    image: "bs-blog-1-100x100.jpg",
  },
  {
    id: 2,
    title: "6 Things I Learned On My Maternity Leave",
    image: "bs-blog-7-100x100.jpg",
  },
  {
    id: 3,
    title: "Why February Babies Are Extra Special",
    image: "bs-blog-8-100x100.jpg",
  },
  {
    id: 4,
    title: "When A Baby Shower Is More Than A Party",
    image: "bs-blog-9-100x100.jpg",
  },
  {
    id: 5,
    title: "Kids fashion trends summer 2019",
    image: "bs-blog-10-100x100.jpg",
  },
];

export const blogsReview: BlogPreview[] = [
  {
    id: 1,
    title: "Why February Babies Are Extra Special",
    image: "bs-blog-1.jpg",
    content:
      "Internet technology such as online retailers and social media platforms have given way for trends to be identified, marketed and sold immediately. Styles and trends are easily conveyed online to attract the trendsetters. Posts on Instagram or Facebook can easily increase awareness about new trends in fashion which can create high demand for specific items or brands, new “buy now button” technology can link these styles with direct sales.Machine vision technology has been developed to track how fashions spread through society. The industry can now see the direct correlation on how fashion shows influence street-chic outfits. The effects can now be quantified and provide valuable feedback to fashion houses, designers and consumers regarding trends.",
  },
  {
    id: 2,
    title: "The Surprising Way Motherhood Changed Me",
    image: "bs-blog-2.jpg",
    content:
      "Internet technology such as online retailers and social media platforms have given way for trends to be identified, marketed and sold immediately. Styles and trends are easily conveyed online to attract the trendsetters. Posts on Instagram or Facebook can easily increase awareness about new trends in fashion which can create high demand for specific items or brands, new “buy now button” technology can link these styles with direct sales.Machine vision technology has been developed to track how fashions spread through society. The industry can now see the direct correlation on how fashion shows influence street-chic outfits. The effects can now be quantified and provide valuable feedback to fashion houses, designers and consumers regarding trends.",
  },
  {
    id: 3,
    title: "How Aromatherapy Can Impact NICU Babies",
    image: "bs-blog-3.jpg",
    content:
      "Internet technology such as online retailers and social media platforms have given way for trends to be identified, marketed and sold immediately. Styles and trends are easily conveyed online to attract the trendsetters. Posts on Instagram or Facebook can easily increase awareness about new trends in fashion which can create high demand for specific items or brands, new “buy now button” technology can link these styles with direct sales.Machine vision technology has been developed to track how fashions spread through society. The industry can now see the direct correlation on how fashion shows influence street-chic outfits. The effects can now be quantified and provide valuable feedback to fashion houses, designers and consumers regarding trends.",
  },
  {
    id: 4,
    title: "Top 10 Back to School Looks",
    image: "bs-blog-4.jpg",
    content:
      "Internet technology such as online retailers and social media platforms have given way for trends to be identified, marketed and sold immediately. Styles and trends are easily conveyed online to attract the trendsetters. Posts on Instagram or Facebook can easily increase awareness about new trends in fashion which can create high demand for specific items or brands, new “buy now button” technology can link these styles with direct sales.Machine vision technology has been developed to track how fashions spread through society. The industry can now see the direct correlation on how fashion shows influence street-chic outfits. The effects can now be quantified and provide valuable feedback to fashion houses, designers and consumers regarding trends.",
  },
];

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

export const Collections: ColectionCardProps[] = [
  {
    id: 1,
    title: "Girls",
    type: "Clothing",
    image: "banner-girls-home.jpg",
    description: "Wolrd's Best Brand",
  },
  {
    id: 2,
    title: "Boys",
    type: "Clothing",
    image: "banner-boys-home.jpg",
    description: "Increddible Quality",
  },
  {
    id: 3,
    title: "Toys",
    type: "&Game",
    image: "banner-toys-home.jpg",
    description: "For all ages",
  },
];

export const blogs: BlogProps[] = [
  {
    id: 1,
    title: "Why February Babies Are Extra Special",
    image: "bs-blog-1-640x640.jpg",
  },
  {
    id: 2,
    title: "The Surprising Way Motherhood Changed Me",
    image: "bs-blog-2-640x640.jpg",
  },
  {
    id: 3,
    title: "How Aromatherapy Can Impact NICU Babies",
    image: "bs-blog-3-640x640.jpg",
  },
];
