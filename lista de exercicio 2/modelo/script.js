function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano= document.getElementById('txtano')
    var res= document.querySelector('div#res')
    if(fano.value.length == 0 || fano.value > ano){
        alert('verifique os dados e tente novamente')
        } else {
         var fsex = document.getElementsByName('radsex') 
         var idade = ano - Number(fano.value)
         var genero= ''
         var img = document.createElement('img')
         img.setAttribute('id','foto')
         if(fsex[0].checked) {
            genero='Homem'
            if(idade >=0 && idade <4){
                //bebe  
                img.setAttribute('src','imagens/bebe-homem-brabo.png')          
            } else if (idade >=5 && idade <=13){
                //criança
                img.setAttribute('src','imagens/criança-homem.png')
            } else if (idade >=13 && idade <=18){
                //adolescente
                img.setAttribute('src','imagens/adolescente-homem.png')
            } else if (idade >=18 && idade <=50){
                //adulto
                img.setAttribute('src','imagens/adulto-homem.png')
            } else if (idade >= 50 && idade <=90) {
                //idoso
                img.setAttribute('src','imagens/velho-homem.png')
            } else if (idade > 90) {
                //ancestral
                img.setAttribute('src','imagens/ancestral-homem.png')
            }

         } else {
            genero ='Mulher'
            if(idade >=0 && idade <4){
                //bebe  
                img.setAttribute('src','imagens/bebe-mulher-asiatica.png')          
            } else if (idade >=5 && idade <=13){
                //criança
                img.setAttribute('src','imagens/criança-mulher.png')
            } else if (idade >=13 && idade <=18){
                //adolescente
                img.setAttribute('src','imagens/adolescente-mulher.png')
            } else if (idade >=18 && idade <=50){
                //adulto
                img.setAttribute('src','imagens/adulto-mulher.png')
            } else if (idade >= 50 && idade <=90) {
                //idoso
                img.setAttribute('src','imagens/velho-mulher.png')
            } else if (idade > 90) {
                //ancestral
                img.setAttribute('src','imagens/ancestral-mulher.png')
            }
         }  
         res.innerHTML =` Detectamos que ${genero} com <strong> ${idade} anos </strong>`
         res.appendChild(img)
        }


}