
var foto = 5
var novaDiv = document.getElementById("fotos_extras").innerHTML

function mudarFoto() {
    switch (foto) {
        case 1:
            document.getElementById("fotos_extras").src="img_extras/1.jpg";            
            break;
        case 2: 
            document.getElementById("fotos_extras").src="img_extras/2.jpg";            
            break;
        case 3:
            document.getElementById("fotos_extras").src="img_extras/3.jpg";            
            break;
        case 4: 
            document.getElementById("fotos_extras").src="img_extras/4.jpg";            
            break;
        default:
            document.getElementById("fotos_extras").src="img_extras/4.jpg";            
    }
}

function passarFoto(){
    if (foto<4){
        foto +=1
    }else{
        foto = 1
    }
    //window.alert(foto)
    mudarFoto()
}

function voltarFoto(){
    if (foto>0){
        foto -=1
    }else{
        foto = 5
    }
 //   window.alert(foto)
    mudarFoto()
}


function whatsapp(){
    var link = "https://api.whatsapp.com/send?phone=558837218521&text="
    var nome = document.getElementById("nome").value
    var potencia = document.getElementById("potencia").value  + " kWp"
    
    var mensagem = "Oi, sou o "+nome+ " quero saber mais sobre a homologação de um sistema de "+potencia
    mensagem = mensagem.replace(" ","+")

    link = link+mensagem

    window.open(link, '_blank');

    //window.location.href = link
    //target = "_blank";
}