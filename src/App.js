import React, { Component} from 'react';
import './App.css';
import Movie from './Movie';






class App extends Component {
  // Render: componentWillMount() -> render() -> componentDidMount()
  // Update: componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate -> render() ->

  state ={
  }
  //생명주기 필수!!!
  //setState로 상태를 변경하고 render 실행될떄마다 새로운 state로 변경되서 실행
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        movies: [
          {
            title: "Matrix",
            poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"
          },
          {
            title:"Full Metal Jacket",
            poster:"https://cdn1.i-scmp.com/sites/default/files/styles/1200x800/public/images/methode/2018/04/16/6b6cf178-4110-11e8-ab09-36e8e67fb996_1280x720_161442.jpg?itok=XS6jGPH2"
          },
          {
            title:"Oldboy",
            poster: "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Oldboykoreanposter.jpg/220px-Oldboykoreanposter.jpg"
          },
          {
            title:"Star Wars",
            poster:"https://lumiere-a.akamaihd.net/v1/images/star-wars-the-rise-of-skywalker-theatrical-poster-600_889ecbb6.jpeg?region=0%2C0%2C600%2C889"
          }
        ]
      })
    },2000)
  }

  // 변수에 저장  제목과 포스터가 보이게끔
  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />
    })
    return movies
  }

  render() {
    return (
      <div className = "App">
        {this.state.movies ? this._renderMovies() : 'Loading'} 
      </div>
    );
  } 
}

export default App; //  내보내기
