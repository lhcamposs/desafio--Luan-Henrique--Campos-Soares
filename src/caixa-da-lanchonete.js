class CaixaDaLanchonete {

    /*Como o teste utiliza class, achei melhor 
    utilizar constructor para fazer o menu da lanchonete */
    constructor() {

        this.menu = {
            cafe: { descricao: "café", valor: 3.00 },
            chantily: { descricao: "Chantily (extra do Café)", valor: 1.50 },
            suco: { descricao: "Suco Natural", valor: 6.20 },
            sanduiche: { descricao: "Sanduíche", valor: 6.50 },
            queijo: { descricao: "Queijo (extra do Sanduíche)", valor: 2.00 },
            salgado: { descricao: "Salgado", valor: 7.25 },
            combo1: { descricao: "1 Suco e 1 Sanduiche", valor: 9.50 },
            combo2: { descricao: "1 Café e 1 Sanduiche", valor: 7.50 },

        };

        //valores da taxa e desconto dos metodos de pagamento
        this.descontoDinheiro = 0.05;
        this.acrescimoCredito = 0.03;
    }

    calcularValorDaCompra(metodoDePagamento, itens) {

        let total = 0.0;
        let temItemPrincipal = false;

        //Verifica se o metodo de pagamento e valido
        if (!["debito", "credito", "dinheiro"].includes(metodoDePagamento)) {
            return "Forma de pagamento inválida!";
        }

        for (const itemInfo of itens) {
            const [item, quantidade] = itemInfo.split(',');

            if (parseInt(quantidade) <= 0){
                return "Quantidade inválida!";
            }

            if (this.menu.hasOwnProperty(item)) {
                if (this.menu[item].descricao.toLowerCase().includes("extra")) {
                    continue; // aqui vai ignorar os extras
                } else if (item.startsWith("combo")) {
                    const comboItems = this.menu[item].descricao.split(" e ");
                    for (const comboItem of comboItems) {
                        total += this.menu[comboItem].valor * quantidade;
                    }
                } else {
                    temItemPrincipal = true;
                    total += this.menu[item].valor * quantidade;
                }
            } else {
                return "Item inválido!";
            }
        }

        // Verificar se o carrinho está vazio
        if (itens.length === 0) {
            return "Não há itens no carrinho de compra!";
        }

        // Verifica se o item pedido é um item principal ou um extra
        if (!temItemPrincipal) {
            return "Item extra não pode ser pedido sem o principal";
        }

        // Calculo de desconto em dinheiro e acrescimo em credito
        if (metodoDePagamento === "dinheiro") {
            total -= total * this.descontoDinheiro;
        } else if (metodoDePagamento === "credito") {
            total += total * this.acrescimoCredito;
        } else {
            total == total;
        }

        return `R$ ${total.toFixed(2).replace(".", ",")}`;

    }
}

export { CaixaDaLanchonete };
