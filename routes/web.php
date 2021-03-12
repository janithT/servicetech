<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

 Route::get('/', function () {
    return view('auth/login');
}); 

Auth::routes(); 


        /* Route::get('/', 'HomeController@index')->name('home'); */
        Route::get('/home', 'HomeController@index')->name('home');


            /*
            * Current user
            * */
        Route::prefix('/user')->group(function () {
            Route::get('', 'CurrentUserController@show');
            Route::patch('', 'CurrentUserController@update');
            Route::patch('/password', 'CurrentUserController@updatePassword');
        });

             /*
                * Clients management
                * */
          Route::prefix('/teams')->group(function () {
            Route::get('', 'TeamsController@index');
            Route::get('{teams}', 'TeamsController@show');
            Route::post('store', 'TeamsController@store');
            Route::put('{teams}', 'TeamsController@update');
            Route::post('destroy', 'TeamsController@destroyMass');
            Route::delete('{teams}/destroy', 'TeamsController@destroy');
        });

 

