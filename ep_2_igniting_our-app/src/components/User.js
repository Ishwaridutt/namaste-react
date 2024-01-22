import { useEffect, useState } from "react";



// when you say calling a functional component
// it means you are calling that function or invoking that functional component


const User = (props) => {
    const {name} = props;
    const [count] = useState(0);

    // why API call inside useEffect only ?
    // we want to render the skeleton of the UI once then make API call and then fill the data in the UI
    // we don't want to wait for API to return the data then render component
    useEffect(() => {
        // API call
        // will be called once due to empty dependency aray after component has rendered
        console.log('user function useEffect called');

        timer = setInterval(()=>{
            console.log('user function set time interval');
        }, 1000)

        // will be called when you leave the page/component
        return () => {
            console.log('user function useEffect return');
            clearInterval(timer);
        }
    }, [])

    console.log('user render');

    return (
        <div className="user-card" >
            <h2>Count: {count}</h2>
            <h2>Name: {name}</h2>
            <h2>Location: Dehradun</h2>
        </div>
    )
}

export default User;