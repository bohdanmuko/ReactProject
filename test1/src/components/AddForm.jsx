import { useState } from "react"

const AddForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: ''
  });
  const [errors, setErrors] = useState({});

  const validateForm = (data) => {
    const newErrors = {};
    
    if (!data.firstName.trim()) {
      newErrors.firstName = 'The first name is required';
    }
    if (!data.lastName.trim()) {
      newErrors.lastName = 'The last name is required';
    }
    if (!data.phone.trim()) {
      newErrors.phone = 'The phone is required';
    }
    
    return newErrors;
  };

  const handleSubmit = () => {
    const validationErrors = validateForm(formData);
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    onAdd(formData);
    setFormData({ firstName: '', lastName: '', phone: '' });
    setErrors({});
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <div>
      <h2>Add Contact</h2>
      <div>
        <label>First Name *</label>
        <input
          type="text"
          value={formData.firstName}
          onChange={(e) => handleChange('firstName', e.target.value)}
        />
        {errors.firstName && <div style={{ color: 'red' }}>{errors.firstName}</div>}
      </div>
      
      <div>
        <label>Last Name *</label>
        <input
          type="text"
          value={formData.lastName}
          onChange={(e) => handleChange('lastName', e.target.value)}
        />
        {errors.lastName && <div style={{ color: 'red' }}>{errors.lastName}</div>}
      </div>

      <div>
        <label>Phone *</label>
        <input
          type="tel"
          value={formData.phone}
          onChange={(e) => handleChange('phone', e.target.value)}
        />
        {errors.phone && <div style={{ color: 'red' }}>{errors.phone}</div>}
      </div>

      <button onClick={handleSubmit}>Add</button>
    </div>
  );
};

export default AddForm;