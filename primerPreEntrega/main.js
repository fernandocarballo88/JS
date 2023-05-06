    let aviso = parseInt(prompt("Ingrese el Numero de Set:\n1_X-Wing\n2_Imperial Shuttle\n3_Naboo Starfighter\n4_Razor Crest\n5_Tie Fighter\n6_Millenium Falcon\n7_Imperial Cruiser\nINGRESE 0 PARA CANCELAR"));
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

    aviso = parseInt(prompt("Ingrese el Numero de Set:\n1_X-Wing\n2_Imperial Shuttle\n3_Naboo Starfighter\n4_Razor Crest\n5_Tie Fighter\n6_Millenium Falcon\n7_Imperial Cruiser\nINGRESE 0 PARA CANCELAR"));
}

