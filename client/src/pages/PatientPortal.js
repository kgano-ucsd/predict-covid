import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import ScanCard from '../components/ScanCard'
import PatientView from '../components/PatientViewer/PatientView'
import PatientViewer from '../components/PatientViewer/PatientViewer'



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


export default function PatientPortal() {
    return (
        <>
            {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
            <div className="min-h-full">


                <header className="bg-white shadow">
                    <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-bold tracking-tight text-black">Patient Dashboard</h1>
                    </div>
                </header>
                <main className="p-5">
                    <div className="flex h-screen">
                        <div className="w-1/2 bg-gray-300 m-2">

                            <div className="card w-96 bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <h2 className="card-title">Shoes!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                </div>
                                <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                            </div>


                        </div>
                        <div className="w-1/2 bg-gray-500 m-2">Div 2</div>
                    </div>


                </main>
            </div>
        </>
    )
}
