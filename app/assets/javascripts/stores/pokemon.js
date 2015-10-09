(function() {
  'use strict';
  var _pokemon = [];
  var POKEMON_INDEX_CHANGE_EVENT = "POKEMON_INDEX_CHANGE_EVENT";
  var POKEMON_DETAIL_CHANGE_EVENT = "POKEMON_DETAIL_CHANGE_EVENT";

  var resetPokemon = function(pokemon) {
    _pokemon = pokemon;
    PokemonStore.changed();
  };

  var resetSinglePokemon = function(pokemon) {
    var switched = false;
    _pokemon.forEach(function (p) {
      if(p.id === pokemon.id) {
        _pokemon[_pokemon.indexOf(p)] = pokemon;
        switched = true;
      }
    });
    if(!switched) { _pokemon.push(pokemon); }
    PokemonStore.detailChanged();
  };

  AppDispatcher.register(function(action){
    switch(action.actionType){
      case PokemonConstants.POKEMON_RECEIVED:
        resetPokemon(action.pokemon);
        break;
      case PokemonConstants.POKEMON_DETAIL_RECEIVED:
        resetSinglePokemon(action.pokemon);
        break;
    }
  });

  window.PokemonStore = $.extend({}, EventEmitter.prototype, {
    all: function() {
      return _pokemon.slice();
    },
    addPokemonIndexChangeListener: function (callback) {
      this.on(POKEMON_INDEX_CHANGE_EVENT, callback);
    },
    removePokemonIndexChangeListener: function (callback) {
      this.removeListener(POKEMON_INDEX_CHANGE_EVENT, callback);
    },
    addPokemonDetailChangeListener: function (callback) {
      this.on(POKEMON_DETAIL_CHANGE_EVENT, callback);
    },
    removePokemonDetailChangeListener: function (callback) {
      this.removeListener(POKEMON_DETAIL_CHANGE_EVENT, callback);
    },
    detailChanged: function () {
      this.emit(POKEMON_DETAIL_CHANGE_EVENT);
    },
    changed: function () {
      this.emit(POKEMON_INDEX_CHANGE_EVENT);
    },
    find: function (id) {
      return _pokemon.filter(function(pokemon){
        return pokemon.id === id;
      })[0];
    }
  });
}());
