import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

export default function HomeStatics({
    Top_Service="hair Cut",
    Top_Customer="Mrs.Perera",
    Top_Product="Dreamron Night Cream"

}) {
    return (
        <View style={{marginTop: 50, marginLeft: 15}}>
            <Text style={{fontSize: 20, fontWeight: '500'}}>Check the Progress</Text>
            <View style={{flexDirection: 'row'}}>
                
                {/* Result Box starts here */}
                <TouchableOpacity>
                <View style={{backgroundColor:'#F77575', width: 111, height: 123, borderRadius: 15, justifyContent:'center', alignItems:'center', marginTop: 20, marginRight: 20}}>
                    <Image source={require('../assets/icons/serviceIcon.png')} />
                    <Text style={{color: 'white', fontSize: 14, fontWeight:'500', marginTop: 6.5 }}>Top Service</Text> 
                    <View 
                        style={{backgroundColor: 'white', width: 90, height: 0.5, borderBottomColor: 'white', borderBottomWidth: 1, marginTop: 6.5, marginBottom: 6.5}}>
                    </View>
                    <Result text={Top_Service} />
                </View>
                </TouchableOpacity>
                {/* Result box ends here */}

                 {/* Result Box starts here */}
                 <TouchableOpacity>
                 <View style={{backgroundColor:'#9690D6', width: 111, height: 123, borderRadius: 15, justifyContent:'center', alignItems:'center', marginTop: 20, marginRight: 20}}>
                    <Image source={require('../assets/icons/serviceIcon.png')} />
                    <Text style={{color: 'white', fontSize: 14, fontWeight:'500', marginTop: 6.5 }}>Top Customer</Text> 
                    <View 
                        style={{backgroundColor: 'white', width: 90, height: 0.5, borderBottomColor: 'white', borderBottomWidth: 1, marginTop: 6.5, marginBottom: 6.5}}>
                    </View>
                    <Result text={Top_Customer} />
                </View>
                </TouchableOpacity>
                {/* Result box ends here */}

                 {/* Result Box starts here */}
                 <TouchableOpacity>
                 <View style={{backgroundColor:'#87D883', width: 111, height: 123, borderRadius: 15, justifyContent:'center', alignItems:'center', marginTop: 20, marginRight: 20}}>
                    <Image source={require('../assets/icons/serviceIcon.png')} />
                    <Text style={{color: 'white', fontSize: 14, fontWeight:'500', marginTop: 6.5 }}>Top Product</Text> 
                    <View 
                        style={{backgroundColor: 'white', width: 90, height: 0.5, borderBottomColor: 'white', borderBottomWidth: 1, marginTop: 6.5, marginBottom: 6.5}}>
                    </View>
                    <Result text={Top_Product}/>
                </View>
                </TouchableOpacity>
                {/* Result box ends here */}
                
            </View>

        </View>
    )
}


const Result = (props) => <Text style={{color: 'white', fontSize: 12, fontWeight: '300'}}>
    {props.text}
</Text>


