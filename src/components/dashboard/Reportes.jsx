import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  Card,
  CardContent,
  Grid,
} from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import InventoryIcon from "@mui/icons-material/Inventory2";
import MovingIcon from "@mui/icons-material/Moving";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import PeopleIcon from "@mui/icons-material/People";

export const Reportes = () => {
  const reportTypes = [
    {
      id: "inventario",
      title: "Reporte de Inventario",
      description: "Estado actual del inventario con niveles de stock",
      icon: InventoryIcon,
      color: "rgb(37, 99, 235)",
      bgColor: "#dbeafe",
    },
    {
      id: "movimientos",
      title: "Reporte de Movimientos",
      description: "Historial de entradas y salidas de productos",
      icon: MovingIcon,
      color: "rgb(5, 150, 105)",
      bgColor: "#dcfce7",
    },
    {
      id: "tendencias",
      title: "Análisis de Tendencias",
      description: "Tendencias de consumo y rotación de productos",
      icon: TrendingDownIcon,
      color: "rgb(220, 38, 38)",
      bgColor: "#fee2e2",
    },
    {
      id: "proveedores",
      title: "Reporte de Proveedores",
      description: "Desempeño y estadísticas de proveedores",
      icon: PeopleIcon,
      color: "rgb(217, 119, 6)",
      bgColor: "#fef9c3",
    },
  ];

  const recentReports = [
    {
      id: 1,
      name: "Inventario Enero 2024",
      type: "Inventario",
      date: "15/01/2024",
      format: "PDF",
    },
    {
      id: 2,
      name: "Movimientos Diciembre 2023",
      type: "Movimientos",
      date: "01/01/2024",
      format: "Excel",
    },
    {
      id: 3,
      name: "Análisis Anual 2023",
      type: "Tendencias",
      date: "31/12/2023",
      format: "PDF",
    },
  ];

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 6, bgcolor: "#ffffffff" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
          flexWrap: "wrap",
        }}
      >
        <Box>
          <Typography variant="h5" fontWeight="bold">
            Reportes
          </Typography>
          <Typography sx={{ fontSize: "15px", color: "#666" }}>
            Selecciona el tipo de reporte y descárgalo
          </Typography>
        </Box>
      </Box>

      <Card
        sx={{
          mb: 4,
          border: "1px solid #e0e0e0",
          boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.08)",
        }}
      >
        <CardContent sx={{ p: 3 }}>
          <Typography variant="h6" fontWeight="bold" sx={{ mb: 3 }}>
            Generar Reporte
          </Typography>

          <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap", mb: 3 }}>
            <FormControl sx={{ minWidth: 250 }}>
              <InputLabel>Tipo de Reporte</InputLabel>
              <Select defaultValue="" label="Tipo de Reporte">
                <MenuItem value="inventario">Reporte de Inventario</MenuItem>
                <MenuItem value="movimientos">Reporte de Movimientos</MenuItem>
                <MenuItem value="tendencias">Análisis de Tendencias</MenuItem>
                <MenuItem value="proveedores">Reporte de Proveedores</MenuItem>
              </Select>
            </FormControl>

            <FormControl sx={{ minWidth: 200 }}>
              <InputLabel>Período</InputLabel>
              <Select defaultValue="ultimo-mes" label="Período">
                <MenuItem value="ultimo-mes">Último mes</MenuItem>
                <MenuItem value="ultimos-3-meses">Últimos 3 meses</MenuItem>
                <MenuItem value="ultimos-6-meses">Últimos 6 meses</MenuItem>
                <MenuItem value="este-ano">Este año</MenuItem>
                <MenuItem value="personalizado">Personalizado</MenuItem>
              </Select>
            </FormControl>

            <FormControl sx={{ minWidth: 150 }}>
              <InputLabel>Formato</InputLabel>
              <Select defaultValue="pdf" label="Formato">
                <MenuItem value="pdf">PDF</MenuItem>
                <MenuItem value="excel">Excel</MenuItem>
                <MenuItem value="csv">CSV</MenuItem>
              </Select>
            </FormControl>
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
            }}
            startIcon={<FileDownloadIcon />}
          >
            Generar y Descargar
          </Button>
        </CardContent>
      </Card>

      <Typography variant="h6" fontWeight="bold" sx={{ mb: 3 }}>
        Tipos de Reportes Disponibles
      </Typography>

      <Grid container spacing={3} sx={{ mb: 5 }}>
        {reportTypes.map((report) => {
          const IconComponent = report.icon;
          return (
            <Grid item xs={12} sm={6} md={6} lg={6} key={report.id}>
              <Card
                sx={{
                  border: "1px solid #e0e0e0",
                  boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.08)",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.12)",
                  },
                }}
              >
                <CardContent sx={{ display: "flex", alignItems: "center" }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 60,
                      height: 60,
                      borderRadius: 2,
                      backgroundColor: report.bgColor,
                      mr: 2,
                    }}
                  >
                    <IconComponent
                      sx={{ color: report.color, fontSize: 32 }}
                    />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="body1" fontWeight="bold">
                      {report.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "#666", fontSize: "14px" }}
                    >
                      {report.description}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>

      <Typography variant="h6" fontWeight="bold" sx={{ mb: 3 }}>
        Reportes Recientes
      </Typography>

      <Card
        sx={{
          border: "1px solid #e0e0e0",
          boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.08)",
        }}
      >
        <CardContent>
          <Box sx={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "14px",
              }}
            >
              <thead>
                <tr style={{ borderBottom: "1px solid #e0e0e0" }}>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "12px",
                      fontWeight: "bold",
                      color: "#333",
                    }}
                  >
                    Nombre
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "12px",
                      fontWeight: "bold",
                      color: "#333",
                    }}
                  >
                    Tipo
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "12px",
                      fontWeight: "bold",
                      color: "#333",
                    }}
                  >
                    Fecha
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "12px",
                      fontWeight: "bold",
                      color: "#333",
                    }}
                  >
                    Formato
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "12px",
                      fontWeight: "bold",
                      color: "#333",
                    }}
                  >
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody>
                {recentReports.map((report) => (
                  <tr
                    key={report.id}
                    style={{ borderBottom: "1px solid #f0f0f0" }}
                  >
                    <td style={{ padding: "12px" }}>{report.name}</td>
                    <td style={{ padding: "12px" }}>{report.type}</td>
                    <td style={{ padding: "12px" }}>{report.date}</td>
                    <td style={{ padding: "12px" }}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          color: "#dc6b3d",
                        }}
                      >
                        <PictureAsPdfIcon sx={{ fontSize: 18 }} />
                        {report.format}
                      </Box>
                    </td>
                    <td style={{ padding: "12px" }}>
                      <Button
                        variant="outlined"
                        size="small"
                        sx={{
                          color: "#1976d2",
                          borderColor: "#1976d2",
                          textTransform: "none",
                        }}
                        startIcon={<FileDownloadIcon />}
                      >
                        Descargar
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Reportes;
