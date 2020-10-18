var UserProfile = (function () {
  var getLoggedIn = function () {
    return localStorage.getItem("loggedIn") === "true";
  };

  var setLoggedIn = function () {
    localStorage.setItem("loggedIn", true);
  };

  var setLoggedOut = function () {
    localStorage.setItem("loggedIn", false);
  };

  var getUID = function () {
    return localStorage.getItem("UID");
  };

  var setUID = function (state) {
    localStorage.setItem("UID", state);
  };

  var getToken = function () {
    return localStorage.getItem("token");
  };
  var setToken = function (state) {
    localStorage.setItem("token", state);
  };

  var getAdmin = function () {
    return localStorage.getItem("role") === "admin";
  };

  var getWorker = function () {
    return localStorage.getItem("role") === "worker";
  };

  var getCustomer = function () {
    return localStorage.getItem("role") === "customer";
  };

  var setRole = function (state) {
    localStorage.setItem("role", state);
  };

  return {
    getLoggedIn: getLoggedIn,
    setLoggedIn: setLoggedIn,
    setLoggedOut: setLoggedOut,
    getUID: getUID,
    setUID: setUID,
    getToken: getToken,
    setToken: setToken,
    getAdmin: getAdmin,
    getWorker: getWorker,
    getCustomer: getCustomer,
    setRole: setRole,
  };
})();

export default UserProfile;