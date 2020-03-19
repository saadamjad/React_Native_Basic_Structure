import axios from 'axios'
export const baseUrl = 'https://paradisecentre.pk/wp-json/wc/v3/'
const Consumer_key='ck_b4d6a251cb8042c47da97bca8f6175b92f6f889e';
const Consumer_secret= 'cs_4767d987b39c0d33ba7fd29f43b07c8e92ee67b7'
const keys='consumer_key=ck_b4d6a251cb8042c47da97bca8f6175b92f6f889e&consumer_secret=cs_4767d987b39c0d33ba7fd29f43b07c8e92ee67b7'
export const getAllProducts = async () => {
    const headersconfig = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
     
      }
    }
    var res = {}
    await axios.get(baseUrl + 'products?'+keys, headersconfig)
      .then(function (response) {
        console.log('response recieved in getAllProducts : ', response)
        res = response.data
        res.status = response.status
      })
      .catch(function (handleError) {
        console.log('error recieved in getAllProducts : ', response)
      })
    // console.log('RETURN getActionsForIntervention res: ', res)
    return res
  }