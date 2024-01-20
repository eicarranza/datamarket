<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use \App\Classes\ApiConnection;

class CompanyController extends Controller
{
    private $api_connection;
    
    public function __construct()
    {
        $this->api_connection = new ApiConnection;
    }

    public function index()
    {
        $companies = $this->api_connection->search("A");

        return Inertia::render('Company/All', [
            'companies' => $companies,
            'dataprovider' => $this->api_connection->getDataProvider(),
        ]);
    }

    public function search($args)
    {
        $companies = $this->api_connection->search($args);

        return $companies;
    }

    public function edit($company_id)
    {
        $company = $this->api_connection->getCompany($company_id);

        return Inertia::render('Company/Edit', [
            'company' => $company
        ]);
    }

    public function quote($company_id)
    {
        $company = $this->api_connection->getCompanyQuote($company_id);

        return Inertia::render('Company/Quote', [
            'company' => $company
        ]);
    }

    public function get_quote($company_id)
    {

    }
}
