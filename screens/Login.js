import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Button } from 'react-native'
import { TextInput } from 'react-native'
import { SafeAreaView } from 'react-native'
import { View, Text, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

export default function Login({navigation}) {
    return (
        
        <SafeAreaView style={{backgroundColor: '#418789', height: '100%'}}>
            <ScrollView>
            <Image style={{width: 220, height: 138, alignSelf: 'center', marginTop: 100}} source={require('../assets/icons/Logo.png')} />

            <View style={{marginTop: 70}}>
                {/* Input Box */}
                <View style={{
                    width: 360,
                    height: 60,
                    backgroundColor: 'white',
                    borderRadius: 10,
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    alignItems: 'center',
                    alignSelf: 'center',
                    marginBottom: 10
                    
                    }}>
                    <TextInput placeholder="Enter your phone number" style={{
                        fontSize: 15,
                        fontWeight: '500',
                        marginLeft: 15
                    }}></TextInput>

                    <Image style={{
                        marginRight: 15,
                        height: 28,
                        width: 28
                    }} source={require('../assets/icons/LoginUser.png')} />
                </View>

            
                {/* Input Box */}
                <View style={{
                    width: 360,
                    height: 60,
                    backgroundColor: 'white',
                    borderRadius: 10,
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    alignItems: 'center',
                    alignSelf: 'center',
                    marginBottom: 10
                    
                    }}>
                    <TextInput placeholder="Password" style={{
                        fontSize: 15,
                        fontWeight: '500',
                        marginLeft: 15
                    }}></TextInput>

                    <Image style={{
                        marginRight: 15,
                        height: 28,
                        width: 28
                    }} source={require('../assets/icons/Lock.png')} />
                </View>
                
                <TouchableOpacity>
                    <Text style={{
                        fontSize: 15,
                        fontWeight: '500',
                        marginLeft: 20,
                        color: 'white',

                    }}>Forget Password ?</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() =>{navigation.navigate('Home');}} style={{
                    width: 113,
                    height: 40,
                    backgroundColor: 'white',
                    borderRadius: 15,
                    justifyContent: 'center',
                    alignSelf: 'center',
                    alignItems: 'center',
                    marginTop: 50
                }}>
                    <Text style={{
                        fontSize: 15,
                        fontWeight: '700'
                    }}>Sign In</Text>
                </TouchableOpacity>


                <View style={{alignSelf: 'center', flexDirection: 'row', marginTop: 10, alignItems: 'center'}}>  
                    <Text style={{
                        fontSize: 12,
                        color: 'white'
                    }}> Don't have an account? </Text>
                    <TouchableOpacity>
                    <Text style={{
                        fontSize: 15,
                        fontWeight: '500',
                        color: 'white',

                    }}> Sign Up</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        </ScrollView>
        </SafeAreaView>
        
    )
}

