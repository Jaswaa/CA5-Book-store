import React, { useState } from 'react';
import '../App.css'
import { useNavigate } from 'react-router-dom';
const RegistrationForm = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        repeatPassword: '',
    });

    const [formErrors, setFormErrors] = useState({
        name: '',
        email: '',
        password: '',
        repeatPassword: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        setFormErrors({
            ...formErrors,
            [name]: '',
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const errors = {};
        if (formData.name.length < 3 || formData.name.length > 30) {
            errors.name = 'Name must be between 3 and 30 characters.';
        }

        if (!formData.email.includes('@')) {
            errors.email = 'Invalid email address.';
        }

        if (formData.password.length < 10 || !/[!@#$%^&*(),.?":{}|<>]/.test(formData.password)) {
            errors.password = 'Password must be at least 10 characters long and contain at least one special character.';
        }

        if (formData.repeatPassword !== formData.password || !formData.repeatPassword) {
            errors.repeatPassword = 'Passwords do not match.';
        }

        if (Object.keys(errors).length === 0) {
            navigate("/")
        } else {
            setFormErrors(errors);
        }
    };

    return (
        <div className='Form'>
            <h2>Registration Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {formErrors.name && <p className="error-message">{formErrors.name}</p>}
                </div>

                <div>
                    <label>Email:</label>
                    <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {formErrors.email && <p className="error-message">{formErrors.email}</p>}
                </div>

                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {formErrors.password && <p className="error-message">{formErrors.password}</p>}
                </div>

                <div>
                    <label>Repeat Password:</label>
                    <input
                        type="password"
                        name="repeatPassword"
                        value={formData.repeatPassword}
                        onChange={handleChange}
                    />
                    {formErrors.repeatPassword && <p className="error-message">{formErrors.repeatPassword}</p>}
                    <button type="submit">Sign in</button>

                </div>
            </form>
        </div>
    );
};

export default RegistrationForm;