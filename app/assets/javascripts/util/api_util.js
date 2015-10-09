window.ApiUtil = {
  fetchAllPokemon: function () {
    $.ajax({
      url: 'api/pokemon',
      type: 'GET',
      dataType: 'json',
      success: function (pokemon) {
        ApiActions.receiveAllPokemon(pokemon);
      }
    });
  },
  fetchSinglePokemon: function (props) {
    $.ajax({
      url: 'api/pokemon/' + props.params.pokemonId,
      type: 'GET',
      dataType: 'json',
      success: function (pokemon) {
        ApiActions.receiveSinglePokemon(pokemon);
      }
    });
  }
};
