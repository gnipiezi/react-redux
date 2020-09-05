import React from 'react';
import ToDoList from '../ToDoList';
import AddTask from '../AddTask';
import Footer from "../Footer";
import { BrowserRouter , Route , Switch  } from "react-router-dom";
import initialData from '../../constants/task';
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

    render(){
      return (
        <section id="todo">
            <BrowserRouter>
              <Switch>
                <Route  path="/add-task" component={AddTask}  />
                <Route  path="/:filter?"   render={(props) => ( <ToDoList   {...props} tasks={initialData}  onTaskCompleted = {this.onTaskCompleted} />) }  />
              </Switch>
            
            <Footer />
            </BrowserRouter>
        </section>
      )
    };
  
  }
  export default App; 