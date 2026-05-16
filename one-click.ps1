# fix-tailwind.ps1
Write-Host "Fixing Tailwind CSS installation..." -ForegroundColor Yellow

# Clean everything
Write-Host "Removing old packages..." -ForegroundColor Cyan
npm uninstall tailwindcss @tailwindcss/postcss @tailwindcss/vite -y
Remove-Item -Path node_modules -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item -Path package-lock.json -Force -ErrorAction SilentlyContinue

# Fresh install
Write-Host "Installing dependencies..." -ForegroundColor Cyan
npm install

# Install Tailwind v3
Write-Host "Installing Tailwind CSS v3..." -ForegroundColor Cyan
npm install -D tailwindcss@3.4.17 postcss@8.4.49 autoprefixer@10.4.20

# Create config files
Write-Host "Creating configuration files..." -ForegroundColor Cyan
@'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
'@ | Out-File -FilePath tailwind.config.js -Encoding utf8

@'
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
'@ | Out-File -FilePath postcss.config.js -Encoding utf8

# Update CSS
@'
@tailwind base;
@tailwind components;
@tailwind utilities;
'@ | Out-File -FilePath src/index.css -Encoding utf8

# Remove Vite cache
Remove-Item -Path .vite -Recurse -Force -ErrorAction SilentlyContinue

Write-Host "`nTailwind CSS v3 setup complete!" -ForegroundColor Green
Write-Host "Run 'npm run dev' to start your app" -ForegroundColor Yellow