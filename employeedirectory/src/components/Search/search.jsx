import React from "react";
import "./search.css";





function Search (props) {

    return (
        <nav className="navbar navbar-collapse float-left">
            <form className="form-inline">
                <input
                    onChange={props.filteredUsers}
                    value={props.search}
                    className="form-control mr-sm-2"
                    type="text"
                    name="search"
                    placeholder="Search for Employees"
                    aria-label="Search">

                </input>
            </form>
        </nav>
    )

}
export default Search;
