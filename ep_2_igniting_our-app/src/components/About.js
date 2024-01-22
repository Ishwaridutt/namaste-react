
import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";



class About extends Component {

    constructor(props) {
        super(props);

        console.log('About comp : Parent constructor called');
    }

    // called after current component has mounted
    // componentDidMount is used to make an API call. but why ?
    // we want to render the skeleton of the UI once then make API call and then fill the data in the UI
    // we don't want to wait for API to return the data then render component
    componentDidMount() {
        console.log('About comp : Parent componentDidMount called');
    }

    render() {
        console.log('About comp : Parent render called');
        return (
            <div>
                <h1>This is about page</h1>
                <User name={'Akshay function'} />

                <UserClass name={'first class '} />
                <UserClass name={'second class '} />
            </div>
        )
    }

}



// const About = () => {

//     return (
//         <div>
//             <h1>This is about page</h1>
//             <User name = {'Akshay function'} />

//             <UserClass name = {'Akshay class'} />
//         </div>
//     )
// }

export default About;







