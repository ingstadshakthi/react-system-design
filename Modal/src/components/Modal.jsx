import React from 'react'

export default function Modal({ children, closeHandler }) {
    function handleModalClose(e) {
        e.stopPropagation();
        closeHandler();
    }
    return (
        <div className='fixed flex justify-center items-center z-[1] h-full w-full bg-slate-300/95 overflow-auto p-24 top-0 '
            onClick={handleModalClose}>
            <div className="relative w-3/4 p-5 bg-slate-100 rounded-2xl border border-slate-300">
                <button className="absolute top-1 right-1 bg-gray-300 w-8 h-8 rounded-full flex justify-center items-center" onClick={handleModalClose}>X</button>
                {children}
            </div>
        </div>
    )
}
