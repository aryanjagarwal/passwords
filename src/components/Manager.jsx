import React, { useRef } from 'react'

const Manager = () => {

    const ref = useRef();

    const showPassword = () => {
        alert("show password");
        if (ref.current.src.includes("/icons/eye-cross.png")) {
            ref.current.src = "/icons/eye.png";
            ref.current.width = 40;
        } else {
            ref.current.src = "/icons/eye-cross.png";
            if (ref.current.src.includes("/icons/eye-cross.png")){
                ref.current.width = 30;
            } else {
                ref.current.width = 40;
            }
        }
    }

    return (
        <>
            <div className="absolute inset-0 -z-10 h-full w-full bg-green-100 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
                <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]">

                </div>
            </div>
            <div className="mycontainer">
                <h1 className='text-4xl text font-bold text-center'>
                    <span className='text-green-500'> &lt; </span>
                    Pass
                    <span className='text-green-500'>WORLDS/&gt; </span>
                </h1>
                <p className='text-green-900 text-lg text-center'>Your own passwords Manager</p>
                <div className='flex flex-col p-4 text-black gap-7 items-center'>
                    <input placeholder='Enter website URL' className='rounded-full border border-green-400 w-full p-4 py-1' type="text" name="" id="" />
                    <div className="flex w-full justify-between gap-8">
                        <input placeholder='Enter username' className='rounded-full border border-green-400 w-full p-4 py-1' type="text" name="" id="" />
                        <div className="relative">
                        <input placeholder='Enter password' className='rounded-full border border-green-400 w-full p-4 py-1' type="text" name="" id="" />
                        <span className='absolute right-[1px] top-[2px] cursor-pointer' onClick={showPassword}>
                            <img ref={ref}  className='p-1' width={40} src="/icons/eye.png" alt="eye" />
                        </span>
                        </div>
                        
                    </div>
                    <button className='flex justify-center items-center gap-3 bg-green-400 hover:bg-green-300 rounded-full px-6 py-2 w-fit border border-green-700'>
                        <lord-icon
                            src="https://cdn.lordicon.com/jgnvfzqg.json"
                            trigger="hover" >
                        </lord-icon>
                        Add Password
                    </button>
                </div>
            </div>
        </>
    )
}

export default Manager