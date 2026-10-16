# Birthday QR Code Project

This project generates QR codes for a birthday celebration that can be placed around the house to lead to birthday content hosted on GitHub Pages.

## Overview

Create engaging birthday QR codes that lead to special content related to your dad's birthday celebration. This setup allows you to place physical QR codes around the house that, when scanned, reveal birthday surprises, photos, messages, or other celebration content.

## Features

- Generate multiple QR codes with custom messages and locations
- Host content on GitHub Pages
- Organize QR codes by location around the house
- Include descriptions and images for each QR code
- Easy deployment process

## Quick Start

1. Configure QR codes in `config.json`
2. Generate QR codes using `generate-qr-codes.py`
3. Deploy `birthday-content/` to GitHub Pages
4. Print or display QR codes around the house

## File Structure

- `index.html` - Main page showing QR code locations and descriptions
- `birthday-content/` - The actual GitHub Pages website content
- `qr-codes/` - Generated QR code images
- `config.json` - QR code configuration
- `generate-qr-codes.py` - QR code generation script
- `README.md` - This documentation

## Generated QR Codes

This directory contains the physical QR code images that should be placed around the house:

- `living-room-qr.png` - Living room QR code
- `kitchen-qr.png` - Kitchen QR code
- `bedroom-qr.png` - Bedroom QR code
- `garden-qr.png` - Garden/outdoor QR code
- `bathroom-qr.png` - Bathroom QR code

## GitHub Pages Setup

1. Create a new GitHub repository named `[your-username].github.io` or similar
2. Initialize it as a Git repository
3. Copy the contents of `birthday-content/` into the repository
4. Commit and push the changes
5. Go to repository Settings → Pages and select the GitHub Pages branch

## QR Code Usage

Print the QR code images and place them around the house in the specified locations. When scanned with a smartphone camera or QR code reader app, they will direct to the birthday content on GitHub Pages.

## Customization

Edit `config.json` to:
- Change locations (e.g., "living-room", "kitchen", etc.)
- Update target URLs to your GitHub Pages content
- Add custom descriptions for each QR code
- Adjust QR code sizes and colors if needed

## Support

For questions or support, contact the project maintainer.