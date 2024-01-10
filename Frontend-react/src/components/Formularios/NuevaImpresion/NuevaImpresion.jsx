import { useFormik } from 'formik';
import axios from 'axios';

import * as yup from 'yup';

import { TextField, Button, Select, MenuItem, FormControl, InputLabel, FormControlLabel, Switch } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

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
    async function cargaDeImpresion(values){
        
        try {
            const response=await axios.post("/impresiones", values)
            console.log("Se ha creado una impresión")
            console.log(response)

        } catch (error) {
            console.log(error)
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
                //coso al back
                setTimeout(()=>{
                    alert(JSON.stringify(values, null, 2));
                    console.log(values);
                    cargaDeImpresion(values)
                    
                }, 400);
        },
        });
    

    return(
        <div >          
                <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
                    <TextField
                    id="nombre"
                    name="nombre"
                    label="Nombre"
                    value={formik.values.nombre}
                    onChange={formik.handleChange}
                    error={formik.touched.nombre && Boolean(formik.errors.nombre)}
                    helperText={formik.touched.nombre && formik.errors.nombre}
                    />
                    <Button component="label" variant='contained' startIcon={<CloudUploadIcon/>}>Cargar imagen</Button>
                    {/* <label htmlFor="imagen">Imagen</label>
                    <Field type="file" name="imagen" accept="image/*" encType="multipart/form-data"/>
                    <ErrorMessage name='imagen' component='div'/>
                    <label htmlFor="tamañoBase">Tamaño</label> */}
                    <TextField
                    id="tamañoBase.x"
                    name="tamañoBase.x"
                    label="X"
                    value={formik.values.tamañoBase.x}
                    onChange={formik.handleChange}
                    error={formik.touched.tamañoBase?.x && Boolean(formik.errors.tamañoBase?.x)}
                    helperText={formik.touched.tamañoBase?.x && formik.errors.tamañoBase?.x}
                    />
                    <TextField
                    id="tamañoBase.y"
                    name="tamañoBase.y"
                    label="Y"
                    value={formik.values.tamañoBase.y}
                    onChange={formik.handleChange}
                    error={formik.touched.tamañoBase?.y && Boolean(formik.errors.tamañoBase?.y)}
                    helperText={formik.touched.tamañoBase?.y && formik.errors.tamañoBase?.y}
                    />
                    <TextField
                    id="tamañoBase.z"
                    name="tamañoBase.z"
                    label="Z"
                    value={formik.values.tamañoBase.z}
                    onChange={formik.handleChange}
                    error={formik.touched.tamañoBase?.z && Boolean(formik.errors.tamañoBase?.z)}
                    helperText={formik.touched.tamañoBase?.z && formik.errors.tamañoBase?.z}
                    />
                    <TextField
                    id="tiempoBase"
                    name="tiempoBase"
                    label="Duración"
                    value={formik.values.tiempoBase}
                    onChange={formik.handleChange}
                    error={formik.touched.tiempoBase && Boolean(formik.errors.tiempoBase)}
                    helperText={formik.touched.tiempoBase && formik.errors.tiempoBase}
                    />
                    <TextField
                    id="precioBase"
                    name="precioBase"
                    label="Precio"
                    value={formik.values.precioBase}
                    onChange={formik.handleChange}
                    error={formik.touched.precioBase && Boolean(formik.errors.precioBase)}
                    helperText={formik.touched.precioBase && formik.errors.precioBase}
                    />
                    <FormControl>
                    <InputLabel>Relleno</InputLabel>
                    <Select
                    id="rellenoBase"
                    name="rellenoBase"
                    label="Relleno"
                    value={formik.values.rellenoBase}
                    onChange={formik.handleChange}
                    error={formik.touched.rellenoBase && Boolean(formik.errors.rellenoBase)}
                    helperText={formik.touched.rellenoBase && formik.errors.rellenoBase}
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
                    <FormControlLabel value={formik.values.estado}
                        control={<Switch 
                        name="estado"
                        onChange={formik.handleChange}
                        checked={formik.values.estado}/>}

                        label="Disponible"
                        labelPlacement="end"
                    />
                        
                    </FormControl>
                    <Button type="submit">Submit</Button>
                    <Button type="reset">Reset</Button>
                </form>
        </div>
    )
}

export default NuevaImpresion