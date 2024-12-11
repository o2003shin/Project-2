import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ReactorCard from "./ReactorCard";

export default function Reactors() {
    const params = useParams();
    const apiKey = "28160e1692504a13";
    const url = `https://nuclear.dacoder.io/reactors?apiKey=${apiKey}`;
    const [ reactors, setReactors ] = useState([]);

    async function getReactors() {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("ERROR");
            }
            const data = await response.json();
            setReactors(data);
            console.log(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
    
    useEffect(() => {
        getReactors();
    }, []);
    return (
        <section>
            
        </section>
    )
}