import { Telegraf } from "telegraf";

// https://api.telegram.org/bot6678929336:AAFjXPgagUZZV-SlcMQ_7_LwVVacLGzk4Jo/getUpdates

export class TelegramService {
    static a() {
        const bot = new Telegraf(
            "6678929336:AAFjXPgagUZZV-SlcMQ_7_LwVVacLGzk4Jo"
        );
        bot.start((ctx) => ctx.reply("Welcome"));
        // bot.help((ctx) => ctx.reply("Send me a sticker"));
        // bot.on(message("sticker"), (ctx) => ctx.reply("👍"));
        // bot.hears("hi", (ctx) => ctx.reply("Hey there"));

        bot.telegram.sendMessage("5881105617", "opa mano");
        bot.launch();
    }
}
