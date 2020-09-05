import React  from  "react";

class ToDo extends React.Component{

     state = {
        completed  :  this.props.completed 
    }


  troggleSate  = () => {
        this.setState(  prevState => ({
            completed  : !prevState.completed
        }
        ))
        this.props.onTaskCompleted(this.props.id);
  }

    render()  {

            return(
            <li   className= {"list-group-item d-flex align-tiems-center " + ( this.state.completed  ? "bg-success" : null)   }>
                {this.props.name}
                <button  className={"btn btn-sm ml-auto " + (this.state.completed ? "btn-outline-success" : null  )   }  onClick={ () =>   this.troggleSate() }    >&#x2713;</button>
            </li>

            )
    
    
    }


}
export default ToDo;