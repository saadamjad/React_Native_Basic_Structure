import React from 'react';
import {
  ImageBackground,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
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
          id:0,
          Image: require('../assets/images/tv.png'),
          selectedImage: require('../assets/images/air_white.png'),
        },
        {
          name: 'Washing Machines',
          id:0,
          Image: require('../assets/images/wash.png'),
          selectedImage: require('../assets/images/air_white.png'),
        },
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
  componentDidMount=async()=>{
    const responseTotal = await getAllProducts()
    console.log('Home _retrieveData responseTotal: ', responseTotal)
    this.setState({
      productSet:responseTotal,
      orignalData:responseTotal
    })
    const responseatePhone= await getProductByCateId(125)

    this.setState({
      productSetPhone:responseatePhone
    })
    const responseateLcd= await getProductByCateId(177)

    this.setState({
      productSetLcd:responseateLcd
    })
    const responseateBike= await getProductByCateId(142)
  
    this.setState({
      productSetBike:responseateBike
    })
    const responseateair= await getProductByCateId(182)

    this.setState({
      productSetAir:responseateair
    })

    // const responseate= await getAllCategories()
    // console.log(responseate)
    // this.setState({
    //   categorySet:responseate
    // })

    // const responseate= await getProductByID(12)
    // console.log(responseate)
    // this.setState({
    //   productSet:responseate
    // })
  }
  getProductByCategoryID=async(id)=>{
    if(id==125){
      console.log(id)
      this.setState({
        productSet:this.state.productSetPhone
      })
    }
    else if(id==177){
      console.log(id)
      this.setState({
        productSet:this.state.productSetLcd
      })
    }
    else if(id==142){
      console.log(id)
      this.setState({
        productSet:this.state.productSetBike
      })
    }
    else if(id==182){
      console.log(id)
      this.setState({
        productSet:this.state.productSetAir
      })
    }
    else{
      const responseate= await getProductByCateId(id)
      console.log('car',responseate)
      this.setState({
        productSet:responseate
      })
    }
   
  }
  updateSearch = search => {
    this.setState({search});
  };
  getProduct=(id,name)=>{
    this.setState({
      CateName:name,
      productSet:undefined,
      selectedID:id
    })
    this.getProductByCategoryID(id,name)
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

         

          <TouchableOpacity
          onPress={()=>this.props.navigation.navigate('Search')}
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
              onPress={()=>this.props.navigation.navigate('Search',{'data':this.state.orignalData})}
              onFocus={()=>this.props.navigation.navigate('Search',{'data':this.state.orignalData})}
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
          <View
            style={{
              width: '100%',
              height: 240,
              elevation: 0,
              // borderWidth: ,
              borderColor: '#f1f1f1',
              // borderWidth: 1,
              marginVertical: 20,
            }}>
            {/* <Image
              source={require('../assets/images/kitchen.png')}
              resizeMode="contain"
              style={{height: '100%', width: '100%'}}
            /> */}
                    <ImageSlider   loopBothSides
          autoPlayWithInterval={3000} images={[
                   
           require('../assets/images/kitchen.png'),
           require('../assets/images/cover.jpg'),
           require('../assets/images/cover2.jpg'),
          ]}/>
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
              paddingVertical: 10,marginTop:30
            }}>
             {this.state.Category.map((item, i) => {
          
              return (
           
                <TouchableOpacity
                disabled={item.id==0&&true}
                  style={{
                    height: 60,
                    width: 60,
                    backgroundColor: this.state.selectedID==item.id?'#DD3333':'white',
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
                  onPress={()=>this.getProduct(item.id,item.name)}>
                  <Image
                    source={this.state.selectedID==item.id?item.selectedImage:item.Image}
                    style={{height: '50%', width: '50%'}}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              );
            })}
  
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
            {this.state.productSet?this.state.productSet.map((item, i) => {
              return (
                i<4&&
                <TouchableOpacity
                onPress={()=>this.props.navigation.navigate('ProductDetails',{'productObj':item})}
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
                      source={{uri:item.images[0].src}}
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
                        {this.state[item.id]==item.id ? (
                          <Entypo      name={'heart'} size={15} color="red" />
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
            }):<Spinner color={'#DD3333'}/>}
       
            
          </View>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              width: '100%',
              // padding: 1,
              flex:1,
              // borderWidth: 1,
              alignItems: 'center',
              justifyContent: 'center',
              paddingVertical: 10,
            }}>
          <Image
              source={require('../assets/images/kitchen.png')}
              resizeMode="contain"
              style={{height: 250, width: '100%'}}
            />
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
            {this.state.productSet?this.state.productSet.slice(4, this.state.productSet.length).map((item, i) => {
              return (
            
                <TouchableOpacity
                onPress={()=>this.props.navigation.navigate('ProductDetails',{'productObj':item})}
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
                      source={{uri:item.images[0].src}}
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
                        {this.state[item.id]==item.id ? (
                          <Entypo      name={'heart'} size={15} color="red" />
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
            }):<Spinner color={'#DD3333'}/>}
       
            
          </View>
 </ScrollView>
      </View>
    );
  }
}
