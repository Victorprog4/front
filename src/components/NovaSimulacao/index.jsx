import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
} from "@mui/material";
import { useContext, useState } from "react";
import "./index.css";
import { http } from "../../api";
import { ConsultaContext } from "../../context";




function NovaSimulacao() {
  const {estados ,cultivos} = useContext(ConsultaContext)

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

    http
      .post("/previsao", data)
      .then((response) => {
     
        console.log(response.data);
      })
      .catch((error) => {
   
        console.error(error);
      });
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
