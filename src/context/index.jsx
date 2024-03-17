import { createContext, useState, useEffect } from "react";
import { http } from "../api";

const ConsultaContext = createContext({
  consultas: [],
  fetchConsultas: () => {},
});

const ConsultaProvider = ({ children }) => {
  const [consultas, setConsultas] = useState([]);
  const estados = [{ value: "RO", label: "Rondonia" }];
  const cultivos = [{ value: "Arroz Integral", label: "Arroz Integral" }];

  useEffect(() => {
    fetchConsultas();
  }, []);

  const fetchConsultas = async () => {
    const response = await http.get("/ultimas_consultas");
    console.log(response);
    setConsultas(response.data.consultas);
  };

  return (
    <ConsultaContext.Provider
      value={{ consultas, fetchConsultas, estados, cultivos }}
    >
      {children}
    </ConsultaContext.Provider>
  );
};

export { ConsultaContext, ConsultaProvider };
