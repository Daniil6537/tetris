const tg = window.Telegram && Telegram.WebApp;
if (tg) { tg.ready(); tg.expand(); try { tg.disableVerticalSwipes(); } catch (e) {} }
const buzz = t => { try { tg.HapticFeedback.impactOccurred(t || 'light'); } catch (e) {} };
const getBest = k => { try { return +localStorage.getItem(k) || 0; } catch (e) { return 0; } };
const setBest = (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} };
try {
  if (tg && window.IS_HUB) tg.BackButton.hide();
  else if (tg) { tg.BackButton.show(); tg.BackButton.onClick(() => { location.href = 'index.html'; }); }
} catch (e) {}
