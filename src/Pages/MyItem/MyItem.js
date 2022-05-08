import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './MyItem.css';

const MyItem = () => {
    const [items, setItems] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const handleUpdate = productId => {
        navigate(`/item/${productId}`)
    }

    useEffect(() => {

        const getNewInventory = async () => {
            const email = user.email;
            const url = `https://immense-ridge-40587.herokuapp.com/myitem?email=${email}`;
            const { data } = await axios.get(url, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            setItems(data)
        }
        getNewInventory()

    }, [user]);

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure yo want to delete?')
        if (proceed) {
            console.log('delete item', id)
            const url = `https://immense-ridge-40587.herokuapp.com/item/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deleteCount > 0) {
                        const remaining = items.filter(car => car._id !== id);
                        setItems(remaining)
                    }
                })
        }
    }


    return (

        < div className='container my-5' >

            <h2 className='text-center text-secondary mb-3 text-uppercase text-success'>Manage Inventories</h2>
            <hr style={{ width: '35%', margin: '0  auto' }} className='mb-4' />

            <table className=''>

                <thead>

                    <tr className='text-white bg-dark'>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Supplier</th>
                        <th scope="col">Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        items.map(item =>
                            <tr>
                                <td data-label="Name">{item.name}</td>
                                <td data-label="Price(per kg)">{item.price}</td>
                                <td data-label="Supplier">{item.supplier}</td>
                                <td data-label="Quantity">{item.quantity}</td>
                                <td>
                                    <button onClick={() => handleUpdate(item._id)} className=' text-dark btn fs-6 border-3 border-success rounded-pill '><FontAwesomeIcon className='fs-6 text-success me-0' style={{ cursor: "pointer" }} icon={faPenToSquare}></FontAwesomeIcon><span >Update</span></button>
                                    <button onClick={() => handleDelete(item._id)} className=' text-dark btn fs-6 border-3 border-danger rounded-pill'><FontAwesomeIcon className=' fs-6 text-danger ' style={{ cursor: "pointer" }} icon={faTrash}></FontAwesomeIcon><span>Delete</span></button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>

            </table>
        </div >

    );
};

export default MyItem;