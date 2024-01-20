import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import CompanyQuote from "@/Pages/Company/Partials/CompanyQuote";


export default function Edit({auth, company}) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header= {<h2 className="font-semibold text-xl text-gray-800 leading-tight">Company Quote</h2>}
        >
            <Head title="Companies" />

            <div className="py-6">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <CompanyQuote
                            company={company}
                        />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}