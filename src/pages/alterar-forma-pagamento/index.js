import React, { useState } from "react";
import "./alterar-forma-pagamento.css";
import HeaderSuporte from "../../components/header-cobranca";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ButtonIconTextoStart from "../../components/button-icon-texto-start";
function createData(name, data, valorpagar, usuario) {
  return {name, data, valorpagar, usuario };
}

const rows = [
  createData("01", "22/05/2023", "100,00", "Marcos Lopez",),
  createData("02", "22/05/2023", "100,00", "Giovane"),
  createData("03", "23/05/2023", "100,00", "Rodrigo Luiz"),
];

const AlterarFormaPagamento = () => {
  const [selectedRows, setSelectedRows] = useState([]);

  const handleRowClick = (index) => {
    const selectedIndex = selectedRows.indexOf(index);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selectedRows, index);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selectedRows.slice(1));
    } else if (selectedIndex === selectedRows.length - 1) {
      newSelected = newSelected.concat(selectedRows.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selectedRows.slice(0, selectedIndex),
        selectedRows.slice(selectedIndex + 1)
      );
    }

    setSelectedRows(newSelected);
  };

  const isSelected = (index) => selectedRows.indexOf(index) !== -1;

  return (
    <div className="container-suporte">
      <HeaderSuporte />
      <div className="container-forma-pagamento">
        <div className="linhas-campos-forma-pagamento">
          <div className="campos-alterar-forma-pagamento">
            <label>Contrato</label>
            <input></input>
          </div>          
          <div className="campos-alterar-contrato">
            <label>Data Pagamento</label>
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
                  <TableCell>ID</TableCell>
                  <TableCell align="center">Pagamento</TableCell>
                  <TableCell align="center">Valor a Pagar</TableCell>
                  <TableCell align="center">Usuário</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => {
                  const isItemSelected = isSelected(index);
                  return (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                      style={{ backgroundColor: isItemSelected ? "#006b33" : "inherit" }}
                      onClick={() => handleRowClick(index)}
                      selected={isItemSelected}
                    >
                      <TableCell component="th" scope="row" style={{ color: isItemSelected ? "#ffffff" : "inherit" }}>
                        {row.name}
                      </TableCell>
                      <TableCell align="center" style={{ color: isItemSelected ? "#ffffff" : "inherit" }}>{row.data}</TableCell>
                      <TableCell align="center" style={{ color: isItemSelected ? "#ffffff" : "inherit" }}>{row.valorpagar}</TableCell>
                      <TableCell align="center" style={{ color: isItemSelected ? "#ffffff" : "inherit" }}>{row.usuario}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div className="linhas-campos-alterar-caixa">
          
          <div className="campos-alterar-forma-pagamento2">
            <label>Transferir para Caixa</label>
            <select></select>
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
          
        </div>
      </div>
    </div>
  );
};

export default AlterarFormaPagamento;
