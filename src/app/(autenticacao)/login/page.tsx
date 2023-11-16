"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import { useState } from 'react';
import { useUserService } from "../../../services/user";

export default function Login() {

    const userService = useUserService();
    const [ erroLogin, setErroLogin ] = useState('');

    //==================================================================
    const handleSubmit = async ({login, password}:any) => {
        setErroLogin('');        
        if (await userService.login(login, password)) {
            //router.replace('/admin/dashboard')
           window.location.href="/admin/images"
        } else {
            setErroLogin('Email ou senha incorreta!');
        }
    }

    //===================================================================
    return (
        <div>
            <div className="card-block">
                <div className="row m-b-20">
                    <div className="col-md-12">
                        <h3 className="text-center">Administrativo</h3>
                    </div>
                </div>

                <Formik
                    initialValues={{login: '', password: ''}}
                    validationSchema={Yup.object({
                        login: Yup.string().required('Campo login é obrigatório'),
                        password: Yup.string().required('O campo senha é obrigatório').min(6, 'A senha precisa ter pelo menos 6 digitos')
                    })}
                    onSubmit={handleSubmit}
                >
                {({errors, touched, isSubmitting}) => (
                    <Form>
                        {erroLogin && <p className="alert alert-danger">{erroLogin}</p>}
                        <div className="form-group form-primary">
                            <Field type="text" name="login" className="form-control"/>
                            <span className="form-bar"></span>
                            <label className="float-label">Digite seu login</label>
                            <ErrorMessage name="login" />
                        </div>
                        <div className="form-group form-primary">
                            <Field type="password" name="password" className="form-control" />
                            <span className="form-bar"></span>
                            <label className="float-label">Digite sua senha</label>
                            <ErrorMessage name="password" />
                        </div>


                        <div className="row m-t-30">
                            <div className="col-md-12">
                                <button type="submit" className="btn btn-primary btn-md btn-block waves-effect waves-light text-center m-b-20"  disabled={isSubmitting}>Logar</button>
                            </div>
                        </div>
                    </Form>
                )}
                </Formik>
            </div>
        </div>
    ) 
}