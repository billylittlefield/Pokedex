var PokemonIndexItem = React.createClass({
  mixins: [ReactRouter.History],
  showDetail: function () {
    var url = "pokemon/" + this.props.pokemon.id;
    this.history.pushState(null, url);
  },
  render: function () {
    return (
      <li onClick={this.showDetail} className="poke-list-item">
        Name: {this.props.pokemon.name}
        <br/>
        Type: {this.props.pokemon.poke_type}
      </li>
    );
  }
});
