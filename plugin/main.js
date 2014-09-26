/* Code to convert  modify gmail UI. Change compose button text to ‘jQuery’ and sent button text to ‘Emailcherry’ */
///////******** START *****////////

//jQuery('.z0 .T-I').html('jQuery');

var style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = '.z0 .T-I {width: 97px; overflow: hidden;}';
document.getElementsByTagName('head')[0].appendChild(style);

var style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = '.z0 .T-I:before {content: "jQuery"; padding: 0px 36px 10px 27px;}';
document.getElementsByTagName('head')[0].appendChild(style);

var style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = '.T-I-atl {width: 58px; overflow: hidden; padding-right: 9px; padding-left: 5px;}';
document.getElementsByTagName('head')[0].appendChild(style);

var style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = '.T-I-atl:before {content: "Emailcherry    ";}';
document.getElementsByTagName('head')[0].appendChild(style);

/////////*******  END **********/////////



/* Code that opens the first unread email from your email, 
and upon opening that particular email message, 
it shows a chrome desktop notification with email subject and message */

///////******** START *****////////

var gmail = Gmail();

var emails = gmail.get.visible_emails();
for (i = 0; i < emails.length; i++) { 
      if( emails[i].type == "unread" ){ 
        var id = emails[i].id;
        break;
      }
    }

var data = gmail.get.email_data(email_id=id);
var message = data.threads[id].subject+"\n"+data.threads[id].content_plain;


$( document ).ready(function() {
  //console.log('yumna');
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  }
  else if (Notification.permission === "granted") {
    //console.log('granted');
    //console.log(message);
    var notification = new Notification(message);
  }
  else if (Notification.permission !== 'denied') {
    //console.log('noooo');
    Notification.requestPermission(function (permission) {

      if(!('permission' in Notification)) {
        //console.log('not_in');
        Notification.permission = permission;
      }

      if (permission === "granted") {
        //console.log('message');
        var notification = new Notification(message);
      }
    });
  }

  window.location.assign("https://mail.google.com/mail/u/0/#inbox/"+id);

})

/////////*******  END **********/////////
