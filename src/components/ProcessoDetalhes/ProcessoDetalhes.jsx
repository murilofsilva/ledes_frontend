import React from 'react';
import './ProcessoDetalhes.css';

const ProcessoDetalhes = ({ processo }) => {
  return (
    <div className="processo-detalhes">
      <h2>Detalhes do Processo</h2>
      <p><strong>Título:</strong> {processo.titulo}</p>
      <p><strong>Descrição:</strong> {processo.descricao}</p>
      <p><strong>Data de Criação:</strong> {processo.dtCriacao}</p>
      <p><strong>Tipo:</strong> {processo.tipo}</p>
      <p><strong>Valor da Dívida:</strong> {processo.valorDivida}</p>
      <p><strong>Nome do Juiz:</strong> {processo.nomeJuiz}</p>
      <p><strong>Número do Processo:</strong> {processo.numeroProcesso}</p>
      <p><strong>Distribuição:</strong> {processo.distribuicao}</p>
      <p><strong>Vara:</strong> {processo.vara}</p>
      <p><strong>Nome do Executado:</strong> {processo.nomeExecutado}</p>
    </div>
  );
};

export default ProcessoDetalhes;