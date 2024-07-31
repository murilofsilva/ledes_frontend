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

const getProcessoById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) {
      throw new Error('API retornou status negativo. Verificar com o suporte.');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao buscar processo por ID:', error);
    return null;
  }
};

export default { getProcessos, getProcessoById };