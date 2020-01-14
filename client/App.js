import React from "react"; // i
import List from "./List.js";
import InputComponent from "./InputComponent";
import axios from 'axios'; // importing axios 

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: " ",
            groceryList: ["apples", "grapes", "peaches", "avocados", "watermelon"]
        }
        this.handleChange = this.handleChange.bind(this); // binding handleChange 
        this.clicked = this.clicked.bind(this);
        //this.getGroceries = this.getGroceries.bind(this);
    }

    componentDidMount() { // when the page first loads, functions will be executed. 
        this.getGroceries()
    }

    getGroceries() {
        let tempList = this.state.groceryList
        //console.log(this.state.groceryList)
        axios.get('/getGroceries') // anoter way to use get methods
        .then(response => {
            //console.log(this.state.groceryList)
            //let temp2 = tempList.concat(response.data)// from the server response
            //console.log(response.data);
            this.setState({
                groceryList: tempList.concat(response.data) // this is the new list we just created
            })
        })
        .catch(function (error) {
            console.log(error);
        });
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

/*
    You can't directly modify state, so we have to use concat instead of push on line 28
*/