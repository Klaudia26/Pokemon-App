import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Home from './Containers/Home';
import Pokedex from './Containers/Pokedex';
import 'semantic-ui-css/semantic.min.css';
import './style/style.scss';

class App extends React.Component {


    render() {
        return (
            <Container>
                <Router>
                    <Route exact path="/" component={Home} />
                    <Route path="/pokedex" component={Pokedex} />
                    <Route path="/pokedex/:pokemnId" component={Pokedex} />
                </Router>
            </Container>
        )
    }
}

export default App;


// componentDidMount() {
//     fetch(`https://pokeapi.co/api/v2/pokemon`)
//         .then(response => {
//             if (response.ok) {
//                 return response.json();
//             } else {
//                 throw new Error('Something went wrong')
//             }
//         })
//         .then(response => this.setState({
//             pokemon: response.results,
//             error: "",
//         }))
//         .catch(error => this.setState({
//             pokemon: [],
//             error: error.message
//         }))
// }
