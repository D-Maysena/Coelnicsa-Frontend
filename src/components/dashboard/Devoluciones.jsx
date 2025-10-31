import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import ModalAgregarMaterial from "./ModalAgregarMaterial";

export const Devoluciones = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const materiales = [
    {
      nombre: "Cable ACSR 2/0",
      descripcion: "Cable de aluminio con alma de acero",
      cantidad: "240",
      categoria: "Cables",
      almacen: "Almacén A",
    },
    {
      nombre: "Medidor Eléctrico",
      descripcion: "Medidor monofásico digital",
      cantidad: "120",
      categoria: "Medidores",
      almacen: "Almacén B",
    },
    {
      nombre: "Poste de concreto",
      descripcion: "Poste reforzado de 9 metros",
      cantidad: "80",
      categoria: "Postes",
      almacen: "Almacén A",
    },
  ];

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 6, bgcolor: "#ffffffff" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Box>
          <Typography variant="h5" fontWeight="bold">
           Devoluciones de materiales
          </Typography>
          <Typography sx={{ fontSize: "15px" }}>
           Gestiona las devoluciones de productos a proveedores
          </Typography>
        </Box>
      </Box>

      <Box
        mt={3}
        display="flex"
        flexWrap="wrap"
        gap={2}
        borderRadius={3}
        justifyContent="flex-start"
        border={"1px solid #e0e0e0"}
      >
        <Box
          pl={4}
          pt={4}
          pr={4}
          display="flex"
          width="100%"
          alignItems="center"
        >
          <Typography variant="body1" fontWeight="bold">
            Listado de materiales
          </Typography>
          <Box ml="auto" display="flex" gap={2}>
            <Button
              variant="outlined"
              sx={{
                borderColor: "#19177aff",
                color: "#19177aff",
              }}
            >
              Exportar a PDF
            </Button>
            <Button
              sx={{ backgroundColor: "#19177aff", color: "white" }}
              startIcon={<AddIcon />}
              onClick={handleOpen}
            >
              Nueva devolucion
            </Button>
          </Box>
        </Box>

        <Box
          width={"100%"}
          display="flex"
          gap={3}
          p={3}
          flexWrap="wrap"
          sx={{
            bgcolor: "#fff",
            borderRadius: 2,
            boxShadow:
              "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow, 0px 1px 3px rgba(0,0,0,0.1))",
          }}
        >
          <TextField
            placeholder="Buscar devoluciones"
            variant="outlined"
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="action" />
                </InputAdornment>
              ),
            }}
            sx={{
              backgroundColor: "white",
              width: "40%",
              borderRadius: 2,
              "& .MuiOutlinedInput-root": {
                borderRadius: 2,
              },
            }}
          />

          {/* <FormControl sx={{ width: "20%" }} size="small">
            <InputLabel>Almacén</InputLabel>
            <Select label="Almacén">
              <MenuItem value="all">Todos los almacenes</MenuItem>
              <MenuItem value="a">Almacén A</MenuItem>
              <MenuItem value="b">Almacén B</MenuItem>
            </Select>
          </FormControl> */}

          <FormControl sx={{ width: "35%" }} size="small">
            <InputLabel>Estado</InputLabel>
            <Select label="Estado">
              <MenuItem value="Aprobado">Aprobado</MenuItem>
              <MenuItem value="Pendiente">Pendiente</MenuItem>
              <MenuItem value="Rechazado">Rechazado</MenuItem>
            </Select>
          </FormControl>

          <Box
            width={"100%"}
            display="flex"
            gap={3}
            flexWrap="wrap"
            sx={{
              bgcolor: "#fff",
              borderRadius: 2,
              boxShadow:
                "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow, 0px 1px 3px rgba(0,0,0,0.1))",
            }}
          >
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Código</TableCell>
                    <TableCell align="right">Descripción</TableCell>
                    <TableCell align="right">Categoría</TableCell>
                    <TableCell align="right">Stock</TableCell>
                    <TableCell align="right">Mínimo</TableCell>
                    <TableCell align="right">Ubicación</TableCell>
                    <TableCell align="right">Estado</TableCell>
                    <TableCell align="right">Acciones</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {materiales.map((row) => (
                    <TableRow
                      key={row.nombre}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.nombre}
                      </TableCell>
                      <TableCell align="right">{row.descripcion}</TableCell>
                      <TableCell align="right">{row.cantidad}</TableCell>
                      <TableCell align="right">{row.categoria}</TableCell>
                      <TableCell align="right">{row.almacen}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
        {/* {materiales.map((mat, index) => (
          <Box
            key={index}
            width={{ xs: "100%", sm: "48%", md: "25%" }}
            p={3}
            bgcolor="white"
            sx={{
              border: "1px solid #e0e0e0",
              borderRadius: 2,
              boxShadow:
                "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow, 0px 1px 3px rgba(0,0,0,0.1))",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
              "&:hover": {
                transform: "scale(1.02)",
                boxShadow: "0px 4px 12px rgba(0,0,0,0.15)",
              },
            }}
          >
            <Typography variant="h6" fontWeight="semibold" gutterBottom>
              {mat.nombre}
            </Typography>
            <Typography color="text.secondary" fontSize={14} gutterBottom>
              {mat.descripcion}
            </Typography>

            <Box mt={3}>
              <Box display="flex" justifyContent="space-between" mb={1}>
                <Typography color="gray" fontSize={14}>
                  Cantidad:
                </Typography>
                <Typography
                  fontSize={14}
                  sx={{ color: "green" }}
                  fontWeight={"bold"}
                >
                  {mat.cantidad} unidades
                </Typography>
              </Box>

              <Box display="flex" justifyContent="space-between" mb={1}>
                <Typography color="gray" fontSize={14}>
                  Categoría:
                </Typography>
                <Typography fontSize={14}>{mat.categoria}</Typography>
              </Box>

              <Box display="flex" justifyContent="space-between" mb={1}>
                <Typography color="gray" fontSize={14}>
                  Almacén:
                </Typography>
                <Typography
                  fontSize={14}
                  sx={{ color: "#1d4ed8", backgroundColor: "#dbeafe" }}
                  p={1}
                  borderRadius={1}
                >
                  {mat.almacen}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))} */}
      </Box>
      <ModalAgregarMaterial
        open={open}
        handleClose={handleClose}
        handleOpen={handleOpen}
      />
    </Box>
  );
};

export default Devoluciones;
