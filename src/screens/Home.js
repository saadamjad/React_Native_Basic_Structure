import React from 'react';
import {
  ImageBackground,
  Image,
  NetInfo,
  TouchableOpacity,
  Text,
  View,
  Platform,
  AsyncStorage,
  I18nManager,
  ScrollView,
  Alert,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ImageSlider from 'react-native-image-slider';
import Entypo from 'react-native-vector-icons/Entypo';
import {SearchBar} from 'react-native-elements';
import MainHeader from '../Component/MainHeader';
import { Row, Col, Spinner } from 'native-base';
import SplashScreen from 'react-native-splash-screen'
import {getAllProducts,getProductByCateId,getAllCategories, getFav, addToFav} from './../Apis/Apis'
export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      search: '',
      iconColour: true,
      washingMachine: true,
      bike: true,
      CateName:'All',
      showProduct:true,
      showBrand:false,
      // Category:[]
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
  
    };
  }
  handleFirstConnectivityChange = isConnected => {
    NetInfo.isConnected.removeEventListener(
      "connectionChange",
      this.handleFirstConnectivityChange
    );

    if (isConnected === false) {
      Alert.alert("You are offline!");
    } else {
      // Alert.alert("You are online!");
    }
  };
  CheckConnectivity = () => {
    // For Android devices
    if (Platform.OS === "android") {
      NetInfo.isConnected.fetch().then(isConnected => {
        if (isConnected) {
          Alert.alert("You are online!");
        } else {
          Alert.alert("You are offline!");
        }
      });
    } else {
      // For iOS devices
      NetInfo.isConnected.addEventListener(
        "connectionChange",
        this.handleFirstConnectivityChange
      );
    }
  };


  componentDidMount=async()=>{
    SplashScreen.hide()
    const res = await getAllCategories()
    console.log(res)
    if(res==undefined)
    {
      this.props.navigation.navigate('TryAgain')
    }
    
    this.setState({
      CategorySet:res
    })
    console.log('fetching one')

    const responseTotal = await getAllProducts()
    console.log('Home _retrieveData responseTotal: ', responseTotal)
    this.setState({
      productSet:responseTotal,
      orignalData:responseTotal
    })
    
    // if(responseTotal)
    // {
    //   console.log('fetching one')
    //   const responseatePhone= await getProductByCateId(125)

    //   this.setState({
    //     productSetPhone:responseatePhone
    //   })
    //   if(responseatePhone)
    //   {
    //     console.log('fetching trwo')
    //     const responseateLcd= await getProductByCateId(177)
  
    //     this.setState({
    //       productSetLcd:responseateLcd
    //     })
    //     if(responseateLcd)
    //     {
    //       console.log('fetching 3')
    //       const responseateBike= await getProductByCateId(142)
    
    //       this.setState({
    //         productSetBike:responseateBike
    //       })
    //       if(responseateBike){
    //         console.log('fetching 4')
    //         const responseateair= await getProductByCateId(182)
  
    //         this.setState({
    //           productSetAir:responseateair
    //         })
    //         if(responseateair)
    //         {
    //           console.log('fetching 5')
    //           const responseate= await getProductByCateId(12)
    //           console.log(responseate)
    //           this.setState({
    //             productSet:responseate
    //           })
    //           if(responseate){
    //             const res = await getProductByCateId(193)
    //             console.log(res)
    //             this.setState({
    //               productSetRegrig:res
    //             })
    //           }
    //         }
    //       }
    //     }
        
    //   }
    // }
  

    // const responseate= await getAllCategories()
    // console.log(responseate)
    // this.setState({
    //   categorySet:responseate
    // })

  }
  getProductByCategoryID=async(id)=>{
    if(id==125){
      console.log(id)
      this.setState({
        productSet:[],
       
      },()=>{
        this.setState({
          // productSet:this.state.productSetPhone
        })
      })
    }
    else if(id==177){
      console.log(id)
      this.setState({
        productSet:[],
       
      },()=>{
        this.setState({
        // productSet:this.state.productSetLcd
      })
    })
  }
    else if(id==142){
      console.log(id)
      this.setState({
        productSet:[],
       
      },()=>{
        this.setState({
        // productSet:this.state.productSetBike
      })
    })
  }
    else if(id==182){
      console.log(id)
      this.setState({
        // productSet:[],
       
      },()=>{
        this.setState({
        // productSet:this.state.productSetAir
      })
    })
  }
    else if(id==193){
      console.log(id)
      this.setState({
        // productSet:[],
       
      },()=>{
        this.setState({
        // productSet:this.state.productSetRegrig
      })
    })
  }
    else{
      const responseate= await getProductByCateId(id)
      console.log('car',responseate)
      this.setState({
        // productSet:responseate
      })
    }
   
  }
  getProductSub =async(id,name)=>{
    this.setState({
      CateName:name,
      productSet:undefined,
      selectedIDSub:id,
      showProduct:true
    })
    console.log('car')
    const responseate= await getProductByCateId(id)
    console.log('car',responseate)
    this.setState({
      productSet:responseate
    })
  }
  updateSearch = search => {
    this.setState({search});
  };
  getProduct=(id,name)=>{
    this.setState({
      CateName:name,
      productSet:undefined,
      selectedID:id,
      showProduct:false,showBrand:true
    })
    // this.getProductByCategoryID(id,name)
  }
  addToFav=async(item)=>{
   
    try {
      let value = await AsyncStorage.getItem('user');

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
        this.setState({
          [item.id]:item.id
        })
        let product = []
        if (value !== null) {
          // We have data!!
          console.log(value);
          value =JSON.parse(value)
          const  responseFav = await getFav(value.cookie)
          console.log(responseFav)
            if(!responseFav.product){
         
              product.push(item.id)
              product = JSON.stringify(product)
              
            }
            else{
              console.log(responseFav.product)
          product =  JSON.parse(responseFav.product)
              product.push(item.id)
              product = JSON.stringify(product)
            }
            const  response = await addToFav(value.cookie,product)
            console.log(response)
         
        }
      }
    
    } catch (error) {
      // Error retrieving data
      console.log(error)
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
            alignItems: 'center',
          }}>
          <Col style={{flexDirection: 'row', alignItems: 'center'}}>
            <Entypo name={'phone'} size={20} color="white" />
            <Text
              style={{
                marginHorizontal: 5,
                fontSize: 12,
                color: 'white',
                fontWeight: '400',
              }}>
              {' '}
              0300- 53193358{' '}
            </Text>
          </Col>
          <Col>
            <Text
              style={{
                textAlign: 'right',
                marginHorizontal: 5,
                paddingLeft: 10,
                color: 'white',
                fontSize: 12,
                fontWeight: '400',
              }}>
              {' '}
              نقدوآسان اقساط کا بااعتماد ادارہ{' '}
            </Text>
          </Col>
        </Row>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Search')}
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
            // onChangeText={text => this.setState({search: text})}
            onPress={() =>
              this.props.navigation.navigate('Search', {
                data: this.state.orignalData,
              })
            }
            onFocus={() =>
              this.props.navigation.navigate('Search', {
                data: this.state.orignalData,
              })
            }
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
        </TouchableOpacity>
        {/* <View
          style={{
            width: '100%',
            height: 170,
            elevation: 0,
            // borderWidth: ,
            borderColor: '#f1f1f1',
            // borderWidth: 1,
            marginVertical: 20,
          }}> */}
        {/* <Image
            source={require('../assets/images/kitchen.png')}
            resizeMode="contain"
            style={{height: '100%', width: '100%'}}
          /> */}
        <ImageSlider
          style={{width: '100%', height: 200}}
          resizeMode="contain"
          // style={{}}
          loopBothSides
          autoPlayWithInterval={3000}
          images={[
            'https://images.ctfassets.net/wcfotm6rrl7u/4QVsfgLQh1flLlYRauhFxJ/feb790a3097ca4e6c9a5865cb623e6eb/pds-lander-hero-nokia_2_3-en_in-mobile-india.png',
            'https://www.rd.com/wp-content/uploads/2019/11/appliances-e1576685982524.jpg',
            'https://cache1.pakwheels.com/system/bike_model_pictures/1191/original/Honda_CD_70_2019.jpg?1571739143',
            'https://www.lg.com/hk_en/images/WM/features/LG_web_banner_Home_Appliance_D_21052019_V3.jpg',
            require('../assets/images/cover3.png'),
            //  require('../assets/images/cover2.jpg'),
          ]}
        />
        {/* </View> */}

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
              fontWeight: '600',
            }}>
            {' '}
            Category
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
            marginTop: 30,
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
                onPress={() => this.getProduct(item.id, item.name)}>
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
        </View>
        {this.state.showBrand == true && (
          <View>
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
                  fontWeight: '600',
                }}>
                {' '}
                Brand
              </Text>
            </View>
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
                paddingVertical: 10,
                marginTop: 10,
                // marginHorizontal:'10%'
                // paddingHorizontal:200
              }}>
              {this.state.CategorySet &&
                this.state.CategorySet.map((item, i) => {
                  return (
                    item.parent == this.state.selectedID && (
                      <View style={{alignSelf: 'center'}}>
                        <TouchableOpacity
                          disabled={item.id == 0 && true}
                          style={{
                            height: 80,
                            width: 100,
                            alignSelf: 'center',
                            borderColor:
                              this.state.selectedIDSub == item.id
                                ? '#DD3333'
                                : 'white',
                            alignItems: 'center',
                            justifyContent: 'center',
                            overflow: 'hidden',
                            alignSelf: 'center',
                            marginVertical: 5,
                            marginHorizontal: 10,
                            borderRadius: 15,
                            shadowColor: '#000',
                            backgroundColor: 'white',
                            shadowOffset: {
                              width: 0,
                              height: 2,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,

                            elevation: 2,
                          }}
                          onPress={() =>
                            this.getProductSub(item.id, item.name)
                          }>
                          <Text
                            style={{
                              textAlign: 'center',
                              color:
                                this.state.selectedIDSub == item.id
                                  ? '#DD3333'
                                  : 'black',
                            }}>
                            {item.name}
                          </Text>
                        </TouchableOpacity>
                      </View>
                    )
                  );
                })}
            </ScrollView>
          </View>
        )}

        {this.state.showProduct == true && (
          <View>
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
                  fontWeight: '600',
                }}>
                {' '}
                {this.state.CateName}
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
              {/* <Image style={{width:'100%',height:200}} src={require('./../assets/images/cover.jpg')}/> */}
              {this.state.productSet ? (
                this.state.productSet.map((item, i) => {
                  return (
                    i < 6 && (
                      <TouchableOpacity
                        onPress={() =>
                          this.props.navigation.navigate('ProductDetails', {
                            productObj: item,
                            category: this.state.CateName,
                          })
                        }
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
                        <View
                          style={{
                            height: '60%',
                            borderWidth: 0,
                            width: '100%',
                          }}>
                          <Image
                            source={{uri: item.images[0].src}}
                            style={{height: '100%', width: '100%'}}
                            resizeMode="contain"
                          />
                          <View
                            style={{
                              height: 30,
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
                            {/* <TouchableOpacity
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
                    </TouchableOpacity> */}
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
                                // this.setState({iconColour: !this.state.iconColour})
                                this.addToFav(item)
                              }>
                              {this.state[item.id] == item.id ? (
                                <Entypo
                                  name={'heart'}
                                  size={15}
                                  color="red"
                                />
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
                        <View
                          style={{
                            height: '40%',
                            borderWidth: 0,
                            width: '100%',
                          }}>
                          <Text
                            style={{
                              fontSize: 15,
                              color: '#231f20',
                              marginLeft: 20,
                            }}>
                            {item.name}
                          </Text>
                          {/* <Text
                    style={{
                      fontSize: 15,
                      color: '#918f8f',
                      marginLeft: 20,
                      fontWeight: 'bold',
                    }}>
                    {item.stock_status}
                  </Text> */}
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
                      </TouchableOpacity>
                    )
                  );
                })
              ) : (
                <Spinner color={'#DD3333'} />
              )}
            </View>
            {this.state.showBrand == false && (
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  width: '100%',
                  // padding: 1,
                  flex: 1,
                  // borderWidth: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingVertical: 10,
                }}>
                <Image
                  source={require('../assets/images/banner1.jpeg')}
                  resizeMode="contain"
                  style={{height: 250, width: '100%'}}
                />
              </View>
            )}
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
              {/* <Image style={{width:'100%',height:200}} src={require('./../assets/images/cover.jpg')}/> */}
              {this.state.productSet &&
                this.state.productSet
                  .slice(6, this.state.productSet.length)
                  .map((item, i) => {
                    return (
                      i < 6 && (
                        <TouchableOpacity
                          onPress={() =>
                            this.props.navigation.navigate('ProductDetails', {
                              productObj: item,
                              category: this.state.CateName,
                            })
                          }
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
                          <View
                            style={{
                              height: '60%',
                              borderWidth: 0,
                              width: '100%',
                            }}>
                            <Image
                              source={{uri: item.images[0].src}}
                              style={{height: '100%', width: '100%'}}
                              resizeMode="contain"
                            />
                            <View
                              style={{
                                height: 30,
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
                                  backgroundColor: 'white',
                                  // borderWidth: 1,
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  borderTopLeftRadius: 5,

                                  // borderWidth: 1,
                                }}
                                onPress={() =>
                                  // this.setState({iconColour: !this.state.iconColour})
                                  this.addToFav(item)
                                }>
                                {this.state[item.id] == item.id ? (
                                  <Entypo
                                    name={'heart'}
                                    size={15}
                                    color="red"
                                  />
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
                          <View
                            style={{
                              height: '40%',
                              borderWidth: 0,
                              width: '100%',
                            }}>
                            <Text
                              style={{
                                fontSize: 15,
                                color: '#231f20',
                                marginLeft: 20,
                              }}>
                              {item.name}
                            </Text>
                            {/* <Text
                    style={{
                      fontSize: 15,
                      color: '#918f8f',
                      marginLeft: 20,
                      fontWeight: 'bold',
                    }}>
                    {item.stock_status}
                  </Text> */}
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
                        </TouchableOpacity>
                      )
                    );
                  })}
            </View>
            {this.state.showBrand == false && (
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  width: '100%',
                  // padding: 1,
                  flex: 1,
                  // borderWidth: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingVertical: 10,
                }}>
                <Image
                  source={require('../assets/images/banner2.jpeg')}
                  resizeMode="contain"
                  style={{height: 250, width: '100%'}}
                />
              </View>
            )}
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
              {/* <Image style={{width:'100%',height:200}} src={require('./../assets/images/cover.jpg')}/> */}
              {this.state.productSet &&
                this.state.productSet
                  .slice(12, this.state.productSet.length)
                  .map((item, i) => {
                    return (
                      i < 6 && (
                        <TouchableOpacity
                          onPress={() =>
                            this.props.navigation.navigate('ProductDetails', {
                              productObj: item,
                              category: this.state.CateName,
                            })
                          }
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
                          <View
                            style={{
                              height: '60%',
                              borderWidth: 0,
                              width: '100%',
                            }}>
                            <Image
                              source={{uri: item.images[0].src}}
                              style={{height: '100%', width: '100%'}}
                              resizeMode="contain"
                            />
                            <View
                              style={{
                                height: 30,
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
                                  backgroundColor: 'white',
                                  // borderWidth: 1,
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  borderTopLeftRadius: 5,

                                  // borderWidth: 1,
                                }}
                                onPress={() =>
                                  // this.setState({iconColour: !this.state.iconColour})
                                  this.addToFav(item)
                                }>
                                {this.state[item.id] == item.id ? (
                                  <Entypo
                                    name={'heart'}
                                    size={15}
                                    color="red"
                                  />
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
                          <View
                            style={{
                              height: '40%',
                              borderWidth: 0,
                              width: '100%',
                            }}>
                            <Text
                              style={{
                                fontSize: 15,
                                color: '#231f20',
                                marginLeft: 20,
                              }}>
                              {item.name}
                            </Text>
                            {/* <Text
                    style={{
                      fontSize: 15,
                      color: '#918f8f',
                      marginLeft: 20,
                      fontWeight: 'bold',
                    }}>
                    {item.stock_status}
                  </Text> */}
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
                        </TouchableOpacity>
                      )
                    );
                  })}
            </View>

            {this.state.showBrand == false && (
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  width: '100%',
                  // padding: 1,
                  flex: 1,
                  // borderWidth: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingVertical: 10,
                }}>
                <Image
                  source={require('../assets/images/banner3.jpeg')}
                  resizeMode="contain"
                  style={{height: 250, width: '100%'}}
                />
              </View>
            )}
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
              {/* <Image style={{width:'100%',height:200}} src={require('./../assets/images/cover.jpg')}/> */}
              {this.state.productSet &&
                this.state.productSet
                  .slice(18, this.state.productSet.length)
                  .map((item, i) => {
                    return (
                      <TouchableOpacity
                        onPress={() =>
                          this.props.navigation.navigate('ProductDetails', {
                            productObj: item,
                            category: this.state.CateName,
                          })
                        }
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
                        <View
                          style={{
                            height: '60%',
                            borderWidth: 0,
                            width: '100%',
                          }}>
                          <Image
                            source={{uri: item.images[0].src}}
                            style={{height: '100%', width: '100%'}}
                            resizeMode="contain"
                          />
                          <View
                            style={{
                              height: 30,
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
                                backgroundColor: 'white',
                                // borderWidth: 1,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderTopLeftRadius: 5,

                                // borderWidth: 1,
                              }}
                              onPress={() =>
                                // this.setState({iconColour: !this.state.iconColour})
                                this.addToFav(item)
                              }>
                              {this.state[item.id] == item.id ? (
                                <Entypo
                                  name={'heart'}
                                  size={15}
                                  color="red"
                                />
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
                        <View
                          style={{
                            height: '40%',
                            borderWidth: 0,
                            width: '100%',
                          }}>
                          <Text
                            style={{
                              fontSize: 15,
                              color: '#231f20',
                              marginLeft: 20,
                            }}>
                            {item.name}
                          </Text>
                          {/* <Text
                    style={{
                      fontSize: 15,
                      color: '#918f8f',
                      marginLeft: 20,
                      fontWeight: 'bold',
                    }}>
                    {item.stock_status}
                  </Text> */}
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
                      </TouchableOpacity>
                    );
                  })}
            </View>
          </View>
        )}
      </ScrollView>
    </View>
      );
  }
}
