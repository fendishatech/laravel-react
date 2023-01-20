<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreSkillRequest;
use App\Http\Requests\UpdateSkillRequest;
use App\Models\Skill;
use Illuminate\Http\Request;

class SkillController extends Controller
{
    public function store (StoreSkillRequest $req) {
        $skill = Skill::create($req->validated());
        return response()->json([
            "success" => true,
            "skill" => $skill,
            "message" => "Skill Created Successfully!"
        ]);
    }

    public function index () {
        $skills = Skill::paginate(1);
        return response()->json([
            "success" => true,
            "skills" => $skills,
            "message" => "You Reached index page"
        ]);
    }

    public function show (Skill $skill) {
        return response()->json([
            "success" => true,
            "skill" => $skill,
            "slug" => route('skills.show', $skill->slug),
            "message" => "You Reached index page"
        ]);
    }

    public function update (StoreSkillRequest $req,Skill $skill) {
        $skill->update($req->validated());
        return response()->json([
            "success" => true,
            "skill" => $skill,
            "message" => "Skill Updated Successfully!"
        ]);
    }

    public function destroy (Skill $skill) {
        $skill->delete();
        return response()->json([
            "success" => true,
            "skill" => $skill,
            "message" => "Skill Deleted Successfully!"
        ]);
    }

}
