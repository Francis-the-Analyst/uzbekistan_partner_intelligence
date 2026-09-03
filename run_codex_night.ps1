Set-Location "C:\Users\Usuario\Desktop\cm\casos\Cosentino identificacion puntos de venta retail\paises\Uzbekistan 2.0"

$Prompt = Get-Content ".\RUN_NIGHT.md" -Raw

codex exec --skip-git-repo-check $Prompt *> ".\codex_night_log.txt"
