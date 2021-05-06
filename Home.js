import * as React from 'react';

import {Button, Paragraph, Dialog, Portal, List, Avatar, Card, Title, Text,} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
import {actuatedNormalize} from "./CardModal";

const Home = () => {
    const [expanded, setExpanded] = React.useState(true);

    const handlePress = () => setExpanded(!expanded);
    const [visible, setVisible] = React.useState(false);

    const showDialog = () => setVisible(true);
    const LeftContent = props => <Avatar.Icon {...props} icon="folder"/>
    const hideDialog = () => setVisible(false);
    return (
        <View style={{backgroundColor:"#FFF"}}>
            <Button style={styles.btn_round}  onPress={  showDialog}  mode="contained" color="#3B69B6">Détails</Button>


            <List.Section title="Accordions">
                <List.Accordion
                    title="Uncontrolled Accordion"
                    left={props => <List.Icon {...props} icon="folder"/>}>
                    <List.Item title="First item"/>
                    <List.Item title="Second item"/>
                </List.Accordion>


            </List.Section>
            <Card style={styles.container}>
                <View style={{}}>

                    <Card.Cover source={{uri: 'https://picsum.photos/700'}}/>


                    <Card.Actions style={styles.container_H}>
                        <Title>Strasbourg à la conquête de l’Europe </Title>
                        <Text>Apollo Immo - 13 Mars 2021</Text>
                        <Button style={styles.btn_round}  onPress={  showDialog}  mode="contained" color="#3B69B6">Plus de rapports -></Button>




                    </Card.Actions>
                </View>
            </Card>



            <Portal>
                <Dialog visible={visible} onDismiss={hideDialog}>
                    <Dialog.Title>Alert</Dialog.Title>
                    <Dialog.Content>
                        <Paragraph>This is simple dialog</Paragraph>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button  onPress={hideDialog}>Done</Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
        </View>
    );
};

export default Home;
const styles = StyleSheet.create({
    container: {
       flex: 1,
      flexDirection: 'row',
        padding: 5,

    },
    container_H: {
       flex: 1,
       flexDirection: 'column',
        textAlign: "left",
        alignItems: "flex-start",


    },
    btn_round: {
        borderRadius: 6,
        margin:5,
        height: 32,
        fontSize: 9,
        alignItems: 'center',
        textAlign: 'center'
    },
    card_title: {
        fontStyle: "normal",
        fontSize: actuatedNormalize(9),
        lineHeight: 14,
        color: "#3F3D56"
    }, fab: {},


});
