<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use App\Models\APIDataprovider;
use Inertia\Inertia;

class DataproviderController extends Controller
{
    
    public function edit()
    {
        $provider = APIDataprovider::find(1);
        
        return Inertia::render('Dataprovider/Edit', [
            'provider' => isset($provider) ? $provider : []
        ]);
    }

    public function update(APIDataprovider $provider_, Request $request): void
    {
        $provider_->update([
            'name'      => $request->name,
            'base_url'  => $request->base_url,
            'apikey'    => $request->apikey,
            'companies_list_link' => $request->companies_list_link,
            'profile_link' => $request->profile_link,
            'quote_link' => $request->quote_link,
            'limit'     => $request->limit,
        ]);
    }
}
