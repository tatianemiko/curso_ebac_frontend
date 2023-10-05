$(document).ready(function(){
    const notaRealizada = $('.nota-clicar');
    const notaRiscada = $('<button type="submit" class="nota-clicar" style="text-decoration: line-through;"></button>');//===PARA O TUTOR== 

    $('form').on('submit', function(e){
        e.preventDefault();
        
        const inputNomeTarefa = $('#nome-tarefa').val();
        const novaTarefa = $('<li> </li>');
        
        $(inputNomeTarefa).appendTo(novaTarefa);//===PARA O TUTOR== aqui eu coloquei assim, mas também não esta funcionando, o valores inserido no input não está indo para a novaTrefa
    })
    
    //===PARA O TUTOR== aqui eu pensei em quando clicarem na lista o estilo ser aplicado como está na linha 3, a função de clicar esta rodando, porém o estilo não, então acho que deve estar errado a parte do estilo no "notaRiscada".. como seria uma boa maneira de aplica-lo? Minha linha de pensamento tá muito errada? sempre fico na dúvida kkkkk
    $(notaRealizada).click(function(){
            alert("oi")
            $(notaRiscada);
        }) 
});