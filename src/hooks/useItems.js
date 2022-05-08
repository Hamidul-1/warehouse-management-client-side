import { useEffect, useState } from "react";

const useItems = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://immense-ridge-40587.herokuapp.com/item')
            .then(res => res.json())
            .then(data => setItems(data))

    }, []);
    return [items]
}

export default useItems;