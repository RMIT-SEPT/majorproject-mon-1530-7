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

  var setLoggedIn = function(state) {  
    localStorage.setItem("loggedIn",state); 
  };

  var getUID = function() {
    return localStorage.getItem("UID");
  }

  var setUID = function(state) {
    localStorage.setItem("UID",state)
  }

  return {
    getLoggedIn: getLoggedIn,
    setLoggedIn: setLoggedIn,
    getUID: getUID,
    setUID: setUID
  }

})();

export default UserProfile;