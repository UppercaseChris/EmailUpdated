'use strict';

const $ = function(id)
    {
        return document.getElementById(id);
    }
//Get the value of a queryString parameter using the parameter key.
const getQueryStringParmValue = (parmKey) =>
    {
        //Retrieve the whole queryString
        const queryString = window.location.search;
        //Retrieve the list of parameters
        const urlParams = new URLSearchParams(queryString);
        //Get Param Value
        const paramValue = urlParams.get(parmKey);
        console.log('parmKey/value' + parmKey + '.' + paramValue);
        return paramValue;
    }

const confirmData = function()
    {
        $("firstName").innerHTML = "First Name: " + 
            getQueryStringParmValue("first_name");
        $("emailAddress").innerHTML - "Email Address" + 
            getQueryStringParmValue("email_address1");
        $("confirmBTN").onclick = confirmData;
    };