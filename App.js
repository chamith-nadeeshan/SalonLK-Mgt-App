import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { Button, StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import Home from "./screens/Home";
import AddAdmin from './screens/AddAdmin'
import AddProduct from './screens/AddProduct'
import Customers from "./screens/Customers"
import DeleteTreatment from './screens/DeleteTreatment';
import UserProfil from './screens/UserProfil';
import DeleteTreatmentType from './screens/DeleteTreatmentType';
import AddSchedule from './screens/AddSchedule';
import ScheduleInfo from './screens/ScheduleInfo';
import ViewTreatment from './screens/ViewTreatment';
import EditTreatment from './screens/EditTreatment';
import ViewCustomer from './screens/ViewCustomer';
import ViewStaff from './screens/ViewStaff';
import Invoice from './screens/Invoice';
import Task from './screens/Task';
import TreatmentType from './screens/TreatmentType';
import AddTreatmentType from './screens/AddTreatmentType';
import ScheduleList from './screens/ScheduleList';
import TreatmentList from './screens/TreatmentList';
import AddTreatment from './AddTreatment';
import EditCustomers from './screens/EditCustomers';
import AddWorkingHours from './screens/AddWorkingHours';
import Promotion from './screens/Promotion';
import Staff from './screens/Staff';
import AddStaff from './screens/AddStaff';
import Admins from './screens/Admins';
import DeleteCutomers from './screens/DeleteCutomers';
import AddService from './screens/AddService';
import AddCustomer from './screens/AddCustomer';
import EditTreatmentType from './screens/EditTreatmentType';
import Login from './screens/Login'
import SideBar from './screens/CutomDrawer'
import workingHours from './screens/workingHours';
import CustomerProfil from './screens/CustomerProfil';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import EditStaff from './screens/EditStaff';
import DeleteStaff from './screens/DeleteStaff';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { color } from 'styled-system';
import { Checkbox } from 'native-base';
import Post from './screens/Post';
import AllProducts from './screens/AllProducts';
import { ActivityIndicator } from 'react-native';



const Tab = createBottomTabNavigator();
const StackCustomers = createNativeStackNavigator();
function CustomersStack() {
  return (
    <StackCustomers.Navigator initialRouteName="Customers">
      <StackCustomers.Screen name="Customers" component={Customers} options={{headerShown: false,}}/>
      <StackCustomers.Screen name="Add Customer" component={AddCustomer} />
      <StackCustomers.Screen name="Customer Profile" component={CustomerProfil} />
      <StackCustomers.Screen name="Profile" component={ViewCustomer} />
      <StackCustomers.Screen name="Edit Customer" component={EditCustomers} />
      <StackCustomers.Screen name="Delete" component={DeleteCutomers} />
    </StackCustomers.Navigator>
  )
}

const StackProfile = createNativeStackNavigator();
function ProfileStack() {
  return (
    <StackProfile.Navigator initialRouteName="Customers">
    <StackProfile.Screen name="Profile" component={UserProfil} options={{headerShown: false,}}/>
    <StackProfile.Screen name="All Products" component={AllProducts} />
    </StackProfile.Navigator>
  )
}

const StackSchedule = createNativeStackNavigator();
function ScheduleStackScreen() {
  return (
    <StackSchedule.Navigator initialRouteName="ScheduleList">
      <StackSchedule.Screen name="ScheduleList" component={ScheduleList} options={{headerShown: false,}} />
      <StackSchedule.Screen name="Add Schedule" component={AddSchedule} />
      <StackSchedule.Screen name="Schedule info" component={ScheduleInfo} />
    </StackSchedule.Navigator>
  )
}

const StackLogin = createNativeStackNavigator();
function LoginStackScreen() {
  return (
    <StackSchedule.Navigator initialRouteName="ScheduleList">
      <StackSchedule.Screen name="Login" component={Login} options={{headerShown: false,}} />
      <StackSchedule.Screen name="CustomDrawer" component={SideBar} options={{headerShown: false,}} />
    </StackSchedule.Navigator>
  )
}

const StackStaff = createNativeStackNavigator(); 
function StaffStackScreen() {
  return (
    <StackStaff.Navigator initialRouteName="Staff">
      <StackStaff.Screen name="Staff" component={Staff} options={{headerShown: false,}} />
      <StackStaff.Screen name="Add Staff" component={AddStaff} />
      <StackStaff.Screen name="Edit Staff" component={EditStaff} />
      <StackStaff.Screen name="View Staff" component={ViewStaff} />
      <StackStaff.Screen name="Delete Staff" component={DeleteStaff} />
    </StackStaff.Navigator>
  )
}

const StackTreatmentType = createNativeStackNavigator();
function TreatmentTypeStackScreen() {
  return (
    <StackTreatmentType.Navigator initialRouteName="Treatment Type">
      <StackTreatmentType.Screen name="Treatment Type" component={TreatmentType} options={{headerShown: false,}} />
      <StackTreatmentType.Screen name="Add Treatment Type" component={AddTreatmentType} />
      <StackTreatmentType.Screen name="Edit Treatment Type" component={EditTreatmentType} />
      <StackTreatmentType.Screen name="Delete Treatment Type" component={DeleteTreatmentType} />
    </StackTreatmentType.Navigator>
  )
}

const StackTreatment = createNativeStackNavigator();
function TreatmentStackScreen() {
  return (
    <StackTreatment.Navigator initialRouteName="Treatments">
      <StackTreatment.Screen name="Treatments" component={TreatmentList} options={{headerShown: false,}} />
      <StackTreatment.Screen name="Add Treatment" component={AddTreatment} />
      <StackTreatmentType.Screen name="View Treatment" component={ViewTreatment} />
      <StackTreatment.Screen name="Edit Treatment" component={EditTreatment} />
      <StackTreatment.Screen name="Delete Treatment" component={DeleteTreatment} />
    </StackTreatment.Navigator>
  )
}

const StackTask = createNativeStackNavigator();
function TaskStackScreen() {
  return (
    <StackTask.Navigator initialRouteName="Task">
      <StackTask.Screen name="Task" component={Task} options={{headerShown: false,}} />
      <StackTask.Screen name="Add Schedule" component={AddSchedule} />
    </StackTask.Navigator>
  )
}

const AdminTask = createNativeStackNavigator();
function AdminStackScreen() {
  return (
    <AdminTask.Navigator initialRouteName="Task">
      <AdminTask.Screen name="Admin" component={Admins} options={{headerShown: false,}} />
      <AdminTask.Screen name="Add Admin" component={AddAdmin} />
    </AdminTask.Navigator>
  )
}

const workingTask = createNativeStackNavigator();
function HoursStackScreen() {
  return (
    <workingTask.Navigator initialRouteName="workingHours">
      <workingTask.Screen name="workingHours" component={workingHours} options={{headerShown: false,}} />
      <workingTask.Screen name="Add working Hours" component={AddWorkingHours} />
    </workingTask.Navigator>
  )
}






const Drawer = createDrawerNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarShowLabel: false,
      tabBarStyle: {
          backgroundColor: '#418789',
          position: 'absolute',
          elevation: 0,
          borderRadius: 15,
          justifyContent: 'center',
          alignItems: 'center'
          

      },
  }}
    >
      <Tab.Screen name="Home" component={Home} options={{
              headerShown: false,
              tabBarIcon: ({focused}) => (
                  <Image source={require('./assets/icons/HomeIcon.png')} 
                  style={{tintColor: focused ? 'black' : 'white', marginTop: 15}}
                  />
              ),
          }} />
      <Tab.Screen name="Schedule" component={ScheduleStackScreen} options={{
              headerShown: false,
              tabBarIcon: ({focused}) => (
                  <Image source={require('./assets/icons/ScheduleIcon.png')} 
                  style={{tintColor: focused ? 'black' : 'white', marginTop: 15}}
                  />
              ),
          }}/>
      <Tab.Screen name="Customers" component={CustomersStack} options={{
              headerShown: false,
              tabBarIcon: ({focused}) => (
                  <Image source={require('./assets/icons/CustomersIcon.png')} 
                  style={{tintColor: focused ? 'black' : 'white', marginTop: 15}}
                  />
              ),
          }}/>
      <Tab.Screen name="User" component={ProfileStack} options={{
              headerShown: false,
              tabBarIcon: ({focused}) => (
                  <Image source={require('./assets/icons/UserIcon.png')} 
                  style={{tintColor: focused ? 'black' : 'white', marginTop: 15}}
                  />
              ),
          }} />
    </Tab.Navigator>
  )
} 



export default function App () {
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(null);

  // useEffect(() => {
  //   setTimeout(() =>{
  //     setIsLoading(false)
  //   }, 1000);
  // }, [])
  
  // if( isLoading ){
  //   return(
  //     <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}} >
  //         <ActivityIndicator size="large" />
  //     </View>
  //   )
  // }
  return ( 
    <NavigationContainer>
         <Drawer.Navigator drawerContent={props => <SideBar {...props} />}>
              <Drawer.Screen name="Home " component={TabNavigator} options={{headerShown: false, drawerActiveTintColor: 'black', }}/>
              <Drawer.Screen name="Staff" component={StaffStackScreen} options={{headerShown: false,}}/>
              <Drawer.Screen name="Treatment Catagories" component={TreatmentTypeStackScreen} options={{headerShown: false,}}/>
              <Drawer.Screen name="Treatments" component={TreatmentStackScreen} options={{headerShown: false,}}/>
              <Drawer.Screen name="Working Hours" component={HoursStackScreen} options={{headerShown: false,}}/>
              <Drawer.Screen name="Promotion" component={Promotion} options={{headerShown: false,}}/>
              <Drawer.Screen name="Schedule List" component={TaskStackScreen} options={{headerShown: false,}}/>
              <Drawer.Screen name="User Management" component={AdminStackScreen} options={{headerShown: false,}}/>
              <Drawer.Screen name="Log out" component={LoginStackScreen} options={{headerShown: false,}}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

