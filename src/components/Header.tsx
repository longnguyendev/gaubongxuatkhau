import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Image from "next/image";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "./Link";
import { Stack } from "@mui/material";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;

const navItems = [
  { label: "Home", value: "/" },
  { label: "About", value: "/about" },
  { label: "Shop", value: "/shop" },
  { label: "Blog", value: "/blog" },
  { label: "Contact", value: "/contact" },
];

export default function Header(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const router = useRouter();

  const getActive = (value: string) =>
    value === "/" ? router.pathname === "/" : router.pathname.startsWith(value);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ py: 2.5, background: "#ff8087" }}>
        VINA TEDDY
      </Typography>
      <Divider />
      <List>
        {navItems.map(({ label, value }) => (
          <ListItem key={value} disablePadding>
            <ListItemButton
              sx={{
                textAlign: "center",
                ...(getActive(value) && { color: "#ff8087" }),
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
            <IconButton>
              <PersonOutlineOutlinedIcon />
            </IconButton>
            <IconButton>
              <ShoppingCartOutlinedIcon />
            </IconButton>
            <IconButton>
              <SearchOutlinedIcon />
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
      <CssBaseline />
      <AppBar component="nav" sx={{ background: "#fff", paddingX: "30px" }}>
        <Toolbar sx={{ height: { xs: "70px", sm: "100px" } }}>
          <Box
            paddingX={"20px"}
            sx={{
              marginRight: { xs: "auto", sm: "50px" },
              borderRadius: "50px",
              background: "#ff8087",
              height: "50px",
              position: "relative",
              ":after": {
                content: '""',
                position: "absolute",
                top: "3px",
                bottom: "3px",
                left: "3px",
                right: "3px",
                border: "2px dashed #000000",
                borderRadius: "50px",
                opacity: 0.16,
              },
            }}
            component={Link}
            href="/"
          >
            <Image src="/logo-200.png" alt="logo" width={150} height={50} />
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
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
            <MenuIcon />
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
              <IconButton>
                <PersonOutlineOutlinedIcon sx={{ color: "white" }} />
              </IconButton>
              <IconButton>
                <ShoppingCartOutlinedIcon sx={{ color: "white" }} />
              </IconButton>
              <IconButton>
                <SearchOutlinedIcon sx={{ color: "white" }} />
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          anchor="right"
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
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
