export function matrixTransformation(rad, attrs = {
    scalingFactorX:1, scalingFactorY:1,
    translateX: 0, translateY: 0
}){
    
    // @https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Transformations#transforms
    var c = attrs?.scalingFactorX * Math.cos(rad);
    var s = attrs?.scalingFactorY * Math.sin(rad);
    
    // Transformation matrix variant
    var m11 = c;
    var m12 = s;
    var m21 = -s;
    var m22 = c;

    return [
        m11,
        m12,
        m21,
        m22,
        attrs?.translateX,
        attrs?.translateY
    ]
    
}