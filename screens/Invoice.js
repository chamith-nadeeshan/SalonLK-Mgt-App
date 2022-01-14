import React from 'react'
import { TouchableOpacity } from 'react-native'
import { View, Text, SafeAreaView, ScrollView, Image, StyleSheet, TextInput } from 'react-native'



export default function Invoice() {
    return (
        <SafeAreaView>
            < Header />
            <ScrollView>
                <View style={{margin: 15}}>
                    <Text style={{alignSelf: 'center', fontSize: 20, fontWeight: '300'}}>Invoice</Text>
                    <Text style={{alignSelf: 'center', fontSize: 20, fontWeight: '200', marginTop: 40 }}>Total Price</Text>
                    <Text style={{alignSelf: 'center', fontSize: 40, fontWeight: '800'}}>$ 510.99</Text>

                    <Text style={{marginTop: 15, fontSize: 18, fontWeight: '200'}}>Promo Code </Text>
                    <View style={Styles.PromoCode}>
                        <TextInput style={{marginLeft: 15, opacity: 0.5}}>Type Here.....</TextInput>
                        <ApplyButton />
                    </View>

                    <DiscountButton />
                    {/* Purchased item section starts here */}
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 30}}>
                        <Text style={{fontSize: 18, fontWeight: '300'}}>Hair Cut</Text>
                        <Text style={{fontSize: 18, fontWeight: '300'}}>$ 50</Text>
                    </View>

                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
                        <Text style={{fontSize: 18, fontWeight: '300'}}>Facial</Text>
                        <Text style={{fontSize: 18, fontWeight: '300'}}>$ 100</Text>
                    </View>

                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
                        <Text style={{fontSize: 18, fontWeight: '300'}}>Perfume (#225)</Text>
                        <Text style={{fontSize: 18, fontWeight: '300'}}>$ 69.96</Text>
                    </View>
                    {/* Purchased item section ends here */}
                    

                    {/* total price and discount */}
                    <View style={{marginTop: 30}}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
                        <Text style={{fontSize: 18, fontWeight: '300'}}>Subtotal</Text>
                        <Text style={{fontSize: 18, fontWeight: '300'}}>$ 550</Text>
                        </View>

                        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
                        <Text style={{fontSize: 18, fontWeight: '300'}}>Discount</Text>
                        <Text style={{fontSize: 18, fontWeight: '300'}}>( $ 100 )</Text>
                        </View>

                        <View style={{width: 360, height: 0.2, backgroundColor: '#818080', marginTop: 15}}></View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
                        <Text style={{fontSize: 18, fontWeight: '600'}}>Net Payable</Text>
                        <Text style={{fontSize: 18, fontWeight: '600'}}>$ 450</Text>
                        </View>
                    </View>
                    {/* total price and discount ends here */}

                    <AddServiceButton />
                    <AddProductButton />
                    <CheckoutButton />
                </View>

                
            </ScrollView>

        </SafeAreaView>
    )
}


const CheckoutButton = () => <TouchableOpacity
    style={{
        width: 150,
        height: 50,
        backgroundColor: 'black',
        borderRadius: 10,
        marginTop: 30,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
    <Text style={{color: 'white', fontSize: 18, fontWeight: '500'}}>Checkout</Text>
</TouchableOpacity>


const AddProductButton = () => <TouchableOpacity
    style={{
        width: 370,
        height: 40,
        backgroundColor: '#418789',
        borderRadius: 10,
        marginTop: 10,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
    <Text style={{color: 'white', fontSize: 18, fontWeight: '500'}}>Add Products</Text>
</TouchableOpacity>


const AddServiceButton = () => <TouchableOpacity
    style={{
        width: 370,
        height: 40,
        backgroundColor: '#418789',
        borderRadius: 10,
        marginTop: 35,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
    <Text style={{color: 'white', fontSize: 18, fontWeight: '500'}}>Add Services</Text>
</TouchableOpacity>

const DiscountButton = () => <View
    style={{
        width: 370,
        height: 65,
        backgroundColor: '#D4F4C8',
        alignSelf: 'center',
        borderRadius: 15,
        marginTop: 24,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        
    }}>
    <Image style={{
        width: 37,
        height: 37,
        marginRight: 40
    }}
    
    source={require('../assets/icons/discountIcon.png')} />

    <View>
    <Text>10 % Season Discount</Text>
    <Text>Offer applied you have saved $ 10.99</Text>
    </View>

</View>

const ApplyButton = () => <TouchableOpacity
    style={{
        width: 110, 
        height: 55, 
        backgroundColor: 'black',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
        }}>

    <Text style={{
        color: 'white',
        fontSize: 18,
        fontWeight: '500'
    }}>Apply</Text>
    
</TouchableOpacity>

const Styles = StyleSheet.create({
    PromoCode: {
        width: 370,
        height: 55,
        backgroundColor: 'white',
        shadowOpacity: 0.2,
        shadowRadius: 10,
        shadowOffset: {height: 2, width: 1},
        shadowColor: 'black',
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowOffset: {
            width: 20,
            height: 10
        }

        
    }
})