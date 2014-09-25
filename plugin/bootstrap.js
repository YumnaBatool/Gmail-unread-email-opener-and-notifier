
if(top.document == document) {
    var addData = function(id, val) {
        var body = document.getElementsByTagName("body")[0];
        var div = document.createElement('div');
        div.setAttribute('data-val', val);
        div.id = id + "_gmailr_data";
        div.setAttribute('style', "display:none");
        body.appendChild(div);
    };
    

    var loadScript = function(path) {
        var headID = document.getElementsByTagName("head")[0];
        var newScript = document.createElement('script');
        newScript.type = 'text/javascript';
        newScript.src = path;
        headID.appendChild(newScript);
    };
    

    addData("jquery_path",     chrome.extension.getURL("lib/jquery.1.4.2.js"));
    addData("jquery_bbq_path", chrome.extension.getURL("lib/jquery.ba-bbq.js"));
    addData("gmailr_path",     chrome.extension.getURL("lib/mymailer.js"));
    addData("main_path",       chrome.extension.getURL("main.js"));
  
    loadScript(chrome.extension.getURL("lib/lab.js"));
    loadScript(chrome.extension.getURL("lib/init.js"));
};
