import { AppBar, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigation = useNavigate();
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#fff",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.12)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
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
          style={{
            display: "flex",
            flexDirection: "row",
            marginRight: "16px",
          }}
        >
          <Button
            variant="outlined"
            onClick={() => navigation("/")}
            sx={{ marginRight: 16, color: "#333", borderColor: "#333" }}
          >
            Inico
          </Button>
          <Button
            variant="outlined"
            onClick={() => navigation("/flora-ai")}
            sx={{ marginRight: 16, color: "#333", borderColor: "#333" }}
          >
            Flora AI
          </Button>
          <Button
            variant="outlined"
            onClick={() => navigation("/historico-simulacao")}
            sx={{ marginRight: 16, color: "#333", borderColor: "#333" }}
          >
            Historico de Simulacoes
          </Button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginRight: "16px",
          }}
        >
          <Button
            variant="outlined"
            onClick={() => navigation("/simular-colheita")}
            sx={{ marginRight: 16, color: "#333", borderColor: "#333" }}
          >
            Simular de Colheita
          </Button>
        </div>
      </div>
    </AppBar>
  );
}

export default Navbar;
