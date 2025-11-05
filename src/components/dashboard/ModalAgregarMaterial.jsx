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
} from "@mui/material";

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

export default function ModalAgregarMaterial({ open, handleClose }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-title" variant="h6" fontWeight="bold" mb={3}>
          Agregar nuevo material
        </Typography>

        <Box container spacing={2}>
          <Box display={"flex"} flexDirection={"column"} gap={2}>
            <Box xs={12}>
              <TextField
                fullWidth
                label="Nombre del material"
                variant="outlined"
              />
            </Box>

            <Box xs={12}>
              <TextField
                fullWidth
                label="Descripción"
                variant="outlined"
                multiline
                rows={3}
              />
            </Box>
          </Box>

          <Box display={"flex"} flexDirection={"row"} gap={2} mt={2}>
            <FormControl sx={{ width: "50%" }}>
              <InputLabel>Categoría</InputLabel>
              <Select label="Categoría" defaultValue="">
                <MenuItem value="Cables">Cables</MenuItem>
                <MenuItem value="Medidores">Medidores</MenuItem>
                <MenuItem value="Postes">Postes</MenuItem>
              </Select>
            </FormControl>
            <Box>
              <TextField
                label="Unidad de medida"
                sx={{ width: "104%" }}
                variant="outlined"
              />
            </Box>
          </Box>

          <Box display={"flex"} flexDirection={"row"} gap={2} mt={2}>
            <Box   sx={{ width: "100%" }} >
              <TextField
                label="Cantidad inicial"
                variant="outlined"
                type="number"
                sx={{ width: "100%" }}
              />
            </Box>
            <Box   sx={{ width: "100%" }} >
              <TextField
                label="Stock mínimo"
                variant="outlined"
                type="number"
                sx={{ width: "100%" }}
              />
            </Box>
          </Box>

          <Box display={"flex"} flexDirection={"row"} gap={2} mt={2}>
            <FormControl fullWidth>
              <InputLabel>Almacén</InputLabel>
              <Select label="Almacén" defaultValue="">
                <MenuItem value="Almacen A">Almacén A</MenuItem>
                <MenuItem value="Almacen B">Almacén B</MenuItem>
                <MenuItem value="Almacen C">Almacén C</MenuItem>
              </Select>
            </FormControl>
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
      </Box>
    </Modal>
  );
}
