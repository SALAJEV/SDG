param(
  [int]$Port = 8000
)

$scriptRoot = Split-Path -LiteralPath $MyInvocation.MyCommand.Path -Parent
$rootPath = [System.IO.Path]::GetFullPath($scriptRoot).TrimEnd('\') + '\'
$prefix = "http://localhost:$Port/"

$contentTypes = @{
  ".css" = "text/css; charset=utf-8"
  ".html" = "text/html; charset=utf-8"
  ".ico" = "image/x-icon"
  ".jpg" = "image/jpeg"
  ".jpeg" = "image/jpeg"
  ".js" = "text/javascript; charset=utf-8"
  ".json" = "application/json; charset=utf-8"
  ".manifest" = "application/manifest+json; charset=utf-8"
  ".png" = "image/png"
  ".svg" = "image/svg+xml; charset=utf-8"
  ".txt" = "text/plain; charset=utf-8"
  ".webmanifest" = "application/manifest+json; charset=utf-8"
}

$listener = [System.Net.HttpListener]::new()
$listener.Prefixes.Add($prefix)
$listener.Start()

Write-Host ""
Write-Host "Challenge 10 server gestart op $prefix"
Write-Host "Open deze URL in je browser om camera en QR-scanner te gebruiken."
Write-Host "Druk op Ctrl+C om te stoppen."
Write-Host ""

try {
  while ($listener.IsListening) {
    $context = $listener.GetContext()
    $response = $context.Response

    try {
      $relativePath = [System.Uri]::UnescapeDataString($context.Request.Url.AbsolutePath.TrimStart('/'))

      if ([string]::IsNullOrWhiteSpace($relativePath)) {
        $relativePath = "index.html"
      }

      $candidatePath = Join-Path -Path $rootPath -ChildPath $relativePath
      $fullPath = [System.IO.Path]::GetFullPath($candidatePath)

      if (-not $fullPath.StartsWith($rootPath, [System.StringComparison]::OrdinalIgnoreCase)) {
        $response.StatusCode = 403
        $bytes = [System.Text.Encoding]::UTF8.GetBytes("Forbidden")
      } else {
        if (Test-Path -LiteralPath $fullPath -PathType Container) {
          $fullPath = Join-Path -Path $fullPath -ChildPath "index.html"
        }

        if (Test-Path -LiteralPath $fullPath -PathType Leaf) {
          $extension = [System.IO.Path]::GetExtension($fullPath).ToLowerInvariant()
          $response.ContentType = $contentTypes[$extension]

          if (-not $response.ContentType) {
            $response.ContentType = "application/octet-stream"
          }

          $bytes = [System.IO.File]::ReadAllBytes($fullPath)
          $response.StatusCode = 200
        } else {
          $response.StatusCode = 404
          $bytes = [System.Text.Encoding]::UTF8.GetBytes("Not found")
        }
      }

      $response.ContentLength64 = $bytes.Length
      $response.OutputStream.Write($bytes, 0, $bytes.Length)
    } catch {
      if (-not $response.OutputStream.CanWrite) {
        continue
      }

      $response.StatusCode = 500
      $bytes = [System.Text.Encoding]::UTF8.GetBytes("Internal server error")
      $response.ContentLength64 = $bytes.Length
      $response.OutputStream.Write($bytes, 0, $bytes.Length)
    } finally {
      $response.OutputStream.Close()
      $response.Close()
    }
  }
} finally {
  $listener.Stop()
  $listener.Close()
}
