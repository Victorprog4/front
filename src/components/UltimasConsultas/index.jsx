import { useContext } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { ConsultaContext } from "../../context";

const UltimasConsultas = () => {
  const { consultas } = useContext(ConsultaContext);

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Cultivo</TableCell>
            <TableCell>Estado</TableCell>
            <TableCell>Temperatura</TableCell>
            <TableCell>Umidade</TableCell>
            <TableCell>Previsão</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {consultas?.map((consulta) => (
            <TableRow key={consulta.id}>
              <TableCell>{consulta.id}</TableCell>
              <TableCell>{consulta.cultivo}</TableCell>
              <TableCell>{consulta.estado}</TableCell>
              <TableCell>{consulta.temperatura}</TableCell>
              <TableCell>{consulta.umidade}</TableCell>
              <TableCell>{consulta.previsao}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UltimasConsultas;
