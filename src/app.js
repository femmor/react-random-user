import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from "axios"

class App extends Component {
    componentDidMount() {
      axios.get('http://localhost:3000/users')
      .then(response => {
        const result = response.data
        console.log(result)
      })
    }
    
    render() {
        return (
            <h1>Welcome to REACT!!</h1>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));