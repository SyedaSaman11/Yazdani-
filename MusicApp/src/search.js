import axios from "axios";
import React from "react";
import "./css/search.css";
export default class SongSearch extends React.Component {
  constructor() {
    super();
    this.state = {
      tracks: [],
      srchtext: "",
    };

    this.search = this.search.bind(this);
    this.textChange = this.textChange.bind(this);
  }

  textChange(text) {
    this.setState({ srchtext: text });
  }

  async search() {
    var options = {
      method: "GET",
      url: 'https://shazam.p.rapidapi.com/search',
      params: { query: this.state.srchtext },
      headers: {
        "x-rapidapi-key": "",
        "x-rapidapi-host": "shazam.p.rapidapi.com",
      },
    };
    const response = await axios.request(options);
    const songs = response.data;
    this.setState({ tracks: songs });
    //console.log("search in progress",songs)
  }

  render() {
    // console.log(this.state.tracks);
    return (
      <>
      <div class="container" >
      <div class="child">
        <input style={{width:"200px",height:"25px"}} placeholder="Search Song Here" type="text" onChange={(event) => this.textChange(event.target.value)} /> {/*{} for js*/}
        <button onClick={this.search}>Search</button>
        <div className="wrapper">
        {this.state.tracks.map((track) => (
          <div className="song">
            <div className="title"> {track.heading.title} </div>
            <div className="artist"> {track.heading.subtitle} </div>
            <div className="logo">
              <img src={track.images.default} />
            </div>
          </div>
        ))}
        </div>
        </div>
        </div>
      </>
    );
  }
}
