import React from "react";


// when you say loading a class based component that means you are creating instance of that class
// life cycle => constructor => render 
// life cycle with parent child =>
// About comp : Parent constructor called => About comp : Parent render called => Child constructor called
// => Child render called => Child componentDidMount called => About comp : Parent componentDidMount called
/**
 * Life cycle with 1 parent 2 children
 * 
 *  - About comp : Parent constructor called
 *  - About comp : Parent render called
 *    - first class Child constructor called
 *    - first class Child render called
 *    - second class Child constructor called
 *    - second class Child render called
 *      < DOM UPDATED in single batch >
 *    - first class Child componentDidMount called
 *    - second class Child componentDidMount called
 *  - About comp : Parent componentDidMount called
 * 
 *  but why ?
 *      - react life cycle diagram => https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
 *      - react is fast because it has 2 phase
 *          - render phase ( constructor and render )
 *          - commit phase ( react updates the DOM, componentDidMount )
 * 
 *      - react is optimizing, so commit phase will be batched together for children
 * 
 */

class UserClass extends React.Component {

    // Why do we call super? Can we not call it? If we have to call it, what happens if we don’t pass props?
    // super refers to the parent class constructor (React.Component)
    // you can’t use this in a constructor until after you’ve called the parent constructor
    // So even if you forget to pass props to super(), React would still set them right afterwards.
    // Inside React
    // class Component {
    //     constructor(props) {
    //       this.props = props;
    //       // ...
    //     }
    //   }
    
    //   // Inside your code
    //   class Button extends React.Component {
    //     constructor(props) {
    //       super(); // 😬 We forgot to pass props
    //       console.log(props);      // ✅ {}
    //       console.log(this.props); // 😬 undefined 
    //     }
    //     // ...
    //   }
    // When you pass props to super, the props get assigned to this
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            count1: 2,
            userInfo: {
                name: '',
                location: ''
            }
        }
        console.log(this.props.name + 'Child constructor called');

    }

    async componentDidMount(){
        console.log(this.props.name + 'Child componentDidMount called');

        const data = await fetch('https://api.github.com/users/akshaymarch7');
        const dataJson = await data.json();
        console.log('user class =>',dataJson);

        this.setState({
            userInfo: dataJson
        })

        // this will stay alive even if you change change component
        this.timer = setInterval(()=>{
            console.log('user class set time interval');
        }, 1000)
    }

    // useEffect is not equivalent to componentDidMount, do not compare. 
    // useEffect without any dependecy array called after every render cycle whereas componentDidMount is called first time and then componentDidUpdate is called after every time
    // useEffect with empty dependecy array called 
    // useEffect with value in dependecy array called after every render cycle but in class component we had to do
    // componentDidUpdate(prevProps, prevState) {
    //     if(this.state.count !== prevState.count){}
    // }



    // part of the update compnent cycle
    // setState update states => re calls render method, update DOM during commit phase, then calls componentDidUpdate
    // https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
    componentDidUpdate() {
        console.log('user class component did update');
    }

    // called when component is unmounted => https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
    // example: when you change the page/component
    componentWillUnmount() {
        console.log('user class component will unmount');
        // clear the setInterval here else it will keep calling
        // since we are only changing components not page, setInterval will not die until we clear it
        clearInterval(this.timer);
    }


    render() {
        console.log(this.props.name + 'Child render called');

        const { name, location } = this.state.userInfo;

        return (
            <div className="user-card" >
                <h2>Count: {this.state.count}</h2>
                <button onClick={ ()=> {
                    // never updae state variable derectly
                    // this.state.count = this.state.count + 1;
                    this.setState({
                        count: this.state.count + 1,
                        count1: this.state.count1 + 1,
                    })
                }} >Count increase</button>
                {/* <h2>Name: {this.props.name}</h2> */}
                <h2>Name: {name}</h2>
                <h2>Location: {location}</h2>
            </div>
        )
    }

}

export default UserClass;

