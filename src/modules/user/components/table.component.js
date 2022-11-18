import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';

import { addUser } from '../../core/user-reducer';
import Loader from '../../view/loader';

export default function UserTable() {
    const dispatch = useDispatch();
    const userList = useSelector((state) => state.users.value);
    
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');

    return (
        <>
            <Loader>
                <div className='form-inputs mt-4 mb-2'>
                    <input 
                        onChange ={(e) => {setName(e.target.value)}}
                        type='text' placeholder="Name..."
                    />
                    <input  
                        onChange={(e) => {setUsername(e.target.value)}} 
                        type='text' placeholder="UserName"
                    />
                    <button
                        onClick={()=> {
                            dispatch(
                                addUser({
                                    id: userList[userList.length - 1].id + 1 , name, username
                                })
                            )
                        }}
                    >Add User</button>
                </div>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>name</th>
                        <th>username</th>
                        <th>Priority</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userList.map((user, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>edit/delete</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </Loader>
        </>
    );
};