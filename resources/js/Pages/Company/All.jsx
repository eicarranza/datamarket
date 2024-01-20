import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import PrimaryButton from '@/Components/PrimaryButton';
import { Head } from '@inertiajs/react';
import Table from '@/Components/Table';
import { useForm } from '@inertiajs/react';
import { useState } from 'react';

const columns = [
    'name',
    'currency',
    'stockExchange',
]
export default function All({auth, companies, dataprovider}) {
    const { data, setData } = useForm(companies);
    const [args, setArgs] = useState('');
    // const [data, setData] = useState('');

    const handleChange = (event) => {
        // 👇 Get input value from "event"
        setArgs(event.target.value);
      };
    
    const submit = (e) => {
        e.preventDefault();
        console.log(args);
            fetch(route('company.search', args), {
                headers: { Accept: 'application/json' },
            }).then(response => response.json()).then(json => {
            // }).then(response => response).then(json => {
                setData(data, json['args']);
                console.log(data)
                console.log(json['args'])
                
            })
    };

    
    
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Companies</h2>}
        >
            <Head title="Companies " />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <form onSubmit={submit} className="mt-6 space-y-6">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="relative flex items-center mt-13 md:mt-0 table-top-search">
                            <input 
                                type="text" 
                                id="search"
                                name="search" 
                                className="text-xs py-2 h-10 px-4 pl-6 w-52 md:w-auto focus:outline-none leading-9 tracking-wide 
                                    text-gray-700 border border-gray-300 bg-gray-100 rounded-lg  "
                                placeholder="SEARCH"
                                onChange={handleChange}/>
                            <div className="flex items-center gap-4">
                                <PrimaryButton>Search</PrimaryButton>
                            </div>
                        </div>
                        <br/>
                        <Table 
                            items={data} 
                            columns={columns} 
                            primary="Symbol"  
                            quote="company.quote"
                            action="company.edit"></Table>
                        <h1>{dataprovider}</h1>
                        <a 
                            href="https://financialmodelingprep.com/developer/docs/" 
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                Data provided by Financial Modeling Prep
                        </a>
                    </div>
                    
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}