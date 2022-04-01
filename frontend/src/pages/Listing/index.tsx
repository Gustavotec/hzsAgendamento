import Pagination from "components/Pagination";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import "./styles.css";

const BASE_URL = 'http://localhost:8080'

const Listing = () => {

  useEffect(() => {
    axios.get(`${ BASE_URL }/records?linesPerPage=30`)
      .then(response => console.log(response));
  },[]);

return(
  
    <div className="page-container">
      <table className="records-table" cellPadding="0" cellSpacing="0">
        <thead>
          <tr>
            <th>Prontuário</th>
            <th>Nome</th>
            <th>Nome da Mãe</th>
            <th>Telefone</th>
            <th>Médico</th>
            <th>Procedimento</th>
          </tr>
        </thead>
        <tbody>
        <tr>
            <td>012234556</td>
            <td>José Maria da Silva de Souza</td>
            <td>Maria José da Silva de Souza</td>
            <td>(43) 98765-4332</td>
            <td>Nelson Ticaricatica Tomelirola</td>
            <td>Retirada da veia safena por motivo de varizes</td>
          </tr>
          <tr>
            <td>012234556</td>
            <td>José Maria da Silva de Souza</td>
            <td>Maria José da Silva de Souza</td>
            <td>(43) 98765-4332</td>
            <td>Nelson Ticaricatica Tomelirola</td>
            <td>Retirada da veia safena por motivo de varizes</td>
          </tr>
        </tbody>
      </table>
      <Link to="/form/1">
        <button className="btn btn-primary cadastro-btn mt-3">Cadastar</button>
      </Link>
      <Pagination />
    </div>
)
};

export default Listing;
