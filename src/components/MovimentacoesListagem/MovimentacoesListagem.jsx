import React, { useState } from 'react';
import Timeline from '../timeline/Timeline';
import './movimentacoesListagem.css';

const MovimentacoesListagem = ({ movimentacoes: initialMovimentacoes }) => {
  const [movimentacoes, setMovimentacoes] = useState(initialMovimentacoes);

  const handleEdit = (updatedMov) => {
    setMovimentacoes((prevMovimentacoes) =>
      prevMovimentacoes.map((mov) =>
        mov.id === updatedMov.id ? updatedMov : mov
      )
    );
  };

  const handleDelete = (id) => {
    setMovimentacoes((prevMovimentacoes) =>
      prevMovimentacoes.filter((mov) => mov.id !== id)
    );
  };

  return (
    <div className="movimentacoes-listagem">
      <h2>Movimentações</h2>
      <Timeline items={movimentacoes} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default MovimentacoesListagem;