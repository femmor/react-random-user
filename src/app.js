import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from "axios"
import {Provider} from 'react-redux'

import store from './store/store';
import { addUsers } from './actions/users';

// Components
import Header from "./components/Header"
import UsersList from "./components/UsersList"

class App extends Component {
    componentDidMount() {
      axios.get('http://localhost:3000/users')
      .then(response => {
          console.log(response.data)
        store.dispatch(addUsers(response.data.results))
      })
    }
    
    render() {
        return (
            <div>
                <Header/>
                <UsersList/>
            </div>
        )
    }
}

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));