import React from "react";

class CreatePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postTitle: "",
      postImageUrl: "",
      postContent: "",
      PostTags: [],
    };
  }
  ChangeHandler = (ev) => {
    let nam = ev.target.name;
    let val = ev.target.value;
    if (nam === "postTags") {
      this.setState({ PostTags : val.split(",") });
    } else {
      this.setState({ [nam]: val });
    }
  };
  render() {
    console.log(this.state);
    return (
      <div>
        {/*
        <div>
          <p>{this.state.postTitle}</p>
          <p>{this.state.postImageUrl}</p>
          <p>{this.state.postContent}</p>
          <p>{this.state.PostTags}</p>
        </div>
        */}
        <form className="p-4 w-50">
          <div className="form-group">
            <label>عنوان پست</label>
            <input
              type="text"
              className="form-control"
              name="postTitle"
              onChange={this.ChangeHandler}
            />
          </div>
          <div className="form-group">
            <label>لینک تصویر</label>
            <input
              type="text"
              className="form-control"
              name="postImageUrl"
              onChange={this.ChangeHandler}
            />
          </div>
          <div className="form-group">
            <label>محتوای پست</label>
            <textarea
              className="form-control"
              name="postContent"
              onChange={this.ChangeHandler}
            />
          </div>
          <div className="form-group">
            <label>برچسب های پست</label>
            <input
              type="text"
              className="form-control"
              name="postTags"
              onChange={this.ChangeHandler}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            ارسال
          </button>
        </form>
      </div>
    );
  }
}
export default CreatePost;
