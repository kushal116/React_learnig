import React from "react";
import { useForm } from "react-hook-form";

export const RegisterUser = () => {
  // useform hook
  //register -> array
  //handlersubmit -> function
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const submit = (data) => {
    // data.prventDefault()
    console.log(data);
  };
  const validationSchema = {
    name: {
      required: "*Name is rquired",
    },
    email: {
      required: "*Email is rquired",

    },
    age: {
      required: "*age is rquired",
      min: {
        value: 18,
        message: "*Required age is more than 18",
      },
      max: {
        value: 60,
        message: "*Required age is less than 60",
      },
    },
    phone:{
      required :"*Number is required",
      pattern :{
        value :/^[6-9]{1}[0-9]{9}$/,
        message:"*invalid phone number",
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
     cpass:{
      required : "pasaword is required",
      


     },
  };

  return (
    <div>
      <form className="conatiner my-3" onSubmit={handleSubmit(submit)}>
        <h1>Registration</h1>
        <div className="row mx-3 my-3">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              {...register("name", validationSchema.name)}
            />
            <span className="error">{errors.name && errors.name.message}</span>
          </div>
          <div className="col">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              {...register("email", validationSchema.email)}
            />
            <span className="error">
              {errors.email && errors.email.message}
            </span>
          </div>
          <div className="col">
            <input
              type="number"
              className="form-control"
              placeholder="age"
              {...register("age", validationSchema.age)}
            />
            <span className="error">{errors.age && errors.age.message}</span>
          </div>
          <div className="col">
            <input
              type="number"
              className="form-control"
              placeholder="phone"
              {...register("phone", validationSchema.phone)}
            />
            <span className="error">{errors.phone && errors.phone.message}</span>
          </div>
          <div className="col">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              {...register("password", validationSchema.password)}
            />
            <span className="error">{errors.password && errors.password.message}</span>
          </div>  
          <div className="col">
            <input
              type="password"
              className="form-control"
              placeholder="Confirm-Password"
              {...register("Confirm-password", validationSchema.password)}
            />
            <span className="error">{errors.password && errors.password.message}</span>
          </div>
          <input
            className="btn btn-primary my-3 mx-3"
            type="submit"
            value="submit"
          />
        </div>
      </form>
    </div>
  );
};
