
const calcular1 = (numero1,numero2)=>{

//const numero1 = 10, numero2 =20
let suma=numero1+numero2

console.log("El resultado de la suma es " + suma)

}
//calcular1(7, 9)


const calcular2 = (numero1,numero2)=>{

    //const numero1 = 10, numero2 =20
    let resta=numero1-numero2
    
    console.log("El resultado de la resta es " + resta)
    
    }
   // calcular2(7, 9)



const calcular3 = (numero1,numero2)=>{

    //const numero1 = 10, numero2 =20
    let multiplicacion=numero1*numero2
    
    console.log("El resultado de la multiplicacion es " + multiplicacion)
    
    }
    //calcular3(7, 9)


const calcular4 = (numero1,numero2)=>{

    //const numero1 = 10, numero2 =20
    let division=numero1/numero2
    
    console.log("El resultado de la division es " + division)
    
    }
    //calcular4(7, 9)

    /*exports.calcular1=calcular1
    exports.calcular2=calcular2
    exports.calcular3=calcular3
    exports.calcular4=calcular4*/

    const operaciones={}
    operaciones.calcular1=calcular1
    operaciones.calcular2=calcular2
    operaciones.calcular3=calcular3
    operaciones.calcular4=calcular4
    
    module.exports=operaciones;