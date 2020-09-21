var UserProfile = (function() {
  var loggedIn = false;

  var getLoggedIn = function() {
    return loggedIn;    
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