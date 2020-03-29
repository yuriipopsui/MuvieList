import React from "react";
//import muviesData from "../muviesData";
import MuvieItem from "./MuvieItem";
import "./bootstrap.min.css";
import MuvieTabs from "./MuvieTabs";
//import API_URL from "./utils/api.js";
//import API_KEY_3 from "./utils/api.js";

const API_URL = "https://api.themoviedb.org/3";

const API_KEY_3 = "3f4ca4f3a9750da53450646ced312397";

// Note!: UI = fn(state, props)

class App extends React.Component {
    constructor (){
        super();

        this.state = {
            muvies: [],
            muviesWillWatch: [],
            sort_by: "revenue.desc"
        };
        console.log("constructor");
    }

    componentDidMount() {
        console.log("Didmount");
        this.getMuvies();   
    };

    componentDidUpdate(prevProps, prevState) {
        console.log("DidUpdate");
        console.log("prev", prevProps, prevState);
        console.log("this", this.props, this.state);
        if (prevState.sort_by !== this.state.sort_by) {
            this.getMuvies();
        };
    };

    getMuvies =() => {
        fetch(`${API_URL}/discover/movie?api_key=${
            API_KEY_3}&sort_by=${this.state.sort_by}`).then(
            (response) => {console.log("then")
            return response.json()
        }).then((data)=> {
        console.log("data", data);
        this.setState({
            muvies: data.results
            });
        });
    };
    
    removeMuvie = muvie => {
        const updateMuvies=this.state.muvies.filter(item =>item.id !== muvie.id);
        console.log(updateMuvies);

        this.setState({
            muvies: updateMuvies
        });
    };

    addMuvieToWillWatch = muvie => {
        const updateMuviesWillWatch=[...this.state.muviesWillWatch, muvie];
        this.setState({
            muviesWillWatch: updateMuviesWillWatch
        });
    };
    
    removeMuvieFromWillWatch = muvie => {
        const updateMuviesWillWatch = this.state.muviesWillWatch.filter(
            item => item.id !== muvie.id
            );
        this.setState({
            muviesWillWatch: updateMuviesWillWatch
        });
    };

    updateSortBy = value => {
        this.setState ({
            sort_by: value
        });
    };

    render() {
      console.log("render", this.state, this.temp);
        return <div className="container">
                    <div className="row mt-4">
                        <div className="col-9">
                            <div className="row mb-4">
                                <div className="col-12">
                                <MuvieTabs 
                                sort_by={this.sort_by} 
                                updateSortBy={this.updateSortBy} />  
                                </div>
                            </div>
                            <div className="row">
                                {this.state.muvies.map(muvie =>{
                                return <div className="col-6 mb-4" key={muvie.id}>
                                            <MuvieItem  muvie={muvie}
                                            removeMuvie={this.removeMuvie} 
                                            addMuvieToWillWatch={this.addMuvieToWillWatch}
                                            removeMuvieFromWillWatch={this.removeMuvieFromWillWatch}/>
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