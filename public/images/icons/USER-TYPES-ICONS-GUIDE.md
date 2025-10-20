# User Types Icons Export Guide

## 📦 Required Icons for User Types Section

Export the following 4 icons from your Figma design and place them in this folder (`public/images/icons/`):

### 1. Public/Litigant Icon
- **Figma**: Find the person/user icon in the "User Types" section
- **Filename**: `public-litigant.svg`
- **Description**: Typically a person or user profile icon
- **Recommended format**: SVG (white icon on transparent background)
- **Alternative format**: PNG (48x48px or 96x96px @2x)

### 2. Lawyers Icon
- **Figma**: Find the briefcase/justice scale icon
- **Filename**: `lawyers.svg`
- **Description**: Professional icon (briefcase, gavel, scales, or law-related symbol)
- **Recommended format**: SVG (white icon)
- **Alternative format**: PNG (48x48px or 96x96px @2x)

### 3. Clerks Icon
- **Figma**: Find the desk/office/document icon
- **Filename**: `clerks.svg`
- **Description**: Administrative icon (desk, files, clipboard, or office symbol)
- **Recommended format**: SVG (white icon)
- **Alternative format**: PNG (48x48px or 96x96px @2x)

### 4. Law Students Icon
- **Figma**: Find the graduation cap/book icon
- **Filename**: `law-students.svg`
- **Description**: Education icon (graduation cap, book, or student symbol)
- **Recommended format**: SVG (white icon)
- **Alternative format**: PNG (48x48px or 96x96px @2x)

---

## 🎨 How to Export Icons from Figma

### Step 1: Open Figma
- Go to: https://www.figma.com/design/i8jQ0Oyl6Bkd4nJztjSXtC/Court-Click-Website---Web-App

### Step 2: Locate Icons
- Navigate to the "User Types" or "Different Users" section
- This is the dark section with 4 user type cards
- Find the white icons at the top of each card

### Step 3: Select Each Icon
1. Click on the icon (make sure to select the icon, not just a layer)
2. The icon should be **white** in color
3. Select the full icon frame/group

### Step 4: Export Settings
1. Right sidebar → "Export" section
2. Click "+" to add export settings
3. Choose format: **SVG** (recommended) or PNG
4. If PNG: use **2x scale** (96x96px)
5. Click "Export [icon name]"

### Step 5: Save Files
- Navigate to: `C:\Users\vivom\Desktop\courseclick\public\images\icons\`
- Save with exact filenames:
  - `public-litigant.svg`
  - `lawyers.svg`
  - `clerks.svg`
  - `law-students.svg`

---

## 💡 Important Notes

### Icon Color
These icons should be **WHITE** because they display on a **DARK background**.

- If your icons export as black, you may need to:
  1. Change fill color to white in Figma before exporting
  2. Or export as SVG and edit the fill color in the file
  3. Or the component will show placeholder icons

### Icon Style
- Simple, clean line icons work best
- Should be easily recognizable
- Consistent style across all 4 icons
- Size: Icons display at 48x48px (w-12 h-12)

---

## 🚀 Quick Batch Export

To export all 4 icons at once:

1. Hold **Ctrl** (Windows) or **Cmd** (Mac)
2. Click each of the 4 user type icons to select them
3. In Export panel, add export settings (SVG or PNG @2x)
4. Click "Export 4 layers"
5. Download ZIP, extract, and rename files
6. Move to `public/images/icons/`

---

## ✅ Verification Checklist

After exporting, you should have:

```
public/
└── images/
    └── icons/
        ├── public-litigant.svg (or .png)
        ├── lawyers.svg (or .png)
        ├── clerks.svg (or .png)
        ├── law-students.svg (or .png)
        ├── case-management.svg ✓
        ├── certified-true-copy.svg ✓
        ├── esign.svg ✓
        └── notarise.svg ✓
```

---

## 🎯 Current Status

**Placeholder shown**: White circle with person silhouette icon.

**After adding icons**: Your actual Figma icons will appear on each user type card.

---

## 🔄 After Adding Icons

1. Place all 4 icon files in `public/images/icons/`
2. Refresh browser: http://localhost:3001
3. Scroll to "User Types" section (dark section)
4. Placeholder icons will be replaced with your designs

---

## 🎨 SVG Color Adjustment (if needed)

If you export SVG icons and they appear black instead of white:

1. Open the SVG file in a text editor
2. Find `fill="#000000"` or `fill="black"`
3. Replace with `fill="#ffffff"` or `fill="white"`
4. Save the file
5. Refresh browser

Example:
```svg
<!-- Before -->
<path fill="#000000" d="M12 2C6.48..."/>

<!-- After -->
<path fill="#ffffff" d="M12 2C6.48..."/>
```

---

## 📐 Icon Specifications

- **Display size**: 48x48px (w-12 h-12 in Tailwind)
- **Export size**: 48x48px (1x) or 96x96px (2x recommended)
- **Color**: White (#ffffff)
- **Background**: Transparent
- **Format**: SVG preferred, PNG acceptable
- **File size**: < 10KB per icon (SVG), < 50KB (PNG)

---

**Once you add these 4 icons, the User Types section will be complete!** ✨

The dark section will look professional with your custom icons for each user type.


