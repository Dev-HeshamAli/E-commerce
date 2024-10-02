import {
  Close,
  KeyboardArrowDownOutlined,
  KeyboardArrowRightOutlined,
  LaptopMacOutlined,
  MenuBookOutlined,
  SportsEsportsOutlined,
  TwoWheelerOutlined,
  Window,
} from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Button,
  Container,
  Menu,
  MenuItem,
  Stack,
  useTheme,
  Typography,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  createTheme,
  ThemeProvider,
  IconButton,
  Drawer,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useState } from "react";

const NameMenu = [
  {
    title: "Hme",
  },
  {
    title: "Mega Menu",
  },
  {
    title: "Full Screen Menu",
  },
  {
    title: "Pages",
  },
  {
    title: "User Account",
  },
  {
    title: "Vendor Account",
  },
];

const customTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0, // أقل من 600px
      sm: 600, // أقل من 960px
      md: 1000, // أقل من 1280px
      lg: 1280, // أقل من 1920px
      xl: 1920, // فوق 1920px
      custom: 1440, // breakpoint مخصص عند 1440px
    },
  },
});

const Header3 = () => {
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [state, setState] = useState({
    top: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
      }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box
        sx={{
          position: "relative",
          py: 6,
          bgcolor: theme.palette.grey[700],
        }}
      >
        <Close
          onClick={toggleDrawer(anchor, false)}
          sx={{
            position: "absolute",
            top: "15px",
            right: "20px",
            transition: "0.4s",
            bgcolor: "#ddd",
            borderRadius: "50%",
            p: "2px",
            ":hover": {
              transition: "0.5s",
              transform: "scale(1.1) rotate(90deg)",
              cursor: "pointer",
              bgcolor: "red",
              color: "#fff",
            },
          }}
        />

        {[
          { mainLink: "Home", subLink: ["Link1", "Link2", "Link3"] },
          { mainLink: "Mega menu", subLink: ["Link1", "Link2", "Link3"] },
          {
            mainLink: "Full screen menu",
            subLink: ["Link1", "Link2", "Link3"],
          },
          { mainLink: "Pages", subLink: ["Link1", "Link2", "Link3"] },
          { mainLink: "User Account", subLink: ["Link1", "Link2", "Link3"] },
          { mainLink: "Vendor Account", subLink: ["Link1", "Link2", "Link3"] },
        ].map((text, index) => (
          <Accordion
            key={index}
            sx={{
              maxWidth: "350px",
              m: "auto",
              bgcolor: theme.palette.grey[600],
              color: "#fff",
              borderBottom: "1px solid #fff",
              "&:before": {
                display: "none",
              },
              "&.Mui-expanded": {
                margin: "0px auto",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<KeyboardArrowDownOutlined sx={{ color: "#fff" }} />}
              aria-controls={`${text.mainLink}-content`}
              id={`${text.mainLink}-header`}
            >
              <Typography>{text.mainLink}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {text.subLink.map((el, index) => (
                <ListItem key={index} sx={{ p: 0, m: 0 }}>
                  <ListItemButton>
                    <ListItemText primary={el} />
                  </ListItemButton>
                </ListItem>
              ))}
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );

  return (
    <ThemeProvider theme={customTheme}>
      <Grid container spacing={20} sx={{ py: 2 }}>
        <Container maxWidth="lg">
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            gap={3}
          >
            <Grid size={{ xs: 4, md: 3 }} sx={{ textAlign: "center" }}>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                sx={{ color: theme.palette.text.primary }}
              >
                <Window sx={{ mr: "15px" }} />
                <Typography variant="body1">Categories</Typography>
                <KeyboardArrowDownOutlined />
              </Button>

              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
                sx={{
                  ".MuiPaper-root": { bgcolor: theme.palette.grey[700] },
                }}
              >
                <MenuItem
                  sx={{ color: theme.palette.common.white }}
                  onClick={handleClose}
                >
                  <TwoWheelerOutlined sx={{ mr: "10px" }} /> Bikes
                </MenuItem>
                <MenuItem
                  sx={{ color: theme.palette.common.white }}
                  onClick={handleClose}
                >
                  <LaptopMacOutlined sx={{ mr: "10px" }} /> Electronics
                </MenuItem>
                <MenuItem
                  sx={{ color: theme.palette.common.white }}
                  onClick={handleClose}
                >
                  <MenuBookOutlined sx={{ mr: "10px" }} /> Books
                </MenuItem>
                <MenuItem
                  sx={{ color: theme.palette.common.white }}
                  onClick={handleClose}
                >
                  <SportsEsportsOutlined sx={{ mr: "10px" }} />
                  Games
                </MenuItem>
              </Menu>
            </Grid>

            <Grid
              size={{ md: 9 }}
              sx={{
                display: { xs: "none", md: "block" },
              }}
            >
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                {NameMenu.map((el, index) => (
                  <Box
                    key={index}
                    sx={{
                      position: "relative",
                      zIndex: 20,
                      ":hover .hoverTap": {
                        display: "block",
                        transition: "0.3s ease",
                      },
                    }}
                  >
                    <Stack
                      direction={"row"}
                      alignItems={"center"}
                      sx={{ cursor: "pointer" }}
                    >
                      <Typography
                        variant="body1"
                        color={theme.palette.text.primary}
                      >
                        {el.title}
                      </Typography>
                      <KeyboardArrowDownOutlined
                        sx={{ ml: "3px", fontSize: "18px" }}
                      />
                    </Stack>

                    <Paper
                      className="hoverTap"
                      sx={{
                        position: "absolute",
                        top: "25px",
                        left: 0,
                        display: "none",
                        transition: " 0.3s ease",
                        bgcolor: theme.palette.grey[700],
                        borderRadius: "10px",
                      }}
                    >
                      <List
                        sx={{
                          width: "150px",
                          bgcolor: theme.palette.grey[700],
                          borderRadius: "10px",
                        }}
                      >
                        <ListItem
                          disablePadding
                          sx={{ color: theme.palette.common.white }}
                        >
                          <ListItemButton sx={{ p: "2px 15px" }}>
                            <ListItemText primary="Dashboard" />
                          </ListItemButton>
                        </ListItem>

                        <ListItem
                          disablePadding
                          sx={{
                            position: "relative",
                            ":hover .hoverRight": {
                              display: "block",
                              transition: "0.3s ease",
                            },
                            color: theme.palette.common.white,
                          }}
                        >
                          <ListItemButton sx={{ p: "2px 15px" }}>
                            <ListItemText primary="Products" />
                            <KeyboardArrowRightOutlined />
                          </ListItemButton>

                          {/* Right-Side Submenu */}
                          <Paper
                            className="hoverRight"
                            sx={{
                              position: "absolute",
                              left: "150px",
                              top: 0,
                              display: "none",
                              transition: " 0.3s ease",
                              bgcolor: theme.palette.grey[700],
                              borderRadius: "10px",
                            }}
                          >
                            <List
                              sx={{
                                width: "120px",
                                bgcolor: theme.palette.grey[700],
                                borderRadius: "0  8px 8px 0",
                              }}
                            >
                              <ListItem
                                disablePadding
                                sx={{ color: theme.palette.common.white }}
                              >
                                <ListItemButton
                                  sx={{ p: "2px 15px", textAlign: "center" }}
                                >
                                  <ListItemText primary="Add Product" />
                                </ListItemButton>
                              </ListItem>
                              <ListItem
                                disablePadding
                                sx={{ color: theme.palette.common.white }}
                              >
                                <ListItemButton
                                  component="a"
                                  sx={{ p: "2px 15px", textAlign: "center" }}
                                >
                                  <ListItemText primary="Edit Product" />
                                </ListItemButton>
                              </ListItem>
                            </List>
                          </Paper>
                        </ListItem>

                        <ListItem
                          disablePadding
                          sx={{ color: theme.palette.common.white }}
                        >
                          <ListItemButton sx={{ p: "2px 15px" }}>
                            <ListItemText primary="Orders" />
                          </ListItemButton>
                        </ListItem>

                        <ListItem
                          disablePadding
                          sx={{ color: theme.palette.common.white }}
                        >
                          <ListItemButton sx={{ p: "2px 15px" }}>
                            <ListItemText primary="Profile" />
                          </ListItemButton>
                        </ListItem>
                      </List>
                    </Paper>
                  </Box>
                ))}
              </Stack>
            </Grid>

            <Grid
              size={{ xs: 6 }}
              sx={{
                display: {
                  xs: "block",
                  md: "none",
                  textAlign: "end",
                },
              }}
            >
              <IconButton onClick={toggleDrawer("top", true)}>
                <MenuIcon
                  sx={{ fontSize: "35px", color: theme.palette.text.primary }}
                />
              </IconButton>
              <Drawer
                anchor={"top"}
                open={state["top"]}
                onClose={toggleDrawer("top", false)}
              >
                {list("top")}
              </Drawer>
            </Grid>
          </Stack>
        </Container>
      </Grid>
    </ThemeProvider>
  );
};

export default Header3;
