$(function () {
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;

  var Index = React.createClass({
    render: function () {
      return (
        <div>
          <div className="pokemon-index">
            <PokemonIndex />
          </div>
          {this.props.children}
        </div>
      );
    }
  });

  React.render(
    <Router>
      <Route path='/' component={Index}>
        <Route path="pokemon/:pokemonId" component={PokemonDetail}/>
        <Route
          path="pokemon/:pokemonId/toys/:toyId"
          components={{pokemon: PokemonDetail, toy: ToyDetail}}/>
      </Route>
    </Router>,
    document.getElementById('pokedex')
  );
});
