import React from 'react';
import {
  ImageBackground,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
  ActivityIndicator,
  I18nManager,
  ScrollView,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MainHeader from '../Component/MainHeader';
import Entypo from 'react-native-vector-icons/Entypo';
import {SearchBar} from 'react-native-elements';
import { Row, Col, Content, Form, Item, Input, Label } from 'native-base';
import Modal from "react-native-modal";
export default class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      search: '',
      iconColour: true,
      washingMachine: true,
      bike: true,
      showMape:false,
      Category: [
        {
          name: 'Smart Phones',
          Image: require('../assets/images/phone1.png'),
          selectedImage: require('../assets/images/phone1_white.png'),
          id:125
        },
        {
          name: 'LCDs',
          Image: require('../assets/images/lcd.png'),
          selectedImage: require('../assets/images/lcd_white.png'),
          id:177
        },
        {
          name: 'Bike',
          Image: require('../assets/images/bike.png'),
          selectedImage: require('../assets/images/bike_white.png'),
          id:142
        },
        {
          name: 'Air Conditioners',
          id:182,
          Image: require('../assets/images/air.png'),
          selectedImage: require('../assets/images/air_white.png'),
        },
      
        {
          name: 'Refrigerator',
          id:193,
          Image: require('../assets/images/wash.png'),
          selectedImage: require('../assets/images/wash_white.png'),
        },
        // {
        //   name: 'Washing Machines',
        //   id:0,
        //   Image: require('../assets/images/air.png'),
        //   selectedImage: require('../assets/images/air_white.png'),
        // },
        // {
        //   name: 'fright',
        //   Image: require('../assets/images/phone1.png'),
        // },
        // {
        //   name: 'Washing machine ',
        //   Image: require('../assets/images/facebook.png'),
        // },
        // {
        //   name: 'bikes',
        //   Image: require('../assets/images/facebook.png'),
        // },
      ],
  
      productPics: [
        {
          name: 'bikes',
          Image: require('../assets/images/phone.png'),
        },
        {
          name: 'mobile',
          Image: require('../assets/images/phone.png'),
        },
        {
          name: 'Home Appliencce',
          Image: require('../assets/images/phone.png'),
        },
        {
          name: 'fright',
          Image: require('../assets/images/phone.png'),
        },
        // {
        //   name: 'Washing machine ',
        //   Image: require('../assets/images/facebook.png'),
        // },
        // {
        //   name: 'bikes',
        //   Image: require('../assets/images/facebook.png'),
        // },
      ],
      bikesArray: [
        {
          name: 'honda bike ',
          engineCapacity: '12 cc',
          price: ' 11,500 ',

          Image: require('../assets/images/21.png'),
        },
        {
          name: ' unique  bikes',
          engineCapacity: '12 cc',
          price: ' 18,500 ',

          Image: require('../assets/images/22.png'),
        },
        {
          name: ' super star bikes',
          engineCapacity: '12 cc',
          price: ' 81,500 ',

          Image: require('../assets/images/21.png'),
        },
        {
          name: ' honda  bikes',
          engineCapacity: '12 cc',
          price: ' 10,500 ',

          Image: require('../assets/images/21.png'),
        },
        // {
        //   name: 'bikes',
        //   engineCapacity:'12 cc',
        //   price:' 101 ,500 ',

        //   Image: require('../assets/images/facebook.png'),
        // },
      ],
      MobileArray: [
        {
          name: 'Infenix ',
          engineCapacity: '12 Gb / 250 hz / sd card',
          price: ' 11,500 ',

          Image: require('../assets/images/mobilephone.jpg'),
        },
        {
          name: 'Infenix ',
          engineCapacity: '12 Gb / 250 hz / sd card',
          price: ' 11,500 ',

          Image: require('../assets/images/phone.png'),
        },
        {
          name: 'Infenix ',
          engineCapacity: '12 Gb / 250 hz / sd card',
          price: ' 11,500 ',

          Image: require('../assets/images/phone.png'),
        },
        {
          name: 'Infenix ',
          engineCapacity: '12 Gb / 250 hz / sd card',
          price: ' 11,500 ',

          Image: require('../assets/images/mobilephone.jpg'),
        },
      ],
      WachingMachine: [
        {
          name: 'Infenix ',
          engineCapacity: '12 Gb / 250 hz / sd card',
          price: ' 11,500 ',

          Image: require('../assets/images/mobilephone.jpg'),
        },
        {
          name: 'Infenix ',
          engineCapacity: '12 Gb / 250 hz / sd card',
          price: ' 11,500 ',

          Image: require('../assets/images/phone.png'),
        },
        {
          name: 'Infenix ',
          engineCapacity: '12 Gb / 250 hz / sd card',
          price: ' 11,500 ',

          Image: require('../assets/images/phone.png'),
        },
        {
          name: 'Infenix ',
          engineCapacity: '12 Gb / 250 hz / sd card',
          price: ' 11,500 ',

          Image: require('../assets/images/mobilephone.jpg'),
        },
      ],
    };
  }
  updateSearch = search => {
    this.setState({search});
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          height: 100,
        }}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            backgroundColor: '#f5f5f5',
            paddingBottom: 50,
          }}>
             <MainHeader navigation={this.props.navigation} />
             <Row
            style={{
              height: 40,
              width: '100%',
              // borderWidth: 1,
              backgroundColor: '#DD3333',
              flexDirection: 'row',
              paddingLeft: 20,
            //   alignItems: 'center',
            // justifyContent:'center',
            alignItems:'center'
            }}>
            <Col style={{ flexDirection: 'row',alignItems:'center'}}>
            <Entypo name={'phone'} size={20} color="white" />
            <Text
              style={{marginHorizontal: 5,fontSize:12, color: 'white', fontWeight: '400'}}>
              {' '}
              03008487711{' '}
            </Text>
            </Col>
            <Col>
            <Text
              style={{textAlign:'right',marginHorizontal: 5,paddingLeft:10, color: 'white',fontSize:12, fontWeight: '400'}}>
              {' '}
              نقدوآسان اقساط کا بااعتماد ادارہ{' '}
            </Text>
            </Col>
          </Row>

         

         

        
          <View
            style={{
              width: '70%',
              alignSelf: 'center',
              borderBottomWidth: 4,
              height: 50,
              borderRadius: 10,
              borderColor: '#dadada',
              justifyContent: 'center',
            }}>
            <View
              style={{
                width: '40%',
                alignSelf: 'center',
                borderBottomWidth: 4,
                position: 'absolute',
                bottom: -4,
                // height: 50,
                borderRadius: 10,
                borderColor: '#DD3333',
              }}></View>
            <Text
              style={{
                width: '40%',
                alignSelf: 'center',
                // borderBottomWidth: 4,
                borderColor: '#DD3333',
                textAlign: 'center',
                // height: 20,
                borderRadius: 15,
                fontSize: 20,
                fontWeight: '600',marginBottom:10
              }}>
              {' '}
              Calculator
            </Text>
          </View>
          <View style={{padding:20}}>
          <Text>Select Category</Text>
              </View>
          <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            width: '100%',
            // padding: 1,
            // borderWidth: 1,
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            paddingVertical: 10,
            // marginTop: 30,
          }}>
             
          {this.state.Category.map((item, i) => {
            return (
              <TouchableOpacity
                disabled={item.id == 0 && true}
                style={{
                  height: 60,
                  width: 60,
                  backgroundColor:
                    this.state.selectedID == item.id ? '#DD3333' : 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                  marginVertical: 5,
                  marginHorizontal: 10,
                  borderRadius: 90,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,

                  elevation: 2,
                }}
              >
                <Image
                  source={
                    this.state.selectedID == item.id
                      ? item.selectedImage
                      : item.Image
                  }
                  style={{height: '50%', width: '50%'}}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            );
          })}
           <View
          style={{
            // height: 100,
            flex:1,
            width: '90%',
            alignSelf:'center',
            backgroundColor: 'white',
            // alignItems: 'center',
            // justifyContent: 'center',
            // overflow: 'hidden',
            marginVertical: 10,
            marginHorizontal: 10,
            paddingVertical:15,
            borderRadius: 7,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 2,
          }}
          >
                <View >
                        

                      <View style={{alignItems:'flex-start',paddingHorizontal:20}}>
                        <Item style={{marginTop:10}} floatingLabel >
                    <Label>Product Name </Label>
                    <Input onChangeText={(text)=>{this.setState({yourname:text})}} />
                  </Item>
                  <Item style={{marginTop:10}}  floatingLabel>
                    <Label>Price</Label>
                    <Input onChangeText={(text)=>{this.setState({fhname:text})}}  />
                  </Item>
                  <Item style={{marginTop:10}}  floatingLabel>
                    <Label>Advance Payment</Label>
                    <Input  placeholder={'Advance Payment '} onChangeText={(text)=>{this.setState({yourtel:text})}}  />
                  </Item>
                  <Item style={{marginTop:10}}  floatingLabel>
                    <Label>Valid From</Label>
                    <Input  placeholder={'Advance Payment '} onChangeText={(text)=>{this.setState({yourtel:text})}}  />
                  </Item>
                  <Item style={{marginTop:10}}  floatingLabel>
                    <Label>Month</Label>
                    <Input  placeholder={'Advance Payment '} onChangeText={(text)=>{this.setState({yourtel:text})}}  />
                  </Item>

                  <TouchableOpacity
         
                    style={{
                      width: '80%',
                    //   alignSelf: 'center',
                    //   alignItems: 'center',
                    //   justifyContent: 'center',
                      // borderWidth: 1,
                      height:40,
                      backgroundColor: '#bd2e1e',
                      paddingVertical: 10,
                      marginVertical: 20,
                      justifyContent:'center',
                      borderRadius: 5,
                      borderBottomEndRadius:0,
                      borderTopStartRadius:0,
                      alignSelf:'center',
                      marginBottom:20
                    }}>
<Text style={{textAlign:'center',color:'white',paddingHorizontal:40}}> Calculate</Text>
                  </TouchableOpacity>
                  </View>
                </View>
               
          </View>
         
        </View>
        </ScrollView>
      </View>
    );
  }
}
