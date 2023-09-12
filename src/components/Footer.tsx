import Image from "next/image";

import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  List,
  ListItemButton,
  Stack,
  Typography,
  Divider,
} from "@mui/material";

import {
  FacebookOutlined,
  Twitter,
  AccessTimeFilled,
  LocationOn,
  PhoneEnabled,
  Email,
  AccountBalance,
} from "@mui/icons-material";

import { Link } from "./Link";
import { CarouselInfinite } from "./CarouselInfinite";
import { PaymentImage } from "./PaymentImage";

export interface linkProps {
  title: string;
  link: string;
}

const footerLinks: linkProps[] = [
  { title: "home", link: "/" },
  { title: "shop", link: "/shop" },
  { title: "blog", link: "/blog" },
  { title: "about", link: "/about" },
];

const linkButtonStyle = {
  padding: "10px 0",
  fontSize: "14px",
  transition: ".3s ease-in",
  ":hover": {
    transform: "translateX(10px)",
    background: "none",
  },
};

const iconButtonStyle = {
  position: "relative",
  color: "white",
  ":after": {
    position: "absolute",
    content: '""',
    inset: 0,
    border: "1px dashed #fff",
    borderRadius: "50%",
  },
};

export function Footer() {
  return (
    <Box
      sx={{
        position: "relative",
        paddingTop: "40px",
        width: "100%",
        backgroundImage: "url(/scene.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "bottom center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction="column"
          padding="20px 0"
          alignItems="center"
          spacing={1}
        >
          <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={0}
          >
            {footerLinks.map((item) => (
              <Button
                key={item.title}
                variant="text"
                LinkComponent={Link}
                href={item.link}
                sx={{ color: "#183a5c", fontSize: "16px", fontWeight: 600 }}
              >
                {item.title}
              </Button>
            ))}
          </Stack>
          <Box
            sx={{
              width: "137px",
              height: "143px",
              position: "relative",
            }}
          >
            <Image
              src="/footer-logo.png"
              alt="footer-logo"
              style={{ objectFit: "cover" }}
              fill
            />
          </Box>
        </Stack>
        <Typography fontSize="40px" textAlign="center" fontWeight={800} mb={2}>
          CÁC ĐỐI TÁC
        </Typography>
        <CarouselInfinite />
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <Typography fontWeight={600} fontSize="18px">
              Information
            </Typography>
            <List>
              <ListItemButton
                LinkComponent={Link}
                href={"/about"}
                sx={linkButtonStyle}
              >
                About Us
              </ListItemButton>
              <ListItemButton
                LinkComponent={Link}
                href={"/contact"}
                sx={linkButtonStyle}
              >
                Contacts
              </ListItemButton>
              <ListItemButton
                LinkComponent={Link}
                href={"/faq"}
                sx={linkButtonStyle}
              >
                FAQ
              </ListItemButton>
              <ListItemButton
                LinkComponent={Link}
                href={"/shop"}
                sx={linkButtonStyle}
              >
                VinaTeddy Shop
              </ListItemButton>
              <ListItemButton
                LinkComponent={Link}
                href={"/blog"}
                sx={linkButtonStyle}
              >
                VinaTeddy Blog
              </ListItemButton>
            </List>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography fontWeight={600} fontSize="18px">
              Have a Question?
            </Typography>
            <List>
              <ListItemButton
                LinkComponent={Link}
                href={"/about"}
                sx={linkButtonStyle}
              >
                <Stack spacing={2} direction="row">
                  <AccessTimeFilled />
                  <Typography>Mon. - Fri.: 09:00 - 18:30</Typography>
                </Stack>
              </ListItemButton>
              <ListItemButton
                LinkComponent={Link}
                href={"/about"}
                sx={linkButtonStyle}
              >
                <Stack spacing={2} direction="row">
                  <LocationOn />
                  <Typography>
                    123/4 Đường số 8, Phường Linh Xuân, Tp. Thủ Đức, Tp.Hcm
                  </Typography>
                </Stack>
              </ListItemButton>
              <ListItemButton
                LinkComponent={Link}
                href={"/about"}
                sx={linkButtonStyle}
              >
                <Stack spacing={2} direction="row">
                  <PhoneEnabled />
                  <Typography>0902983005</Typography>
                </Stack>
              </ListItemButton>
              <ListItemButton
                LinkComponent={Link}
                href={"/about"}
                sx={linkButtonStyle}
              >
                <Stack spacing={2} direction="row">
                  <Email />
                  <Typography>cs.vinateddy@gmail.com</Typography>
                </Stack>
              </ListItemButton>
              <ListItemButton
                LinkComponent={Link}
                href={"/about"}
                sx={linkButtonStyle}
              >
                <Stack spacing={2} direction="row">
                  <AccountBalance />
                  <Typography>
                    STK: 8888.22.8668 - Ngân Hàng Á Châu ACB
                  </Typography>
                </Stack>
              </ListItemButton>
            </List>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography fontWeight={600} fontSize="18px">
              Payment Options
            </Typography>

            <Box display="flex" mt={2} sx={{ gap: 1, flexFlow: "wrap" }}>
              <PaymentImage src="/MasterCard-logo.png" />
              <PaymentImage src="/visa-logo.png" />
              <PaymentImage src="/vnpay-logo.png" />
              <PaymentImage src="/momo-logo.png" />
              <PaymentImage src="/paypal-logo.png" />
            </Box>
          </Grid>
        </Grid>
        <Box
          mt={12}
          pb={4}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Stack direction="row" spacing={1}>
            <IconButton
              LinkComponent={Link}
              href="https://www.facebook.com/cuahanggaubong"
              target="_blank"
              sx={iconButtonStyle}
            >
              <FacebookOutlined />
            </IconButton>
            <IconButton sx={iconButtonStyle}>
              <Twitter />
            </IconButton>
          </Stack>
          <Typography>
            {
              <>
                {"Made with love by "}
                <Link
                  href={"https://www.facebook.com/100002187712595/"}
                  target="_blank"
                  color="primary"
                  fontWeight={600}
                  sx={{ textDecoration: "unset" }}
                >
                  Long Nguyen Dev
                </Link>
              </>
            }
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
