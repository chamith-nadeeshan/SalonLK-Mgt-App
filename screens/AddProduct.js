import React from 'react'
import { View, Text, SafeAreaView, Image, TextInput } from 'react-native'


export default function AddProduct({ navigation }) {
    return (
        <SafeAreaView>
            {/* Header */}
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}> 
                <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                    <Button />
                </TouchableOpacity>
                <HeaderText text='Hi! Salon Premium' />
                <Avatar />
            </View>
            <Text style={{fontSize: 20, alignSelf: 'center', margin: 10, fontWeight: '300'}}>Add Product</Text>

            <Search />

            {/* Product Boxes Starts Here */}
            <DisplayBox color= 'black' ProductName= 'Makeup Kit' ProductCode= '#0062' PromoCode= '*4458' />
            <DisplayBox color= 'black' ProductName= 'Makeup Kit' ProductCode= '#0062' PromoCode= '*4458' />
            <DisplayBox color= 'black' ProductName= 'Makeup Kit' ProductCode= '#0062' PromoCode= '*4458' />
            <DisplayBox color= 'black' ProductName= 'Makeup Kit' ProductCode= '#0062' PromoCode= '*4458' />
            {/* Product Boxes Ends Here */}

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
    height: 70,
    backgroundColor: props.color,
    borderRadius: 15,
    margin: 15,
    alignSelf: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: {width: 1, height: 1},
    justifyContent: 'center'

}}>
    <View style={{
        flexDirection: 'row',
        alignItems: 'center'
    }}>
        <Image style={{
            width: 100,
            height: 70,
            borderRadius: 15,
        }} source={require('../assets/images/product1.jpg')} />
        <View style={{marginLeft: 15}}>
            <Text style={{color: 'white', fontSize: 16, fontWeight: '500'}}>{props.ProductName}</Text>
            <Text style={{color: 'white', fontSize: 14, fontWeight: '300'}}>Product Code - {props.ProductCode}</Text>
            <Text style={{color: 'white', fontSize: 14, fontWeight: '300'}}>Promo Code - {props.PromoCode}</Text>
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