let breads = [

]

let mitbalim = [

]

let sales = {
    sale_1: 0, // reduce 10 from total price if reach to 3 if reach to 4 reduce the price of the last item / 25 
    sale_2: 0, // reduce 5 if reach to 2
    sale_3: 0 // reduce 4 shekels if 2 
}

// let order = [{
//     name: "dolev",
//     adress: "שמעון 146",
//     phone: "0505884960",
//     breads: [
//         {
//             type: "shifon",
//             amount: 1
//         },
//         {
//             type: "tomato",
//             amount: 2
//         }
//     ],
//     mitbalim: [
//         { type: "pesto", amount: 2 },
//         { type: "artishok", amount: 1 }
//     ],
//     date: new Date(),
//     price_to_the_customer: "",
//     price_to_the_supplier: "",
//     profit: ""
// }]

let customers = []

let btnEl = document.querySelector("more_breads")


let Btn_kasten_kal = document.querySelector("#Btn_bread1")
Btn_kasten_kal.addEventListener("click", () => {
    let span = document.querySelector("#Span_bread1")
    span.textContent = parseInt(span.textContent) + 1
})


let Btn_kasten_deganim = document.querySelector("#Btn_bread2")
Btn_kasten_deganim.addEventListener("click", () => {
    let span = document.querySelector("#Span_bread2")
    span.textContent = parseInt(span.textContent) + 1
})


let Btn_kasten_shifon_egozim = document.querySelector("#Btn_bread3")
Btn_kasten_shifon_egozim.addEventListener("click", () => {
    let span = document.querySelector("#Span_bread3")
    span.textContent = parseInt(span.textContent) + 1
})


let Btn_kasten_batzal = document.querySelector("#Btn_bread4")
Btn_kasten_batzal.addEventListener("click", () => {
    let span = document.querySelector("#Span_bread4")
    span.textContent = parseInt(span.textContent) + 1
})


let Btn_kasten_tomato = document.querySelector("#Btn_bread5")
Btn_kasten_tomato.addEventListener("click", () => {
    let span = document.querySelector("#Span_bread5")
    span.textContent = parseInt(span.textContent) + 1
})



let Btn_kasten_tzimokim_egozim = document.querySelector("#Btn_bread6")
Btn_kasten_tzimokim_egozim.addEventListener("click", () => {
    let span = document.querySelector("#Span_bread6")
    span.textContent = parseInt(span.textContent) + 1
})



let Btn_kasten_kosmin = document.querySelector("#Btn_bread7")
Btn_kasten_kosmin.addEventListener("click", () => {
    let span = document.querySelector("#Span_bread7")
    span.textContent = parseInt(span.textContent) + 1
})



let Btn_kasten_kosmin_katzhach = document.querySelector("#Btn_bread8")
Btn_kasten_kosmin_katzhach.addEventListener("click", () => {
    let span = document.querySelector("#Span_bread8")
    span.textContent = parseInt(span.textContent) + 1
})



let Btn_kasten_shiphon_hamaniot = document.querySelector("#Btn_bread9")
Btn_kasten_shiphon_hamaniot.addEventListener("click", () => {
    let span = document.querySelector("#Span_bread9")
    span.textContent = parseInt(span.textContent) + 1
})



let Btn_kasten_delaat = document.querySelector("#Btn_bread10")
Btn_kasten_delaat.addEventListener("click", () => {
    let span = document.querySelector("#Span_bread10")
    span.textContent = parseInt(span.textContent) + 1
})



let lehem_deganim = document.querySelector("#Btn_bread11")
lehem_deganim.addEventListener("click", () => {
    let span = document.querySelector("#Span_bread11")
    span.textContent = parseInt(span.textContent) + 1
})



let shifon_african = document.querySelector("#Btn_bread12")
shifon_african.addEventListener("click", () => {
    let span = document.querySelector("#Span_bread12")
    span.textContent = parseInt(span.textContent) + 1
})



let zaitim = document.querySelector("#Btn_bread13")
zaitim.addEventListener("click", () => {
    let span = document.querySelector("#Span_bread13")
    span.textContent = parseInt(span.textContent) + 1
})



let shifon = document.querySelector("#Btn_bread14")
shifon.addEventListener("click", () => {
    let span = document.querySelector("#Span_bread14")
    span.textContent = parseInt(span.textContent) + 1
})



let kafri = document.querySelector("#Btn_bread15")
kafri.addEventListener("click", () => {
    let span = document.querySelector("#Span_bread15")
    span.textContent = parseInt(span.textContent) + 1
})


let regila = document.querySelector("#Btn_bread16")
regila.addEventListener("click", () => {
    let span = document.querySelector("#Span_bread16")
    span.textContent = parseInt(span.textContent) + 1
})



let sweetHala = document.querySelector("#Btn_bread17")
sweetHala.addEventListener("click", () => {
    let span = document.querySelector("#Span_bread17")
    span.textContent = parseInt(span.textContent) + 1
})



let whole_hala = document.querySelector("#Btn_bread18")
whole_hala.addEventListener("click", () => {
    let span = document.querySelector("#Span_bread18")
    span.textContent = parseInt(span.textContent) + 1
})

let kosmin_hala = document.querySelector("#Btn_bread19")
kosmin_hala.addEventListener("click", () => {
    let span = document.querySelector("#Span_bread19")
    span.textContent = parseInt(span.textContent) + 1
})

let selek = document.querySelector("#Btn_bread20")
selek.addEventListener("click", () => {
    let span = document.querySelector("#Span_bread20")
    span.textContent = parseInt(span.textContent) + 1
})

let pereg = document.querySelector("#Btn_bread21")
pereg.addEventListener("click", () => {
    let span = document.querySelector("#Span_bread21")
    span.textContent = parseInt(span.textContent) + 1
})



let pesto = document.querySelector("#Btn_mitbalim1")
pesto.addEventListener("click", () => {
    let span = document.querySelector("#Span_mitbalim1")
    span.textContent = parseInt(span.textContent) + 1
})

let agvaniya_meyobeshset = document.querySelector("#Btn_mitbalim2")
agvaniya_meyobeshset.addEventListener("click", () => {
    let span = document.querySelector("#Span_mitbalim2")
    span.textContent = parseInt(span.textContent) + 1
})

let chimichuri = document.querySelector("#Btn_mitbalim3")
chimichuri.addEventListener("click", () => {
    let span = document.querySelector("#Span_mitbalim3")
    span.textContent = parseInt(span.textContent) + 1
})

let tapnad_zeitim = document.querySelector("#Btn_mitbalim4")
tapnad_zeitim.addEventListener("click", () => {
    let span = document.querySelector("#Span_mitbalim4")
    span.textContent = parseInt(span.textContent) + 1
})



let artishok = document.querySelector("#Btn_mitbalim5")
artishok.addEventListener("click", () => {
    let span = document.querySelector("#Span_mitbalim5")
    span.textContent = parseInt(span.textContent) + 1
})



let shata_agvaniot = document.querySelector("#Btn_mitbalim6")
shata_agvaniot.addEventListener("click", () => {
    let span = document.querySelector("#Span_mitbalim6")
    span.textContent = parseInt(span.textContent) + 1
})



let tapenad_kalamate = document.querySelector("#Btn_mitbalim7")
tapenad_kalamate.addEventListener("click", () => {
    let span = document.querySelector("#Span_mitbalim7")
    span.textContent = parseInt(span.textContent) + 1
})



let pesto_bolgarit = document.querySelector("#Btn_mitbalim8")
pesto_bolgarit.addEventListener("click", () => {
    let span = document.querySelector("#Span_mitbalim8")
    span.textContent = parseInt(span.textContent) + 1
})



let agvaniut_bolgarit = document.querySelector("#Btn_mitbalim9")
agvaniut_bolgarit.addEventListener("click", () => {
    let span = document.querySelector("#Span_mitbalim9")
    span.textContent = parseInt(span.textContent) + 1
})



let kmehin = document.querySelector("#Btn_mitbalim10")
kmehin.addEventListener("click", () => {
    let span = document.querySelector("#Span_mitbalim10")
    span.textContent = parseInt(span.textContent) + 1
})



let tomato_butter = document.querySelector("#Btn_mitbalim11")
tomato_butter.addEventListener("click", () => {
    let span = document.querySelector("#Span_mitbalim11")
    span.textContent = parseInt(span.textContent) + 1
})


let isbay_tibul_butter = document.querySelector("#Btn_mitbalim12")
isbay_tibul_butter.addEventListener("click", () => {
    let span = document.querySelector("#Span_mitbalim12")
    span.textContent = parseInt(span.textContent) + 1
})


let Btn_place_order = document.querySelector("#place_order")
Btn_place_order.addEventListener("click", () => {
    let name = document.querySelector("#name").value
    let adress = document.querySelector("#adress").value
    let phone = document.querySelector("#phone").value










    for (let i = 1; i < 20; i++) {
        let bread_type = document.querySelector(`#Btn_bread${i}`).textContent
        let bread_amount = document.querySelector(`#Span_bread${i}`).textContent
        let bread_price = bread_amount * document.querySelector(`#Btn_bread${i}`).dataset.price
        bread_amount = parseInt(bread_amount)

        if (bread_amount > 0) {

            let bread_sale = document.querySelector(`#Btn_bread${i}`).dataset.sale
            if (bread_sale === "1") {
                sales.sale_1++
            } else if (bread_sale === "2") {
                sales.sale_2++
            } else if (bread_sale === "3") {
                sales.sale_3++
            }


            breads.push({ bread_type, bread_amount, bread_price })
        }
    }
    console.log(breads)











    for (let j = 1; j < 12; j++) {
        let mitbal_type = document.querySelector(`#Btn_mitbalim${j}`).textContent
        let mitbal_amount = document.querySelector(`#Span_mitbalim${j}`).textContent
        mitbal_amount = parseInt(mitbal_amount)






        let mitbal_price = mitbal_amount * document.querySelector(`#Btn_mitbalim${j}`).dataset.price
        mitbal_amount = parseInt(mitbal_amount)




        if (mitbal_amount > 0) {

            let bread_sale = document.querySelector(`#Btn_mitbalim${j}`).dataset.sale
            if (bread_sale === "1") {
                sales.sale_1++
            } else if (bread_sale === "2") {
                sales.sale_2++
            } else if (bread_sale === "3") {
                sales.sale_3++
            }


            mitbalim.push({ mitbal_type, mitbal_amount, mitbal_price })
        }
    }
    console.log(mitbalim)


    let total_price = breads.reduce((currentTotal, b) => {
        return b.bread_price + currentTotal
    }, 0)

    total_price += mitbalim.reduce((currentTotal, m) => {
        return m.mitbal_price + currentTotal
    }, 0)


    if (sales.sale_1 && sales.sale_1 % 3 === 0) {
        total_price = total_price - 10
    }
    if (sales.sale_1 && sales.sale_1 % 4 === 0) {
        if (breads[4]) { total_price = total_price - breads[4].bread_price }
        else if (mitbalim[4]) { total_price = total_price - mitbalim[4].mitbal_price }
    }
    if (sales.sale_2 && sales.sale_2 % 2 === 0) {
        total_price = total_price - 5
    }
    if (sales.sale_3 && sales.sale_3 % 2 === 0) {
        total_price = total_price - 4
    }
    console.log(total_price)


    let d = new Date()
    let dateText = ""
    let month = d.getMonth() + 1
    let year = d.getFullYear()
    let day = d.getDay()
    dateText = `${day}/${month}/${year}`

    let delivery = 10;

    total_price = total_price + delivery

    let order = {
        name,
        adress,
        phone,
        breads,
        mitbalim,
        total_price,
        delivery,
        date: dateText
    }

    let orders = []
    if (localStorage.orders) {
        orders = JSON.parse(localStorage.orders)
    }

    orders.push(order)

    localStorage.orders = JSON.stringify(orders)

    let orders_From_localStorage = JSON.parse(localStorage.orders)

    let html_row = orders_From_localStorage.map(order => {
      

        let order_breads = order.breads.map(b => (
            `  ${b.bread_amount} כמות
            <br> 
              סוג  ${b.bread_type} 
                <br> 
                מחיר ליחידה  ${b.bread_price} 
                <br>
            `
        ))

        let order_mitbalim = order.mitbalim.map(b => (
            `  ${b.mitbal_amount} כמות
            <br> 
              סוג  ${b.mitbal_type} 
                <br> 
                מחיר ליחידה  ${b.mitbal_price} 
                <br>
            `
        ))

        return (
            `<tr>
             <td>${order.total_price}</td>
             <td>${order.delivery}</td>
             <td>${order_breads}</td>
             <td>${order_mitbalim}</td>
             <td>${order.adress}</td>
             <td>${order.phone}</td>
             <td>${order.name}</td>
             <td>${order.date}</td>
         <tr>`)
    }
    )

    let tbody = document.querySelector("#tbody")
    tbody.innerHTML = html_row






    breads = []
    mitbalim = []
    sales.sale_1 = 0
    sales.sale_2 = 0
    sales.sale_3 = 0
})




window.onload = () => {
    Btn_place_order.click()
}












// document.querySelector("#sell").addEventListener("click", () => {
//     let name = document.querySelector("#name").value
//     let phone = document.querySelector("#phone").value
//     let adress = document.querySelector("#adress").value
//     let order = document.querySelector("#order").value
//     let amount = document.querySelector("#amount").value
//     if (!name) {
//         alert("תמלא את השם")
//     } if (!phone) {
//         alert("תמלא את טלפון")
//     } if (!adress) {
//         alert("תמלא את כתובת")
//     } if (!order) {
//         alert("תמלא את סוג הלחם")
//     } if (!amount) {
//         alert("תמלא את הכמות ")
//     }

//     let price = 0;

//     switch (order) {
//         case "sweet chala":
//             price = 9
//             break;
//         case "salt chala":
//             price = 7
//             break;
//         case "whole chala":
//             price = 8.5
//             break;
//         case "kosmin chala":
//             price = 9
//             break;
//         case "kasten":
//             price = 12
//             break;
//         case "african":
//             price = 11
//             break;
//         case "shiphon":
//             price = 9.5
//             break;
//         case "kosmin":
//             price = 11
//             break;
//         case "deganim":
//             price = 9
//             break;
//         case "villge":
//             price = 8.5
//             break;
//         case "tomato":
//             price = 9.5
//             break;
//         case "olive":
//             price = 9
//             break;
//         case "kosminolive":
//             price = 9.5
//             break;
//         default:
//             price = 0
//             break;
//     }



//     let TableDiv = document.createElement("div")
//     TableDiv.className = "table"
//     let dateDiv = document.createElement("div")
//     let d = new Date()
//     let dateText = ""
//     let month = d.getMonth() + 1
//     let year = d.getFullYear()
//     let day = d.getDay()
//     dateText = `${day}/${month}/${year}`
//     dateDiv.textContent = dateText
//     let nameDiv = document.createElement("div")
//     nameDiv.textContent = name
//     let phoneDiv = document.createElement("div")
//     phoneDiv.textContent = phone
//     let adressDiv = document.createElement("div")
//     adressDiv.textContent = adress
//     let orderDiv = document.createElement("div")
//     orderDiv.textContent = order
//     let amountDiv = document.createElement("div")
//     amountDiv.textContent = amount
//     let priceDiv = document.createElement("div")
//     price = price * parseInt(amount)
//     priceDiv.textContent = price

//     let orderDeliveredDiv = document.createElement("div")
//     orderDeliveredDiv.textContent = "לא"

//     document.querySelector("#container").appendChild(TableDiv)
//     TableDiv.appendChild(orderDeliveredDiv)
//     TableDiv.appendChild(amountDiv)
//     TableDiv.appendChild(priceDiv)
//     TableDiv.appendChild(orderDiv)
//     TableDiv.appendChild(adressDiv)
//     TableDiv.appendChild(phoneDiv)
//     TableDiv.appendChild(nameDiv)
//     TableDiv.appendChild(dateDiv)

// })