import {
  ExpandMore,
  Person,
  ShoppingCart,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Container,
  Stack,
  IconButton,
  Typography,
  useTheme,
  Badge,
  styled,
  alpha,
  InputBase,
  List,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useState } from "react";

const Search = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  border: "1px solid #777",
  borderRadius: "25px",
  position: "relative",
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const options = ["All Categories", "Clothes", "Electronics", "CAR"];

const Header2 = () => {
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid container spacing={2} sx={{ py: 3 }}>
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems={"center"}
          justifyContent={"space-between"}
          gap={2}
        >
          <Grid
            size={{ xs: 12, md: 2 }}
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <IconButton>
              <ShoppingCartOutlined
                sx={{ color: theme.palette.text.primary }}
              />
            </IconButton>
            <Typography color={theme.palette.text.primary}>
              E-commerce
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Box>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase inputProps={{ "aria-label": "search" }} />

                <div>
                  <List
                    aria-label="Device settings"
                    sx={{
                      p: "0",
                      borderBottomRightRadius: "25px",
                      borderTopRightRadius: "25px",
                    }}
                  >
                    <ListItemButton
                      id="lock-button"
                      aria-haspopup="listbox"
                      aria-controls="lock-menu"
                      aria-label="when device is locked"
                      aria-expanded={open ? "true" : undefined}
                      onClick={handleClickListItem}
                    >
                      <ListItemText secondary={options[selectedIndex]} />
                      <ExpandMore sx={{ ml: "5px", fontSize: "18px" }} />
                    </ListItemButton>
                  </List>
                  <Menu
                    id="lock-menu"
                    sx={{ ".MuiButtonBase-root": { color: "#fff" } }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "lock-button",
                      role: "listbox",
                    }}
                  >
                    {options.map((option, index) => (
                      <MenuItem
                        key={option}
                        selected={index === selectedIndex}
                        onClick={(event) => handleMenuItemClick(event, index)}
                      >
                        {option}
                      </MenuItem>
                    ))}
                  </Menu>
                </div>
              </Search>
            </Box>
          </Grid>

          <Grid
            size={{ xs: 12, md: 2 }}
            sx={{
              textAlign: "center",
              display: { xs: "none", md: "block" },
            }}
          >
            <IconButton aria-label="cart">
              <Badge badgeContent={4} color="primary">
                <ShoppingCart />
              </Badge>
            </IconButton>

            <IconButton>
              <Person />
            </IconButton>
          </Grid>
        </Stack>
      </Container>
    </Grid>
  );
};

export default Header2;
