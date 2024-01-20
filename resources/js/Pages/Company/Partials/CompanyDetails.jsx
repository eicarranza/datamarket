import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';

export default function CompanyDetails({ company }) {

    return (
        <section className='max-w-xl'>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Company Profile </h2>
                <br/>
            </header>

                <div>
                    <InputLabel htmlFor="name" value="Symbol" />

                    <TextInput
                        id="name"
                        className="mt-1 block w-full"
                        value={company.symbol}
                        disabled
                    />
                </div>
                <div>
                    <InputLabel htmlFor="name" value="Company Name" />

                    <TextInput
                        id="name"
                        className="mt-1 block w-full"
                        value={company.companyName}
                        disabled
                    />
                </div>

                <div>
                    <InputLabel htmlFor="base_url" value="Website" />

                    <TextInput
                        id="base_url"
                        className="mt-1 block w-full"
                        value={company.website}
                        disabled
                    />
                </div>

                <div>
                    <InputLabel htmlFor="apikey" value="Industry" />

                    <TextInput
                        id="apikey"
                        className="mt-1 block w-full"
                        value={company.industry}
                        disabled
                    />
                </div>

                <div>
                    <InputLabel htmlFor="companies_list_link" value="Description" />

                    <TextInput
                        id="companies_list_link"
                        className="mt-1 block w-full"
                        value={company.description}
                        disabled
                    />
                </div>

                <div>
                    <InputLabel htmlFor="profile_link" value="Currency" />

                    <TextInput
                        id="profile_link"
                        className="mt-1 block w-full"
                        value={company.currency}
                        disabled
                    />
                </div>

                <div>
                    <InputLabel htmlFor="quote_link" value="Exchange" />

                    <TextInput
                        id="quote_link"
                        className="mt-1 block w-full"
                        value={company.exchange}
                        disabled
                    />
                </div>
                <div>
                    <InputLabel htmlFor="limit" value="Sector" />

                    <TextInput
                        id="limit"
                        className="mt-1 block w-full"
                        value={company.sector}
                        disabled
                    />
                </div>
                <div>
                    <InputLabel htmlFor="limit" value="Full Time Employees" />

                    <TextInput
                        id="limit"
                        className="mt-1 block w-full"
                        value={company.fullTimeEmployees}
                        disabled
                    />
                </div>
                <div>
                    <InputLabel htmlFor="limit" value="Phone" />

                    <TextInput
                        id="limit"
                        className="mt-1 block w-full"
                        value={company.phone}
                        disabled
                    />
                </div>
                <div>
                    <InputLabel htmlFor="limit" value="Address" />

                    <TextInput
                        id="limit"
                        className="mt-1 block w-full"
                        value={company}
                        disabled
                    />
                </div>
                
                <div>
                    <InputLabel htmlFor="limit" value="CEO" />

                    <TextInput
                        id="limit"
                        className="mt-1 block w-full"
                        value={company.ceo}
                        disabled
                    />
                </div>
                <div>
                    <InputLabel htmlFor="limit" value="Is Actively Trading?" />

                    <TextInput
                        id="limit"
                        className="mt-1 block w-full"
                        value={company.isActivelyTrading}
                        disabled
                    />
                </div>
        </section>
    );
}