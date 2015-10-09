window.ApiActions = {
  receiveAllPokemon: function(pokemon) {
    AppDispatcher.dispatch({
      actionType: PokemonConstants.POKEMON_RECEIVED,
      pokemon: pokemon
    });
  },
  receiveSinglePokemon: function (pokemon) {
    AppDispatcher.dispatch({
      actionType: PokemonConstants.POKEMON_DETAIL_RECEIVED,
      pokemon: pokemon
    });
  }
};
