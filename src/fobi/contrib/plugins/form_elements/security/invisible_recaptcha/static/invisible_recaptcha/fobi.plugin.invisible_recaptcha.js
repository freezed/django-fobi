/*
    Document   : fobi.plugin.invisible_recaptcha.js
    Created on : January 18, 2018, 03:30:35 AM
    Author     : Artur Barseghyan (artur.barseghyan@gmail.com)
    Description:
        Invisible recaptcha plugin init scripts.
*/
;
// TODO: rename .form-horizontal to #fobi-form

function g_recaptcha_onSubmit(token) {
    console.log("g_recaptcha_onSubmit")
//    document.getElementById("fobi-form").submit();
//    document.getElementsByClassName("form-horizontal").submit();
    $('form.form-horizontal').submit();
}

$(document).ready(function() {
    var siteKey = window.InvisibleRecaptchaSiteKey || "";
    var submitFormButton = $('form.form-horizontal button[type=submit]');
    submitFormButton.addClass('g-recaptcha');
    submitFormButton.attr('data-sitekey', siteKey);
    submitFormButton.attr('data-callback', 'g_recaptcha_onSubmit');
    submitFormButton.removeAttr('type');
});
