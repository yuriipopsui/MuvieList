import React from "react"

const MuvieItem = props => {
        const {muvie, removeMuvie, addMuvieToWillWatch}=props;
    return <div className="card-body">
            <img className="card-img-top"
              src={`https://image.tmdb.org/t/p/w500$ {muvie.backdrop_path ||
              muvie.poster_path}`} alt="No Foto"/>
                <h6 className="card-title">{muvie.title}</h6>
                <div className="d-flex justify-content-between align-items-center">
                        <p className="nb-0">Rating: {muvie.vote_average}</p>
                        <button type="button" className="btn btn-secondary" 
                        onClick={addMuvieToWillWatch.bind(null, muvie)}>
                                Will Watch
                        </button>
                </div>
               <button onClick={removeMuvie.bind(this, props.muvie)}>
                       Delete muvie
               </button>
            </div>
}
export default MuvieItem;
