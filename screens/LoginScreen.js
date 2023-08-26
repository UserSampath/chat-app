import { KeyboardAvoidingView, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: "while", padding: 18, alignItems: "center" }}>
      <KeyboardAvoidingView>
        <View style={{ marginTop: 100, justifyContent: "center", alignItems: "center" }}>
          <Text style={{ color: "#4A55A2", fontSize: 17, fontWeight: "600" }}>
            Sign in
          </Text>
          <Text style={{ fontSize: 17, fontWeight: "600", marginTop: 15 }}>
            Sign in to your account
          </Text>
        </View>
        <View style={{ marginTop: 50 }}>
          <View>
            <Text style={{ fontSize: 18, fontWeight: "600", marginTop: 15 }}>
              Email
            </Text>
            <TextInput value={email} onChangeText={(text) => setEmail(text)} style={{ fontSize: 18, borderBottomColor: "gray", borderBottomWidth: 1, marginVertical: 10, width: 300 }} placeholderTextColor={"black"} placeholder='enter your Email' />
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: "600", marginTop: 15 }}>
              Password
            </Text>
            <TextInput secureTextEntry={true} value={password} onChangeText={(text) => setPassword(text)} style={{ fontSize: 18, borderBottomColor: "gray", borderBottomWidth: 1, marginVertical: 10, width: 300 }} placeholderTextColor={"black"} placeholder='enter your Password' />
          </View>
          <Pressable style={{ width: 200, backgroundColor: "#4A55A2", padding: 15, marginTop: 50, marginLeft: "auto", marginRight: "auto", borderRadius: 6 }}>
            <Text style={{ color: "white", fontSize: 16, fontWeight: "bold", textAlign: "center" }}>
              Login
            </Text>
          </Pressable>
          <Pressable style={{ marginTop: 20 }} onPress={()=>navigation.navigate("Register")}>
            <Text style={{ textAlign: "center", color: "gray", fontSize: 16 }}>
              Dont have an account ? Sign Up
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})