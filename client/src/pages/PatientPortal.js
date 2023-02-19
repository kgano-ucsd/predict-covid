import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import ScanCard from '../components/ScanCard'
import PatientView from '../components/PatientViewer/PatientView'
import PatientViewer from '../components/PatientViewer/PatientViewer'
import LLM from '../components/LLM'
import React, {useState} from 'react';



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


export default function PatientPortal() {
    const [selected, setSelected] = useState(patients[0])
    const [imgCT, setImg] = useState('https://thumbs.dreamstime.com/b/golden-retriever-dog-21668976.jpg')

    const testReq = () => {
        const packet = {
            id: 5
        };

        setImg("./database/patient5/26.png");
    };

    const sample_2 = "./database/patient5/";

    const selectChange = (event) => {
        console.log(event);
        console.log(selected);
        setSelected(event);




    };


    return (
        <>
        
         <div className="">
                  <h1 className="text-2xl font-bold text-black">Patient Dashboard</h1>
                <div className="">
                    <p className="">This is a demonstration of the portal for a patient.</p>

                </div>
                <div className="w-[50%] overflow-hidden">
                    <div className="border-gray-200 border rounded-md ">
                        <div className="bg-base-100">
                            <div className="">
                                <h3 className="text-md font-medium text-gray-900">Your Scan Results</h3>
                                <p className=" text-sm text-gray-500">Personal details and application.</p>
                            </div>
                                <img className="rounded-md px-4 " src={imgCT} />
                                <input type="checkbox" className="toggle toggle-xs"  />
                            <div className="flex w-[50%] gap-0 border-gray-200 ">
                                <div className="flex-row">
                                    <div className="w-fit">
                                        <span className="text-lg font-medium text-black inline-block">Doctor's Note: </span>
                                        <span className="text-sm text-black inline-block">Edwin presented to the doctor's office with a severe cough and showed signs of inflammation in the lungs. 
                                We took CT Scans, and after corroborating the results with a predictive AI model, determined that he had COVID-19.</span>
                                    </div>
                                    <div className="w-fit">
                                        <span className="text-lg font-medium text-black inline-block">Name</span>
                                        <span className="text-sm text-black inline-block">Margot Foster</span>
                                    </div>
                                    <div className="w-fit ">
                                        <span className="text-lg font-medium text-black inline-block">Age</span>
                                        <span className="text-sm text-black inline-block">Backend Developer</span>
                                    </div>
                                    <div className="w-fit ">
                                        <span className="text-lg font-medium text-black inline-block">Ethnicity</span>
                                        <span className="text-sm text-black inline-block">margotfoster@example.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div> 
            
             <LLM />
        </>
    )
}
