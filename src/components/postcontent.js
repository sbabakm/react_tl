import React from "react";
import Like from "./like";
import queryString from "query-string";
import getPosts from "../services/fakePosts";

class PostContent extends React.Component {
  render() {
    let url = this.props.location.search;
    let params = queryString.parse(url);
    // console.log(params);
    // console.log(params.id);
    // console.log(typeof(params.id));
    let id = parseInt(params.id);
    // console.log(typeof(id));
    let AllPosts = getPosts();
    let data = AllPosts.filter((post) => post.id === id);
    console.log(data[0]);
    return (
      <div className="container-fluid rtl">
        <div className="card shadow-lg bg-light m-2">
          <article className="p-3">
            <div className="card-header">
              <h3 className="card-title">
                <a href="#">{data[0].postTitle}</a>
              </h3>
              <span className="card-subtitle">
                <span className="fa fa-calendar m-2" />
                {data[0].postDate}
              </span>
              <img className="card-img" src={data[0].postImageUrl} alt="" />
            </div>
            <div className="card-body">
              <span className="card-text">{data[0].postContent}</span>
            </div>
            <div className="card-footer">
              <ul className="list-inline float-right">
                <li className="list-inline-item">
                  <span className="fa fa-link m-1" />
                  برچسب ها:
                </li>
                <li className="list-inline-item">
                  <a href="#">{data[0].postTags}</a>
                </li>
              </ul>
              <Like post={data[0]} />
            </div>
          </article>
        </div>
      </div>
    );
  }
}

export default PostContent;
