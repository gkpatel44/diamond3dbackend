import React, { useState } from 'react'
import './form.css'
import {
    CButton,
    CCard,
    CCardBody,
    CCardFooter,
    CCardHeader,
    CCol,
    CCollapse,
    CDropdownItem,
    CDropdownMenu,
    CDropdownToggle,
    CFade,
    CForm,
    CFormGroup,
    CFormText,
    CValidFeedback,
    CInvalidFeedback,
    CTextarea,
    CInput,
    CInputFile,
    CInputCheckbox,
    CInputRadio,
    CInputGroup,
    CInputGroupAppend,
    CInputGroupPrepend,
    CDropdown,
    CInputGroupText,
    CLabel,
    CSelect,
    CRow,
    CSwitch
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'
import { addproduct } from 'src/views/users/diamonddata'

// orderid, name, size, shape, img, status, modify
const AddProductForm = (props) => {




    const formdata = new FormData();
    const changeinput = (e) => {

        let target = e.target;
        let name = target.name;
        let value = target.value;
        // body[name] = value;
        if (name === 'img') {
            // console.log(target.files[0]);
            // body[name] = target.files[0]
            formdata.set(name, target.files[0])
        } else {
            formdata.set(name, value)
            // body[name] = value;
        }
    }
    const addnewproduct = async (e) => {
        e.preventDefault();

        let orderids = document.getElementById("orderid")
        let errororderids = document.getElementById("errororderid")
       
        if (orderids.value == "") {
            orderids.classList.add('invalid');
            errororderids.innerHTML = "plese enter orderid"
            return false
        }


        let names = document.getElementById("name")
        let errornames = document.getElementById("errorname")
     
        if (names.value == "") {
            names.classList.add('invalid');
            errornames.innerHTML = "plese enter orderid"
            return false
        }


        let sizes = document.getElementById("size")
        let errorsizes = document.getElementById("errorsize")
        
        if (sizes.value == "") {
            sizes.classList.add('invalid');
            errorsizes.innerHTML = "plese enter orderid"
            return false
        }



        let shapes = document.getElementById("shape")
        let errorshapes = document.getElementById("errorshape")
        console.log(shapes);
        if (shapes.value == "") {
            shapes.classList.add('invalid');
            errorshapes.innerHTML = "plese enter orderid"
            return false
        }


        if (formdata)
            var res = await addproduct(formdata);
        props.onchange(!(props.value));
        props.reloaddata();
        document.getElementById("form").reset();
        // console.log(res);
    }
    const cancelbtnhandler=()=>{
        document.getElementById("form").reset();
        props.onchange(!(props.value));
    }



    return (
        <CCard>
            <CCardHeader>
                PRODUCT
                <small> add</small>
            </CCardHeader>
            <CCardBody>
                <CForm id="form" onSubmit={addnewproduct} encType="multipart/form-data" className="form-horizontal" >
                    <CFormGroup row>
                        <CCol md="3">
                            <CLabel>Orderid:</CLabel>
                        </CCol>
                        <CCol xs="12" md="9">
                            <CInput id="orderid" name="orderid" placeholder="orderid" onChange={changeinput} pattern="[a-z]{2}-[0-9]{4}" />
                            <div id="errororderid" className="error"></div>
                        </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                        <CCol md="3">
                            <CLabel htmlFor="text-input">Name</CLabel>
                        </CCol>
                        <CCol xs="12" md="9">
                            <CInput id="name" name="name" placeholder="name" onChange={changeinput} />
                            {/* <CFormText>please Enter  Name</CFormText> */}
                            <div id="errorname" className="error" ></div>

                        </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                        <CCol md="3">
                            <CLabel htmlFor="text-input">Size</CLabel>
                        </CCol>
                        <CCol xs="12" md="9">
                            <CInput id="size" name="size" placeholder="size" onChange={changeinput} />
                            {/* <CFormText className="help-block">Please Diamond size</CFormText> */}
                            <div id="errorsize" className="error"> </div>
                        </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                        <CCol md="3">
                            <CLabel htmlFor="text-input">Shape</CLabel>
                        </CCol>
                        <CCol xs="12" md="9">
                            <CInput id="shape" name="shape" placeholder="shapes" onChange={changeinput} />
                            {/* <CFormText className="help-block">Please Diamond shape</CFormText> */}
                            <div id="errorshape" className="error" ></div>
                        </CCol>
                    </CFormGroup>
                    { /*<CFormGroup row>
                        <CCol md="3">
                            <CLabel htmlFor="date-input">Date Input</CLabel>
                        </CCol>
                        <CCol xs="12" md="9">
                            <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                        </CCol>
                    </CFormGroup> 
                     <CFormGroup row>
                        <CCol md="3">
                            <CLabel htmlFor="disabled-input">Disabled Input</CLabel>
                        </CCol>
                        <CCol xs="12" md="9">
                            <CInput id="disabled-input" name="disabled-input" placeholder="Disabled" disabled />
                        </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                        <CCol md="3">
                            <CLabel htmlFor="textarea-input">Textarea</CLabel>
                        </CCol>
                        <CCol xs="12" md="9">
                            <CTextarea
                                name="textarea-input"
                                id="textarea-input"
                                rows="9"
                                placeholder="Content..."
                            />
                        </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                        <CCol md="3">
                            <CLabel htmlFor="select">Select</CLabel>
                        </CCol>
                        <CCol xs="12" md="9">
                            <CSelect custom name="select" id="select">
                                <option value="0">Please select</option>
                                <option value="1">Option #1</option>
                                <option value="2">Option #2</option>
                                <option value="3">Option #3</option>
                            </CSelect>
                        </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                        <CCol md="3">
                            <CLabel htmlFor="selectLg">Select Large</CLabel>
                        </CCol>
                        <CCol xs="12" md="9" size="lg">
                            <CSelect custom size="lg" name="selectLg" id="selectLg">
                                <option value="0">Please select</option>
                                <option value="1">Option #1</option>
                                <option value="2">Option #2</option>
                                <option value="3">Option #3</option>
                            </CSelect>
                        </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                        <CCol md="3">
                            <CLabel htmlFor="selectSm">Select Small</CLabel>
                        </CCol>
                        <CCol xs="12" md="9">
                            <CSelect custom size="sm" name="selectSm" id="SelectLm">
                                <option value="0">Please select</option>
                                <option value="1">Option #1</option>
                                <option value="2">Option #2</option>
                                <option value="3">Option #3</option>
                                <option value="4">Option #4</option>
                                <option value="5">Option #5</option>
                            </CSelect>
                        </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                        <CCol md="3">
                            <CLabel htmlFor="disabledSelect">Disabled Select</CLabel>
                        </CCol>
                        <CCol xs="12" md="9">
                            <CSelect
                                custom
                                name="disabledSelect"
                                id="disabledSelect"
                                disabled
                                autoComplete="name"
                            >
                                <option value="0">Please select</option>
                                <option value="1">Option #1</option>
                                <option value="2">Option #2</option>
                                <option value="3">Option #3</option>
                            </CSelect>
                        </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                        <CCol tag="label" sm="3" className="col-form-label">
                            Switch checkboxes
                        </CCol>
                        <CCol sm="9">
                            <CSwitch
                                className="mr-1"
                                color="primary"
                                defaultChecked
                            />
                            <CSwitch
                                className="mr-1"
                                color="success"
                                defaultChecked
                                variant="outline"
                            />
                            <CSwitch
                                className="mr-1"
                                color="warning"
                                defaultChecked
                                variant="opposite"
                            />
                            <CSwitch
                                className="mr-1"
                                color="danger"
                                defaultChecked
                                shape="pill"
                            />
                            <CSwitch
                                className="mr-1"
                                color="info"
                                defaultChecked
                                shape="pill"
                                variant="outline"
                            />
                            <CSwitch
                                className="mr-1"
                                color="dark"
                                defaultChecked
                                shape="pill"
                                variant="opposite"
                            />
                        </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                        <CCol md="3">
                            <CLabel>Radios</CLabel>
                        </CCol>
                        <CCol md="9">
                            <CFormGroup variant="checkbox">
                                <CInputRadio className="form-check-input" id="radio1" name="radios" value="option1" />
                                <CLabel variant="checkbox" htmlFor="radio1">Option 1</CLabel>
                            </CFormGroup>
                            <CFormGroup variant="checkbox">
                                <CInputRadio className="form-check-input" id="radio2" name="radios" value="option2" />
                                <CLabel variant="checkbox" htmlFor="radio2">Option 2</CLabel>
                            </CFormGroup>
                            <CFormGroup variant="checkbox">
                                <CInputRadio className="form-check-input" id="radio3" name="radios" value="option3" />
                                <CLabel variant="checkbox" htmlFor="radio3">Option 3</CLabel>
                            </CFormGroup>
                        </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                        <CCol md="3">
                            <CLabel>Inline Radios</CLabel>
                        </CCol>
                        <CCol md="9">
                            <CFormGroup variant="custom-radio" inline>
                                <CInputRadio custom id="inline-radio1" name="inline-radios" value="option1" />
                                <CLabel variant="custom-checkbox" htmlFor="inline-radio1">One</CLabel>
                            </CFormGroup>
                            <CFormGroup variant="custom-radio" inline>
                                <CInputRadio custom id="inline-radio2" name="inline-radios" value="option2" />
                                <CLabel variant="custom-checkbox" htmlFor="inline-radio2">Two</CLabel>
                            </CFormGroup>
                            <CFormGroup variant="custom-radio" inline>
                                <CInputRadio custom id="inline-radio3" name="inline-radios" value="option3" />
                                <CLabel variant="custom-checkbox" htmlFor="inline-radio3">Three</CLabel>
                            </CFormGroup>
                        </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                        <CCol md="3"><CLabel>Checkboxes</CLabel></CCol>
                        <CCol md="9">
                            <CFormGroup variant="checkbox" className="checkbox">
                                <CInputCheckbox
                                    id="checkbox1"
                                    name="checkbox1"
                                    value="option1"
                                />
                                <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox1">Option 1</CLabel>
                            </CFormGroup>
                            <CFormGroup variant="checkbox" className="checkbox">
                                <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                                <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox2">Option 2</CLabel>
                            </CFormGroup>
                            <CFormGroup variant="checkbox" className="checkbox">
                                <CInputCheckbox id="checkbox3" name="checkbox3" value="option3" />
                                <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox3">Option 3</CLabel>
                            </CFormGroup>
                        </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                        <CCol md="3">
                            <CLabel>Inline Checkboxes</CLabel>
                        </CCol>
                        <CCol md="9">
                            <CFormGroup variant="custom-checkbox" inline>
                                <CInputCheckbox
                                    custom
                                    id="inline-checkbox1"
                                    name="inline-checkbox1"
                                    value="option1"
                                />
                                <CLabel variant="custom-checkbox" htmlFor="inline-checkbox1">One</CLabel>
                            </CFormGroup>
                            <CFormGroup variant="custom-checkbox" inline>
                                <CInputCheckbox custom id="inline-checkbox2" name="inline-checkbox2" value="option2" />
                                <CLabel variant="custom-checkbox" htmlFor="inline-checkbox2">Two</CLabel>
                            </CFormGroup>
                            <CFormGroup variant="custom-checkbox" inline>
                                <CInputCheckbox custom id="inline-checkbox3" name="inline-checkbox3" value="option3" />
                                <CLabel variant="custom-checkbox" htmlFor="inline-checkbox3">Three</CLabel>
                            </CFormGroup>
                        </CCol>
                    </CFormGroup> }*/}
                    <CFormGroup row>
                        <CLabel col md="3" htmlFor="file-input">Input Single Image</CLabel>
                        <CCol xs="12" md="9">
                            <CInputFile id="img" name="img" onChange={changeinput} />
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
                    <CCardFooter>
                        <CButton type="submit" onClick={addnewproduct} size="sm" color="primary"><CIcon name="cil-scrubber" /> Submit</CButton>{' '}
                        <CButton id="rest" type="reset" size="sm" color="danger" > Reset</CButton>{' '}
                        <CButton onClick={cancelbtnhandler} size="sm" color="danger"><CIcon name="cil-ban" /> close</CButton>
                    </CCardFooter>
                </CForm>
            </CCardBody>

        </CCard>
    )
}
export default AddProductForm;