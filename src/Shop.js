import React, { useState, useEffect } from "react";
import Item from "./Item";

export default function Shop() {

    const [items, setItems] = useState()

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch("https://covid-shop-mcs.herokuapp.com")
                const data = await response.json()
                if (data) {
                    setItems(data)
                }
            } catch (error) {
                console.log(error)
            } finally {

            }
        }
        )()
    }, [])

    if (!items) {
        return null
    }

    return <ul>
        {items.map(item => {
            return <li key={item.id}>
                <Item info={item} />
            </li>
        })}
    </ul>;
}
