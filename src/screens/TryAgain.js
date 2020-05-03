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
  AsyncStorage,
  ScrollView,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MainHeader from '../Component/MainHeader';
import Entypo from 'react-native-vector-icons/Entypo';
import {SearchBar} from 'react-native-elements';
import { Row, Col } from 'native-base';
import {getAllProducts,getProductByCateId,getAllCategories, getFav, addToFav} from './../Apis/Apis'
export default class TryAgain extends React.Component {
  constructor() {
    super();
    this.state = {
      search: '',
      iconColour: true,
      washingMachine: true,
      showLogin:true,
      bike: true,
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

  componentDidMount=async()=>{
    
    }
    check=async()=>{
        const res = await getAllCategories()
        console.log(res)
        if(res==undefined)
        {
          this.props.navigation.navigate('TryAgain')
        }
        else{
            this.props.navigation.goBack()
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
            <View style={{height:'80%',justifyContent:'center',alignItems:'center'}}>
                <Image style={{height:200,width:200}} source={require('./../assets/images/tryagain.png')}/>
                <Text style={{fontSize:18,padding:20}}>You are not connected to internet</Text>
                <TouchableOpacity onPress={()=>this.check()}><Text style={{color:'#dd3333',fontSize:20}}>Retry</Text></TouchableOpacity>
       </View>
        </ScrollView>
    
     </View>
    );
  }
}

const styles = StyleSheet.create({
    parent: {
      flex: 1,
      backgroundColor: '#f8f8f8',
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
  