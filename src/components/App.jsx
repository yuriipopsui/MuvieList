import React from "react";
import muviesData from "../muviesData";
import MuvieItem from "./MuvieItem";
import "./bootstrap.min.css";

console.log(muviesData);
// Note!: UI = fn(state, props)

class App extends React.Component {
    constructor (){
        super();

        this.state = {
            muvies: muviesData,
            muviesWillWatch: []
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

    addMuvieToWillWatch = muvie => {
        //return this.state.muviesWillWatch.push(muvie);
        const updateMuviesWillWatch=[...this.state.muviesWillWatch];
        updateMuviesWillWatch.push(muvie);
        this.setState({
            muviesWillWatch: updateMuviesWillWatch
        });
    };

    render() {
      console.log(this);
        return <div className="container">
                    <div className="row">
                        <div className="col-9">
                            <div className="row">
                                {this.state.muvies.map(muvie =>{
                                return <div className="col-6 md-4" key={muvie.id}>
                                            <MuvieItem  muvie={muvie}
                                            removeMuvie={this.removeMuvie} 
                                            addMuvieToWillWatch={this.addMuvieToWillWatch}/>
                                        </div>
                                 ;})}       
                            </div>
                            
                        </div>
                        <div className="col-3">
                                <p>Will Watch: {this.state.muviesWillWatch.length}</p>
                        </div>
                    </div>
                </div>
    }
}
//function App () {
//    return <div>{muviesData[0].title}</div>;
//}

export default App;