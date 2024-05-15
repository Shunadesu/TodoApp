import React, { Children } from 'react'
import icons from '../icons/icons';

interface IShowProps {
    isShow: boolean;
    setIsShow: (value: boolean) => void;
    children: React.ReactNode
}


const Modal: React.FC<IShowProps> = ({ isShow, setIsShow, children }) => {

    const { MdClose } = icons

    return (
        <div>
            {
                isShow === true
                    ?
                    <div>
                        <div className='fixed w-full h-full top-0 left-0 bg-black opacity-40 z-[98]'></div>
                        <div className="fixed top-0 left-0 w-full h-[400px] justify-center flex z-[99]">
                            <div className="modal-box">
                                {children}
                                <div className="absolute top-4 right-4">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button
                                            onClick={() => setIsShow(!isShow)}
                                            className="btn"><MdClose size={18} /></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>


                    :

                    <div></div>
            }
        </div>
    )
}

export default Modal