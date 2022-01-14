import React, { useState, useEffect } from 'react'
import { Button } from 'react-native';
import { View, Text, StyleSheet, Image, TextInput, SafeAreaView, FlatList } from 'react-native'

function AllProducts() {
    const [product, setproduct] = useState([]);
    const [masterData, setmasterData] = useState([]);
    const [search, setsearch] = useState('');

    useEffect(() => {
        fetch('https://managementapi.salons.lk/salonslkMgtAPI/public/api/product/view/12')
        .then((response) => response.json())
        .then((response) => {
            setproduct(response.products);
            setmasterData(response.products);
        })
    }, []);

    const searchFilter = (text) => {
        if(text) {
            const newData = masterData.filter((item) => {
                const itemData = item.ProductName ? 
                    item.ProductName.toUpperCase()
                    : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setproduct(newData);
            setsearch(text);
        } else {
            setproduct(masterData);
            setsearch(text);
        }
    }
    return (
        <SafeAreaView style={{backgroundColor: 'white', height: '100%'}} >
            <View style={styles.SearchBar} >
                <View style={{flexDirection: 'row', marginLeft: 15}} >
                    <Image source={require('../assets/icons/search.png')} />
                    <TextInput style={{marginLeft: 10}}  placeholder="Search...." value={search} onChangeText={(text) => searchFilter(text)} />
                </View>
            </View>
            <FlatList
                data={product}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index)=>{return item.ProductId}}
                renderItem={({item,index})=>(
                    <View style={styles.cards} >
                        <View>
                            <Image style={{width: 100, height: 65}} source={require('../assets/images/product1.jpg')} />
                        </View>
                        <View style={{marginLeft: 10}} >
                            <Text style={{color: 'white', fontSize: 12, fontWeight: '500'}}>{item.ProductName}</Text>
                            <Text style={{color: 'white', fontSize: 10}}>{item.RegularPrice}</Text>
                            <Text style={{color: 'white', fontSize: 10}}>{item.DiscountedPrice}</Text>
                        </View>
                    </View>
                )}
            />

            <Button title="Add" />   
        </SafeAreaView>
    )
}

export default AllProducts

const styles = StyleSheet.create({
    cards: {
        backgroundColor: '#C47E5A',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        borderRadius: 15,
        width: 370,
        alignSelf: 'center'
    },
    SearchBar: {
        width: 360,
        height: 50,
        shadowRadius: 5, 
        shadowColor: 'black', 
        shadowOpacity: 0.1,
        shadowOffset: {width: 0, height: 10},
        backgroundColor: 'white',
        borderRadius: 50,
        alignItems: 'center',
        marginBottom: 25,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 25
    }
})