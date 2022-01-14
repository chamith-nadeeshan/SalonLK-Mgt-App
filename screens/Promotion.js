import React from 'react'
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native'
import SaveButton from '../components/SaveButton'
import { DrawerActions } from '@react-navigation/routers'
import SearchBar from '../components/SearchBar'
import { TextInput } from 'react-native'


export default function Promotion({ navigation }) {
    return (
        <SafeAreaView style={{backgroundColor: 'white'}}>
            
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}> 
                <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                    <Button />
                </TouchableOpacity>
                <HeaderText text='Hi! Salon Premium' />
                <Avatar />
            </View>

            <Text style={{fontSize: 20, fontWeight: '300', alignSelf: 'center', marginTop: 25 }}>Promotion Campaign</Text>
            <SearchBar />
            <ScrollView>
                <PromotionButtons />
                <Discription />
                <SaveButton />
            </ScrollView>
        </SafeAreaView>
    )
}

const PromotionButtons = () => <View style={{
    margin: 15
}}>
    <Text style={{
        fontSize: 20,
        fontWeight: '500',
        marginTop: 25
    }}>Promotion Type</Text>

    <View style={{
        flexDirection: 'row',
        marginTop: 40,
        alignSelf: 'center',
    }}>
        <View>
            <Text style={{
                fontSize: 18,
                fontWeight: '300',
                marginRight: 50
            }}>Text Message</Text>
        </View>

        <View>
            <Text style={{
                fontSize: 18,
                fontWeight: '300',
            }}>Email</Text>
        </View>
    </View>
</View>

const Discription = () => <View style={{
    marginLeft: 15,
    marginTop: 25,
}}>
    <Text style={{
        fontSize: 20,
        fontWeight: '500',
    }}>Description</Text>
    <View style={{
        width: 360,
        height: 150,
        shadowColor: 'black',
        shadowRadius: 10,
        shadowOpacity: 0.2,
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 20,

        }}>
     <TextInput style={{
        fontSize: 16,
        margin: 15,
        fontWeight: '300'
        }}> Type Here.....</TextInput>
    </View>

    <View style={{alignSelf: 'flex-end', flexDirection: 'row', marginRight: 20}}>
        <Text style={{marginRight: 5}}>SMS = 1</Text>
        <Text>(1/180)</Text>
        
    </View>
</View>

const Button = () => <View><Image 
    source={require('../assets/icons/menuButton.png')} 
    style={{width: 29, height: 29, marginLeft: 15, marginTop: 10,}}
 />
 </View>

const HeaderText = (props) => <Text 
    style={{fontSize: 20, marginTop: 10, marginLeft:0, marginRight: 80, fontWeight: '400'}}>{props.text}</Text>

const Avatar = () => <Image
    source ={{uri: 'https://thumbs.dreamstime.com/b/head-shoulders-portrait-young-african-american-man-71528512.jpg'}}
    style={{width: 31, height: 31, borderRadius: 50, marginTop: 10, marginRight: 15}}
/>