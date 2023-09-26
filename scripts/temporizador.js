//Temporizador
let iniciarBtn = document.getElementById("iniciarBtn")

function pegaDuracao() {
    let horas = document.getElementById("hours").value
    let minutos = document.getElementById("minutes").value

    let novaDuracao = Number((Number(horas) * 60) + Number(minutos)) * 60 
    console.log(`Duração: ${novaDuracao}s`)

    if (!novaDuracao == 0) {
        if (horas <= 72 && minutos <= 59) {
            if (!contador >= 1) {
                startTimer(novaDuracao)  
            } else if (contador == 7) {
                iniciarBtn.textContent = "Iniciar"
                duracao = 2
                startTimer(durAtual)
            }
        } else {
            alert("Erro, verifique as infos.")
        }
    } else {
        alert("Erro, verifique as informações.")
    }
}

let intervalo
let contador = 0

function startTimer(duracao) {
    contador++
    let timer = duracao
    const display = document.getElementById("visualizar")
    
    function timerCounter() {
        timer--
        durAtual = timer

        let horas = parseInt(timer/3600, 10)
        let minutos = parseInt(timer/60, 10)
        let segundos = parseInt(timer % 60, 10)

        if (horas == 1 && minutos > 60 && minutos < 120) {
            minutos -= 60
        }
        
        if (minutos == 60) {
            horas = 1
            minutos = 1
        }

        if (minutos >= 120) {
            if (minutos > 120) {
                minutos = minutos - (horas * 60)
            }
        }
        
        if (parseInt(minutos) == 119) {
            minutos = 59
        }

        
        if (segundos >= 60)
        segundos = 59

        if (timer <= 0) {
            timer = 0;
            alert("Tempo finalizado!")
            pararTimer()
        }

        display.textContent = `${horas < 10 ? "0" + horas : horas}:${minutos < 10 ? "0" + minutos : minutos}:${segundos < 10 ? "0" + segundos : segundos}`
        document.title = `tempo: ${horas < 10 ? "0" + horas : horas}:${minutos < 10 ? "0" + minutos : minutos}:${segundos < 10 ? "0" + segundos : segundos}`
    }

    timerCounter()
    intervalo = setInterval(timerCounter, 1000)
}

function pararTimer() {
    clearInterval(intervalo)
    contador = 0
    iniciarBtn.textContent = "Iniciar";
    document.title = "Temp-Online"
}

var durAtual = 0 

function pausaTimer() {
    if (contador >= 1) {
        pararTimer()
        contador = 7
        iniciarBtn.textContent = "Retomar";
    }
}

//Dia e noite Btn

function modoDiaNoite() {
    let btn = document.getElementById("botaoDiaNoite")

    if (btn.innerHTML == `<i class="bi bi-brightness-alt-high"></i>`) {
        btn.innerHTML = `<i class="bi bi-moon"></i>`
    }

    if (btn.innerHTML == `<i class="bi bi-moon"></i>`) {
        btn.innerHTML = `<i class="bi bi-brightness-alt-high"></i>`
    }
}