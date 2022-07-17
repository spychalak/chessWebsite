function getAnswerByName(name)
{

    return $('input[name="' + name + '"]:checked').val();
}
function  save_answers()
{
    if (window.localStorage)
    {
        localStorage.answer1 = getAnswerByName('answer1');
        localStorage.answer2 = getAnswerByName('answer2');
    }
}
function delete_storage()
{
    if (window.localStorage) {
        localStorage.removeItem('answer1');
        localStorage.removeItem('answer2');
    }
}
$(document).ready(function () {
    if (window.localStorage)
    {
        $('input:radio[name="answer1"][value="' + localStorage.answer1 + '"]').attr('checked', true);
        $('input:radio[name="answer2"][value="' + localStorage.answer2 + '"]').attr('checked', true);
    }
});
