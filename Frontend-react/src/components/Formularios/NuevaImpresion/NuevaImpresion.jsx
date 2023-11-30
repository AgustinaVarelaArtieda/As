import { Formik, Field, Form, ErrorMessage } from 'formik';
import axios from 'axios';


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

    return(
        <div>
            <Formik
            initialValues={{
                nombre: '',
                imagen: '',
                precioBase: 0,
                rellenoBase: 0,
                tiempoBase: 0,
                tamañoBase: {
                    x: 0,
                    y: 0,
                    z: 0
                },
                estado: true,
            }}

            validate={values => {
                const errors = {};
                if (!values.nombre) {
                    errors.nombre = 'Requerido';
                }
                if (!values.imagen) {
                    errors.imagen = 'Requerido';
                }
                if (!values.precioBase) {
                    errors.precioBase = 'Requerido';
                }
                if (!values.rellenoBase) {
                    errors.rellenoBase = 'Requerido';
                }
                if (!values.tiempoBase) {
                    errors.tiempoBase = 'Requerido';
                }
                if (!values.tamañoBase.x || !values.tamañoBase.y ||!values.tamañoBase.z) {
                    errors.tamañoBase = 'Requerido';
                }else if (values.tamañoBase.x<0 || values.tamañoBase.y<0 || values.tamañoBase.z<0) {
                    errors.tamañoBase = 'No puede ser negativo';
                }

                return errors;
            }}
            onSubmit={(values, {setSubmitting, resetForm})=>{
                //coso al back
                setTimeout(()=>{
                    alert(JSON.stringify(values, null, 2));
                    console.log(values);
                    setSubmitting(false);
                    //resetForm()
                    cargaDeImpresion(values)
                }, 400);
            }}
            >
            {({isSubmitting})=>(
                <Form>
                    <label htmlFor="nombre">Nombre</label>
                    <Field type="text" name="nombre" />
                    <ErrorMessage name='nombre' component='div'/>
                    <label htmlFor="imagen">Imagen</label>
                    <Field type="file" name="imagen" accept="image/*" encType="multipart/form-data"/>
                    <ErrorMessage name='imagen' component='div'/>
                    <label htmlFor="tamañoBase">Tamaño</label>
                    <label htmlFor="tamañoBase.x">x</label>
                    <Field type="number" name="tamañoBase.x" />
                    <label htmlFor="tamañoBase.y">y</label>
                    <Field type="number" name="tamañoBase.y" />
                    <label htmlFor="tamañoBase.z">z</label>
                    <Field type="number" name="tamañoBase.z" />
                    <ErrorMessage name='tamañoBase' component='div'/>
                    <label htmlFor="rellenoBase">RellenoBase</label>
                    <Field type="number" name="rellenoBase" />
                    <ErrorMessage name='rellenoBase' component='div'/>
                    <label htmlFor="tiempoBase">TiempoBase</label>
                    <Field type="number" name="tiempoBase" />
                    <ErrorMessage name='tiempoBase' component='div'/>
                    <label htmlFor="precioBase">precioBase</label>
                    <Field type="text" name="precioBase" />
                    <ErrorMessage name='precioBase' component='div'/>
                    <label htmlFor="estado">Disponible</label>
                    <Field type="checkbox" name="estado" />
                    <button type="submit" disabled={isSubmitting}>Submit</button>
                </Form>
            )}
            </Formik>
        </div>
    )
}

export default NuevaImpresion