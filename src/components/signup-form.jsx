import React from 'react';
import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';

function SignUpForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <>
        <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{
                maxWidth: 400,
                mx: 'auto',
                p: 2,
                border: '1px solid #ccc',
                borderRadius: 2,
                backgroundColor: '#fff',
            }}
        >


            <FormControl fullWidth margin="normal" error={!!errors.fullName}>
                <TextField
                    label="Full Name"
                    variant="standard"
                    {...register('fullName', { required: 'Full name is required' })}
                />
                {errors.fullName && <FormHelperText>{errors.fullName.message}</FormHelperText>}
            </FormControl>

            <FormControl fullWidth margin="normal" error={!!errors.streetAddress}>
                <TextField
                    label="Street address (e.g. '1 Elm Way')"
                    variant="standard"
                    {...register('streetAddress', { required: 'Street address is required' })}
                />
                {errors.streetAddress && (
                    <FormHelperText>{errors.streetAddress.message}</FormHelperText>
                )}
            </FormControl>

            <FormControl fullWidth margin="normal" error={!!errors.city}>
                <TextField
                    label="City"
                    variant="standard"
                    {...register('city', { required: 'City is required' })}
                />
                {errors.city && <FormHelperText>{errors.city.message}</FormHelperText>}
            </FormControl>

            <FormControl fullWidth margin="normal" error={!!errors.state}>
                <TextField
                    label="State"
                    variant="standard"
                    {...register('state', { required: 'State is required' })}
                />
                {errors.state && <FormHelperText>{errors.state.message}</FormHelperText>}
            </FormControl>

            <FormControl fullWidth margin="normal" error={!!errors.mobileNumber}>
                <TextField
                    label="Mobile number"
                    variant="standard"
                    {...register('mobileNumber', {
                        required: 'Mobile number is required',
                        pattern: {
                            value: /^\d{10}$/,
                            message: 'Enter a valid mobile number',
                        },
                    })}
                />
                {errors.mobileNumber && (
                    <FormHelperText>{errors.mobileNumber.message}</FormHelperText>
                )}
            </FormControl>

            <FormControl fullWidth margin="normal" error={!!errors.dob}>
                <TextField
                    label="Date of birth"
                    type="date"
                    variant="standard"
                    InputLabelProps={{ shrink: true }}
                    {...register('dob', { required: 'Date of birth is required' })}
                />
                {errors.dob && <FormHelperText>{errors.dob.message}</FormHelperText>}
            </FormControl>

            <FormControl fullWidth margin="normal" error={!!errors.gender}>
                <TextField
                    label="Gender"
                    select
                    variant="standard"
                    {...register('gender', { required: 'Gender is required' })}
                >
                    <MenuItem value="">
                        <em>Select...</em>
                    </MenuItem>
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                    <MenuItem value="other">Other</MenuItem>
                </TextField>
                {errors.gender && <FormHelperText>{errors.gender.message}</FormHelperText>}
            </FormControl>


        </Box>
    <FormControl fullWidth margin="normal" error={!!errors.email}>
        <TextField
            label="Email"
            type="email"
            variant="standard"
            {...register('email', {
                required: 'Email is required',
                pattern: {
                    value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                    message: 'Enter a valid email',
                },
            })}
        />
        {errors.email && <FormHelperText>{errors.email.message}</FormHelperText>}
    </FormControl>

    <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
        Continue with email
    </Button>
    </>
    );
}

export default SignUpForm;
