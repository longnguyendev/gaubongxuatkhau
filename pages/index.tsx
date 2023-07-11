import Banner from "@/components/Banner";
import Header from "@/components/Header";
import Box from "@mui/joy/Box";
import Collection from "@/components/Colection";
import { CardProps } from "@/components/Card";
import Cards from "@/components/Cards";
import BannerMid from "@/components/BannerMid";
import Blogs from "@/components/Blogs";
import Footer from "@/components/Footer";
import { BlogProps } from "@/components/Blog";
import { Container } from "@mui/material";

const products: CardProps[] = [
  { id: 1, name: "Gấu Chó", image: "baby-prod21-1-390x439.jpg", price: 200000 },
  { id: 2, name: "Gấu mèo", image: "baby-prod22-1-390x439.jpg", price: 200000 },
  { id: 3, name: "Gấu heo", image: "baby-prod17-2-390x439.jpg", price: 200000 },
  { id: 4, name: "Gấu heo", image: "baby-prod23-1-390x439.jpg", price: 200000 },
  { id: 5, name: "Gấu heo", image: "baby-prod20-1-390x439.jpg", price: 200000 },
  { id: 6, name: "Gấu heo", image: "baby-prod19-1-390x439.jpg", price: 200000 },
  { id: 7, name: "Gấu heo", image: "baby-prod8-4-390x439.jpg", price: 200000 },
  { id: 7, name: "Gấu heo", image: "baby-prod24-1-390x439.jpg", price: 200000 },
];

const blogs: BlogProps[] = [
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

export default function Home() {
  return (
    <>
      <Banner />
      <Container maxWidth="xl">
        <Collection />
        <Cards products={products} />
      </Container>
      <BannerMid />
      <Container maxWidth="xl">
        <Blogs blogs={blogs} />
      </Container>
    </>
  );
}
