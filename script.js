function run() {
    let bodyHeight = document.querySelector("#bodyHeight").value;
    bodyHeight = parseFloat(bodyHeight)

    let bodyWeight = document.querySelector("#bodyWeight").value;
    bodyWeight = parseFloat(bodyWeight)

    let bodyHeightMeter = bodyHeight/ 100;

    let bmi = bodyWeight / (bodyHeightMeter**2);
    bmi = bmi.toFixed(2);

    document.querySelector("#ausgabe").innerHTML = bmi;
}