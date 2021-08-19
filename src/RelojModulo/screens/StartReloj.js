import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native'
import moment from 'moment'


function Temporizador ({intervalo, style }) {
    const pad = (n) => n < 10 ? '0' + n : n
    const duration = moment.duration(intervalo)
    return <Text style={style}>
        {pad(duration.minutes())}:
        {pad(duration.seconds())}   
        </Text>
}

function CicularButton({title, color, background, onPress, disabled}) {
    return(
        <TouchableOpacity 
        onPress={() => !disabled && onPress()} 
        style={[ styles.button, {backgroundColor:background}]}
        activeOpacity={disabled ? 1.0 : 0.7 }>
            <Text style={[styles.buttonTitle, {color}]}>{title}</Text>
        </TouchableOpacity>
    )
}

function ButtonRow({children}) {
    return(
        <View style={styles.ButtonRow}>{children}</View>
    )
}

function Ciclo({numero, intervalo}) {
    return (
        <View style={styles.lap}>
            <Text style={styles.lapText}>Vuelta {numero} </Text>
            <Text style={styles.lapText}>{ intervalo }</Text>
        </View>
    )
}

function TablaCiclos({ciclos, temporizador}) {
    return (
        <ScrollView style={styles.scrollView}>
            {ciclos.map((ciclo, index) => (
                <Ciclo 
                intervalo={index === 0 ? temporizador + ciclo : ciclo }
                number={ciclos.length - index}
                key={ciclos.length - index}  
                />
            ))}
        </ScrollView>
    )
}

export default class StartReloj extends Component {
    constructor(props) {
        super(props)
        this.state = {
            start: 0,
            now: 0,
            ciclos: [ ],
        }
    }

    start = () => {
        const now = new Date().getTime()
        this.setState({
            start: now,
            now, 
            ciclos: [0],
        })
        this.temporizador = setInterval(() => {
            this.setState({now: new Date().getTime()})
        }, 100);
    }

    ciclo = () => { 
        const timestamp = new Date().getTime()
        const { ciclos, now, start } = this.state
        const [firstLap, ...other] = ciclos
        this.setState({
            ciclos: [0, firstLap + now - start, ...other],
            start: timestamp, 
            now: timestamp,
        })
    }

    stop = () => { 
        clearInterval(this.temporizador)
        const { ciclos, now, start } = this.state
        const [firstLap, ...other] = ciclos
        this.setState({
            ciclos: [firstLap + now - start, ...other],
            start: 0, 
            now: 0,
        })
    }

    reset = () => {
        this.setState({
            ciclos: [],
            start: 0, 
            now: 0,
        })
    }

    resume = () => {
        const now = new Date().getTime()
        this.setState({
            start: now,
            now,
        })
        this.temporizador = setInterval(() => {
            this.setState({now: new Date().getTime()})
        }, 100);
    }

    render() {
        const { now, start, ciclos} = this.state
        const temporizador = now - start
        return (
            <View style={styles.container}>
                <Temporizador intervalo={temporizador} style={styles.temporizador} />
                {ciclos.length === 0 && (
                    <ButtonRow>
                        <CicularButton title='Stop' color='#8b8b90' background='#151515' disabled />
                        <CicularButton title='Start' color='#53D86A' background='#1B361F'  onPress={this.start} />
                    </ButtonRow>
                )}
                {start > 0 && (
                    <ButtonRow>
                        <CicularButton title='Stop' color='#ffffff' background='#3d3d3d' onPress={this.stop} />
                        <CicularButton title='Pausa' color='#53D86A' background='#1B361F'  onPress={this.ciclo} />
                    </ButtonRow>
                )}
                {ciclos.length > 0 && start === 0 && (
                    <ButtonRow>
                        <CicularButton title='Reset' color='#ffffff' background='#3d3d3d' onPress={this.reset} />
                        <CicularButton title='Start' color='#53D86A' background='#1B361F'  onPress={this.resume} />
                    </ButtonRow>
                )}
                <TablaCiclos ciclos={ciclos} temporizador={temporizador}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#0d0d0d',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    }, 
    temporizador: {
        color: '#ffffff', 
        fontSize: 76,
        fontWeight: '200'
    },
    button:{
        width: 80, 
        height: 80,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonTitle: {
        fontSize: 18,
    },
    ButtonRow: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent: 'space-between',
        marginTop: 80,
        marginBottom: 20,
    },
    lap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor:'#151515',
        borderTopWidth:1,
        paddingVertical:10,
    },
    lapText :{
        color: '#ffffff',
        fontSize: 18,
    },
    scrollView: {
        alignSelf:'stretch',
    }
})
