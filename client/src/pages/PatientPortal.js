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
                <main>
                    <div class="flex h-screen">
                        <div class="m-auto">
                            <div class="block">
                                DIV 1
                            </div>
                            <div class="block">
                                DIV 2
                            </div>
                        </div>
                    </div>


                </main>
            </div>
        </>
    )
}
