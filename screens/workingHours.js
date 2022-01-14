import React, { useEffect, useState } from 'react'
import { View, Text,SafeAreaView, TouchableOpacity,Image, ScrollView, FlatList, StyleSheet } from 'react-native'
import { DrawerActions } from '@react-navigation/routers'

export default function workingHours({ navigation }) {
    const [workinghours, setworkinghours] = useState([]);

    useEffect(() => {
        fetch('https://managementapi.salons.lk/salonslkMgtAPI/public/api/salon/time/%7B12%7D')
        .then((response) => response.json())
        .then((response) => {
            setworkinghours(response.time);
        })
    }, []);
    return (
        <SafeAreaView>
            <ScrollView>
                {/* Header */}
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}> 
                    <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                        <Button />
                    </TouchableOpacity>
                    <HeaderText text='Hi! Salon Premium' />
                    <Avatar />
                </View>

                {/* Change Button */}
                <TouchableOpacity onPress={() =>{navigation.navigate('Add working Hours');}}>
                    <View style={{alignItems: 'flex-end', marginRight: 15, marginTop: 50, marginBottom: 15}}>
                        <View style={{backgroundColor: 'black', width: 80, height: 36, borderRadius: 50, alignItems: 'center', justifyContent: 'center', }}>
                            <Text style={{color: 'white'}}>Change</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                {/* day section */}
                {/* <Days day="Monday" startTime="8.00 AM" endTime="8.00 PM" />
                <Days day="Tuesday" startTime="8.00 AM" endTime="8.00 PM" />
                <Days day="Wednesday" startTime="8.00 AM" endTime="8.00 PM" />
                <Days day="Thursday" startTime="8.00 AM" endTime="8.00 PM" />
                <Days day="Friday" startTime="8.00 AM" endTime="8.00 PM" />
                <Days day="Saturday" startTime="8.00 AM" endTime="8.00 PM" />
                <Days day="Sunday" startTime="8.00 AM" endTime="8.00 PM" /> */}
            </ScrollView>
            <FlatList
                    data={workinghours}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index)=>{return item.socId}}
                    renderItem={({item,index})=>(
                        <View style={styles.times} >
                            <Text style={{fontSize: 20}}>{item.day}</Text>
                            <View style={{flexDirection: 'row'}} >
                                <Text style={{fontSize: 15}} >{item.openTime} - </Text>
                                <Text style={{fontSize: 15}} >{item.closeTime}</Text>
                            </View>
                            
                        </View>
                        
                    )}
                />   
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    times:{
        flexDirection:'row',
        justifyContent: 'space-between',
        marginHorizontal: 15,
        marginBottom: 5,
    }
})

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

const Days = (props) => <View style={{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 35,
    marginRight: 35,
    marginTop: 15
}}>
    <Text style={{
        fontSize: 20,
        fontWeight: '400'
    }}>{props.day}</Text>
    <Text style={{
        fontSize: 20,
        fontWeight: '400'
    }}>
        {props.startTime} - {props.endTime}</Text>
</View>