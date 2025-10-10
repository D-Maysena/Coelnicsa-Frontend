import { Box, Divider, Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Cards from "../../components/dashboard/Cards";
export const Inicio = () => {
  return (
    <Box>
      <Box component="main" sx={{ flexGrow: 1, p: 6, bgcolor: "#ffffffff" }}>
        <Typography variant="h5" fontWeight="bold">
          Dashboard
        </Typography>
        <Typography sx={{ fontSize: "15px" }}>
          Resumen general de los almacenes
        </Typography>

        <Box>
          <Cards />
        </Box>
        <Box mt={6} sx={{ boxShadow: "1px 1px 2px 2px rgba(0, 0, 0, 0.1)" }}>
          <Box mt={2} p={2}>
            <Box display={"flex"} alignItems={"center"} gap={2}>
              <AccessTimeIcon sx={{ color: "gray" }} />
              <Typography variant="h6">Movimientos recientes</Typography>
            </Box>
            <Divider sx={{ mt: 2 }} />
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mt: 2,
              }}
            >
              <Typography sx={{ color: "gray" }}>
                No hay movimientos recientes
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Inicio;
