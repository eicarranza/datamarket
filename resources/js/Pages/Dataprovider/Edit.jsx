import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import UpdateDataproviderForm from "@/Pages/Dataprovider/Partials/UpdateDataproviderForm.jsx";


export default function Edit({auth, provider}) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Company Profile</h2>}
        >
            <Head title="Data Provider" />
              
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <UpdateDataproviderForm
                            dataprovider={provider}
                        />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}