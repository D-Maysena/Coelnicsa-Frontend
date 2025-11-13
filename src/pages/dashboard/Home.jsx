import { Box } from "@mui/material";
import Sidebar from "../../components/dashboard/Sidebar";

import Inicio from "../../components/dashboard/Inicio";
import { useSidebarStore } from "../../store/useSidebarStore";
import Inventario from "../../components/dashboard/Inventario";
import Entradas from "../../components/dashboard/Movimientos";
import Reportes from "../../components/dashboard/Reportes";
import Proveedores from "../../components/dashboard/Proveedores";
import Devoluciones from "../../components/dashboard/Devoluciones";

export const Home = () => {
  const { optionSelected } = useSidebarStore();

  return (
    <Box sx={{ display: "flex", m: 0 }}>
      <Box>
        <Sidebar />
      </Box>
      {optionSelected === "Inicio" && <Inicio />}
      {optionSelected === "Inventario" && <Inventario />}
      {optionSelected === "Movimientos" && <Entradas />}
      {optionSelected === "Devoluciones" && <Devoluciones />}
      {optionSelected === "Reportes" && <Reportes />}
      {optionSelected === "Proveedores" && <Proveedores />}
    </Box>
  );
};

export default Home;
