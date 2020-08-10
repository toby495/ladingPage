function prueba() {
    $('#txtImg1').css('opacity', '0');
    $('#txtImg2').css('opacity', '0');
    $('#txtImg3').css('opacity', '0');

    var iconos = document.querySelectorAll('#imagenes-metas a');
    for (let i = 0; i < iconos.length; i++) {
        $(iconos[i]).hover(function(e) {
            if (e.target == show) {
                $('#txtImg1').css('opacity', '1');
            } else if (e.target == show2) {
                $('#txtImg2').css('opacity', '1');
            } else if (e.target == show3) {
                $('#txtImg3').css('opacity', '1');
            }
        });
    }
}

window.addEventListener('load', prueba);
window.addEventListener('load', animations);