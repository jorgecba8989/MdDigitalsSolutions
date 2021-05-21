$(document).ready(function() {
    var url = $("#ivideo").attr('src');
    $("#linkVideo").on('hide.bs.modal', function() {
        $("#ivideo").attr('src', '');
    });
    $("#linkVideo").on('show.bs.modal', function() {
        $("#ivideo").attr('src', url);
    });
});