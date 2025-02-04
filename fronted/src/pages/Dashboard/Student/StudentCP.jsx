import React from 'react'
import useUser from '../../../hooks/useUser';
import WelcomwImg from '../../../assets/dashboard/urban-welcome.svg';
import { Link } from 'react-router-dom';
import { ToastContainer , toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Slide } from 'react-toastify';

const StudentCP = () => {
    const {currentUser}=useUser();
    // const notify = () => toast.apply({
    //     position: "top-right",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     transition: Slide,
    //     progress: undefined,
    //     });
    
  return (
    
    <div className='h-screen flex justify-center items-center p-2 ml-64'>
        
        <div>
        {/* <button onClick={notify}>Notify!</button> */}
        {/* <ToastContainer /> */}
      </div>
  
      <div>
        <div>
            <div>
                <img onContextMenu={e => e.preventDefault()}
                src={WelcomwImg} alt="" className='h-[200px]' placeholder='blur'/>
            </div>
            <h1 className='text-4xl capitalize font-bold text-center'> 
               Hi <span className='text-secondary items-stretch'>{currentUser?.name}, </span> Welcome to your dashboard
            </h1>
            <p className='text-center text-base py-3'>
                Hey Dear, This is a simple dashboard home.
                 Here you can see your enrolled classes, your progress and much more.
            </p>

            <div className='text-center'>
                <h2 className='font-bold'> You jump any page you want from here .</h2>
                <div className='flex items-center justify-center my-4 gap-3 flex-wrap'>
                    <div className="border border-secondary rounded-lg hover:bg-secondary hover:text-white duration-200 px-2 py-1">
                        <Link  to='/dashboard/enrolled-class'>My Enroll</Link>
                    </div>
                    <div className="border border-secondary rounded-lg hover:bg-secondary hover:text-white duration-200 px-2 py-1">
                        <Link to='/dashboard/my-selected'>My Selected</Link>
                    </div>
                    <div className="border border-secondary rounded-lg hover:bg-secondary hover:text-white duration-200 px-2 py-1">
                        <Link to='/dashboard/my-payments'>Payments History</Link>
                    </div>
                    <div className="border border-secondary rounded-lg hover:bg-secondary hover:text-white duration-200 px-2 py-1">
                        <Link to='/dashboard/apply-instructor'>Join as a Instructor</Link>
                    </div>


                </div>
            </div>

        </div>
      </div>
    </div>
  )
}

export default StudentCP
