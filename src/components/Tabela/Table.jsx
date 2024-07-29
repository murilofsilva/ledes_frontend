import React from 'react';
import { Table as BootstrapTable, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Paper } from '@mui/material';
import { getProcessoHeaderKeys } from '../../utils/tableUtils';
import { useNavigate } from 'react-router-dom';
import './Table.css';

const Table = ({ headers, rows }) => {
  const headerKeys = getProcessoHeaderKeys(headers);
  const navigate = useNavigate();

  const handleRowClick = (row) => {
    navigate(`/processos/${row.id}`);
  };

  return (
    <TableContainer component={Paper} className="table-container">
      <BootstrapTable>
        <TableHead>
          <TableRow className="table-header">
            {headers.map((header, index) => (
              <TableCell key={index} className="table-cell">
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.length > 0 ? (
            rows.map((row, index) => (
              <TableRow key={index} className="table-row" onClick={() => handleRowClick(row)} style={{ cursor: 'pointer' }}>
                {headerKeys.map((key, idx) => (
                  <TableCell key={idx} className="table-cell">
                    {row[key] !== undefined ? row[key] : 'N/A'}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={headers.length} className="no-data-cell">
                <Typography className="no-data-message">Nenhum dado disponível</Typography>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </BootstrapTable>
    </TableContainer>
  );
};

export default Table;