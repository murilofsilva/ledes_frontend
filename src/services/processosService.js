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

const validarDataPrescricao = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT'
    });
    if (!response.ok) {
      throw new Error('Erro ao validar data de prescrição');
    }
    return true;
  } catch (error) {
    console.error('Erro ao validar data de prescrição:', error);
    return false;
  }
};

const atualizarConteudoDocumento = async (id, conteudo) => {
  try {
    const response = await fetch(`${API_URL}/${id}/documento`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(conteudo),
    });
    if (!response.ok) {
      throw new Error('Erro ao atualizar conteúdo do documento');
    }
    return true;
  } catch (error) {
    console.error('Erro ao atualizar conteúdo do documento:', error);
    return false;
  }
};

export default { getProcessos, getProcessoById, validarDataPrescricao, atualizarConteudoDocumento };