(window["webpackJsonpreact-able-pro"] = window["webpackJsonpreact-able-pro"] || []).push([[49],{

/***/ "./src/API/ApiActions.js":
/*!*******************************!*\
  !*** ./src/API/ApiActions.js ***!
  \*******************************/
/*! exports provided: baseUrl, getMyprofileTest, getAllUsersAPi, getAllActionComments, getActionById, getAllActions, getAllActionsByUserId, getAllActionByPriority, actionsPayLoad, interventionsPayLoad, logoutPayload, getMyNotification, getAllActionsCombine, getAllInterventionsCombine, updateNotification, getUnreadNotificationCount, actionPop, interventionPop, actionDetailsPop, interventionDetailsPop, getAllPatients, getPatientIntervention, getImpactFactors, getActionInvCounts, getNewsFeed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseUrl", function() { return baseUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMyprofileTest", function() { return getMyprofileTest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllUsersAPi", function() { return getAllUsersAPi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllActionComments", function() { return getAllActionComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActionById", function() { return getActionById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllActions", function() { return getAllActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllActionsByUserId", function() { return getAllActionsByUserId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllActionByPriority", function() { return getAllActionByPriority; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionsPayLoad", function() { return actionsPayLoad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interventionsPayLoad", function() { return interventionsPayLoad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutPayload", function() { return logoutPayload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMyNotification", function() { return getMyNotification; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllActionsCombine", function() { return getAllActionsCombine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllInterventionsCombine", function() { return getAllInterventionsCombine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateNotification", function() { return updateNotification; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUnreadNotificationCount", function() { return getUnreadNotificationCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionPop", function() { return actionPop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interventionPop", function() { return interventionPop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionDetailsPop", function() { return actionDetailsPop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interventionDetailsPop", function() { return interventionDetailsPop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllPatients", function() { return getAllPatients; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPatientIntervention", function() { return getPatientIntervention; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImpactFactors", function() { return getImpactFactors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActionInvCounts", function() { return getActionInvCounts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNewsFeed", function() { return getNewsFeed; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../store/actions */ "./src/store/actions.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-device-detect */ "./node_modules/react-device-detect/main.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_2__);

 // export const baseUrl = baseUrl



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
const getMyprofileTest = token => async dispatch => {
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
  const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(baseUrl + '/api/users/getMyProfile', headersconfig, {
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_1__["GETUSERPROFILE"],
      payload: res
    });
    console.log(res);
  }).catch(error => {
    console.log(error);
    localStorage.clear();
    window.location.href = '/auth/signin';
  });
};
const getAllUsersAPi = token => async dispatch => {
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
  const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(baseUrl + '/api/users?=&CurrentPage=1', headersconfig, {
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_1__["GET_ALL_USERS"],
      payload: res.data
    });
    console.log(res);
  }).catch(error => {
    console.log(error);
  });
};
const getAllActionComments = (token, id) => async dispatch => {
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
  const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(baseUrl + '/api/messages/getAllActionsMessages/' + id, headersconfig, {
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_1__["GET_ACTION_COMMENTS"],
      payload: res.data
    });
    console.log('getAllActionComments response', res);
  }).catch(error => {
    console.log(error);
  });
};
const getActionById = (token, id) => async dispatch => {
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
  const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(baseUrl + '/api/action/getActionById/' + id, headersconfig, {
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_1__["GET_ACTION_DETAILS_ID"],
      payload: res.data
    });
    console.log('getActionById response', res);
  }).catch(error => {
    console.log(error);
  });
};
const getAllActions = (token, pageId) => async dispatch => {
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
  const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(baseUrl + '/api/action/getAllActions?CurrentPage=' + pageId, headersconfig, {
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_1__["GET_ALL_ACTIONS"],
      payload: res.data
    });
    console.log('getAllActions response', res);
  }).catch(error => {
    console.log(error);
  });
};
const getAllActionsByUserId = (token, userId, pageId) => async dispatch => {
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
  const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(baseUrl + '/api/action/getAllActionsByUserId/' + userId + '?CurrentPage=' + pageId, headersconfig, {
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_1__["GET_ALL_ACTIONS_USERID"],
      payload: res.data
    });
    console.log('getAllActionByUserID response', res);
  }).catch(error => {
    console.log(error);
  });
};
const getAllActionByPriority = (token, id, pageId, userId) => async dispatch => {
  console.log(id, pageId, userId);
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
  const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(baseUrl + '/api/action/getAllActionsByPriority/' + id + '?CurrentPage=' + pageId, bodyconfig, headersconfig).then(res => {
    dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_1__["GET_ALL_ACTIONS_PIRIORITY"],
      payload: res.data
    });
    console.log('getAllActionsByPeriority response', res);
  }).catch(error => {
    console.log(error);
  });
};
const actionsPayLoad = data => async dispatch => {
  console.log(data);
  dispatch({
    type: _store_actions__WEBPACK_IMPORTED_MODULE_1__["ALL_ACTION_PAYLOAD"],
    payload: data
  });
};
const interventionsPayLoad = data => async dispatch => {
  console.log(data);
  dispatch({
    type: _store_actions__WEBPACK_IMPORTED_MODULE_1__["ALL_INTERVENTION_PAYLOAD"],
    payload: data
  });
};
const logoutPayload = token => async dispatch => {
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
  const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(baseUrl + '/api/users/logout', headersconfig, {
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_1__["LOGOUT"],
      payload: undefined // type: actionTypes.ALL_ACTION_PAYLOAD,
      // payload: undefined,
      // type: actionTypes.GET_MY_NOTIFICATION,
      // payload: {},
      // type: actionTypes.GET_ACTIONS_COMBINE,
      // payload: {},
      // type: actionTypes.GET_INTERVENTIONS_COMBINE,
      // payload: {}

    });
    console.log('logoutPayload response', res);
  }).catch(error => {
    console.log(error);
  });
}; // export const getMyNotification = (token) => async (dispatch) => {
// let headersconfig = {
//     headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json',
//     'token':token
//     }
// }
// const res = await axios
//     .get(baseUrl+'/api/users/getMyNotifications', headersconfig)
//     .then((res) => {
//     dispatch({
//         type: actionTypes.GET_MY_NOTIFICATION,
//         payload: res.data
//     });
//     console.log('getMyNotification response',res);
//     })
//     .catch((error) => {
//         console.log(error);
//     });
// };

const getMyNotification = (token, pageId) => async dispatch => {
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
  const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(baseUrl + '/api/users/getMyNotifications?CurrentPage=' + pageId, headersconfig, {
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_1__["GET_MY_NOTIFICATION"],
      payload: res.data
    });
    console.log('getMyNotification response', res);
  }).catch(error => {
    console.log(error);
  });
};
const getAllActionsCombine = (token, pageId, userId, priorityId, interventionTypeId) => async dispatch => {
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
    user_id: userId,
    priorityId: priorityId,
    interventionTypeId: interventionTypeId
  });
  console.log(bodyconfig);
  const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(baseUrl + '/api/action/all?CurrentPage=' + pageId, bodyconfig, headersconfig, {
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_1__["GET_ACTIONS_COMBINE"],
      payload: res.data
    });
    console.log('getAllActionsCombine response', res);
  }).catch(error => {
    dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_1__["GET_ACTIONS_COMBINE"],
      payload: {
        "data": 'No Record Found'
      }
    });
  });
};
const getAllInterventionsCombine = (token, pageId, userId, priorityId, interventionTypeId) => async dispatch => {
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
    user_id: userId,
    priorityId: priorityId,
    interventionTypeId: interventionTypeId
  });
  console.log(bodyconfig);
  const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(baseUrl + '/api/intervention/all?CurrentPage=' + pageId, bodyconfig, headersconfig, {
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_1__["GET_INTERVENTIONS_COMBINE"],
      payload: res.data
    });
    console.log('getAllInterventionsCombine response', res);
  }).catch(error => {
    dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_1__["GET_INTERVENTIONS_COMBINE"],
      payload: {
        "data": 'No Record Found'
      }
    });
  });
}; // export const updateNotification = (token, id) => async (dispatch) => {
//     const headersconfig = {
//         headers: {
//           Accept: 'application/json',
//           'Content-Type': 'application/json',
//           token: token
//         }
//       }
//       const bodyconfig = {
//         "notificationStatus": "1"
//       }
//       await axios.put(baseUrl + '/api/users/updateNotificationStatus/' + id, bodyconfig, headersconfig)
//         .then(function (response) {
//           console.log('response recieved in updateNotification : ', response)
//         })
//         .catch(function (handleError) {
//         })
// };

const updateNotification = (token, id) => async dispatch => {
  // console.log(token)
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
    notificationStatus: 1
  });
  var res = {};
  await axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(baseUrl + '/api/users/updateNotificationStatus/' + id, bodyconfig, headersconfig).then(function (response) {
    console.log('RETURN updateNotification res: ', response);
  }).catch(function (handleError) {
    console.log('RETURN updateNotification res: ', handleError);
  }); // console.log('RETURN updateNotification res: ', res)

  return res;
};
const getUnreadNotificationCount = token => async dispatch => {
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
  var res = {};
  await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(baseUrl + '/api/users/getUnreadNotificationCount', headersconfig).then(function (res) {
    dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_1__["GET_UNREAD_NOTIFICATION"],
      payload: res.data
    });
    console.log('response recieved in getUnreadNotificationCount : ', res);
  }).catch(function (handleError) {
    console.log(handleError);
  });
  return res;
};
const actionPop = data => async dispatch => {
  dispatch({
    type: _store_actions__WEBPACK_IMPORTED_MODULE_1__["ACTION_POP"],
    payload: data
  });
};
const interventionPop = data => async dispatch => {
  dispatch({
    type: _store_actions__WEBPACK_IMPORTED_MODULE_1__["INTERVENTION_POP"],
    payload: data
  });
};
const actionDetailsPop = data => async dispatch => {
  dispatch({
    type: _store_actions__WEBPACK_IMPORTED_MODULE_1__["ACTION_DETAILS_POP"],
    payload: data
  });
};
const interventionDetailsPop = data => async dispatch => {
  dispatch({
    type: _store_actions__WEBPACK_IMPORTED_MODULE_1__["INTERVENTION_DETAILS_POP"],
    payload: data
  });
};
const getAllPatients = (token, pageId) => async dispatch => {
  const headersconfig = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      token: token,
      'mac_address': mac_address,
      'ip': ip,
      'device_name': device_name,
      'device_model': device_model,
      'deviceType': device_Type
    }
  };
  var res = {};
  await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(baseUrl + '/api/patient/getPatientProfiles?CurrentPage=' + pageId, headersconfig).then(function (response) {
    console.log('response recieved in get all patiens: ', response);
    dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_1__["GET_ALL_PATIENTS"],
      payload: response.data
    });
  }).catch(function (handleError) {}); // console.log('RETURN logout res: ', res)

  return res;
};
const getPatientIntervention = (token, pageId, id) => async dispatch => {
  const headersconfig = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      token: token,
      'mac_address': mac_address,
      'ip': ip,
      'device_name': device_name,
      'device_model': device_model,
      'deviceType': device_Type
    }
  };
  var res = {};
  await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(baseUrl + '/api/intervention/getInterventionsByPatientId/' + id + '?CurrentPage=' + pageId, headersconfig).then(function (response) {
    console.log('response recieved in get all getPatientIntervention: ', response);
    dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_1__["PATIENT_INTERVENTION"],
      payload: response.data
    });
  }).catch(function (handleError) {
    console.log(handleError);
    dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_1__["PATIENT_INTERVENTION"],
      payload: {
        "data": 'No Record Found'
      }
    });
  }); // console.log('RETURN logout res: ', res)

  return res;
};
const getImpactFactors = (token, pageId) => async dispatch => {
  const headersconfig = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      token: token,
      'mac_address': mac_address,
      'ip': ip,
      'device_name': device_name,
      'device_model': device_model,
      'deviceType': device_Type
    }
  };
  var res = {};
  await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(baseUrl + '/api/impactFactor/getAllImpactFactors?CurrentPage=' + pageId, headersconfig).then(function (response) {
    console.log('response recieved in get all getImpactFactors: ', response);
    dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_1__["IMPACT_FACTORS"],
      payload: response.data
    });
  }).catch(function (handleError) {
    console.log(handleError);
    dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_1__["IMPACT_FACTORS"],
      payload: {
        "data": 'No Record Found'
      }
    });
  }); // console.log('RETURN logout res: ', res)

  return res;
};
const getActionInvCounts = token => async dispatch => {
  const headersconfig = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      token: token,
      'mac_address': mac_address,
      'ip': ip,
      'device_name': device_name,
      'device_model': device_model,
      'deviceType': device_Type
    }
  };
  var res = {};
  await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(baseUrl + '/api/report/getActionInvCounts', headersconfig).then(function (response) {
    console.log('response recieved in get all getIntAndAction: ', response);
    dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_1__["ACTION_INV_COUNTS"],
      payload: response.data
    });
  }).catch(function (handleError) {
    console.log(handleError);
    dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_1__["ACTION_INV_COUNTS"],
      payload: {
        "data": 'No Record Found'
      }
    });
  }); // console.log('RETURN logout res: ', res)

  return res;
};
const getNewsFeed = (token, pageId) => async dispatch => {
  const headersconfig = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      token: token,
      'mac_address': mac_address,
      'ip': ip,
      'device_name': device_name,
      'device_model': device_model,
      'deviceType': device_Type
    }
  };
  var res = {};
  await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(baseUrl + '/api/messages/feed?CurrentPage=' + pageId, headersconfig).then(function (response) {
    console.log('response recieved in get all getNewsFeed: ', response);
    dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_1__["NEWS_FEED"],
      payload: response.data
    });
  }).catch(function (handleError) {
    console.log(handleError);
    dispatch({
      type: _store_actions__WEBPACK_IMPORTED_MODULE_1__["NEWS_FEED"],
      payload: {
        "data": 'No Record Found'
      }
    });
  }); // console.log('RETURN logout res: ', res)

  return res;
};

/***/ }),

/***/ "./src/assets/images/logo.png":
/*!************************************!*\
  !*** ./src/assets/images/logo.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEkAAAA8CAYAAAAqnJeuAAAACXBIWXMAAAsTAAALEwEAmpwYAAAG0mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTktMDktMjZUMjE6MTM6MzMrMDU6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE5LTA5LTI2VDIxOjE3OjQ1KzA1OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE5LTA5LTI2VDIxOjE3OjQ1KzA1OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjc5YzE2MzQ3LWFiYTQtNDcwMS1iNGE0LWQ3OTRmNDdiYjQyMSIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjM3MzhmN2MwLTU1MDctYWE0Zi04YmI1LWMyZmIwYTI4MTllOSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmExZmE1N2IyLTlkZWMtNDM4Yi05OTYyLThkN2QwNzg1ODUyZCI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YTFmYTU3YjItOWRlYy00MzhiLTk5NjItOGQ3ZDA3ODU4NTJkIiBzdEV2dDp3aGVuPSIyMDE5LTA5LTI2VDIxOjEzOjMzKzA1OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZGRlYWNkODUtY2Q1OC00ZjM4LWFlMWYtYzExZDUyN2MzZWJlIiBzdEV2dDp3aGVuPSIyMDE5LTA5LTI2VDIxOjE2OjI2KzA1OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NzljMTYzNDctYWJhNC00NzAxLWI0YTQtZDc5NGY0N2JiNDIxIiBzdEV2dDp3aGVuPSIyMDE5LTA5LTI2VDIxOjE3OjQ1KzA1OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBl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"

/***/ })

}]);
//# sourceMappingURL=49.chunk.js.map