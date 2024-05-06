import { Button } from "@chakra-ui/button";
import { useForm } from 'react-hook-form';
import { FormControl, FormErrorMessage, FormLabel, Input, Stack, chakra } from "@chakra-ui/react"
import { useFrappeCreateDoc } from "frappe-react-sdk";



interface ContactFormFields {
  name: string,
  first_name: string,
  last_name: string,
  email_id: string,

}



const ContactForm = () => {
 

  

  const { register, handleSubmit, formState: {errors}} = useForm<ContactFormFields>()

  const { createDoc, loading, error, reset } = useFrappeCreateDoc()

 


  const onSubmit = (data: ContactFormFields) => {
    console.log(data)
    createDoc('Contact', data)
    
    
  }
  

  


  return (
    <div>
        <chakra.form onSubmit={handleSubmit(onSubmit)}>
      <Stack>
          <FormControl isInvalid={!!errors.first_name}>
                <FormLabel>First Name</FormLabel>
                <Input type='text' {...register('first_name', {
                  required: "First Name is Required",
                  minLength: {
                    value: 3,
                    message: "First Name Min length is 3 Characters"
                  }
                })} />
                <FormErrorMessage>{errors.first_name?.message}</FormErrorMessage>
                
               
                </FormControl>
                <FormControl  isInvalid={!!errors.last_name}>
                <FormLabel>Last Name</FormLabel>
                <Input type='text' {...register('last_name', {
                  required: "Last Name is Required",
                  maxLength: 20,
                  minLength: {
                    value: 3,
                    message: "First Name Minimum is 3 Characters"
                  }
                })} />
                 <FormErrorMessage>{errors.last_name?.message}</FormErrorMessage>
                
                </FormControl>
                
                <FormControl isInvalid={!!errors.email_id}>
                <FormLabel>Email Address</FormLabel>
                <Input type='text' {...register('email_id', {
                  required: "Email is Required",
                  maxLength: 20,
                  minLength: {
                    value: 5,
                    message: "First Name Min length is 5 Characters"
                  }
                })} />
                 <FormErrorMessage>{errors.email_id?.message}</FormErrorMessage>
                
                
                </FormControl>
                
          </Stack>
          <br/>
              <Button isLoading={loading} type="submit" colorScheme='blue'>Submit</Button>
          </chakra.form>
    </div>



  )
}

export default ContactForm 