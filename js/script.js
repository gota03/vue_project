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
            campoIdade:""
            
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
            let resposta = anoAtual - this.campoIdade
            console.log(resposta)
        }
    }
})
App.mount("#app")