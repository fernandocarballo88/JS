/*
let nombre = prompt("ingrese su nombre(para salir esc)")
if (nombre != "esc"){
    let apellido = prompt("ingrese su apellido")
    console.log("Nombre: " + nombre + " Apellido: " + apellido)
}

while(nombre != "esc"){

    nombre = prompt("ingrese su nombre(para salir esc)")
    if (nombre != "esc"){
        apellido = prompt("ingrese su apellido")
        console.log("Nombre: " + nombre + " Apellido: " + apellido)}

}
*/

// arrays

/*let naves = ["x-wing", "imperial shuttle", " naboo starfighter", "razor crest", "tie fighter", "millenium falcon", "imperial cruiser"];
 console.log(naves[1])//posicion del array
 console.log(naves.length)// cuenta los array
 */

/*let nave = prompt("ingrese el nombre del set(para salir esc)")

do{
    if(nave !="esc"){
        let precio = parseFloat(prompt("ingrese valor en dolares"))
        let envio = 2000

        console.log("Nombre del Set: " + nave + " Precio en dolares: " + precio + " En Pesos mas envio: " + (precio*400+envio))}

        nave = prompt("ingrese el nombre del set(para salir esc)")
    }while(nave !="esc")*/





    let aviso = parseInt(prompt("Ingrese el Numero de Set:   1_X-Wing     2_Imperial Shuttle      3_Naboo Starfighter    4_Razor Crest     5_Tie Fighter     6_Millenium Falcon     7_Imperial Cruiser   INGRESE 0 PARA CANCELAR"));
    const naves = ["No Ingresó un número valido", "X-wing", "Imperial Shuttle", " Naboo Starfighter", "Razor Crest", "Tie Fighter", "Millenium Falcon", "Imperial Cruiser"];




while(aviso !=0){  

            let cantidad =parseInt(prompt("Ingrese cantidad de Sets"));
            const envio = 2000;
            
            function calculo(x){
                const resultado = (x*400)*cantidad+envio
                return resultado
                }


        
        if(aviso==1){
        alert("Nombre del Set: " + naves[aviso] + " Precio en dolares: 50" + " Cantidad: " + cantidad + " En Pesos mas envio: " + calculo(50)
        );
        }else if(aviso==2){
        alert("Nombre del Set: " + naves[aviso] + " Precio en dolares: 60" + " Cantidad: " + cantidad + " En Pesos mas envio: " + calculo(60)
        );
        }else if(aviso==3){
        alert("Nombre del Set: " + naves[aviso] + " Precio en dolares: 70" + " Cantidad: " + cantidad + " En Pesos mas envio: " + calculo(70)
        );
        }else if(aviso==4){
        alert("Nombre del Set: " + naves[aviso] + " Precio en dolares: 80" + " Cantidad: " + cantidad + " En Pesos mas envio: " + calculo(80)
        );
        }else if(aviso==5){
        alert("Nombre del Set: " + naves[aviso] + " Precio en dolares: 40" + " Cantidad: " + cantidad + " En Pesos mas envio: " + calculo(40)
        );
        }else if(aviso==6){
        alert("Nombre del Set: " + naves[aviso] + " Precio en dolares: 100" + " Cantidad: " + cantidad + " En Pesos mas envio: " + calculo(100)
        );
        }else if(aviso==7){
        alert("Nombre del Set: " + naves[aviso] + " Precio en dolares: 200" + " Cantidad: " + cantidad +  " En Pesos mas envio: " + calculo(200)
        );
    }else{
        alert(naves[0])
    };

    aviso = parseInt(prompt("Ingrese el Numero de Set:   1_X-Wing     2_Imperial Shuttle      3_Naboo Starfighter    4_Razor Crest     5_Tie Fighter     6_Millenium Falcon     7_Imperial Cruiser   INGRESE 0 PARA CANCELAR"));
}

