import 'isomorphic-fetch'
import {DOMAIN} from "../globals"
const queryString = require('query-string');
// import $ from 'jquery';

export const FETCH_SYMBOL = Symbol('Fetch Symbol')





// export const SETTING_DELETE_SYMBOL = Symbol('Setting delete Symbol')


// const DOMAIN="http://baiduios.com/"



// console.log(DOMAIN);

function request_by_ajax(endpoint,post_params){

  // var nongysid=cookie.load('nongysid')
  // var lon=cookie.load('lon')
  // var lat=cookie.load('lat')


  // const fullUrl= `${DOMAIN}expertinfo.php`

  // var nongysid=cookie.load('nongysid')
  // const fullUrl= `http://t.nongyisheng.com/h5/expertinfo?nongysid=${nongysid}&suid=${suid}`

  let header={}
  if(post_params){
    var data = new FormData();
    for(let key in post_params){
      
      let value=post_params[key];
      if(typeof(value)=="object"){
        value=JSON.stringify(value)
      }
      data.append(key,value)
    }

    // data.append( "json",JSON.stringify(post_params));
    header={
       method: "POST",
        credentials: "same-origin",
      // headers: {
      //    "Content-Type": "application/x-www-form-urlencoded"
      // },
      body: data
    }
  }

  // debugger
  const fullUrl= `${DOMAIN}/${endpoint}`

  return fetch(fullUrl,
    header)
    // .then(function (response){
    //   console.log(response.status)
    //   console.log(response)
    //   console.log(response.json())
    //   return response.json()
    // })
    .then(response=>
      response.json().then(json => ({ json, response }))
    ).then(({ json, response }) => {
      // alert(111)
      // console.log(json)
      // console.log(response)
      // console.log(json.data.expert)
      // console.log(schema)
      // console.log(normalize(json.data.expert,schema.expertSchema))
      // console.log(normalize(json.data.expert,
          // {
          //   expert:schema.expertSchema
          // }))

      // console.log("=================start")
      // console.log( normalize(json.data,schema.hospialSchema))
      // console.log("=================end")

      // debugger;
      let _params=response.url.split("?")
      if(_params.length>0){
          let requestParams=queryString.parse(_params[1])
          json.requestParams=requestParams;
      }
      return Object.assign({},json)
      
    })
}



export default store => next => action => {
  const fetchSymbol = action[FETCH_SYMBOL]
  if (typeof fetchSymbol === 'undefined') {
    return next(action)
  }


  const {types,endpoint,post_params} = fetchSymbol

  
  // if (!schema) {
  //   throw new Error('Specify one of the exported Schemas.')
  // }

  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected an array of three action types.')
  }
  if (!types.every(type => typeof type === 'string')) {
    throw new Error('Expected action types to be strings.')
  }


  function actionWith(data) {
    // debugger
    const finalAction = Object.assign({}, action, data)
    delete finalAction[FETCH_SYMBOL]
    return finalAction
  }

  const [ requestType, successType, failureType ] = types
  

  next(actionWith({ type: requestType }))

  return request_by_ajax(endpoint,post_params).then(
    response => next(actionWith({
      response,
      type: successType
    })),
    error => next(actionWith({
      type: failureType,
      error: error.message || 'Something bad happened'
    }))
  )
}