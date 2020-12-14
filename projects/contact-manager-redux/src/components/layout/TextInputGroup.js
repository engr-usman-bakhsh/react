import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export default function TextInputGroup({ label, name, type, placeholder, value, onChange, error }) {
    return (
        <div className="form-group">
            <label htmlFor={name} className="h4">{label}</label>
            <input
                type={type}
                className={classnames("form-control form-control-lg mb-2", {
                    "is-invalid": error
                })}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
            />
            <div className="invalid-feedback">
                {error}
            </div>
        </div>
    )
}
TextInputGroup.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    error: PropTypes.string
}
