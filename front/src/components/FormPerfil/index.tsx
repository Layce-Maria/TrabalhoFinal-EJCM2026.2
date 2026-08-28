

import './FormPerfil.css'

export  function FormPerfil(){
    return(
        <form action="">
                    <h1>Personal Information</h1>
                    <div className="in_Form">
                        <div className="divForms">
                            <div className="labelInput">
                                <label htmlFor="">First Name</label>
                                <input type="text" id="fname" name="fname" value="John" />
                            </div>
                            
                            <div className="labelInput">
                                <label htmlFor="">First Name</label>
                                <input type="text" id="fname" name="fname" value="John" />
                            </div>
                        
                            <div className="labelInput">
                                <label htmlFor="">First Name</label>
                                <input type="date" id="fname" name="fname" value="John" />
                            </div>
                        </div>
                        <div className="divForms">
                            
                            <div className="labelInput">
                                <label htmlFor="">First Name</label>
                                <input type="text" id="fname" name="fname" value="John" />
                            </div>
                            <div className="labelInput">
                                <label htmlFor="">First Name</label>
                                <input className="inputDate" type="text" id="fname" name="fname" value="John" />
                            </div>
                            <div className="labelInput">
                                <label htmlFor="">First Name</label>
                                <input type="text" id="fname" name="fname" value="John" />
                            </div>
                            
                        </div>
                    </div>
                    <div className="divButtom">
                        <button className='ButtonSave'>Save Changes

                        </button>
                        <button className='ButtonCancel'>Cancel

                        </button>
                    </div>
                </form>
    )
}