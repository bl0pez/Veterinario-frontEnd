import { useState } from 'react';

export const useForm = ( initialForm = {} ) => {
  
    const [ formState, setFormState ] = useState( initialForm );

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    const onSetFormState = ( form ) => {
        setFormState( form );
    }


    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        onSetFormState,
    }
}