import React from "react";
import "./cheques.css";
import HeaderSuporte from "../../components/header-cobranca";
import ButtonIconTextoStart from "../../components/button-icon-texto-start";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Checkbox from "@mui/material/Checkbox";
import ArticleIcon from "@mui/icons-material/Article";
import ModalCheque from "../../components/modal-cheques";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function createData(name, responsavel, numerocheque, dadosbancarios, valor) {
  return { name, responsavel, numerocheque, dadosbancarios, valor };
}

const rows = [
  createData(
    "20/05/2023",
    "Alessandro Figueiredo",
    "563215",
    "Bradesco Agência 5040-6",
    "432,00"
  ),
  createData(
    "23/05/2023",
    "Carlos Perreira",
    "64565",
    "Banco do Brasil 2040-6",
    "250,00"
  ),
  createData(
    "25/05/2023",
    "Jéssica Alveira",
    "25650",
    "Banco do Brasil 5049-9",
    "250,00"
  ),
];

const Cheques = () => {
  return (
    <div className="container-suporte">
      <HeaderSuporte />
      <div className="container-cheque">
        <div className="linhas-campos-cheque">
          <div className="campos-alterar-cheque">
            <label>Filtro de Cheques</label>
            <div className="filtro-cheques">
              <Checkbox size="small" {...label} />
              <label>Abertos</label>
              <Checkbox size="small" {...label} />
              <label>Repassados</label>
              <Checkbox size="small" {...label} />
              <label>Devolvidos</label>
            </div>
          </div>

          <div className="pesquisa-cheque">
            <ModalCheque
              height={230}
              width={500}
              title={"CADASTRAR CHEQUE"}
              corFundoBotao={"#006b33"}
              corTextoBotao={'#ffff'}
              fontSizeBotao={'12px'}
              fontWeightBotao={700}
              conteudo={
                <div className="modal-cheque1">
                  <div className="linhas-campos-cheque">
                    <div className="campos-alterar-contrato-modal">
                      <label>Nº do Cheque</label>
                      <input></input>
                    </div>
                    <div className="campos-alterar-contrato-modal">
                      <label>Agência</label>
                      <input></input>
                    </div>
                    <div className="campos-alterar-contrato-modal">
                      <label>Conta</label>
                      <input></input>
                    </div>
                  </div>
                  <div className="linhas-campos-cheque">
                    <div className="campos-alterar-contrato-modal2">
                      <label>Banco</label>
                      <select></select>
                    </div>
                    <div className="campos-alterar-contrato-modal2">
                      <label>Data Cheque</label>
                      <input></input>
                    </div>
                  </div>
                  <div className="linhas-campos-cheque">
                    <div className="campos-alterar-contrato-modal2">
                      <label>Nome Impresso</label>
                      <select></select>
                    </div>
                    <div className="campos-alterar-contrato-modal2">
                      <label>Valor do Cheque</label>
                      <input></input>
                    </div>
                  </div>
                  <div className="campos-alterar-contrato-modal">
                    <ButtonIconTextoStart
                      title={"CADASTRAR CHEQUE"}
                      corFundoBotao={"#006b33"}
                      corTextoBotao={"#ffff"}
                      fontWeightBotao={700}
                    />
                  </div>
                </div>
              }
            />
          </div>
          <div className="pesquisa-cheque">
            <ButtonIconTextoStart
              title={"BAIXAR CHEQUE"}
              corFundoBotao={"#006b33"}
              fontSizeBotao={"12px"}
              corTextoBotao={"#ffff"}
              fontWeightBotao={"700"}
            />
          </div>
        </div>
        <div className="tabela-cheque">
          <p>
            <AccountCircleIcon fontSize={"small"} /> Cliente
          </p>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Data Cheque</TableCell>
                  <TableCell align="start">Nome Responsável</TableCell>
                  <TableCell align="center">Número Cheque</TableCell>
                  <TableCell align="start">Dados Bancários</TableCell>
                  <TableCell align="start">Valor</TableCell>
                  <TableCell align="start">Opções</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="start">{row.responsavel}</TableCell>
                    <TableCell align="center">{row.numerocheque}</TableCell>
                    <TableCell align="start">{row.dadosbancarios}</TableCell>
                    <TableCell align="center">{row.valor}</TableCell>
                    <TableCell align="start">
                      <div>
                        <ModalCheque
                          height={180}
                          width={500}
                          icon={<ArticleIcon fontSize={"small"} />}
                          corTextoBotao={"#006b33"}
                          conteudo={
                            <div className="modal-cheque1">
                              <div className="linhas-campos-cheque">
                                <div className="campos-alterar-contrato-modal">
                                  <label>Nº do Cheque</label>
                                  <input></input>
                                </div>
                                <div className="campos-alterar-contrato-modal">
                                  <label>Agência</label>
                                  <input></input>
                                </div>
                                <div className="campos-alterar-contrato-modal">
                                  <label>Conta</label>
                                  <input></input>
                                </div>
                              </div>
                              <div className="linhas-campos-cheque">
                                <div className="campos-alterar-contrato-modal2">
                                  <label>Banco</label>
                                  <select></select>
                                </div>
                                <div className="campos-alterar-contrato-modal2">
                                  <label>Data Cheque</label>
                                  <input></input>
                                </div>
                              </div>
                              <div className="linhas-campos-cheque">
                                <div className="campos-alterar-contrato-modal2">
                                  <label>Nome Impresso</label>
                                  <select></select>
                                </div>
                                <div className="campos-alterar-contrato-modal2">
                                  <label>Valor do Cheque</label>
                                  <input></input>
                                </div>
                              </div>
                            </div>
                          }
                        />
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

export default Cheques;
