import React from 'react';
import ToDoList from '../ToDoList';
import AddTask from '../AddTask';
import Footer from "../Footer";
import { BrowserRouter , Route , Switch  } from "react-router-dom";
import initialData from '../../constants/task';
import  uniqueid  from  "uniqueid";

class App extends React.Component {
    state = {
      tasks : initialData  
    }
    onTaskCompleted =  (taskId) => {
      let task = initialData.find( (item) => item.id  === taskId  );
      task.completed = !task.completed ; 
      this.setState(  
         prevState => (
          prevState.tasks.map((item) => {
            return (item.id === taskId ? task : item) ;
          })
        )
     )
      

    }
    onAddTask = (newAddTask) => { 
          let newTask   =  {
              id :  uniqueid(),
              name : newAddTask , 
              completed  :   false  
          }
          this.setState ( prevState =>  (
            {
              tasks : [...prevState.tasks ,  newTask]
              
            }
          )

      )

    }   

    render(){
      return (
        <section id="todo">
            <BrowserRouter>
              <Switch>
                <Route  path="/add-task"  render={ (props) => ( <AddTask {...props}  onAddTask = {this.onAddTask}  /> )  } />
                <Route  path="/:filter?"   render={(props) => ( <ToDoList   {...props} tasks={this.state.tasks}  onTaskCompleted = {this.onTaskCompleted} />) }  />
              </Switch>
            
            <Footer />
            </BrowserRouter>
        </section>
      )
    };
  
  }
  export default App; 