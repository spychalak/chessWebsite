function updateHelloName()
{
    var newValue = $('input[name="name"]').val();

    $('#helloName').html(newValue);

    if (window.sessionStorage)
    {
        sessionStorage.HelloName = newValue;
    }
}

$(document).ready(function () {
    if (window.sessionStorage && sessionStorage.HelloName)
    {
        $('#helloName').html(sessionStorage.HelloName);
    }
});
