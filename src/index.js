import { Stage, Layer, Node, Shape } from './konva-components/index.js';
import { DegToRad } from './utils/constants.js';
import { matrixTransformation } from './callbacks/transform.js';
import { HUD, Input, Label } from '@declarative-hud/index.js';/* IMPORTANT: in-house dependency you WILL NOT HAVE after "npm ci" */
export default void function(){

    const rangeParams = {
        min: 0,
        max:  360,
        step: 1,
        value: 1,
    }
    const GUI = new HUD({container: document.body, minWidth: 15, position: 'right'})
    GUI.addGroup({name: 'group1', nodes: GUI.addSection('section', 2/* access each as section1|section2|sectionN : whereas N > 2 */)})

    const rangeInput = new Input({name: 'range', attrs: {...rangeParams}})
    GUI.find('section1').append(
        rangeInput
    );
    const cboxInput = new Input({name: 'cbox1', type: 'checkbox'/* , attrs: {cboxScaling: 1.5} */})
    GUI.find('section2'/* tick1 */).append(
        new Label('clockwise?'),
        cboxInput
    );
    
    const 
        Konva〵Node〵Defaults = new Node({
            container: document.getElementById('app'),
            width: window.innerWidth * 0.98,
            height: window.innerHeight * 0.97,
                x: innerWidth / 2,
                y: innerHeight / 2,
        })

        new Stage({
        ...Konva〵Node〵Defaults,
    })
    .add( 
        new Layer({draggable: true})
            .add(
                new Shape({sceneFunc: function(ctx, shape){

                    const attrs = {
                        scalingFactorX: 1/* <= change a value */, 
                        scalingFactorY: 1/* <= change a value */,
                        translateX: 0/* <= change a value */ + Konva〵Node〵Defaults.x(), 
                        translateY: 0/* <= change a value */ + Konva〵Node〵Defaults.y()
                    }

                    shape.setAttrs({
                        x: 0,
                        y: 0,
                        width: 200,
                        height: 200,
                        fill: 'green',
                        stroke: 'black',
                        strokeWidth: 2,
                    })

                        ctx.setTransform(...matrixTransformation( DegToRad( parseInt( 0 ) ), attrs ))
                        ctx.fillStyle = shape.fill()
                        ctx.fillRect(shape.x(), shape.y(), shape.width(), shape.height());

                    GUI.find(rangeInput.name).on('input', function(){
                        
                        ctx.reset()
                        ctx.clearRect(shape.x(), shape.y(), shape.getLayer().width(), shape.getLayer().height())
                        
                        if (GUI.find(cboxInput.name).checked){
                            ctx.setTransform(...matrixTransformation( DegToRad( parseInt( 1 * this.value ) ), attrs ))
                        }
                        else {
                            ctx.setTransform(...matrixTransformation( DegToRad( parseInt( -1 * this.value ) ), attrs ))
                        }

                        ctx.fillStyle = shape.fill()
                        ctx.fillRect(shape.x(), shape.y(), shape.width(), shape.height());

                    });
                }})
                )
        )
        
}()