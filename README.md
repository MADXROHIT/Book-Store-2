# Telegram PDF Auto Sorter

1. Create a Supabase project. Open SQL Editor and run `supabase.sql`.
2. Create a Telegram bot with @BotFather and copy the token.
3. Deploy this folder to Vercel.
4. Add env vars from `.env.example` in Vercel.
5. After deployment open:
   `https://api.telegram.org/botBOT_TOKEN/setWebhook?url=https://YOUR_DOMAIN/api/telegram&secret_token=YOUR_SECRET`
   Replace BOT_TOKEN, YOUR_DOMAIN and YOUR_SECRET. (Open it in a browser.)
6. Add the bot as admin to the target Telegram channel and allow it to post/read channel messages.

The site reads PDF filenames and automatically classifies: Class 11, Class 12, Dropper, RTS, VP AIR TEST, AITS, 2026, 2027, or Other.
