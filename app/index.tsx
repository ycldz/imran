import { View, Text } from 'react-native'
import { useEffect } from 'react'
import { router } from 'expo-router'

export default function index() {
    useEffect(() => {
        setTimeout(() => {
            router.replace("login")
        }, 200)
    }, [])

    return (
        <View style={{flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
            <Text>Splash Screen</Text>
        </View>
    )
}