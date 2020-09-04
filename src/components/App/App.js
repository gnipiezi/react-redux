import React from 'react';
import ToDoList from '../ToDoList';
import Footer from "../Footer";
class App extends React.Component {
    render(){
      return (
        <section id="todo">
            <h1 className="m-3">Liste de tâches</h1>
            <ToDoList />
            <Footer />
        </section>
      )
    };
  
  }
  export default App; 