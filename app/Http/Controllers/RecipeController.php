<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Http;

class RecipeController extends Controller
{
    public function generate(Request $request)
    {
        $ingredients = $request->input('ingredients');
        $blacklist = $request->input('blacklist', []);

        $excludeText = '';
        if (!empty($blacklist)) {
            $excludeText = "Avoid recipes with the following titles: " . implode(', ', $blacklist) . ". ";
        }

       
        $response = Http::withToken(env('OPENAI_API_KEY'))
            ->post('https://api.openai.com/v1/chat/completions', [
                'model' => 'gpt-4',
                'messages' => [
                    ['role' => 'system', 'content' => 'You are a helpful recipe assistant. Reply ONLY with valid JSON.'],
                    ['role' => 'user', 'content' =>
                        $excludeText .
                        "Generate 3 different recipes using these ingredients: {$ingredients}. " .
                        "Return a JSON array of 3 objects, each with: title, time (number), ingredients (array), instructions (array). No explanations, only pure JSON."
                    ],
                ],
                'temperature' => 0.7,
            ]);

      
        $aiRecipes = json_decode($response->json()['choices'][0]['message']['content'] ?? '[]', true);

        if (!is_array($aiRecipes)) {
            return response()->json(['recipes' => []], 422); // fallback în caz de eșec
        }

      
        $recipes = collect($aiRecipes)->map(function ($recipe) {
            return [
                'id' => uniqid(),
                'title' => $recipe['title'] ?? 'Untitled',
                'time' => $recipe['time'] ?? 15,
                'ingredients' => $recipe['ingredients'] ?? [],
                'instructions' => $recipe['instructions'] ?? [],
            ];
        })->toArray();

       
        $saved = session('generated_recipes', []);
        foreach ($recipes as $r) {
            $saved[] = $r;
        }
        session(['generated_recipes' => $saved]);

     
        return response()->json(['recipes' => $recipes]);
    }

    public function show($id)
    {

      
        $recipes = session('generated_recipes', []);
        $recipe = collect($recipes)->firstWhere('id', $id);

        if (!$recipe) {
            abort(404, 'Recipe not found.');
        }

        return Inertia::render('RecipeDetails', [
            'recipe' => $recipe,
        ]);
    }
}
