import React from "react";
import BestelFormulier from "./BestelFormulier";
import Button from "./Button"; 

export default function FormModal({showModal, handleClose}) {

    return (
        <React.Fragment>
            {showModal ? (
                <React.Fragment>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-90vw my-6 mx-auto sm:w-5/6 md:w-2/3 lg:w-1/2 max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            {/*header*/}
                            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                <h3 className="text-3xl font-semibold">
                                Modal Title
                                </h3>
                                <button
                                className="ml-auto bg-transparent border-0 text-black opacity-50 hover:opacity-100 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={handleClose}
                                >
                                    x            
                                </button>
                            </div>
                            {/*body*/}
                            <div className="relative p-6 flex-auto">
                                <BestelFormulier />
                            </div>
                            {/*footer*/}
                            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                <Button
                                    text={"Sluit"}
                                    btnOnClick={handleClose}
                                    form="order-form"
                                />
                                <input
                                    className=" bg-gold cursor-pointer text-white py-3 text-lg px-6 mr-6 rounded-full transform hover:scale-110 filter hover:brightness-125 transition duration-300 ease-in-out"
                                    type="submit"
                                    value="Verzend bestelling"
                                    form="order-form"
                                />
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </React.Fragment>
            ) : null}
        </React.Fragment>
    );
}
