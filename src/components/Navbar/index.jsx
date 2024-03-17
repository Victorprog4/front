import React from "react";
import { AppBar, Button, Menu, MenuItem } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        height: 64,
        backgroundColor: "#fff",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.12)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <img
          src="logo.png"
          alt="Logo"
          style={{ height: 40, margin: "8px 16px" }}
        />
        <div
          style={{ display: "flex", flexDirection: "row", marginRight: "16px" }}
        >
          <Button
            variant="outlined"
            component={RouterLink}
            to="/"
            sx={{ marginRight: 16, color: "#333", borderColor: "#333" }}
          >
            Inico
          </Button>
          <Button
            variant="outlined"
            component={RouterLink}
            to="/flora-ai"
            sx={{ marginRight: 16, color: "#333", borderColor: "#333" }}
          >
            Flora AI
          </Button>
          <Button
            variant="outlined"
            component={RouterLink}
            to="/historico-simulacao"
            sx={{ marginRight: 16, color: "#333", borderColor: "#333" }}
          >
            Historico de Simulacoes
          </Button>
        </div>
      </div>
    </AppBar>
  );
}

export default Navbar;
