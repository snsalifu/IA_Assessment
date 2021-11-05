import React from "react";
import { 
    StyleSheet, 
    View, 
    Image, 
    Text, 
    SafeAreaView, 
    TextInput, 
    TouchableOpacity, 
    Dimensions, 
    FlatList,
    Alert,
    Button
    } from "react-native";
import { Ionicons, FontAwesome, AntDesign, Icon } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons';
import colours from '../consts/colours';
import bikes from '../consts/bikes';

const width = Dimensions.get('screen').width/2-30;

const showAlert = () =>
        Alert.alert(
            "Alert",
            "Added Succesful",
            [
            {
                text: "ok",
                style: "cancel",
            },
            ],
            {
            cancelable: true,
            // onDismiss: () =>
            //     Alert.alert(
            //     "opps"
            //     ),
            }
        );

export default function Home(params) {
    const navigation = params.navigation;
    const categories = ['BIKES', 'BICYCLE'];

    const [catergoryIndex, setCategoryIndex] = React.useState(0);

    

    const CategoryList = () => {
        return (
            <View style={styles.categoryContainer}>
                {categories.map((item, index)=>(
                <TouchableOpacity  key={index} onPress={()=>setCategoryIndex(index)}>
                  <Text 
                  style={[styles.categoryText, catergoryIndex == index && styles.categoryTextSelected]}>
                      {item}
                  </Text>
                  </TouchableOpacity>
                  ))}
            </View>
        );
    };
    const Card = ({bike}) => {
       return (
            <TouchableOpacity 
                activeOpacity={0.8}
                onPress={() => {
                navigation.navigate("Detailed", bike);}}
                >
            <View style = {styles.card}>
        <View style={{alignItems: 'flex-end'}}>
            <View style=
                {{width: 30, 
                    height: 30,
                    borderRadius: 15,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: bike.like
                 ? 'rgba(2, 42, 42, 0.2)' 
                 : 'rgba(0,0,0,0.2)',}}>
                <MaterialIcons 
                name="favorite" 
                size={18} 
                color={bike.like ? colours.red : colours.dark} />
             </View>
            </View>   
            <View style={{height: 100, alighItems: 'center'}}>
                <Image
                    source={bike.img}
                    style={{resizeMode: 'contain', width: 100, 
                    height: 100, marginLeft: 15, marginTop: 10,}} 
                />
        </View>
                <Text 
                    style={{fontSize: 16, 
                    fontWeight: 'bold', 
                    marginTop: 10}}>{bike.name}
                </Text>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 5,
            }}>
                <Text style={{fontSize: 19, paddingRight: 30, fontWeight: 'bold'}}>${bike.price}</Text>
            {/* <TouchableOpacity 
            style={{
                    height: 25,
                    width: 25,
                    backgroundColor: 'orange',
                    borderRadius: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    onPress={() => {showAlert}}
            
                <Text style={{fontSize: 24, fontWeight: 'bold'}}>+</Text>
                
            </TouchableOpacity> */}
            <View style={styles.container}>
                <Button title="+" color='orange' onPress={showAlert} />
            </View>
            </View>
       </View>
       </TouchableOpacity>
       );
    };
  return (
    <SafeAreaView 
    style={{flex: 1, 
            paddingHorizontal:20,
            backgroundColor: colours.white,}}>
        <View style={styles.header}>
            
                <Text style={{fontSize:32, fontWeight: 'bold', color: colours.green}}>MyBikes</Text>
                <TouchableOpacity
                onPress={() => {
                    navigation.navigate("Menu");
                  }} 
                >
                    <View style={styles.menuContainer}>
                        <Text style={{fontSize: 25, color: 'white', fontWeight: 'bold', marginLeft: 5}}>Menu</Text>
                    </View>
                    </TouchableOpacity>
            
        </View>
            <TouchableOpacity onPress={() => {
                navigation.navigate("Cart");
              }} 
              style={{ 
                alignSelf: "center",
                marginTop: 5,
                height: 30,
                width: 50,
                backgroundColor:'grey',
                borderWidth: 0.5,
                borderRadius: 15,}}
              >
                <AntDesign name="shoppingcart" size={28} color="black" style={{paddingLeft: 8}} />
            </TouchableOpacity>
        <View style={{marginTop: 15, flexDirection: 'row'}}>
         <View style={styles.searchContainer}>
            <AntDesign name="search1" size={24} color="black" />
            <TextInput placeholder='Search' style={styles.search}/>
         </View>
        <View style={styles.sortbutton}>
        <MaterialIcons name="sort" size={24} color="black" />
        </View>
            </View> 
        <CategoryList/>
        <FlatList 
        columnWrapperStyle={{justifyContent: 'space-between'}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 50,
        }} 
        numColumns={2} 
        data={bikes} 
        renderItem={({item})=> {
        return <Card bike={item} />;
        }}
        />
    </SafeAreaView>
 )

        // onClickAddCart(data)
        // {
        //     const itemcart = {
        //         bike:data,
        //         quantity: 1,
        //         price:data.price,
        
        //     }
        
        //     AsyncStorage.getItem('cart').then((datacart)=>{
        //         if (datacart!==null) {
        //             const cart = JSON.parse(datacart)
        //             cart.push(datacart)
        //             AsyncStorage.setItem('cart',JSON.stringify(cart))
        
        //         }
        //         else{
        //             const cart = []
        //             cart.push(itemcart)
        //             AsyncStorage.setItem('cart',JSON.stringify(cart))
        //         }
        //         alert('Added Successfully')
        
        //     })
        
        //     .catch((error)=>{
        //         alert(error)
        //     })
        // }
};


const styles = StyleSheet.create({
 header: {
     marginTop: 30,
     flexDirection: 'row',
     justifyContent: 'space-between',
 },
 searchContainer: {
     height: 50,
     backgroundColor: colours.light,
     borderRadius: 10,
     flex: 1,
     flexDirection: 'row',
     alignItems: 'center',
 },
 search: {
     fontSize: 18,
     fontWeight: 'bold',
     color: colours.dark,
     flex: 1
 },

 sortbutton: {
     marginLeft: 10,
     height: 50,
     width: 50,
     backgroundColor: "orange",
     justifyContent: "center",
     alignItems: "center",
     borderRadius: 15,
 },
 categoryContainer: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  categoryText: {
      fontSize: 20,
      color: 'grey',
      fontWeight: 'bold'
  },
  categoryTextSelected:{
      color: 'orange',
      paddingBottom: 5,
      borderBottomWidth: 2,
      borderColor: 'orange',
  },
  card: {
      height: 225,
      backgroundColor: colours.light,
      width,
      marginHorizontal: 2,
      borderRadius: 10,
      marginBottom: 20,
      padding: 15,
  },
  container: {
    height: 35,
    width: 50,
    justifyContent: "center",
    alignItems: "center"
  },

  menuContainer: {
    height: 40,
    width: 70,
    borderWidth: 0.5,
    borderRadius: 10,
    alignSelf: 'stretch',
    backgroundColor: 'green',
  }
  

})
