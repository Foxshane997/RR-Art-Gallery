import React from "react";

function ButtonBar(props){
    return (
        <div className="Button-Bar">
            <button value={-5} onClick={props.handleIterate}>Way Back</button>
            <button value={-1} onClick={props.handleIterate}>Back</button>
            <button value={1} onClick={props.handleIterate}>Next</button>
            <button value={5} onClick={props.handleIterate}>Big Next</button>
            {/* the props.handleIterate will be passed in when calling on app.js */}
        </div>
    )

}

export default ButtonBar