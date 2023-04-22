import React from 'react'
const Footer = () => {
    return(
        <footer className="float-left fixed-bottom rtl navbar navbar-dark bg-dark col-md-10  px-4 shadow" >
            <div className="copyright">
                <span className="fa fa-copyright m-1 " />
                    کلیه حقوق این سایت محفوظ می باشد
                
            </div>
            <div className="socialmedia">
                <a className="fa fa-instagram m-1 text-white" href="" />
                <a className="fa fa-facebook-official m-1 text-white" href="" />
            </div>
        </footer>
    )
}
export default Footer