import { Box } from "@mui/material";
import Sidebar from "../../components/dashboard/Sidebar";
import Inicio from "../../components/dashboard/Inicio";
import { useSidebarStore } from "../../store/useSidebarStore";
import Inventario from "../../components/dashboard/Inventario";
import Reportes from "../../components/dashboard/Reportes";

export const Home = () => {
  const { optionSelected } = useSidebarStore();

  return (
    <Box sx={{ display: "flex", m: 0 }}>
      <Box>
        <Sidebar />
      </Box>
        {optionSelected === 'Inicio' && <Inicio/>}
        {optionSelected === 'Inventario' && <Inventario/>}
        {optionSelected === 'Reportes' && <Reportes/>}
      

    </Box>
  );
};

export default Home;
