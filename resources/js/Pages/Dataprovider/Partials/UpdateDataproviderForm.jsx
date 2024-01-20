import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Link, useForm, usePage } from '@inertiajs/react';
import { Transition } from '@headlessui/react';

export default function UpdateDataproviderForm({ dataprovider}) {

    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        id: dataprovider.id,
        name: dataprovider.name,
        base_url: dataprovider.base_url,
        apikey: dataprovider.apikey,
        companies_list_link: dataprovider.companies_list_link,
        profile_link: dataprovider.profile_link,
        quote_link: dataprovider.quote_link,
        limit: dataprovider.limit,
        api_query: dataprovider.api_query,
    });

    const submit = (e) => {
        e.preventDefault();

        patch(route('dataprovider.update', data.id), {
            preserveScroll: true
        });
    };

    return (
        <section className='max-w-xl'>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Dataprovider Details </h2>

                <p className="mt-1 text-sm text-gray-600">
                    Data provided by Financial Modeling Prep
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="name" value="Data Provider Name" />

                    <TextInput
                        id="name"
                        className="mt-1 block w-full"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                    />
                </div>

                <div>
                    <InputLabel htmlFor="base_url" value="Base url" />

                    <TextInput
                        id="base_url"
                        className="mt-1 block w-full"
                        value={data.base_url}
                        onChange={(e) => setData('base_url', e.target.value)}
                    />
                </div>

                <div>
                    <InputLabel htmlFor="apikey" value="API Key" />

                    <TextInput
                        id="apikey"
                        className="mt-1 block w-full"
                        value={data.apikey}
                        onChange={(e) => setData('apikey', e.target.value)}
                    />
                </div>

                <div>
                    <InputLabel htmlFor="companies_list_link" value="Companies End Point" />

                    <TextInput
                        id="companies_list_link"
                        className="mt-1 block w-full"
                        value={data.companies_list_link}
                        onChange={(e) => setData('companies_list_link', e.target.value)}
                    />
                </div>

                <div>
                    <InputLabel htmlFor="profile_link" value="Profile End Point" />

                    <TextInput
                        id="profile_link"
                        className="mt-1 block w-full"
                        value={data.profile_link}
                        onChange={(e) => setData('profile_link', e.target.value)}
                    />
                </div>

                <div>
                    <InputLabel htmlFor="quote_link" value="Quote End Point" />

                    <TextInput
                        id="quote_link"
                        className="mt-1 block w-full"
                        value={data.quote_link}
                        onChange={(e) => setData('quote_link', e.target.value)}
                    />
                </div>

                <div>
                    <InputLabel htmlFor="limit" value="Limit" />

                    <TextInput
                        id="limit"
                        className="mt-1 block w-full"
                        value={data.limit}
                        onChange={(e) => setData('limit', e.target.value)}
                    />
                </div>

                <div>
                    <InputLabel htmlFor="query" value="query" />

                    <TextInput
                        id="Query"
                        className="mt-1 block w-full"
                        value={data.api_query}
                        onChange={(e) => setData('api_query', e.target.value)}
                    />
                </div>
                <div>
                    <InputLabel htmlFor="status" value="Status" />

                    <InputError className="mt-2" message={errors.status} />
                </div>

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Save Changes</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">Saved.</p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}