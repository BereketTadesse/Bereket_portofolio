# Push to GitHub - BereketTadesse Account

## Step 1: Create a Personal Access Token (PAT)

1. Go to: https://github.com/settings/tokens
2. Click "Generate new token" → "Generate new token (classic)"
3. Give it a name like "Bereket_portofolio"
4. Select scopes: Check `repo` (this gives full repository access)
5. Click "Generate token"
6. **COPY THE TOKEN IMMEDIATELY** - you won't see it again!

## Step 2: Push using the token

You have two options:

### Option A: Push interactively (recommended for first time)
When you run `git push`, it will ask for:
- Username: `BereketTadesse`
- Password: **Paste your Personal Access Token here** (NOT your GitHub password)

### Option B: Update remote URL with token (automatic)
Run this command (replace YOUR_TOKEN with your actual token):
```
git remote set-url origin https://YOUR_TOKEN@github.com/BereketTadesse/Bereket_portofolio.git
```

Then simply run:
```
git push origin main
```

## Current Status
- ✅ Remote URL updated to use BereketTadesse account
- ✅ Old GIGMUDAY credentials removed
- ⏳ Waiting for your Personal Access Token to authenticate

