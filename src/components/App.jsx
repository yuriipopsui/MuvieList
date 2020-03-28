import React from "react";
import muviesData from "../muviesData";
import MuvieItem from "./MuvieItem";
import "./bootstrap.min.css";

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
        });
    };

    removeMuvieFromWillWath = muvie => {
        console.log(typeof(this.removeMuvieFromWillWath));
        const updateMuviesWillWatch=this.state.muviesWillWatch.filter(function(item){
            return item.id !== muvie.id;
        });
        this.setState({
            muviesWillWatch: updateMuviesWillWatch
        });
    };

    addMuvieToWillWatch = muvie => {
        const updateMuviesWillWatch=[...this.state.muviesWillWatch, muvie];
        this.setState({
            muviesWillWatch: updateMuviesWillWatch
        });
    };

    render() {
      console.log("render", this.state, this.temp);
        return <div className="container">
                    <div className="row">
                        <div className="col-9">
                            <div className="row">
                                {this.state.muvies.map(muvie =>{
                                return <div className="col-6 mb-4" key={muvie.id}>
                                            <MuvieItem  muvie={muvie}
                                            removeMuvie={this.removeMuvie} 
                                            addMuvieToWillWatch={this.addMuvieToWillWatch}
                                            removeMuvieFromWillWath={this.removeMuvieFromWillWath}/>
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

export default App;