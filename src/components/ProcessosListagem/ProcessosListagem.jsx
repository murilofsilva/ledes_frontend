import React, { useState, useEffect } from 'react';
import { Box, TextField, InputAdornment, IconButton } from '@mui/material';
import MenuLateral from '../menuLateral/MenuLateral';
import loginImage from '../../assets/pge_login_image.jpeg';
import SearchIcon from '@mui/icons-material/Search';
import './processosListagem.css';
import Table from '../tabela/Table';
import ProcessosService from '../../services/processosService';

const ProcessosListagem = () => {
  const [processos, setProcessos] = useState([]);
  const [filter, setFilter] = useState('');
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  const fetchData = async () => {
    try {
      const allProcessos = await ProcessosService.getProcessos(filter);
      const sortedProcessos = allProcessos.sort((a, b) => new Date(a.dtCriacao) - new Date(b.dtCriacao));
      setProcessos(sortedProcessos);
    } catch (error) {
      console.error('Erro ao buscar processos:', error);
    }
  };

  useEffect(() => {
    if (isFirstLoad) {
      fetchData();
      setIsFirstLoad(false);
    }
  }, [isFirstLoad]);

  const handleSearch = () => {
    fetchData();
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const headers = [
    'Título',
    'Descrição',
    'Data de Criação',
    'Tipo',
    'Valor da Dívida',
    'Nome do Juiz',
    'Número do Processo',
    'Distribuição',
    'Vara',
    'Nome do Executado'
  ];

  return (
    <MenuLateral>
      <Box className="processos-container">
        <Box className="image-container">
          <img src={loginImage} alt="PGE Login" className="listagem-image" />
        </Box>
        <Box className="input-container">
          <TextField
            variant="outlined"
            margin="normal"
            placeholder="Filtrar..."
            className="styled-input"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleSearch}>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
              onKeyDown: handleKeyPress
            }}
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </Box>
        <Table
          headers={headers}
          rows={processos}
        />
      </Box>
    </MenuLateral>
  );
};

export default ProcessosListagem;