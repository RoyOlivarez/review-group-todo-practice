import React from "react";
import List from "./List.js";
import InputComponent from "./InputComponent";
import axios from 'axios';

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

    componentDidMount() {
        this.getGroceries()
    }

    getGroceries() {
        let tempList = this.state.groceryList
        console.log(this.state.groceryList)
        axios.get('/getGroceries')
        .then(function (response) {
            //console.log(this.state.groceryList)
            let temp2 = tempList.push(response.data)// from the server response
            // console.log(response.data);
            this.setState({
                groceryList: temp2 // this is the new list we just created
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