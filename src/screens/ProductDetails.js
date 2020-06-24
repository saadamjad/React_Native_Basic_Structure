import React, { Component } from "react";
import {
  ImageBackground,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Dimensions,
  ActivityIndicator,
  I18nManager,
  ScrollView,
  AsyncStorage,
  Alert
  
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import HTML from 'react-native-render-html';
import MainHeader from '../Component/MainHeader';
import Entypo from 'react-native-vector-icons/Entypo';
import {SearchBar} from 'react-native-elements';import Modal from "react-native-modal";
import { Row, Col, Spinner } from 'native-base';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import { createOrder } from "../Apis/Apis";
// import console = require('console');
export default class ProductDetails extends Component {
  // export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      iconColour: true,
      washingMachine: true,
      bike: true,
      showSubmit:false,
      age:20,
      isloading:false,
      downpayment:'0%',
      Category: [
        {
          name: 3,
          Image: require('../assets/images/tv.png'),
        },
        {
          name: 6,
          Image: require('../assets/images/wash.png'),
        },
        {
          name: 9,
          Image: require('../assets/images/bike.png'),
        },
        {
          name: 12,
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
    // this.props.navigation.addListener('willFocus', this.componentWillFocus)
  }

  componentWillFocus = () => {
    // this.componentDidMount()
    // this.setState({score:0})
  }
  updateSearch = search => {
    this.setState({search});
  };
  componentDidMount=()=>{
    let product = this.props.navigation.getParam('productObj')
    let cat  = this.props.navigation.getParam('category')
    if(cat=='Honda'){
      this.setState({
        downpayment:'20%',
        Category: [
          {
            name: 3,
            Image: require('../assets/images/tv.png'),
          },
          {
            name: 6,
            Image: require('../assets/images/wash.png'),
          },
          {
            name: 9,
            Image: require('../assets/images/bike.png'),
          },
          {
            name: 12,
            Image: require('../assets/images/phone.png'),
          },
          {
            name: 15,
            Image: require('../assets/images/facebook.png'),
          },
          {
            name: 18,
            Image: require('../assets/images/facebook.png'),
          },
        ]
      })
    }
    console.log(product)

    this.setState({
      cat:cat,
      productDetails:product,
      selectedPic:product.images.lenght!=0&&product.images[0].src,
      productPics:product.images

    },()=>{    this.getMonthlyPrice(4)})

  }
  makeLeaseForm=async()=>{

    try {

        let value = await AsyncStorage.getItem('user');
        console.log(value)
        if(value==null||value==undefined||value=='')
        {

          Alert.alert(
            'You are not logged in',
            'Please log in to continue',
            [
              // {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
              {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'Login', onPress: () => this.props.navigation.navigate('Login')},
            ],
            { cancelable: false }
          )
        }
        else{
          this.setState({showLeaseForm:true})
        }
      } 
      catch{

      }
  }
  componentWillReceiveProps(nextprops){
    // console.log(nextprops)
  }
  createOrder=async()=>{
    this.setState({isloading:true})
    const response = await createOrder(this.state.productDetails.id,this.state.yourname,
      this.state.fhname,
      this.state.yourtel,
      this.state.email,this.state.gender,this.state.age,this.state.job,this.state.occu,
      this.state.work,this.state.office,this.state.residence,this.state.oficetel,
      this.state.living,this.state.earn,this.state.idcard,this.state.bank,this.state.resiMun)
      console.log(response)
      if(response.invalidFields)
      {
        this.setState({isloading:false})
        alert(response.invalidFields[0].message)
      }
      else{
        this.setState({isloading:false})
        this.setState({
          showSubmit:true,
          msg:'Thank you! you will recieve confirmation email shortly',
          yourname:'',fhname:"",yourtel:'',email:'',gender:'',age:20,job:'',occu:'',
    work:'',office:'',residence:'',oficetel:'',living:'',earn:'',idcard:'',bank:'',resiMun:''
        })
      }
    }
    getMonthlyPrice=(month)=>{
      if(this.state.cat=='Honda')
      {
        let price = parseInt(this.state.productDetails.price)
        // let downpayment = price
        let downpayment = price*0.2
       let total = price - downpayment
       total = total*0.24
       total = total/month
       this.setState({selected:month,monthlyPay:Math.floor(total)})
      }
      else{
        let price = parseInt(this.state.productDetails.price)
        let downpayment = price
       //  let downpayment = price*0.2
       let total = price 
       total = total*0.24
       total = total/month
       this.setState({selected:month,monthlyPay:Math.floor(total)})
       //  this.setState({selected:month,monthlyPay: Math.floor(downpayment/month),downpayment:"Rs. "+downpayment})
      }


    }
    getdownPayment(){
      if(this.state.cat=='Honda')
      {
      let price = parseInt(this.state.productDetails.price)
      let downpayment = price*0.2
      this.setState({
        downpayment:"Rs. "+downpayment
      })
      }
      else{
        let price = parseInt(this.state.productDetails.price)
        let downpayment = price
        this.setState({
          downpayment:"Rs. 0"
        })
      }
     
    }
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          height: 100,
        }}>
        {this.state.productDetails&&
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
                    // height: 800,
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
                    source={{uri:this.state.selectedPic}}
                    style={{height: 400, width: '100%'}}
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
                                height: 80,
                                width: 80,
                                // backgroundColor: 'white',
                                alignItems: 'center',
                                justifyContent: 'center',
                                overflow: 'hidden',
                                marginVertical: 5,
                                // marginHorizontal: 10,
                                borderRadius: 5,
                                
                               
                             
                            }}
                            onPress={()=>{this.setState({selectedPic:item.src})}}
                            // onPress={() => this.props.navigation.navigate('Category')}
                            >
                            <Image
                                source={{uri:item.src}}
                                style={{height: '50%', width: '50%'}}
                                resizeMode="contain"
                            />
                            </TouchableOpacity>
                        );
                        })}
                </View>
                <View style={{paddingLeft:20,alignSelf:'flex-start'}}>
                        <Text style={{fontSize:20,textAlign:'left' ,color:'#231F20'}}>{this.state.productDetails.name}</Text>
                        {/* <Text style={{fontSize:11,textAlign:'left' ,color:'grey'}}>64 GB</Text> */}
                </View>
                <View style={{marginTop:10,paddingLeft:20,alignSelf:'flex-start'}}>
                        <Text style={{fontSize:11,textAlign:'left' ,color:'grey'}}>only</Text>
                        <Text style={{fontWeight:'bold',fontSize:18,textAlign:'left' ,color:'#DD3333'}}>Rs. {this.state.productDetails.price}</Text>
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
              Description
            </Text>
          </View>
      <View style={{padding:20}}>      
      <HTML html={this.state.productDetails.description.replace(/\s*\[.*?\]\s*/g, '')} imagesMaxWidth={Dimensions.get('window').width} />
        <HTML html={this.state.productDetails.short_description} imagesMaxWidth={Dimensions.get('window').width} />
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
              {this.state.cat=='Honda'?
                 <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              // flexDirection: 'row',
              // flexWrap: 'wrap',
              // width:this.state.CategorySet&& this.state.CategorySet.length<3?'100%':'200%',
              // padding: 1,
              // borderWidth: 1,
              alignItems: 'center',
              justifyContent: 'center',
              // overflow: 'hidden',
              paddingVertical: 10,marginTop:10,
              // marginHorizontal:'10%'
              // paddingHorizontal:200
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
                  onPress={() => this.getMonthlyPrice(item.name)}>
                         <Text style={{color:this.state.selected==item.name?'#DD3333':'grey'}}>{item.name}</Text>
                  <Text style={{color:this.state.selected==item.name?'#DD3333':'grey'}}>Months</Text>
                </TouchableOpacity>
              );
            })}
            </ScrollView>:
             this.state.Category.map((item, i) => {
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
                  onPress={() => this.getMonthlyPrice(item.name)}>
                         <Text style={{color:this.state.selected==item.name?'#DD3333':'grey'}}>{item.name}</Text>
                  <Text style={{color:this.state.selected==item.name?'#DD3333':'grey'}}>Months</Text>
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
                                <Text style={{fontWeight:'bold',fontSize:18,textAlign:'left' ,color:'#DD3333'}}>Rs. {this.state.productDetails.price}</Text>
                        </View>
                  </View>
                  <Row
                  style={{
                    height: 70,
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
                        <Col style={{paddingLeft:20,alignSelf:'flex-start'}}>
                                <Text style={{fontSize:11,textAlign:'left' ,color:'grey'}}>Down Payment</Text>
                                <Text style={{fontWeight:'bold',fontSize:17,textAlign:'left' ,color:'#DD3333'}}>{this.state.downpayment}</Text>
                        </Col>
                        <Col style={{alignSelf:'flex-start'}}>
                        <TouchableOpacity
                            onPress={()=>this.setState({downpayment:this.state.cat=='Honda'?'20%':"0%"})}
                              style={{
                                // width: '80%',
                              //   alignSelf: 'center',
                              //   alignItems: 'center',
                              //   justifyContent: 'center',
                                // borderWidth: 1,
                                backgroundColor: 'white',
                                borderColor:"#bd2e1e",
                                borderWidth:1,
                                paddingVertical: 7,
                                // marginVertical: 20,
                                borderRadius: 5,
                                borderBottomEndRadius:0,
                                borderTopStartRadius:0,
                                alignSelf:'flex-end',marginTop:5
                                // marginRight:20
                                // marginBottom:20
                              }}>
                              <Text style={{textAlign:'center',color:'#bd2e1e',fontSize:13,paddingHorizontal:10}}> Percentage</Text>
                            </TouchableOpacity>
                        </Col>
                        <Col style={{alignSelf:'flex-start'}}>
                        <TouchableOpacity
                            onPress={()=>this.getdownPayment()}
                              style={{
                                // width: '80%',
                              //   alignSelf: 'center',
                              //   alignItems: 'center',
                              //   justifyContent: 'center',
                                // borderWidth: 1,
                                backgroundColor: 'white',
                                borderColor:"#bd2e1e",
                                borderWidth:1,
                                paddingVertical: 7,
                                // marginVertical: 20,
                                borderRadius: 5,
                                borderBottomEndRadius:0,
                                borderTopStartRadius:0,
                                alignSelf:'flex-end',
                                marginRight:20,marginTop:5
                                // marginBottom:20
                              }}>
                              <Text style={{textAlign:'center',color:'#bd2e1e',fontSize:13,paddingHorizontal:10}}> Amount</Text>
                            </TouchableOpacity>
                        </Col>
                  </Row>
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
                                <Text style={{fontWeight:'bold',fontSize:25,textAlign:'left' ,color:'#DD3333'}}>Rs. {this.state.monthlyPay}</Text>
                        </View>
                        </Col>
                        <Col>
                        <TouchableOpacity
                            onPress={this.makeLeaseForm}
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
                        <Item style={{marginTop:10}} floatingLabel >
                    <Label>Full Name (as per CNIC) *</Label>
                    <Input onChangeText={(text)=>{this.setState({yourname:text})}} />
                  </Item>
                  <Item style={{marginTop:10}}  floatingLabel>
                    <Label>Father or Husband Name *</Label>
                    <Input onChangeText={(text)=>{this.setState({fhname:text})}}  />
                  </Item>
                  <Item style={{marginTop:10}}  floatingLabel>
                    <Label>Mobile *</Label>
                    <Input keyboardType={'phone-pad'} maxLength={11} placeholder={'03121111111'} onChangeText={(text)=>{this.setState({yourtel:text})}}  />
                  </Item>
                  <Item style={{marginTop:10}}  floatingLabel>
                    <Label>Email *</Label>
                    <Input keyboardType={'email-address'} onChangeText={(text)=>{this.setState({email:text})}}  />
                  </Item>
                  <Item  style={{marginTop:10}} floatingLabel>
                    <Label>Gender</Label>
                    <Input  onChangeText={(text)=>{this.setState({gender:text})}} />
                  </Item>
                  <Item  style={{marginTop:10}} floatingLabel>
                    <Label>Age</Label>
                    <Input  onChangeText={(text)=>{this.setState({age:text})}} />
                  </Item>
                  <Item style={{marginTop:10}}  floatingLabel>
                    <Label>Job Description / Title</Label>
                    <Input onChangeText={(text)=>{this.setState({job:text})}}  />
                  </Item>
                  <Item style={{marginTop:10}}  floatingLabel>
                    <Label>Occupation</Label>
                    <Input onChangeText={(text)=>{this.setState({occu:text})}}  />
                  </Item>
                  <Item style={{marginTop:10}}  floatingLabel>
                    <Label>Working Since</Label>
                    <Input onChangeText={(text)=>{this.setState({work:text})}}  />
                  </Item>
                  <Item style={{marginTop:10}}  floatingLabel>
                    <Label>Address</Label>
                    <Input onChangeText={(text)=>{this.setState({residence:text})}}  />
                  </Item>
                  <Item style={{marginTop:10}}  floatingLabel>
                    <Label>Office Address</Label>
                    <Input onChangeText={(text)=>{this.setState({office:text})}}  />
                  </Item>
                  <Item style={{marginTop:10}}  floatingLabel>
                    <Label>Living Since</Label>
                    <Input onChangeText={(text)=>{this.setState({living:text})}}  />
                  </Item>
                  <Item style={{marginTop:10}}  floatingLabel>
                    <Label>Office Phone</Label>
                    <Input onChangeText={(text)=>{this.setState({oficetel:text})}} />
                  </Item>
                  <Item floatingLabel>
                    <Label>Earnings Per Month</Label>
                    <Input onChangeText={(text)=>{this.setState({earn:text})}} />
                  </Item>
                  <Item style={{marginTop:10}}  floatingLabel>
                    <Label>ID Card Number</Label>
                    <Input onChangeText={(text)=>{this.setState({idcard:text})}} />
                  </Item>
                  <Item  style={{marginTop:10}}  floatingLabel>
                    <Label>Bank Account </Label>
                    <Input onChangeText={(text)=>{this.setState({bank:text})}} />
                  </Item>

                  <TouchableOpacity
                    onPress={this.createOrder}
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
                   {this.state.isloading==true?<Spinner color={'white'}/>:<Text style={{textAlign:'center',color:'white',paddingHorizontal:40}}> Submit Form</Text>}
                  </TouchableOpacity>
                  </View>
                </View>
               
          </View>
            :
          <View>
            {/* <View style={{paddingLeft:20,alignSelf:'flex-start'}}>
                    <Text style={{fontSize:25,textAlign:'left' ,color:'#231F20'}}>Description</Text>
                    {/* <Text style={{fontWeight:'bold',fontSize:25,textAlign:'left' ,color:'#DD3333'}}>Rs. 5,000</Text> 
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

 */}




           
            
         </View>
          }
           
        </ScrollView>
        }
        <Modal isVisible={this.state.showSubmit} >
          <View style={{backgroundColor:'white'}}>
          <Image style={{top:-60,alignSelf:'center',width:300,height:150}} source={require('./../assets/images/done.png')}/>
        <Text style={{fontWeight:'bold',fontSize:25,textAlign:'center' ,color:'#231F20'}}>Done</Text>
        <Text style={{marginTop:30,fontSize:13,textAlign:'center' ,color:'grey'}}>{this.state.msg}.</Text>
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
