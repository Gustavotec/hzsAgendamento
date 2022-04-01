import { Link } from "react-router-dom";
import "./styles.css";

function Form() {

  return (
    <div className="agendamento-form-container">
      <div className="agendamento-card-bottom-container">
        <form className="agendamento-form">
          <div className="form-group agendamento-form-group">
            <label htmlFor="dataCad">Data do cadastro</label>
            <input type="dataCad" className="form-control" id="datCad" />
          </div>
          <div className="form-group agendamento-form-group">
            <label htmlFor="diasFila">Dias na Fila</label>
            <input type="diasFila" className="form-control" id="diasFila" />
          </div>
          <div className="form-group agendamento-form-group">
            <label htmlFor="dataAIH">Data da AIH</label>
            <input type="dataAIH" className="form-control" id="dataAIH" />
          </div>
          <div className="form-group agendamento-form-group">
            <label htmlFor="dataCirurgia">Data da Cirurgia</label>
            <input
              type="dataCirurgia"
              className="form-control"
              id="dataCirurgia"
            />
          </div>
          <div className="form-group agendamento-form-group">
            <label htmlFor="codigoPrefeitura">Codigo da Prefeitura</label>
            <input
              type="codigoPrefeitura"
              className="form-control"
              id="codigoPrefeitura"
            />
          </div>
          <div className="form-group agendamento-form-group">
            <label htmlFor="prontuario">Número do Prontuário</label>
            <input type="prontuario" className="form-control" id="prontuario" />
          </div>
          <div className="form-group agendamento-form-group">
            <label htmlFor="nomePaciente">Nome do Paciente</label>
            <input
              type="nomePaciente"
              className="form-control"
              id="nomePaciente"
            />
          </div>
          <div className="form-group agendamento-form-group">
            <label htmlFor="cpf">CPF</label>
            <input type="cpf" className="form-control" id="cpf" />
          </div>
          <div className="form-group agendamento-form-group">
            <label htmlFor="rg">RG</label>
            <input type="rg" className="form-control" id="rg" />
          </div>
          <div className="form-group agendamento-form-group">
            <label htmlFor="telFixo">Telefone Fixo</label>
            <input type="telFixo" className="form-control" id="telFixo" />
          </div>
          <div className="form-group agendamento-form-group">
            <label htmlFor="telCelular">Telefone Celular</label>
            <input type="telCelular" className="form-control" id="telCelular" />
          </div>
          <div className="form-group agendamento-form-group">
            <label htmlFor="dataNas">Data de Nascimento</label>
            <input type="dataNas" className="form-control" id="dataNas" />
          </div>
          <div className="form-group agendamento-form-group">
            <label htmlFor="nomeMaePaciente">Nome da Mãe</label>
            <input
              type="nomeMaePaciente"
              className="form-control"
              id="nomeMaePaciente"
            />
          </div>
          <div className="form-group agendamento-form-group">
            <label htmlFor="cep">CEP</label>
            <input type="cep" className="form-control" id="cep" />
          </div>
          <div className="form-group agendamento-form-group">
            <label htmlFor="logradouro">Endereço</label>
            <input type="logradouro" className="form-control" id="logradouro" />
          </div>
          <div className="form-group agendamento-form-group">
            <label htmlFor="bairro">Bairro</label>
            <input type="bairro" className="form-control" id="bairro" />
          </div>
          <div className="form-group agendamento-form-group">
            <label htmlFor="cidade">Cidade</label>
            <input type="cidade" className="form-control" id="cidade" />
          </div>
          <div className="form-group agendamento-form-group">
            <label htmlFor="uf">UF</label>
            <input type="uf" className="form-control" id="uf" />
          </div>
          <div className="form-group agendamento-form-group">
            <label htmlFor="nomeMedico">Nome do Médico</label>
            <input type="nomeMedico" className="form-control" id="nomeMedico" />
          </div>
          <div className="form-group agendamento-form-group">
            <label htmlFor="especialidade">Especialidade do Médico</label>
            <input
              type="especialidade"
              className="form-control"
              id="especialidade"
            />
          </div>
          <div className="form-group agendamento-form-group">
            <label htmlFor="observacao">Observacao</label>
            <input type="observacao" className="form-control" id="observacao" />
          </div>
          <div className="form-group agendamento-form-group">
            <label htmlFor="procedimento">Procedimento</label>
            <input
              type="procedimento"
              className="form-control"
              id="procedimento"
            />
          </div>
          <div className="form-group agendamento-form-group">
            <label htmlFor="descricaoProcedimento">
              Descricao do Procedimento
            </label>
            <input
              type="descricaoProcedimento"
              className="form-control"
              id="descricaoProcedimento"
            />
          </div>
          <div className="form-group agendamento-form-group">
            <label htmlFor="cirurgiaMultipla">Cirurgia Multipla</label>
            <input
              type="cirurgiaMultipla"
              className="form-control"
              id="cirurgiaMultipla"
            />
          </div>
          <div className="form-group agendamento-form-group">
            <label htmlFor="dataCancelamento">Data do Cancelamento</label>
            <input
              type="dataCancelamento"
              className="form-control"
              id="dataCancelamento"
            />
          </div>
          <div className="form-group agendamento-form-group">
            <label htmlFor="motivoCancelamento">Motivo Cancelamento</label>
            <input
              type="motivoCancelamento"
              className="form-control"
              id="motivoCancelamento"
            />
          </div>

          <div className="agendamento-form-btn-container">
            <button type="submit" className="btn btn-primary agendamento-btn">
              Salvar
            </button>
          </div>
        </form>
        <Link to="/">
        <button className="btn btn-primary agendamento-btn mt-3">
          Cancelar
        </button>
        </Link>

      </div>
    </div>
  );
}

export default Form;
