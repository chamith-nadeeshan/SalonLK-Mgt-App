import React from 'react'
import { TextInput } from 'react-native'
import { Image } from 'react-native'
import { View, Text, SafeAreaView } from 'react-native'


export default function AddService({ navigation }) {
    return (
        <SafeAreaView>
            
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}> 
                <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                    <Button />
                </TouchableOpacity>
                <HeaderText text='Hi! Salon Premium' />
                <Avatar />
            </View>
            
            <Text style={{fontSize: 20, alignSelf: 'center', margin: 10, fontWeight: '300'}}>Add Service</Text>

            <Search />

            {/* Service Boxes starts Here */}
            <DisplayBox color= '#ED6363' Name= 'Hair Cut' Price= '$ 200' />
            <DisplayBox color= '#A2ED98' Name= 'Hair Cut' Price= '$ 200' />
            <DisplayBox color= '#CE69E6' Name= 'Hair Cut' Price= '$ 200' />
            <DisplayBox color= '#E6ED35' Name= 'Hair Cut' Price= '$ 200' />
            <DisplayBox color= '#6D9BE5' Name= 'Hair Cut' Price= '$ 200' />
            {/* Service Boxes ends Here */}

            <AddButton />
            
        </SafeAreaView>
    )
}

const Search = () => <View style={{
    width: 360,
    height: 60,
    backgroundColor: 'white',
    borderRadius: 50,
    shadowColor: 'black',
    shadowOpacity: 0.1,
    alignSelf: 'center',
    shadowOffset: {width: 1, height: 2},
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30


}}>
    <Image style={{marginLeft: 15, marginRight: 15 }} source={require('../assets/icons/search.png')} />
    <TextInput style={{fontWeight: '300', color: '#7B7979'  }}>Search....</TextInput>
</View>

const DisplayBox = (props) => <View style={{
    width: 360,
    height: 60,
    backgroundColor: 'white',
    borderRadius: 15,
    margin: 10,
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowColor: 'black',
    shadowOffset: {width: 1, height: 1},
    justifyContent: 'center',
    alignSelf: 'center'
    
}}>
    <View style={{
        flexDirection: 'row',
        alignItems: 'center'
    }}>
        <View style={{
            width: 55,
            height: 40, 
            backgroundColor: props.color,
            borderRadius: 15,
            marginLeft: 10,
            marginRight: 10

            }} />
        <View>
            <Text style={{fontSize: 18, fontWeight: '500'}}>{props.Name}</Text>
            <Text style={{fontSize: 14, fontWeight: '300'}}>Price - {props.Price}</Text>
        </View>
    </View>
</View>

const AddButton = () => <View style={{
    width: '30%',
    height: '10%',
    backgroundColor: '#4967E5',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20
}}>
    <Text style={{fontSize: 18, color: 'white', fontWeight: '500'}}>Add</Text>
</View>