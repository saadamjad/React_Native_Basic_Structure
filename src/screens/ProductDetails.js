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
import {SearchBar} from 'react-native-elements';import Modal from "react-native-modal";
import { Row, Col } from 'native-base';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
export default class ProductDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      search: '',
      iconColour: true,
      washingMachine: true,
      bike: true,
      showSubmit:false,
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

          Image: require('../assets/images/scuty.png'),
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
             <MainHeader backBtn={true}  navigation={this.props.navigation} />
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
              0300- 53193358{' '}
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
              height: 48,
              backgroundColor: '#ECECEC',
              width: '90%',
              alignSelf: 'center',
              marginVertical: 10,
              // borderWidth: 1,
              borderRadius: 10,

              alignItems: 'center',
              overflow: 'hidden',
            }}>
            <SearchBar
              placeholder=" search what you are looking fo "
              // onChangeText={this.updateSearch}
              value={this.state.search}
              onChangeText={text => this.setState({search: text})}
              containerStyle={{
                // backgroundColor: this.props.reduxState.theme.searchBarColor,
                borderTopWidth: 0,
                padding: 0,

                // borderBottomWidth: 1,

                width: '100%',
                alignSelf: 'center',

                borderRadius: 10,
              }}
              inputContainerStyle={{
                // backgroundColor: this.props.reduxState.theme.searchBarColor,
                backgroundColor: '#ECECEC',
                height: '100%',
              }}
              inputStyle={{
                borderWidth: 0,
                borderWidth: 0,
                backgroundColor: '#ECECEC',
                fontSize: 13,
              }}
              style={{borderWidth: 1}}
              lightTheme={true}
              backgroundColor={'#ECECEC'}
            />
          </View>

          <View
                  style={{
                    height: 400,
                    width: '90%',
                    alignSelf:'center',
                    backgroundColor: 'white',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    marginVertical: 20,
                    marginHorizontal: 10,
                    paddingVertical:30,
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
                  <Image
                    source={require('./../assets/images/mobilephone.jpg')}
                    style={{height: '50%', width: '50%'}}
                    resizeMode="contain"
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
                   {this.state.productPics.map((item, i) => {
                        return (
                            <TouchableOpacity
                            style={{
                                height: 60,
                                width: 60,
                                // backgroundColor: 'white',
                                alignItems: 'center',
                                justifyContent: 'center',
                                overflow: 'hidden',
                                marginVertical: 5,
                                // marginHorizontal: 10,
                                borderRadius: 5,
                               
                             
                            }}
                            // onPress={() => this.props.navigation.navigate('Category')}
                            >
                            <Image
                                source={item.Image}
                                style={{height: '50%', width: '50%'}}
                                resizeMode="contain"
                            />
                            </TouchableOpacity>
                        );
                        })}
                </View>
                <View style={{paddingLeft:20,alignSelf:'flex-start'}}>
                        <Text style={{textAlign:'left' ,color:'#231F20'}}>Real me Note 6</Text>
                        <Text style={{fontSize:11,textAlign:'left' ,color:'grey'}}>64 GB</Text>
                </View>
                <View style={{marginTop:10,paddingLeft:20,alignSelf:'flex-start'}}>
                        <Text style={{fontSize:11,textAlign:'left' ,color:'grey'}}>only</Text>
                        <Text style={{fontWeight:'bold',fontSize:20,textAlign:'left' ,color:'#DD3333'}}>Rs. 28,000</Text>
                </View>
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
              Installment
            </Text>
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
            }}>
            {this.state.Category.map((item, i) => {
              return (
                <TouchableOpacity
                  style={{
                    height: 60,
                    width: 60,
                    // backgroundColor: 'white',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    marginVertical: 5,
                    marginHorizontal: 10,
                    borderRadius: 90,
                    shadowColor: '#000',
                  
                  }}
                  onPress={() => this.props.navigation.navigate('Category')}>
                  <Text style={{color:'grey'}}>{i+4} Months</Text>
                </TouchableOpacity>
              );
            })}
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
                        <View style={{paddingLeft:20,alignSelf:'flex-start'}}>
                                <Text style={{fontSize:11,textAlign:'left' ,color:'grey'}}>Leasing Amount</Text>
                                <Text style={{fontWeight:'bold',fontSize:20,textAlign:'left' ,color:'#DD3333'}}>Rs. 28,000</Text>
                        </View>
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
                        <View style={{paddingLeft:20,alignSelf:'flex-start'}}>
                                <Text style={{fontSize:11,textAlign:'left' ,color:'grey'}}>Down Payment</Text>
                                <Text style={{fontWeight:'bold',fontSize:20,textAlign:'left' ,color:'#DD3333'}}>10%</Text>
                        </View>
                        
                  </View>
                  <Row
                  style={{
                    // height: 100,
                    width: '90%',
                    alignSelf:'center',
                    backgroundColor: 'white',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    marginVertical: 10,
                    marginHorizontal: 18,
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
                    <Col>
                        <View style={{paddingLeft:20,alignSelf:'flex-start'}}>
                                <Text style={{fontSize:11,textAlign:'left' ,color:'grey'}}>Monthly Installment</Text>
                                <Text style={{fontWeight:'bold',fontSize:25,textAlign:'left' ,color:'#DD3333'}}>Rs. 5,000</Text>
                        </View>
                        </Col>
                        <Col>
                        <TouchableOpacity
                            onPress={()=>this.setState({showLeaseForm:true})}
                              style={{
                                // width: '80%',
                              //   alignSelf: 'center',
                              //   alignItems: 'center',
                              //   justifyContent: 'center',
                                // borderWidth: 1,
                                backgroundColor: '#bd2e1e',
                                paddingVertical: 7,
                                // marginVertical: 20,
                                borderRadius: 5,
                                borderBottomEndRadius:0,
                                borderTopStartRadius:0,
                                alignSelf:'flex-end',
                                marginRight:20
                                // marginBottom:20
                              }}>
                              <Text style={{textAlign:'center',color:'white',fontSize:13,paddingHorizontal:30}}> Apply</Text>
                            </TouchableOpacity>
                        </Col>
                  </Row>
           
                        
          
          </View>
          {this.state.showLeaseForm==true?
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
                        
                        <Text style={{fontSize:20,textAlign:'center' ,color:'#DD3333'}}>Lease Form</Text>
                      <View style={{alignItems:'flex-start',paddingHorizontal:20}}>
                        <Item floatingLabel >
                    <Label>Full Name</Label>
                    <Input />
                  </Item>
                  <Item floatingLabel>
                    <Label>Father or Spouse</Label>
                    <Input />
                  </Item>
                  <Item floatingLabel>
                    <Label>Gender</Label>
                    <Input />
                  </Item>
                  <Item floatingLabel>
                    <Label>Mobile No</Label>
                    <Input />
                  </Item>
                  <Item floatingLabel>
                    <Label>Email</Label>
                    <Input />
                  </Item>
                  <Item floatingLabel>
                    <Label>Occupation</Label>
                    <Input />
                  </Item>
                  <Item floatingLabel>
                    <Label>Job Description / Title</Label>
                    <Input />
                  </Item>
                  <Item floatingLabel>
                    <Label>Earning Per Month</Label>
                    <Input />
                  </Item>
                  <Item floatingLabel>
                    <Label>Bank Account</Label>
                    <Input />
                  </Item>
                  <Item floatingLabel>
                    <Label>ID Card Number</Label>
                    <Input />
                  </Item>
                  <TouchableOpacity
                    onPress={()=>this.setState({showSubmit:true})}
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
                    <Text style={{textAlign:'center',color:'white',paddingHorizontal:40}}> Submit Form</Text>
                  </TouchableOpacity>
                  </View>
                </View>
               
          </View>
            :
          <View>
            <View style={{paddingLeft:20,alignSelf:'flex-start'}}>
                    <Text style={{fontSize:25,textAlign:'left' ,color:'#231F20'}}>Description</Text>
                    {/* <Text style={{fontWeight:'bold',fontSize:25,textAlign:'left' ,color:'#DD3333'}}>Rs. 5,000</Text> */}
            </View>

            <View
                style={{
                  width: '90%',
                  alignSelf: 'center',
                  borderBottomWidth: 4,
                  height: 50,
                  borderRadius: 10,
                  borderColor: '#dadada',
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    width: '30%',
                    alignSelf: 'flex-start',
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
                    alignSelf: 'flex-start',
                    // borderBottomWidth: 4,
                    borderColor: '#DD3333',
                    textAlign: 'left',
                    // height: 20,
                    borderRadius: 15,
                    fontSize: 18,
                    fontWeight: '600',marginBottom:0
                  }}>
                  {' '}
                  Build
                </Text>
              </View>
            <View style={{marginTop:10,paddingLeft:20,alignSelf:'flex-start'}}>
                    <Text style={{textAlign:'left' ,color:'grey'}}>OS</Text>
                    <Text style={{textAlign:'left' ,color:'#231F20'}}>IOS 13</Text>
            </View>
            <View style={{marginTop:10,paddingLeft:20,alignSelf:'flex-start'}}>
                    <Text style={{textAlign:'left' ,color:'grey'}}>SIM</Text>
                    <Text style={{textAlign:'left' ,color:'#231F20'}}>Dual Sim, Dual Standby (Nano-SIM)</Text>
            </View>
            <View style={{marginTop:10,paddingLeft:20,alignSelf:'flex-start'}}>
                    <Text style={{textAlign:'left' ,color:'grey'}}>Dimensions</Text>
                    <Text style={{textAlign:'left' ,color:'#231F20'}}>150.9 x 75.7 x 8.3 mm</Text>
            </View>
          
            <View
                style={{
                  width: '90%',
                  alignSelf: 'center',
                  borderBottomWidth: 4,
                  height: 50,
                  borderRadius: 10,
                  borderColor: '#dadada',
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    width: '30%',
                    alignSelf: 'flex-start',
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
                    alignSelf: 'flex-start',
                    // borderBottomWidth: 4,
                    borderColor: '#DD3333',
                    textAlign: 'left',
                    // height: 20,
                    borderRadius: 15,
                    fontSize: 18,
                    fontWeight: '600',marginBottom:0
                  }}>
                  {' '}
                  Frequency
                </Text>
              </View>
            <View style={{marginTop:10,paddingLeft:20,alignSelf:'flex-start'}}>
                    <Text style={{textAlign:'left' ,color:'grey'}}>2G Band</Text>
                    <Text style={{textAlign:'left' ,color:'#231F20'}}>SIM1: GSM 850 / 900 / 1800 / 1900 SIM2: GSM 850 / 900 / 1800 / 1900</Text>
            </View>
            <View style={{marginTop:10,paddingLeft:20,alignSelf:'flex-start'}}>
                    <Text style={{textAlign:'left' ,color:'grey'}}>3G Band</Text>
                    <Text style={{textAlign:'left' ,color:'#231F20'}}>HSDPA 850 / 900 / 1700(AWS) / 1900 / 2100</Text>
            </View>
            <View style={{marginTop:10,paddingLeft:20,alignSelf:'flex-start'}}>
                    <Text style={{textAlign:'left' ,color:'grey'}}>4G Band</Text>
                    <Text style={{textAlign:'left' ,color:'#231F20'}}>LTE band 1(2100), 2(1900), 3(1800), 4(1700/2100), 5(850), 7(2600), 8(900), 12(700), 13(700), 17(700), 18(800), 19(800), 20(800), 25(1900), 26(850), 28(700), 29(700), 30(2300), 34(2000), 38(2600), 39(1900), 40(2300), 41(2500), 66(1700/2100)</Text>
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
                  marginTop:20
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
                    width: '80%',
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
                  Related Product
                </Text>
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
                  paddingVertical: 10,
                }}>
                {this.state.bikesArray.map((item, i) => {
                  return (
                    <View
                      style={{
                        height: 270,
                        width: '45%',
                        backgroundColor: 'white',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginVertical: 10,
                        marginHorizontal: 5,
                        borderRadius: 10,

                        overflow: 'hidden',
                        shadowColor: '#000',
                        shadowOffset: {
                          width: 0,
                          height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,

                        elevation: 2,
                      }}>
                      <View style={{height: '60%', borderWidth: 0, width: '100%'}}>
                        <Image
                          source={item.Image}
                          style={{height: '100%', width: '100%'}}
                          resizeMode="contain"
                        />
                        <View
                          style={{
                            height: 65,
                            width: 39,
                            // borderWidth: 1,
                            position: 'absolute',
                            left: 0,
                            shadowColor: '#000',
                            shadowOffset: {
                              width: 0,
                              height: 2,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,

                            borderColor: '#e2e2e2',
                            elevation: 7,
                            backgroundColor: 'white',
                          }}>
                          <TouchableOpacity
                            style={{
                              height: '50%',
                              width: '100%',
                              flex: 1,
                              // borderWidth: 1,
                              alignItems: 'center',
                              justifyContent: 'center',
                              backgroundColor: '#c32020',

                              // borderWidth: 1,
                            }}>
                            <Entypo name={'eye'} size={15} color="white" />
                          </TouchableOpacity>
                          <TouchableOpacity
                            style={{
                              height: '50%',
                              width: '100%',
                              flex: 1,
                              backgroundColor: 'white',
                              // borderWidth: 1,
                              alignItems: 'center',
                              justifyContent: 'center',
                              borderTopLeftRadius: 5,

                              // borderWidth: 1,
                            }}
                            onPress={() =>
                              this.setState({iconColour: !this.state.iconColour})
                            }>
                            {this.state.iconColour ? (
                              <Entypo name={'heart'} size={15} color="red" />
                            ) : (
                              <Entypo
                                name={'heart-outlined'}
                                size={15}
                                color="red"
                              />
                            )}
                          </TouchableOpacity>
                        </View>
                      </View>
                      <View style={{height: '40%', borderWidth: 0, width: '100%'}}>
                        <Text
                          style={{fontSize: 15, color: '#231f20', marginLeft: 20}}>
                          {item.name}
                        </Text>
                        <Text
                          style={{
                            fontSize: 15,
                            color: '#918f8f',
                            marginLeft: 20,
                            fontWeight: 'bold',
                          }}>
                          {item.engineCapacity}
                        </Text>
                        <Text
                          style={{
                            fontSize: 8,
                            marginTop: 10,
                            color: '#918f8f',
                            marginLeft: 30,
                            fontWeight: 'bold',
                          }}>
                          only
                        </Text>
                        <Text
                          style={{
                            fontSize: 20,
                            color: '#DD3333',
                            fontWeight: 'bold',
                            textAlign: 'center',
                          }}>
                          Rs {item.price}{' '}
                        </Text>
                      </View>
                    </View>
                  );
                })}
              </View>

         </View>
          }
           
        </ScrollView>
        <Modal isVisible={this.state.showSubmit} >
          <View style={{backgroundColor:'white'}}>
          <Image style={{top:-60,alignSelf:'center',width:300,height:150}} source={require('./../assets/images/done.png')}/>
        <Text style={{fontWeight:'bold',fontSize:25,textAlign:'center' ,color:'#231F20'}}>Done</Text>
        <Text style={{marginTop:30,fontSize:13,textAlign:'center' ,color:'grey'}}>Your Order has been submitted.</Text>
        <TouchableOpacity
                    onPress={()=>this.setState({showSubmit:false})}
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
                    <Text style={{textAlign:'center',color:'white',paddingHorizontal:40}}> Return Home</Text>
                  </TouchableOpacity>
                  </View>
          </Modal>
      </View>
    );
  }
}
