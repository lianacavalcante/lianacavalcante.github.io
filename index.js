function criarMapa(titulo, id, lat, lng) {
  var mapCanvas = document.getElementById(id);
  var mapOptions = {
    center: new google.maps.LatLng(lat, lng),
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(lat, lng),
    title: titulo,
    map: map
  });
}

new juicebox({
  containerid:'juicebox-container',
  baseURL:'juicebox_lite/',
  backgroundColor:'rgb(0,0,0)',
  galleryHeight:'600',
  galleryWidth:'800'
});

$(function() {
  criarMapa('Capela Christus Filius Dei', 'mapa-igreja', -3.738464, -38.506817);
  criarMapa('Viriato Gastronomia e Eventos', 'mapa-recepcao', -3.792811, -38.481287);

  $(".fancybox").fancybox();

  $('#confirmacaoDePresenca').on('submit', function(e) {
    e.preventDefault();
    var nome = $('#nome').val();
    var resposta = $('#resposta').val();
    var quantidade = $('#quantidade').val();
    var email = $('#email').val();
    var telefone = $('#telefone').val();
    var observacoes = $('#observacoes').val();

    if (!nome) {
      alert("O preenchimento do nome é obrigatório");
      return false;
    }

    $.ajax({
      type: 'POST',
      url: 'https://docs.google.com/forms/d/1PRhvmNOunk4ICWpAO1hYhuIqsPTSyEz_7Ok-FTizom0/formResponse',
      data: {
        'entry.769859590': nome,
        'entry.1567458747': resposta,
        'entry.1972561473': quantidade,
        'entry.909415114': email,
        'entry.1393684423': telefone,
        'entry.1146559276': observacoes
      }
    });
    $("#confirmacaoDePresenca").replaceWith('<div class="row"><div class="twelve column"><h2 style="text-align: center;background-color: #ddd; padding: 10px;">Obrigado pela resposta!</h2></div></div>');
  });
});
