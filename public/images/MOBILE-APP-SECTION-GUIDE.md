# Mobile App Section - Image Export Guide

## 📱 Required Images

Export the following 3 images from your Figma design and place them in `public/images/`:

### 1. Mobile Phone Mockup
- **Figma**: Find the phone mockup in "Your court case always in your pocket" section
- **Filename**: `mobile-app-phone.png`
- **Description**: Phone showing Court Click splash screen or home screen
- **Recommended format**: PNG with transparency (or with background)
- **Recommended size**: 640px-800px width @2x
- **Location**: Save to `public/images/`

### 2. App Store Badge
- **Figma**: Apple App Store download badge
- **Filename**: `app-store-badge.png`
- **Description**: Black "Download on the App Store" button
- **Recommended format**: PNG with transparency
- **Recommended size**: 280px width @2x (displays at 140px)
- **Location**: Save to `public/images/`

### 3. Google Play Badge
- **Figma**: Google Play download badge  
- **Filename**: `google-play-badge.png`
- **Description**: Black "Get it on Google Play" button
- **Recommended format**: PNG with transparency
- **Recommended size**: 280px width @2x (displays at 140px)
- **Location**: Save to `public/images/`

---

## 🎨 How to Export from Figma

### Export Mobile Phone Mockup

1. **Open Figma design**
2. Navigate to the mobile app section (Your court case always in your pocket)
3. **Select the phone frame**:
   - Should show the Court Click app splash/home screen
   - Dark/purple theme with "court click" branding
   - Include the phone bezel/frame
4. **Export settings**:
   - Format: **PNG**
   - Scale: **2x** (for retina displays)
   - Background: Transparent or with natural shadow
5. **Save as**: `mobile-app-phone.png`
6. **Location**: `C:\Users\vivom\Desktop\courseclick\public\images\`

---

### Export App Store Badges

#### Option 1: Export from Figma

1. Find the App Store and Google Play badges in your design
2. Select each badge
3. Export settings:
   - Format: **PNG**
   - Scale: **2x**
   - Transparent background
4. Save as:
   - `app-store-badge.png`
   - `google-play-badge.png`

#### Option 2: Download Official Badges

If not in Figma, download official badges:

**Apple App Store**:
- Visit: https://developer.apple.com/app-store/marketing/guidelines/
- Download official "Download on the App Store" badge
- Choose black version
- Save as `app-store-badge.png`

**Google Play**:
- Visit: https://play.google.com/intl/en_us/badges/
- Download official "Get it on Google Play" badge
- Choose black/dark version
- Save as `google-play-badge.png`

---

## 📐 Image Specifications

### Mobile Phone Mockup
- **Display size**: Responsive (max 640px on desktop)
- **Export size**: 640-800px width @2x
- **Height**: Proportional (usually 1200-1600px)
- **Format**: PNG
- **Background**: Transparent or with shadow
- **File size**: Aim for < 500KB

### App Store Badges
- **Display size**: 140px width × 48px height
- **Export size**: 280px width × 96px height @2x
- **Format**: PNG with transparency
- **Style**: Official Apple/Google badge design
- **File size**: < 50KB each

---

## ✅ Verification Checklist

After exporting, you should have these files:

```
public/
└── images/
    ├── mobile-app-phone.png        ← NEW
    ├── app-store-badge.png         ← NEW
    ├── google-play-badge.png       ← NEW
    ├── about-phone-mockup.png      ✓
    ├── hero-phone-mockup.png       ✓
    └── icons/                      ✓
```

---

## 🎯 Current Status

**Placeholders shown**:
- Phone: Purple Court Click splash screen mockup
- App Store: Black badge with placeholder text
- Google Play: Black badge with placeholder text

**After adding images**: Your actual phone design and official store badges will appear.

---

## 🔄 After Adding Images

1. Place all 3 files in `public/images/`
2. Refresh browser: http://localhost:3001
3. Scroll to mobile app section
4. Images will load automatically
5. If images don't appear:
   - Check filenames match exactly
   - Check files are in correct folder
   - Clear browser cache and refresh

---

## 💡 Tips

### Phone Mockup
- Should show the Court Click branding clearly
- Dark/purple themed screen
- Include realistic phone frame/bezel
- Shadow adds depth and realism

### Store Badges
- Use official badges when possible (better SEO)
- Both badges should have similar height
- Black/dark version matches the design
- Transparent background allows flexibility

### Quality
- Export at 2x resolution for sharp display
- Optimize file sizes for faster loading
- PNG format preserves quality and transparency

---

## 🎨 Alternative: Quick Setup

If you can't export immediately, the placeholders will work fine for development:
- Phone shows a basic mockup
- Store badges show text placeholders
- Everything is properly sized and positioned
- Replace with real images when ready

---

**Once you add these 3 images, the Mobile App section will be complete!** ✨

The section includes:
- ✅ Phone mockup on the left
- ✅ Content on the right
- ✅ Download buttons
- ✅ Support/contact section


