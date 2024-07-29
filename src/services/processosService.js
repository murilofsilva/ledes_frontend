const API_URL = 'http://localhost:8081/api/processos';

const getProcessos = async (filter = '') => {
  try {
    const response = await fetch(`${API_URL}?filter=${encodeURIComponent(filter)}`);
    if (!response.ok) {
      throw new Error('API retornou status negativo. Verificar com o suporte.');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao buscar processos:', error);
    return [];
  }
};

export default { getProcessos };