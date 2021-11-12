/**Register form */

// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { Link, useHistory } from 'react-router-dom';
// import { Button, Grid, TextField, makeStyles, Typography } from '@material-ui/core';
// import { createUser } from '../actions/actionCreators';

// const useStyles = makeStyles(theme => ({
//     root: {
//         padding: '0px 10px'
//     },
//     form: {
//         width: '100%',
//         marginTop: 50,
//         backgroundColor: theme.palette.common.white,
//         padding: 30,
//         borderRadius: theme.shape.borderRadius
//     },
//     title: {
//         margin: '25px 0px'
//     },
//     loginLink: {
//         color: theme.palette.grey[600]
//     }
// }));

// const RegisterForm = () => {
//     const classes = useStyles();
//     const dispatch = useDispatch();
//     const history = useHistory();

//     const INITIAL_STATE = {
//         firstName: '',
//         lastName: '',
//         email: '',
//         username: '',
//         password: '',
//         firstNameError: '',
//         lastNameError: '',
//         emailError: '',
//         usernameError: '',
//         passwordError        
//     };

//     const validateForm = () => {
//         let validForm = true
//         if (!formData.firstName) {
//           setFormData(data => ({
//             ...data, firstNameError: 'First name cannot be blank'
//           }))
//           validForm = false
//         } else {
//           setFormData(data => ({
//             ...data, firstNameError: ''
//           }))
//         }
//         if (!formData.lastName) {
//           setFormData(data => ({
//             ...data, lastNameError: 'Last name cannot be blank'
//           }))
//           validForm = false
//         } else {
//           setFormData(data => ({
//             ...data, lastNameError: ''
//           }))
//         }
//         if (!formData.email) {
//           setFormData(data => ({
//             ...data, emailError: 'Email cannot be blank'
//           }))
//           validForm = false
//         } else {
//           setFormData(data => ({
//             ...data, emailError: ''
//           }))
//         }
//         if (!formData.username) {
//           setFormData(data => ({
//             ...data, usernameError: 'Username cannot be blank'
//           }))
//           validForm = false
//         } else {
//           setFormData(data => ({
//             ...data, phoneError: ''
//           }))
//         }
//         if (!formData.password) {
//             setFormData(data => ({
//               ...data, passwordError: 'Password cannot be blank'
//             }))
//             validForm = false
//           } else {
//             setFormData(data => ({
//               ...data, passwordError: ''
//             }))
//         return validForm
//       };

//     const [formData, setFormData] = useState(INITIAL_STATE);
//     const [formErr, setFormErr] = useState(false);

//     const handleChange = evt => {
//         const {name, value} = evt.target;
//         setFormData(data => ({...data, [name]: value}));
//     };

//     const handleSubmit = evt => {
//         evt.preventDefault();
//         for (let key of Object.keys(formData)) {
//             if (formData[key] === '') {
//                 return setFormErr(true)
//             };
//         };
//         try {
//             dispatch(createUser(formData));
//             history.push('/');
//         } catch(e) {
//             console.log(e)
//             return e
//         };
//     };

//     return (
//         <Grid container justify='center' direction='row' className={classes.root}>
//             <Grid item container sm={8} md={4}>
//                 <form className={classes.form} onSubmit={handleSubmit}>
//                     <Typography className={classes.title} variant='h6'>Create a new account</Typography>
//                     {formErr ? 
//                         <Typography color='secondary' variant='subtitle1'>Cannot leave any fields blank</Typography> :
//                         null
//                     }
//                     <Grid container direction='column' spacing={3}>
//                         <Grid item>
//                             <TextField
//                                 id='username'
//                                 name='username'
//                                 value={formData.username}
//                                 onChange={handleChange}
//                                 variant='outlined'
//                                 label='Username'
//                                 fullWidth
//                             />
//                         </Grid>
//                         <Grid item>
//                             <TextField
//                                 id='password'
//                                 name='password'
//                                 type='password'
//                                 value={formData.password}
//                                 onChange={handleChange}
//                                 variant='outlined'
//                                 label='Password'
//                                 fullWidth
//                             />
//                         </Grid>
//                         <Grid item>
//                             <TextField
//                                 id='firstName'
//                                 name='firstName'
//                                 value={formData.firstName}
//                                 onChange={handleChange}
//                                 variant='outlined'
//                                 label='First Name'
//                                 fullWidth
//                             />
//                         </Grid>
//                         <Grid item>
//                             <TextField
//                                 id='lastName'
//                                 name='lastName'
//                                 value={formData.lastName}
//                                 onChange={handleChange}
//                                 variant='outlined'
//                                 label='Last Name'
//                                 fullWidth
//                             />
//                         </Grid>
//                         <Grid item>
//                             <TextField
//                                 id='email'
//                                 name='email'
//                                 value={formData.email}
//                                 onChange={handleChange}
//                                 variant='outlined'
//                                 label='Email'
//                                 fullWidth
//                             />
//                         </Grid>
//                         <Grid item container direction='row' justify='space-between'>
//                             <Button type='submit' color='primary'>Register!</Button>
//                             <Button component={ Link } to='/' color='secondary'>Cancel</Button>
//                         </Grid>
//                         <Grid item>
//                             <Typography className={classes.loginLink} variant='body2' component={ Link } to='/login'>Already a member? Login here</Typography>
//                         </Grid>
//                     </Grid>
//                 </form>
//             </Grid>
//         </Grid>
//     );
// };

// export default RegisterForm