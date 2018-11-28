import React from 'react';

class Manage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            image: null,
            url: ''
        };

        this.handleChange = this.handleChange.bind(this);
        }

    // handleChange = e => {
    //     if(e.target.files[0]){
    //         const image = e.target.files[0];
    //         this.setState(() => ())
    //     }
    // }

        render(){
            return(
                <div className = "row mx-auto">
                    <div className = "col-12 text-center">
                    <h1 className = "display-1">Hello world</h1>
                    <input type = "file" onChange={this.handleChange} />
                    </div>
                </div>
            )     
    }
}

export default Manage;