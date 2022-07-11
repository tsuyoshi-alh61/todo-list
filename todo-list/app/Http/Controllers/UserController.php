<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller {

    public function userValidates(Request $request) {
        $user = User::where('email', $request->email)->first();
        if(is_null($user)) {
            return response()->json('User does not exist', 500);
        }
        $response = ['id' => $user->id, 'name' => $user->name];
        return response()->json($response, 201);
    }

    /**
     * 
     */
    public function registerUser(Request $request) {
        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = $request->password;
        $user->save();

        $response = ['id' => $user->id, 'name' => $user->name];
        return $user ? response()->json($response, 201) : response()->json([], 500);
    }

    public function getUser(Request $request) {
        $user = new User();
        $user->where('id', $request->id)->get();
        return $user;
    }

    public function updateUser(Request $request) {
        $user = new User();
        $user->where('id', $request->id);
        $user->name = $request->name;
        $user->password = $request->password;
        $user->save();

        return $user ? response()->json($user, 201) : response()->json([], 500);
    }

    public function deleteUser(Request $request) {
        $user = new User();
        $user->where('id', $request->id);
        $user->delete();

        return $user ? response()->json($user, 201) : response()->json([], 500);
    }
}