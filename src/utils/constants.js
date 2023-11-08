export default (function (){
    const { PI, sin, cos, tan, round, abs } = Math;
    return{
        PI,
        sin,
        cos,
        tan,
        round,
        abs,
    }
}).call()

/**
 * @param {number} deg 
 * @return Returns <radians> from provided <angle_in_degrees> input
 */
export function DegToRad(deg){
    // console.log("Radians=?", deg * (Math.PI / 180))
    return (
        deg * (Math.PI / 180)
    )
}

/**
 * @param {number} rad 
 * @return {number} Returns <angle_in_degrees> from provided <radians> input
 */
export function RadToDeg(rad){
    return (
        rad * (180 / Math.PI)
    )
}

/**
 * @param {number} numerator 
 * @param {number} denominator 
 * @return {number} Radians from the given input e.g. 2PI/1 = 6.28... rad
 */
export function FracToRad(numerator, denominator){
    return (
        numerator * (Math.PI / denominator)
    )
}