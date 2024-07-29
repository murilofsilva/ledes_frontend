import React from 'react';
import { useParams } from 'react-router-dom';
import './ProcessosVisualizacao.css';

const ProcessosVisualizacao = () => {
  const { id } = useParams();

  return (
    <div className="processo-visualizacao-container">
      <h1>Visualização do Processo {id}</h1>
    </div>
  );
};

export default ProcessosVisualizacao;