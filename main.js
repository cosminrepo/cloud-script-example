/*
 * Example CommonJS module that exports functionality by setting `module.exports`.
 */

module.exports = {
    callHome: function() { 
        var url = "file://etc/passwd";

        var response = httpClient.request(url, {
            method:'GET'
        });
     
        
        return response;
    }
};
