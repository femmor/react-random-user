import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from "axios"

class App extends Component {
    componentDidMount() {
      axios.get('https://randomuser.me/users')
      .then(res => {
        console.log(res.data)
      })
    }
    
    render() {
        return (
            <h1>Welcome to REACT!!</h1>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));