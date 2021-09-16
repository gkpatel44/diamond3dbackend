import React, { useState, useEffect } from 'react';
import {
    CBadge,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CDataTable,
    CRow,
    CButton,
    CImg,
    CPopover,
    CButtonGroup,
    CModal,
    CModalHeader,
    CModalTitle,
    CModalBody,
    CModalFooter,
    CForm,
    CFormCheck,
    CFormInput,
    CFormLabel,
    CLabel,
    CSelect

} from '@coreui/react'
import AddProductForm from '../base/forms/AddProductForm';
import EditProductForm from '../base/forms/EditProductForm';
import { Deleteproduct, Editproduct, getdiamonddata } from '../users/diamonddata';



const getBadge = status => {
    switch (status) {
        case 'Active': return 'success'
        case 'Sold': return 'secondary'
        case 'Pending': return 'warning'
        // case 'Banned': return 'danger'
        default: return 'primary'
    }
}

const Diamond = () => {
    const fields = ['orderid', 'name', 'size', 'shape', 'img', 'status', 'modify'];
    const [modal, setModal] = useState(false);
    const [row, setRow] = useState(false);
    const [deletee, setDeletee] = useState(false)
    const [data, setData] = useState([]);
    const [editorderid, setEditorderid] = useState(null);
    const [removepid, setRemovepid] = useState();

    useEffect(() => {
        fetchdata();
    }, [])

    const fetchdata = async () => {
        var dat = await getdiamonddata();
        setData(dat);

    }

    const toggle = () => {
        setModal(!modal);
    }

    const rowedit = (item, index, columnname, event) => {
        setRow(!row);

        if (item) {
            setEditorderid(parseInt(item.target.name));
            // console.log(editorderid);
        }
    }
    const deleterow = (item) => {
        // console.log(item.target.name);
        if (item) {
            let id = parseInt(item.target.name)
            setRemovepid(id)
            setDeletee(!deletee);
        } else {
            setDeletee(!deletee);
        }
    }

    const Deleteproducts = async () => {
        // console.log(removepid);
        setDeletee(false);
        let body = { orderid: removepid }
        await Deleteproduct(body);
        fetchdata();
    }

    return (

        <CRow>
            <CCol>
                <CCard>
                    <CCardHeader>
                        <h1> All PRODUCT LIST</h1>
                        {/* <CButton color="primary" className="px-4" onClick={addproduct} >ADD</CButton> */}
                        <CButton
                            onClick={toggle}
                            className="mr-1"
                            color="primary"
                        >addproduct</CButton>
                        <CModal
                            show={modal}
                            onClose={toggle}
                        >
                            <CModalHeader closeButton>ADD PRODUCT</CModalHeader>
                            <CModalBody>
                                <AddProductForm
                                    value={modal}
                                    onchange={toggle}
                                    reloaddata={fetchdata}
                                />
                            </CModalBody>
                            {/* <CModalFooter>
                                <CButton color="primary">SAVE</CButton>{' '}
                                <CButton
                                    color="secondary"
                                    onClick={toggle}
                                >Cancel</CButton>
                            </CModalFooter> */}
                        </CModal>
                    </CCardHeader>

                    <CCardBody>
                        <CModal
                            show={row}
                            onClose={rowedit}
                        >
                            <CModalHeader closeButton>Edit PRODUCT</CModalHeader>
                            <CModalBody>
                                <EditProductForm
                                    value={row}
                                    onchange={rowedit}
                                    orderId={editorderid}
                                    reloaddata={fetchdata}
                                />
                            </CModalBody>
                            {/* <CModalFooter>
                                <CButton color="primary">SAVE</CButton>{' '}
                                <CButton
                                    color="secondary"
                                    onClick={rowedit}
                                >Cancel</CButton>
                            </CModalFooter> */}
                        </CModal>

                        <CModal
                            show={deletee}
                            onClose={deleterow}>
                            <CModalHeader closeButton>DELETE PRODUCT</CModalHeader>
                            <CModalBody>
                                Are You Sure To Delete Product
                            </CModalBody>
                            <CModalFooter>
                                <CButton color="danger" onClick={Deleteproducts}>DELETE</CButton>{' '}
                                <CButton
                                    color="secondary"
                                    onClick={deleterow}
                                >Cancel</CButton>
                            </CModalFooter>



                        </CModal>

                        <CDataTable
                            items={data}
                            fields={fields}
                            hover
                            // row-clicked
                            // onRowClick={rowedit}
                            // clickableRows
                            striped
                            bordered
                            size="sm"
                            itemsPerPage={10}
                            pagination
                            scopedSlots={{

                                'status':
                                    (item) => (
                                        <td>
                                            <CBadge color={getBadge(item.status)}>
                                                {item.status}
                                            </CBadge>
                                        </td>
                                    ),
                                'img': (item) => (
                                    <td>
                                        <CImg
                                            src={item.img}
                                            shape={"rounded"}
                                            width={45}
                                            height={45}
                                        />
                                    </td>),
                                'modify': (item) => (

                                    <td>
                                        {/* {console.log(item)} */}
                                        <CButtonGroup>
                                            <CButton color="primary" className="px-4" name={item.orderid} onClick={rowedit}>Edit</CButton>
                                            <CButton color="danger" className="px-4" name={item.orderid} onClick={deleterow}>Delete</CButton>
                                        </CButtonGroup>
                                    </td>
                                )
                            }}
                        />
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}
export default Diamond;