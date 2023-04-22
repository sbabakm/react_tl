import React from "react";
class Like extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likecount: this.props.post.like,
      dislikecount: this.props.post.dislike,
    };
  }
  LikeHandler = () => {
    let temp = this.state.likecount + 1;
    //console.log(this.state.likecount);
    this.setState({
      likecount: temp,
    });
  };
  DislikeHandler = () => {
    let temp = this.state.dislikecount - 1;
    if (this.state.dislikecount !== 0) {
      this.setState({
        dislikecount: temp,
      });
    }
  };
  render() {
    return (
      <div className="float-left">
        {/*
        <div
          className="fa fa-heart fa-lg"
          style={{ color: "red", cursor: "pointer" }}
          onClick={this.LikeHandler}
        ></div>
        <span className="badge-primary badge-pill m-1">
          {this.state.likecount}
        </span>
       */}

        <button
          className="btn btn-danger mx-1"
          onClick={this.DislikeHandler}
        >
          <span className="px-1">Dislike</span>
          <span>{this.state.dislikecount}</span>
          <span className="fa fa-thumbs-down"></span>
        </button>

        <button
          className="btn btn-success"
          onClick={this.LikeHandler}
        >
          <span className="px-1">Like</span>
          <span>{this.state.likecount}</span>
          <span className="fa fa-thumbs-up"></span>
        </button>
      </div>
    );
  }
}
export default Like;
