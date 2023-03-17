import { useState } from "react";
import validation from "./validation";
import style from './Usuario.model.css';

const Form = ({login}) => {
    const [form, setForm] = useState({
        username: "",
        password: "",
    });

    const [errors, setErrors] = useState({
        username: "",
        password: "",
    });

    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setForm({ ...form, [property]: value });
        setErrors(validation({ ...form, [property]: value }, errors));
    }

    const submitHandler = (event) => {
        event.preventDefault();
        login(form);        
    };

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="username">Username</label>
                <input 
                    type="text" 
                    name="username" 
                    value={form.username} 
                    onChange={handleChange}
                />
                <p>{errors.username}</p>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input 
                    type="text" 
                    name="password" 
                    value={form.password} 
                    onChange={handleChange} />
                    <p>{errors.username}</p>
            </div>
            <button type="submit">Ingresar</button>
        </form>
    );
}
export default Form;