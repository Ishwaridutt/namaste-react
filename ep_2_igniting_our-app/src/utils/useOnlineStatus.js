import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState(true);

    // since we want to execute it only once
    useEffect(() => {
        window.addEventListener('offline', () => {
            setOnlineStatus(false)
        })

        window.addEventListener('online', () => {
            setOnlineStatus(true)
        })
    }, [])

    return onlineStatus;
}

export default useOnlineStatus;