<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
class AuthController extends Controller
{

    public function login(Request $request)
    {

        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            return response()->json([
                "status_code" => "200",
                'token' => auth()->user()->createToken('API Token')->plainTextToken
            ]);
        }

        return response()->json([
            "status_code" => "400",
            "message" => "this cannot be"
        ]);
    }
    public function logout(Request $request){
        auth()->user()->tokens()->delete();

        return [
            'message' => 'Tokens Revoked'
        ];
    }

}
