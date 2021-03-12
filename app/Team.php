<?php

namespace App;

use Carbon\Carbon;
use App\Processors\AvatarProcessor;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Team extends Model
{
    use SoftDeletes;
    
    protected $appends = [
        'created'
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
 
    ];

    protected $fillable = [
        'name',
        'email',
        'telephone',
        'joined_date',
        'route',
        'updated_at',
        
    ];
 

    public function getCreatedAttribute() {
        if (empty($this->created_at)) {
            return null;
        }

        return $this->created_at->toFormattedDateString();
    }

    public function getCreatedMmDdYyyyAttribute() {
        if (empty($this->created_at)) {
            return null;
        }

        return $this->created_at->format('m-d-Y');
    }

    public function setCreatedDateAttribute( $value ) {
        try {
            $this->attributes['created_at'] = new Carbon($value);
        } catch (\Exception $exception) {
            $this->attributes['created_at'] = now();
        }
    }
}
