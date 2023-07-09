import Banner from "@/components/Banner";
import Header from "@/components/Header";
import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import {
  Button,
  Card,
  CardActionArea,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { relative } from "path";
import { Height } from "@mui/icons-material";
import Collection from "@/components/Colection";
import ProductCard from "@/components/Card";
import Cards from "@/components/Cards";
import BannerMid from "@/components/BannerMid";
import Blogs from "@/components/Blogs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Header />
      <Banner />
      <Collection />
      <Cards />
      <BannerMid />
      <Blogs />
      <Footer />
    </Box>
  );
}
