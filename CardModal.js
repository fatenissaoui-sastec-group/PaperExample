import React, {Component} from 'react';
import {Avatar, Button, Card, Title, Paragraph , Text,FAB}from 'react-native-paper';
import {Image, StyleSheet, View , Dimensions, Platform, PixelRatio } from 'react-native';

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320;

export function actuatedNormalize(size) {
    const newSize = size * scale
    if (Platform.OS === 'ios'||Platform.OS==='android') {
        return Math.round(PixelRatio.roundToNearestPixel(newSize))
    } else {
        return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
    }}

const LeftContent = props => <Avatar.Icon {...props} icon="folder"/>

export default class CardModal extends Component {




    render() {


        return (
            <Card>

                {/*<Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />*/}
                <Card.Content>


                    <View style={styles.container}>
                        <View>
                            <Image
                                source={{uri: "https://back.integrationv2.karma.jobs" + this.props.item.metier.image}}
                                style={{
                                    height: 153,
                                    width: 136,
                                    borderTopLeftRadius: 25,
                                    borderBottomLeftRadius: 25,

                                }}/></View>
                        <View  style={styles.container_H} >


                            <Text style={{flex: 1}}>  {this.props.item.metier.masculin_sing}   </Text>
                            <View style={styles.container} >
                                <Image source={require('./assets/Group6.png')}></Image>
                                <Image source={require('./assets/Group6.png')}></Image>
                                <Image source={require('./assets/Group6.png')}></Image>

                                </View>
                            <View style={styles.container} >
                                  <Button style={styles.btn_round} mode="contained" color="#3B69B6">Détails</Button>
                                  <Button style={styles.btn_round} mode="outlined" color="#3B69B6"> Éditer</Button>
                            </View>

                        </View>

                    </View>

                </Card.Content>

            </Card>

        );

    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding:5
    },
    container_H: {
        flex: 1,
        flexDirection: 'column',


    },
    btn_round: {
        borderRadius: 6,

        height:30,



        fontSize: 9,
        alignItems: 'center',
        textAlign: 'center'
    },
    card_title: {
        fontStyle: "normal",
        fontSize:actuatedNormalize(9),
        lineHeight: 14,
        color: "#3F3D56"
    },  fab: {

    },


});
