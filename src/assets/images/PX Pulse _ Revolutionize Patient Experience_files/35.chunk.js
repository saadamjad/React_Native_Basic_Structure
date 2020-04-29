(window["webpackJsonpreact-able-pro"] = window["webpackJsonpreact-able-pro"] || []).push([[35],{

/***/ "./src/API/API.js":
/*!************************!*\
  !*** ./src/API/API.js ***!
  \************************/
/*! exports provided: baseUrl, SignIn, getMyActions, getActionDetailsById, getInterventionDetailsById, getPatientProfileById, getAllInterventions, getAllActions, getMyInterventions, getActionsForIntervention, getMyprofile, getCommentsForIntervention, getAllActionsMessages, getActionObject, getInterventionObject, getImpactFactorsSet, getMyActionsGroupedByDate, getAllUsers, createIntervention, createInterventionQuick, addActionToIntervention, completeAction, updateAction, addCommentToAction, addCommentToIntervention, addAssigneeToAction, tagUserToIntervention, tagUserToAction, getAllNotification, getActionOverview, getInterventionOverview, getMyinterventionsByGroup, getMyActionByGroup, getMyinterventionsByGroupActivePriority, getActionByProirity, getAllActionByProirity, getAllInterventionsByProirity, getAllActionsByUserId, getAllInterventionsByUserId, updateNotification, getQuestions, getPatientDetailsSetPass, updateUsersPasswordById, updateActionScore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseUrl", function() { return baseUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignIn", function() { return SignIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMyActions", function() { return getMyActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActionDetailsById", function() { return getActionDetailsById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInterventionDetailsById", function() { return getInterventionDetailsById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPatientProfileById", function() { return getPatientProfileById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllInterventions", function() { return getAllInterventions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllActions", function() { return getAllActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMyInterventions", function() { return getMyInterventions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActionsForIntervention", function() { return getActionsForIntervention; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMyprofile", function() { return getMyprofile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCommentsForIntervention", function() { return getCommentsForIntervention; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllActionsMessages", function() { return getAllActionsMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActionObject", function() { return getActionObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInterventionObject", function() { return getInterventionObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImpactFactorsSet", function() { return getImpactFactorsSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMyActionsGroupedByDate", function() { return getMyActionsGroupedByDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllUsers", function() { return getAllUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createIntervention", function() { return createIntervention; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInterventionQuick", function() { return createInterventionQuick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addActionToIntervention", function() { return addActionToIntervention; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "completeAction", function() { return completeAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateAction", function() { return updateAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCommentToAction", function() { return addCommentToAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCommentToIntervention", function() { return addCommentToIntervention; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addAssigneeToAction", function() { return addAssigneeToAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tagUserToIntervention", function() { return tagUserToIntervention; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tagUserToAction", function() { return tagUserToAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllNotification", function() { return getAllNotification; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActionOverview", function() { return getActionOverview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInterventionOverview", function() { return getInterventionOverview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMyinterventionsByGroup", function() { return getMyinterventionsByGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMyActionByGroup", function() { return getMyActionByGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMyinterventionsByGroupActivePriority", function() { return getMyinterventionsByGroupActivePriority; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActionByProirity", function() { return getActionByProirity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllActionByProirity", function() { return getAllActionByProirity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllInterventionsByProirity", function() { return getAllInterventionsByProirity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllActionsByUserId", function() { return getAllActionsByUserId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllInterventionsByUserId", function() { return getAllInterventionsByUserId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateNotification", function() { return updateNotification; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQuestions", function() { return getQuestions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPatientDetailsSetPass", function() { return getPatientDetailsSetPass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUsersPasswordById", function() { return updateUsersPasswordById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateActionScore", function() { return updateActionScore; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../store/actions */ "./src/store/actions.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-device-detect */ "./node_modules/react-device-detect/main.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_2__);




__webpack_require__(/*! dotenv */ "./node_modules/dotenv/lib/main.js").config();

const baseUrl = "https://px.pxpulse.com:5006";

const publicIp = __webpack_require__(/*! public-ip */ "./node_modules/public-ip/browser.js");

var ip;
var mac_address = '03:232:2343';
var device_name;
var device_model;
var device_Type;

async function getip() {
  console.log((await publicIp.v4()));
  console.log(react_device_detect__WEBPACK_IMPORTED_MODULE_2__["browserName"]);
  console.log(react_device_detect__WEBPACK_IMPORTED_MODULE_2__["osName"]);
  console.log(react_device_detect__WEBPACK_IMPORTED_MODULE_2__["deviceType"]);
  ip = await publicIp.v4();
  device_name = react_device_detect__WEBPACK_IMPORTED_MODULE_2__["browserName"];
  device_model = react_device_detect__WEBPACK_IMPORTED_MODULE_2__["osName"];
  device_Type = react_device_detect__WEBPACK_IMPORTED_MODULE_2__["deviceType"];
}

getip();
let tokenGlobal;
const SignIn = async (email, password, fcmtoken) => {
  console.log(email, password, fcmtoken); // console.log(email,password);

  let bodyconfig = JSON.stringify({
    uniqueDeviceId: fcmtoken,
    deviceType: "Web Browser",
    userType: "staff"
  });
  let headersconfig = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'email': email,
      'password': password,
      'mac_address': mac_address,
      'ip': ip,
      'device_name': device_name,
      'device_model': device_model,
      'deviceType': device_Type
    }
  };
  var res = {};
  await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(baseUrl + '/api/users/auth', bodyconfig, headersconfig).then(function (response) {
    console.log("response recieved in signInApi : ", response);
    res = response.data;
    tokenGlobal = response.data;
    res.status = response.status;
  }).catch(function (error) {
    console.log("ERROR in signInApi : ", error);
    res = {
      data: 'Incorrect Username Or Password',
      status: 400
    };
  });
  console.log("RETURN signInApi res: ", res);
  return res;
};
const getMyActions = async token => {
  console.log(token);
  let headersconfig = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'token': token,
      'mac_address': mac_address,
      'ip': ip,
      'device_name': device_name,
      'device_model': device_model,
      'deviceType': device_Type
    }
  };
  var res = {};
  await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(baseUrl + '/api/action/getMyActions?CurrentPage=1', headersconfig).then(function (response) {
    console.log("response recieved in getMyActions : ", response);
    res = response.data;
    tokenGlobal = response.data;
    res.status = response.status;
  }).catch(function (error) {});
  console.log("RETURN getMyActions res: ", res);
  return res;
};
const getActionDetailsById = async (token, id) => {
  let headersconfig = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'token': token,
      'mac_address': mac_address,
      'ip': ip,
      'device_name': device_name,
      'device_model': device_model,
      'deviceType': device_Type
    }
  };
  var res = {};
  await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(baseUrl + '/api/action/getActionById/' + id, headersconfig).then(function (response) {
    console.log("response recieved in getActionDetailsById : ", response);
    res = response.data;
    tokenGlobal = response.data;
    res.status = response.status;
  }).catch(function (error) {// window.location.href = '/auth/signin'
  });
  console.log("RETURN getActionDetailsById res: ", res);
  return res;
};
const getInterventionDetailsById = async (token, id) => {
  console.log("osama", token, id);
  let headersconfig = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'token': token,
      'mac_address': mac_address,
      'ip': ip,
      'device_name': device_name,
      'device_model': device_model,
      'deviceType': device_Type
    }
  };
  var res = {};
  await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(baseUrl + '/api/intervention/getInterventionById/' + id, headersconfig).then(function (response) {
    console.log("response recieved in getInterventionDetailsById : ", response);
    res = response.data;
    tokenGlobal = response.data;
    res.status = response.status;
  }).catch(function (error) {// window.location.href = '/auth/signin'
  });
  console.log("RETURN getInterventionDetailsById res: ", res);
  return res;
};
const getPatientProfileById = async (token, id) => {
  console.log("osama", token, id);
  let headersconfig = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'token': token,
      'mac_address': mac_address,
      'ip': ip,
      'device_name': device_name,
      'device_model': device_model,
      'deviceType': device_Type
    }
  };
  var res = {};
  await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(baseUrl + '/api/patient/getPatientProfileById/' + id, headersconfig).then(function (response) {
    console.log("response recieved in getPatientProfileById : ", response);
    res = response.data;
    tokenGlobal = response.data;
    res.status = response.status;
  }).catch(function (error) {// window.location.href = '/auth/signin'
  });
  console.log("RETURN getPatientProfileById res: ", res);
  return res;
};
const getAllInterventions = async token => {
  console.log(token);
  let headersconfig = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'token': token,
      'mac_address': mac_address,
      'ip': ip,
      'device_name': device_name,
      'device_model': device_model,
      'deviceType': device_Type
    }
  };
  var res = {};
  await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(baseUrl + '/api/intervention/getAllInterventions?CurrentPage=1', headersconfig).then(function (response) {
    console.log("response recieved in getAllInterventions : ", response);
    res = response.data;
    tokenGlobal = response.data;
    res.status = response.status;
  }).catch(function (error) {
    console.log(error); // window.location.href = '/auth/signin'
  });
  console.log("RETURN getAllInterventions res: ", res);
  return res;
};
const getAllActions = async (token, pageId) => {
  console.log(token);
  let headersconfig = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'token': token,
      'mac_address': mac_address,
      'ip': ip,
      'device_name': device_name,
      'device_model': device_model,
      'deviceType': device_Type
    }
  };
  var res = {};
  await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(baseUrl + '/api/action/getAllActions?CurrentPage=' + pageId, headersconfig).then(function (response) {
    console.log("response recieved in getAllActions : ", response);
    res = response.data;
    tokenGlobal = response.data;
    res.status = response.status;
  }).catch(function (error) {// window.location.href = '/auth/signin'
  });
  console.log("RETURN getAllActions res: ", res);
  return res;
};
const getMyInterventions = async token => {
  console.log(token);
  let headersconfig = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'token': token,
      'mac_address': mac_address,
      'ip': ip,
      'device_name': device_name,
      'device_model': device_model,
      'deviceType': device_Type
    }
  };
  var res = {};
  await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(baseUrl + '/api/intervention/getMyInterventions?CurrentPage=1', headersconfig).then(function (response) {
    console.log("response recieved in getMyInterventions : ", response);
    res = response.data;
    tokenGlobal = response.data;
    res.status = response.status;
  }).catch(function (error) {});
  console.log("RETURN getMyInterventions res: ", res);
  return res;
};
const getActionsForIntervention = async (token, id) => {
  console.log(token, id);
  let headersconfig = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'token': token,
      'mac_address': mac_address,
      'ip': ip,
      'device_name': device_name,
      'device_model': device_model,
      'deviceType': device_Type
    }
  };
  var res = {};
  await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(baseUrl + '/api/action/getActionsForIntervention/' + id, headersconfig).then(function (response) {
    console.log("response recieved in getActionsForIntervention : ", response);
    res = response.data;
    tokenGlobal = response.data;
    res.status = response.status;
  }).catch(function (error) {});
  console.log("RETURN getActionsForIntervention res: ", res);
  return res;
};
const getMyprofile = async token => {
  console.log(token);
  let headersconfig = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'token': token,
      'mac_address': mac_address,
      'ip': ip,
      'device_name': device_name,
      'device_model': device_model,
      'deviceType': device_Type
    }
  };
  var res = {};
  await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(baseUrl + '/api/users/getMyProfile', headersconfig).then(function (response) {
    console.log(res);
    console.log("response recieved in getMyprofile : ", response);
    res = response.data;
    tokenGlobal = response.data;
    res.status = response.status;
  }).catch(function (error) {
    window.location.href = '/auth/signin';
  });
  console.log("RETURN getMyprofile res: ", res);
  return res;
};
const getCommentsForIntervention = async (token, id) => {
  console.log(token);
  let headersconfig = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'token': token,
      'mac_address': mac_address,
      'ip': ip,
      'device_name': device_name,
      'device_model': device_model,
      'deviceType': device_Type
    }
  };
  var res = [];
  await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(baseUrl + '/api/messages/getAllInterventionMessages/' + id, headersconfig).then(function (response) {
    console.log("response recieved in getCommentsForIntervention : ", response);
    res = response.data;
    tokenGlobal = response.data;
    res.status = response.status;
  }).catch(function (error) {
    return [];
  });
  console.log("RETURN getCommentsForIntervention res: ", res);
  return res;
};
const getAllActionsMessages = async (token, id) => {
  console.log(token);
  let headersconfig = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'token': token,
      'mac_address': mac_address,
      'ip': ip,
      'device_name': device_name,
      'device_model': device_model,
      'deviceType': device_Type
    }
  };
  var res = [];
  await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(baseUrl + '/api/messages/getAllActionsMessages/' + id, headersconfig).then(function (response) {
    console.log("response recieved in getAllActionsMessages : ", response);
    res = response.data;
    tokenGlobal = response.data;
    res.status = response.status;
  }).catch(function (error) {
    return [];
  });
  console.log("RETURN getAllActionsMessages res: ", res);
  return res;
};
const getActionObject = async token => {
  console.log(token);
  let headersconfig = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'token': token,
      'mac_address': mac_address,
      'ip': ip,
      'device_name': device_name,
      'device_model': device_model,
      'deviceType': device_Type
    }
  };
  var res = {};
  await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(baseUrl + '/api/action/getActionSubObjects', headersconfig).then(function (response) {
    console.log("response recieved in getActionObject : ", response);
    res = response.data;
    tokenGlobal = response.data;
    res.status = response.status;
  }).catch(function (error) {});
  console.log("RETURN getActionObject res: ", res);
  return res;
};
const getInterventionObject = async token => {
  console.log(token);
  let headersconfig = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'token': token,
      'mac_address': mac_address,
      'ip': ip,
      'device_name': device_name,
      'device_model': device_model,
      'deviceType': device_Type
    }
  };
  var res = {};
  await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(baseUrl + '/api/intervention/getInterventionSubObjects', headersconfig).then(function (response) {
    console.log("response recieved in getInterventionObject : ", response);
    res = response.data;
    tokenGlobal = response.data;
    res.status = response.status;
  }).catch(function (error) {
    window.location.href = '/auth/signin';
  });
  console.log("RETURN getInterventionObject res: ", res);
  return res;
};
const getImpactFactorsSet = async token => {
  console.log(token);
  let headersconfig = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'token': token,
      'mac_address': mac_address,
      'ip': ip,
      'device_name': device_name,
      'device_model': device_model,
      'deviceType': device_Type
    }
  };
  var res = {};
  await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(baseUrl + '/api/intervention/getInterventionImpactFactors', headersconfig).then(function (response) {
    console.log("response recieved in getInterventionSubObjects : ", response);
    res = response.data;
    tokenGlobal = response.data;
    res.status = response.status;
  }).catch(function (error) {
    window.location.href = '/auth/signin';
  });
  console.log("RETURN getInterventionSubObjects res: ", res);
  return res;
};
const getMyActionsGroupedByDate = async token => {
  console.log(token);
  let headersconfig = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'token': token,
      'mac_address': mac_address,
      'ip': ip,
      'device_name': device_name,
      'device_model': device_model,
      'deviceType': device_Type
    }
  };
  var res = {};
  await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(baseUrl + '/api/action/getMyActionsGroupedByDate?CurrentPage=1', headersconfig).then(function (response) {
    console.log("response recieved in getMyinterventionsByGroup : ", response);
    res = response.data;
    tokenGlobal = response.data;
    res.status = response.status;
  }).catch(function (error) {});
  console.log("RETURN getMyActionsGroupedByDate res: ", res);
  return res;
}; // export const getMyinterventionsByGroup=async (token)=>{
//   console.log(token);
//   let headersconfig = {
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json',
//       'token':token
//     }
//   }
//   var res = {};
//   await axios.get(baseUrl+'/api/intervention/getMyInterventionsGroupedByDate?CurrentPage=1', headersconfig)
//   .then(function (response) {
//     console.log("response recieved in getMyinterventionsByGroup : " , response);
//     res = response.data;
//     tokenGlobal=   response.data;
//     res.status = response.status;
//   })
//   .catch(function (error) {
//   });
//   console.log("RETURN getMyinterventionsByGroup res: ", res)
//   return res;
// }

const getAllUsers = async token => {
  console.log(token);
  let headersconfig = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'token': token,
      'mac_address': mac_address,
      'ip': ip,
      'device_name': device_name,
      'device_model': device_model,
      'deviceType': device_Type
    }
  };
  var res = {};
  await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(baseUrl + '/api/users?=&CurrentPage=1', headersconfig).then(function (response) {
    console.log("response recieved in getAllUsers : ", response);
    res = response.data;
    tokenGlobal = response.data;
    res.status = response.status;
  }).catch(function (error) {});
  console.log("RETURN getAllUsers res: ", res);
  return res;
};
const createIntervention = async (token, title, des, pririoty, status, impactFactor) => {
  console.log(token);
  let headersconfig = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'token': token,
      'mac_address': mac_address,
      'ip': ip,
      'device_name': device_name,
      'device_model': device_model,
      'deviceType': device_Type
    }
  };
  let bodyconfig = JSON.stringify({
    title: title,
    description: des,
    intervention_priority_id: pririoty,
    intervention_status_id: status,
    impact_factor: impactFactor
  });
  var res = {};
  await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(baseUrl + '/api/intervention/create', bodyconfig, headersconfig).then(function (response) {
    console.log("response recieved in createIntervention : ", response);
    res = response.data;
    tokenGlobal = response.data;
    res.status = response.status;
  }).catch(function (error) {});
  console.log("RETURN createIntervention res: ", res);
  return res;
};
const createInterventionQuick = async (token, impactFactor) => {
  console.log(token);
  let headersconfig = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'token': token,
      'mac_address': mac_address,
      'ip': ip,
      'device_name': device_name,
      'device_model': device_model,
      'deviceType': device_Type
    }
  };
  let bodyconfig = JSON.stringify({
    impact_factor: impactFactor
  });
  var res = {};
  await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(baseUrl + '/api/intervention/create', bodyconfig, headersconfig).then(function (response) {
    console.log("response recieved in createIntervention : ", response);
    res = response.data;
    tokenGlobal = response.data;
    res.status = response.status;
  }).catch(function (error) {});
  console.log("RETURN createIntervention res: ", res);
  return res;
};
const addActionToIntervention = async (token, id, title, type, pririoty, status, assignee) => {
  console.log(token);
  let headersconfig = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'token': token,
      'mac_address': mac_address,
      'ip': ip,
      'device_name': device_name,
      'device_model': device_model,
      'deviceType': device_Type
    }
  };
  let bodyconfig = JSON.stringify({
    action_title: title,
    action_type_id: type,
    action_status_id: status,
    action_priority_id: pririoty,
    assigned_to: assignee
  });
  var res = {};
  await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(baseUrl + '/api/action/addActionToIntervention/' + id, bodyconfig, headersconfig).then(function (response) {
    console.log("response recieved in addActionToIntervention : ", response);
    res = response.data;
    tokenGlobal = response.data;
    res.status = response.status;
  }).catch(function (error) {});
  console.log("RETURN addActionToIntervention res: ", res);
  return res;
}; // http://188.138.100.72:5002//api/users?=&CurrentPage=1

const completeAction = async (token, id) => {
  console.log(token, id);
  let bodyconfig = JSON.stringify({
    status_id: '3'
  });
  let headersconfig = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'token': token,
      'mac_address': mac_address,
      'ip': ip,
      'device_name': device_name,
      'device_model': device_model,
      'deviceType': device_Type
    }
  };
  var res = {};
  await axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(baseUrl + '/api/action/updateActionStatus/' + id, bodyconfig, headersconfig).then(function (response) {
    console.log("response recieved in completeAction : ", response);
    res = response.data;
    tokenGlobal = response.data;
    res.status = response.status;
  }).catch(function (error) {
    console.log("ERROR in completeAction : ", error);
    res = {
      data: 'Cannot Complete action',
      status: 400
    };
  });
  console.log("RETURN completeAction res: ", res);
  return res;
};
const updateAction = async (token, id, statusID) => {
  console.log(token, id);
  let bodyconfig = JSON.stringify({
    status_id: statusID
  });
  let headersconfig = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'token': token,
      'mac_address': mac_address,
      'ip': ip,
      'device_name': device_name,
      'device_model': device_model,
      'deviceType': device_Type
    }
  };
  var res = {};
  await axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(baseUrl + '/api/action/updateActionStatus/' + id, bodyconfig, headersconfig).then(function (response) {
    console.log("response recieved in completeAction : ", response);
    res = response.data;
    tokenGlobal = response.data;
    res.status = response.status;
  }).catch(function (error) {
    console.log("ERROR in completeAction : ", error);
    res = {
      data: 'Cannot Complete action',
      status: 400
    };
  });
  console.log("RETURN completeAction res: ", res);
  return res;
};
const addCommentToAction = async (token, actionId, Comment, istag) => {
  console.log(token, actionId, Comment);
  let bodyconfig = JSON.stringify({
    content: Comment,
    actionId: actionId,
    interventionId: null,
    isTag: istag
  });
  let headersconfig = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'token': token,
      'mac_address': mac_address,
      'ip': ip,
      'device_name': device_name,
      'device_model': device_model,
      'deviceType': device_Type
    }
  };
  var res = {};
  console.log(bodyconfig, headersconfig);
  await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(baseUrl + '/api/messages/create', bodyconfig, headersconfig).then(function (response) {
    console.log("response recieved in completeAction : ", response);
    res = response.data;
    tokenGlobal = response.data;
    res.status = response.status;
  }).catch(function (error) {
    console.log("ERROR in completeAction : ", error);
    res = {
      data: 'Cannot Complete action',
      status: 400
    };
  });
  console.log("RETURN completeAction res: ", res);
  return res;
};
const addCommentToIntervention = async (token, interventionId, Comment, istag) => {
  console.log(token, interventionId, Comment);
  let bodyconfig = JSON.stringify({
    content: Comment,
    interventionId: interventionId,
    actionId: null,
    isTag: istag
  });
  let headersconfig = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'token': token
    }
  };
  var res = {};
  await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(baseUrl + '/api/messages/create', bodyconfig, headersconfig).then(function (response) {
    console.log("response recieved in addCommentToIntervention : ", response);
    res = response.data;
    tokenGlobal = response.data;
    res.status = response.status;
  }).catch(function (error) {
    console.log("ERROR in addCommentToIntervention : ", error); // res={data:'Cannot Complete action',status:400}
  });
  console.log("RETURN addCommentToIntervention res: ", res);
  return res;
};
const addAssigneeToAction = async (token, id, assignee) => {
  console.log(token, id, assignee);
  let bodyconfig = JSON.stringify({
    user_id: assignee
  });
  let headersconfig = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'token': token,
      'mac_address': mac_address,
      'ip': ip,
      'device_name': device_name,
      'device_model': device_model,
      'deviceType': device_Type
    }
  };
  var res = {};
  await axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(baseUrl + '/api/action/assignAction/' + id, bodyconfig, headersconfig).then(function (response) {
    console.log("response recieved in addAssigneeToAction : ", response);
    res = response.data;
    tokenGlobal = response.data;
    res.status = response.status;
  }).catch(function (error) {
    console.log("ERROR in addAssigneeToAction : ", error);
    res = {
      data: 'Cannot Complete action',
      status: 400
    };
  });
  console.log("RETURN addAssigneeToAction res: ", res);
  return res;
};
const tagUserToIntervention = async (token, id, userid) => {
  console.log(token, id, userid);
  let bodyconfig = JSON.stringify({
    interventionId: id,
    actionId: null,
    userId: userid
  });
  let headersconfig = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'token': token
    }
  };
  var res = {};
  await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(baseUrl + '/api/users/tag', bodyconfig, headersconfig).then(function (response) {
    console.log("response recieved in tagUserToIntervention : ", response);
    res = response.data;
    tokenGlobal = response.data;
    res.status = response.status;
  }).catch(function (error) {
    console.log("ERROR in tagUserToIntervention : ", error);
    res = {
      data: 'Cannot tagUserToIntervention',
      status: 400
    };
  });
  console.log("RETURN tagUserToIntervention res: ", res);
  return res;
};
const tagUserToAction = async (token, id, userid) => {
  console.log(token, id, userid);
  let bodyconfig = JSON.stringify({
    interventionId: null,
    actionId: id,
    userId: userid
  });
  let headersconfig = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'token': token,
      'mac_address': mac_address,
      'ip': ip,
      'device_name': device_name,
      'device_model': device_model,
      'deviceType': device_Type
    }
  };
  var res = {};
  await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(baseUrl + '/api/users/tag', bodyconfig, headersconfig).then(function (response) {
    console.log("response recieved in tagUserToAction : ", response);
    res = response.data;
    tokenGlobal = response.data;
    res.status = response.status;
  }).catch(function (error) {
    console.log("ERROR in tagUserToAction : ", error);
    res = {
      data: 'Cannot tagUserToAction',
      status: 400
    };
  });
  console.log("RETURN tagUserToAction res: ", res);
  return res;
};
const getAllNotification = async (token, page) => {
  console.log(token);
  let headersconfig = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'token': token,
      'mac_address': mac_address,
      'ip': ip,
      'device_name': device_name,
      'device_model': device_model,
      'deviceType': device_Type
    }
  };
  var res = {};
  await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(baseUrl + '/api/users/getMyNotifications?CurrentPage=' + page, headersconfig).then(function (response) {
    console.log("response recieved in getAllNotification : ", response);
    res = response.data;
    tokenGlobal = response.data;
    res.status = response.status;
  }).catch(function (error) {});
  console.log("RETURN getAllNotification res: ", res);
  return res;
};
const getActionOverview = async token => {
  console.log(token);
  let headersconfig = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'token': token,
      'mac_address': mac_address,
      'ip': ip,
      'device_name': device_name,
      'device_model': device_model,
      'deviceType': device_Type
    }
  };
  var res = {};
  await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(baseUrl + '/api/report/action/overview', headersconfig).then(function (response) {
    console.log("response recieved in getActionOverview : ", response);
    res = response.data;
    tokenGlobal = response.data;
    res.status = response.status;
  }).catch(function (error) {});
  console.log("RETURN getActionOverview res: ", res);
  return res;
};
const getInterventionOverview = async token => {
  console.log(token);
  let bodyconfig = JSON.stringify({
    startDate: "2019-11-27",
    endDate: "2019-11-27"
  });
  let headersconfig = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'token': token,
      'mac_address': mac_address,
      'ip': ip,
      'device_name': device_name,
      'device_model': device_model,
      'deviceType': device_Type
    }
  };
  var res = {};
  await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(baseUrl + '/api/report/intervention/overview', headersconfig).then(function (response) {
    console.log("response recieved in getInterventionOverview : ", response);
    res = response.data;
    tokenGlobal = response.data;
    res.status = response.status;
  }).catch(function (error) {
    console.log(error); // window.location.href = '/auth/signin'
  });
  console.log("RETURN getInterventionOverview res: ", res);
  return res;
};
const getMyinterventionsByGroup = async token => {
  console.log(token);
  let headersconfig = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'token': token,
      'mac_address': mac_address,
      'ip': ip,
      'device_name': device_name,
      'device_model': device_model,
      'deviceType': device_Type
    }
  };
  var res = {};
  await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(baseUrl + '/api/intervention/getAllInterventionsGroupedByDate?CurrentPage=1', headersconfig).then(function (response) {
    console.log("response recieved in getMyinterventionsByGroup : ", response);
    res = response.data;
    tokenGlobal = response.data;
    res.status = response.status;
  }).catch(function (error) {});
  console.log("RETURN getMyinterventionsByGroup res: ", res);
  return res;
};
const getMyActionByGroup = async token => {
  console.log(token);
  let headersconfig = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'token': token,
      'mac_address': mac_address,
      'ip': ip,
      'device_name': device_name,
      'device_model': device_model,
      'deviceType': device_Type
    }
  };
  var res = {};
  await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(baseUrl + '/api/action/getAllActionsGroupedByDate?CurrentPage=1', headersconfig).then(function (response) {
    console.log("response recieved in getMyActionByGroup : ", response);
    res = response.data;
    tokenGlobal = response.data;
    res.status = response.status;
  }).catch(function (error) {});
  console.log("RETURN getMyActionByGroup res: ", res);
  return res;
};
const getMyinterventionsByGroupActivePriority = async token => {
  console.log(token);
  let headersconfig = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'token': token,
      'mac_address': mac_address,
      'ip': ip,
      'device_name': device_name,
      'device_model': device_model,
      'deviceType': device_Type
    }
  };
  var res = {};
  await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(baseUrl + '/api/intervention/getMyInterventionsByPriority/1?CurrentPage=1', headersconfig).then(function (response) {
    console.log("response recieved in getMyinterventionsByGroupActivePriority : ", response);
    res = response.data;
    tokenGlobal = response.data;
    res.status = response.status;
  }).catch(function (error) {});
  console.log("RETURN getMyinterventionsByGroupActivePriority res: ", res);
  return res;
};
const getActionByProirity = async (token, id) => {
  console.log(token);
  let headersconfig = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'token': token,
      'mac_address': mac_address,
      'ip': ip,
      'device_name': device_name,
      'device_model': device_model,
      'deviceType': device_Type
    }
  };
  var res = {};
  await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(baseUrl + '/api/action/getMyActionsByPriority/' + id + '?CurrentPage=1', headersconfig).then(function (response) {
    console.log("response recieved in getActionByProirity : ", response);
    res = response.data;
    tokenGlobal = response.data;
    res.status = response.status;
  }).catch(function (error) {});
  console.log("RETURN getActionByProirity res: ", res);
  return res;
};
const getAllActionByProirity = async (token, id, pageId, userId) => {
  console.log(token);
  let bodyconfig = JSON.stringify({
    user_id: userId
  });
  let headersconfig = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'token': token
    }
  };
  var res = {};
  await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(baseUrl + '/api/action/getAllActionsByPriority/' + id + '?CurrentPage=' + pageId, bodyconfig, headersconfig).then(function (response) {
    console.log("response recieved in getAllActionsByPriority : ", response);
    res = response.data;
    tokenGlobal = response.data;
    res.status = response.status;
  }).catch(function (error) {});
  console.log("RETURN getAllActionsByPriority res: ", res);
  return res;
};
const getAllInterventionsByProirity = async (token, id, pageId, userId) => {
  console.log(token);
  let bodyconfig = JSON.stringify({
    user_id: userId
  });
  let headersconfig = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'token': token,
      'mac_address': mac_address,
      'ip': ip,
      'device_name': device_name,
      'device_model': device_model,
      'deviceType': device_Type
    }
  };
  var res = {};
  await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(baseUrl + '/api/intervention/getAllInterventionsByPriority/' + id + '?CurrentPage=' + pageId, bodyconfig, headersconfig).then(function (response) {
    console.log("response recieved in getAllInterventionsByPriority : ", response);
    res = response.data;
    tokenGlobal = response.data;
    res.status = response.status;
  }).catch(function (error) {});
  console.log("RETURN getAllInterventionsByPriority res: ", res);
  return res;
};
const getAllActionsByUserId = async (token, userId, pageId) => {
  console.log(token);
  let bodyconfig = JSON.stringify({
    user_id: userId
  });
  let headersconfig = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'token': token,
      'mac_address': mac_address,
      'ip': ip,
      'device_name': device_name,
      'device_model': device_model,
      'deviceType': device_Type
    }
  };
  var res = {};
  await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(baseUrl + '/api/action/getAllActionsByUserId/' + userId + '?CurrentPage=' + pageId, headersconfig).then(function (response) {
    console.log("response recieved in getAllActionsByUserId : ", response);
    res = response.data;
    tokenGlobal = response.data;
    res.status = response.status;
  }).catch(function (error) {});
  console.log("RETURN getAllActionsByUserId res: ", res);
  return res;
};
const getAllInterventionsByUserId = async (token, userId, pageId) => {
  console.log(token, userId, pageId);
  let headersconfig = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'token': token,
      'mac_address': mac_address,
      'ip': ip,
      'device_name': device_name,
      'device_model': device_model,
      'deviceType': device_Type
    }
  };
  var res = {};
  await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(baseUrl + '/api/intervention/getInterventionsByUserId/' + userId + '?CurrentPage=' + pageId, headersconfig).then(function (response) {
    console.log("response recieved in getInterventionsByUserId : ", response);
    res = response.data;
    tokenGlobal = response.data;
    res.status = response.status;
  }).catch(function (error) {});
  console.log("RETURN getAllInterventionsByUserId res: ", res);
  return res;
};
const updateNotification = async (token, id) => {
  // console.log(token)
  const headersconfig = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      token: token
    }
  };
  const bodyconfig = JSON.stringify({
    notificationStatus: 1
  });
  var res = {};
  await axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(baseUrl + '/api/users/updateNotificationStatus/' + id, bodyconfig, headersconfig).then(function (response) {
    // console.log('response recieved in updateNotification : ', response)
    res = response.data; // tokenGlobal = response.data

    res.status = response.status;
  }).catch(function (handleError) {}); // console.log('RETURN updateNotification res: ', res)

  return res;
};
const getQuestions = async token => {
  const headersconfig = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      token: token
    }
  };
  const bodyconfig = JSON.stringify({
    actionTypeId: 1
  });
  var res = {};
  console.log(token);
  await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(baseUrl + '/api/surveyQuestion/getSurveyQuestions', bodyconfig, headersconfig).then(function (response) {
    console.log('response recieved in getQuestions : ', response);
    res = response.data; // tokenGlobal = response.data

    res.status = response.status;
  }).catch(function (handleError) {
    console.log(handleError);
  }); // console.log('RETURN updateNotification res: ', res)

  return res;
};
const getPatientDetailsSetPass = async id => {
  const headersconfig = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  };
  const bodyconfig = JSON.stringify({
    token: "PxPul53",
    userId: id
  });
  var res = {}; // console.log(token)

  await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(baseUrl + '/api/users/getPatientProfileForInvite', bodyconfig, headersconfig).then(function (response) {
    console.log('response recieved in getPatientDetailsSetPass : ', response);
    res = response.data; // tokenGlobal = response.data

    res.status = response.status;
  }).catch(function (handleError) {
    console.log(handleError);
  }); // console.log('RETURN updateNotification res: ', res)

  return res;
};
const updateUsersPasswordById = async (id, password) => {
  const headersconfig = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  };
  const bodyconfig = JSON.stringify({
    token: "PxPul53",
    userId: id,
    password: password
  });
  var res = {}; // console.log(token)

  await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(baseUrl + '/api/users/updateUsersPasswordById/' + id, bodyconfig, headersconfig).then(function (response) {
    console.log('response recieved in updateUsersPasswordById : ', response);
    res = response.data;
    res.status = response.status;
  }).catch(function (handleError) {
    console.log(handleError);
  });
  return res;
};
const updateActionScore = async (id, score) => {
  let token = localStorage.getItem('token');
  console.log('updateActionScore API');
  const headersconfig = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'token': token,
      'mac_address': mac_address,
      'ip': ip,
      'device_name': device_name,
      'device_model': device_model,
      'deviceType': device_Type
    }
  };
  const bodyconfig = JSON.stringify({
    score: score
  });
  var res = {};
  await axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(baseUrl + '/api/action/updateActionScore/' + id, bodyconfig, headersconfig).then(function (response) {
    // console.log('response recieved in updateActionScore : ', response)
    res = response.data;
    res.status = response.status;
  }).catch(function (error) {
    // console.log("ERROR in getCovidSurvey : " , error);
    if (error.response) {
      res = error.response;
      res.status = error.response.status;
    } else {
      res.status = false;
    }
  }); // console.log('RETURN updateActionScore res: ', res)

  return res;
};

/***/ })

}]);
//# sourceMappingURL=35.chunk.js.map