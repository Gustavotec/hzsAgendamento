import Pagination from "components/Pagination";
import "./styles.css";

const Listing = () => (
    <>
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
                  <td>José Maria</td>
                  <td>Maria José</td>
                  <td>43 9876543321</td>
                  <td>NelsonTicaricatica</td>
                  <td>Hernia de nada</td>
              </tr>
              <tr>
                  <td>012234556</td>
                  <td>José Maria</td>
                  <td>Maria José</td>
                  <td>43 9876543321</td>
                  <td>NelsonTicaricatica</td>
                  <td>Hernia de nada</td>
              </tr>
              <tr>
                  <td>012234556</td>
                  <td>José Maria</td>
                  <td>Maria José</td>
                  <td>43 9876543321</td>
                  <td>NelsonTicaricatica</td>
                  <td>Hernia de nada</td>
              </tr>
          </tbody>
        </table>
      </div>
      <Pagination />
    </>
  );

export default Listing;
