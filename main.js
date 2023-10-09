$(document).ready(function(){
    const notaRiscado = $('.riscado');

    $('form').on('submit', function(e){
        e.preventDefault();
        
        const inputNomeTarefa = $('#nome-tarefa').val();
        const novaTarefa = $('<li>' +inputNomeTarefa+ '</li>');
        
        $(novaTarefa).appendTo('ul'); 
        $('#nome-tarefa').val('');
    })

    $('body').on('click', 'li', function(){
        $(this).toggleClass('riscado');
    });
});