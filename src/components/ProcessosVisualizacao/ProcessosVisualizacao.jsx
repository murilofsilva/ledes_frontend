import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MovimentacoesListagem from '../MovimentacoesListagem/MovimentacoesListagem';
import ProcessoDetalhes from '../ProcessoDetalhes/ProcessoDetalhes';
import ProcessosService from '../../services/processosService';
import './ProcessosVisualizacao.css';

const ProcessosVisualizacao = () => {
  const { id } = useParams();
  const [processo, setProcesso] = useState(null);

  useEffect(() => {
    const fetchProcesso = async () => {
      try {
        const processoData = await ProcessosService.getProcessoById(id);
        setProcesso(processoData);
      } catch (error) {
        console.error('Erro ao buscar detalhes do processo:', error);
      }
    };

    fetchProcesso();
  }, [id]);

  if (!processo) return <div>Carregando...</div>;

  return (
    <div className="processo-visualizacao-container">
      <div className="movimentacoes-listagem-container">
        <MovimentacoesListagem movimentacoes={processo.movimentacoes} />
      </div>
      <div className="processo-detalhes-container">
        <ProcessoDetalhes processo={processo} />
      </div>
    </div>
  );
};

export default ProcessosVisualizacao;