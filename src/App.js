import React, { Component} from 'react';
import './App.css';
import Movie from './Movie';


class App extends Component {
  // Render: componentWillMount() -> render() -> componentDidMount()
  // Update: componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate -> render() ->

  state ={}
  
  //생명주기 필수!!!
  //setState로 상태를 변경하고 render 실행될떄마다 새로운 state로 변경되서 실행
  

  componentDidMount() {
    this._getMoveies();
  }

  // 변수에 저장  제목과 포스터가 보이게끔
  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      return <Movie title={movie.title_english}
      poster={movie.medium_cover_image}
      key={movie.id}
      genres={movie.genres}
      synopsis = {movie.synopsis}
      />
    })
    return movies
  }


  _getMoveies = async() => {
    const movies = await this._callApi()
    this.setState({
      movies
    })
  }
  
  //ajax를 json으로 변환하는 방법!
  _callApi = () => {
    return fetch('https://yts.lt/api/v2/list_movies.json?sort_by=rating')
    .then(potato => potato.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }

  // 언더바를 쓰는 이유는 리액트 자체기능과 헷갈리지않게하기위함.
  render() {
    return (
      <div className = "App">
        {this.state.movies ? this._renderMovies() : 'Loading'} 
      </div>
    );
  } 
}

export default App; //  내보내기
