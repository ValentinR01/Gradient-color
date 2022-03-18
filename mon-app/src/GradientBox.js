import React from "react";

export default function GradientBox(props) {
    
    //+ 'deg', gradient.firstColor + gradient.firstBreakpoint + '%
    var style = {background: 'linear-gradient(' 
    + props.gradient.rotate + 'deg,' 
    + props.gradient.firstColor + ' ' 
    + props.gradient.firstBreakpoint + '%,'
    + props.gradient.secondColor + ' ' 
    + props.gradient.secondBreakpoint + '%,'
    + props.gradient.thirdColor + ' ' 
    + props.gradient.thirdBreakpoint + '%)'}

    console.log(style)
    
    return (
        
        <div className="gradientBox" style={style}></div>
    )
}