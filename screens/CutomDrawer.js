import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'


export default function SideBar(props, {navigation}) {
    return (
        
    <DrawerContentScrollView style={{backgroundColor: '#418789'}} {...props }>
        <View style={{
            height: 100,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <Text style={{marginLeft: 15, fontSize: 20, color: 'white' }}>SalonsLK</Text>

            
        </View>

         <DrawerItemList {...props} />

        <View style={{
            height: 150,
            marginTop: '35%',
            marginLeft: 15,
            flexDirection: 'row',
            alignItems: 'center'
        }}>
            <View>
                <Image style={{
                    width: 65,
                    height: 65,
                    borderRadius: 50,
                    marginRight: 10
                }} source={require('../assets/images/profil.jpg')} />
            </View>

            <View>
                <Text style={{
                    fontSize: 20,
                    fontWeight: '300',
                    color: 'white'
                }}>Salon Premium </Text>

            </View>
        </View>
    </DrawerContentScrollView>
    
                
    )
}


