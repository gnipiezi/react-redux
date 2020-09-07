import React from 'react';
import ToDoList from '../ToDoList';
import AddTask from '../AddTask';
import Footer from "../Footer";
import { BrowserRouter , Route , Switch  } from "react-router-dom";
import initialData from '../../constants/task';
import  uniqueid  from  "uniqueid";
import Fetching from  "../Fetching";
class App extends React.Component {
    state = {
      tasks : [] ,
      fetching : true  
    }

    componentDidMount(){
      let  delay = Math.floor(Math.random() * 5000);
      setTimeout(() => {
        this.setState(prevState => (
          {
             tasks : initialData,
             fetching : false
          }
        ) )

      }, delay )

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
    onDeleteCompleted = ()  => {
        this.setState( (prevState) => {
          let filtered  =   prevState.tasks.filter( (item) => !item.completed  );
            return {
              tasks : filtered
            }
        } );
    }  

    render(){
      return (
        <section id="todo">
          {this.state.fetching ? <Fetching /> : null}
            <BrowserRouter>
              <Switch>
                <Route  path="/add-task"  render={ (props) => ( <AddTask {...props}  onAddTask = {this.onAddTask}  /> )  } />
                <Route  path="/:filter?"   render={(props) => ( <ToDoList   {...props} tasks={this.state.tasks}  onTaskCompleted = {this.onTaskCompleted} />) }  />
              </Switch>
            
            <Footer   onDeleteCompleted = {this.onDeleteCompleted} />
            </BrowserRouter>
        </section>
      )
    };
  
  }
  export default App; 