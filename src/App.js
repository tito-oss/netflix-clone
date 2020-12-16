// Libs
import React, { Component } from "react";
import './App.css';
import './index.css';
import axios from 'axios'


class NetFlix extends Component {

  state = {
    movies: [],
    shows: [],
    
  }
  

  async componentDidMount(){

     const responseMovies = await axios.get(`${process.env.REACT_APP_API}/movies`);
     console.log(responseMovies.data);

     const responseShows = await axios.get(`${process.env.REACT_APP_API}/shows`);
     console.log(responseShows.data);

     this.setState({
       movies: responseMovies.data
     });

     this.setState({
      shows: responseShows.data
    });

    const movies = responseMovies.data.map((item) => {
      return  {

        ...item,
        poster_path: `https://image.tmdb.org/t/p/w500${item.poster_path}`
      };
    });
      this.setState({
        movies: movies
      });
      const shows = responseShows.data.map((item) => {
        return  {
  
          ...item,
          poster_path: `https://image.tmdb.org/t/p/w500${item.poster_path}`
        };
      });
      this.setState({
        shows: shows
      });
    }


  render() {
    return ( 
     
      
        
      <div className= "box-geral">
                    
               
           
        <header  class="uma-div">


        
          <div class="center">
            <div class="header-left">
            <a href=""><img src="https://img.icons8.com/ios/452/netflix.png" /></a>
            <div class="menu-header">
              <ul>
                <li><a href="">inicio</a></li>
                <li><a href="">filmes</a></li>
                <li><a href="">séries</a></li>
                <li><a href="">favoritos</a></li>
              </ul>
              </div>
            </div>
            
            <div class="header-right"> 
            <div>  
            <a href=""><img class="fot" src="https://cdn.iconscout.com/icon/free/png-256/google-search-555271.png" /></a>
            </div>
            </div>
            
            
            <div class="clear"></div>
          </div>  
        </header>

        <div class="titulo">Filmes</div>   
        
          <div className= "conteiner">
             {this.state.movies.map((item,index) => (
            <div  className="box_content"  key= {index}>

              <p  className="netflixTitles">{item.title}</p>
              <div class= "box-descricao">
              <p className= "let">{item.overview}</p>
              <p className="releaseDate_now">{item.release_date}</p>
              
              
              </div>
              <div className="box-imagem">
              <img className="netflixImages" src={item.poster_path} />
              </div>
             </div>
             
           ))}
          </div>

          <div class="titulo">Séries</div>  

            <div className= "conteiner">
              {this.state.shows.map((item,index) => (
             <div className="box_content" key={index}>
              
               <p className="netflixTitles">{item.original_name}</p>
                <div class= "box-descricao">
                <p className= "let">{item.overview}</p>
               <p className="releaseDate_now">{item.first_air_date}</p>
              
               </div>
               <div className="box-imagem">
               <img className="netflixImages" src={item.poster_path} />
               </div>
             </div>
           ))}
          
        </div>
        
        </div>
         
      );
    }
  }


    

export default NetFlix;
