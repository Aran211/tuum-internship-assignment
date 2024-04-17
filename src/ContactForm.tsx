import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import ReactFlagsSelect from "react-flags-select";




const ContactForm = () => {
    const { register, handleSubmit, setValue } = useForm();
    const [selected, setSelected] = useState("");
  
    const onSubmit = (data: any) => console.log(data);
  
    const handleSelect = (code: string) => {
      setSelected(code);
      setValue('country', code);
    };
  
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Contact Us</h1>
        <div className="form-row">
          <input {...register('firstName')} placeholder="First name" />
          <input {...register('lastName')} placeholder="Last name" />
        </div>
        <div className="form-row">
          <input {...register('email')} placeholder="Email" />
          <input {...register('jobTitle')} placeholder="Job title" />
        </div>
        <ReactFlagsSelect
          selected={selected}
          onSelect={handleSelect}
        />
        <input {...register('companyName')} placeholder="Company name" />
        <div className="form-row">
          <textarea {...register('message')} placeholder="What would you like to talk about?" style={{height: '100px'}} />
        </div>
        <div className="form-row">
          <label>
            <input type="checkbox" {...register('acceptPolicies')} />
            By submitting this form I accept privacy policy and cookie policy. *
          </label>
        </div>
        <div className="form-row">
          <label>
            <input type="checkbox" {...register('receiveNewsletter')} />
            I would like to receive your newsletter.
          </label>
        </div>
        <input type="submit" />
      </form>
    );
  };
  
  export default ContactForm;
