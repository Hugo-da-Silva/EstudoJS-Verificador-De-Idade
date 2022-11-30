function verificar () {
    var data = new Date() // var para reconhecer data atual do sistema
    var ano = data.getFullYear() // vara para reconhecer ano atual do sistema, FullYear pois reconhce os 4 digitos do codigo
    var fano = document.querySelector('input#txtano') // chamando o input da caixa de texto ano
    var res = document.querySelector('div#res') // chamando o input da div com id res
    if (fano.value.length == 0 || fano.value > ano) { // se a cx de texto ano estiver vazia e valor do ano for maior que ano atual do sistema entao... 
        window.alert('(ERRO) Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex') // chamando o botão de sexo dessa vez por name
        var idade = ano - Number(fano.value) // calculando idade, que é o ano atual menos o ano digitado no input ano
        var género = '' // variavel genero começando com uma string vazia
        var img = document.createElement('img') // criando um elemento para a img...
        img.setAttribute('id', 'foto') // ... seguindo o de cima, criamos uma img com id foto
        if (fsex[0].checked) { // se oque estiver marcado que no caso [0] siguinf. masc... 
            género = 'Homem' // ... ai vai informar que o genero é Homem e logo abaixo as condições para informar as sua idade 
            if (idade >= 0 && idade < 10) {
                //Criança 
                img.setAttribute('src', 'foto-bebe-m.png') // aqui chamamos usando a img pelo seu nome, usando o source e o nome da foto
                
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                //Idoso
                img.setAttribute('src', 'foto-idoso-m.png') 
            }
            
        } else if (fsex[1].checked) {
            género = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança 
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'foto-adulto-f.png')
            } else {
                //Idoso
                img.setAttribute('src', 'foto-idoso-f.png')
            }   
        }
        res.style.textAlign = 'center' // centralizando o texto do res usando o JS ao inves do CSS
        res.innerHTML = `Detectamos ${género} com ${idade} anos.`
        res.appendChild(img) // adicionando um elemnto ao res, no caso img.
    } 
}