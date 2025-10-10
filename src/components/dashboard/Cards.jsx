import Inventory2Icon from "@mui/icons-material/Inventory2";
import MovingIcon from "@mui/icons-material/Moving";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import WarningIcon from "@mui/icons-material/Warning";
import { Box, Typography } from "@mui/material";

export const Cards = () => {
  const cardStyle = {
    bgcolor: "white",
    p: 2,
    borderRadius: 2,
    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: 145,
    transition: "all 0.3s ease",
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.2)",
    },
  };


  return (
    <Box  mt={5} display="flex" gap={3} flexWrap="wrap">
      <Box sx={{ ...cardStyle, borderLeft: "5px solid rgb(37, 99, 235)" }}>
        <Box>
          <Typography color="gray" fontWeight="bold">
            Total materiales
          </Typography>
          <Typography fontWeight="bold" variant="h5">
            250
          </Typography>
        </Box>
        <Inventory2Icon
          sx={{
            ml: 2,
            color: "rgb(37, 99, 235)",
            backgroundColor: "#dbeafe",
            p: 1,
            borderRadius: 2,
            fontSize: 30,
          }}
        />
      </Box>

      <Box sx={{ ...cardStyle, borderLeft: "5px solid rgb(5, 150, 105)" }}>
        <Box>
          <Typography color="gray" fontWeight="bold">
            Entradas
          </Typography>
          <Typography fontWeight="bold" variant="h5">
            120
          </Typography>
        </Box>
        <MovingIcon
          sx={{
            color: "rgb(5, 150, 105)",
            backgroundColor: "#dcfce7",
            ml: 2,
            p: 1,
            borderRadius: 2,
            fontSize: 30,
          }}
        />
      </Box>

      <Box sx={{ ...cardStyle, borderLeft: "5px solid rgb(220, 38, 38)" }}>
        <Box>
          <Typography color="gray" fontWeight="bold">
            Salidas
          </Typography>
          <Typography fontWeight="bold" variant="h5">
            80
          </Typography>
        </Box>
        <TrendingDownIcon
          sx={{
            color: "rgb(220, 38, 38)",
            backgroundColor: "#fee2e2",
            ml: 2,
            p: 1,
            borderRadius: 2,
            fontSize: 30,
          }}
        />
      </Box>

      <Box sx={{ ...cardStyle, borderLeft: "5px solid rgb(124, 58, 237)" }}>
        <Box>
          <Typography color="gray" fontWeight="bold">
            Devoluciones
          </Typography>
          <Typography fontWeight="bold" variant="h5">
            45
          </Typography>
        </Box>
        <AutorenewIcon
          sx={{
            color: "rgb(124, 58, 237)",
            backgroundColor: "#f3e8ff",
            ml: 0,
            p: 1,
            borderRadius: 2,
            fontSize: 30,
          }}
        />
      </Box>

      <Box sx={{ ...cardStyle, borderLeft: "5px solid rgb(217, 119, 6)" }}>
        <Box>
          <Typography color="gray" fontWeight="bold">
            Stock Bajo
          </Typography>
          <Typography fontWeight="bold" variant="h5">
            15
          </Typography>
        </Box>
        <WarningIcon
          sx={{
            color: "rgb(217, 119, 6)",
            backgroundColor: "#fef9c3",
            ml: 2,
            p: 1,
            borderRadius: 2,
            fontSize: 30,
          }}
        />
      </Box>
    </Box>
  );
};

export default Cards;
