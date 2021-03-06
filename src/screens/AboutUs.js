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
import { Row, Col } from 'native-base';
import Modal from "react-native-modal";
export default class AboutUs extends React.Component {
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
          name: 'bikes',
          Image: require('../assets/images/tv.png'),
        },
        {
          name: 'mobile',
          Image: require('../assets/images/wash.png'),
        },
        {
          name: 'Home Appliencce',
          Image: require('../assets/images/bike.png'),
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
              About Us
            </Text>
          </View>
          <View style={{padding:20,}}>
            <Text style={{color:'#231F20'}}>Every time when you think of buying a good quality product on installments with reasonable prices, the name of our trusted leasing company will definitely click your mind. When the dire necessity of any home appliance forces you to look for a trustworthy company, PARADISE CENTRE is always there to facilitate you. By the grace of God, our company deals with high standard products and does not give any chance of complaint to its clients.</Text>
            <Text style={{color:'#231F20'}}>Our foremost priority is to provide you with our best services in accordance with the quality of our motor cycles, mobile phones, laptops, air coolers, washing machines, air conditioners, LEDs and many other home appliances. Now you need not to worry when you require any of the above mentioned electronics. The only work you have to do is to come to Paradise centre and purchase the product of your choice by the easiest method  you have ever heard  about. It does not count whether you are in any area of the country. As for the convenience of our customers, we have opened many branches in Lahore.

</Text>

          
          </View>
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
                width: '100%',
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
              Our Website
            </Text>
          </View>
          <View
                  style={{
                    // height: 100,
                    width: '90%',
                    alignSelf:'center',
                    backgroundColor: 'white',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
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
         
          <View style={{alignSelf:'center'}}>

                  <Text style={{textAlign:'center' ,color:'#231F20'}}>www.paradisecity.com</Text>
          </View>
          </View>
          <View
                  style={{
            
                    width: '90%',
                    alignSelf:'center',
                    backgroundColor: 'white',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    marginVertical: 20,
                    marginHorizontal: 10,
         
                    borderRadius: 7,
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,

                    elevation: 2,
                    paddingBottom:30
                  }}
                  >
                  <Image
                    source={require('./../assets/images/map.png')}
                    style={{height: 160, width: '100%'}}
                    resizeMode="cover"
                  />

          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              width: '80%',
              // padding: 1,
              // borderWidth: 1,
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              paddingVertical: 10,
            }}>
               
                </View>
                <View style={{paddingLeft:20,alignSelf:'flex-start'}}>
                        <Text style={{fontWeight:'bold',fontSize:22,textAlign:'left' ,color:'#231F20'}}>Paradise Centre P1</Text>
                        {/* <Text style={{fontSize:11,textAlign:'left' ,color:'grey'}}>64 GB</Text> */}
                </View>
                <View style={{marginTop:10,paddingLeft:20,alignSelf:'flex-start'}}>
                        <Text style={{fontSize:10,textAlign:'left' ,color:'grey',textTransform:'uppercase'}}>Head Office</Text>
                        <Text style={{fontSize:16,textAlign:'left' ,color:'#231F20'}}> 0300-8487711</Text>
                </View>
                <View style={{marginTop:10,paddingLeft:20,alignSelf:'flex-start'}}>
                        <Text style={{fontSize:10,textAlign:'left' ,color:'grey',textTransform:'uppercase'}}>Email</Text>
                        <Text style={{fontSize:16,textAlign:'left' ,color:'#231F20'}}>headoffice@paradisecentre.pk</Text>
                </View>
                <View style={{marginTop:10,paddingLeft:20,alignSelf:'flex-start'}}>
                        <Text style={{fontSize:10,textAlign:'left' ,color:'grey',textTransform:'uppercase'}}>Address</Text>
                        <Text style={{fontSize:16,textAlign:'left' ,color:'#231F20'}}>Near Toyota Car Showroom, Peco Road Kot Lakhpat Lahore</Text>
                </View>
            </View>
            <TouchableOpacity onPress={()=>this.setState({showMape:true})} style={{marginTop:10,alignSelf:'center'}}>
                        <Text style={{fontSize:15,textAlign:'center' ,color:'#DD3333'}}>See All Locations</Text>
                        {/* <Text style={{fontSize:16,textAlign:'left' ,color:'#231F20'}}>Near Toyota Car Showroom, Peco Road Kot Lakhpat Lahore</Text> */}
                </TouchableOpacity>
        

       
                <Modal isVisible={this.state.showMape}>
                  <ScrollView style={{flex:1,backgroundColor:'#F5F5F5',paddingVertical:20,paddingBottom:100}}>
                <View
                  style={{
            
                    width: '90%',
                    alignSelf:'center',
                    backgroundColor: 'white',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    marginVertical: 20,
                    marginHorizontal: 10,
         
                    borderRadius: 7,
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,

                    elevation: 2,
                    paddingBottom:30
                  }}
                  >
                  <Image
                    source={require('./../assets/images/map1.png')}
                    style={{height: 160, width: '100%'}}
                    resizeMode="cover"
                  />

          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              width: '80%',
              // padding: 1,
              // borderWidth: 1,
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              paddingVertical: 10,
            }}>
               
                </View>
                <View style={{paddingLeft:20,alignSelf:'flex-start'}}>
                        <Text style={{fontWeight:'bold',fontSize:22,textAlign:'left' ,color:'#231F20'}}>Paradise Centre P2</Text>
                        {/* <Text style={{fontSize:11,textAlign:'left' ,color:'grey'}}>64 GB</Text> */}
                </View>
                <View style={{marginTop:10,paddingLeft:20,alignSelf:'flex-start'}}>
                        <Text style={{fontSize:10,textAlign:'left' ,color:'grey',textTransform:'uppercase'}}>Branch Office</Text>
                        <Text style={{fontSize:16,textAlign:'left' ,color:'#231F20'}}>0320-4444211</Text>
                </View>
                <View style={{marginTop:10,paddingLeft:20,alignSelf:'flex-start'}}>
                        <Text style={{fontSize:10,textAlign:'left' ,color:'grey',textTransform:'uppercase'}}>Email</Text>
                        <Text style={{fontSize:16,textAlign:'left' ,color:'#231F20'}}>pc2@paradisecentre.pk</Text>
                </View>
                <View style={{marginTop:10,paddingLeft:20,alignSelf:'flex-start'}}>
                        <Text style={{fontSize:10,textAlign:'left' ,color:'grey',textTransform:'uppercase'}}>Address</Text>
                        <Text style={{fontSize:16,textAlign:'left' ,color:'#231F20'}}>Main Almadina Road Township Store Lahore</Text>
                </View>
            </View>
            <View
                  style={{
            
                    width: '90%',
                    alignSelf:'center',
                    backgroundColor: 'white',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    marginVertical: 20,
                    marginHorizontal: 10,
         
                    borderRadius: 7,
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,

                    elevation: 2,
                    paddingBottom:30
                  }}
                  >
                  <Image
                    source={require('./../assets/images/map2.png')}
                    style={{height: 160, width: '100%'}}
                    resizeMode="cover"
                  />

          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              width: '80%',
              // padding: 1,
              // borderWidth: 1,
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              paddingVertical: 10,
            }}>
               
                </View>
                <View style={{paddingLeft:20,alignSelf:'flex-start'}}>
                        <Text style={{fontWeight:'bold',fontSize:22,textAlign:'left' ,color:'#231F20'}}>Paradise Centre P3</Text>
                        {/* <Text style={{fontSize:11,textAlign:'left' ,color:'grey'}}>64 GB</Text> */}
                </View>
                <View style={{marginTop:10,paddingLeft:20,alignSelf:'flex-start'}}>
                        <Text style={{fontSize:10,textAlign:'left' ,color:'grey',textTransform:'uppercase'}}>Branch</Text>
                        <Text style={{fontSize:16,textAlign:'left' ,color:'#231F20'}}>0321-3311311</Text>
                </View>
                <View style={{marginTop:10,paddingLeft:20,alignSelf:'flex-start'}}>
                        <Text style={{fontSize:10,textAlign:'left' ,color:'grey',textTransform:'uppercase'}}>Email</Text>
                        <Text style={{fontSize:16,textAlign:'left' ,color:'#231F20'}}>pc3@paradisecentre.pk</Text>
                </View>
                <View style={{marginTop:10,paddingLeft:20,alignSelf:'flex-start'}}>
                        <Text style={{fontSize:10,textAlign:'left' ,color:'grey',textTransform:'uppercase'}}>Address</Text>
                        <Text style={{fontSize:16,textAlign:'left' ,color:'#231F20'}}>Ismail Nagar Chungi Amer Sidhu Ferozepur Road Lahore</Text>
                </View>
            </View>
            <View
                  style={{
            
                    width: '90%',
                    alignSelf:'center',
                    backgroundColor: 'white',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    marginVertical: 20,
                    marginHorizontal: 10,
         
                    borderRadius: 7,
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,

                    elevation: 2,
                    paddingBottom:30
                  }}
                  >
                  <Image
                    source={require('./../assets/images/map3.png')}
                    style={{height: 160, width: '100%'}}
                    resizeMode="cover"
                  />

          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              width: '80%',
              // padding: 1,
              // borderWidth: 1,
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              paddingVertical: 10,
            }}>
               
                </View>
                <View style={{paddingLeft:20,alignSelf:'flex-start'}}>
                        <Text style={{fontWeight:'bold',fontSize:22,textAlign:'left' ,color:'#231F20'}}>Paradise Centre P4</Text>
                        {/* <Text style={{fontSize:11,textAlign:'left' ,color:'grey'}}>64 GB</Text> */}
                </View>
                <View style={{marginTop:10,paddingLeft:20,alignSelf:'flex-start'}}>
                        <Text style={{fontSize:10,textAlign:'left' ,color:'grey',textTransform:'uppercase'}}>Head Office</Text>
                        <Text style={{fontSize:16,textAlign:'left' ,color:'#231F20'}}> 0306-5077771</Text>
                </View>
                <View style={{marginTop:10,paddingLeft:20,alignSelf:'flex-start'}}>
                        <Text style={{fontSize:10,textAlign:'left' ,color:'grey',textTransform:'uppercase'}}>Email</Text>
                        <Text style={{fontSize:16,textAlign:'left' ,color:'#231F20'}}>pc5@paradisecentre.pk</Text>
                </View>
                <View style={{marginTop:10,paddingLeft:20,alignSelf:'flex-start'}}>
                        <Text style={{fontSize:10,textAlign:'left' ,color:'grey',textTransform:'uppercase'}}>Address</Text>
                        <Text style={{fontSize:16,textAlign:'left' ,color:'#231F20'}}>Qainchi Bazar Near Metro Bus Stop Ferozepur Road Lahore</Text>
                </View>
            </View>
            
            <View
                  style={{
            
                    width: '90%',
                    alignSelf:'center',
                    backgroundColor: 'white',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    marginVertical: 20,
                    marginHorizontal: 10,
         
                    borderRadius: 7,
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,

                    elevation: 2,
                    paddingBottom:30
                  }}
                  >
                  <Image
                    source={require('./../assets/images/map4.png')}
                    style={{height: 160, width: '100%'}}
                    resizeMode="cover"
                  />

          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              width: '80%',
              // padding: 1,
              // borderWidth: 1,
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              paddingVertical: 10,
            }}>
               
                </View>
                <View style={{paddingLeft:20,alignSelf:'flex-start'}}>
                        <Text style={{fontWeight:'bold',fontSize:22,textAlign:'left' ,color:'#231F20'}}>Paradise Centre P5</Text>
                        {/* <Text style={{fontSize:11,textAlign:'left' ,color:'grey'}}>64 GB</Text> */}
                </View>
                <View style={{marginTop:10,paddingLeft:20,alignSelf:'flex-start'}}>
                        <Text style={{fontSize:10,textAlign:'left' ,color:'grey',textTransform:'uppercase'}}>Head Office</Text>
                        <Text style={{fontSize:16,textAlign:'left' ,color:'#231F20'}}>0321-1243222</Text>
                </View>
                <View style={{marginTop:10,paddingLeft:20,alignSelf:'flex-start'}}>
                        <Text style={{fontSize:10,textAlign:'left' ,color:'grey',textTransform:'uppercase'}}>Email</Text>
                        <Text style={{fontSize:16,textAlign:'left' ,color:'#231F20'}}>pc6@paradisecentre.pk</Text>
                </View>
                <View style={{marginTop:10,paddingLeft:20,alignSelf:'flex-start'}}>
                        <Text style={{fontSize:10,textAlign:'left' ,color:'grey',textTransform:'uppercase'}}>Address</Text>
                        <Text style={{fontSize:16,textAlign:'left' ,color:'#231F20'}}>Near Yasir Broast Chingi Amer Sidhu Ferozepur Road Lahore</Text>
                </View>
            </View>
            
            <TouchableOpacity
           onPress={()=>this.setState({showMape:false})}
           style={{
             width: '80%',
           //   alignSelf: 'center',
           //   alignItems: 'center',
           //   justifyContent: 'center',
             // borderWidth: 1,
             backgroundColor: '#bd2e1e',
             paddingVertical: 10,
             marginVertical: 20,
             borderRadius: 5,
             borderBottomEndRadius:0,
             borderTopStartRadius:0,
             alignSelf:'center',
             marginBottom:20
           }}>
           <Text style={{textAlign:'center',color:'white',paddingHorizontal:80}}> Close</Text>
         </TouchableOpacity>
            </ScrollView>
            
              </Modal>
           
        </ScrollView>
      </View>
    );
  }
}
