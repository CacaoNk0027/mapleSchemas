/**
 * 
 * @param {number} used el numero de porcentaje usado
 * @param {number} free el numero de porcentaje vacio
 * @param {number} length el tamaño de la barra
 * @returns barra de porcentaje con tamaño de 15
 */
module.exports = (used, free, length) => {
    const full = "█"
    const empty = "●"
    const total = used+free;
    let repeat
    if(!length) length = 15;
    else if(typeof(length) !== "number") throw new Error("el parametro length debe de ser un numero");
    else repeat = length
    used = Math.round((used / total)* repeat);
    free = Math.round((free / total)* repeat);
    return full.repeat(used) + empty.repeat(free)
}