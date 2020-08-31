<?php

use Illuminate\Support\Facades\Route;

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
    return '';
});

Route::group(['prefix' => '/api'], function () {

    Route::group(['prefix' => '/inbound'], function () {

        Route::group(['prefix' => '/shopify'], function () {

            Route::any('/create-checkout', function (\Illuminate\Http\Request $request) {

                Log::info($request->getContent());

                $client = new \GuzzleHttp\Client();
                $client->post('https://webhook.site/351b111d-5759-4b54-ac69-3a7aafd03ad2', [
                   'json' => json_decode($request->getContent())
                ]);

                return response()->json(['success' => true]);

            });

            Route::any('/create-order', function (\Illuminate\Http\Request $request) {

                $client = new \GuzzleHttp\Client();
                $client->post('https://webhook.site/351b111d-5759-4b54-ac69-3a7aafd03ad2', [
                    'json' => $request->getContent()
                ]);

            });

        });

    });

    Route::group(['prefix' => '/outbound'], function () {

        Route::group(['prefix' => '/facebook'], function () {

            Route::any('/postback', function (\Illuminate\Http\Request $request) {

                $pixelId = $request->get('pixel_id');

                if ($pixelId === null)
                {
                    exit('no pixel id detected');
                }

                $testCode = $request->get('test_code', null);

                $payout = $request->get('price', 0);
                $currency = 'USD';

                $fbClid = $request->get('fbclid', null);
                $fbc = $request->get('fbc', null);
                $fbp = $request->get('fbp', null);

                $ipAddress = $request->get('ip_address', '127.0.0.1');
                $userAgent = $request->get('user_agent', null);

                $eventName = $request->get('event_name', 'Purchase');
                $eventTime = $request->get('event_time', time());
                $eventId = $request->get('event_id', time());

                $emailAddress = $request->get('email_address', null);
                $phoneNumber = $request->get('phone_number', null);

                $city = $request->get('city', null);
                $state = $request->get('state', null);
                $zipCode = $request->get('zip_code', null);
                $countryCode = $request->get('country_code', null);

                $firstName = $request->get('first_name', null);
                $lastName = $request->get('last_name', null);
                $gender = $request->get('gender', null);
                $dob = $request->get('dob', null);

                $emailAddressHashed = hash('sha256', $emailAddress);
                $phoneNumberHashed = hash('sha256', $phoneNumber);

                $userData = [
                    'email' => $emailAddress,
                    'phone' => $phoneNumber,
                    'ip_address' => $ipAddress,
                    'user_agent' => $userAgent,
                    'city' => $city,
                    'state' => $state,
                    'zip_code' => $zipCode,
                    'country_code' => $countryCode,
                    'first_name' => $firstName,
                    'last_name' => $lastName,
                    'gender' => $gender,
                    'dob' => $dob,
                    'fbp' => $fbp,
                    'fbc' => $fbc,
                    'fbclid' => $fbClid,
                ];

                $customData = [
                    'currency' => $currency,
                    'value' => $payout
                ];

                $fbAPI = new \App\Http\API\Facebook('EAADTiZCMJzzkBAK9dJFH6TzioMA2rTNZBzsxA3uMbjrNKwjRuJHTR6zxBHWVPlgJlCgVVSWgPRPhhqpOjmSmnFvrAu5ldHY77ddigac7E73ZCwMvdZCPqxmqfKnaY0shAm0SjeSmjZC0uosmbeEd6VC3zq4Y6v8uIMZBJigzWD8lPffWZCrZBlZBnwN1chRkpMqgZD');
                $response = $fbAPI->sendServerSideEvent($pixelId, $eventName, $eventTime, $eventId, $userData, $customData, $testCode);

                return $response;


            });

        });

    });



});
