import { Box } from "@mui/material";
import Sidebar from "../../components/dashboard/Sidebar";

import Inicio from "../../components/dashboard/Inicio";
import { useSidebarStore } from "../../store/useSidebarStore";
import Inventario from "../../components/dashboard/Inventario";

export const Home = () => {
  const { optionSelected } = useSidebarStore();

  return (
    <Box sx={{ display: "flex", m: 0 }}>
      <Box>
        <Sidebar />
      </Box>
        {optionSelected === 'Inicio' && <Inicio/>}
        {optionSelected === 'Inventario' && <Inventario/>}
        
    </Box>
  );
};

export default Home;
