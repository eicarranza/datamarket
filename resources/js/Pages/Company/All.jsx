import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Table from '@/Components/Table';

export default function All({auth, companies}) {
    
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Companies</h2>}
        >
            <Head title="Companies " />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <Table 
                            data={companies} 
                            primary="Symbol"  
                            quote="company.quote"
                            action="company.edit" />
                        <a 
                            href="https://financialmodelingprep.com/developer/docs/" 
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                Data provided by Financial Modeling Prep
                        </a>
                    </div>
                    
                </div>
            </div>
        </AuthenticatedLayout>
    );
}