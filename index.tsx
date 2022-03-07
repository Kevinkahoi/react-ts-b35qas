import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Nav from './Nav';
import './style.css';
import Footer from './Footer';
import Body from './Body';


const Apppp = 
fetch('http://example.com/movies.json')
 .then(response => response.json())
 .then(data => console.log(data))



interface AppProps { }
interface AppState {
  name: string;
}



class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'World'
    };
  }

  render() {
    return (
      <div>
        <Nav />
   
        <Hello name={this.state.name} />
        <p>
        </p>
        <Footer />


<Body/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
