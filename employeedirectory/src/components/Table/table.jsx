import React from "react";


function Table(props) {
    return (
        <table className="table table-light">
            <thead>
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Name<span onClick={props.sortedUsers}><i className={props.className} id="name"></i></span></th>
                    <th scope="col">Phone<span onClick={props.sortedUsers}><i className={props.className} id="phone"></i></span></th>
                    <th scope="col">Email<span onClick={props.sortedUsers}><i className={props.className} id="email"></i></span></th>
                    <th scope="col">Country<span onClick={props.sortedUsers}><i className={props.className} id="country"></i></span></th>
                </tr>
            </thead>
            <tbody>
                {props.users.map(user => (
                    <tr key={user.phone}>
                        <td><img src={user.picture.large} alt="user" /></td>
                        <td>{user.name.last}, {user.name.first}</td>
                        <td>{user.phone}</td>
                        <td>{user.email}</td>
                        <td>{user.location.country}</td>
                    </tr>
                ))}
            </tbody>
        </table >
    )
};

export default Table;