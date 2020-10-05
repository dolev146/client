document.querySelector("#sell").addEventListener("click", () => {
    let name = document.querySelector("#name").value
    let phone = document.querySelector("#phone").value
    let adress = document.querySelector("#adress").value
    let order = document.querySelector("#order").value
    let amount = document.querySelector("#amount").value
    if (!name) {
        alert("תמלא את השם")
    } if (!phone) {
        alert("תמלא את טלפון")
    } if (!adress) {
        alert("תמלא את כתובת")
    } if (!order) {
        alert("תמלא את סוג הלחם")
    } if (!amount) {
        alert("תמלא את הכמות ")
    }

    let price = 0;

    switch (order) {
        case "sweet chala":
            price = 9
            break;
        case "salt chala":
            price = 7
            break;
        case "whole chala":
            price = 8.5
            break;
        case "kosmin chala":
            price = 9
            break;
        case "kasten":
            price = 12
            break;
        case "african":
            price = 11
            break;
        case "shiphon":
            price = 9.5
            break;
        case "kosmin":
            price = 11
            break;
        case "deganim":
            price = 9
            break;
        case "villge":
            price = 8.5
            break;
        case "tomato":
            price = 9.5
            break;
        case "olive":
            price = 9
            break;
        case "kosminolive":
            price = 9.5
            break;
        default:
            price = 0
            break;
    }



    let TableDiv = document.createElement("div")
    TableDiv.className = "table"
    let dateDiv = document.createElement("div")
    let d = new Date()
    let dateText = ""
    let month = d.getMonth() + 1
    let year = d.getFullYear()
    let day = d.getDay()
    dateText = `${day}/${month}/${year}`
    dateDiv.textContent = dateText
    let nameDiv = document.createElement("div")
    nameDiv.textContent = name
    let phoneDiv = document.createElement("div")
    phoneDiv.textContent = phone
    let adressDiv = document.createElement("div")
    adressDiv.textContent = adress
    let orderDiv = document.createElement("div")
    orderDiv.textContent = order
    let amountDiv = document.createElement("div")
    amountDiv.textContent = amount
    let priceDiv = document.createElement("div")
    price = price * parseInt(amount)
    priceDiv.textContent = price

    let orderDeliveredDiv = document.createElement("div")
    orderDeliveredDiv.textContent = "לא"

    document.querySelector("#container").appendChild(TableDiv)
    TableDiv.appendChild(orderDeliveredDiv)
    TableDiv.appendChild(amountDiv)
    TableDiv.appendChild(priceDiv)
    TableDiv.appendChild(orderDiv)
    TableDiv.appendChild(adressDiv)
    TableDiv.appendChild(phoneDiv)
    TableDiv.appendChild(nameDiv)
    TableDiv.appendChild(dateDiv)

})