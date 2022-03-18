import React from 'react';
import { render } from 'react-dom';
import { HuePicker } from 'react-color'
import ColorBox from './ColorBox';
import GradientBox from './GradientBox';



export default function Parameters ({gradient, setGradient}){
    console.log(gradient)
    return (
        <div className='main'>

            <div className="firstColor">
                <h4>Breakpoint 1</h4>
                <input type='number' placeholder={ gradient.firstBreakpoint} 
                onChange={ (e) => setGradient(
                    {...gradient,firstBreakpoint: e.target.value})}>
                </input>
                <h4>Color 1</h4>
                <ColorBox color={gradient.firstColor}/>
                <HuePicker 
                color={ gradient.firstColor }
                onChangeComplete={
                    updateColor => setGradient(
                        {...gradient,firstColor: updateColor.hex}
                        )}
                />
            </div>

            <div className="secondColor">
                <h4>Breakpoint 2</h4>
                <input type='number' placeholder={ gradient.secondBreakpoint} 
                onChange={ (e) => setGradient(
                    {...gradient,secondBreakpoint: e.target.value})}>
                </input>
                <h4>Color 1</h4>
                <ColorBox color={gradient.secondColor}/>
                <HuePicker 
                color={ gradient.secondColor }
                onChangeComplete={
                    updateColor => setGradient(
                        {...gradient,secondColor: updateColor.hex}
                        )}
                />
            </div>

            <div className="thirdColor">
                <h4>Breakpoint 3</h4>
                <input type='number' placeholder={ gradient.thirdBreakpoint} 
                onChange={ (e) => setGradient(
                    {...gradient,thirdBreakpoint: e.target.value})}>
                </input>
                <h4>Color 1</h4>
                <ColorBox color={gradient.thirdColor}/>
                <HuePicker 
                color={ gradient.thirdColor }
                onChangeComplete={
                    updateColor => setGradient(
                        {...gradient,thirdColor: updateColor.hex}
                        )}
                />
            </div>

            <div className="rotation">
                <h4>Rotation</h4>
                <input type='number' placeholder={ gradient.rotate } 
                onChange={updateRadient => setGradient({...gradient,rotate: updateRadient.target.value})} />
            </div>

            <GradientBox gradient={gradient}/>


            </div>

        
    )

}