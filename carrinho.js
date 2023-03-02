export default class Carrinho {
  #listaProdutos;
  #valorTotal;
  constructor() {
    this.#listaProdutos = [];
    this.#valorTotal = 0;
  }

  adicionarProduto(produto) {
    this.#listaProdutos.push(produto);
    this.#valorTotal += produto.valor;
  }

  removerProduto() {
    const produtoRemovido = this.#listaProdutos.pop();
    this.#valorTotal -= produtoRemovido.valor;
  }
  calcularValorFinal() {
    let valorDesconto = 0;
    this.#listaProdutos.forEach((produto) => {
      valorDesconto += produto.aplicarDesconto();
    });
    return valorDesconto;
  }

  get valor() {
    return this.#valorTotal;
  }

  get listaDeProdutos() {
    return this.#listaProdutos;
  }
}
