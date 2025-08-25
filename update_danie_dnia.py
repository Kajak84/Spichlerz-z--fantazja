import requests
import datetime
import os
import sys

PAGE_ID = os.getenv("FB_PAGE_ID")       # ID strony z Facebooka
ACCESS_TOKEN = os.getenv("FB_TOKEN")    # Token API (ustawiony w GitHub Secrets)

if not PAGE_ID or not ACCESS_TOKEN:
    print("❌ Brak FB_PAGE_ID lub FB_TOKEN w zmiennych środowiskowych")
    sys.exit(1)

url = f"https://graph.facebook.com/{PAGE_ID}/posts"
params = {
    "fields": "message,full_picture,created_time",
    "limit": 1,
    "access_token": ACCESS_TOKEN
}

print("ℹ️ Pobieram dane z Facebook Graph API...")
response = requests.get(url, params=params)

if response.status_code != 200:
    print(f"❌ Błąd pobierania danych: {response.status_code} {response.text}")
    tekst = "Brak aktualnego dania dnia – zapraszamy później!"
    zdjecie = ""
else:
    data = response.json()
    if "data" not in data or not data["data"]:
        print("❌ Brak postów w odpowiedzi API")
        tekst = "Brak aktualnego dania dnia – zapraszamy później!"
        zdjecie = ""
    else:
        latest_post = data['data'][0]
        tekst = latest_post.get("message", "Brak treści")
        zdjecie = latest_post.get("full_picture", "")
        created_time = latest_post.get("created_time", "brak daty")

        # Logi
        print(f"✅ Pobrano post z dnia: {created_time}")
        print(f"📝 Tekst: {tekst[:80]}{'...' if len(tekst) > 80 else ''}")
        print(f"🖼️ Zdjęcie: {'TAK' if zdjecie else 'BRAK'}")

# Generowanie pliku HTML
html = f"""
<div class="danie-dnia">
  <h2>Danie dnia ({datetime.date.today().strftime('%d.%m.%Y')})</h2>
  <p>{tekst}</p>
  {f'<img src="{zdjecie}" alt="danie dnia" style="max-width:100%;">' if zdjecie else ''}
</div>
"""

with open("danie_dnia.html", "w", encoding="utf-8") as f:
    f.write(html)

print("🎉 Zaktualizowano plik danie_dnia.html")
