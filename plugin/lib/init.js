
var getData = function(id) {
    return document.getElementById(id + "_gmailr_data").getAttribute('data-val');
};

$LAB
.script(getData('jquery_path'))
.wait()
.script(getData('jquery_bbq_path'))
.wait()
.script(getData('gmailr_path'))
.wait()
.script(getData('main_path'));
