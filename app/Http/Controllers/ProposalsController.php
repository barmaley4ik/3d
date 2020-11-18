<?php

namespace App\Http\Controllers;

use App\Models\Proposal;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Request;
use Illuminate\Validation\Rule;
use Jenssegers\Agent\Agent;


class ProposalsController extends Controller
{
    public function index()
    {
        return Inertia::render('Proposals/Index', [
            'filters' => Request::all('search'),
            'proposals' => Proposal::get()
                ->filter(Request::only('search'))
                ->paginate()
                ->transform(function ($proposal) {
                    return [
                        'id' => $proposal->id,
                        'name' => $proposal->name,
                        'phone' => $proposal->phone,
                        'plastic' => $proposal->plastic,
                        'summa' => $proposal->summa,
                        'agent_type' => $proposal->agent_type,
                        'agent_device' => $proposal->agent_device,
                        'created_at' => $proposal->created_at,
                    ];
                }),
        ]);
    }

    public function store()
    {

        $messages = [
            'required' => 'Ошибка. Заполнить обязательно.',
            'max' => 'Ошибка. Поле должно содержать не более :max символов',
            'min' => 'Ошибка. Неправильно указан телефон',

        ];

        $validator = \Validator::make(Request::all(), [
            'name' => ['required', 'max:60'],
            'phone' => ['required', 'max:15', 'min:15'],
            'plastic' => ['required'],
            'summa' => ['nullable'],
            'agent_type' => ['nullable', 'max:50'],
            'agent_device' => ['nullable', 'max:100'],
            'agent_platform' => ['nullable', 'max:50'],
            'agent_browser' => ['nullable', 'max:150'],

        ], $messages);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => $validator->messages()
            ], 200);
        }

		try {

            \DB::beginTransaction();    
            
            $agent = new Agent();

            $proposal = new Proposal;
            $proposal->name= Request::get('name');
            $proposal->phone= Request::get('phone');
            $proposal->plastic= Request::get('plastic');
            $proposal->summa= Request::get('summa');
            $proposal->agent_type= $agent->isMobile() ? 'Mobile' : ($agent->isTablet() ? 'Tablet' : ($agent->isDesktop() ? 'Desctop':($agent->isRobot() ? $agent->robot():'Robot')));
            $proposal->agent_device= $agent->device() ?? '';
            $proposal->agent_platform=  $agent->platform();
            $proposal->agent_browser= $agent->browser();
            $proposal->save();
            $products_list = array(
                0 => array(
                        'product_id' => 171,    //код товара (из каталога CRM)
                        'price'      => 399, //цена товара 1
                        'count'      => '1',                     //количество товара 1
        
                ),
            );
            $products = urlencode(serialize($products_list));
            $sender = urlencode(serialize($_SERVER));
            $data = array(
                'key'             => '49b6f88d234a89f3b83eb3a2dc6dbebc', //Ваш секретный токен
                'order_id'        => number_format(round(microtime(true)*10),0,'.',''), //идентификатор (код) заказа (*автоматически*)
                'country'         => 'UA',                         // Географическое направление заказа
                'office'          => '1',                          // Офис (id в CRM)
                'products'        => $products,                    // массив с товарами в заказе
                'bayer_name'      => Request::get('name'),            // покупатель (Ф.И.О)
                'phone'           => Request::get('phone'),           // телефон
                'email'           => '',           // электронка
                'comment'         => (Request::get('plastic') >0 ? '3Д ручка,' . ' дополнительно пластика ' .Request::get('plastic') . ' шт'  :'3Д ручка'),    // комментарий
                'delivery'        => '',        // способ доставки (id в CRM)
                'delivery_adress' => '', // адрес доставки
                'payment'         => '',                           // вариант оплаты (id в CRM)
                'sender'          => $sender,                        
                'utm_source'      => '',  // utm_source
                'utm_medium'      => '',  // utm_medium
                'utm_term'        => '',    // utm_term
                'utm_content'     => '', // utm_content
                'utm_campaign'    => '', // utm_campaign
                'additional_1'    => '',                               // Дополнительное поле 1
                'additional_2'    => '',                               // Дополнительное поле 2
                'additional_3'    => '',                               // Дополнительное поле 3
                'additional_4'    => ''                                // Дополнительное поле 4
            );
            // запрос
            $curl = curl_init();
            curl_setopt($curl, CURLOPT_URL, 'http://belya.lp-crm.biz/api/addNewOrder.html');
            curl_setopt($curl, CURLOPT_POST, true);
            curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
            $out = curl_exec($curl);
            curl_close($curl);   
            \DB::commit();

        } catch (\Exception $e) {

            DB::rollback();

            return response()->json([
                'success' => false,
                'message' => 'Ошибка создания заказа!'
            ], 500);
        }            


        return response()->json([
            'success' => true,
            'message' => 'Спасибо, за заказ! <br><br><br> Заказ создан! <br> Ожидайте звонка для подтверждения.',
            'msgcrm' => $out
        ], 200);
    }    
}
