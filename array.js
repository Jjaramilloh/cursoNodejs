/**
 * autor Jorge Jaramillo
 * escrito el dia 29 de septiembre de 2021
 */

/**
 * funcion que contiene arrays de frutas
 */
const getfrutas=()=>{
    return ["Piña","Fresa","Manzana","Uva"]
}

/**
 * funcion principal para llamado de otra funcion
 */
const main=()=>{
    let frutas=getfrutas()
    console.log(frutas)
}
/**
 * invocar main
 */
main()