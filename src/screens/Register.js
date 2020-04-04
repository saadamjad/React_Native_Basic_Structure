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
import {ScrollView} from 'react-native-gesture-handler';
// import console = require('console');
import { register } from '../Apis/Apis';
import { Spinner } from 'native-base';

export default class registration extends React.PureComponent {
  state = {
    username: '',
    password: '',
    email:'',
    lang: 'en',
    pushtoken: '',
    showPassword: true,
    check: true,
    showError:false,
    isLoading:false
  };
  handleTextChange = newText => this.setState({username: newText});
  handleTextChange1 = newText => this.setState({email: newText});
  handleTextChange2 = newText => this.setState({password: newText});
  Login=async()=> {
    if(this.state.username!=''&&this.state.password!=''&&this.state.email!='')
    {
      this.setState({
        showError:false,
        isLoading:true
      })
      // this.props.navigation.navigate('Home');
      console.log(this.state.password,this.state.username,this.state.email)
      const response = await register(this.state.username,this.state.email,this.state.password)
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
        {/* </View> */}
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
            paddingVertical:20,
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
          <Text
            style={{
              color: '#DD3333',
              fontSize: 19,
              paddingVertical: 10,
              fontWeight: '600',
            }}>
            {' '}
            Signup{' '}
          </Text>
          <View style={styles.et1}>
            <View style={styles.tocentertext}>
              <View
                style={{
                  width: '20%',
                  // borderWidth: 1,
                  height: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    width: '20%',
                    // borderWidth: 1,
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <FontAwesome name={'user'} size={20} color="#cccccc" />
                </View>
              </View>
              <TextInput
                style={{}}
           
                value={this.state.number}
                onChangeText={this.handleTextChange}
                placeholder="Username"></TextInput>
            </View>
          </View>

          <View style={styles.et1}>
            <View
              style={{
                width: '20%',
                // borderWidth: 1,
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            
              >
              <AntDesign name={'mail'} size={20} color="#cccccc" />
            </View>

            <TextInput
              style={{
                paddingLeft: 0,
                // borderWidth: 1,
                height: '100%',
                width: '80%',
                // paddingLeft: 40,
              }}
              value={this.state.email}
              onChangeText={this.handleTextChange1}
              // secureTextEntry={true}
              keyboardType={'email-address'}
              placeholder="  Email Address "></TextInput>
          </View>

          <View style={styles.et1}>
            <View
              style={{
                width: '20%',
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
                // paddingLeft: 40,
              }}
              value={this.state.password}
              onChangeText={this.handleTextChange2}
              secureTextEntry={true}
              placeholder="  Password "></TextInput>
          </View>
            {this.state.showError==true&&  <Text style={{margin:20,textAlign:"center",color:'red'}}>Please fill all required fields</Text>}
          <TouchableOpacity
            style={{marginRight: 20, marginTop: 10, marginLeft: 20}}
            onPress={() => this.props.navigation.navigate('VERIFY_NUM')}>
            <Text>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.Login()}
            style={{
              width: '90%',
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              // borderWidth: 1,
              height:50,
              backgroundColor: '#bd2e1e',
              paddingVertical: 10,
              marginVertical: 20,
              borderRadius: 5,
              borderRadius: 5,
              borderBottomEndRadius:0,
              borderTopStartRadius:0,
            }}>
              {this.state.isLoading ==true?<Spinner  color={'white'}/>:
            <Text style={styles.logintext}> Register</Text>}
          </TouchableOpacity>

          <TouchableOpacity
            style={{marginTop: 10, borderWidth: 0}}
            onPress={() => this.props.navigation.navigate('Login')}>
            <Text>
              {' '}
              already user ? <Text style={{color: '#DD3333'}}> Login </Text>
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
