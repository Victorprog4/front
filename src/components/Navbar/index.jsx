import { AppBar, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigation = useNavigate();
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#fff",
        boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.06)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          maxWidth: "1000px",
          margin: "0 auto",
          width: "100%",
          border: "1px solid red",
        }}
      >
        <img
          src="./src/assets/logo.svg"
          alt="Logo"
          style={{ height: 52, margin: "8px 16px" }}
        />
        <div
          style={{
            display: "flex",
          }}
        >
          <Button
            variant="text"
            onClick={() => navigation("/")}
            sx={{
              marginRight: 2,
              marginLeft: 16,
              color: "#606060",
              fontSize: "16px",
            }}
          >
            Inicio
          </Button>
          <Button
            variant="text"
            onClick={() => navigation("/flora-ai")}
            sx={{
              marginRight: 12,
              color: "#606060",
              fontSize: "16px",
            }}
          >
            Flora AI
          </Button>
          <Button
            variant="text"
            onClick={() => navigation("/historico-simulacao")}
            sx={{
              display: "flex",
              marginRight: 12,
              color: "#606060",
              fontSize: "16px",
            }}
          >
            Histórico de simulações
          </Button>
          <Button
            variant="text"
            onClick={() => navigation("/")}
            sx={{
              marginRight: 12,
              color: "#606060",
              fontSize: "16px",
            }}
          >
            Simular novo plantio
          </Button>
        </div>
      </div>
    </AppBar>
  );
}

export default Navbar;
