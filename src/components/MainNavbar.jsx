import { makeStyles } from "@material-ui/core/styles";
import { Menu } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Container,
  CssBaseline,
  Divider,
  Drawer,
  Grid,
  IconButton,
  Modal,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ModalContent from "./ModalContent";
import sgnLogo from "../assets/images/logo.png";

// --- css styling ---
const useStyles = makeStyles((theme) => ({
  "css-11b3ww9-MuiPaper-root-MuiAppBar-root": {
    backgroundColor: "transparent !important",
    paddingY: 2,
  },

  "makeStyles-appbarSolid-2": {
    backgroundColor: "white !important",
  },
  "css-1uy8rhy-MuiTypography-root": { color: "black" },
  "makeStyles-css-1uy8rhy-MuiTypography-root-3": { color: "white" },
}));

const styles = {
  modalStyles: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    boxShadow: 36,
    borderRadius: 2,
    outline: "none",
  },
};

const MainNavbar = (props) => {
  const { windows, about, pricing, courses } = props;

  const classes = useStyles();
  const navigate = useNavigate();
  const drawerWidth = 240;

  const [monbileOpen, setMobileOpen] = useState(false);

  const [appbar, setAppbar] = useState(
    "css-11b3ww9-MuiPaper-root-MuiAppBar-root"
  );
  const [menuItemColor, setMenuItemColor] = useState(
    "makeStyles-css-1uy8rhy-MuiTypography-root-3"
  );

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const navRef = React.useRef();
  navRef.current = appbar;
  const buttonRef = React.useRef();
  buttonRef.current = menuItemColor;

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 500;
      if (show) {
        setAppbar("makeStyles-appbarSolid-2");
        setMenuItemColor("css-1uy8rhy-MuiTypography-root");
      } else {
        setAppbar("css-11b3ww9-MuiPaper-root-MuiAppBar-root");
        setMenuItemColor("makeStyles-css-1uy8rhy-MuiTypography-root-3");
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={4}
        paddingY={10}
      >
        <Grid item>
          <Typography
            component="a"
            onClick={() => navigate("/")}
            variant="h6"
            sx={{ my: 2 }}
          >
            <img
              src={sgnLogo}
              alt="sgn-logo"
              style={{ width: "65%", cursor: "pointer" }}
            />
          </Typography>
        </Grid>

        <Grid item>
          <Divider sx={{ backgroundColor: "black" }} />
        </Grid>

        <Grid item>
          <Typography
            component="a"
            onClick={() => about()}
            variant="h6"
            sx={{
              color: "black",
              cursor: "pointer",
              "&:hover": {
                color: "success.main",
                fontWeight: 700,
              },
            }}
          >
            About Us
          </Typography>
        </Grid>

        <Grid item>
          <Typography
            component="a"
            onClick={() => courses()}
            variant="h6"
            sx={{
              color: "black",
              cursor: "pointer",
              "&:hover": {
                color: "success.main",
                fontWeight: 700,
              },
            }}
          >
            Courses
          </Typography>
        </Grid>

        <Grid item>
          <Typography
            component="a"
            variant="h6"
            onClick={() => pricing()}
            sx={{
              color: "black",
              cursor: "pointer",
              "&:hover": {
                color: "success.main",
                fontWeight: 700,
              },
            }}
          >
            Pricing
          </Typography>
        </Grid>

        <Grid item>
          <Typography
            component="a"
            variant="h6"
            onClick={() => navigate("/")}
            sx={{
              color: "black",
              cursor: "pointer",
              "&:hover": {
                color: "success.main",
                fontWeight: 700,
              },
            }}
          >
            Donate Us
          </Typography>
        </Grid>

        <Grid item>
          <Typography
            component="a"
            variant="h6"
            onClick={handleOpen}
            sx={{
              color: "black",
              cursor: "pointer",
              border: 2,
              borderRadius: 1,
              paddingX: 2,
              paddingY: 1,
              "&:hover": {
                color: "success.main",
                fontWeight: 700,
              },
            }}
          >
            Get Started
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );

  const container =
    windows !== undefined ? () => window().document.body : undefined;

  const scrollBottom = (e) => {
    e.current.scrollntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" className={classes[navRef.current]}>
          <Toolbar>
            {/* --- logo for large displays --- */}
            <Typography
              variant="h6"
              component="div"
              onClick={() => navigate("/")}
              sx={{
                flexGrow: 1,
                marginX: 3,
                display: { xs: "none", sm: "block" },
              }}
            >
              <img
                src={sgnLogo}
                alt="sgn-logo"
                style={{ width: "15%", marginTop: 4 }}
              />
            </Typography>

            {/* --- menu for large displays --- */}
            <Box sx={{ marginX: 3, display: { xs: "none", md: "block" } }}>
              <Typography
                component="a"
                onClick={() => about()}
                sx={{
                  fontSize: "14px",
                  fontWeight: 600,
                  display: "inline-block",
                  cursor: "pointer",
                  "&:hover": { color: "success.main" },
                }}
                className={classes[buttonRef.current]}
              >
                About us
              </Typography>

              <Typography
                component="a"
                onClick={() => courses()}
                sx={{
                  fontSize: "14px",
                  fontWeight: 600,
                  marginLeft: 2,
                  display: "inline-block",
                  cursor: "pointer",
                  "&:hover": { color: "success.main" },
                }}
                className={classes[buttonRef.current]}
              >
                Courses
              </Typography>

              <Typography
                component="a"
                onClick={() => pricing()}
                sx={{
                  fontSize: "14px",
                  fontWeight: 600,
                  marginLeft: 2,
                  display: "inline-block",
                  cursor: "pointer",
                  "&:hover": { color: "success.main" },
                }}
                className={classes[buttonRef.current]}
              >
                Pricing
              </Typography>

              <Typography
                component="a"
                onClick={() => navigate("/")}
                sx={{
                  fontSize: "14px",
                  fontWeight: 600,
                  marginLeft: 2,
                  display: "inline-block",
                  cursor: "pointer",
                  "&:hover": { color: "success.main" },
                }}
                className={classes[buttonRef.current]}
              >
                Donate Us
              </Typography>

              <Typography
                component="a"
                onClick={handleOpen}
                sx={{
                  fontSize: "14px",
                  fontWeight: 600,
                  marginLeft: 4,
                  display: "inline-block",
                  cursor: "pointer",
                  border: 2,
                  borderRadius: 1,
                  paddingX: 2,
                  paddingY: 1,
                  "&:hover": { color: "success.main" },
                }}
                className={classes[buttonRef.current]}
              >
                Get Started
              </Typography>
            </Box>

            {/* --- logo for small displays --- */}
            <Typography
              variant="h6"
              component="div"
              onClick={() => navigate("/")}
              sx={{ flexGrow: 1, display: { xs: "block", sm: "none" } }}
            >
              <img
                src={sgnLogo}
                alt="sgn-logo"
                style={{
                  width: "25%",
                  marginTop: 3,
                }}
              />
            </Typography>

            {/* --- menu button for small displays --- */}
            <IconButton
              aria-label="open drawer"
              onClick={handleDrawerToggle}
              sx={{
                flexGrow: 0,
                mr: 2,
                display: { md: "none" },
                backgroundColor: "white",
                "&:hover": { backgroundColor: "success.main" },
                "&:focus": { backgroundColor: "success.main" },
              }}
            >
              <Menu />
            </IconButton>
          </Toolbar>
        </AppBar>

        {/* --- drawer menu for small displays --- */}
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            anchor="right"
            open={monbileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{ keepMounted: true }}
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

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={styles.modalStyles}>
            <Container borderRadius={3}>
              <ModalContent />
            </Container>
          </Box>
        </Modal>
      </Box>
    </>
  );
};

export default MainNavbar;
