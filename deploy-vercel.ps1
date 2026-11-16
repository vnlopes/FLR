param(
    [Parameter(Mandatory=$false)]
    [string]$Token = $env:VERCEL_TOKEN,
    [Parameter(Mandatory=$false)]
    [string]$TeamId = "team_A4x3eqZJZX7tPPP5b0G020Za",
    [Parameter(Mandatory=$false)]
    [string]$ProjectName = "flr-mecanica-diesel"
)

if (-not $Token) {
    Write-Error "Defina a variavel VERCEL_TOKEN ou passe -Token <seu_token_vercel>."
    exit 1
}

$ErrorActionPreference = "Stop"
$projectRoot = $PSScriptRoot
$sha1 = [System.Security.Cryptography.SHA1]::Create()

$files = Get-ChildItem -Path $projectRoot -Recurse -File | Where-Object {
    $_.Name -ne "deploy-vercel.ps1"
}

$deploymentFiles = @()

foreach ($f in $files) {
    $relPath = $f.FullName.Substring($projectRoot.Length + 1).Replace('\', '/')
    $bytes = [System.IO.File]::ReadAllBytes($f.FullName)
    $hash = ($sha1.ComputeHash($bytes) | ForEach-Object { $_.ToString("x2") }) -join ""

    Write-Host "Enviando $relPath ($($bytes.Length) bytes)..."
    $uploadUrl = "https://api.vercel.com/v2/files?teamId=$TeamId"
    $headers = @{
        "Authorization"  = "Bearer $Token"
        "Content-Type"   = "application/octet-stream"
        "x-vercel-digest" = $hash
    }

    Invoke-RestMethod -Uri $uploadUrl -Method Post -Headers $headers -Body $bytes | Out-Null

    $deploymentFiles += @{
        file = $relPath
        sha  = $hash
        size = $bytes.Length
    }
}

Write-Host "Criando deployment de producao na Vercel..."
$deployUrl = "https://api.vercel.com/v13/deployments?teamId=$TeamId&skipAutoDetectionConfirmation=1"
$deployBody = @{
    name            = $ProjectName
    target          = "production"
    files           = $deploymentFiles
    projectSettings = @{
        framework = $null
    }
} | ConvertTo-Json -Depth 6

$deployHeaders = @{
    "Authorization" = "Bearer $Token"
    "Content-Type"  = "application/json"
}

$res = Invoke-RestMethod -Uri $deployUrl -Method Post -Headers $deployHeaders -Body $deployBody
Write-Host ""
Write-Host "====================================================="
Write-Host "DEPLOY CONCLUIDO COM SUCESSO!"
Write-Host "URL: https://$($res.url)"
Write-Host "====================================================="
