function toLimit(string = " "){
	string.value = string.value.substring(0,40);
}
function toLimiter(string = " "){
	string.value = string.value.substring(0,40);
}
function toLim(string = " "){
	string.value = string.value.substring(0,500);
}
let eleven = document.querySelector('#eleven');
 eleven.addEventListener('click', (event)=>{
	event.preventDefault();
 })
 $(function() {
    $( "#calendario" ).datepicker({
        showButtonPanel:true
    });
});
$(function() {
    $("#calendario").datepicker({dateFormat: 'yy-mm-dd'});
});
$(function() {
    $("#calendario").datepicker({
        changeMonth: true,
        changeYear: true
    });
});
$(function() {
    $("#calendario").datepicker({
        showOtherMonths: true,
        selectOtherMonths: true
    });
});
$(function() {
    $("#calendario").datepicker({
        numberOfMonths: 3
    });
});
$(function() {
    $("#calendario").datepicker({
        dateFormat: 'dd/mm/yy',
        dayNames: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado','Domingo'],
        dayNamesMin: ['D','S','T','Q','Q','S','S','D'],
        dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb','Dom'],
        monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
        monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez']
    });
});

 