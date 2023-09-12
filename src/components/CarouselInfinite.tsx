import Image from "next/image";
import { Box } from "@mui/material";

export interface imageCarouseselProps {
  src: string;
}
function ImageCarousesel({ src }: imageCarouseselProps) {
  return (
    <>
      <div className="slide">
        <Image
          src={src}
          fill
          priority
          style={{
            objectFit: "contain",
          }}
          alt={src}
        />
      </div>
    </>
  );
}

export function CarouselInfinite() {
  return (
    <Box className="carouselInfinite" sx={{ marginBottom: 8 }}>
      <div className="slider">
        <div className="slide-track">
          <ImageCarousesel src="/vietnam-airlines-logo.png" />
          <ImageCarousesel src="/vietjet-logo.png" />
          <ImageCarousesel src="/bamboo-airways-logo.png" />
          <ImageCarousesel src="/ahamove-logo.png" />
          <ImageCarousesel src="/uob-bank-logo.png" />
          <ImageCarousesel src="/go-logo.png" />
          <ImageCarousesel src="/manulife-logo.png" />
          <ImageCarousesel src="/ford-logo.png" />
          <ImageCarousesel src="/mb-bank-logo.png" />
          <ImageCarousesel src="/Truemilk-logo.png" />
          <ImageCarousesel src="/FedEx-logo.png" />
          <ImageCarousesel src="/nivea-logo.png" />
          <ImageCarousesel src="/comfort-logo.png" />
          <ImageCarousesel src="/vib-logo.png" />
          {/* repeart slide */}
          <ImageCarousesel src="/vietnam-airlines-logo.png" />
          <ImageCarousesel src="/vietjet-logo.png" />
          <ImageCarousesel src="/bamboo-airways-logo.png" />
          <ImageCarousesel src="/ahamove-logo.png" />
          <ImageCarousesel src="/uob-bank-logo.png" />
          <ImageCarousesel src="/go-logo.png" />
          <ImageCarousesel src="/manulife-logo.png" />
          <ImageCarousesel src="/ford-logo.png" />
          <ImageCarousesel src="/mb-bank-logo.png" />
          <ImageCarousesel src="/Truemilk-logo.png" />
          <ImageCarousesel src="/FedEx-logo.png" />
          <ImageCarousesel src="/nivea-logo.png" />
          <ImageCarousesel src="/comfort-logo.png" />
          <ImageCarousesel src="/vib-logo.png" />
        </div>
      </div>
    </Box>
  );
}
