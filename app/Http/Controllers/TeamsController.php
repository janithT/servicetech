<?php

namespace App\Http\Controllers;

use App\Team;
use Carbon\Carbon;
use App\Http\Requests\TeamStoreRequest;
use Illuminate\Http\Request;

class TeamsController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Index resource
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index() {
        $Teams = Team::get();
 
        return response()->json([
            'data' => $Teams
        ]);
    }

    /**
     * Get single resource
     *
     * @param Team $Team
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function show( Team $Team , $id) {
        $getdata = Team::find($id);

        return response()->json([
            'data' => $getdata
        ]);
    }

    /**
     * Update single resource
     *
     * @param TeamStoreRequest $request
     * @param Team $Team
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function update( TeamStoreRequest $request, Team $Team ) {

        $dataarray = $request->all();
        
        $datafixed = Carbon::parse($request->joined_date); 
 
        $Team = Team::find($request->id);
        $Team->name = $request->name;
        $Team->email = $request->email;
        $Team->telephone = $request->telephone;
        $Team->joined_date = $datafixed;
        $Team->route =  $request->route;
        $Team->save();

      //  $Team->append('avatar');

        return response()->json([
            'status' => true,
            'data' => $Team
        ]);
    }

    /**
     * Store new resource
     *
     * @param TeamStoreRequest $request
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function store( TeamStoreRequest $request ) {
        
        $dataarray = $request->all();
        $dataarray['joined_date'] = Carbon::parse($request->joined_date); 

        $Team = new Team;
        //$request->joined_date = Carbon::parse($request->joined_date);
        $Team->fill($dataarray);
        $Team->save();

        return response()->json([
            'status' => true,
            'created' => true,
            'data' => [
                'id' => $Team->id
            ]
        ]);
    }

    /**
     * Destroy single resource
     *
     * @param Team $Team
     *
     * @return \Illuminate\Http\JsonResponse
     * @throws \Exception
     */
    public function destroy( Team $Team, $id ) {

        $Team = Team::find($id);
        $Team->delete();

        return response()->json([
            'status' => true
        ]);
    }

    /**
     * Destroy resources by ids
     *
     * @param Request $request
     *
     * @return \Illuminate\Http\JsonResponse
     * @throws \Exception
     */
    public function destroyMass( Request $request ) {
        $request->validate([
            'ids' => 'required|array'
        ]);

        Team::destroy($request->ids);

        return response()->json([
            'status' => true
        ]);
    }
}
