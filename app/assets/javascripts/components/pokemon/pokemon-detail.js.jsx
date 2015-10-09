var PokemonDetail = React.createClass({
  getStateFromStore: function() {
    return { pokemon: PokemonStore.find(parseInt(this.props.params.pokemonId)) };
  },
  getInitialState: function() {
    return this.getStateFromStore();
  },
  _onChange: function () {
    this.setState(this.getStateFromStore());
  },
  componentDidMount: function () {
    PokemonStore.addPokemonDetailChangeListener(this._onChange);
    ApiUtil.fetchSinglePokemon(this.props);
  },
  componentWillUnmount: function () {
    PokemonStore.removePokemonDetailChangeListener(this._onChange);
  },
  componentWillReceiveProps: function (props) {
    ApiUtil.fetchSinglePokemon(props);
  },
  render: function () {
    if (this.state.pokemon) {
      return (
        <div>
          <div className="detail">
            <h3>{this.state.pokemon.name}</h3>
            <img src={this.state.pokemon.image_url}/>
            <h4>Attack: </h4>{this.state.pokemon.attack}
            <br/>
            <h4>Defense: </h4>{this.state.pokemon.defense}
            <br/>
            <h4>Type: </h4>{this.state.pokemon.poke_type}
            <br/>
            <h4>Moves: </h4>{this.state.pokemon.moves.map(function(move){
              return <li>{move}</li>
            })}
          </div>
          <ToysIndex toys={this.state.pokemon.toys}/>
        </div>
      );
    } else {
      return <div/>;
    }
  }
});
