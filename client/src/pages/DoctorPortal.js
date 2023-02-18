import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import ScanCard from '../components/ScanCard'
import PatientView from '../components/PatientViewer/PatientView'
import PatientViewer from '../components/PatientViewer/PatientViewer'
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}




export default function Example() {
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
                        <h1 className="text-3xl font-bold tracking-tight text-black">Doctor Dashboard</h1>
                    </div>
                </header>
                <main>



                    <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                        <div className="flex gap-4">
                            <div className="form-control">
                                <div className="input-group">
                                    <input type="text" placeholder="Search Patients..." className="input input-bordered" />
                                    <button className="btn btn-square">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                    </button>
                                </div>
                            </div>

                            <button className="btn btn-outline btn-primary">New Patient</button>



                        </div>

                        <div className="px-4 py-6 sm:px-0">
                            <div className="h-96 rounded-lg border-2 border-solid border-gray-200">
                                <div className="overflow-x-auto">
                                    <table className="table w-full">

                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Age</th>
                                                <th>Sex</th>
                                                <th>Ethnicity</th>
                                                <th>View Scan</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            <tr>
                                                <td>Cy Ganderton</td>
                                                <td>24</td>
                                                <td>Male</td>
                                                <td>Caucasian</td>
                                                <td><div className="btn-link"> View</div></td>
                                            </tr>

                                            <tr>
                                                <td>Hart Hagerty</td>
                                                <td>31</td>
                                                <td>Male</td>
                                                <td>East Asian</td>
                                                <td><div className="btn-link"> View</div></td>
                                            </tr>

                                            <tr>
                                                <td>Sarah Lee</td>
                                                <td>85</td>
                                                <td>Female</td>
                                                <td>African American</td>
                                                <td><div className="btn-link"> View</div></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>

                        </div>
                        {/* /End replace */}
                        <p></p>
                        <div className="px-4 sm:px-0">
                            <div className="rounded-lg border-2 border-solid border-gray-200">
                                <PatientView />
                            </div>

                        </div>


                    </div>
                </main>
            </div>
        </>
    )
}
