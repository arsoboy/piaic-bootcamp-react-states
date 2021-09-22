import React from 'react'

function ThemeSelector(props){
    //console.log(props);
    return(
        <button onClick={ () => props.setTheme( ! props.theme ) }>
            Enable {props.title} Theme
        </button>
    )
}

export default ThemeSelector