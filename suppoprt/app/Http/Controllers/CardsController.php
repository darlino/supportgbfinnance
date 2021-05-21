<?php

namespace App\Http\Controllers;

use App\Models\Cards;
use App\Models\CardsModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CardsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $cards = new Cards();
        return $cards->paginate(5);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param string $delimiter
     * @return string
     */
    public function store(Request $request, $delimiter = "-")
    {

        $validator =  Validator::make($request->all(), [
            'title' => 'required',
            'content' => 'required'
        ]);

        if($validator->fails()){
            return response()->json([
                "status_code" => "500",
                "message" => "erreus  fz fz"
            ]);
        }

        $slug = strtolower(trim(preg_replace('/[\s-]+/', $delimiter, preg_replace('/[^A-Za-z0-9-]+/', $delimiter, preg_replace('/[&]/', 'and', preg_replace('/[\']/', '', iconv('UTF-8', 'ASCII//TRANSLIT', $request->title))))), $delimiter));
        $cards = new Cards();
        $cards->title = $request->get('title');
        $cards->content = $request->get('content');
        $cards->slug = $slug;
        $cards->save();

        return response()->json([
            "status_code" => "200",
            "message" => "erreu"
        ]);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
