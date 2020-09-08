import React from "react";
import {FaSpinner} from  "react-icons/fa";

class Fetching extends React.Component {
    render() {
        return (
            <div className="fetching">
                <FaSpinner className="spinner" />

            </div>

        )
    }


}
export default Fetching;