import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
} from "@mui/material";
import { useState } from "react";
import "./index.css";
import axios from "axios";
const API_URL = "http://localhost:5000/previsao";

const estados = [{ value: "RO", label: "Rondonia" }];
const cultivos = [{ value: "Arroz Integral", label: "Arroz Integral" }];

function NovaSimulacao() {
  const [estadoSelecionado, setEstadoSelecionado] = useState("");
  const [cultivoSelecionado, setCultivoSelecionado] = useState("");

  const handleEstadoChange = (event) => {
    setEstadoSelecionado(event.target.value);
  };

  const handleGrupoChange = (event) => {
    setCultivoSelecionado(event.target.value);
  };

  const handlePesquisa = () => {
    const data = {
      estado: estadoSelecionado,
      cultivo: cultivoSelecionado,
    };

    axios
      .post(API_URL, data)
      .then((response) => {
        // Tratar a resposta da API
        console.log(response.data);
      })
      .catch((error) => {
        // Tratar erros da requisição
        console.error(error);
      });
    // Exemplo: realizar cálculos
    // ...
  };

  return (
    <div className="nova-simulacao">
      <FormControl className="select-estado">
        <InputLabel id="estado-label">Selecione seu estado</InputLabel>
        <Select
          labelId="estado-label"
          id="estado"
          value={estadoSelecionado}
          onChange={handleEstadoChange}
        >
          {estados.map((estado) => (
            <MenuItem key={estado.value} value={estado.value}>
              {estado.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl className="select-grupo">
        <InputLabel id="grupo-label">Selecione um grupo</InputLabel>
        <Select
          labelId="grupo-label"
          id="grupo"
          value={cultivoSelecionado}
          onChange={handleGrupoChange}
        >
          {cultivos.map((cultivo) => (
            <MenuItem key={cultivo.value} value={cultivo.value}>
              {cultivo.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button variant="contained" onClick={handlePesquisa}>
        Pesquisar
      </Button>
    </div>
  );
}

export default NovaSimulacao;
