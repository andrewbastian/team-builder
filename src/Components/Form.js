import React, {useState} from 'react';



 function Form() {


   const [team, setMember] = useState({name:'', email:'', role:''})


   const changeHandler = event => {
     event.preventDefault();
     console.log(event.target.value);
     setMember({...team,[event.target.name]: event.target.value})
   }

   const submitForm= event => {
    event.preventDefault();
    console.log(event)
}
   return (
   <div className="App">
     <form onSubmit={submitForm}>

         <label htmlFor='name'>Name
         <input
         type='text'
         name='name'
         placeholder='Enter name'
         value={team.name}
         onChange={changeHandler}
         />
         </label>

         <label
          htmlFor='email'>Email
          <input
          type='email'
          name='email'
          placeholder='valid email address'
          value={team.email}
          onChange={changeHandler}
          />
          </label>

         <label
         htmlFor='role'>Role
         <input
         type='text'
         name='role'
         placeholder='team role'
         value={team.ro}
         onChange={changeHandler}/>
         </label>


         <button type='submit'>Add member</button>

     </form>
   </div>
 );
 }
  export default Form;
