<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name')->comment('账户名');
            $table->string('email')->unique()->comment('电子邮件');
            $table->string('password')->comment('密码');
            $table->timestamp('email_verified_at')->nullable()->comment('认证日期');
            $table->string('activation_token')->unique()->nullable();
            $table->char('user_group',1)->nullable()->comment('用户组');
            $table->rememberToken();
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
        Schema::dropIfExists('users');
    }
}
