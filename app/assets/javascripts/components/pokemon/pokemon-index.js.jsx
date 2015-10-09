window.PokemonIndex = React.createClass({
  getInitialState: function () {
    return {pokemon: PokemonStore.all()};
  },
  componentDidMount: function () {
    PokemonStore.addPokemonIndexChangeListener(this._onChange);
    ApiUtil.fetchAllPokemon();
  },
  componentWillUnmount: function () {
    PokemonStore.removePokemonIndexChangeListener(this._onChange);
  },
  _onChange: function () {
    this.setState({pokemon: PokemonStore.all()});
  },
  render: function () {
    return (
      <div>
        <ul>
          {
            this.state.pokemon.map(function(pokemon) {
              return (<PokemonIndexItem pokemon={pokemon} key={pokemon.id}/>);
            })
          }
        </ul>
      </div>
    );
  }
});
