Set-Location "C:\Users\Usuario\Desktop\cm\casos\Cosentino identificacion puntos de venta retail\paises\Uzbekistan 2.0"

[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$OutputEncoding = [System.Text.Encoding]::UTF8

$Prompt = Get-Content ".\RUN_CLAUDE_NIGHT.md" -Raw -Encoding UTF8

$Prompt | claude -p --permission-mode acceptEdits --output-format text 2>&1 |
    Out-File ".\claude_night_log.txt" -Encoding UTF8
