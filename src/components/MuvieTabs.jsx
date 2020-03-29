import React from "react";

const MuvieTabs = (props) => {
    const {sort_by, updateSortBy} = props;
    const handleClick = value => {
        return ()=> {
            updateSortBy(value);
        };
    };

    const getClassLink = value => {
      return `nav-link ${sort_by === value? "active" :""}`; 
    };
return (

<ul className="tabs nav nav-pills">
  <li className="nav-item">
    <div className={`nav-link ${
        sort_by === "popularity.desc" ? "active" : ""
    }`}
        onClick ={ handleClick("popularity.desc")}
    >
      Popularuty Desc
    </div>
  </li>
  <li className="nav-item">
    <div className={getClassLink("revenue.desc")}
      onClick ={ handleClick("revenue.desc")}
    >
      Revenue Desc
    </div>
  </li>
  <li className="nav-item">
    <div className={getClassLink("vote_average.desc")}
      onClick ={ handleClick("vote_average.desc")}
      >
      Vote Average Desc
    </div>
  </li>
</ul>
);



};

export default MuvieTabs;