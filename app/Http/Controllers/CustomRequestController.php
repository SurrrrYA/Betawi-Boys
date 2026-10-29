<?php

namespace App\Http\Controllers;

use App\Models\CustomRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;

class CustomRequestController extends Controller
{
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'contact' => ['required', 'string', 'max:30'],
            'production_type' => [
                'required',
                'string',
                Rule::in([
                    'Kaos',
                    'Kemeja',
                    'Jaket',
                    'Seragam',
                    'Hoodie',
                    'Lainnya',
                ]),
            ],
            'quantity' => ['required', 'integer', 'min:1', 'max:100000'],
            'details' => ['required', 'string', 'max:5000'],
        ]);

        $validated['user_id'] = Auth::id();

        CustomRequest::create($validated);

        return back()->with(
            'success',
            'Permintaan produksi berhasil dikirim! Tim One Production akan meninjau permintaanmu.'
        );
    }
}
