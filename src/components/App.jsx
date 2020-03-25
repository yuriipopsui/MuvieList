import React from "react";
import muviesData from "../muviesData";
import MuvieItem from "./MuvieItem"

console.log(muviesData);
// Note!: UI = fn(state)

class App extends React.Component {
    constructor (){
        super();

        this.state = {
            muvies: muviesData
        };
    }

    removeMuvie = muvie => {
        const updateMuvies=this.state.muvies.filter(function(item){
            return item.id !== muvie.id;
        });
        console.log(updateMuvies);
        //this.state.muvies = updateMuvies;
        this.setState({
            muvies: updateMuvies
        })
    }

    render() {
        console.log(this);
        return <div>{this.state.muvies.map(muvie =>{
                return <MuvieItem 
                key={muvie.id} 
                muvie={muvie}
                removeMuvie={this.removeMuvie}/>;
        })}    </div>
    }
}
//function App () {
//    return <div>{muviesData[0].title}</div>;
//}

export default App;