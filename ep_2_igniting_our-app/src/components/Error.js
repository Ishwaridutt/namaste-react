import { useRouteError } from "react-router-dom";  // hook

const Error = () => {
    // hook to read error
    const err = useRouteError()
    console.log('Error page: ', err);

    return (
        <div>
            <h1>OOps!</h1>
            <h1>Something went wrong</h1>
            <h3>{err.status} : {err.statusText} </h3>
        </div>
    )
}

export default Error;

