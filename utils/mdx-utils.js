import { api } from '../services/api'

export const getPosts = async () => {
    const {data} = await api.get('/posts'); 

    if(data){
        return data;
    }

    return []
}

export const getPostBySlug = async (id) => {

    //TODO: BUSCAR UM POST EM ESPECIFICO.
    //const {data} = await api.get(`/post?id=eq.${id}`)
    try {
        // Faz uma requisição para buscar o post específico pelo ID
        const { data } = await api.get(`/posts?id=eq.${id}`);
        
        // Verifica se há dados retornados
        if (data && data.length > 0) {
            return data[0]; // Retorna o primeiro item (caso a resposta seja uma lista)
        }

        return {};
    } catch (error) {
        console.error("Erro ao buscar o post:", error);
        return {}; // Retorna um objeto vazio em caso de erro
    }
}