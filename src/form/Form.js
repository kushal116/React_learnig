import React from 'react'
import { useForm } from 'react-hook-form';

export const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm(
        {
            mode:'onChange'
        }
      );
      const submit = (data) => {
        console.log(data)
        alert(`"Name is "${data.name},"\n Email is "${data.email} `)
      };
      const validation = {
        name: {
            required: "Name is required",
          },
          email:{
              required:"email is require",
          },
          phone:{
            required :"Number is required",
            pattern :{
              value :/^[6-9]{1}[0-9]{9}$/,
              message:"invalid",
            },
            
        },
        password:{
            required : "pasaword is required",
            minLength :{
                value:3,
                message:"min must be 3",
            },
            maxLength:{
                value:5,
                message:"max must be 5",
            },

        },

      
    }
  return (
    <div>
        <form onSubmit={handleSubmit(submit)}>
        <div class="mb-3">
    
    <label for="name" class="form-label">NAME</label>
    <input type="text" class="form-control" {...register("name",validation.name)}/>
    {errors.name && errors.name.message}
  </div>
  <div class="mb-3">

    <label  class="form-label">Email address</label>
    <input type="email" class="form-control" {...register("email",validation.email)}/>
    {errors.email && errors.email.message}
  </div>
  <div class="mb-3">
    
    <label for="name" class="form-label">Phone</label>
    <input type="phone" class="form-control" {...register("phone",validation.phone)}/>
    {errors.phone && errors.phone.message}
   
  </div>
  <div class="mb-3">
    <label class="form-label">Password</label>
    <input type="password" class="form-control" {...register("password",validation.password)}/>
    {errors.password && errors.password.message}
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
  )
}
