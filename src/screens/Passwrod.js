import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  AsyncStorage,
  PureComponent,
  Platform,
  NetInfo,
  Alert,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {NavigationActions, StackActions} from 'react-navigation';
import { login, resetPassword } from '../Apis/Apis';
import { Spinner } from 'native-base';

export default class Password extends React.PureComponent {
  state = {
    username: '',
    password: '',
    lang: 'en',
    pushtoken: '',
    showPassword: true,
    check: true,
    
    showError:false,
    isLoading:false
  };
  handleTextChange = newText => this.setState({email: newText});
  handleTextChange1 = newText => this.setState({password: newText});
  Login=async()=> {
    if(this.state.email!='')
    {
      this.setState({
        showError:false,
        isLoading:true
      })
      // this.props.navigation.navigate('Home');
      console.log(this.state.email)
      const response = await resetPassword(this.state.email)
      console.log(response)
      if(response.error)
      {
        alert(response.error)
        this.setState({
          showError:false,
          isLoading:false
        })
      }
      else{
        this.setState({
          showError:false,
          isLoading:false
        })
        alert(response.msg)
        this.props.navigation.navigate('Login')
      }
    }
    else{
      this.setState({
        showError:true
      })
    }
  }
  render() {
    return (
      <View style={styles.parent}>
     <View style={{height: '25%', width: '100%', borderWidth: 0,alignItems:'center'}}>
          <Image
            source={require('./../assets/images/logo.png')}
            resizeMode="contain"
            style={{height: 170, width: 300}}></Image>
        </View>
        <View
          style={{
            height: '70%',
            // borderWidth: 1,
            borderRadius: 10,
            // paddingLeft: 15,
            // paddingRight: 15,
            // justifyContent: 'center',
            alignItems: 'center',
            width: '90%',
            alignSelf: 'center',
            overflow: 'hidden',
            backgroundColor: 'white',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}>
          <Text style={{color: '#DD3333', fontSize: 19, paddingVertical: 10}}>
            {' '}
            Reset Password{' '}
          </Text>
        
          <View style={styles.et1}>
            <View
              style={{
                width: '10%',
                // borderWidth: 1,
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <AntDesign name={'mail'} size={20} color="#cccccc" />
            </View>

            <TextInput
              style={{
                paddingLeft: 0,
                // borderWidth: 1,
                height: '100%',
                width: '80%',
                paddingLeft: 40,
              }}
              value={this.state.email}
              onChangeText={this.handleTextChange}
              // secureTextEntry={true}
              keyboardType={'email-address'}
              placeholder="Email"></TextInput>
          </View>


          {/* <View style={styles.et1}>
            <View
              style={{
                width: '10%',
                // borderWidth: 1,
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <FontAwesome name={'lock'} size={20} color="#cccccc" />
            </View>

            <TextInput
              style={{
                paddingLeft: 0,
                // borderWidth: 1,
                height: '100%',
                width: '80%',
                paddingLeft: 40,
              }}
              value={this.state.password}
              onChangeText={this.handleTextChange1}
              secureTextEntry={true}
              placeholder="Password"></TextInput>
          </View> */}
          {this.state.showError==true&&  <Text style={{margin:20,textAlign:"center",color:'red'}}>Please fill all required fields</Text>}

          {/* <TouchableOpacity
            style={{marginRight: 20, margin: 20, marginLeft: 20}}
            onPress={() => this.props.navigation.navigate('Password')}>
            <Text>Forgot Password?</Text>
          </TouchableOpacity> */}

          <TouchableOpacity
            onPress={() => this.Login()}
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
           {this.state.isLoading ==true?<Spinner  color={'white'}/>:
            <Text style={styles.logintext}> Reset Password</Text>}
          </TouchableOpacity>
          {/* <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                height: 30,
                width: 30,
                borderRadius: 30,
                // borderWidth: 1,
                marginHorizontal: 10,
              }}>
              <Image
                source={require('../assets/images/googleplus.png')}
                style={{width: '100%', height: '100%'}}
                resizeMode="contain"
              />
            </View>
            <View
              style={{
                height: 30,
                width: 30,
                borderRadius: 30,
                // borderWidth: 1,
                marginHorizontal: 10,
              }}>
              <Image
                source={require('../assets/images/facebook.png')}
                style={{width: '100%', height: '100%'}}
                resizeMode="contain"
              />
            </View>
          </View> */}

          <TouchableOpacity
            style={{marginTop: 10, borderWidth: 0}}
            onPress={() => this.props.navigation.navigate('Login')}>
            <Text>
              {' '}
              Dont have account ?{' '}
              <Text style={{color: '#DD3333'}}> Login </Text>
            </Text>
          </TouchableOpacity>
        </View>
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
