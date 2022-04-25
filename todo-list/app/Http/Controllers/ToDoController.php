<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;

class ToDoController extends Controller {

    /**
     * 
     * @return \Illuminate\Support\Collection
     */
    public function getTodos() {
        return Todo::orderByDesc('id')->get();
    }

    /**
     * 
     * @param  Request $request
     * @return Illuminate\Http\JsonResponse
     */
    public function postTodo(Request $request) {
        $todo = new Todo;
        $todo->title = $request->title;
        $todo->dead_line = $request->dead_line;
        $todo->priority = $request->priority;
        $todo->save();

        return $todo ? response()->json($todo, 201) : response()->json([], 500);
        // return response()->json($request, 201);
    }

    /**
     * 
     * @param  Request $request
     * @return Illuminate\Http\JsonResponse
     */
    public function updateTodo(Request $request) {
        $todo = Todo::find($request->id);
        $todo->title = $request->title;
        $todo->dead_line = $request->dead_line;
        $todo->priority = $request->priority;
        $todo->save();

        return $todo ? response()->json($todo, 201) : response()->json([], 500);
    }

    public function deleteTodo(Request $request) {
        $todo = Todo::find($request->id);
        $todo->delete();

        return $todo ? response()->json($todo, 201) : response()->json([], 500);
    }
}