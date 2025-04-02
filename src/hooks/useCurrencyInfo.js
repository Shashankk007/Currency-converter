import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        // Define the async function inside useEffect
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`
                );
                const result = await response.json();
                setData(result[currency]); 
                console.log(result[currency]);
            } catch (error) {
                console.error("Error fetching currency data:", error);
                setData({}); // Reset to empty object on error
            }
        };

        fetchData(); // Call the async function
    }, [currency]); // Dependency array with 'currency'

    return data;
}

export default useCurrencyInfo;