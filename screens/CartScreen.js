import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, StyleSheet, Text, View, Button, Image } from 'react-native';

const {width,height} = Dimensions.get("window")



const CartScreen=({route})=>{
    const [cart, setCart] = useState([])

    useEffect(()=>{
        const product = route.params?.product
        if(product && !cart.some((item)=>item.id ===product.id)) {
            setCart([...cart,product])
        }
    }, [route.params?.product])

    const placeOrder=()=>{
        alert('Ordder placed')
    }
    
    return(
        <View style={styles.container}>
            <FlatList
            data={cart}
            keyExtractor={(item)=>item.id}
            renderItem={({item})=>(
                <View style={styles.itemContainer}>
                    <Image source={{uri:item.image}} style={styles.image}/>
                    <Text style={styles.text}>{item.name}</Text>
                    <Text style={styles.text}>$ {item.price}</Text>
                </View>
            )}
            ListEmptyComponent={<Text>Your Cart is Empty</Text>}
           />
            <Button
                title="place order (COD)"
                onPress={placeOrder}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#fff",
        alignItems:"center",
    },
    itemContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        width: width*0.9,
        height: height*0.1,
        margin:10,
        padding:10,
        borderRadius:10,
        backgroundColor: "white",
        shadowColor:"#000",
        shadowOffset:{
            width:0,
            height:2,
        },
        shadowOpacity:0.25,
        shadowRadius:3.84,
        elevation:5,
    },
    image:{
        width:width*0.2,
        height: height *0.1,
        height:50,
        borderRadius:10,
    }
})

export default CartScreen