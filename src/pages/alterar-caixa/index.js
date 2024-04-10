import React, { useState } from "react";
import "./alterar-caixa.css";
import HeaderSuporte from "../../components/header-suporte";
import ButtonIconTextoStart from "../../components/button-icon-texto-start";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function createData(name, pagamento, valorpagar, valorpago, teste) {
  return { name, pagamento, valorpagar, valorpago, teste };
}

const rows = [
  createData("20/05/2023", "22/05/2023", "100,00", "100,00", "teste 01"),
  createData("22/05/2023", "22/05/2023", "100,00", "100,00", "teste 02"),
  createData("23/05/2023", "23/05/2023", "100,00", "100,00", "teste 03"),
];

const AlterarCaixa = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [selectedTeste, setSelectedTeste] = useState(null);

  const handleRowClick = (index, teste) => {
    const selectedIndex = selectedRows.indexOf(index);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = [index];
    }

    setSelectedRows(newSelected);
    setSelectedRow(index);
    setSelectedTeste(teste);
  };

  const isSelected = (index) => selectedRows.indexOf(index) !== -1;

  return (
    <div className="container-suporte">
      <HeaderSuporte />
      <div className="container-alterar-caixa">
        <div className="linhas-campos-alterar-caixa">
          <div className="campos-alterar-contrato">
            <label>Contrato</label>
            <input></input>
          </div>

          <div className="pesquisa-altera-caixa">
            <ButtonIconTextoStart
              title={"PESQUISAR"}
              corFundoBotao={"#006b33"}
              fontSizeBotao={"12px"}
              corTextoBotao={"#ffff"}
              fontWeightBotao={"800"}
            />
          </div>
        </div>
        <div className="tabela-alterar-caixa">
          <p>
            <AccountCircleIcon fontSize={"small"} /> Cliente
          </p>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Vencimento</TableCell>
                  <TableCell align="center">Pagamento</TableCell>
                  <TableCell align="center">Valor a Pagar</TableCell>
                  <TableCell align="center">Valor Pago</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => {
                  const isItemSelected = isSelected(index);
                  return (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                      style={{
                        backgroundColor: isItemSelected ? "#006b33" : "inherit",
                      }}
                      onClick={() => handleRowClick(index, row.teste)}
                      selected={isItemSelected}
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        style={{
                          color: isItemSelected ? "#ffffff" : "inherit",
                        }}
                      >
                        {row.name}
                      </TableCell>
                      <TableCell
                        align="center"
                        style={{
                          color: isItemSelected ? "#ffffff" : "inherit",
                        }}
                      >
                        {row.pagamento}
                      </TableCell>
                      <TableCell
                        align="center"
                        style={{
                          color: isItemSelected ? "#ffffff" : "inherit",
                        }}
                      >
                        {row.valorpagar}
                      </TableCell>
                      <TableCell
                        align="center"
                        style={{
                          color: isItemSelected ? "#ffffff" : "inherit",
                        }}
                      >
                        {row.valorpago}
                      </TableCell>
                      <TableCell style={{ display: "none" }}>{row.teste}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div className="linhas-campos-alterar-caixa">
          <div className="campos-alterar-contrato">
            <label>Contrato</label>
            <input></input>
          </div>
          <div className="campos-alterar-contrato2">
            <label>Transferir para Caixa</label>
            <select value={selectedTeste || ""} onChange={(e) => setSelectedTeste(e.target.value)}>
              {rows.map((row) => (
                <option key={row.teste} value={row.teste}>{row.teste}</option>
              ))}
            </select>
          </div>

          <div className="pesquisa-altera-caixa">
            <ButtonIconTextoStart
              title={"ALTERAR CAIXA"}
              corFundoBotao={"#006b33"}
              fontSizeBotao={"12px"}
              corTextoBotao={"#ffff"}
              fontWeightBotao={"700"}
            />
          </div>
          <div className="pesquisa-altera-caixa">
            <ButtonIconTextoStart
              title={"ESTORNAR PARCELA"}
              corFundoBotao={"#006b33"}
              fontSizeBotao={"12px"}
              corTextoBotao={"#ffff"}
              fontWeightBotao={"700"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlterarCaixa;
