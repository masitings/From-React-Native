import React, { Component } from 'react';
import { Text, View, ActivityIndicator, Alert } from 'react-native';
import { Container, Header, Body, Title, Content, List, ListItem } from 'native-base';
import ListDataItem from '../components/list_item';
import { getVideos } from '../services/video';

export class HomeScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            data: null,
            isError: false
        }
    }

    componentDidMount(){
        getVideos().then(data => {
            this.setState({
                isLoading: false,
                data: data
            })       
        }, error => {
            Alert.alert(JSON.stringify(error));
        })
    }

    render(){
        const view = this.state.isLoading ? (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <ActivityIndicator animating={this.state.isLoading} color="#00f0ff" />
                <Text style={{marginTop: 8}} children="Please Wait.." />
            </View>
        ) : (
            <List
            dataArray={this.state.data}
            renderRow={(item) => {
                return (
                    <ListItem>
                        <ListDataItem data={item} />
                    </ListItem>
                )
            }} />
        )

        return (
            <Container>
                <Header>
                    <Body>
                        <Title>Video Apps</Title>
                    </Body>
                </Header>
                <Content contentContainerStyle={{backgroundColor: '#fff'}} padder={false} children={view} />
            </Container>
        );
    }

}