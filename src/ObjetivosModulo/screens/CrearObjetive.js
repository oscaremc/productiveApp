import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

import { saveObjetive, getObjeti, updateObjetive } from "../service/api";
import CapaObjetive from "../components/CapaObjetive";

const CrearObjetive = ({ navigation, route }) => {

    const [Objetive, setObjetive] = useState({
        nombre_objetivo:"",
        hora_planeada:"",
        tiempo_trabajo: 35,
        tiempo_descanso: 5,
        cantidad_ciclos: 2,
    })
    const [editing, setEditing] = useState(false);
    // const [isLoaded, setIsLoaded] = useState(false);
    
    const handleSubmit = async () => {
        try {
            if (!editing) {
                await saveObjetive(Objetive)
            } else {
                await updateObjetive(route.params.id, Objetive)
            }
            navigation.navigate('HomeScreen')
        } catch (error) {
            console.log(error)
        }
    }

    
    const handleChange = (name, value) => setObjetive({...Objetive, [name]: value});

    useEffect(() => {
        if (route.params && route.params.id) {
            navigation.setOptions({ headerTitle: "Editar Objetivos" });
            setEditing(true)
            console.log("ID OBJETIVO", route.params.id);
            getData(route.params.id);
        }
    }, []);

    getData = async (id) => {
        const Objetive = await getObjeti(id);
        setObjetive({ nombre_objetivo: Objetive.nombre_objetivo, hora_planeada: Objetive.hora_planeada });
        // setIsLoaded(true);
        console.log("RESPONSE");
        console.log(Objetive);
    }
    

    return (
        // <View style={styles.capaback}>
        //     { isLoaded &&
                <CapaObjetive>
                    <Text 
                    style={styles.title}>
                    Descripcion :</Text>
                    <TextInput
                    style={styles.Input}
                    placeholder="Nombre de objetivo"
                    placeholderTextColor= "#546574"
                    value={Objetive.nombre_objetivo}
                    onChangeText={(text) => handleChange('nombre_objetivo', text)}
                    />
                    <Text
                    style={styles.title}>
                    Tiempo total:</Text>
                    <TextInput 
                    style={styles.Input}
                    placeholder="00:00"
                    placeholderTextColor= "#546574"
                    value={Objetive.hora_planeada}
                    onChangeText={(text) => handleChange('hora_planeada', text)}
                    />
                    { !editing ? (    
                        <TouchableOpacity style={styles.buttonSave}
                        onPress={handleSubmit}>
                            <Text style={styles.buttonText}>Guardar</Text>
                        </TouchableOpacity>
                    ) : ( 
                        <TouchableOpacity style={styles.buttonUpdate}
                        onPress={handleSubmit}>
                            <Text style={styles.buttonText}>Editar</Text>
                        </TouchableOpacity>
                    )}
                </CapaObjetive>
        //     }
        // </View>
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
    },
    capaback: {
        backgroundColor: "#10ac84",
        flex: 1,
    },
    buttonUpdate: {
        padding: 10,
        paddingBottom: 10,
        borderRadius: 5,
        marginBottom: 3,
        backgroundColor: "#e58e26",
        width: "90%",
    }
    
})

export default CrearObjetive


