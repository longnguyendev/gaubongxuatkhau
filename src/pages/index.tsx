import BannerTop from "@/src/components/BannerTop";
import BannerMid from "@/src/components/BannerMid";
import { BlogProps } from "@/src/components/BlogCard";
import { Container } from "@mui/material";
import { ColectionCardProps } from "@/src/components/ColectionCard";
import { ProductCardProps } from "@/src/components/ProductCard";
import ColectionList from "@/src/components/ColectionList";
import BlogList from "@/src/components/BlogList";
import ProductList from "@/src/components/ProductList";
import { products } from "@/src/store/constants";

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
    title: "Toys",
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
