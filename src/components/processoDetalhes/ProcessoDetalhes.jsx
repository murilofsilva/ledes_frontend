import React, { useState, useEffect } from 'react';
import processoService from '../../services/processosService';
import './processoDetalhes.css';
import { ToastContainer, toast } from 'react-toastify';

const ProcessoDetalhes = ({ processo }) => {
  const [isValidating, setIsValidating] = useState(false);
  const [validado, setValidado] = useState(false);
  const [showTextarea, setShowTextarea] = useState(false);
  const [textareaValue, setTextareaValue] = useState(processo.documento ? processo.documento.conteudo : '');
  const [isModified, setIsModified] = useState(false);

  useEffect(() => {
    setTextareaValue(processo.documento ? processo.documento.conteudo : '');
  }, [processo]);

  const validarDataPrescricao = async () => {
    setIsValidating(true);
    const sucesso = await processoService.validarDataPrescricao(processo.id);
    if (sucesso) {
      setValidado(true);
      setShowTextarea(true);
      toast.success('Data de prescrição validada com sucesso!');
    }
    setIsValidating(false);
  };

  const salvarDocumento = async () => {
    const sucesso = await processoService.atualizarConteudoDocumento(processo.id, textareaValue);
    if (sucesso) {
      toast.success('Documento atualizado com sucesso!');
      setIsModified(false);
    } else {
      toast.error('Erro ao atualizar documento.');
    }
  };

  const handleTextareaChange = (event) => {
    setTextareaValue(event.target.value);
    setIsModified(true);
  };

  const date = new Date(processo.dtCriacao);
  const prescricaoDate = new Date(date.setFullYear(date.getFullYear() + 5));
  const now = new Date();
  const diffYears = (prescricaoDate - now) / (1000 * 60 * 60 * 24 * 365);

  let backgroundColor = '#ffe6e6';

  if (diffYears <= 1) {
    backgroundColor = '#ffe6e6';
  } else if (diffYears <= 3) {
    backgroundColor = '#ffffe0';
  } else {
    backgroundColor = '#e0f7ff';
  }

  return (
    <div>
      <div className="processo-detalhes" style={{ backgroundColor }}>
        <p className="data-criacao">
          Data de prescrição: {prescricaoDate.toLocaleDateString()}
        </p>
        <p className="descricao">{processo.descricao}</p>
        <div className="informacoes-adicionais">
          <p><strong>Título:</strong> {processo.titulo}</p>
          <p><strong>Tipo:</strong> {processo.tipo}</p>
          <p><strong>Valor da Dívida:</strong> {processo.vlDivida}</p>
          <p><strong>Nome do Juiz:</strong> {processo.nomeJuiz}</p>
          <p><strong>Número do Processo:</strong> {processo.nroProcesso}</p>
          <p><strong>Distribuição:</strong> {processo.distribuicao}</p>
          <p><strong>Vara:</strong> {processo.vara}</p>
          <p><strong>Nome do Executado:</strong> {processo.nomeExecutado}</p>
        </div>
      </div>
      {showTextarea || validado ? (
        <div>
          <textarea
            className="validar-textarea"
            value={textareaValue}
            onChange={handleTextareaChange}
            placeholder="Digite a validação aqui..."
          />
          <button
            className="salvar-btn"
            onClick={salvarDocumento}
            disabled={!isModified}
          >
            Salvar
          </button>
        </div>
      ) : (
        <button
          className="validar-btn"
          onClick={validarDataPrescricao}
          disabled={isValidating || validado}
        >
          {isValidating ? 'Validando...' : 'Validar data de prescrição'}
        </button>
      )}
      <ToastContainer />
    </div>
  );
};

export default ProcessoDetalhes;