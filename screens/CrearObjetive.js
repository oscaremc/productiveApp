import React, {useState} from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native'

import { saveObjetive } from "../api";
import CapaObjetive from "../components/CapaObjetive";

const CrearObjetive = ({navigation}) => {

    const [Objetive, setObjetive] = useState({
        nombre_objetivo:"",
        hora_planeada:"",
        tiempo_trabajo: 35,
        tiempo_descanso: 5,
        cantidad_ciclos: 2,
    })

    const handleSubmit = () => {
        saveObjetive(Objetive)
        console.log(Objetive)
        navigation.navigate('HomeScreen')
    }

    const handleChange = (name, value) => setObjetive({...Objetive, [name]: value});

    return (
        <CapaObjetive>
            <Text 
            style={styles.title}>
            Descripcion :</Text>
            <TextInput
            style={styles.Input}
            placeholder="Nombre de objetivo"
            placeholderTextColor= "#546574"
            onChangeText={(text) => handleChange('nombre_objetivo', text)}/>
            <Text
            style={styles.title}>
            Tiempo total:</Text>
            <TextInput 
            style={styles.Input}
            placeholder="00:00"
            placeholderTextColor= "#546574"
            onChangeText={(text) => handleChange('hora_planeada', text)}/>
            <TouchableOpacity style={styles.buttonSave}
            onPress={handleSubmit}>
                <Text style={styles.buttonText}>Guardar</Text>
            </TouchableOpacity>
        </CapaObjetive>
    )
}

const styles = StyleSheet.create({
    Input: {
        width: '90%',
        marginBottom: 7, 
        fontSize: 14, 
        borderWidth:1, 
        borderColor: "#10ac84",
        height: 35,
        color: '#ffffff',
        padding: 4, 
        textAlign: "center",
        borderRadius: 5
    },
    title: {
        color: '#ffffff',
        marginBottom: 10
    },
    buttonSave: {
        paddingTop: 10, 
        paddingBottom: 10, 
        borderRadius: 5, 
        marginBottom: 10, 
        backgroundColor: "#10ac84",
        width: '90%'
    },
    buttonText: {
        color: '#ffffff',
        textAlign: 'center'
    }
    
})

export default CrearObjetive


