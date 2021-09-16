import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CLabel,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { usersignup } from 'src/views/users/UsersData';
import { Link, useHistory } from 'react-router-dom';

const Register = () => {
  const history = useHistory();
  const [inputs, setInputs] = useState({});
  const [iserror, setIsError] = useState(true);
  const [error, setError] = useState("")

  const handleinputchange = (e) => {

    // setInputs(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
    setInputs(prevState => ({ ...prevState, [e.target.name]: e.target.value }));


  }

  const handlesubmit = async (e) => {
    e.preventDefault();
    let result = await usersignup(inputs)
    console.log(result);
    console.log(result.statusCode);

    if (result.statusCode == 200) {
      document.getElementById('registerform').reset();
      return history.push('./login');
    }
    console.log(result.error);
    setError(result.error)
    setIsError(!iserror)

  }


  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="9" lg="7" xl="6">
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm id="registerform">
                  <h1>Register</h1>
                  <p className="text-muted">Create your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="text" placeholder="Username" autoComplete="username" name="username" onChange={handleinputchange} />
                  </CInputGroup>
                  {/* <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>@</CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="text" placeholder="Email" autoComplete="email" />
                  </CInputGroup> */}
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="password" placeholder="Password" autoComplete="new-password" name="password" onChange={handleinputchange} />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="password" placeholder="Repeat password" autoComplete="new-password" name="cinfirm_password" onChange={handleinputchange} />
                  </CInputGroup><div style={{ color: "red" }}>
                    <CLabel id="error" hidden={iserror}>{error}</CLabel></div>
                  <CButton color="success" onClick={handlesubmit} block>Create Account</CButton>
                </CForm>
              </CCardBody>
              <CCardFooter className="p-4">
                <CRow>
                  <CCol xs="12" sm="6">
                    <CButton className="btn-facebook mb-1" block><span>facebook</span></CButton>
                  </CCol>
                  <CCol xs="12" sm="6">
                    <Link to="/login">
                      <CButton className="btn-twitter mb-1" block><span>Login</span></CButton>
                    </Link>
                  </CCol>
                </CRow>
              </CCardFooter>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
