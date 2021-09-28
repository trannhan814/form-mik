import { Formik, Form, Field, FieldArray } from 'formik';
import { Dispatch, SetStateAction } from 'react';
import * as yup from "yup"
import { foodsType } from '../../../App';
import { makeid } from '../../../helper';


const Index = ({ setFood, foods, setIsShowForm }: { setFood: Dispatch<SetStateAction<foodsType[]>>, foods: Array<foodsType>, setIsShowForm: React.Dispatch<React.SetStateAction<boolean>>  }) => {
    const handleFormSubmit = (value: any) => {
        setIsShowForm((isShowForm)=> !isShowForm)
        setFood(foods => {
            return [...foods, value]
        })
    }
    
    return (

        <Formik
            initialValues={{ name: '', img: '', description: '', toppics: [{id: makeid(10), name: '', count: 0}] }}
            validationSchema={yup.object().shape({
                name: yup.string().max(255, "ten dai ")
                    .required("name Required"),
                img: yup.string()
                    .required("ImageUrl Required"),
                description: yup.string().max(255, "ten dai")
                    .required("description Required"),
            })}

            onSubmit={handleFormSubmit}
        >
            {({ values, errors, touched }) => (
                <Form className="g-3">
                    <div className='mb-3'>
                        <label htmlFor="staticEmail2" className='form-label'>name</label>
                        <Field type="text" id="staticEmail2" className='form-control-plaintext border' name="name" placeholder="Enter name...." />
                        {errors.name && touched.name && <div style={{ color: "red" }}>{errors.name}</div>}
                    </div>

                    <div className='mb-3'>
                        <label htmlFor="imageURL" className='form-label'>imageURL</label>
                        <Field name="img" id="imageURL" className='form-control-plaintext border' placeholder="Enter ImageURL...." />
                        {errors.img && touched.img && <div style={{ color: "red" }}>{errors.img}</div>}
                    </div>

                    <div className='mb-3'>
                        {console.log("value.img", values.img)
                        }
                        {values.img ? <img src={values.img} alt="" sizes="" /> : null}
                    </div>

                    <div className='mb-3'>
                        <label htmlFor="imageURL" className='form-label'>Description</label>
                        <Field as='textarea' className='form-control' name="description" placeholder="Doe" />
                        {errors.description && touched.description && <div style={{ color: "red" }}>{errors.description}</div>}
                    </div>

                    <FieldArray
                        name="toppics"
                        render={arrayHelpers => (
                            <div>
                                {values.toppics && values.toppics.length > 0 ? (
                                    values.toppics.map((toppic, index) => (
                                        <div key={index}>
                                            <Field name={`toppics.${index}.name`} className='border ' />
                                            <Field name={`toppics.${index}.count`} className='border ' />
                                            <button
                                                type="button"
                                                onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                                            >
                                                -
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => arrayHelpers.insert(index, '')} // insert an empty string at a position
                                            >
                                                +
                                            </button>
                                        </div>
                                    ))
                                ) : (
                                    <button type="button" className='btn btn-success mb-3' onClick={() => arrayHelpers.push('')}>
                                        Add new topic
                                    </button>
                                )}
                            </div>
                        )}
                    />

                    <button type="submit" className='btn btn-success'>Submit</button>
                </Form>
            )}
        </Formik>
    )
}


export default Index