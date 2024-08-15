<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Conversation extends Model
{
    use HasFactory;

    protected $fillable = ['chat_session_id', 'sender', 'message'];

    public function chatSession()
    {
        return $this->belongsTo(ChatSession::class);
    }
}
