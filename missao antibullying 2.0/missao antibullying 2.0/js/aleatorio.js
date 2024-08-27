const nomes = ["Bruna", "Ricardo", "Yasmin", "Yuri", "Pedro ;)", "Eduardo", "Henrique"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)