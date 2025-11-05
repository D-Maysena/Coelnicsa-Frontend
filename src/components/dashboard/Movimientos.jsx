import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Tab,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import ModalAgregarMovimiento from "./ModalAgregarMovimiento";

export const Movimientos = () => {
  const [value, setValue] = useState("1");
  const handleChange = (event, newValue) => setValue(newValue);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const movimientos = [
    {
      id: "Cable ACSR 2/0",
      fecha: "Cable de aluminio con alma de acero",
      hora: "240",
      material: "Cables",
      cantidad: "Almacén A",
      proveedor: "Proveedor A",
      usuario: "Usuario A",
    },
    {
      id: "Cable ACSR 2/0",
      fecha: "Cable de aluminio con alma de acero",
      hora: "240",
      material: "Cables",
      cantidad: "Almacén A",
      proveedor: "Proveedor B",
      usuario: "Usuario B",
    },
  ];

  return (
    <Box width={"80%"}>
      <Box component="main" sx={{ flexGrow: 1, p: 6, bgcolor: "#fff" }}>
        <Typography variant="h5" fontWeight="bold">
          Movimientos
        </Typography>
        <Typography sx={{ fontSize: "15px" }}>
          Registra las entradas y salidas de materiales y equipos al inventario
        </Typography>

        <Box
          p={3}
          mt={3}
          width={"100%"}
          display="flex"
          flexDirection="column"
          gap={2}
          borderRadius={3}
          border={"1px solid #e0e0e0"}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="body1" fontWeight="bold">
              Movimientos
            </Typography>

            <Button
              sx={{ backgroundColor: "#19177aff", color: "white" }}
              startIcon={<AddIcon />}
              onClick={handleOpen}
            >
              Nuevo movimiento
            </Button>
          </Box>

          <Box width="100%">
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  aria-label="entradas-tabs"
                  variant="fullWidth"
                >
                  <Tab
                    label="Entradas"
                    value="1"
                    sx={{
                      color: "#777",
                      "&.Mui-selected": {
                        color: "#19177a",
                        borderBottomColor: "#19177a",
                      },
                    }}
                  />{" "}
                  <Tab label="Salidas" value="2" />
                </TabList>
              </Box>

              <TabPanel value="1" sx={{ p: 0, pt: 2 }}>
                <TableContainer component={Paper}>
                  <Table aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Código</TableCell>
                        <TableCell align="right">ID</TableCell>
                        <TableCell align="right">Fecha</TableCell>
                        <TableCell align="right">Hora</TableCell>
                        <TableCell align="right">Material</TableCell>
                        <TableCell align="right">Cantidad</TableCell>
                        <TableCell align="right">Proveedor</TableCell>
                        <TableCell align="right">Usuario</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {movimientos.map((row, idx) => (
                        <TableRow
                          key={idx}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {row.id}
                          </TableCell>
                          <TableCell align="right">{row.fecha}</TableCell>
                          <TableCell align="right">{row.hora}</TableCell>
                          <TableCell align="right">{row.material}</TableCell>
                          <TableCell align="right">{row.cantidad}</TableCell>
                          <TableCell align="right">{row.proveedor}</TableCell>
                          <TableCell align="right">{row.usuario}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </TabPanel>

              <TabPanel value="2" sx={{ p: 0, pt: 2 }}>
                <TableContainer component={Paper}>
                  <Table aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Código</TableCell>
                        <TableCell align="right">ID</TableCell>
                        <TableCell align="right">Fecha</TableCell>
                        <TableCell align="right">Hora</TableCell>
                        <TableCell align="right">Material</TableCell>
                        <TableCell align="right">Cantidad</TableCell>
                        <TableCell align="right">Proveedor</TableCell>
                        <TableCell align="right">Usuario</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {movimientos.map((row, idx) => (
                        <TableRow
                          key={idx}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {row.id}
                          </TableCell>
                          <TableCell align="right">{row.fecha}</TableCell>
                          <TableCell align="right">{row.hora}</TableCell>
                          <TableCell align="right">{row.material}</TableCell>
                          <TableCell align="right">{row.cantidad}</TableCell>
                          <TableCell align="right">{row.proveedor}</TableCell>
                          <TableCell align="right">{row.usuario}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </TabPanel>
            </TabContext>
          </Box>
        </Box>
      </Box>
      <ModalAgregarMovimiento
        open={open}
        handleClose={handleClose}
        handleOpen={handleOpen}
      />
    </Box>
  );
};

export default Movimientos;
