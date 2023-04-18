import React from 'react'
import { SafeAreaView, View, StyleSheet, Text, ScrollView, Image, TouchableOpacity, StatusBar } from 'react-native'
import { data } from '../Content'

export default function IndexPage({ navigation }) {
    const addCommas = (num) => {
        return new Intl.NumberFormat("en-US", {
            style: "decimal",
            maximumFractionDigits: 2,
            minimumFractionDigits: 2,
            currency: "USD"
        }).format(num);
    }

    return (
        <View style={styles.header__wrap}>
            {/* Header */}
            <View style={styles.header}>
                <SafeAreaView>
                    <Text style={styles.header__text}>Abdul's Furniture</Text>
                    <Text style={{ ...styles.header__text, fontSize: 15 }}>The best furniture in the world</Text>
                </SafeAreaView>
            </View>

            {/* ScrollView */}
            <ScrollView style={styles.content__wrap}>
                {data.map((content, index) => {
                    return (
                        <TouchableOpacity key={index} style={styles.container} onPress={() => navigation.navigate("DetailPage", { content })}>
                            <Image style={styles.image} source={content.image} />
                            <View style={styles.innerImage}>
                                <Text style={styles.text}>{content.name}</Text>
                                <Text style={{ ...styles.text, color: 'gray' }}>${addCommas(content.price)}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    header__wrap: {
        flex: 1,
        marginTop: StatusBar.currentHeight
    },
    header: {
        backgroundColor: 'green',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },  
    header__text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign:"left"
    },
    content__wrap: {
        flexGrow: 0,
        flexShrink: 1
    },
    image: {
        width: '100%',
        height: 300,
        resizeMode: 'cover'
    },
    innerImage: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      },
      text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
      },
      container: {
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      }
    
})
