import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';

const ItemDetail = () => {
    const { itemId } = useParams();
    const navigate = useNavigate()
    const [itemDetails, setProductDetail] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/item/${itemId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setProductDetail(data))

    }, [])

    const handleDelivered = () => {
        fetch(`http://localhost:5000/item/decrease/${itemId}`, {
            method: 'PUT',

        })
            .then(res => res.json())
            .then(data => {
                setProductDetail({ ...itemDetails, quantity: itemDetails.quantity - 1 })
            })
    }

    const addQuantity = event => {
        event.preventDefault();
        const input = event.target.reStore.value;
        fetch(`http://localhost:5000/item/increase/${itemId}`, {
            method: 'PUT',
            headers: {

                'content-type': 'Application/json'
            },
            body: JSON.stringify({ quantity: input }),
        })
            .then(res => res.json())
            .then(data => {
                setProductDetail({ ...itemDetails, quantity: parseInt(itemDetails.quantity) + parseInt(input) })
            })
    }


    const handleManageInventory = () => {
        navigate(`/manage`)
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)

    return (
        <div className='container mx-auto w-50 my-5'>
            <div className="card mb-3" style={{ maxWidth: '700px' }}>
                <div className="row no-gutters">
                    <div className="col-md-6 col-lg-5">
                        <img src={itemDetails.img} height='100%' className="card-img" alt="..." />
                    </div>
                    <div className="col-md-6 col-lg-7">
                        <div className="card-body">
                            <h3 className="card-title text-success">{itemDetails.name}</h3>
                            <p className="card-text"><small>{itemDetails.description}</small></p>
                            <h6 className="card-text fs-6">Price: <span className='text-danger'>${itemDetails.price}</span></h6>
                            <p className="card-text">Quantity: {itemDetails.quantity}</p>
                            <p className="card-text">Supplier: {itemDetails.supplier}</p>
                            <button onClick={handleDelivered} type="button" className="btn btn-success my-3">Delivered</button>
                            <button onClick={handleShow} type="button" className="btn btn-danger ms-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Re-Stock
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Re-Store Inventory Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>{itemDetails.name}</Modal.Body>
                <Modal.Footer>
                    <form className='mx-auto' onSubmit={addQuantity}>
                        <div className="input-group  mb-3">
                            <input type="text" name='reStore' className="form-control" placeholder="Enter Quantity" aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <button className="btn btn-outline-success" type="submit" id="button-addon2">Add</button>
                        </div>
                    </form>

                </Modal.Footer>
            </Modal>
            <button type="button" onClick={() => handleManageInventory()} className="btn btn-outline-success p-2 d-block mx-auto py-3 fw-bold shadow px-5 mt-3 mb-5 rounded-pill">Manage Inventories</button>
        </div>
    );
};

export default ItemDetail;


