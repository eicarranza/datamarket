<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('api_dataprovider', function (Blueprint $table) {
            $table->id();
            $table->string(column: 'name');
            $table->string(column: 'base_url');
            $table->string(column: 'apikey');
            $table->string(column: 'companies_list_link');
            $table->string(column: 'profile_link');
            $table->string(column: 'quote_link');
            $table->integer(column: 'limit');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('api_dataproviders');
    }
};
