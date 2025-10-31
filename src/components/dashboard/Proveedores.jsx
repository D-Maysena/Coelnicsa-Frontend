import {
  Box,
  Button,
  TextField,
  InputAdornment,
  Typography,
  Card,
  CardContent,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import PeopleIcon from "@mui/icons-material/People";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { useState } from "react";

export const Proveedores = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const proveedoresData = [
    {
      id: "PROV-001",
      empresa: "Tech Soluciones S.A.",
      contacto: "Juan Rodriguez",
      email: "contacto@techsolutions.com",
      telefono: "+52 55 1234 5678",
      productos: 45,
      estado: "Activo",
    },
    {
      id: "PROV-002",
      empresa: "Electrónica Global",
      contacto: "María Fernández",
      email: "ventas@electronicaglobal.com",
      telefono: "+52 55 8765 4321",
      productos: 32,
      estado: "Activo",
    },
    {
      id: "PROV-003",
      empresa: "Periféricos Pro",
      contacto: "Carlos Méndez",
      email: "info@perifericospro.com",
      telefono: "+52 81 2345 6789",
      productos: 18,
      estado: "Inactivo",
    },
  ];

  const statsCards = [
    {
      title: "Total Proveedores",
      value: "3",
      icon: PeopleIcon,
      color: "rgb(37, 99, 235)",
      bgColor: "#dbeafe",
    },
    {
      title: "Proveedores Activos",
      value: "2",
      icon: ShoppingCartIcon,
      color: "rgb(5, 150, 105)",
      bgColor: "#dcfce7",
    },
    {
      title: "Productos Totales",
      value: "95",
      icon: AssignmentIcon,
      color: "rgb(220, 38, 38)",
      bgColor: "#fee2e2",
    },
  ];

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
            Proveedores
          </Typography>
          <Typography sx={{ fontSize: "15px", color: "#666" }}>
            Gestiona la información de los proveedores
          </Typography>
        </Box>

        <Button
          variant="contained"
          sx={{
            bgcolor: "#1976d2",
            textTransform: "none",
            py: 1.2,
            px: 3,
            borderRadius: 1,
            display: "flex",
            alignItems: "center",
            gap: 1,
            mt: { xs: 2, sm: 0 },
          }}
          startIcon={<AddIcon />}
          onClick={() => setOpenDialog(true)}
        >
          Nuevo Proveedor
        </Button>
      </Box>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        {statsCards.map((card, index) => {
          const IconComponent = card.icon;
          return (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  border: "1px solid #e0e0e0",
                  boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.08)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.02)",
                    boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.12)",
                  },
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    <Typography sx={{ fontSize: "14px", color: "#666" }}>
                      {card.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "28px",
                        fontWeight: "bold",
                        color: "#333",
                      }}
                    >
                      {card.value}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 60,
                      height: 60,
                      borderRadius: 2,
                      backgroundColor: card.bgColor,
                    }}
                  >
                    <IconComponent
                      sx={{ color: card.color, fontSize: 32 }}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>

      <Card
        sx={{
          mb: 3,
          border: "1px solid #e0e0e0",
          boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.08)",
        }}
      >
        <CardContent sx={{ p: 2 }}>
          <TextField
            placeholder="Buscar por nombre, contacto o correo..."
            variant="outlined"
            size="small"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="action" />
                </InputAdornment>
              ),
            }}
            sx={{
              backgroundColor: "white",
              borderRadius: 1,
            }}
          />
        </CardContent>
      </Card>

      <Card
        sx={{
          border: "1px solid #e0e0e0",
          boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.08)",
        }}
      >
        <CardContent sx={{ p: 0 }}>
          <Box sx={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "14px",
              }}
            >
              <thead>
                <tr style={{ borderBottom: "2px solid #e0e0e0" }}>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "16px",
                      fontWeight: "bold",
                      color: "#333",
                      backgroundColor: "#f9f9f9",
                    }}
                  >
                    ID
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "16px",
                      fontWeight: "bold",
                      color: "#333",
                      backgroundColor: "#f9f9f9",
                    }}
                  >
                    Empresa
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "16px",
                      fontWeight: "bold",
                      color: "#333",
                      backgroundColor: "#f9f9f9",
                    }}
                  >
                    Contacto
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "16px",
                      fontWeight: "bold",
                      color: "#333",
                      backgroundColor: "#f9f9f9",
                    }}
                  >
                    Correo
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "16px",
                      fontWeight: "bold",
                      color: "#333",
                      backgroundColor: "#f9f9f9",
                    }}
                  >
                    Teléfono
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "16px",
                      fontWeight: "bold",
                      color: "#333",
                      backgroundColor: "#f9f9f9",
                    }}
                  >
                    Productos
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "16px",
                      fontWeight: "bold",
                      color: "#333",
                      backgroundColor: "#f9f9f9",
                    }}
                  >
                    Estado
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "16px",
                      fontWeight: "bold",
                      color: "#333",
                      backgroundColor: "#f9f9f9",
                    }}
                  >
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody>
                {proveedoresData.map((proveedor) => (
                  <tr
                    key={proveedor.id}
                    style={{
                      borderBottom: "1px solid #f0f0f0",
                      transition: "background-color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = "#f9f9f9")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = "white")
                    }
                  >
                    <td
                      style={{
                        padding: "16px",
                        fontWeight: "bold",
                        color: "#1976d2",
                      }}
                    >
                      {proveedor.id}
                    </td>
                    <td style={{ padding: "16px" }}>{proveedor.empresa}</td>
                    <td style={{ padding: "16px" }}>{proveedor.contacto}</td>
                    <td style={{ padding: "16px", color: "#666" }}>
                      {proveedor.email}
                    </td>
                    <td style={{ padding: "16px", color: "#666" }}>
                      {proveedor.telefono}
                    </td>
                    <td style={{ padding: "16px" }}>
                      <Box
                        sx={{
                          display: "inline-block",
                          bgcolor: "#f0f4ff",
                          color: "#1976d2",
                          px: 2,
                          py: 0.5,
                          borderRadius: 1,
                          fontWeight: "bold",
                        }}
                      >
                        {proveedor.productos}
                      </Box>
                    </td>
                    <td style={{ padding: "16px" }}>
                      <Chip
                        label={proveedor.estado}
                        color={
                          proveedor.estado === "Activo" ? "success" : "default"
                        }
                        variant="outlined"
                        sx={{
                          backgroundColor:
                            proveedor.estado === "Activo"
                              ? "#dcfce7"
                              : "#f0f0f0",
                        }}
                      />
                    </td>
                    <td style={{ padding: "16px" }}>
                      <Box sx={{ display: "flex", gap: 1 }}>
                        <Button
                          variant="text"
                          size="small"
                          sx={{
                            color: "#1976d2",
                            minWidth: 36,
                            p: 0.5,
                          }}
                          title="Ver detalles"
                        >
                          <VisibilityIcon sx={{ fontSize: 18 }} />
                        </Button>
                        <Button
                          variant="text"
                          size="small"
                          sx={{
                            color: "#1976d2",
                            minWidth: 36,
                            p: 0.5,
                          }}
                          title="Editar"
                        >
                          <EditIcon sx={{ fontSize: 18 }} />
                        </Button>
                        <Button
                          variant="text"
                          size="small"
                          sx={{
                            color: "#dc6b3d",
                            minWidth: 36,
                            p: 0.5,
                          }}
                          title="Eliminar"
                        >
                          <DeleteIcon sx={{ fontSize: 18 }} />
                        </Button>
                      </Box>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Box>
        </CardContent>
      </Card>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle sx={{ fontWeight: "bold" }}>
          Nuevo Proveedor
        </DialogTitle>
        <DialogContent sx={{ minWidth: 400, pt: 2 }}>
          <TextField
            fullWidth
            label="Empresa"
            variant="outlined"
            size="small"
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Contacto"
            variant="outlined"
            size="small"
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Correo"
            type="email"
            variant="outlined"
            size="small"
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Teléfono"
            variant="outlined"
            size="small"
            sx={{ mb: 2 }}
          />
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button onClick={() => setOpenDialog(false)}>Cancelar</Button>
          <Button
            variant="contained"
            sx={{ bgcolor: "#1976d2" }}
            onClick={() => setOpenDialog(false)}
          >
            Guardar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Proveedores;
