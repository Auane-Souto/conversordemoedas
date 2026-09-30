const convertButton = document.querySelector(".convert-button")
const moedaSelecionada = document.querySelector(".moeda-selecionada")

function convertValues() {
    const inputValor = document.querySelector(".input-valor").value
    const valorConverter = document.querySelector(".valor-moeda")
    const valorConvertido = document.querySelector(".valor-moeda-convertido")

    const dolarToday = 5.2
    const euroToday = 6.2



    if(moedaSelecionada.value == "dolar") {
        valorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(inputValor / dolarToday)

    }
    if(moedaSelecionada.value == "euro"){
        valorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValor / euroToday )

    }

     valorConverter.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
        
    }).format (inputValor)

    
    console.log(convertdValue)
}


function mudarValor() {
    const nomeMoeda = document.getElementById("nome-moeda")
    const imgMoeda = document.querySelector(".img-moeda")
  
      if (moedaSelecionada.value == "dolar") {
        nomeMoeda.innerHTML = "Dolar americano"
        imgMoeda.src = "./assets/dolar.usa.png"

    }

    if (moedaSelecionada.value == "euro") {
        nomeMoeda.innerHTML = "Euro"
        imgMoeda.src = "./assets/euro.png"
        imgMoeda.style.width = "64px"
        imgMoeda.style.height = "64px"

    }

    convertValues()

}
moedaSelecionada.addEventListener("change", mudarValor)
convertButton.addEventListener("click", convertValues)

