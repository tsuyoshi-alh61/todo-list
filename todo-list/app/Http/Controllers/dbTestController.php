<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class dbTestController extends Controller
{
    public function selectUserData(Request $request)
    {
        if ($request->id > 0) {
            $user_data = DB::table('user')->where('id', $request->id)->get();
        } else {
            $user_data = DB::table('user')->get();
        }
        $data = [
            'id'=> $request->id,
            'user_data'=> $user_data,
        ];

        return view('dbTest.showUser', $data);
    }
}