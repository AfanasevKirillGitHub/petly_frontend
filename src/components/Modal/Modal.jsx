// import { useEffect, useState } from "react";
// import { createPortal } from "react-dom";
// import { RegisterForm1 } from "../../components/RegisterForm/RegisterForm1/RegisterForm1";
// import { RegisterForm2 } from "../../components/RegisterForm/RegisterForm2/RegisterForm2";



// const modalRoot = document.querySelector('#modal-root')

// export const Modal = () => {

//     const [showModal, setShowModal] = useState(false);


//     const [Step1, setStep1] = useState(true);
//     const [dataForm1, setDataForm1] = useState({}) 

//     const toggleForm = () => {
//         setStep1(!Step1)       
//     }

//     const getDataForm1 = (data) => {
//         setDataForm1(data)
//     }


//     useEffect(() => {
//         const handleKeyDown = e => { 
//         if (e.code === 'Escape') { 
//             // onToggle();
//         }
//     }
//         window.addEventListener('keydown', handleKeyDown)
//         return () => window.removeEventListener('keydown', handleKeyDown)
//     }, []);
    
//     const toggleModal = (e) => {
//         setShowModal(!showModal)       
//     }

//     const handleBackDropClick = e => { 
//         if (e.currentTarget === e.target) { 
//             // onToggle();
//         }
//     }


//     return createPortal(<div  onClick={handleBackDropClick}>
//     {Step1 ? <RegisterForm1 getData={getDataForm1} onToggle={toggleForm}/> : <RegisterForm2 dataForm1={dataForm1} onToggle={toggleForm}/>}    </div>, modalRoot)
// }

// // }, [onToggle]);