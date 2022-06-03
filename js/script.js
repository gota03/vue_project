const App = Vue.createApp({
    data(){
        return{
            bloco:{
                inicio: true,
                idade: false,
                cambio: false,
                diaSemana: false,
                desconto: false
            },
            mensagem: {
                idade: "Cálculo da idade a partir do ano de nascimento inserido pelo usuário",
                cambio: "Cálculo do valor em reais a partir de um valor em dólar e cotação inserida pelo usuário",
                diaSemana: "Exibir o dia da semana a partir de uma data inserida pelo usuário",
                desconto: "Calcular  o  resultado  a  partir  de  um  valor  base  e  o percentual de desconto indicados pelo usuário"
            },
            textoInicial: "Olá, seja bem vindo ao nosso sistema",
            campoIdade:"",
            resultado: "",
            info: "",
            dolar: "",
            cotacao: ""

            
        }
    },
    methods:{
        verificarLink(classe){
            //console.log([classe[1]])
            let itens = classe[1] // CLASSE É UM PARAMETRO QUE IRA CONTER UM VETOR COM AS CLASSES DA TAG NA QUAL A FUNÇÃO ESTA SENDO CHAMADA
            for(elementos in this.bloco){ // FOR IN PERMITE PERCORRER UM OBJETO
                //console.log(elementos)
                if(itens == elementos){
                    //console.log(`Voce clicou em ${elementos}`)
                    this.bloco[elementos] = true
                    this.textoInicial = this.mensagem[elementos]
                }
                else{
                    this.bloco[elementos] = false
                }
            }
        },
        calcularIdade(){
            let anoAtual = new Date().getFullYear() // ESTOU PEGANDO O ANO ATUAL
            if(this.validaIdade()){
                let resposta = anoAtual - this.campoIdade
                this.resultado = `Você possui ${resposta} anos`
            }
        },
        validaIdade(){
            if(this.campoIdade<1900 || this.campoIdade>2050){
                this.info = "Você precisa informar um ano entre 1900 e 2050"
                this.resultado = "" // IRA RETIRAR A MENSAGEM DO CALCULO DA IDADE
                return false // SIGNIFICA QUE O USUARIO INSERIU UM VALOR ERRADO
            }
            else{
                this.info = ""
                return true // SIGNIFICA QUE O USUARIO INSERIU UM VALOR CORRETO
            }
        },
        converterDolar(){
            let padrao = /^[0-9]+(\.([0-9]{2}))?$/
            if(padrao.test(this.dolar) && padrao.test(this.cotacao)){
                let resposta = this.dolar * this.cotacao
                this.resultado = `U$${this.dolar} convertidos em real é R$${resposta}`
                this.info = "" // RETIRANDO A MENSAGEM DE ERRO
            }
            else{
                this.info = "Informe apenas numeros inteiros ou separados por ponto com 2 casas decimais"
                this.resultado = "" // RETIRANDO A MENSAGEM DE ERRO
                
            }
        }
    }
})
App.mount("#app")