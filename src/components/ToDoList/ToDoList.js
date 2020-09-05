import React from 'react';
import "./ToDoList.css"
import ToDo from './ToDo';
class ToDoList extends React.Component {
    render(){
        let filteredTask  ;
        switch  (this.props.match.params.filter) {
            case "completed" : 
                filteredTask = this.props.tasks.filter( (item) =>   (item.completed )   ) 
            break;
             default :
                filteredTask = this.props.tasks;
        }

        if(filteredTask.length === 0 ){
            return (
                <>
                <h1 className="m-3">Liste de tâches</h1>
                
                <ul className="list-group m-3">
        
                     <li > Aucune Tache  </li>
                  
    
                </ul>
                  </> 
            )
               
        }
        else{
            return (
                <>
                <h1 className="m-3">Liste de tâches</h1>
                
                <ul className="list-group m-3">
        
                     { filteredTask.map(item => (
    
                        <ToDo  {...item}  key={item.id} onTaskCompleted={this.props.onTaskCompleted} />
    
                    )  )}
                  
    
                </ul>
                  </> 
            )
        }

    }


    
}
export default ToDoList ;