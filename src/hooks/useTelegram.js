export function useTelegram() {
    const tg = window.Telegram.WebApp;

    return {
        tg,
        user: tg?.initData.user
    }
}
