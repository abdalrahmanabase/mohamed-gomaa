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
        Schema::create('patients', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('address')->nullable();
            $table->string('phone')->nullable();
            $table->text('diagnosis')->nullable();
            $table->dateTime('next_session_at')->nullable();
            $table->text('description')->nullable();
            $table->enum('type', ['bee venom','physical therapy','plasma', 'hijama','fsd','tag','fat','other'])->default('hijama');
            $table->enum('session_status', ['upcoming', 'done'])->default('upcoming');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('patients');
    }
};
