import React from 'react';
import {
  ImageBackground,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  AsyncStorage,
  ActivityIndicator,
  I18nManager,
  ScrollView,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MainHeader from '../Component/MainHeader';
import Entypo from 'react-native-vector-icons/Entypo';
import {SearchBar} from 'react-native-elements';
import { Row, Col, Item, Spinner } from 'native-base';
import { getOrders } from '../Apis/Apis';
export default class MyOrders extends React.Component {
  constructor() {
    super();
    this.state = {
      search: '',
      iconColour: true,
      washingMachine: true,
      bike: true,
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
  componentDidMount=async()=>{

    try {
      let value = await AsyncStorage.getItem('user');
      if (value !== null) {
        // We have data!!
        console.log(value);
        value =JSON.parse(value)
      const resonse = await getOrders(value.user.id)
      this.setState({
        orderSet:resonse
      })
      if(resonse.length==0){
        this.setState({
          showNo:true
        })
      }
      console.log(resonse)
        console.log(value);
      }
      else{
        this.setState({
          showLogin:true
        })
      }
    } catch (error) {
      // Error retrieving data
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
    :   <View> 
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
              My Orders
            </Text>
          </View>
         {this.state.orderSet? this.state.orderSet.map((item,i) =>
            <View
            key={i}
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
              // flexDirection:'row',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 2,
              paddingVertical:30
            }}
            >
              <Row>
                <Col>
              <Image
                source={require('./../assets/images/phone.png')}
                style={{height: 160, width: '100%'}}
                resizeMode="cover"
              />
              </Col>
              <Col>
              <View style={{marginTop:10,paddingLeft:20,alignSelf:'flex-start'}}>
                      <Text style={{fontSize:15,textAlign:'left' ,color:'#231F20'}}>{item.name}</Text>
                      <Text style={{ fontSize:17,textAlign:'left' ,color:'#DD3333',marginTop:10}}>{item.price}</Text>
              </View>

              <View style={{marginTop:10,paddingLeft:20,alignSelf:'flex-start'}}>
                      <Text style={{fontSize:13,textAlign:'left' ,color:'#231F20'}}>Plan Status</Text>
                      <Text style={{ fontWeight:'bold',fontSize:17,textAlign:'left' ,color:'#DD3333'}}>Incomplete</Text>
              </View>
              <View style={{marginTop:10,paddingLeft:20,alignSelf:'flex-start'}}>
              <TouchableOpacity
     
     style={{
      //  width: '100%',
     //   alignSelf: 'center',
     //   alignItems: 'center',
     //   justifyContent: 'center',
       // borderWidth: 1,
       backgroundColor: '#bd2e1e',
       paddingVertical: 5,
      //  marginVertical: 20,
       borderRadius: 5,
       borderBottomEndRadius:0,
       borderTopStartRadius:0
     }}>
     <Text style={{paddingHorizontal:30,color:'white'}}>View Plan</Text>
   </TouchableOpacity>
                      </View>
              
              </Col>
              </Row>
         
   
     
      </View>

)
    :<Spinner color={'#DD3333'}/>}
{this.state.showNo==true&&<Text style={{fontSize:20,margin:30,textAlign:'center'}}>No Record Found</Text>}
</View>
}
{/*            
        
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
                    // flexDirection:'row',
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,

                    elevation: 2,
                    paddingVertical:30
                  }}
                  >
                    <Row>
                      <Col>
                    <Image
                      source={require('./../assets/images/phone.png')}
                      style={{height: 160, width: '100%'}}
                      resizeMode="cover"
                    />
                    </Col>
                    <Col>
                    <View style={{marginTop:10,paddingLeft:20,alignSelf:'flex-start'}}>
                            <Text style={{fontSize:13,textAlign:'left' ,color:'231F20'}}>Iphone X</Text>
                            <Text style={{ fontSize:11,textAlign:'left' ,color:'grey'}}>128 Gb</Text>
                    </View>
 
                    <View style={{marginTop:10,paddingLeft:20,alignSelf:'flex-start'}}>
                            <Text style={{fontSize:13,textAlign:'left' ,color:'231F20'}}>Plan Status</Text>
                            <Text style={{ fontWeight:'bold',fontSize:17,textAlign:'left' ,color:'#DD3333'}}>Completed</Text>
                    </View>
                    <View style={{marginTop:10,paddingLeft:20,alignSelf:'flex-start'}}>
                    <TouchableOpacity
           
           style={{
            //  width: '100%',
           //   alignSelf: 'center',
           //   alignItems: 'center',
           //   justifyContent: 'center',
             // borderWidth: 1,
             backgroundColor: '#bd2e1e',
             paddingVertical: 5,
            //  marginVertical: 20,
             borderRadius: 5,
             borderBottomEndRadius:0,
             borderTopStartRadius:0
           }}>
           <Text style={{paddingHorizontal:30,color:'white'}}>View Plan</Text>
         </TouchableOpacity>
                            </View>
                    
                    </Col>
                    </Row>
               
         
           
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
                    // flexDirection:'row',
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,

                    elevation: 2,
                    paddingVertical:30
                  }}
                  >
                    <Row>
                      <Col>
                    <Image
                      source={require('./../assets/images/phone.png')}
                      style={{height: 160, width: '100%'}}
                      resizeMode="cover"
                    />
                    </Col>
                    <Col>
                    <View style={{marginTop:10,paddingLeft:20,alignSelf:'flex-start'}}>
                            <Text style={{fontSize:13,textAlign:'left' ,color:'231F20'}}>Iphone X</Text>
                            <Text style={{ fontSize:11,textAlign:'left' ,color:'grey'}}>128 Gb</Text>
                    </View>
 
                    <View style={{marginTop:10,paddingLeft:20,alignSelf:'flex-start'}}>
                            <Text style={{fontSize:13,textAlign:'left' ,color:'231F20'}}>Plan Status</Text>
                            <Text style={{ fontWeight:'bold',fontSize:17,textAlign:'left' ,color:'#DD3333'}}>Live</Text>
                    </View>
                    <View style={{marginTop:10,paddingLeft:20,alignSelf:'flex-start'}}>
                    <TouchableOpacity
           
           style={{
            //  width: '100%',
           //   alignSelf: 'center',
           //   alignItems: 'center',
           //   justifyContent: 'center',
             // borderWidth: 1,
             backgroundColor: '#bd2e1e',
             paddingVertical: 5,
            //  marginVertical: 20,
             borderRadius: 5,
             borderBottomEndRadius:0,
             borderTopStartRadius:0
           }}>
           <Text style={{paddingHorizontal:30,color:'white'}}>View Plan</Text>
         </TouchableOpacity>
                            </View>
                    
                    </Col>
                    </Row>
               
         
           
            </View>
            */}
        
       
         
           
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