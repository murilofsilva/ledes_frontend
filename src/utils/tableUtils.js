export const getProcessoHeaderKeys = (headers) => {
    return headers.map(header => {
      switch (header) {
        case 'Título': return 'titulo';
        case 'Descrição': return 'descricao';
        case 'Data de Criação': return 'dtCriacao';
        case 'Tipo': return 'tipo';
        case 'Valor da Dívida': return 'vlDivida';
        case 'Nome do Juiz': return 'nomeJuiz';
        case 'Número do Processo': return 'nroProcesso';
        case 'Distribuição': return 'distribuicao';
        case 'Vara': return 'vara';
        case 'Nome do Executado': return 'nomeExecutado';
        default: return '';
      }
    });
  };