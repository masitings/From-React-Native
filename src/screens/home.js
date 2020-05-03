import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container, Header, Body, Title, Content, List, ListItem } from 'native-base';
import ListDataItem from '../components/list_item';

export class HomeScreen extends Component {
    constructor(props){
        super(props);
        this.items = [
            {
                youtube_id: 'YgXgp5kn_NY',
                name: 'Old Vs New Bollywood Mashup Songs 2020 Hindi Songs May Indian Romantic Mashup 9039s Bollywood Songs',
                author: 'Bollywood Mashup',
                release_date: '3 Mei 2020'
            },
            {
                youtube_id: 'YgXgp5kn_NY',
                name: 'Old Vs New Bollywood Mashup Songs 2020 Hindi Songs May Indian Romantic Mashup 9039s Bollywood Songs',
                author: 'Bollywood Mashup',
                release_date: '3 Mei 2020'
            },
            {
                youtube_id: 'YgXgp5kn_NY',
                name: 'Old Vs New Bollywood Mashup Songs 2020 Hindi Songs May Indian Romantic Mashup 9039s Bollywood Songs',
                author: 'Bollywood Mashup',
                release_date: '3 Mei 2020'
            },
            {
                youtube_id: 'YgXgp5kn_NY',
                name: 'Old Vs New Bollywood Mashup Songs 2020 Hindi Songs May Indian Romantic Mashup 9039s Bollywood Songs',
                author: 'Bollywood Mashup',
                release_date: '3 Mei 2020'
            },
            {
                youtube_id: 'YgXgp5kn_NY',
                name: 'Old Vs New Bollywood Mashup Songs 2020 Hindi Songs May Indian Romantic Mashup 9039s Bollywood Songs',
                author: 'Bollywood Mashup',
                release_date: '3 Mei 2020'
            },
            {
                youtube_id: 'YgXgp5kn_NY',
                name: 'Old Vs New Bollywood Mashup Songs 2020 Hindi Songs May Indian Romantic Mashup 9039s Bollywood Songs',
                author: 'Bollywood Mashup',
                release_date: '3 Mei 2020'
            },
            {
                youtube_id: 'YgXgp5kn_NY',
                name: 'Old Vs New Bollywood Mashup Songs 2020 Hindi Songs May Indian Romantic Mashup 9039s Bollywood Songs',
                author: 'Bollywood Mashup',
                release_date: '3 Mei 2020'
            },
            {
                youtube_id: 'YgXgp5kn_NY',
                name: 'Old Vs New Bollywood Mashup Songs 2020 Hindi Songs May Indian Romantic Mashup 9039s Bollywood Songs',
                author: 'Bollywood Mashup',
                release_date: '3 Mei 2020'
            }
        ];
    }

    render(){
        return (
            <Container>
                <Header>
                    <Body>
                        <Title>Video Apps</Title>
                    </Body>
                </Header>
                <Content padder={false}>
                    <List 
                    dataArray={this.items} 
                    renderRow={(item) => {
                        return (
                            <ListItem>
                                <ListDataItem data={item} />
                            </ListItem>
                        )
                    }}/>
                </Content>
            </Container>
        );
    }

}