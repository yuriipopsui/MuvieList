import React from "react"

class MuvieItem extends React.Component {

  constructor (){
  super();
  this.state = {
    WillWatch: false
   };
}
   render () {
     const {muvie, removeMuvie, addMuvieToWillWatch, removeMuvieFromWillWatch}=this.props;
     return (<div className="card">
              <img className="card-img-top"
              src={`https://image.tmdb.org/t/p/w500$ {muvie.backdrop_path ||
              muvie.poster_path}`} alt="No Foto"/>
              <div className="card-body">
                  <h6 className="card-title">{muvie.title}</h6>
                 <div className="d-flex justify-content-between align-items-center">
                     <p className="mb-0">Rating: {muvie.vote_average}</p>
                     {this.state.WillWatch ? (
                         <button type="button" className="btn btn-success" 
                         onClick={ () => {this.setState ({WillWatch: false});
                         removeMuvieFromWillWatch.bind(null,muvie)}}>
                         Remove Will Watch
                         </button>    
                     ) : (
                        <button type="button" className="btn btn-secondary" 
                        onClick={ ()=> {this.setState ({willWatch: true});
                        addMuvieToWillWatch(muvie)}}>
                        Add Will Watch
                        </button>      
                     )}
                     
                  </div>
                     <button onClick={removeMuvie.bind(null, muvie)}>
                        Delete muvie
                     </button>
               </div>     
            </div>
     );
   }
}

export default MuvieItem;
