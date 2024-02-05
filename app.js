function imgSlider(anything) {
    document.querySelector(".starbucks").src = anything;
}

function changeColors(color) {
    const circle = document.querySelector(".circle");
    circle.style.background = color;

    const starbucksText = document.querySelector(".content .textBox h2 span");
    starbucksText.style.color = color;

    const lerMaisButton = document.querySelector(".content .textBox a");
    lerMaisButton.style.backgroundColor = color;
    lerMaisButton.style.borderColor = color;

    const agradecimento = document.querySelector(".lermais__agradecimento span");
    agradecimento.style.color = color;
}

function exibirParagrafo() {
    var paragrafo = document.querySelector(".lermais__agradecimento");
    var lerMaisLink = document.querySelector(".lermais__link");
    paragrafo.style.display = "block";
    lerMaisLink.style.display = "none";
}
