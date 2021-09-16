import React, { useEffect, useState } from 'react';
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'
import {
    CButton, CCard, CCardBody, CCardFooter, CCardHeader, CCol, CCollapse, CDropdownItem, CDropdownMenu,
    CDropdownToggle, CFade, CForm, CFormGroup, CFormText, CValidFeedback, CInvalidFeedback,
    CTextarea, CInput, CInputFile, CInputCheckbox, CInputRadio, CInputGroup, CInputGroupAppend,
    CInputGroupPrepend, CDropdown, CInputGroupText, CLabel, CSelect, CRow, CSwitch, CModal, CModalHeader, CModalTitle, CModalBody, CModalFooter
} from '@coreui/react'
import { addproduct, Editproduct, getsingleuserdata } from 'src/views/users/diamonddata';


const EditProductForm = (props) => {
    const orderId = props.orderId

    const [data, setData] = useState([]);
    const [message, setMessage] = useState(false);
    const [msg,setmsg] = useState("user updated successfully")

    useEffect(() => {
        if (orderId)
            fetchdataa();
    }, [orderId])

    const fetchdataa = async () => {
        document.getElementById("editform").reset();
        console.log(orderId);
        setMessage(false)
        let uid = { orderid: orderId }
        var dataa = await getsingleuserdata(uid);
        if (dataa) {
            setData(dataa.users[0]);
            // setMessage(false)
        }
    }

    const messagedisplay = () => {
        setMessage(!message);
    }

    const formdata1 = new FormData();

    const changeinput = (e) => {

        formdata1.set("orderid", orderId)
        let target = e.target;
        let name = target.name;
        let value = target.value;

        if (name === 'img') {
            formdata1.set(name, target.files[0])
        } else {
            formdata1.set(name, value)
        }
    }

    const handleSubmitEdituser = async (e) => {

        var res = await Editproduct(formdata1)
        if (res.res_status === "SUCCESS") {
            setMessage(!message);       
        }else {
            setmsg("user not updated");
            setMessage(!message);
            // alert("user not updated");
        }

    }

    const confirmdialog = () => {
        if(msg == "user not updated"){
            setMessage(!message);
        }else{        
            setmsg("user updated successfully");              
            props.onchange(!(props.value));
            props.reloaddata();
            setMessage(!message);
        }
    }



    return (
        <CCard>
            <CCardHeader>
                PRODUCT
                <small> EDIT</small>
            </CCardHeader>
            <CCardBody>
                <CForm id="editform" onSubmit={handleSubmitEdituser} encType="multipart/form-data" className="form-horizontal">
                    <CFormGroup row>
                        <CCol md="3">
                            <CLabel>Orderid:</CLabel>
                        </CCol>
                        <CCol xs="12" md="9">
                            <CInput id="text-input" name="orderid" defaultValue={data.orderid} disabled/>
                        </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                        <CCol md="3">
                            <CLabel htmlFor="text-input">Name</CLabel>
                        </CCol>
                        <CCol xs="12" md="9">
                            <CInput id="text-input" name="name" defaultValue={data.name} onChange={changeinput} />
                            <CFormText>please Enter  Name</CFormText>
                        </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                        <CCol md="3">
                            <CLabel htmlFor="text-input">Size</CLabel>
                        </CCol>
                        <CCol xs="12" md="9">
                            <CInput id="text-input" name="size" defaultValue={data.size} onChange={changeinput} />
                            <CFormText className="help-block">Please Diamond size</CFormText>
                        </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                        <CCol md="3">
                            <CLabel htmlFor="text-input">Shape</CLabel>
                        </CCol>
                        <CCol xs="12" md="9">
                            <CInput id="text-input" name="shape" defaultValue={data.shape} onChange={changeinput} />
                            <CFormText className="help-block">Please Diamond shape</CFormText>
                        </CCol>
                    </CFormGroup>

                    <CFormGroup row>

                        <CCol xs="12" md="9">
                            <CInputFile id="file-input" name="img" onChange={changeinput} />
                        </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                        <CCol md="3">
                            <CLabel>Image File input</CLabel>
                        </CCol>
                        <CCol xs="12" md="9">
                            <CInputFile
                                id="file-multiple-input"
                                name="file-multiple-input"
                                multiple
                                custom
                            />
                            <CLabel htmlFor="file-multiple-input" variant="custom-file">
                                Choose Files...
                            </CLabel>
                        </CCol>
                    </CFormGroup>
                    {/* <CFormGroup row>
                        <CLabel col md={3}>Custom file input</CLabel>
                        <CCol xs="12" md="9">
                            <CInputFile custom id="custom-file-input" />
                            <CLabel htmlFor="custom-file-input" variant="custom-file">
                                Choose file...
                            </CLabel>
                        </CCol>
                    </CFormGroup> */}
                </CForm>
            </CCardBody>

            <CModal
                show={message}
                onClose={messagedisplay}
            >
                <CModalHeader closeButton>Message</CModalHeader>
                <CModalTitle>updated</CModalTitle>
                <CModalBody>{msg}</CModalBody>
                <CModalFooter>
                    <CButton color="primary" onClick={confirmdialog}>
                        ok
                    </CButton>

                </CModalFooter>
                {/* <CModalFooter>
                                <CButton color="primary">SAVE</CButton>{' '}
                                <CButton
                                    color="secondary"
                                    onClick={rowedit}
                                >Cancel</CButton>
                            </CModalFooter> */}
            </CModal>


            <CCardFooter>
                <CButton type="submit" onClick={handleSubmitEdituser} size="sm" color="primary"><CIcon name="cil-scrubber" /> save</CButton>{' '}
                <CButton onClick={props.onchange} size="sm" color="danger"><CIcon name="cil-ban" /> close</CButton>
            </CCardFooter>
        </CCard>
    )
}
export default EditProductForm;