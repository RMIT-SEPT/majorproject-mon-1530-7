var UserProfile = (function() {
  var loggedIn = false;

  var getLoggedIn = function() {
    if(localStorage.getItem("loggedIn") == "true") {
      return Boolean(true);
    }
    else {
      return Boolean(false);
    }
     
  };

  var setLoggedIn = function(state) {
    loggedIn = state;   
    localStorage.setItem("loggedIn",state); 
  };

  return {
    getLoggedIn: getLoggedIn,
    setLoggedIn: setLoggedIn
  }

})();

export default UserProfile;