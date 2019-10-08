import {useState} from "react";

export function useLocalStorage(key, initialValue){

const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);

    return item ? JSON.parse(item) : initialValue;
});
}


