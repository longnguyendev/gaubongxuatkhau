import Image from "next/image";

import { Box } from "@mui/material";

export interface PaymentImageProps {
  src: string;
}

export function PaymentImage({ src }: PaymentImageProps) {
  return (
    <Box sx={{ position: "relative", width: 80, height: 40 }}>
      <Image
        src={src}
        alt={src}
        fill
        sizes="100vw"
        priority
        style={{
          objectFit: "contain",
        }}
      />
    </Box>
  );
}
