import React from 'react';
import {
  ImageBackground,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  FlatList,
  TouchableWithoutFeedback,
  I18nManager,
  ScrollView,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MainHeader from '../Component/MainHeader';
import Entypo from 'react-native-vector-icons/Entypo';
import {SearchBar} from 'react-native-elements';
import { Row, Col, Spinner } from 'native-base';
import { searchProduct, getAllProducts } from '../Apis/Apis';
// import console = require('console');
export default class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      search: '',
      iconColour: true,
      washingMachine: true,
      bike: true,
   };
  }
  componentDidMount=async()=>{
    if(this.props.navigation.getParam('data')==null||this.props.navigation.getParam('data')==''||this.props.navigation.getParam('data')==undefined)
   { const response = await getAllProducts()
    this.setState({
        data:response,
        orignalData:response
    })
  }
  else{
    this.setState({
      data:this.props.navigation.getParam('data'),
      orignalData:this.props.navigation.getParam('data')
  })
  }
  }
  cancle=()=>{
    this.setState({
      data: this.state.orignalData
     })
  }
  updateSearch =async search => {
    // console.log(search)
    // this.setState({search:search})
    // const response = await searchProduct(search)
    // console.log(response)
    // this.setState({
    //     data:response
    // })
    this.setState({search:search})
    if(search==null||search=='')
    {
      this.setState({
       data: this.state.orignalData
      })
    }
    else{
      this.state.data2=[]
      if( search.length > 1){
        for(let i=0; i < this.state.data.length; i++){
            
         
            if( this.state.data[i].name.toLowerCase().indexOf(search.toLowerCase()) != -1||this.state.data[i].price.toLowerCase().indexOf(this.state.search.toLowerCase()) != -1){   
                // console.log(this.state.data)
              //check if room is already in the result
              if( !this.state.data2.includes(this.state.data[i]))
                this.state.data2.push(this.state.data[i]);
                this.setState({data:this.state.data2})
            }
        }
      }
    }

  
    
  };
  renderItem=({item, index, separators}) => (
    <TouchableOpacity
    onPress={()=>this.props.navigation.navigate('ProductDetails',{'productObj':item})}
    style={{
      height:110,
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
      // paddingVertical:30,
      borderBottomWidth:1,
      borderBottomColor:'#cccccc'
      
    }}
    >
      <Row>
        <Col>
        {item.images.length!=0&&
      <Image
        source={{uri:item.images[0].src}}
        style={{height: 100, width: 100}}
        resizeMode="cover"
      />}
      </Col>
      <Col style={{width:'70%'}}>
      <View style={{marginTop:10,paddingLeft:20,alignSelf:'flex-start'}}>
              <Text style={{fontSize:15,textAlign:'left' ,color:'231F20'}}>{item.name}</Text>
              <Text style={{ fontSize:15,marginTop:10,textAlign:'left' ,color:'grey'}}>Category: Mobiles</Text>
      </View>

      <View style={{marginTop:10,paddingLeft:20,alignSelf:'flex-start'}}>
              {/* <Text style={{fontSize:13,textAlign:'left' ,color:'231F20'}}>Plan Status</Text> */}
              <Text style={{ fontWeight:'bold',fontSize:17,textAlign:'left' ,color:'#DD3333'}}>Rs. 10000</Text>
      </View>
      <View style={{marginTop:10,paddingLeft:20,alignSelf:'flex-start'}}>

              </View>
      
      </Col>
      </Row>
 


</TouchableOpacity>


  )
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'ECECEC',
          height: 100,
        }}>
            <View style={{flexDirection:'row'}}>
            <TouchableWithoutFeedback onPress={() => this.props.navigation.goBack()} style={{backgroundColor:'#DD3333',justifyContent: 'center',alignSelf:'center'}}>
            <Entypo name={'chevron-left'} color={'#DD3333'} size={25} style={{padding: 15,top:7}} />
          </TouchableWithoutFeedback>
            <View
            style={{
              height: 48,
              backgroundColor: '#ECECEC',
              width: '80%',
              alignSelf: 'center',
              marginVertical: 10,
              // borderWidth: 1,
              borderRadius: 10,

              alignItems: 'center',
              overflow: 'hidden',
              flexDirection:'row'
            }}>
  
            <SearchBar
              placeholder=" search what you are looking fo "
              // onChangeText={this.updateSearch}
              value={this.state.search}
              onChangeText={text => this.updateSearch(text)}
              onCancel={this.cancle}
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
</View>
          {this.state.data?    
          <FlatList
            data={this.state.data}
            renderItem={this.renderItem}
            keyExtractor={item => item.id}
        />:
        <Spinner color={'#DD3333'}/>}
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
  