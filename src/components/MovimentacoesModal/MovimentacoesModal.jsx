import React, { useState, useEffect } from 'react';
import './movimentacoesModal.css';

const MovimentacoesModal = ({ isOpen, onClose, onSave, movimentacao }) => {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [data, setData] = useState('');

  useEffect(() => {
    if (movimentacao) {
      setTitulo(movimentacao.titulo);
      setDescricao(movimentacao.descricao);
      const dataMovimentacao = new Date(movimentacao.data);
      dataMovimentacao.setMinutes(dataMovimentacao.getMinutes() + dataMovimentacao.getTimezoneOffset());
      setData(dataMovimentacao.toISOString().substring(0, 10));
    }
  }, [movimentacao]);

  const handleSave = () => {
    const updatedMov = { ...movimentacao, titulo, descricao, data: new Date(data).toISOString() };
    onSave(updatedMov);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="conteudo-modal">
        <h2>Editar Movimentação</h2>
        <label>Título</label>
        <input 
          type="text" 
          value={titulo} 
          onChange={(e) => setTitulo(e.target.value)} 
        />
        <label>Descrição</label>
        <textarea 
          value={descricao} 
          onChange={(e) => setDescricao(e.target.value)} 
        />
        <label>Data</label>
        <input 
          type="date" 
          value={data} 
          onChange={(e) => setData(e.target.value)} 
        />
        <div className="modal-buttons">
          <button onClick={handleSave}>Salvar</button>
          <button onClick={onClose}>Cancelar</button>
        </div>
      </div>
    </div>
  );
};

export default MovimentacoesModal;