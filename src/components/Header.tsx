import { useRouter } from "next/router";
import { cloneElement, forwardRef, useState } from "react";
import Image from "next/image";

import { TransitionProps } from "@mui/material/transitions";

import {
  AppBar,
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
  Button,
  Drawer,
  useScrollTrigger,
  Dialog,
  Slide,
  Container,
  Avatar,
  ListItemAvatar,
} from "@mui/material";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  PersonOutlineOutlined,
  Menu,
  Close,
  Delete,
} from "@mui/icons-material";
import { useBoolean } from "usehooks-ts";

import { Link } from "./Link";
import dynamic from "next/dynamic";
import { useCart } from "@/hooks";
import { useProductsQuery } from "@/generated/graphql";

const DynamicBadge = dynamic(() => import("@mui/material/Badge"), {
  ssr: false,
});

interface ElevationScrollProps {
  window?: () => Window;
  children: React.ReactElement;
}

const drawerWidth = 240;

const navItems = [
  { label: "Home", value: "/" },
  { label: "About", value: "/about" },
  { label: "Shop", value: "/shop" },
  { label: "Blog", value: "/blog" },
  { label: "Contact", value: "/contact" },
];

function ElevationScroll(props: ElevationScrollProps) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

interface HeaderProps {
  window?: () => Window;
}

export function Header(props: HeaderProps) {
  const { window } = props;

  const { value, toggle } = useBoolean();

  const router = useRouter();

  const { total, value: productIds, onRemove } = useCart();

  const productsOnCart = useProductsQuery({
    filters: {
      id: {
        in: productIds.length !== 0 ? productIds.map((item) => item.id) : null,
      },
    },
  });

  const getActive = (value: string) =>
    value === "/" ? router.pathname === "/" : router.pathname.startsWith(value);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const drawer = (
    <Box onClick={toggle} sx={{ textAlign: "center" }}>
      <Typography
        variant="h6"
        sx={{ py: 2.5, background: "#ff8087", color: "white" }}
      >
        VINA TEDDY
      </Typography>
      <Divider />
      <List>
        {navItems.map(({ label, value }) => (
          <ListItem key={value} disablePadding>
            <ListItemButton
              sx={{
                textAlign: "center",
                ...(getActive(value) && { color: "ff8087" }),
              }}
              LinkComponent={Link}
              href={value}
            >
              <ListItemText primary={label} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem sx={{ justifyContent: "center" }}>
          <Stack direction="row" spacing={1}>
            <IconButton aria-label="person">
              <PersonOutlineOutlined />
            </IconButton>
            <IconButton aria-label="cart" onClick={handleClickOpen}>
              <ShoppingCartOutlined />
            </IconButton>
            <IconButton aria-label="search">
              <SearchOutlined />
            </IconButton>
          </Stack>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <ElevationScroll {...props}>
        <AppBar
          component="nav"
          sx={{
            background: "white",
            paddingX: {
              lg: "30px",
            },
          }}
        >
          <Toolbar sx={{ height: { xs: "70px", sm: "100px" } }}>
            <Box
              sx={{
                marginRight: { xs: "auto", sm: "50px" },
                borderRadius: "50px",
                background: "#ff8087",
                height: "50px",
                position: "relative",
                ":after": {
                  content: '""',
                  position: "absolute",
                  inset: "3px",
                  border: "2px dashed #000000",
                  borderRadius: "50px",
                  opacity: 0.16,
                },
              }}
              component={Link}
              href="/"
            >
              <Box height="50px" width="160px">
                <Image
                  src="/logo-200.png"
                  alt="logo"
                  fill
                  sizes="100vh"
                  style={{ objectFit: "cover" }}
                />
              </Box>
            </Box>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={toggle}
              sx={{
                position: "relative",
                display: { md: "none" },
                background: "#ff8087",
                ":hover": { background: "#80d1e5" },
                ml: "auto",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  inset: "3px",
                  border: "2px dashed #000",
                  borderRadius: "50px",
                  opacity: 0.16,
                }}
              />
              <Menu sx={{ color: "white" }} />
            </IconButton>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "none", md: "block" },
              }}
            >
              {navItems.map(({ label, value }) => (
                <Button
                  key={value}
                  sx={{
                    fontSize: "16px",
                    fontWeight: 700,
                    paddingX: "15px",
                    color: getActive(value) ? "#ff8087" : "#183a5c",
                  }}
                  LinkComponent={Link}
                  href={value}
                >
                  {label}
                </Button>
              ))}
            </Box>
            <Box
              sx={{
                display: {
                  xs: "none",
                  sm: "none",
                  md: "block",
                },
              }}
            >
              <Box
                position="relative"
                display="flex"
                alignItems="center"
                height="50px"
                paddingX={1}
                sx={{
                  borderRadius: "50px",
                  background: "#80d1e5",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    inset: "3px",
                    border: "2px dashed #000",
                    borderRadius: "50px",
                    opacity: 0.16,
                  }}
                />
                <IconButton aria-label="person">
                  <PersonOutlineOutlined sx={{ color: "white" }} />
                </IconButton>
                <IconButton onClick={handleClickOpen} aria-label="cart">
                  <DynamicBadge badgeContent={total} color="primary">
                    <ShoppingCartOutlined sx={{ color: "white" }} />
                  </DynamicBadge>
                </IconButton>
                <IconButton aria-label="search">
                  <SearchOutlined sx={{ color: "white" }} />
                </IconButton>
              </Box>
            </Box>
          </Toolbar>
          <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
          >
            <IconButton
              sx={{
                position: "absolute",
                right: "10px",
                top: "10px",
                zIndex: 9999,
              }}
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <Close fontSize="large" color="disabled" />
            </IconButton>
            <Container maxWidth="sm" sx={{ margin: "auto" }}>
              <Stack direction="column">
                {productIds.length > 0 ? (
                  <>
                    <List
                      sx={{
                        width: "100%",
                        bgcolor: "background.paper",
                        position: "relative",
                        overflow: "auto",
                        maxHeight: 500,
                        minHeight: 500,
                      }}
                    >
                      {productsOnCart.data?.products?.data.map((item) => (
                        <ListItem
                          key={item.id}
                          secondaryAction={
                            <IconButton
                              edge="end"
                              aria-label="delete"
                              onClick={() => {
                                onRemove(item.id ?? "");
                              }}
                            >
                              <Delete />
                            </IconButton>
                          }
                          sx={{ borderBottom: "1px dashed #e8e8e8" }}
                        >
                          <ListItemAvatar>
                            <Avatar
                              sx={{
                                width: 60,
                                height: 60,
                                marginRight: "20px",
                                borderRadius: "unset",
                              }}
                              src={`https://api.gaubongthuonghieu.com${item.attributes?.image.data?.[0]?.attributes?.formats.thumbnail.url}`}
                              alt={"ahihi"}
                            ></Avatar>
                          </ListItemAvatar>
                          <ListItemText
                            primary={
                              <Link
                                onClick={handleClose}
                                href={`/shop/${item.attributes?.slug}`}
                                sx={{ textDecoration: "none", color: "#333" }}
                              >
                                {item.attributes?.name}
                              </Link>
                            }
                            secondary={
                              <>
                                {
                                  productIds.find((product) => {
                                    return product.id === item.id;
                                  })?.total
                                }
                                {" x "}
                                {(
                                  Number(item.attributes?.price) *
                                  (Number(item.attributes?.promotion)
                                    ? (100 -
                                        Number(item.attributes?.promotion)) /
                                      100
                                    : 1)
                                ).toLocaleString("de-DE")}
                              </>
                            }
                          />
                        </ListItem>
                      ))}
                    </List>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      padding="40px 20px"
                    >
                      <Typography fontSize="17px" color="#777">
                        Subtotal
                      </Typography>
                      <Typography
                        fontSize="17px"
                        color="#333"
                        fontWeight="bold"
                      >
                        {productsOnCart.data?.products?.data.reduce<number>(
                          (total, item) =>
                            total +
                            ((item.attributes?.price ?? 0) *
                              (productIds.find(
                                (product) => product.id === item.id
                              )?.total ?? 0) *
                              (100 - (item.attributes?.promotion ?? 0))) /
                              100,
                          0
                        )}
                      </Typography>
                    </Stack>
                    <Stack
                      direction="row"
                      spacing={1}
                      justifyContent="space-between"
                      padding="40px 20px"
                    >
                      <Button
                        variant="dashed"
                        sx={{
                          width: "50%",
                          background: "#333",
                          padding: "15px",
                          fontSize: "14px",
                          textTransform: "uppercase",
                          fontWeight: 500,
                        }}
                      >
                        View cart
                      </Button>
                      <Button
                        variant="dashed"
                        color="secondary"
                        sx={{
                          width: "50%",
                          padding: "15px",
                          fontSize: "14px",
                          textTransform: "uppercase",
                          fontWeight: 500,
                        }}
                      >
                        View cart
                      </Button>
                    </Stack>
                  </>
                ) : (
                  <>
                    <Box
                      margin="0 auto"
                      component="img"
                      src="../shopping-bag-bag-svgrepo-com.svg"
                      alt="cart"
                      width="200px"
                      marginBottom="30px"
                    />

                    <Typography fontSize="18px" color="#333" textAlign="center">
                      No products in the cart.
                    </Typography>
                  </>
                )}
              </Stack>
            </Container>
          </Dialog>
        </AppBar>
      </ElevationScroll>
      <Box component="nav">
        <Drawer
          anchor="right"
          container={container}
          variant="temporary"
          open={value}
          onClose={toggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
