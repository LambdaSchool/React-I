import React from 'react';
import Header from '../Header/Header';
import './InputContainer.css';
import NewItemField from '../NewItemField/NewItemField';


const InputContainer = props =>{
    return (
        <div className='input-container'>
            <Header headerText='Add New Item' />
            <NewItemField></NewItemField>
        </div>
    )
}

export default InputContainer;