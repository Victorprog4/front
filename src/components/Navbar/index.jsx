import { AppBar, Button, Link } from "@mui/material";
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
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        <img
          src="./src/assets/logo.svg"
          alt="Logo"
          style={{ height: 48, margin: "8px 16px" }}
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
              marginRight: 2,
              color: "#606060",
              fontSize: "16px",
            }}
          >
            Flora
            <Link sx={{ textDecoration: "none", color: "#00BB71", marginLeft: "3px" }}>AI</Link>
          </Button>
          <Button
            variant="text"
            onClick={() => navigation("/historico-simulacao")}
            sx={{
              display: "flex",
              marginRight: 2,
              color: "#606060",
              fontSize: "16px",
            }}
          >
            Histórico de simulações
          </Button>
          <Button
            variant="contained"
            onClick={() => navigation("/")}
            sx={{
              marginLeft: 16,
              color: "#FFFFFF",
              background: "#00BB71",
              fontSize: "16px",
              borderRadius: "30px",
              paddingTop: "8px",
              paddingBottom: "8px",
              paddingLeft: "24px",
              paddingRight: "24px",
              boxShadow: "none",
              "&:hover": {
                background: "#00BB71",
              },
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
