import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

const GameArea = ({ tabus, index }) => (
    <View style={[style.tabuscreen]}>
        <View style={[style.header]}>
            <Text style={[style.kelime]}>
                {tabus[index].word}
            </Text>
        </View>
        <View style={[style.yasak_kelime]}>
            {tabus[index].yasak_kelime.map((item, _) => <Text key={_} style={[style.k_yasak]}>{item}</Text>)}
        </View>
    </View>
)

const style = StyleSheet.create({
    score: {
        flex: .3,
        textAlign: 'right'
    },
    skore: {
        marginBottom: 'auto',
    },
    skoretable: {
        marginBottom: 0,
        backgroundColor: '#eee'
    },
    flex: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingVertical: 5
    },
    home: {
        backgroundColor: '#eee',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        borderTopWidth: 1,
        borderTopColor: '#ddd'
    },
    away: {
        backgroundColor: '#eee',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    },
    main: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end'
    },
    dogru: {
        backgroundColor: '#1ed775'
    },
    tabu: {
        backgroundColor: '#e55949'
    },
    buttons: {
        flex: .333333,
        paddingVertical: 13,
        alignItems: 'center'
    },
    pas: {
        backgroundColor: '#ab8569'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff'
    },
    header: {
        backgroundColor: '#ddd',
        alignItems: 'center',
        paddingVertical: 5
    },
    tabuscreen: {

    },
    kelime: {
        fontSize: 20,
        fontWeight: '700',
        color: '#111'
    },
    yasak_kelime: {
        alignItems: 'center',
    },
    k_yasak: {
        fontSize: 18,
        fontWeight: '700',
        width: '100%',
        color: '#535353',
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginRight: 'auto'
    },
    baslat: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: '#00000023',
        alignItems: 'center',
        justifyContent: 'center'
    },
    alert: {
        backgroundColor: '#fff',
        padding: 20,
        width: '70%',
        borderRadius: 5,
    }
})

export default GameArea;