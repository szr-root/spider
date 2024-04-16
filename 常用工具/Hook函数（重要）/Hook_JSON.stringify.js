(function() {
    var stringify = JSON.stringify;
    JSON.stringify = function(params) {
        console.log("Hook JSON.stringif:::", params);
        debugger;
        return stringify(params);
    }
})();