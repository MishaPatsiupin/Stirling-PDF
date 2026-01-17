# Custom Build Instructions

This fork has been customized to remove self-promotion, external links, and network interactions for offline use.

## Changes Made

### UI Modifications
- **Footer removed**: All links (Survey, Privacy Policy, GitHub, Discord, etc.) have been removed
- **Right rail simplified**: Language selector and theme toggle removed, only essential download button remains
- **Banners removed**: All upgrade and promotional banners disabled

### Network Interactions Disabled
- **Analytics removed**: PostHog tracking completely disabled
- **Update checks disabled**: Version update checks and notifications disabled
- **Offline mode**: Application works completely offline without any external network calls

## Building Windows Executable

### Option 1: GitHub Actions (Recommended)

The easiest way to build the Windows executable is using GitHub Actions:

1. Go to the **Actions** tab in this GitHub repository
2. Select **"Multi-OS Tauri Releases"** workflow from the left sidebar
3. Click **"Run workflow"** button on the right
4. Select **"windows"** as the platform
5. Choose whether to run in test mode
6. Click **"Run workflow"**

Once the build completes:
- Download the artifacts from the workflow run
- The Windows installer (.exe) will be in the artifacts

### Option 2: Local Build

Requirements:
- **Java 21** (JDK 21 or higher)
- **Node.js 22** or higher
- **Rust toolchain** (install from https://rustup.rs/)
- **Windows SDK** (for Windows builds)

Steps:

1. **Clone the repository**
   ```bash
   git clone https://github.com/MishaPatsiupin/Stirling-PDF.git
   cd Stirling-PDF
   ```

2. **Build the backend JAR**
   ```bash
   ./gradlew clean build -PbuildWithFrontend=true -x test
   ```

3. **Build Windows desktop application**
   ```bash
   cd frontend
   npm install --legacy-peer-deps
   npm run tauri-build -- --target x86_64-pc-windows-msvc
   ```

4. **Find the installer**
   - The Windows installer will be at: `frontend/src-tauri/target/x86_64-pc-windows-msvc/release/bundle/msi/`
   - File name: `Stirling-PDF_<version>_x64_en-US.msi` or similar

## Build Variants

Three JAR variants are available:
- **Default**: No login required, full frontend
- **With-login**: Security features enabled
- **Server-only**: Backend only, no frontend bundled

For Windows desktop app, the Tauri build bundles everything needed.

## Environment Variables

To disable security features during build:
```bash
export DOCKER_ENABLE_SECURITY=false
```

## Troubleshooting

### Build fails with "dayjs not found"
Run:
```bash
cd frontend
npm install dayjs --legacy-peer-deps
```

### Build fails with network errors (Puppeteer)
Run:
```bash
export PUPPETEER_SKIP_DOWNLOAD=true
npm install --legacy-peer-deps
```

### Windows build missing dependencies
Make sure you have:
- Visual Studio Build Tools with C++ workload
- Windows 10 SDK or later

## Notes

- This customized version is designed for **offline use only**
- All external network calls have been removed
- Default language and theme cannot be changed from the UI (can be modified in code if needed)
- Footer is completely hidden to provide more workspace

## Original Repository

This is a fork of [Stirling-Tools/Stirling-PDF](https://github.com/Stirling-Tools/Stirling-PDF)

For original documentation and features, please refer to the upstream repository.
