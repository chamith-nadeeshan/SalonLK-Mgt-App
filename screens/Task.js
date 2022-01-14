import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { View, Text, SafeAreaView, ScrollView, Image} from 'react-native'
import { DrawerActions } from '@react-navigation/routers';
import Calender from './Calender';

export default function Task( { navigation } ) {
    const [activeTab, setActiveTab] = useState('Mo');
    return (
        <SafeAreaView style={{backgroundColor: 'white'}}>
            
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}> 
                <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                    <Button />
                </TouchableOpacity>
                <HeaderText text='Hi! Salon Premium' />
                <Avatar />
            </View>

            <ScrollView showsVerticalScrollIndicator={false} style={{margin: 15}}>
                <Text style={{alignSelf: 'center', fontSize: 20, fontWeight: '300', marginTop: 10}}>Appointments</Text>
                <MonthsBar />

                {/* Horizontal line */}
                <View style={{width: 370, height: 0.5, backgroundColor: '#9D9D9D', alignSelf: 'center', marginTop: 15}} />

                {/* detes starts here */}
                <View style={{flexDirection: 'row',marginTop: 10}}>
                    <Dates text='Mo' date='22' activeTab={activeTab} setActiveTab={setActiveTab} />
                    <Dates text='Tu' date='23' activeTab={activeTab} setActiveTab={setActiveTab} />
                    <Dates text='We' date='24' activeTab={activeTab} setActiveTab={setActiveTab} />
                    <Dates text='Th' date='25' activeTab={activeTab} setActiveTab={setActiveTab} />
                    <Dates text='Fr' date='26' activeTab={activeTab} setActiveTab={setActiveTab} />
                    <Dates text='Sa' date='27' activeTab={activeTab} setActiveTab={setActiveTab} />
                    <Dates text='Su' date='28' activeTab={activeTab} setActiveTab={setActiveTab} />
                </View>
                
                <TouchableOpacity onPress={() =>{navigation.navigate('Add Schedule');}}
                        style={{
                            alignItems: 'flex-end', 
                            marginTop: 15,
                            marginBottom: 15}}>
                    <View 
                        style={{
                            backgroundColor: 'black', 
                            width: 80, height: 36, 
                            borderRadius: 50, 
                            flexDirection: 'row', 
                            alignItems: 'center', 
                            justifyContent: 'center' }}>
                    <Text 
                        style={{
                            color: 'white', 
                            marginRight: 5}}>Add</Text>
                    <Image source={require('../assets/icons/PlusIcon.png')} />
                </View>
                </TouchableOpacity>

                {/* task section starts here */}
                <Calender />

            </ScrollView>
        </SafeAreaView>
    )
}


const Tasks = (props) => 
<View
        style={{
            flexDirection: 'row', 
            alignItems: 'center', 
            alignSelf: 'center',
            marginTop: 10}}>
        {/* Task start Time $ End Time */}
        <View>
            <Text style={{
                marginBottom: props.width, fontSize: 12}}>
                    {props.startTime}</Text>

            <Text style={{fontSize: 12}}>{props.endTime}</Text>
        </View>
        {/* Treatment details */}
        <TouchableOpacity
            style={{
                width: 300, 
                height: props.width + 10, 
                backgroundColor: 'white',
                shadowColor: 'black',
                shadowOpacity: 0.1,
                shadowOffset: {width: -2, height: 1},
                shadowRadius: 5,
                borderTopEndRadius: 10,
                borderBottomEndRadius: 10,
                borderStartColor: props.color,
                borderLeftWidth: 5,
                justifyContent: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginLeft: 10,
                
                 }}>

                <View style={{
                    marginLeft: 10,
                    }}>
                    <Text style={{
                        fontSize: 18,
                        fontWeight: '500',
                        marginBottom: 15
                    }}>{props.TratmentName}</Text>

                    <Text style={{
                        fontSize: 12,
                        fontWeight: '300'
                    }}>{props.CustomerName}</Text>

                    <Text style={{
                        fontSize: 12,
                        fontWeight: '300'
                    }}>{props.PhoneNo}</Text>

                </View>

                <View style={{marginRight: 10,}}>
                    <Text style={{
                        fontSize: 12,
                        fontWeight: '300',
                        marginBottom: 40,
                        color: '#868686',
                        
                    }}>{props.startTime} - {props.endTime}</Text>
                </View>

        </TouchableOpacity>
</View>


const MonthsBar = () => <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>

    <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image style={{tintColor: '#727070', width: 8, height: 13}} source = {require('../assets/icons/leftArrow.png')} />
        <Text style={{color: '#727070', fontSize: 16, marginLeft: 10 }}>Dec</Text>
    </View>

    <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={{color: 'black', fontSize: 20, marginLeft: 10, fontWeight: '500' }}>January</Text>
        <Image style={{tintColor: 'black', width: 15, height: 8, marginTop: 5, marginLeft: 8}} source = {require('../assets/icons/downArrowIcon.png')} />
    </View>

    <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={{color: '#727070', fontSize: 16, marginRight: 10 }}>Feb</Text>
        <Image style={{tintColor: '#727070', width: 8, height: 13}} source = {require('../assets/icons/rightArrow.png')} />
    </View>
</View>


const Dates = (props) =>
    <View>
        <TouchableOpacity style={{
            paddingVertical: 10,
            paddingHorizontal: 10,
            backgroundColor: props.activeTab ==props.text ? "#418789" : "white",
            marginRight: 10,
            borderRadius: 10,
        }}
            onPress={() => props.setActiveTab(props.text)}
        >
            <Text style={{fontSize: 18, color: props.activeTab == props.text ? "white" : "#767676"}}>{props.text}</Text>
            <Text style={{fontSize: 18, color: props.activeTab == props.text ? "white" : "#767676"}}>{props.date}</Text>
        </TouchableOpacity>
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