import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const ItemObjetive = ({item, handleDelete}) => {
    return (
        <View style={styles.itemContainer}>
            <TouchableOpacity>
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
