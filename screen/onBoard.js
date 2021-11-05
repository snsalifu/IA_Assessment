import React from 'react';
import {StyleSheet, SafeAreaView, Pressable} from 'react-native';
import colours from './../consts/colours';
const onBoard = () => {
    return (
    <SafeAreaView style={{flex:1}}>
        <StatusBar translucent backgroundColor={colours.transparent}/>
        <Image 
        source= {require('./../assets/bike5.jpg')}
        style={style.image}
        />
        <View style={style.indicatorContainer}>
            <View style={style.indicator}/>
            <View style={style.indicator}/>
            <View style={style.indicator, style.indicatorActive }/>
        </View>
        <View style={{paddingHorizontal: 20, paddingTop: 20}}></View>
            <View>
                <Text style={style.title}>Find your</Text>
                <Text style={style.title}>New bikes</Text>
            </View>
            <View style={{marginTop: 10}}> 
               
                <View style={{flex: 1, justifyContent: 'flex-end', paddingBottom: 40}} >
                    <Pressable onPress={() => navigation.navigate('Home')}>
                    <View style={style.btn }>
                        <Text style={{color:colours.white}}></Text>
                    </View>
                    </Pressable>
                </View>  
            </View>
    </SafeAreaView>

)};

const style = StyleSheet.create({
    image: {
        height: 420,
        width: "100%",
        borderBottomLeftRadius: 100,
    },
    indicatorContainer :{
        height: 20,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    indicator:{
        height: 3,
        width: 30,
        backgroundColor: colours.grey,
        marginHorizontal: 5,
    },
     
    indicatorActive: {
        backgroundColor: colours.dark,
    },

    title: {
        fontSize: 32,
        fontWeight: 'bold',
    },

    textStyle: {
        fontSize: 16,
        color: colours.grey,
    },

    btn: {
        height: 60,
        marginHorizontal: 20,
        backgroundColor: colours.dark,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',

    }
});
export default onBoard;