import React, { useState, useEffect } from "react";
import Item from "./Item";
import styled from 'styled-components';

const ShopList = styled.ul`
  list-style: none;
  margin: 0 0 0 0;
  padding: 0 0 0 0;
`
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

    return <ShopList>
        {items.map(item => {
            return <li key={item.id}>
                <Item info={item} />
            </li>
        })}
    </ShopList>;
}
