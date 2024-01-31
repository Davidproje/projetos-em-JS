function carregar (){
var msg =document.getElementById('msg')
var img =document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML= ` Agora são <strong>${hora} Horas.</strong> `
if (hora >= 0 && hora < 12 ){
    img.src='imagens/manhã.png'
    document.body.style.backgroundColor = '#b8b56e'
}else if (hora >=12 && hora <18) {  
    img.src='imagens/tarde.png'
    document.body.style.backgroundColor = '#5a5776'
} else {
    img.src='imagens/noite.png'
    document.body.style.backgroundColor = '#1d242c'
}
}