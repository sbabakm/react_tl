import React from "react";
import _ from "lodash";
import getPosts from "../services/fakePosts";
import Like from "./like";
import Pagination from "./pagination";
class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      pageSize: 5,
    };
  }
  getData = (AllPosts) => {
    const start =
      this.state.currentPage * this.state.pageSize - this.state.pageSize;
    const End = this.state.currentPage * this.state.pageSize;
    const cuttedArray = _.slice(AllPosts, start, End);
    //const data = AllPosts.slice(start, End);
    //const data = _(AllPosts).slice(start).take(this.state.pageSize).value();
    //console.log(data);
    const data = cuttedArray.map((post) => ({
      id: post.id,
      postTitle: post.postTitle,
      postDate: post.postDate,
      postImageUrl: post.postImageUrl,
      postContent: post.postContent.slice(0, 100) + "...",
      postTags: post.postTags,
      like: post.like,
      dislike: post.dislike,
    }));
    return data;
  };
  ChangePageHandler = (page,MaxPageNumber) => {
    if (page === "Pervious" && this.state.currentPage !== 1) {
      this.setState({
        currentPage: this.state.currentPage - 1
      });
    }
    if (page === "Next" && this.state.currentPage !== MaxPageNumber) {
      this.setState({
        currentPage: this.state.currentPage + 1
      });
    }
    if (page !== "Pervious" && page !== "Next") {
      this.setState({
        currentPage: page
      });
    }
  };
  render() {
    const AllPosts = getPosts();
    const totalCount = AllPosts.length;
    const data = this.getData(AllPosts);
    return (
      <div>
        {data.map((post) => (
          <div className="container-fluid">
            <div className="card shadow-lg bg-light m-2">
              <article className="p-3">
                <div className="card-header">
                  <h3 className="card-title">
                    <a href="#">{post.postTitle}</a>
                  </h3>
                  <span className="card-subtitle">
                    <span className="fa fa-calendar m-2" />
                    {post.postDate}
                  </span>
                  <img className="card-img" src={post.postImageUrl} alt="" />
                </div>
                <div className="card-body">
                  <span className="card-text">{post.postContent}</span>
                  <a
                    href={"/postcontent" + "?id=" + post.id}
                    className="px-1"
                    style={{ fontSize: "13px" }}
                  >
                    (ادامه مطلب)
                  </a>
                </div>
                <div className="card-footer">
                  <ul className="list-inline float-right">
                    <li className="list-inline-item">
                      <span className="fa fa-link m-1" />
                      برچسب ها:
                    </li>
                    <li className="list-inline-item">
                      <a href="#">{post.postTags}</a>
                    </li>
                  </ul>
                  <Like post={post} />
                </div>
              </article>
            </div>
          </div>
        ))}
        <Pagination
          currentPage={this.state.currentPage}
          pageSize={this.state.pageSize}
          ChangePageHandler={this.ChangePageHandler}
          totalCount={totalCount}
        />
      </div>
    );
  }
}
export default Posts;
