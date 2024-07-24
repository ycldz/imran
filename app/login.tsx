import { View, Text, SafeAreaView, StyleSheet, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Platform, TouchableOpacity, TextInput, Button, StatusBar } from 'react-native'
import { useState } from 'react'
import { router } from 'expo-router';

export default function Login() {

  const [{
    email, 
    password,
    loading
  }, setData] = useState({
    email: "",
    password: "",
    loading: false
  })

  const submit = async () => {
    router.replace("(tabs)")
  }
  

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "transparent"}}>
      <StatusBar barStyle={"dark-content"} />

      <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : null} style={styles.avoidingView}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.container}>

            <View style={styles.logo}>
              <Text style={styles.title}>Uygulama adı</Text>
              <Text style={styles.titleSub}>alt başlık yazısı</Text>
            </View>
              
              <View style={styles.inputs}>
                <View style={styles.inputView}>
                  <Text style={{fontSize: 16,fontWeight: 'bold',marginBottom: 5}}>E-Mail</Text>
                  <TextInput
                    autoCapitalize = 'none'
                    onChangeText={val => setData((prevState) => ({...prevState, email: val}))}
                    value={email}
                    style={styles.input}
                    keyboardType={"email-address"}
                  />
                </View>

                <View style={styles.inputView}>
                  <Text style={{fontSize: 16,fontWeight: 'bold',marginBottom: 5}}>Parola</Text>
                  <TextInput
                    autoCapitalize = 'none'
                    onChangeText={val => setData((prevState) => ({...prevState, password: val}))}
                    value={password}
                    style={styles.input}
                    secureTextEntry={true}
                  />
                </View>

                <TouchableOpacity>
                  <Text style={styles.registerText}>Hesabın Yok Mu? Şimdi Kayıt Ol!</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.buttonView}>
                <TouchableOpacity style={styles.buttonStyle} onPress={() => submit()}>
                  <Text style={{color: '#FFFFFF', fontWeight: 'bold', fontSize: 19}}>Giriş Yap</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.copyrightView}>
                <Text style={styles.copyright}>© 2024</Text>
              </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end"
  },
  input: {
    backgroundColor: '#eeeeee',
    borderRadius: 5,
    height: 40,
    padding: 10
  },
  buttonStyle: {
    backgroundColor: '#5F6971',
    borderRadius: 10,
    alignItems: 'center',
    paddingVertical: 15
  },
  avoidingView: {
    flex: 1
  },
  logo: {
    marginHorizontal: 15,
    marginBottom: 40
  },
  title: {
    fontSize: 28,
    marginBottom: 10,
    fontFamily: 'Quantify'
  },
  titleSub: {
    fontSize: 15,
    color: '#8C8C8C',
    fontWeight: "600"
  },
  copyright: {
    color: '#B7B6B6',
    textAlign: "center"
  },
  copyrightView: {
    marginBottom: 20
  },
  inputs: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginHorizontal: 15,
    borderRadius: 10,
    marginBottom: 30
  },
  inputView: {
    marginBottom: 15
  },
  buttonView: {
    marginHorizontal: 15,
    marginBottom: 50
  },
  registerText: {
    textAlign: 'center',
    color: '#8C8C8C',
    fontSize: 15,
    marginTop: 15,
    fontWeight: '600'
  }
})