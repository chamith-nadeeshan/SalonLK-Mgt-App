import React from 'react'
import { View, Text, Image } from 'react-native'

export default function HomeResult() {
    return (
        <View style={{alignItems:'center', marginTop: 35}}>
            <View style={{alignItems:'center'}}>
                <Text 
                    style={{fontWeight:'300', letterSpacing: 1}}>Total Income
                </Text>

                <TotalIncome/>

                {/* Horizontal line start here */}
                <View 
                    style={{backgroundColor: 'white', width: 200, height: 5, borderBottomColor: '#E1E1E1', borderBottomWidth: 2}}>
                </View>
                {/* Horizontal line ends here */}

                {/* Cost & Profit section starts here */}
                <View style={{flexDirection:'row', alignItems: 'center', marginTop: 10, alignSelf: 'center' }}>
                     <Image source={require('../assets/icons/profitIcon.png')} />
                     <Text style={{margin: 5 }}>Profit</Text>
                     <Profit />
                     <Image style={{marginLeft: 10}} source={require('../assets/icons/costIcon.png')} />
                     <Text style={{margin: 5 }}>Cost</Text>
                     <Cost />
                </View>
                {/* Cost & profit section ends here */}

            </View>
            
        </View>
    )
}

// Total income of perticular time should come from database
const TotalIncome = ({
    Price = 5900.59
}) => 
    <Text style={{fontSize: 32, fontWeight: '700', marginTop: 10, marginBottom: 5, borderBottomColor: 'black', borderBottomWidth: 5}}>{"Rs. " + Price }</Text>


const Profit =({
    Profit = 4800
}) =>
    <Text style={{fontSize:18, fontWeight:'700'}}> {"Rs. " + Profit} </Text> 


const Cost =({
    Cost = 3000.59
}) =>
    <Text style={{fontSize:18, fontWeight:'700'}}> {"Rs. " + Cost} </Text> 