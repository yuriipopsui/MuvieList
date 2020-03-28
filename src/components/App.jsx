import React from "react";
import muviesData from "../muviesData";
import MuvieItem from "./MuvieItem";
import "./bootstrap.min.css";

// Note!: UI = fn(state, props)

class App extends React.Component {
    constructor (){
        super();

        this.state = {
            muvies: [],
            muviesWillWatch: []
        };
        console.log("constructor");
    }

    componentDidMount() {
        console.log("Didmount");
        //new standard: fetch(`${API_URL}/discover/movie?api_key=${API_KEY}=...........)
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=3f4ca4f3a9750da53450646ced312397&sort_by=popularity.desc").then(
            (response) => {console.log("then")
            return response.json()
        }).then((data)=> {
        console.log("data", data)
        this.setState({
            muvies: data.results
        })
    })
}
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

    

    render() {
      console.log("render", this.state, this.temp);
        return <div className="container">
                    <div className="row mt-4">
                        <div className="col-9">
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