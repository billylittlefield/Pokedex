var ToyDetail = React.createClass({
  getStateFromStore: function() {
    var pokemon = PokemonStore.find(parseInt(this.props.params.pokemonId));
    var toy;
    pokemon && pokemon.toys && pokemon.toys.forEach(function(t){
      if (t.id === parseInt(this.props.params.toyId)) { toy = t; }
    }.bind(this));
    return { toy: toy };
  },
  _onChange: function() {
    this.setState(this.getStateFromStore());
  },
  getInitialState: function() {
    return this.getStateFromStore();
  },
  componentDidMount: function() {
    PokemonStore.addPokemonDetailChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    PokemonStore.removePokemonDetailChangeListener(this._onChange);
  },
  componentWillReceiveProps: function (props) {
    this._onChange();
  },
  render: function () {
    if (this.state.toy === undefined) { return <div/>; }
    return (
      <div className="detail">
        <img src={this.state.toy.image_url} />
        <br/>
        <br/>
        <h3>Name: </h3>{this.state.toy.name}
        <h3>Happiness: </h3>{this.state.toy.happiness}
        <h3>Price: </h3>{this.state.toy.price}
      </div>
    );
  }
});
