$(document).ready(function() {

    $('#enter').click(function() {
        $('#resultado').html('');
        var string = $('#nome').val();
        var array = string.split('');
        $('#resultado').append(array.length + ' caracteres<br>');
        exibir(array);
        iterar(array);
    });

    function iterar(array) {
        for (var i = 0; i < array.length; i++) {
            if (i < array.length - 1) {
                var valor = parseInt(array[i]) + parseInt(array[i + 1]);
                if (valor > 9) {
                    valor = valor.toString();
                    var array_valor = valor.split('');
                    valor = parseInt(array_valor[0]) + parseInt(array_valor[1]);
                }
                array[i] = valor;
            } else {
                array.pop();
            }
        }
        exibir(array);
        if (array.length > 2) {
            iterar(array);
        } else {
            var numero = array[0] + array[1];
            if (numero > 9) {
                numero = numero.toString();
                var aux = numero.split('');
                numero = parseInt(aux[0]) + parseInt(aux[1]);
            }
            array[0] = numero;
            array.pop();
            exibir(array);
        }
    }

    function exibir(array) {
        $('#resultado').append(array.join(' - ') + '<br>');
    }
});
