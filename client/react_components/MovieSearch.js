var React = require('react');
var axios = require('axios');

var MovieSearch = React.createClass({
  getInitialState: function(){
    return {
      title: "",
      year:"",
      imdb_rating:"",
      actors:"",
      plot:""
    }
  },
  handleInputChange: function(event){
    this.setState({title:event.target.value})
  },
  handleSubmit: function(event){
    var that = this
    event.preventDefault()
    var url = this.state.title.split(' ').join('+');
    url = "http://www.omdbapi.com/?t=" + url
    axios.get(url)
    .then(function (response) {
      data = response.data
      console.log(data);
      that.setState({title:data.Title, year:data.Year, actors:data.Actors, plot:data.Plot, imdb_rating:data.imdbRating})
  })
  },
  render: function(){
    return (
      <div>
        <h1>Welcome to Movie Search!</h1>
        <h3>Search by title</h3>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.title} onChange={this.handleInputChange}/>
          <input type="submit" />
        </form>
        <p>Title: {this.state.title}</p>
        <p>Year: {this.state.year}</p>
        <p>IMDB Rating: {this.state.imdb_rating}</p>
        <p>Actors: {this.state.actors}</p>
        <p>Plot: {this.state.plot}</p>
      </div>
    )
  }
})
module.exports = MovieSearch
