$ErrorActionPreference = "Stop"

$projectRoot = Split-Path -Parent $PSScriptRoot
$packageJsonPath = Join-Path $projectRoot "package.json"
$distPath = Join-Path $projectRoot "dist\my-angular-template"
$releaseRoot = Join-Path $projectRoot "release"
$stagingPath = Join-Path $releaseRoot "votica-template-admin-dashboard"

if (!(Test-Path $distPath)) {
  throw "Production build not found. Run 'npm run build:prod' first."
}

$pkg = Get-Content $packageJsonPath | ConvertFrom-Json
$version = $pkg.version

if (Test-Path $stagingPath) {
  Remove-Item $stagingPath -Recurse -Force
}

if (!(Test-Path $releaseRoot)) {
  New-Item -ItemType Directory -Path $releaseRoot | Out-Null
}

New-Item -ItemType Directory -Path $stagingPath | Out-Null

$docs = @(
  "README.md",
  "CHANGELOG.md",
  "LICENSE",
  "CREDITS.md",
  "SUPPORT.md",
  "RELEASE_CHECKLIST.md",
  "MARKETPLACE_ASSETS.md"
)

foreach ($doc in $docs) {
  $source = Join-Path $projectRoot $doc
  if (Test-Path $source) {
    Copy-Item $source -Destination (Join-Path $stagingPath $doc) -Force
  }
}

Copy-Item $distPath -Destination (Join-Path $stagingPath "dist") -Recurse -Force
Copy-Item (Join-Path $projectRoot "src") -Destination (Join-Path $stagingPath "src") -Recurse -Force
Copy-Item (Join-Path $projectRoot "public") -Destination (Join-Path $stagingPath "public") -Recurse -Force
Copy-Item (Join-Path $projectRoot "angular.json") -Destination (Join-Path $stagingPath "angular.json") -Force
Copy-Item (Join-Path $projectRoot "package.json") -Destination (Join-Path $stagingPath "package.json") -Force
Copy-Item (Join-Path $projectRoot "package-lock.json") -Destination (Join-Path $stagingPath "package-lock.json") -Force
Copy-Item (Join-Path $projectRoot "tsconfig.json") -Destination (Join-Path $stagingPath "tsconfig.json") -Force
Copy-Item (Join-Path $projectRoot "tsconfig.app.json") -Destination (Join-Path $stagingPath "tsconfig.app.json") -Force
Copy-Item (Join-Path $projectRoot "tsconfig.spec.json") -Destination (Join-Path $stagingPath "tsconfig.spec.json") -Force

$zipName = "votica-template-admin-dashboard-v$version.zip"
$zipPath = Join-Path $releaseRoot $zipName

if (Test-Path $zipPath) {
  Remove-Item $zipPath -Force
}

Compress-Archive -Path (Join-Path $stagingPath "*") -DestinationPath $zipPath -CompressionLevel Optimal

Write-Host "Release package created:"
Write-Host $zipPath

