import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from "@expo/vector-icons";

function About(props) {
    return (
        <View>
            <View style={{flexDirection: 'row'}}>
                <Image source={require('../assets/img5.png')} 
                style={{borderRadius: 2000, 
                height: 100, 
                width: 100, 
                marginTop: 15, 
                marginLeft: 10 }}/>
                <Text style={{fontSize: 40, 
                    fontWeight: 'bold', 
                    color: 'dodgerblue', 
                    alignSelf: 'center', 
                    marginLeft: 30, 
                    marginTop: 70, }}
                    >
                    Biography
                </Text>
            </View>

        <View style={{height: 335, width: 340, backgroundColor: 'grey', marginTop: 10, marginLeft: 10, marginRight:10, borderWidth: 0.5,
        borderRadius: 10,}}>
            <Text style={{padding: 10, color: 'white', fontSize:14}}>
                    Welcome to MyBike shop. Home of quality Bikes!!!
            </Text>
            <View style={{ marginTop:10, flexDirection: 'row', marginBottom: 10}}>
      <TouchableOpacity
        style={{
          padding: 2,
          paddingHorizontal: 15,
          marginTop: 3,
          alignItems: "center",
          borderRadius: 10,
          flexDirection: "row",
          backgroundColor: "orange",
          marginRight: 5,
          
        }}
      >
        <AntDesign name="google" size={24} color="black" />
        <Text style={{ paddingLeft: 6, color: "black", fontSize:11 }}>kseidu005@st.ug.edu.gh</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          padding: 10,
          paddingHorizontal: 35,
          marginTop: 3,
          alignItems: "center",
          borderRadius: 10,
          flexDirection: "row",
          backgroundColor: "black",
        }}
      >
        <AntDesign name="github" size={24} color="white" />
        <Text style={{ paddingLeft: 10, color: "white", fontSize:11}}>KamileSeidu</Text>
      </TouchableOpacity>
      </View>
        </View>

        </View>
    );
}

export default About;