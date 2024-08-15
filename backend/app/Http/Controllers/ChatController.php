<?php

namespace App\Http\Controllers;

use App\Models\ChatSession;
use App\Models\Conversation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class ChatController extends Controller
{
    public function sendMessage(Request $request)
    {
        $request->validate([
            'message' => 'required|string',
            'session_id' => 'nullable|string',
        ]);
        // dd($request->all());

        try {
            $sessionId = $request->session_id;

            // Jika tidak ada sesi, buat sesi baru
            if (!$sessionId) {
                $sessionId = uniqid();
                $chatSession = ChatSession::create(['session_id' => $sessionId]);
            } else {
                $chatSession = ChatSession::where('session_id', $sessionId)->first();
                if (!$chatSession) {
                    return response()->json(['error' => 'Session not found'], 404);
                }
            }

            // Simpan pesan pengguna
            $conversation = new Conversation();
            $conversation->chat_session_id = $chatSession->id;
            $conversation->sender = 'user';
            $conversation->message = $request->message;
            $conversation->save();

            // Respon dari asisten virtual
            $responseMessage = $this->generateResponse($request->message);
            $botConversation = new Conversation();
            $botConversation->chat_session_id = $chatSession->id;
            $botConversation->sender = 'bot';
            $botConversation->message = $responseMessage;
            $botConversation->save();

            return response()->json([
                'session_id' => $sessionId,
                'bot_message' => $responseMessage,
            ]);
        } catch (\Exception $e) {
            Log::error('Error sending message: ' . $e->getMessage());
            return response()->json(['error' => 'Internal Server Error'], 500);
        }
    }

    private function generateResponse($message)
    {
        $lowerMessage = strtolower($message);
        $response = "I'm not sure how to respond to that.";

        $responses = [
            'joke' => [
                "Why don't scientists trust atoms? Because they make up everything!",
                "Why did the scarecrow win an award? Because he was outstanding in his field!",
                "I told my computer I needed a break, and now it won't stop sending me KitKat ads.",
            ],
            'weather' => [
                "The weather today is sunny with a chance of learning!",
                "Looks like it's going to rain code snippets today.",
                "Today's forecast: 100% chance of debugging.",
            ],
            'advice' => [
                "Always remember, learning is a lifelong journey.",
                "Consistency is key to mastering any skill.",
                "Don't be afraid to ask questions and seek help when needed.",
            ],
        ];

        if ($lowerMessage == 'hi' || $lowerMessage == 'hello') {
            $response = "Hi there! How can I assist you today? You can choose from these options: 1. Tell me a joke, 2. What's the weather?, 3. Give me advice.";
        } elseif ($lowerMessage == '1' || strpos($lowerMessage, 'joke') !== false) {
            $response = $responses['joke'][array_rand($responses['joke'])];
        } elseif ($lowerMessage == '2' || strpos($lowerMessage, 'weather') !== false) {
            $response = $responses['weather'][array_rand($responses['weather'])];
        } elseif ($lowerMessage == '3' || strpos($lowerMessage, 'advice') !== false) {
            $response = $responses['advice'][array_rand($responses['advice'])];
        }

        return $response;
    }


    public function getSessions()
    {
        $sessions = ChatSession::with('conversations')
            ->get()
            ->map(function ($session) {
                return [
                    'session_id' => $session->session_id,
                    'created_at' => $session->created_at->toIso8601String(),
                ];
            });

        return response()->json($sessions);
    }


    public function getSessionMessages($session_id)
    {
        $chatSession = ChatSession::where('session_id', $session_id)
            ->with(['conversations' => function ($query) {
                $query->orderBy('created_at', 'asc');
            }])
            ->first();

        // Pastikan data chat session ditemukan
        if (!$chatSession) {
            return response()->json(['error' => 'Session not found'], 404);
        }

        // Format data yang akan dikirim ke frontend
        $formattedConversations = $chatSession->conversations->map(function ($conversation) {
            return [
                'id' => $conversation->id,
                'sender' => $conversation->sender,
                'content' => $conversation->message,
                'created_at' => $conversation->created_at->toIso8601String(), // Gunakan format ISO 8601
            ];
        });

        return response()->json([
            'session_id' => $chatSession->session_id,
            'conversations' => $formattedConversations,
        ]);
    }
}
