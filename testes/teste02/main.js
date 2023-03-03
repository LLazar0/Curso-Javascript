function verificar() {
    var calemd = new Date()
    var fano = document.querySelector('input#fano')
    var ano = calemd.getFullYear()
    var res = document.getElementById('res')

    if (Number(fano.value) > ano || Number(fano.value) == 0) {
        res.innerHTML = `<strong>[ERRO]</strong> Deu ruim, filhote.`
    } else {
        var radsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (radsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 12) {
                img.setAttribute('src', 'homem-crianca.png')
            } else if (idade >=12 && idade < 18) {
                img.setAttribute('src', 'homem-jovem.png')
            } else if (idade >= 18 && idade < 60) {
                img.setAttribute('src', 'homem-adulto.png')
            } else {
                img.setAttribute('src', 'homem-velho.png')
            }
        } else if (radsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 12) {
                img.setAttribute('src', 'mulher-crianca.png')
            } else if (idade >=12 && idade < 18) {
                img.setAttribute('src', 'mulher-jovem.png')
            } else if (idade >= 18 && idade < 60) {
                img.setAttribute('src', 'mulher-adulta.png')
            } else {
                img.setAttribute('src', 'mulher-velha.png')
            }
        }
        res.innerHTML = `Detectamos: ${genero} de ${idade} anos`
        res.appendChild(img)
    }
     
}
