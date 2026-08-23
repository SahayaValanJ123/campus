# How to Build Native Android APK for VV CampusPulse

This project is configured with **Automatic GitHub Actions**, as well as local build commands.

---

## ⚡ Method 1: Automatic Build via GitHub Actions (Zero Setup Needed)

Every time you push your code to GitHub, GitHub Actions will automatically compile the `.apk` file for you!

1. Push your repository to GitHub (`git push origin main`).
2. Go to your GitHub repository in your browser.
3. Click on the **Actions** tab at the top.
4. Click on the latest workflow run named **"Build Android APK"**.
5. Scroll down to **Artifacts** and click **`vv-campuspulse-apk`** to download your ready-to-install `.apk` file!

---

## 💻 Method 2: Local Build using Capacitor & Android Studio

```bash
# 1. Install dependencies in d:\COLLEGE
npm install

# 2. Add Android platform
npx cap add android

# 3. Copy web files and build APK
npx cap copy android
cd android && ./gradlew assembleDebug
```

Your generated APK will be at:
`android/app/build/outputs/apk/debug/app-debug.apk`

---

## 🔑 Default Invite Codes & Roles for Testing
- **Invite Code**: `VV2026`
- **Role Switcher**: Click the **Student** badge in the top header to cycle roles:
  - `👨‍🎓 Student` ➔ Test browsing materials & posting marketplace items
  - `🛡️ Dept Mod` ➔ Unlocks the **Moderator Pending Queue** drawer to approve/reject student uploads
  - `👨‍🏫 Staff` ➔ Unlocks read-only circular notices
  - `👑 Admin` ➔ Unlocks full admin moderation
