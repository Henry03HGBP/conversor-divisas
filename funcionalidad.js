// Manadamos a traer nuestros elementos del DOM
const select = document.getElementById("select")
const render = document.querySelector("#render")
const form = document.getElementById("form")
const resultado=
document.getElementById("resultado")
// La moneda en el select por default es dolar, así que lo guardamos en esta varible
let moneda = "dolar"
// Con esta funcion vamos a calcular el tipo de cambio dependiendo de la moneda
// que este seleccionada en el select 
// recibe 2 parametros, m que es la moneda y m2 que es el monto
const calcular= (m,m2) =>{
    //Si la MONEDA es igual a DOLAR
    if(m === "dolar"){
        resultado.innerHTML =
       Un dolar es = a ${(m2*19.89).toFixed} Pesos Méxicanos. </br>
       Un dolar es = a ${(m2*7.79).toFixed} Quetzales. </br> 
       Un dolar es = a ${(m2*3.82).toFixed} Soles. </br>
       Un dolar es = a ${(m2*1.01).toFixed} Euros. </br>
       Un dolar es = a ${(m2*6.89).toFixed} Yen Japonés. </br>
    }
    if(m === "Un peso mexicano"){
      Un peso mexicano es = a ${(m2*20.10).toFixed} Dolares. </br>
      Un peso mexicano es = a ${(m2*2.57).toFixed} Quetzales. </br>
      Un peso mexicano es = a ${(m2*5.24).toFixed} Sol Peruano. </br>
      Un peso mexicano es = a ${(m2*19.95).toFixed} Euros.</br>
      Un peso mexicano es = a ${(m2*0.07).toFixed} Yen Japonés.</br>
    }
    if(m === "quetzal"){
      Un quetzal es = a ${(m2*0.12).toFixed} Dolares
      Un quetzal es 
    }
}