import React, { Component } from 'react';
import axios from "axios"
class App3 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            persons:[]
         }
    }
    
    componentDidMount (){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response =>{
            console.log(response);
            this.setState({persons:response.data})
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() { 
        return ( 
          <main>
              <table>
              <article className="App3">
                  {this.state.persons.map(person => (
                      <tr key={person.id}>
                        <td>{person.id}</td>
                         <td>{person.name}</td>
                         <td>{person.username}</td>
                         <td>{person.address.city}</td>
                         <td>{person.company.name}</td>
                         <td>{person.email}</td>
                         <td>{person.company.catchPhrase}</td>
                      </tr>
                  ))}
                 </article>
              </table>
          </main>
         );
    }
}
 
export default App3;