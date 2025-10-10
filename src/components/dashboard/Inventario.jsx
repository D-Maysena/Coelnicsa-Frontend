import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
export const Inventario = () => {

  const materiales = [
    {nombre: 'Cable ACSR 2/0' }]


  return (
    <Box component="main" sx={{ flexGrow: 1, p: 6, bgcolor: "#ffffffff" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
          flexWrap: "wrap",
        }}
      >
        <Box>
          <Typography variant="h5" fontWeight="bold">
            Inventario de materiales
          </Typography>
          <Typography sx={{ fontSize: "15px" }}>
            Gestiona el inventario de materiales y equipos eléctricos
          </Typography>
        </Box>

        <Box sx={{ mt: { xs: 2, sm: 0 } }}>
          <Button variant="contained">
            <AddIcon />
            Agregar Material
          </Button>
        </Box>
      </Box>
      <Box
        mt={6}
        display="flex"
        gap={3}
        p={2}
        sx={{
          bgcolor: "#fff",
          border: "1px solid #e0e0e0",
          borderRadius: 2,
        }}
      >
        <TextField
          id="buscar-materiales"
          placeholder="Buscar materiales"
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
        <FormControl sx={{ width: "20%" }} size="small">
          <InputLabel id="demo-simple-select-label">Almacen</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Almacen"
          >
            <MenuItem value={10}>Todos los almacenes</MenuItem>
            <MenuItem value={20}>Almacen A</MenuItem>
            <MenuItem value={30}>Almacen B</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ width: "30%" }} size="small">
          <InputLabel id="demo-simple-select-label">Categorias</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Almacen"
          >
            <MenuItem value={10}>Cables</MenuItem>
            <MenuItem value={20}>Medidores</MenuItem>
            <MenuItem value={30}>Postes</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box mt={2} >
          
      </Box>
    </Box>
  );
};

export default Inventario;
