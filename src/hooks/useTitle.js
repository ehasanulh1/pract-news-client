import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Pract News`;
    }, [title])
};

export default useTitle;