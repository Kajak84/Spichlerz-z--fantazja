import requests
import datetime
import os

PAGE_ID = os.getenv("AFdNb1K9AgSGGRcN8eMJj33")       # ID strony z Facebooka
ACCESS_TOKEN = os.getenv("EAAfCrK0kMV4BPXtCiLxyWeT8D7ZCTI6xCPeqUCW2cUTpa03VZB5JBmve5HTeFctgsHmWeKsQDgk6BOYDvX9oLAEtZAD5UbFtVmTZARfnFiiU7taXW6p3qrSHSSgtzy77yFhHQZAjhEQ7z5ziR5pe5eqSwDyaRYPlz49bzP9uc6Yt0AFv4bx8PCMFKRXDzW8ylfepuBc66kaNSytiWtz0A8ZCIsbCKSjQ8HjL7R")    # Token API (ustawiony w GitHub Secrets)

url = f"https://graph.facebook.com/{PAGE_ID}/posts"
params = {
    "fields": "message,full_picture,created_time",
    "limit": 1,
    "access_token": ACCESS_TOKEN
}
response = requests.get(url, params=params).json()

latest_post = response['data'][0]
tekst = latest_post.get("message", "Brak treści")
zdjecie = latest_post.get("full_picture", "")

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

print("✅ Zaktualizowano danie dnia")
