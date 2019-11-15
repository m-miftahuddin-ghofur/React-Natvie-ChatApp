import React,{useState,useEffect} from 'react'
import { StyleSheet, Platform, Image, Text, View,TouchableOpacity , TouchableHighlight } from 'react-native'
import * as firebase from 'firebase';
// import { TouchableOpacity } from 'react-native-gesture-handler';


const Profile = () => {
    const [data,setData] = useState({email:'',displayName:''});

    useEffect(()=>{
        const {email,displayName} = firebase.auth().currentUser;

        setData({email,displayName});
    },[])

  
    const signOutUser = () => {
        firebase.auth().signOut();
    }

    return (
      <View style={styles.container}>
      <View style={styles.header}></View>
      <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <Text style={styles.name}>{data.displayName}</Text>
          
          <TouchableOpacity style={styles.buttonContainer}>
            <Text>Edit</Text>  
          </TouchableOpacity>              
          <TouchableOpacity style={styles.buttonContainer, styles.logout} onPress={signOutUser}>
            <Text>Log Out</Text> 
          </TouchableOpacity>
        </View>
    </View>
  </View>
    )
}

export default Profile; 

const styles = StyleSheet.create({
    header:{
      backgroundColor: "#00AFF0",
      height:200,
    },
    avatar: {
      width: 130,
      height: 130,
      borderRadius: 63,
      borderWidth: 4,
      borderColor: "white",
      marginBottom:10,
      alignSelf:'center',
      position: 'absolute',
      marginTop:130
    },
    name:{
      fontSize:22,
      color:"#FFFFFF",
      fontWeight:'600',
    },
    body:{
      marginTop:40,
    },
    bodyContent: {
      flex: 1,
      alignItems: 'center',
      padding:30,
    },
    name:{
      fontSize:28,
      color: "#696969",
      fontWeight: "600"
    },
    info:{
      fontSize:16,
      color: "#00BFFF",
      marginTop:10
    },
    description:{
      fontSize:16,
      color: "#696969",
      marginTop:10,
      textAlign: 'center'
    },
    buttonContainer: {
      marginTop:10,
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:250,
      borderRadius:30,
      backgroundColor: "#00BFFF",
    },
    logout : {
      marginTop:10,
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:250,
      borderRadius:30,
      backgroundColor: "#f04343",
    }
  });
   
  