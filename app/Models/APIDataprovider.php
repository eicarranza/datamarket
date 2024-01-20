<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class APIDataprovider extends Model
{
    protected $table = 'api_dataprovider';
    protected $fillable = [
        'name', 'base_url', 'apikey', 
        'companies_list_link', 'profile_link', 
        'quote_link', 'limit', 'api_query'];
}
