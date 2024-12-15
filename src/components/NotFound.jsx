import React from "react";
import { Container, Typography, Box } from "@mui/material";

const NotFound = () => {
  return (
    <Container>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Typography variant="h1" align="center">
          404 - Page Not Found
        </Typography>
      </Box>
    </Container>
  );
};

export default NotFound;
