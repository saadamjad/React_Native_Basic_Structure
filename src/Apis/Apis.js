import axios from 'axios'
export const baseUrl = 'https://paradisecentre.pk/wp-json/wc/v3/'
const Consumer_key='ck_b4d6a251cb8042c47da97bca8f6175b92f6f889e';
const Consumer_secret= 'cs_4767d987b39c0d33ba7fd29f43b07c8e92ee67b7'
const keys='consumer_key=ck_b4d6a251cb8042c47da97bca8f6175b92f6f889e&consumer_secret=cs_4767d987b39c0d33ba7fd29f43b07c8e92ee67b7'
export const getAllProducts = async (num) => {
    const headersconfig = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
     
      }
    }
    var res = {}
    await axios.get(baseUrl + 'products?per_page='+num+'&'+keys, headersconfig)
      .then(function (response) {
        console.log('response recieved in getAllProducts : ', response)
        res = response.data
        res.status = response.status
      })
      .catch(function (handleError) {
        console.log('error recieved in getAllProducts : ', handleError)
        res = undefined
      })
    // console.log('RETURN getActionsForIntervention res: ', res)
    return res
  }
  
  export const getProduct = async (id) => {
    const headersconfig = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
     
      }
    }
    var res = {}
    await axios.get(baseUrl + 'products/'+id+'?'+keys, headersconfig)
      .then(function (response) {
        console.log('response recieved in getProduct : ', response)
        res = response.data
        res.status = response.status
      })
      .catch(function (handleError) {
        console.log('error recieved in getProduct : ', handleError)
        res = undefined
      })
    // console.log('RETURN getActionsForIntervention res: ', res)
    return res
  }

  export const getAllCategories = async () => {
    const headersconfig = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
     
      }
    }
    var res = {}
    await axios.get(baseUrl + 'products/categories?per_page=100&'+keys, headersconfig)
      .then(function (response) {
        console.log('response recieved in getAllCategories : ', response)
        res = response.data
        res.status = response.status
      })
      .catch(function (handleError) {
        console.log('error recieved in getAllCategories : ', handleError)
        res = undefined
      })
    // console.log('RETURN getActionsForIntervention res: ', res)
    return res
  }

  export const getProductByCateId = async (id,no) => {
    const headersconfig = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    }
    var res = {}
    await axios.get(baseUrl + 'products?category='+id+'&per_page='+no+'&'+keys, headersconfig)
      .then(function (response) {
        console.log('response recieved in getProductByID : ', response)
        res = response.data
        res.status = response.status
      })
      .catch(function (handleError) {
        console.log('error recieved in getProductByID : ', handleError)
        res = undefined
      })
    // console.log('RETURN getActionsForIntervention res: ', res)
    return res
  }
  

  export const searchProduct = async (string) => {
    const headersconfig = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    }
    var res = {}
    await axios.get(baseUrl + 'products?search='+string+'&per_page=1000&'+keys, headersconfig)
      .then(function (response) {
        console.log('response recieved in searchProduct : ', response)
        res = response.data
        res.status = response.status
      })
      .catch(function (handleError) {
        console.log('error recieved in searchProduct : ', handleError)
        res = undefined
      })
    // console.log('RETURN getActionsForIntervention res: ', res)
    return res
  }
  export const register = async (name,email,pass) => {
    const headersconfig = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    }
    var res = {}
    await axios.get('https://paradisecentre.pk/api/get_nonce/?json=get_nonce&controller=User&method=register', headersconfig)
      .then(async (response)=> {
        console.log(response)
          await axios.get('https://paradisecentre.pk/api/user/register/?username='+name+'&email='+email+'&user_pass='+pass+'&nonce='+response.data.nonce+'&display_name='+name, headersconfig)
          .then(function (response) {
            console.log('response recieved in register : ', response)
            res = response.data
            res.status = response.status
          })
          .catch(function (handleError) {
            console.log('error recieved in register : ', handleError)
          })
      })
      .catch(function (handleError) {
        console.log('error recieved in register : ', handleError)
        res = undefined
      })
    // console.log('RETURN getActionsForIntervention res: ', res)
    return res
  }

  export const login = async (email,pass) => {
    const headersconfig = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    }
    var res = {}
    await axios.get('https://paradisecentre.pk/api/user/generate_auth_cookie/?username='+email+'&password='+pass, headersconfig)
      .then(function (response) {
        console.log('response recieved in login : ', response)
        res = response.data
        res.status = response.status
      })
      .catch(function (handleError) {
        console.log('error recieved in login : ', handleError)
        res = undefined
      })
    // console.log('RETURN getActionsForIntervention res: ', res)
    return res
  }
  export const resetPassword = async (email) => {
    const headersconfig = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    }
    var res = {}
    await axios.get('https://paradisecentre.pk/api/user/retrieve_password/?user_login='+email, headersconfig)
      .then(function (response) {
        console.log('response recieved in resetPassword : ', response)
        res = response.data
        res.status = response.status
      })
      .catch(function (handleError) {
        console.log('error recieved in resetPassword : ', handleError)
        res = undefined
      })
    // console.log('RETURN getActionsForIntervention res: ', res)
    return res
  }


  export const getOrders = async (id) => {
    const headersconfig = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    }
    var res = {}
    await axios.get(baseUrl + 'orders?customer='+id+'&'+keys, headersconfig)
      .then(function (response) {
        console.log('response recieved in getOrders : ', response)
        res = response.data
        res.status = response.status
      })
      .catch(function (handleError) {
        console.log('error recieved in getOrders : ', handleError)
      })
    // console.log('RETURN getActionsForIntervention res: ', res)
    return res
  }
  export const createOrder = async (productID,yourname,fhname,yourtel,email,gender,age,job,occu,
    work,office,residence,oficetel,living,earn,idcard,bank,resiMun) => {
   console.log(yourtel)
   oficetel=yourtel
let formdata = new FormData();
formdata.append('getPro', productID)
formdata.append('your-name', yourname)
formdata.append('fh-name', fhname)
formdata.append('your-tel', yourtel)
formdata.append('your-email', email)
formdata.append('menu-gender', gender)
formdata.append('number-age', age)
formdata.append('job-desc',job)

formdata.append('menu-occupation', occu)
formdata.append('working-since', work)
formdata.append('office-address', office)
formdata.append('residence-address', residence)
formdata.append('office-tel', oficetel)
formdata.append('living-since', living)
formdata.append('earning-monthly',earn)

formdata.append('id-card', idcard)
formdata.append('bank-account', bank)
// formdata.append('living-since', 'livingSince)
formdata.append('menu-residence',resiMun)




let headersconfig = {
  headers: {
    'Content-Type': "application/x-www-form-urlencoded"
  }
}
var res = {};
await  axios.post("https://paradisecentre.pk/wp-json/contact-form-7/v1/contact-forms/14689/feedback",formdata, headersconfig)
.then(function (response) {
  // console.log("response recieved in seacrhAssetsByName : " , response.data.items[0].rows);
  console.log("response recieved in closeWorkOrder : " , response);
  res = response.data;
  res.status = response.status;
})
.catch(function (error) {
  console.log("ERROR in closeWorkOrder : " , error);
  if(error.response){
    res = error.response;
    res.status = error.response.status;
  }
  else{res.status = false;}
});
return res;

  }
  

  export const getFav = async (cookie) => {
    const headersconfig = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    }
    var res = {}
    await axios.get('https://paradisecentre.pk/api/user/get_user_meta/?cookie='+cookie, headersconfig)
      .then(function (response) {
        console.log('response recieved in getOrders : ', response)
        res = response.data
        res.status = response.status
      })
      .catch(function (handleError) {
        console.log('error recieved in getOrders : ', handleError)
        res = undefined
      })
    // console.log('RETURN getActionsForIntervention res: ', res)
    return res
  }

  export const addToFav = async (cookie,product) => {
    const headersconfig = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    }
    var res = {}
    await axios.get('https://paradisecentre.pk/api/user/update_user_meta/?meta_key=product&cookie='+cookie+'&meta_value='+product, headersconfig)
      .then(function (response) {
        console.log('response recieved in getOrders : ', response)
        res = response.data
        res.status = response.status
      })
      .catch(function (handleError) {
     
        console.log('error recieved in getOrders : ', handleError)
        res = undefined
      })
    // console.log('RETURN getActionsForIntervention res: ', res)
    return res
  }