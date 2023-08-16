class CaixaDaLanchonete {

    constructor() {

        this.menu = {
        cafe: {descricao: "café", valor: 3.00},
        chantily: {descricao: "Chantily (extra do Café)", valor: 1.50},
        suco: {descricao: "Suco Natural", valor: 6.20},
        sanduiche: {descricao: "Sanduíche", valor: 6.50},
        queijo: {descricao: "Queijo (extra do Sanduíche)", valor: 2.00},
        salgado: {descricao: "Salgado", valor: 7.25},
        combo1: {descricao: "1 Suco e 1 Sanduiche", valor: 9.50},
        combo2: {descricao: "1 Café e 1 Sanduiche", valor: 7.50},
        
        };
        
        this.descontoDinheiro = 0.05;
        this.acrescimoCredito = 0.03;
    }

    calcularValorDaCompra(metodoDePagamento, itens) {
        
        if(Object.keys(itens).length === 0){
            return "Não há items no carrinho!"
        }

        let total = 0.0;
        let temItemPrincipal = false;

        if (metodoDePagamento === "dinheiro") {
            total -= total * this.descontoDinheiro;
        } else if (metodoDePagamento === "credito") {
            total += total * this.acrescimoCredito;
        } else if (!["debito", "credito", "dinheiro"].includes(metodoDePagamento)) {
            return "Forma de pagamento invalida! Favor tentar novamente.";
        }


        return "";
    }

}

export { CaixaDaLanchonete };
