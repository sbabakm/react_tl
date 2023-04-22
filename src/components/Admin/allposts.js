import React from "react";
import getPosts from "../../services/fakePosts";
import Pagination from "../pagination";
import _ from "lodash";

class AllPosts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageSize: 5,
      currentPage: 1,
    };
  }
  getData = (AllPosts) => {
    const start =   this.state.currentPage * this.state.pageSize - this.state.pageSize;
    const End = this.state.currentPage * this.state.pageSize;
    const data = _.slice(AllPosts, start, End);
    return data;
  };
  ChangePageHandler = (page) => {
    this.setState({
      currentPage: page,
    });
  };
  render() {
    const posts = getPosts();
    const totalCount = posts.length;
    const data = this.getData(posts);
    return (
      <div className="p-3">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>عنوان پست</th>
              <th>تاریخ انتشار</th>
              <th>تعداد لایک</th>
            </tr>
          </thead>
          <tbody>
            {data.map((post) => (
              <tr>
                <td>{post.id}</td>
                <td>{post.postTitle}</td>
                <td>{post.postDate}</td>
                <td>{post.like}</td>
                <td>
                  <button className="btn btn-primary">ویرایش</button>
                </td>
                <td>
                  <button className="btn btn-danger">حذف</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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

export default AllPosts;
