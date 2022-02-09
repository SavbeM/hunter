import React, {useEffect, useState} from "react";
import {Nav} from "react-bootstrap";
import axios from "axios";

export const Search = props => {
    const [searchType, setSearchType] = useState("domain")
    console.log(searchType)
    return (
        <div>
            <Tabs setSearchType={setSearchType}/>
            <HuntBar searchType={searchType}/>
        </div>
    )
}



const Tabs = props => {
    return (
        <Nav fill variant="tabs">
            <Nav.Item>
                <Nav.Link onClick={() => props.setSearchType("domain")}>Domain Search</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={() => props.setSearchType("email")}>Email Finder</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={() => props.setSearchType("author")}>Author Finder</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={() => props.setSearchType("verify")}>Email Verifier</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

const HuntBar = props => {
   const [searchedData, setSearchType] = useState()
    useEffect(() => {
        axios.get("https://api.hunter.io/v2/domain-search?domain=intercom.io&api_key=••••••••••••••••••••••••••••••••1130")
            .then(data => {
                searchedData(data)
            })
   })
    switch(props.searchType){
                case "domain":

            }
}
