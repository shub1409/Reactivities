import { ErrorMessage, Formik } from "formik";
import { Form } from "react-router-dom";
import { Button, Header, Label } from "semantic-ui-react";
import MyTextInput from "../../app/common/form/MyTextInput";
import { useStore } from "../../app/stores/store";

export default function LoginForm() {
    const {userStore} = useStore();
    return (
        <Formik
            initialValues={{email: '', password: '', error: null}}
            onSubmit={(values, {setErrors}) => userStore.login(values).catch(error => 
            setErrors({error: "Invalid email or password"}))}>
        
        {({handleSubmit, isSubmitting, errors}) => (
            <Form className="ui form" onSubmit={handleSubmit} autoComplete='off'>
                <Header as='h2' content='Login to Reactivities' color='teal' textAlign="center"/>
                <MyTextInput placeholder="Email" name="email"/>
                <MyTextInput placeholder="Password" name="password" type='password'/>
                <Button loading={isSubmitting} positive content='Login' type='submit' fluid/>
                <ErrorMessage 
                    name='error' render={() => 
                    <Label style={{marginBottom: 10}} basic color='red' content={errors.error}/>}
                />
            </Form>
        )}
            
        </Formik>
    )
}