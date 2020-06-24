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
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MainHeader from '../Component/MainHeader';
import Entypo from 'react-native-vector-icons/Entypo';
import {SearchBar} from 'react-native-elements';
import { Row, Col, Spinner } from 'native-base';
import { getFav, getProduct } from '../Apis/Apis';
export default class Favourite extends React.Component {
  constructor() {
    super();
    this.state = {
      search: '',
      iconColour: true,
      washingMachine: true,
      bike: true,
      // productSet:[],
      showLogin:true,
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
  componentDidMount=async()=>{
  try{
    let value = await AsyncStorage.getItem('user');
    let product = []
    if (value !== null) {
      // We have data!!
      console.log(value);
      value =JSON.parse(value)
      const  responseFav = await getFav(value.cookie)
      console.log(responseFav)
      if(responseFav.product)
      {
        this.state.productSet=[]
        let product = JSON.parse(responseFav.product)
        for (var i =0 ;i<product.length; i++)
        {
          console.log(i)
          const res = await getProduct(product[i])
    
          this.state.productSet.push(res)
          this.setState({
            productSet:this.state.productSet
          })
        }
      
        // this.setState({productSet:product})
      }
      else{
        this.setState({productSet:[]})
        this.state.productSet=[]
      }
     
    }
    else{

        this.setState({
          showLogin:true
        })
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

         

         
          {this.state.showLogin==true?
     <TouchableOpacity
     onPress={() => this.props.navigation.navigate('Login')}
     style={{
       width: '90%',
       alignSelf: 'center',
       alignItems: 'center',
       justifyContent: 'center',
       // borderWidth: 1,
       backgroundColor: '#bd2e1e',
       height:50,
       paddingVertical: 10,
       marginVertical: 20,
       borderRadius: 5,
       borderRadius: 5,
       borderBottomEndRadius:0,
       borderTopStartRadius:0,
     }}>

     <Text style={styles.logintext}>Please login to continue</Text>
   </TouchableOpacity>
    : <View>
        
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
              Favourites
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
          {this.state.productSet?
          this.state.productSet.map((item, i) => {
              return (
                <TouchableOpacity
                onPress={()=>this.props.navigation.navigate('ProductDetails',{'productObj':item})}
                key={i}
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
                      {/* {item.engineCapacity} */}
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
                </TouchableOpacity>
              );
            }):<Spinner color={'#DD3333'}/>}
            </View>
            </View>}
           
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    paddingVertical: 20,
  },
  tocenterview: {
    // height:50,bw
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    justifyContent: 'flex-end',
  },
  hello: {
    // marginTop: 20,
    fontSize: 15,
    color: 'black',
  },
  moving: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
  },
  et1: {
    borderColor: '#d3d3d3',

    backgroundColor: 'white',
    height: 50,
    marginTop: 10,
    borderBottomWidth: 1,
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  et2: {
    borderColor: '#d3d3d3',
    borderRadius: 5,
    backgroundColor: 'white',
    height: 50,
    marginTop: 10,
    borderBottomWidth: 1,
    width: '90%',
    // marginRight: 40,
    // marginLeft: 40,
  },
  ext: {
    justifyContent: 'center',
    color: 'black',
    fontSize: 15,
    alignItems: 'center',
  },
  tocentertext: {
    flex: 1,

    flexDirection: 'row',
    alignItems: 'center',
  },

  logintext: {
    color: 'white',
    fontSize: 18,

    alignItems: 'center',
  },
  
});