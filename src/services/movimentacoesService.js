import axios from 'axios';

const API_URL = 'http://localhost:8081/api/movimentacoes';

const atualizarMovimentacao = async (movimentacao) => {
  try {
    const response = await axios.put(API_URL, movimentacao);
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar movimentação:', error);
    throw error;
  }
};

const deletarMovimentacao = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao deletar movimentação:', error);
    throw error;
  }
};

export default {
  atualizarMovimentacao,
  deletarMovimentacao,
};