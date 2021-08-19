import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const ItemObjetive = ({item, handleDelete}) => {
    
    const navigation = useNavigation()
    
    return (
        <View style={styles.itemContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('CrearObjetive', { id: item._id })}>
                <Text style={styles.itemTitle}>{item.nombre_objetivo}</Text>
                <Text style={styles.itemTitle}>ciclos: {item.cantidad_ciclos}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{backgroundColor: "#ee5253", padding: 7, borderRadius: 5}}
                onPress={() => handleDelete(item._id)}>
                <Text style={{color: '#fff'}}>Eliminar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: "#333333",
        padding: 20,
        marginVertical: 8,
        borderRadius: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    itemTitle: {
        color: "#ffffff"
    }
})

export default ItemObjetive
