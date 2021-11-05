import React from 'react';
import {
    View, 
    Text, 
    SafeAreaView, 
    TouchableOpacity, 
    Image, 
    StyleSheet, 
    ScrollView} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import colours from '../consts/colours';
import bikes from '../consts/bikes';

function Detailed({navigation, route}) {
    const bike = route.params;
    return (
          <SafeAreaView style={{flex: 1, backgroundColor: 'colours.white'}}>
              <TouchableOpacity
              onPress={() => {
                navigation.navigate("Cart");   
              }} 
              
              style={styles.header}>
              <AntDesign name="shoppingcart" size={28} color="black" />
              </TouchableOpacity>
              <View style={styles.imageContainer}>
                  <Image source={bikes.img} style={{resizeMode: 'contain', flex: 1,}}/>
              </View>
              <ScrollView style={styles.detailsContainer}>
                  <View style={{
                            marginleft: 29,
                            flexDirection: 'row',
                            alignItems: 'flex-end',
                            }}>
                            <View style={styles.line}/>
                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                                No. 1 Choice
                            </Text>
                             
                  </View>
                <View style={{
                      marginLeft: 10,
                      marginRight: 10,
                      marginTop: 10, 
                      flexDirection: 'row', 
                      justifyContent: 'center', 
                      alignItems: 'center'
                      }}>
                          <Text style={{fontSize: 22, fontWeight: 'bold'}}>
                              {bikes.name}
                          </Text>
                          <View style={styles.priceTag}>
                              <Text style={{fontWeight: 'bold', fontSize: 16}}>${bikes.price}</Text>
                          </View>
                </View>
                <View style={{marginLeft: 5, marginTop: 10}}>
                    <Text style={{fontSize:22, fontWeight: 'bold'}}>About</Text>
                    <Text style={{
                            color: 'grey', 
                            fontSize: 16, 
                            lineHeight: 22, 
                            marginTop: 10,}}>{bikes.about}
                            </Text>
                        <View style={{marginTop: 20, flexDirection: 'row', justifyContent: 'space-between',}}>
                            <View style={{alignItems: 'center', flexDirection: 'row'}}>
                                <TouchableOpacity style={styles.borderBtn}>
                                    <Text style={styles.borderBtnText}>-</Text>
                                </TouchableOpacity>
                                <Text style={{fontSize: 20, marginHorizontal: 10, fontWeight: 'bold'}}>1</Text>
                                <TouchableOpacity style={styles.borderBtn}>
                                    <Text style={styles.borderBtnText}>+</Text>
                                </TouchableOpacity>
                                
                            </View>
                            <TouchableOpacity 
                            onPress={() => {
                                navigation.navigate("Checkout");
                              }} 
                            style={styles.buyBtn}>
                                <Text style={{fontSize: 18, fontWeight: 'bold'}}>BUY</Text>
                            </TouchableOpacity>
                        </View>
                </View>
              </ScrollView>
          </SafeAreaView>
       
    );
}
const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 20,
        marginTop: 20,
       alignItems: 'flex-end' 
    },

    imageContainer: {
        flex: 0.45,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

    detailsContainer: {
        flex: 0.55,
        backgroundColor: '#eedae466',
        marginHorizontal: 7,
        marginBottom: 7,
        borderRadius: 20,
        marginTop: 30,
        paddingTop: 15,
    },

    line: {
        width: 25,
        height: 2,
        backgroundColor: 'black',
        marginBottom: 5,
        marginRight: 3,
    },

    priceTag: {
        backgroundColor: 'orange',
        height: 40,
        width: 80,
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
        justifyContent: 'center',
        marginLeft: 178,
        paddingLeft: 10,
    },

    borderBtn: {
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 15,
        height: 30,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },

    borderBtnText: {
        fontSize: 28,
        fontWeight: 'bold',
    },

    buyBtn: {
        width: 150,
        height: 40,
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
    }
})
export default Detailed;