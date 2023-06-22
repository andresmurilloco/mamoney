"use client"
import React, { useState } from 'react';

//Icons
import { ADD_ICON, CLOSE_ICON } from '../icons'

//Styles
import '../css/modal.css'

interface Props{
  modal: boolean;
  setModal: Function;
}

export const TransactionModal = (props:Props) => {
  const {modal, setModal} = props;
  
  return (
    <>
    <div className='modal-shadow' onClick={()=>{setModal(!modal)}}></div>
      <div className='form-container'>
        <form>
          <div className='transaction-options-container'>
            <div className='expense-transaction'>
              <input type="radio" name='transaction-type' id='expense' defaultChecked/>
              <label htmlFor='expense'>Expense</label>
            </div>
            <div className='income-transaction'>
              <input type="radio" name='transaction-type' id='income'/>
              <label htmlFor='income'>Income</label>
            </div>
            <div className='transfer-transaction'>
              <input type="radio" name='transaction-type' id='transfer'/>
              <label htmlFor='transfer'>Transfer</label>
            </div>
          </div>

          {/*Input area*/}
          <div className='input-container'>
            {/* This input is list */}
            <label htmlFor='category'>Category: </label>
            <input type='text' id='category'></input>
          </div>
          <div className='input-container'>
            <label htmlFor='amount'>Amount: </label>
            <input type='number' id='amount' min={1}></input>
          </div>
          <div className='input-container'>
            {/* This input is list */}
            <label htmlFor='bank'>Bank: </label>
            <input type='text' id='bank'></input>
          </div>
          <div className='input-container'>
            <label htmlFor='date'>Date: </label>
            <input type='text' id='date'></input>
          </div>
          <div className='input-container'>
            <label htmlFor='name'>Name: </label>
            <input type='text' id='name'></input>
          </div>
          <div className='buttons-container'>
            <button className='save-button'>Save</button>
            <button className='cancel-button'>Cancel</button>
          </div>
        </form>
        <button>Recurrent (Displays additional info below)</button>
        <button className="modal-button" onClick={()=>setModal(!modal)}>{CLOSE_ICON}</button>
      </div>
    </>
  )
}
