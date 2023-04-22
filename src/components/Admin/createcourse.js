import React from 'react';

class CreateCourse extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            courseTitle : '',
            courseDate : '',
            coursePrice : '',
            courseImgLink : ''
        }
    }
    ChangeHandler = (ev) => {
        let nam = ev.target.name;
        let val = ev.target.value;
        this.setState({[nam] : val});
        console.log(this.state);
    }
    render(){
        return(
            <form className="w-50 p-2">
                <div className="form-group">
                    <label>عنوان دوره</label>
                    <input type="text" className="form-control" name="courseTitle" onChange={this.ChangeHandler} />
                </div>
                <div className="form-group">
                    <label>زمان دوره</label>
                    <input type="text" className="form-control" name="courseDate" onChange={this.ChangeHandler} />
                </div>
                <div className="form-group">
                    <label>قیمت دوره</label>
                    <input type="text" className="form-control" name="coursePrice" onChange={this.ChangeHandler} />
                </div>
                <div className="form-group">
                    <label>لینک عکس</label>
                    <input type="text" className="form-control" name="courseImgLink" onChange={this.ChangeHandler} />
                </div>
                <button type="submit" className="btn btn-success">ساخت دوره جدید</button>
            </form>
        );
    }
}

export default CreateCourse;