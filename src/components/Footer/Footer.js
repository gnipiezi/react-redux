import React from 'react';
import {FaListAlt , FaCheckSquare  , FaPlusSquare, FaTrash} from  "react-icons/fa";

class Footer extends React.Component {
    render(){
      return (
        <footer className="d-flex justify-content-between bg-secondary p-3" id="mainFooter">
            <div className="btn-group">
                <a href="#" className="btn btn-outline-dark bg-light"><FaListAlt /></a>
                <a href="#" className="btn btn-outline-dark bg-light"><FaCheckSquare /></a>
                <a href="#" className="btn btn-outline-dark bg-light"><FaPlusSquare /></a>
            </div>
                <a href="#" className="btn btn-outline-dark bg-light"><FaTrash /></a>
            
        </footer>
      )
    };
  
  }
  export  default Footer ;