<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProposalsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('proposals', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name', 100);
            $table->string('phone', 15);
            $table->string('plastic', 2);
            $table->float('summa', 8, 2);
            $table->string('agent_type', 50)->nullable(); //robot, mobile, desctop, etc...
            $table->string('agent_device', 100)->nullable();
            $table->string('agent_platform', 50)->nullable();
            $table->string('agent_browser', 150)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('proposals');
    }
}
