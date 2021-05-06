import React, {Component} from 'react';
import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import CardModal from "./CardModal";
export default class CardExample extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            isLoading: true
        };
    }

    componentDidMount() {
        fetch('https://back.integrationv2.karma.jobs/api/annonce/page?_limit=5&_page=1&_sort=date_creation&_order=DESC',{
            method: "GET",
            headers: {
                "access-control-allow-origin" : "*localhost/*",
                "Content-type": "application/json; charset=UTF-8"
            }})
            .then((response) => response.json())
            .then((json) => {
                this.setState({ data: json.annonces });
            })
            .catch((error) => console.error(error))
            .finally(() => {
                this.setState({ isLoading: false });
            });
    }


    render() {
        const { data, isLoading } = this.state;
        return (
            <View style={{ flex: 1, padding:1 }}>


                {isLoading ? <ActivityIndicator/> : (
                    <FlatList
                        data={data}
                        keyExtractor={({ id }, index) => index.toString()}
                        renderItem={({ item }) => (
                            <CardModal item={ item} ></CardModal>



                        )}
                    />
                )}
            </View>
        );
    }

}


