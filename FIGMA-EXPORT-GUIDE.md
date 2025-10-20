# Figma Image Export Guide

To complete the website, you need to export the following images from your Figma design and place them in the `public/images/` folder.

## Required Images

### 1. Hero Phone Mockup
- **Figma Frame**: Main hero section phone mockup (the one showing app interface with multiple screens)
- **Export as**: `hero-phone-mockup.png`
- **Recommended size**: 2x or 3x for retina displays
- **Location**: Save to `public/images/hero-phone-mockup.png`

### 2. Single Phone Mockup
- **Figma Frame**: The phone mockup in the "From Court Confusion to Court Click" section
- **Export as**: `phone-mockup-2.png`
- **Recommended size**: 2x for retina displays
- **Location**: Save to `public/images/phone-mockup-2.png`

### 3. Mobile App Preview
- **Figma Frame**: The phone mockup in the maroon card showing the app
- **Export as**: `mobile-app-preview.png`
- **Recommended size**: 2x for retina displays
- **Location**: Save to `public/images/mobile-app-preview.png`

### 4. App Store Badges (Optional)
If you have custom app store badges in Figma:
- **Export as**: `app-store.png` and `google-play.png`
- **Location**: Save to `public/images/`

## How to Export from Figma

1. **Open your Figma file**: 
   - Go to https://www.figma.com/design/i8jQ0Oyl6Bkd4nJztjSXtC/Court-Click-Website---Web-App?node-id=20-1482

2. **Select the frame/image to export**:
   - Click on the phone mockup or image in your design

3. **Open Export panel**:
   - Look at the right sidebar
   - Scroll down to find the "Export" section
   - If you don't see it, click the "+" button to add export settings

4. **Configure export settings**:
   - Format: PNG (recommended for images with transparency)
   - Scale: 2x or 3x for high-quality retina displays
   - Click "Export [Frame Name]"

5. **Save to the correct location**:
   - Navigate to: `C:\Users\vivom\Desktop\courseclick\public\images\`
   - Save with the exact filename listed above

6. **Refresh your browser**:
   - After adding all images, refresh your localhost:3000 page
   - The images should now appear correctly

## Alternative: Export All at Once

1. Select all the frames you need to export (hold Ctrl/Cmd and click each one)
2. In the Export panel, add export settings
3. Click "Export" and they'll download as a ZIP file
4. Extract and rename them according to the list above
5. Move all files to `public/images/`

## Current Status

The website is fully coded and running on **http://localhost:3000**. It includes:
- ✅ Navigation with exact menu items from Figma
- ✅ Hero section with stats
- ✅ Features section (4 cards)
- ✅ "From Court Confusion to Court Click" section
- ✅ "Different Home One Powerful Platform" dark section with 4 user types
- ✅ Mobile app download section
- ✅ Testimonials with ratings
- ✅ FAQ accordion (interactive)
- ✅ Complete footer with all links

**Placeholder images are currently shown. Replace them with your Figma exports to complete the design!**

