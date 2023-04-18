import React from 'react'
import { SafeAreaView, View, StyleSheet, Text, ScrollView, Image, TouchableOpacity, StatusBar } from 'react-native'

export default function DetailPage({ route, navigation }) {
    let content = route.params.content;
    return (
        <ScrollView style={styles.detail__wrap} bounces={false}>
            <View style={styles.container}>
                <Image style={styles.image} source={content.image} />
                <Text style={styles.header}>{content.name}</Text>
                <Text style={styles.text}>{content.description}</Text>
                <View style={styles.color}>
                    <Text style={styles.text}>Colors</Text>
                    <View style={{ flexDirection: "row" }}>
                        {content.color.map((color, index) => {
                            return (
                                <View key={index} style={{ ...styles.colorBox, backgroundColor: color }}></View>
                            )
                        })}
                    </View>
                </View>
                <View style={styles.priceContainer}>
                    <Text style={styles.text}>Price: ${content.price}</Text>
                    <View >
                        <TouchableOpacity style={{ backgroundColor: "green", padding: 10, margin: 10, borderRadius: 5 }}>
                            <Text style={{ color: "white", textAlign: "center" }}>Add to Cart</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    detail__wrap: {
        flex: 1, height: "100%",
        backgroundColor: "green",
        marginTop: StatusBar.currentHeight
    },
    image: {
        width: "100%",
        height: 300,
        resizeMode: "cover"
    },
    header: {
        fontSize: 30,
        fontWeight: "bold",
        padding: 10,
        color: "white",
        textAlign: "center",
    },
    text: {
        fontSize: 15,
        padding: 10,
        color: "white"
    },
    colorBox: {
        width: 30,
        height: 30,
        borderRadius: 15,
        margin: 5
    },
    container: {
        backgroundColor: "green",
        height: "100%",
    },
    priceContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }
})
