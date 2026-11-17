const display = document.querySelector(".display")
const botaoParar = document.querySelector(".parar")
const botaoComecar = document.querySelector(".começar")

let inicio = 0
let tempoPausado = 0
let intervalo = null

function atualizarDisplay() {

    const tempoAtual = Date.now() - inicio + tempoPausado

    const horas = Math.floor(tempoAtual / 3600000)
    const minutos = Math.floor((tempoAtual % 3600000) / 60000)
    const segundos = Math.floor((tempoAtual % 60000) / 1000)
    const centesimos = Math.floor((tempoAtual % 1000) / 10)

    display.innerHTML =
        String(horas).padStart(2, "0") + ":" +
        String(minutos).padStart(2, "0") + ":" +
        String(segundos).padStart(2, "0") +
        '<span class="centesimos">' +
        ":" + String(centesimos).padStart(2, "0") +
        '</span>'
}

botaoComecar.addEventListener("click", function () {

    if (intervalo === null) {

        inicio = Date.now()
        intervalo = setInterval(atualizarDisplay, 10)

        botaoParar.innerHTML = "Parar"
        botaoParar.classList.remove("zerar")
    }

})

botaoParar.addEventListener("click", function () {

    if (intervalo !== null) {

        tempoPausado += Date.now() - inicio

        clearInterval(intervalo)
        intervalo = null

        botaoParar.innerHTML = "Zerar"
        botaoParar.classList.add("zerar")

    } else {

        tempoPausado = 0
        inicio = 0

        display.innerHTML = "00:00:00<span class='centesimos'>:00</span>"

        botaoParar.innerHTML = "Parar"
        botaoParar.classList.remove("zerar")

    }

})

