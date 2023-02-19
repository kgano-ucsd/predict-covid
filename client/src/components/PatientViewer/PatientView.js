import { PaperClipIcon } from '@heroicons/react/20/solid'
import lungs1 from '../lungs1.jpg'


export default function View({patient}) {



    return <div className="min-h-full">


        <header className="bg-white shadow">
            <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold tracking-tight text-black">Patient Edwin</h1>
            </div>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
            {/* information */}
            <div className="sm:col-span-1 py-5 px-4 sm:px-6">
                <div>
                    <h3 className="text-lg font-medium leading-6 text-gray-900">Patient Information</h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>
                </div>
                <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                    <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">Full name</dt>
                            <dd className="mt-1 text-sm text-gray-900">Edwin</dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">Scanned For:</dt>
                            <dd className="mt-1 text-sm text-gray-900">COVID-19</dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">Sex</dt>
                            <dd className="mt-1 text-sm text-gray-900">Male</dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">Ethnicity</dt>
                            <dd className="mt-1 text-sm text-gray-900">East Asian</dd>
                        </div>
                        <div className="sm:col-span-2">
                            <dt className="text-sm font-medium text-gray-500">Doctor's Note</dt>
                            <dd className="mt-1 text-sm text-gray-900">
                                Edwin presented to the doctor's office with a severe cough and showed signs of inflammation in the lungs. 
                                We took CT Scans, and after corroborating the results with a predictive AI model, determined that he had COVID-19.
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
            {/* <div className="divider lg:divider-horizontal" /> */}
            {/* ct scans */}
            <div className="sm:col-span-1 py-5 px-4 sm:px-6">
                <div className="bg-base-100 border border-gray-200 py-4">
                    <h2 className="card-title text-xl px-4">CT Scans</h2>
                    <figure className="px-10 pt-10">
                        <img src={lungs1} alt="Shoes" className="rounded-xl" />
                    </figure>
                </div>
            </div>

        </div>
    </div>;
}