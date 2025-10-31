import * as React from "react";
import {
  Box,
  Button,
  Typography,
  Modal,
  TextField,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Autocomplete,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ModalAgregarMaterial from "./ModalAgregarMaterial";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  borderRadius: 3,
  boxShadow: 24,
  p: 4,
};

export default function ModalAgregarMovimiento({ open, handleClose }) {
  const [openMaterial, setOpen] = useState(false);
  const handleOpenMaterial = () => setOpen(true);
  const handleCloseMaterial = () => setOpen(false);
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-title" variant="h6" fontWeight="bold" mb={3}>
          Registrar nuevo movimiento
        </Typography>

        <Box container spacing={2}>
          <Box display={"flex"} flexDirection={"column"} gap={2}>
            <Box
              xs={12}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
              gap={2}
            >
              <FormControl size="small" sx={{ width: "50%" }}>
                <Typography sx={{ mb: 0.5 }}>Material / Producto</Typography>
                <Autocomplete
                  size="small"
                  options={["Cables", "Medidores", "Postes"]}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      placeholder="Seleccione un material"
                      variant="outlined"
                    />
                  )}
                />
              </FormControl>
              <Box mt={3}>
                <Button
                  sx={{ backgroundColor: "#19177aff", color: "white" }}
                  startIcon={<AddIcon />}
                  onClick={handleOpenMaterial}
                >
                  Nuevo material
                </Button>
              </Box>
            </Box>
            <Box display="flex" flexDirection="row" gap={2}>
              <Box sx={{ width: "30%" }}>
                <Typography sx={{ mb: 0.5 }}>Cantidad</Typography>
                <TextField
                  variant="outlined"
                  type="number"
                  size="small"
                  placeholder="0.0"
                  fullWidth
                />
              </Box>

              <Box sx={{ width: "70%" }}>
                <Typography sx={{ mb: 0.5 }}>Ubicación</Typography>
                <Autocomplete
                  size="small"
                  options={["Almacén A", "Almacén B"]}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      placeholder="Seleccione la ubicación"
                      variant="outlined"
                      fullWidth
                    />
                  )}
                />
              </Box>
            </Box>

            <Box fullWidth>
              <Typography sx={{ mb: 0.5 }}>Proveedor</Typography>

              <FormControl size="small" sx={{ width: "100%" }}>
                <Autocomplete
                  size="small"
                  options={["Juan", "Jose", "Pedro"]}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      placeholder="Seleccione el proveedor"
                      variant="outlined"
                    />
                  )}
                />
              </FormControl>
            </Box>

            <Box xs={12}>
              <Typography sx={{ mb: 0.5 }}>Observaciones</Typography>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Notas adicionales sobre el movimiento"
                multiline
                rows={3}
              />
            </Box>
          </Box>

          <Box xs={12} display="flex" justifyContent="flex-end" gap={2} mt={2}>
            <Button variant="outlined" color="inherit" onClick={handleClose}>
              Cancelar
            </Button>
            <Button variant="contained" color="primary">
              Agregar Material
            </Button>
          </Box>
        </Box>
        <ModalAgregarMaterial
          open={openMaterial}
          handleClose={handleCloseMaterial}
          handleOpen={handleOpenMaterial}
        />
      </Box>
    </Modal>
  );
}
