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
  ScrollView,
} from 'react-native';

// import {LoginManager, AccessToken} from 'react-native-fbsdk';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {NavigationActions, StackActions} from 'react-navigation';
import { login, register } from '../Apis/Apis';
import { Spinner } from 'native-base';
// import { ScrollView } from 'react-native-gesture-handler';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';
import {LoginManager, AccessToken} from 'react-native-fbsdk';

GoogleSignin.configure();
export default class Login extends React.PureComponent {
  state = {
    username: '',
    password: '',
    lang: 'en',
    pushtoken: '',
    showPassword: true,
    check: true,
    socail:false,
    
    showError:false,
    isLoading:false
  };
  handleTextChange = newText => this.setState({email: newText});
  handleTextChange1 = newText => this.setState({password: newText});

  componentDidMount=async()=>{

 
    try {
      let value = await AsyncStorage.getItem('user');
      if (value !== null) {
        // We have data!!
        console.log(value);
        value =JSON.parse(value)
      // const resonse = await getOrders(value.user.id)
      // this.setState({
      //   orderSet:resonse
      // })
     
        this.props.navigation.navigate('Home',{'user':value})
      }
    } catch (error) {
      // Error retrieving data
    }
  }
  googleSignin=async()=>{
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      this.setState({ userInfo });
      console.log(userInfo.user.email)
      this.setState({email:userInfo.user.email,password:'social123'})
      this.Login(true)
      this.setState({social:false})
    } catch (error) {
      console.log(error)
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  }
  loginFacebook = async () => {
    try {
      const loginFacebook = await LoginManager.logInWithPermissions([
        'public_profile',
        'email',
      ]);
      if (loginFacebook.isCancelled) {
      } else {
        let that = this;
        AccessToken.getCurrentAccessToken().then(data => {
          const token = data.accessToken.toString();
          console.log(data)
          // that.props.dispatch(signInWithFacebook(token));

          fetch('https://graph.facebook.com/v2.5/me?fields=email,first_name,last_name,friends&access_token=' + token)
          .then((response) => {
              response.json().then((json) => {
                  const ID = json.id
                  console.log("ID " + ID);

                  const EM = json.email
                  console.log("Email " + EM);
                  this.setState({
                    email:json.email,
                    password:'social123'
                  })

                  const FN = json.first_name
                  console.log("First Name " + FN);
                  this.Login(true)
              })
          })
          .catch(() => {
              console.log('ERROR GETTING DATA FROM FACEBOOK')
              alert('Please enable your internet')
          })
        });
      }
    } catch (e) {
      console.log('Login fail with error: ' + e);
    }
  };
  register=async()=>{
    this.setState({
      showError:false,
      isLoading:true
    })
    // this.props.navigation.navigate('Home');
    console.log('registerLogin',this.state.password,this.state.username,this.state.email)
    const response = await register(this.state.email,this.state.email,this.state.password)
    console.log(response)
    if(response.error)
    {
      this.Login()
    }
    else{
      this.setState({
        showError:false,
        isLoading:false
      })
      this.Login()
    }
  }
  Login=async(social)=> {
    if(this.state.password!=''&&this.state.email!='')
    {
      this.setState({
        showError:false,
        isLoading:true
      })
      // this.props.navigation.navigate('Home');
      console.log(this.state.password,this.state.email)
      const response = await login(this.state.email,this.state.password)
      console.log(response)
      if(response.error)
      {
        if(social==true)
        {
          if('Invalid username/email and/or password.'){
            this.register()
           
          }
        }
        else{
          alert(response.error)
          this.setState({
            showError:false,
            isLoading:false
          })
        }
       
      }
      else{
        this.setState({
          showError:false,
          isLoading:false
        })
        try {
          await AsyncStorage.setItem('user', JSON.stringify(response));
        } catch (error) {
          // Error saving data
        }
        this.props.navigation.goBack()
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
      <ScrollView style={styles.parent}>
     <View style={{width: '100%', borderWidth: 0,alignItems:'center'}}>
          <Image
            source={require('./../assets/images/logo.png')}
            resizeMode="contain"
            style={{height: 170, width: 300}}></Image>
        </View>
        <View
          style={{
            // height: '70%',
            // borderWidth: 1,
            borderRadius: 10,
            // paddingLeft: 15,
            // paddingRight: 15,
            // justifyContent: 'center',
            marginBottom:20,
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
            Login{' '}
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
              // keyboardType={'email-address'}
              placeholder="Username"></TextInput>
          </View>


          <View style={styles.et1}>
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
          </View>
          {this.state.showError==true&&  <Text style={{margin:20,textAlign:"center",color:'red'}}>Please fill all required fields</Text>}

          <TouchableOpacity
            style={{marginRight: 20, margin: 20, marginLeft: 20}}
            onPress={() => this.props.navigation.navigate('Password')}>
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
            <Text style={styles.logintext}> Login</Text>}
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
            onPress={this.googleSignin}
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
            </TouchableOpacity>
            <TouchableOpacity
            onPress={this.loginFacebook}
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
            </TouchableOpacity>
          </View> 

          <TouchableOpacity
            style={{marginTop: 10, borderWidth: 0,marginBottom:30}}
            onPress={() => this.props.navigation.navigate('Register')}>
            <Text>
              {' '}
              Dont have account ?{' '}
              <Text style={{color: '#DD3333'}}> Signup now </Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
