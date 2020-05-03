import React, { PureComponent } from 'react';
import { TouchableOpacity } from 'react-native';
import { Body,Text,Thumbnail,View } from 'native-base';

export default class ListDataItem extends PureComponent {
    constructor(props){
        super(props);
        // this data berarti list_index.js ini harus memiliki data untuk dilempar.
        this.data = props.data;
    }

    render() {
        return (
            <TouchableOpacity style={{flexDirection: 'row'}} activeOpacity={0.5}>
                <Thumbnail style={{ backgroundColor: '#eee', alignSelf: 'center' }} square large source={{ cache: 'force-cache', uri: 'https://img.youtube.com/vi/' + this.data.youtube_id +'/hqdefault.jpg' }} />
                <Body>
                    <Text style={{ fontFamily: 'RobotoSlab', fontSize: 16 }} numberOfLines={2}>{this.data.name}</Text>
                    <View style={{flex: 1, flexDirection: 'row', marginTop: 8, marginLeft: 8}}>
                        <Text note>{this.data.author}</Text>
                        <Text note> | </Text>
                        <Text note>{this.data.release_date}</Text>
                    </View>
                </Body>
            </TouchableOpacity>
        )
    }
}