import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Box,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InventoryIcon from "@mui/icons-material/Inventory2";
import EngineeringIcon from "@mui/icons-material/Engineering";
import ApartmentIcon from "@mui/icons-material/Apartment";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import BarChartIcon from "@mui/icons-material/BarChart";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { useSidebarStore } from "../../store/useSidebarStore";

export const Sidebar = () => {
  const { optionSelected, setOptionSelected } = useSidebarStore();

  const opciones = [
    { text: "Inicio", icon: <HomeIcon /> },
    { text: "Inventario", icon: <InventoryIcon /> },
    { text: "Reportes", icon: <BarChartIcon /> },
    { text: "Proveedores", icon: <LocalShippingIcon /> },
    { text: "Técnicos", icon: <EngineeringIcon /> },
    { text: "Áreas", icon: <ApartmentIcon /> },
    { text: "Entrada", icon: <LoginIcon /> },
    { text: "Salidas", icon: <LogoutIcon /> },
    { text: "Devoluciones", icon: <AutorenewIcon /> },
  ];

  const drawerWidth = 240;
  const miniWidth = 70;

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        open={true}
        variant="persistent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            borderRight: "none",
            bgcolor: "#f9f9f9",
            boxShadow: "5px 0 10px rgba(0, 0, 0, 0.1)",
            transition: "width 0.3s",
            overflowX: "hidden",
          },
        }}
      >
        <Toolbar />
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: 1,
          }}
        >
          <img
            src="/assets/image.png"
            alt="Logo"
            style={{
              width: "70%",
              height: "auto",
              objectFit: "contain",
              transition: "width 0.3s",
            }}
          />
        </Box>

        <Divider sx={{ width: "85%", mb: 1, mx: "auto" }} />

        <List sx={{ width: "100%" }}>
          {opciones.map((item) => (
            <ListItem
              key={item.text}
              disablePadding
              sx={{ justifyContent: "initial" }}
            >
              <ListItemButton
                onClick={() => setOptionSelected(item.text)}
                sx={{
                  px: 3,
                  py: 1.2,
                  display: "flex",
                  justifyContent: "flex-start",
                  backgroundColor:
                    optionSelected === item.text ? "#d3e6ffff" : "transparent",
                  borderLeft:
                    optionSelected === item.text && "4px solid #1976d2",
                  "&:hover": {
                    backgroundColor: "#d3e6ffff",
                    borderLeft: "4px solid #1976d2",
                  },
                }}
              >
                <ListItemIcon sx={{ color: "#19177aff", minWidth: 0, mr: 2 }}>
                  {item.icon}
                </ListItemIcon>
                {
                  <ListItemText
                    primary={item.text}
                    primaryTypographyProps={{
                      fontSize: "0.95rem",
                      fontWeight: 500,
                    }}
                  />
                }
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Box sx={{ flexGrow: 1 }} />
      </Drawer>
    </Box>
  );
};

export default Sidebar;
