
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';


  

export default function Header({ navigation }) {
    return (
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}> 
            <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                <Button />
            </TouchableOpacity>
            <HeaderText text='Hi! Salon Premium' />
            <Avatar />
        </View>
    )
}

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