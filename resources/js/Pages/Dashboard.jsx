import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Welcome</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="container">
                                <h1 className="font-semibold text-xl text-gray-800 leading-tight">Welcome to Financial Data Connector</h1>
                                <p>
                                    This project is designed to connect to an external API using Laravel and React.js. The API in use is provided 
                                    by <a 
                                        href="https://financialmodelingprep.com/developer/docs/" 
                                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                        > Financial Modeling Prep</a>, and it retrieves financial information which will be displayed in a table.
                                </p>
                                <br/>
                                <h2 className="text-lg font-medium text-gray-900">Features:</h2>
                                <div id="nav">
                                    <ul style={{ listStyleType: 'circle' }}>
                                        <li>Connects to Financial Modeling Prep API</li>
                                        <li>Renders financial information in a table</li>
                                        <li>Option to view Company Profile and Company Quote</li>
                                        <li>Utilizes Laravel cache for improved performance</li>
                                        <li>User registration system</li>
                                        <li>Customizable API parameters</li>
                                    </ul>
                                </div>
                                
                                <p className="footer">
                                    For more information and to explore additional features, please reach me out at <a href="mailto:edwarcarranza@gmail.com">edwarcarranza@gmail.com</a>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
