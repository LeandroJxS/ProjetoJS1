class Produto {

    constructor() {
        this.id = 1;
        this.arrayProdutos = [];
       
    }

    salvar() {
        let produto = this.lerDados();

        if(this.validaCampos(produto)) {
            alert('salvar')
        }

        console.log(produto);

    }

    lerDados() {
        let produto = {}

        produto.id = this.id;
        produto.nomeProduto = document.getElementById('produto').value;
        produto.valor = document.getElementById('valor').value;
    
        return produto;
    }

    validaCampos(produto) {
        let msg = '';

        if(produto.nomeProduto == '') {
            msg += '- Informe o nome do Produto! \n'
        }

        if(produto.valor == '') {
            msg += '- Informe o Valor! \n'
        }

        if(msg != '') {
            alert(msg);
            return false
        }

        return true;

    cancelar() {
        
    }
    
}

var produto = new Produto();