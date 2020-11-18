<?php

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;

class Proposal extends Model
{
    public function scopeFilter($query, array $filters)
    {
        $query->when($filters['search'] ?? null, function ($query, $search) {
            $query->where(function ($query) use ($search) {
                $query->where('name', 'like', '%'.$search.'%')
                    ->orWhere('phone', 'like', '%'.$search.'%')
                    ->orWhere('created_at', 'like', '%'.$search.'%');
            });
        });
    }
}
