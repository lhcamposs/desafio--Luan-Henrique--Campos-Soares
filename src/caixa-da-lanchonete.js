

const descontoDinheiro = 0.05;
const acrescimoCredito = 0.03;

class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {


        if (metodoDePagamento === "dinheiro"){
            total -= total * this.descontoDinheiro;
        } else if(metodoDePagamento === "credito"){
            total += total * this.acrescimoCredito;
        } else if(!["debito", "credito", "dinheiro"].includes(metodoDePagamento)){
            return "Forma de pagamento invalida! Favor tentar novamente.";
        }

        
        return "";
    }

}

export { CaixaDaLanchonete };
