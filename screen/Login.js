import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import {formik} from 'formik';

export default function Login(params) {
  const navigation = params.navigation;
  return (
    <View
      style={{
        backgroundColor: "yellow",
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        style={{
          transform: [{ rotate: "360deg" }],
          borderRadius: 20,
          marginBottom: 60,
          width: 100,
          height: 100,
        }}
        source={{
          uri: "https://media.istockphoto.com/photos/bicycle-logos-picture-id172194126?s=612x612",
        }}
      />
      <Text style={{ fontSize: 20, color: "black", fontFamily: " cursive" }}>Welcome to</Text>
      <Text style={{ fontSize: 30, fontWeight: "bold", fontFamily: "Times New Roman" }}>MyBike Online Shop</Text>
      <Text style={{ fontSize: 20, color: "purple", fontWeight:"light",}}>Account Login</Text>
      
      { <View style={{marginTop: 10,marginBottom: 10,}}>
        <TextInput
          style={{
            padding: 15,
            borderRadius: 5,
            borderWidth: 0.7,
            paddingHorizontal: 70,
            paddingLeft: 20,
          }}
          placeholder="Enter your Email"
        />
      </View> }
      { <View style={{ marginTop: 10,}}>
        <TextInput
          secureTextEntry={true}
          onChangeText={(
            e
          )=> {
            console.log(e)
          }}
          style={{
            padding: 15,
            borderRadius: 5,
            borderWidth: 0.7,
            paddingHorizontal: 50,
            paddingLeft: 20,
          }}
          placeholder="Enter your password"
        />
      </View> }
      <TouchableOpacity 
        onPress={() => {
          navigation.navigate("Home");
        }}
        style={{
          padding: 15,
          paddingHorizontal: 80,
          marginTop: 10,
          alignItems: "center",
          borderRadius: 5,
          flexDirection: "row",
          backgroundColor: "green"
          
        }}
      >
        
        <Text style={{ paddingLeft: 10, color: "black", fontSize: "15" }}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}