function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
            window.alert('<>[ERROR]<> Verifique os dados digitados!<> [ERRO]<>')
    }
    else{
        window.alert('Dados aceitos.')
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            gênero = "Homem"
            if(idade>=0 && idade<10){
                //Criança
                img.setAttribute('src', 'foto-bebe-m.png')
            }else if (idade<21){
                //Jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            }else if (idade<50) {
                //Adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            } else{
                //Idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        }
        else if(fsex[1].checked) {
            gênero = "Mulher"
            if(idade>=0 && idade<10){
                //Criança
                img.setAttribute('src', 'foto-bebe-f.png')
            }else if (idade<21){
                //Jovem
                img.setAttribute('src', 'foto-jovem-f.png')
            }else if (idade<50) {
                //Adulto
                img.setAttribute('src', 'foto-adulto-f.png')
            } else{
                //Idoso
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }
        
        res.style.textAling = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }


    }

/**{
    var msg= window.document.getElementById('msg')
    var img= window.document.getElementById('imagem')
    var data= new Date()
    var hora = data.getHours() 
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos`  //atenção aqui aqui é CRASE //
if (hora>= 0 && hora <12){
    //Bom dia ! Feliz Dia
    img.src  ='manha.png'
    document.body.style.background = '#FFF8DC'
} 
else if (hora>=12 && hora<=18) {
    //Boa Tarde Bom Apetite!
    img.src = 'tarde.png'
    document.body.style.background = '#E6E6FA'
} 
else {
    //Boa Noite!
    img.src ='noite.png'
    document.body.style.background = '#4169E1'
}

}
**/