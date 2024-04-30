
$(document).ready(function(){
    $("#cargar_datos").click(function(){
        var userId = $('#userId').val();
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/users/' + userId,
            type: 'GET',
            success: function(data) {
                var html = '';
                html += '<p>Usuario: ' + data.id + '</p>';
                html += '<p>Nombre: ' + data.name + '</p>';
                html += '<p>Email: ' + data.email + '</p>';
                html += '<p>City: ' + data.address.city + '</p>';
                $('#result').html(html);
            },
            error: function(error) {
                console.log('Error:', error);
            }
        });
    });
});
/* 
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
 */