import React, { useState ,useEffect} from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateLog } from '../../actions/logActions';
import TechSelectOptions from '../techs/TechSelectOptions';

const EditlogModal = ({current,updateLog}) => {

    const [message,setMessage]= useState('');
    const [attention,setAttention]= useState(false);
    const [tech,setTech]= useState('');

    useEffect(()=>{
        if(current){
            setMessage(current.message);
            setAttention(current.attention);
            setTech(current.tech);
        }
    },[current]);

    const onSubmit=()=>{

        if(message === '' || tech === '')
        {
            M.toast({html: 'Please Enter a message and tech'});
        }

        else{

          const updlog={
              id: current.id,
              message,
              attention,
              tech,
              date: new Date()
          };
            
          updateLog(updlog);
          M.toast({html:`Log Updated by ${tech}`});

            //Clear Fields
            setMessage('');
            setTech('');
            setAttention(false);
        }
    }
  return (
    <div id='edit-log-modal' className='modal' style={{modalStyle}}>
        <div className="modal-content">
            <h6>Enter System Log</h6>
            <div className="row">
                <div className="input-field">
                    <input type="text" name='message' value={message} onChange={e=>setMessage(e.target.value)}/>
                
                </div>
            </div>

            <div className="row">
                <div className="input-field">
                    <select name="tech" value={tech} className='browser-default' onChange={e=>setTech(e.target.value)}>
                    <option value="" disabled>Select Technician</option>
                   <TechSelectOptions/>
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

EditlogModal.propTypes={
    current: PropTypes.object,
    updateLog:PropTypes.func.isRequired
}

const mapStateToProps= state=>({
    current: state.log.current
})


export default connect(mapStateToProps,{updateLog})(EditlogModal);