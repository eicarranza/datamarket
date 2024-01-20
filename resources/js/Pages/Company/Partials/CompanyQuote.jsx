import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';

export default function CompanyQuote({ company }) {

    return (
        <section className='max-w-xl'>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Company Quote </h2>
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
                        value={company.name}
                        disabled
                    />
                </div>

                <div>
                    <InputLabel htmlFor="base_url" value="Price" />

                    <TextInput
                        id="base_url"
                        className="mt-1 block w-full"
                        value={company.price}
                        disabled
                    />
                </div>

                <div>
                    <InputLabel htmlFor="apikey" value="Changes Percentage" />

                    <TextInput
                        id="apikey"
                        className="mt-1 block w-full"
                        value={company.changesPercentage}
                        disabled
                    />
                </div>

                <div>
                    <InputLabel htmlFor="companies_list_link" value="Change" />

                    <TextInput
                        id="companies_list_link"
                        className="mt-1 block w-full"
                        value={company.change}
                        disabled
                    />
                </div>

                <div>
                    <InputLabel htmlFor="profile_link" value="Day Low" />

                    <TextInput
                        id="profile_link"
                        className="mt-1 block w-full"
                        value={company.dayLow}
                        disabled
                    />
                </div>

                <div>
                    <InputLabel htmlFor="quote_link" value="Day High" />

                    <TextInput
                        id="quote_link"
                        className="mt-1 block w-full"
                        value={company.dayHigh}
                        disabled
                    />
                </div>
                <div>
                    <InputLabel htmlFor="limit" value="Year Low" />

                    <TextInput
                        id="limit"
                        className="mt-1 block w-full"
                        value={company.yearLow}
                        disabled
                    />
                </div>
                <div>
                    <InputLabel htmlFor="limit" value="Year High" />

                    <TextInput
                        id="limit"
                        className="mt-1 block w-full"
                        value={company.fullTimeEmployees}
                        disabled
                    />
                </div>
                <div>
                    <InputLabel htmlFor="limit" value="Market Cap" />

                    <TextInput
                        id="limit"
                        className="mt-1 block w-full"
                        value={company.marketCap}
                        disabled
                    />
                </div>
                <div>
                    <InputLabel htmlFor="limit" value="price Avg 50" />

                    <TextInput
                        id="limit"
                        className="mt-1 block w-full"
                        value={company.priceAvg50}
                        disabled
                    />
                </div>
                
                <div>
                    <InputLabel htmlFor="limit" value="price Avg 200" />

                    <TextInput
                        id="limit"
                        className="mt-1 block w-full"
                        value={company.priceAvg200}
                        disabled
                    />
                </div>
                <div>
                    <InputLabel htmlFor="limit" value="Exchange" />

                    <TextInput
                        id="limit"
                        className="mt-1 block w-full"
                        value={company.exchange}
                        disabled
                    />
                </div>
                <div>
                    <InputLabel htmlFor="limit" value="Volume" />

                    <TextInput
                        id="limit"
                        className="mt-1 block w-full"
                        value={company.volume}
                        disabled
                    />
                </div>

                <div>
                    <InputLabel htmlFor="limit" value="open" />

                    <TextInput
                        id="limit"
                        className="mt-1 block w-full"
                        value={company.open}
                        disabled
                    />
                </div>
                <div>
                    <InputLabel htmlFor="limit" value="Previous Close" />

                    <TextInput
                        id="limit"
                        className="mt-1 block w-full"
                        value={company.previousClose}
                        disabled
                    />
                </div>
                <div>
                    <InputLabel htmlFor="limit" value="EPS" />

                    <TextInput
                        id="limit"
                        className="mt-1 block w-full"
                        value={company.eps}
                        disabled
                    />
                </div>
                <div>
                    <InputLabel htmlFor="limit" value="PE" />

                    <TextInput
                        id="limit"
                        className="mt-1 block w-full"
                        value={company.pe}
                        disabled
                    />
                </div>
        </section>
    );
}