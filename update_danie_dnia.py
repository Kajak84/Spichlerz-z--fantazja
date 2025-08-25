name: Update Danie Dnia

on:
  schedule:
    - cron: "0 10 * * *"   # codziennie o 10:00 (UTC!)
  workflow_dispatch:       # ręczne uruchomienie

jobs:
  update-danie:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repo
        uses: actions/checkout@v3

      - name: Setup Python
        uses: actions/setup-python@v4
        with:
          python-version: "3.11"

      - name: Install dependencies
        run: pip install requests

      - name: Run update script
        env:
          FB_PAGE_ID: ${{ secrets.FB_PAGE_ID }}
          FB_TOKEN: ${{ secrets.FB_TOKEN }}
        run: |
          python update_danie_dnia.py

      - name: Commit changes
        run: |
          git config --global user.name "github-actions[bot]"
          git config --global user.email "github-actions[bot]@users.noreply.github.com"
          git add danie_dnia.html || echo "Brak zmian"
          git commit -m "Aktualizacja dania dnia" || echo "Brak zmian do commitowania"
          git push
