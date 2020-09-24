var UserProfile = (function() {
  var loggedIn = false;
  var UID = '';

  var getLoggedIn = function() {
    if(localStorage.getItem("loggedIn") === "true") {
      return Boolean(true);
    }
    else {
      return Boolean(false);
    }
     
  };

  var setLoggedIn = function() {  
    localStorage.setItem("loggedIn",true); 
  };

  var setLoggedOut = function() {
    localStorage.setItem("loggedIn",false)
  }

  var getUID = function() {
    return localStorage.getItem("UID");
  }

  var setUID = function(state) {
    localStorage.setItem("UID",state)
  }

  var getToken = function() {
    return localStorage.getItem("token")
  }
  var setToken = function(state) {
    localStorage.setItem("token",state)
  }

  var getAdmin = function() {
    if(localStorage.getItem("admin") === "true") {
      return Boolean(true);
    }
    else {
      return Boolean(false);
    }
  }
  var setAdmin = function(state) {
    localStorage.setItem("admin",state)
  }

  return {
    getLoggedIn: getLoggedIn,
    setLoggedIn: setLoggedIn,
    setLoggedOut: setLoggedOut,
    getUID: getUID,
    setUID: setUID,
    getToken: getToken,
    setToken: setToken,
    getAdmin:getAdmin,
    setAdmin:setAdmin
  }

})();

export default UserProfile;