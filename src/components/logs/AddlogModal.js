import React, { useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'

const AddlogModal = () => {

    const [message,setMessage]= useState('');
    const [attention,setAttention]= useState(false);
    const [tech,setTech]= useState('');

    const onSubmit=()=>{

        if(message === '' || tech === '')
        {
            M.toast({html: 'Please Enter a message and tech'});
        }

        else{

            console.log(message,attention,tech);

            //Clear Fields
            setMessage('');
            setTech('');
            setAttention(false);
        }
    }
  return (
    <div id='add-log-modal' className='modal' style={{modalStyle}}>
        <div className="modal-content">
            <h6>Enter System Log</h6>
            <div className="row">
                <div className="input-field">
                    <input type="text" name='message' value={message} onChange={e=>setMessage(e.target.value)}/>
                    <label htmlFor="message" className='active'> Log Message</label>
                </div>
            </div>

            <div className="row">
                <div className="input-field">
                    <select name="tech" value={tech} className='browser-default' onChange={e=>setTech(e.target.value)}>
                    <option value="" disabled>Select Technician</option>
                    <option value="Hardik">Hardik</option>
                    <option value="Rana">Rana</option>
                    <option value="Manan">Manan</option>
                    </select>
                </div>
            </div>

            <div className="row">
                <div className="input-field">
                    <p>
                        <label> 
                            <input type="checkbox" className='filled-in' checked={attention} value={attention} onChange={e=>setAttention(!attention)}/>
                            <span>Needs Attention</span>
                        </label>
                    </p>
                </div>
            </div>
        </div>
        <div className="modal-footer" style={{marginTop:'-30px'}}>
            <a href="!#" onClick={onSubmit} className='modal-close waves-effect blue waves-light btn' >Enter</a>
        </div>
    </div>
  )
}

const modalStyle={
     width:'100%',
     height:'100%'
};



export default AddlogModal