import BannerTop from "@/src/components/BannerTop";
import BannerMid from "@/src/components/BannerMid";
import { BlogProps } from "@/src/components/BlogCard";
import { Container } from "@mui/material";
import { ColectionCardProps } from "@/src/components/ColectionCard";
import { ProductCardProps } from "@/src/components/ProductCard";
import ColectionList from "@/src/components/ColectionList";
import BlogList from "@/src/components/BlogList";
import ProductList from "@/src/components/ProductList";

const products: ProductCardProps[] = [
  { id: 1, name: "Gấu Chó", image: "baby-prod21-1-390x439.jpg", price: 200000 },
  { id: 2, name: "Gấu mèo", image: "baby-prod22-1-390x439.jpg", price: 200000 },
  { id: 3, name: "Gấu heo", image: "baby-prod17-2-390x439.jpg", price: 200000 },
  { id: 4, name: "Gấu heo", image: "baby-prod23-1-390x439.jpg", price: 200000 },
  { id: 5, name: "Gấu heo", image: "baby-prod20-1-390x439.jpg", price: 200000 },
  { id: 6, name: "Gấu heo", image: "baby-prod19-1-390x439.jpg", price: 200000 },
  { id: 7, name: "Gấu heo", image: "baby-prod8-4-390x439.jpg", price: 200000 },
  { id: 8, name: "Gấu heo", image: "baby-prod24-1-390x439.jpg", price: 200000 },
];

const Collections: ColectionCardProps[] = [
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
    title: "Girls",
    type: "&Game",
    image: "banner-toys-home.jpg",
    description: "For all ages",
  },
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
      <BannerTop />
      <Container maxWidth="lg">
        <ColectionList colections={Collections} />
        <ProductList products={products} />
      </Container>
      <BannerMid />
      <Container maxWidth="lg">
        <BlogList blogs={blogs} />
      </Container>
    </>
  );
}
