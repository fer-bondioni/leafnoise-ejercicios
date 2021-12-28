//Dos soluciones al challenge 1)

//a

function sumar(a,b,c,d,e) {
    const sum = a+b+c+d+e
    return `Resultado: ${sum}`
}

sumar(1,2,3,4,5) // Resultado: 15

//b

const sumarlos = (...numbers) => {
    let sum = 0
    for(let i = 0; i <numbers.length;i++){
        sum += numbers[i]
    }
    return `Resultado: ${sum}`
}

sumarlos(1,2,3,4,5) // Resultado: 15

//Challenge 2)

function calculoMatriz([arr1, arr2, arr3]){
    const sum1 = arr1[0] + arr2[1] + arr3[2] 
    const sum2 = arr1[2] + arr2[1] + arr3[0]
    return sum1 - sum2
}
calculoMatriz([[1,2,3], [4,8,16], [7,14,21]]) //12

//Challenge 3)

function generarPiramide(num){
    for(let i = 1; i <= num; i++){
        let output = "";
        for(let j = 1; j <= (num - i); j++){
            output += " ";
        }
        for(let k = 1; k <= i; k++){
            output += "#  ";
        }
        console.log(output)
    }
}
generarPiramide(4)
