function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora <12) {
        //BOM DIA
        img.src = 'fotomanha-1.png'
        document.body.style.background = '#ef8250'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE
        img.src = 'fototarde-2.png'
        document.body.style.background = '#b04802'
    } else {
        //BOA NOITE
        img.src = 'fotonoite-3.png'
        document.body.style.background = '#04031d'
    }
}