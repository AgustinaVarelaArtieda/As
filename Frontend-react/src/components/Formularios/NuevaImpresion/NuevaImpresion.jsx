import { useFormik } from 'formik';
import axios from 'axios';
import { useState } from 'react';

import * as yup from 'yup';

import { TextField, Button, Select, MenuItem, FormControl, InputLabel, FormControlLabel, Switch, Grid, Typography, Divider, Input, Avatar, CircularProgress } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import RefreshIcon from '@mui/icons-material/Refresh';
import PublishIcon from '@mui/icons-material/Publish';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';;

const preset = process.env.PRESET_CLOUDINARY
const nube = process.env.LINK_CLOUDINARY

const validationSchema= yup.object({
    nombre: yup
    .string('Escriba el nombre de la impresion')
    .required('Requerido'),
    imagen: yup
    .string('Escriba la URL de la imagen')
    .required('Requerido'),
    precioBase: yup
    .number('Escriba el precio de la impresion')
    .required('Requerido'),
    rellenoBase: yup
    .number('Escriba el relleno de la impresion')
    .required('Requerido'),
    tiempoBase: yup
    .number('Escriba el tiempo de la impresion')
    .required('Requerido'),
    tamañoBase: yup
    .object({
        x: yup
        .number('Escriba el tamaño de la impresion')
        .required('Requerido'),
        y: yup
        .number('Escriba el tamaño de la impresion')
        .required('Requerido'),
        z: yup
        .number('Escriba el tamaño de la impresion')
        .required('Requerido'),
    })
    .required('Requerido'),
    estado: yup
    .boolean()
    .required('Requerido'),
})

function NuevaImpresion(){
    const [loading, setLoading] = useState(false);
    async function cargaDeImpresion(values){
        try {
            const response = await axios.post("/impresiones", values)
            console.log("Se ha creado una impresión")
            console.log(response)

        } catch (error) {
            console.log(error)
        }
    }

    async function changeImagen(e){
        try {
            setLoading(true);

            const file = e.target.files[0];
            const formData = new FormData();
            formData.append("file", file);
            formData.append('upload_preset', preset );

            const response = await fetch(nube, {
                method: 'POST',
                body: formData
            });

            const cloudy = await response.json();
            const imageUrl = cloudy.secure_url;
            formik.setFieldValue ('imagen', imageUrl) ;
            
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false);
            console.log("Se ha cambiado la imagen");
        }
    }

    const formik = useFormik({
        initialValues: {
            nombre: '',
            imagen: '',
            precioBase: 0,
            rellenoBase: 20,
            tiempoBase: 0,
            tamañoBase: {
                x: 0,
                y: 0,
                z: 0
            },
            estado: true,
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log('form', values)
                //coso al back
                setTimeout(()=>{  
                    alert(JSON.stringify(values, null, 2));
                    cargaDeImpresion(values)
                    console.log(values)
                }, 400);
        },
        });

    return(
        <div >          
                <form onSubmit={formik.handleSubmit} onReset={formik.handleReset} encType="multipart/form-data">
                    <Grid container spacing={2} sx={{m:2}}> 
                        <Grid item xs={6} sm={8}>                  
                            <TextField
                            variant="standard"
                            fullWidth
                            sx={{mb:"1rem"}}
                            id="nombre"
                            name="nombre"
                            label="Nombre"
                            value={formik.values.nombre}
                            onChange={formik.handleChange}
                            error={formik.touched.nombre && Boolean(formik.errors.nombre)}
                            helperText={formik.touched.nombre && formik.errors.nombre}
                            />
                        </Grid>
                        <Grid item xs={6} sm={4} sx={{display:'flex', flexDirection:'row'}}>
                            <Button component="label" variant='contained' sx={{ml:'2rem', mr:'1rem', width: '3rem', height: '3rem'}} size="large">
                                <AddPhotoAlternateIcon/>
                                <Input type='file' accept="image/*" name='imagen'
                                    error={formik.touched.imagen && Boolean(formik.errors.imagen)}
                                    sx={{display:"none"}}
                                    onChange={(event)=>changeImagen(event)}
                                />                                   
                            </Button>
                            {loading? <CircularProgress/> :(
                                <Avatar alt="Imagen seleccionada" variant="rounded" src={formik.values.imagen} sx={{ width: '3rem', height: '3rem' }} />
                            )}
                        </Grid>
                        
                        <Grid item xs={12} sm={6} container spacing={2} sx={{mt:3}}>
                            <Grid item xs={4}>
                                <TextField
                                id="tiempoBase"
                                name="tiempoBase"
                                label="Duración"
                                type="number"
                                inputProps={{
                                    inputMode: 'numeric',
                                    pattern: '[0-9]*',
                                    min: 0,
                                }}
                                InputProps={{
                                    endAdornment: <InputAdornment position='end'>min</InputAdornment>
                                }}
                                value={formik.values.tiempoBase}
                                onChange={formik.handleChange}
                                error={formik.touched.tiempoBase && Boolean(formik.errors.tiempoBase)}
                                helperText={formik.touched.tiempoBase && formik.errors.tiempoBase}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                id="precioBase"
                                name="precioBase"
                                label="Precio"
                                type="number"
                                inputProps={{
                                    inputMode: 'numeric',
                                    pattern: '[0-9]*',
                                    min: 0,
                                }}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                }}
                                value={formik.values.precioBase}
                                onChange={formik.handleChange}
                                error={formik.touched.precioBase && Boolean(formik.errors.precioBase)}
                                helperText={formik.touched.precioBase && formik.errors.precioBase}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <FormControl>
                                    <InputLabel>Relleno</InputLabel>
                                    <Select
                                    id="rellenoBase"
                                    name="rellenoBase"
                                    label="Relleno"
                                    value={formik.values.rellenoBase}
                                    onChange={formik.handleChange}
                                    >
                                        <MenuItem value={0}>0</MenuItem>
                                        <MenuItem value={10}>10%</MenuItem>
                                        <MenuItem value={20}>20%</MenuItem>
                                        <MenuItem value={30}>30%</MenuItem>
                                        <MenuItem value={40}>40%</MenuItem>
                                        <MenuItem value={50}>50%</MenuItem>
                                        <MenuItem value={60}>60%</MenuItem>
                                        <MenuItem value={70}>70%</MenuItem>
                                        <MenuItem value={80}>80%</MenuItem>
                                        <MenuItem value={90}>90%</MenuItem>
                                        <MenuItem value={100}>100%</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Divider orientation='vertical' sx={{height:'auto'}}/>
                        <Grid item xs={12} sm={5} container spacing={2} >                             
                            <Grid item xs={12}>
                                <Typography>Dimensiones</Typography>                         
                            </Grid>
                            <Grid item xs container spacing={2}>
                                <Grid item xs={4}>
                                    <TextField
                                    type="number"
                                    id="tamañoBase.x"
                                    name="tamañoBase.x"
                                    label="X"
                                    inputProps={{
                                        inputMode: 'numeric',
                                        pattern: '[0-9]*',
                                        min: 0,
                                    }}
                                    InputProps={{
                                        endAdornment: <InputAdornment position='end'>cm</InputAdornment>
                                    }}
                                    value={formik.values.tamañoBase.x}
                                    onChange={formik.handleChange}
                                    error={formik.touched.tamañoBase?.x && Boolean(formik.errors.tamañoBase?.x)}
                                    helperText={formik.touched.tamañoBase?.x && formik.errors.tamañoBase?.x}
                                    />
                                </Grid>
                                
                                <Grid item xs={4}>
                                    <TextField
                                    type="number"
                                    inputProps={{
                                        inputMode: 'numeric',
                                        pattern: '[0-9]*',
                                        min: 0,
                                    }}
                                    InputProps={{
                                        endAdornment: <InputAdornment position='end'>cm</InputAdornment>
                                    }}
                                    id="tamañoBase.y"
                                    name="tamañoBase.y"
                                    label="Y"
                                    value={formik.values.tamañoBase.y}
                                    onChange={formik.handleChange}
                                    error={formik.touched.tamañoBase?.y && Boolean(formik.errors.tamañoBase?.y)}
                                    helperText={formik.touched.tamañoBase?.y && formik.errors.tamañoBase?.y}
                                    />
                                </Grid>
                                
                                <Grid item xs={4}>
                                    <TextField
                                    type="number"
                                    inputProps={{
                                        inputMode: 'numeric',
                                        pattern: '[0-9]*',
                                        min: 0,
                                    }}
                                    InputProps={{
                                        endAdornment: <InputAdornment position='end'>cm</InputAdornment>
                                    }}
                                    id="tamañoBase.z"
                                    name="tamañoBase.z"
                                    label="Z"
                                    value={formik.values.tamañoBase.z}
                                    onChange={formik.handleChange}
                                    error={formik.touched.tamañoBase?.z && Boolean(formik.errors.tamañoBase?.z)}
                                    helperText={formik.touched.tamañoBase?.z && formik.errors.tamañoBase?.z}
                                    />
                                </Grid>
                            </Grid>
                            
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl>
                                <FormControlLabel value={formik.values.estado}
                                    control={<Switch 
                                    name="estado"
                                    onChange={formik.handleChange}
                                    checked={formik.values.estado}/>}

                                    label="Disponible"
                                    labelPlacement="end"
                                />                    
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <Button type="submit" startIcon={<PublishIcon/>}>Subir</Button>
                            <Button type="reset" startIcon={<RefreshIcon/>}>Reset</Button>
                        </Grid>
                    </Grid>
                </form>
        </div>
    )
}

export default NuevaImpresion