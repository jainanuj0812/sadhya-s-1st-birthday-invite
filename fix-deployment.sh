#!/bin/bash

echo "🔧 GitHub Pages Deployment Fix Script"
echo "====================================="
echo ""

# Step 1: Check repository setup
echo "📋 Step 1: Checking repository setup..."
REPO_URL=$(git remote get-url origin)
echo "Repository: $REPO_URL"

if [[ $REPO_URL != *"jainanuj0812/sadhya-s-1st-birthday-invite"* ]]; then
    echo "❌ ERROR: Repository URL doesn't match expected URL"
    echo "Expected: https://github.com/jainanuj0812/sadhya-s-1st-birthday-invite.git"
    echo "Got: $REPO_URL"
    exit 1
fi

# Step 2: Build the project
echo ""
echo "🏗️ Step 2: Building project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ ERROR: Build failed"
    exit 1
fi

echo "✅ Build successful!"

# Step 3: Manual instructions for GitHub Pages
echo ""
echo "🌐 Step 3: GitHub Pages Setup Instructions"
echo "=========================================="
echo ""
echo "To fix the 404 error, follow these steps:"
echo ""
echo "1. Go to: https://github.com/jainanuj0812/sadhya-s-1st-birthday-invite/settings/pages"
echo ""
echo "2. Under 'Source', select: 'GitHub Actions'"
echo ""
echo "3. If your repository is private, make it public:"
echo "   - Go to Settings → General → Danger Zone"
echo "   - Click 'Change repository visibility'"
echo "   - Select 'Make public'"
echo ""
echo "4. Wait for the GitHub Actions to complete"
echo ""
echo "5. Your site will be available at:"
echo "   https://jainanuj0812.github.io/sadhya-s-1st-birthday-invite/"
echo ""
echo "🔧 IMPORTANT: The repository must be PUBLIC for GitHub Pages to work with free accounts!"
echo ""
echo "✅ Once you've completed these steps, try pushing again:"
echo "   git add ."
echo "   git commit -m \"Fix deployment\""
echo "   git push origin main"
