import React, { Component } from 'react';
import { Header, Form, Input, Card, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Home extends Component {
    renderCards = () => {
        const cards = [
            { id: 0, title: 'pokedex', color: 'red' },
            { id: 1, title: 'abilities', color: 'yellow' },
            { id: 2, title: 'moves', color: 'olive' },
            { id: 3, title: 'items', color: 'green' },
            { id: 4, title: 'locations', color: 'purple' },
            { id: 5, title: 'type Charts', color: 'brown' }
        ];

        const cardsArray = cards.map(card => {
            return (
                <Card key={card.id} >
                    <Link to={card.title}>
                        <Segment inverted color={card.color}>
                            <Card.Content>
                                <Card.Header>{card.title}</Card.Header>
                            </Card.Content>
                        </Segment>
                    </Link>
                </Card>
            );
        });

        return cardsArray;
    }
    render() {
        return (
            <div className='home'>
                <Header as='h1' textAlign='center'>What pokemon are you looking for?</Header>
                <Form >
                    <Form.Field width={6} style={{ margin: 'auto' }}>
                        <Input inverted icon='search' placeholder='Search...' type='text' />
                    </Form.Field>
                </Form>
                <Card.Group itemsPerRow={2} >
                    {this.renderCards()}
                </Card.Group>


            </div>

        )
    }
}

export default Home;
