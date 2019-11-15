import React from 'react';
import { SafeAreaView, View, Text, StyleSheet ,Dimensions,Image, ImageBackground, TouchableOpacity} from 'react-native';
import { TextInput, FlatList } from 'react-native-gesture-handler';
import * as firebase from 'firebase';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default class ChatPrivate extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('name', null)
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            person: {
                name: props.navigation.getParam('name'),
                email: props.navigation.getParam('email'),

            },
            textMessage: '',
            displayName: '',
            senderEmail: '',
            messageList: []

        }
    }

    componentDidMount() {
        const { email, displayName, uid } = firebase.auth().currentUser;
        this.setState({ senderEmail: email, displayName, uid });
        
        firebase.database().ref ('messages').child(displayName).child(this.state.person.name)
        .on('child_added', (value) => {
            this.setState((prevState) => {
                return {
                    messageList: [...prevState.messageList, value.val()]
                }
            })
        })
    }

    handleChange = key => val => {
        this.setState({ [key]: val })
    }

    convertTime = (time) => {
        let d = new Date(time);
        let c = new Date();
        let result = (d.getHours() < 10? '0': '') + d.getHours() + ':';
        result += (d.getMinutes() < 10? '0': '') + d.getMinutes();
        if(c.getDay() !== d.getDay()){
            result = d.getDay()+ '' + d.getMonth()+ '' +result;
        }
        return result;
    }

    sendMessage = async () => {
        if (this.state.textMessage.length > 0) {
            let msgId = firebase.database().ref('message').child(this.state.displayName).child(this.state.person.name).push().key;
            let updates = {};
            let message = {
                message: this.state.textMessage,
                time: firebase.database.ServerValue.TIMESTAMP,
                from: this.state.displayName,
            }
            updates['messages/' + this.state.displayName + '/' + this.state.person.name + '/' + msgId] = message
            updates['messages/' + this.state.person.name + '/' + this.state.displayName + '/' + msgId] = message
            firebase.database().ref().update(updates);
            this.setState({ textMessage: '' });
        } 
       
    }

    renderRow=({item})=> {
        return (
            <View 
                style={{
                    flexDirection:'row',
                    justifyContent: 'space-between',
                    flex: 1,
                    width:'60%',
                    alignSelf: item.from === this.state.displayName ? 'flex-end' : 'flex-start',
                    backgroundColor: item.from === this.state.displayName ? '#80b3ff' : 'white',
                    borderRadius: 7,
                    marginBottom : 10,
                }}
                
            >
                <Text style={{color:'black', padding:7, fontSize:16}}>
                    {item.message}
                </Text>
                <Text style={{color:'#141439', padding: 3 , fontSize:12, marginRight: 3  }}>
                {this.convertTime(item.time)}
                </Text>
            </View>
        )
    }
    render() {
        let {height, width}= Dimensions.get('window');
        const styles = useStyle;
        return (
            <ImageBackground source={require('../Assets/background_chat.png')} style={{width: '100%', height: '100%'}}>
                <SafeAreaView >
                <FlatList 
                
                style={{padding:10, height: height * 0.9 , }}
                    data={this.state.messageList}
                    renderItem={this.renderRow}
                    keyExtractor={(item,index)=>index.toString()}
                >

                </FlatList>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TextInput
                        returnKeyType='send'
                        style={styles.input}
                        value={this.state.textMessage}
                        onChangeText={this.handleChange('textMessage')}
                    />
                    <TouchableOpacity onPress={this.sendMessage}>
                        <Text style={styles.btnText}>
                        <Icon name="send" size={27}   />

                        </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
            </ImageBackground>
           
        )
    }
}

const useStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    input: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: 'white',
        width: '80%',
        marginBottom: 10,
        marginLeft: 10,
        borderRadius: 30,
    },
    btnText: {
        color: 'black',
        height: 48,
        width: 45,
        borderRadius: 30,
        // backgroundColor: '#3B5999',
        fontSize: 20,
        marginHorizontal: 17,
        marginTop: 5
    }
});