import React from "react"

const MuvieItem = props => {
    return <div>
            <p>{props.muvie.title}</p>
            <button onClick={props.removeMuvie.bind(this, props.muvie)}>
             Delete movie</button>
        </div>

}
export default MuvieItem;
