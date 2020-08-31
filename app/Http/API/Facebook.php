<?php


namespace App\Http\API;


use FacebookAds\Api;
use FacebookAds\Object\ServerSide\CustomData;
use FacebookAds\Object\ServerSide\Event;
use FacebookAds\Object\ServerSide\EventRequest;
use FacebookAds\Object\ServerSide\UserData;
use GuzzleHttp\Client;

class Facebook
{

    private $accessToken;
    private $baseApiUrl = 'https://graph.facebook.com/v8.0';

    public function __construct($accessToken=null)
    {
        $this->accessToken = $accessToken;
    }

    public function sendServerSideEvent($pixelId=null, $eventName='', $eventTime=0, $eventId=null, $userDataArr=[], $customDataArr=[], $testCode=null)
    {

        $access_token = $this->accessToken;
        $pixel_id = $pixelId;

        if($access_token === null || $pixelId === null)
        {
            exit('required fields missing');
        }

        $api = Api::init('232598031421241', 'f2a58a95134a7f80758cb1f42d34b750', $access_token);
        $session = $api->getSession();

        //$api->setLogger(new CurlLogger());

        $user_data = (new UserData());

        if(isset($userDataArr['ip_address']))
        {
            $user_data->setClientIpAddress($userDataArr['ip_address']);
        }

        if(isset($userDataArr['user_agent']))
        {
            $user_data->setClientUserAgent($userDataArr['user_agent']);
        }

        if (isset($userDataArr['email']))
        {
            $user_data->setEmail($userDataArr['email']);
        }

        if (isset($userDataArr['phone']))
        {
            $user_data->setPhone($userDataArr['phone']);
        }

        if (isset($userDataArr['fbc']))
        {
            $user_data->setFbc($userDataArr['fbc']);
        }

        if (isset($userDataArr['fbclid']))
        {
            $fbc = 'fb.1.' . time() . '.' . $userDataArr['fbclid'];
            $user_data->setFbc($fbc);
        }

        if (isset($userDataArr['fbp']))
        {
            $user_data->setFbp($userDataArr['fbp']);
        }

        if (isset($userDataArr['first_name']))
        {
            $user_data->setFirstName($userDataArr['first_name']);
        }

        if (isset($userDataArr['last_name']))
        {
            $user_data->setLastName($userDataArr['last_name']);
        }

        if (isset($userDataArr['city']))
        {
            $user_data->setCity($userDataArr['city']);
        }

        if (isset($userDataArr['state']))
        {
            $user_data->setState($userDataArr['state']);
        }

        if (isset($userDataArr['zip_code']))
        {
            $user_data->setZipCode($userDataArr['zip_code']);
        }

        if (isset($userDataArr['country_code']))
        {
            $user_data->setCountryCode($userDataArr['country_code']);
        }

        if (isset($userDataArr['gender']))
        {
            $user_data->setGender($userDataArr['gender']);
        }

        if (isset($userDataArr['dob']))
        {
            $user_data->setDateOfBirth($userDataArr['dob']);
        }

        $custom_data = (new CustomData());

        if (isset($customDataArr['currency']))
        {
            $custom_data->setCurrency($customDataArr['currency']);
        }

        if (isset($customDataArr['value']))
        {
            $custom_data->setValue($customDataArr['value']);
        }

        $event = (new Event())
            ->setEventName($eventName)
            ->setEventTime($eventTime)
            ->setUserData($user_data)
            ->setCustomData($custom_data);

        //dd($event);

        if($eventId !== null)
        {
            $event->setEventId($eventId);
        }

        if (isset($customDataArr['value']))
        {
            $custom_data->setValue($customDataArr['value']);
        }

        $events = array();
        array_push($events, $event);

        $request = (new EventRequest($pixel_id))->setEvents($events);

        //dd($request);

        if($testCode !== null)
        {
            $request->setTestEventCode($testCode);
        }

        $isValid = $request->valid();

        //dd($isValid);

        $response = $request->execute();


        dd($response);

        return $response;

    }

    public function sendServerSideEventCustom($pixelId=null, $eventName='', $eventTime=0, $eventId=null, $userDataArr=[], $customDataArr=[], $testCode=null)
    {

        $access_token = $this->accessToken;
        $pixel_id = $pixelId;

        if($access_token === null || $pixelId === null)
        {
            exit('required fields missing');
        }

        $user_data = [];

        if(isset($userDataArr['ip_address']))
        {
            //$user_data['client_ip_address'] = ($userDataArr['ip_address']);
        }

        if(isset($userDataArr['user_agent']))
        {
            //$user_data['client_user_agent'] = ($userDataArr['user_agent']);
        }

        if (isset($userDataArr['email']))
        {
            $user_data['em'] = ($userDataArr['email']);
        }

        if (isset($userDataArr['phone']))
        {
            $user_data['ph'] = ($userDataArr['phone']);
        }

        if (isset($userDataArr['fbc']))
        {
            $user_data['fbc'] = ($userDataArr['fbc']);
        }

        if (isset($userDataArr['fbp']))
        {
            $user_data['fbp'] = ($userDataArr['fbp']);
        }

        if (isset($userDataArr['first_name']))
        {
            $user_data['fn'] = ($userDataArr['first_name']);
        }

        if (isset($userDataArr['last_name']))
        {
            $user_data['ln'] = ($userDataArr['last_name']);
        }

        if (isset($userDataArr['city']))
        {
            $user_data['ct'] = ($userDataArr['city']);
        }

        if (isset($userDataArr['state']))
        {
            $user_data['st'] = ($userDataArr['state']);
        }

        if (isset($userDataArr['zip_code']))
        {
            $user_data['zp'] = ($userDataArr['zip_code']);
        }

        if (isset($userDataArr['country_code']))
        {
            $user_data['country'] = ($userDataArr['country_code']);
        }

        if (isset($userDataArr['gender']))
        {
            $user_data['ge'] = ($userDataArr['gender']);
        }

        if (isset($userDataArr['dob']))
        {
            $user_data['db'] = ($userDataArr['dob']);
        }

        $custom_data = [];

        if (isset($customDataArr['currency']))
        {
            $custom_data['currency'] = ($customDataArr['currency']);
        }

        if (isset($customDataArr['value']))
        {
            $custom_data['value'] = ($customDataArr['value']);
        }

        $request = [
            'data' => [
                [
                    'event_name' => $eventName,
                    'event_time' => $eventTime,
                    'event_id' => $eventId,
                    'user_data' => $this->hashUserData($user_data),
                    'custom_data' => $custom_data
                ]
            ]
        ];

        if($eventId !== null)
        {
            $event['event_id'] = ($eventId);
        }

        if($testCode !== null)
        {
            $request['test_event_code'] = ($testCode);
        }

        dd(json_encode($request));

        //$response = $request->execute();
        $client = new Client();
        $response = $client->post($this->baseApiUrl . '/' . $pixel_id . '/events', [
            'json' => json_encode($request)
        ])->getBody()->getContents();

        return $response;

    }

    private function hashUserData($userData=[])
    {
        $restrictedParams = ['fbp', 'fbc'];
        $newArray = [];

        foreach ($userData as $key => $value) {
            if(!in_array($key, $restrictedParams))
            {
                $newArray[$key] = hash('SHA256', $value);
            }
        }

        return $newArray;

    }

}
