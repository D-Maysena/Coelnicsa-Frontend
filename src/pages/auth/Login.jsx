import React from "react";
import { Grid, Typography, Paper, TextField, Button, Box } from "@mui/material";

const Login = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{
        minHeight: "100vh",
        backgroundColor: "#ffffff",
      }}
    >
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box mb={1}>
          <img
            src="/assets/image.png"
            alt="Logo"
            width={200}
            height={100}
            style={{ objectFit: "contain" }}
          />
        </Box>

        <Paper
          elevation={3}
          sx={{
            p: 6,
            textAlign: "center",
            width: "90%",
            maxWidth: 400,
            backgroundColor: "white",
            borderRadius: 3,
          }}
        >
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Iniciar sesión
          </Typography>

          <Grid container direction="column" spacing={3} mt={4}>
            <Grid item>
              <TextField
                id="correo"
                label="Correo Electrónico"
                variant="outlined"
                fullWidth
                size="small"
              />
            </Grid>
            <Grid item>
              <TextField
                id="contraseña"
                label="Contraseña"
                variant="outlined"
                type="password"
                fullWidth
                size="small"
              />
            </Grid>
            <Grid item>
              <Button sx={{bgcolor: '#19177aff', color: 'white'}} fullWidth>
                Iniciar Sesión
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Login;
