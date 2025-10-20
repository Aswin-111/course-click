# Testimonials Images Export Guide

## 📸 Required Images

Export profile photos from your Figma design and place them in this folder (`public/images/testimonials/`):

### Profile Photos (Optional)

If you have actual profile photos in Figma:

1. **testimonial-1.jpg** - Adv. Arun Menon
2. **testimonial-2.jpg** - Neha Suresh  
3. **testimonial-3.jpg** - Other testimonial profiles
4. **testimonial-4.jpg** - (Add more as needed)
5. **testimonial-5.jpg** - (Add more as needed)

**Note**: If images are not provided, the component will show beautiful gradient placeholders with initials.

---

## 🎨 How to Export from Figma

1. Find profile photos in your testimonials design
2. Select each image
3. Export settings:
   - Format: **JPG** or PNG
   - Scale: **2x** (for retina displays)
   - Size: 96x96px @2x (displays at 48x48px)
4. Save with filenames: `testimonial-1.jpg`, `testimonial-2.jpg`, etc.
5. Place in: `C:\Users\vivom\Desktop\courseclick\public\images\testimonials\`

---

## 📐 Image Specifications

- **Format**: JPG or PNG
- **Size**: 96x96px @2x (or 128x128px for better quality)
- **Shape**: Square (will be displayed as circles)
- **File size**: < 50KB per image

---

## 🎯 Current Status

**Placeholders shown**: Gradient circles with user initials (e.g., "A" for Arun)

**After adding images**: Your actual profile photos will appear

---

## 💡 Placeholder System

The component automatically:
- Shows gradient placeholder if no image provided
- Shows first letter of person's name
- Beautiful purple-to-pink gradient
- Fallback if image fails to load

This means **images are completely optional** - the site looks great with just placeholders!

---

## ✅ Verification

If you add images, they should be named:
```
public/
└── images/
    └── testimonials/
        ├── testimonial-1.jpg
        ├── testimonial-2.jpg
        ├── testimonial-3.jpg
        ├── testimonial-4.jpg
        └── testimonial-5.jpg
```

---

**The testimonials section works perfectly without images!** The gradient placeholders look professional and modern.

