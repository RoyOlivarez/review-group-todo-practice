import React from "react";
import List from "./List.js";
import InputComponent from "./InputComponent";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: " ",
            groceryList: ["apples", "grapes", "peaches", "avocados", "watermelon"]
        }
        this.handleChange = this.handleChange.bind(this);
        this.clicked = this.clicked.bind(this);
    }

    handleChange(event) {
        this.setState({
          textInput: event.target.value,
        })
      }

      clicked() {
        var temp = this.state.groceryList;
        temp.push(this.state.textInput);
        this.setState({
          groceryList: temp,
          textInput: ''
        })
      }

    render() {
        return (
            <div>
                <h1>
                    Groceries
                </h1>
                <InputComponent 
                    handleChange={this.handleChange}
                    text={this.state.textInput} 
                    clicked={this.clicked}
                />
                <List
                    list={this.state.groceryList} 
                />
            </div>
        );
    };
}

export default App;