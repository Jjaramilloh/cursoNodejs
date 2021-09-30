/**
 * autor Jorge Jaramillo
 * escrito el dia 29 de septiembre de 2021
 */

/**
 * funcion que contiene arrays de frutas
 */
const getfrutas=()=>{
    return ["Piña","Fresa","Manzana","Uva","Pera","Manzana"]
}
/**
 * devuelve un array de frutas filtrado por la condicion Manzana
 */

const filtroFrutas=(frutas)=>{
    return frutas.filter(fruta=>fruta==="Manzana")
}
/**
 * devuelve un array de frutas filtrado por las frutas que tengan mas de  4 caracteres
 */

const filtroFrutasLetra=(frutas)=>{
    return frutas.filter(fruta=>fruta.length>4)
}

const tamFruta=(frutas)=>{
    return frutas.length
}
/**
 * map sirve para hacer una operacion con una funcion, numero de caracteres de cada fruta
 */
const mapFruta=(frutas)=>{
    return frutas.map(fruta=>tamFruta(fruta))
}

const interarFrutas=(frutas)=>{
    for(const [key,value] of frutas.entries()){
        console.log(`key ${key} y valor es ${value}`)
    }
}

const buscarFruta=(frutab,frutas)=>{
    return frutas.find(fruta=>fruta===frutab)
}

const buscarIndexFruta=(frutab,frutas)=>{
    return frutas.findIndex(fruta=>fruta===frutab)
}

/**
 * funcion principal para llamado de otra funcion
 */
const main = () => {
    let frutas=getfrutas()
    let filtrofrutas=filtroFrutas(frutas)
    let numletras=mapFruta(frutas)
    let tam=tamFruta(frutas)
    console.log(frutas)
    console.log(filtrofrutas)
    console.log(numletras)
    console.log("Tamaño Fruta " +tam)
    interarFrutas(frutas)
    console.log(buscarFruta("Manzana",frutas))
    console.log(buscarIndexFruta("Manzana",frutas))
}
/**
 * invocar main
 */
main()