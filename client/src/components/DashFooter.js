import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse } from "@fortawesome/free-solid-svg-icons"

const DashFooter = () => {

    const navigate = useNavigate();
    const { pathname } = useLocation();

    const onGoHomeClicked = () => navigate('/dash');

    let onGoHomeButton = null;

    if(pathname !== '/dash') {
        onGoHomeButton = (
            <button
                title=""
                onClick={onGoHomeClicked}
            >
                <FontAwesomeIcon icon={faHouse}/>
            </button>
        )
    }
    const content = (
        <footer>
            <hr></hr>
            <div className='flex flex-row justify-between mt-5'>
                {onGoHomeButton}
                <p className='p-2'>Current User:  <span className='font-bold'>Tharushaa</span></p>
                <p className='p-2'>Status:  <span className='font-bold'>Active</span></p>
            </div>
        </footer>
    )
  return content
}
export default DashFooter