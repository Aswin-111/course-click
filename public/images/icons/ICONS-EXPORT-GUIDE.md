# Feature Icons Export Guide

## 📦 Required Icons for Features Section

Export the following icons from your Figma design and place them in this folder (`public/images/icons/`):

### 1. Case Management Icon
- **Figma**: Find the briefcase/folder icon in the Features section
- **Filename**: `case-management.svg`
- **Recommended format**: SVG (scalable, best for icons)
- **Alternative format**: PNG (64x64px or 128x128px @2x)

### 2. Certified True Copy Icon
- **Figma**: Find the document with checkmark/seal icon
- **Filename**: `certified-true-copy.svg`
- **Recommended format**: SVG
- **Alternative format**: PNG (64x64px or 128x128px @2x)

### 3. eSign Icon
- **Figma**: Find the document with pen/signature icon
- **Filename**: `esign.svg`
- **Recommended format**: SVG
- **Alternative format**: PNG (64x64px or 128x128px @2x)

### 4. Notarise Icon
- **Figma**: Find the document with magnifying glass/stamp icon
- **Filename**: `notarise.svg`
- **Recommended format**: SVG
- **Alternative format**: PNG (64x64px or 128x128px @2x)

---

## 🎨 How to Export Icons from Figma

### Method 1: Export as SVG (Recommended)

1. **Open your Figma file**:
   - Go to: https://www.figma.com/design/i8jQ0Oyl6Bkd4nJztjSXtC/Court-Click-Website---Web-App

2. **Select the icon**:
   - Click on the icon in the Features section
   - Make sure you select the icon frame/group (not just a layer inside)

3. **Export Settings**:
   - Look at the right sidebar → "Export" section
   - Click "+" to add export settings if not present
   - Choose format: **SVG**
   - Click "Export [icon name]"

4. **Save the file**:
   - Navigate to: `C:\Users\vivom\Desktop\courseclick\public\images\icons\`
   - Rename to match the required filename above

5. **Repeat for all 4 icons**

---

### Method 2: Export as PNG (Alternative)

If SVG is not available:

1. Select the icon in Figma
2. Export settings:
   - Format: **PNG**
   - Scale: **2x** (for retina displays)
   - Size should be around 64x64px to 128x128px
3. Save with the same filenames (but with .png extension)

---

## 🚀 Quick Batch Export

To export all icons at once:

1. In Figma, hold **Ctrl** (Windows) or **Cmd** (Mac)
2. Click each of the 4 icons to select them all
3. In the Export panel, add export settings
4. Click "Export 4 layers"
5. They'll download as a ZIP file
6. Extract and rename each file according to the list above
7. Move all 4 icons to: `C:\Users\vivom\Desktop\courseclick\public\images\icons\`

---

## ✅ Verification Checklist

After exporting, you should have these files:

```
public/
└── images/
    └── icons/
        ├── case-management.svg (or .png)
        ├── certified-true-copy.svg (or .png)
        ├── esign.svg (or .png)
        └── notarise.svg (or .png)
```

---

## 🎯 Current Status

**Placeholder icons are currently shown** (first letter of each feature in a colored box).

Once you add the real icons, the page will automatically display them!

**Refresh** http://localhost:3001 after adding icons to see them appear.

---

## 💡 Tips

1. **SVG is preferred** because:
   - Scales perfectly at any size
   - Smaller file size
   - Can be styled with CSS
   - Crisp on all displays

2. **Icon colors**: 
   - If your icons are colored, export as-is
   - If they're black/white, the component will display them as-is
   - You can adjust colors in the component later if needed

3. **Icon size**: 
   - The component displays icons at 40x40px (w-10 h-10)
   - Export at 2x size for best quality

---

## 🔄 After Adding Icons

1. Place all 4 icon files in this folder
2. Refresh your browser at http://localhost:3001
3. The placeholder boxes will be replaced with your actual icons
4. If icons don't appear, check:
   - Filenames match exactly (case-sensitive)
   - Files are in the correct folder
   - File extensions are correct (.svg or .png)


