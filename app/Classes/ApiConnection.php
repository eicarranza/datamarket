<?php

namespace App\Classes;

use App\Models\APIDataprovider;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;

class ApiConnection
 {
    private $provider;

    public function __construct()
    {
        $this->provider = APIDataprovider::find(1);
    }

    public function search()
    {
        $arg = $this->provider->api_query;
        
        $companies = Cache::remember('companies', 60, function() use ($arg) {
            $response = Http::get($this->provider->base_url.'/'.$this->provider->companies_list_link, [
                    'query' => $arg,
                    'limit' => $this->provider->limit,
                    'apikey' => $this->provider->apikey,
            ]);

            return json_decode($response->body());
        });

        return $companies;
    }   

    public function getCompany($company_id)
    {
        $response = Http::get($this->provider->base_url.'/'.$this->provider->profile_link.'/'.$company_id, [
                'apikey' => $this->provider->apikey,
    ]);

        return json_decode($response->body())[0];
    }

    public function getCompanyQuote($company_id)
    {
        $response = Http::get($this->provider->base_url.'/'.$this->provider->quote_link.'/'.$company_id, [
                'apikey' => $this->provider->apikey,
    ]);

        return json_decode($response->body())[0];
    }

    public function getDataProvider()
    {
        return $this->provider->base_url.'/'.$this->provider->profile_link.'/';
    }
}