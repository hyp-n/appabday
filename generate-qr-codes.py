#!/usr/bin/env python3
"""QR Code Generator for Dad's Birthday Scavenger Hunt."""

import json
import os
import sys

try:
    import qrcode
except ImportError:
    print("Error: 'qrcode' library not installed.")
    print("Install it with: pip install qrcode[pil]")
    sys.exit(1)


CONFIG_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), "config.json")
OUTPUT_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "qr-codes")


def load_config(path=CONFIG_PATH):
    with open(path, "r", encoding="utf-8") as f:
        return json.load(f)


def generate_qr_codes(config, output_dir=OUTPUT_DIR):
    os.makedirs(output_dir, exist_ok=True)

    settings = config.get("generation_settings", {})
    error_correction = {
        "L": qrcode.constants.ERROR_CORRECT_L,
        "M": qrcode.constants.ERROR_CORRECT_M,
        "Q": qrcode.constants.ERROR_CORRECT_Q,
        "H": qrcode.constants.ERROR_CORRECT_H,
    }.get(settings.get("error_correction_level", "M"), qrcode.constants.ERROR_CORRECT_M)

    box_size = int(settings.get("box_size", 10))
    border = int(settings.get("border", 4))

    qr_codes = config.get("qr_codes", [])
    generated = []

    for qr in qr_codes:
        qr_id = qr.get("id")
        target_url = qr.get("target_url", "")
        fill_color = qr.get("color", "black")
        back_color = qr.get("background", "white")
        size = qr.get("size", "300x300")

        qr_obj = qrcode.QRCode(
            version=None,
            error_correction=error_correction,
            box_size=box_size,
            border=border,
        )
        qr_obj.add_data(target_url)
        qr_obj.make(fit=True)

        img = qr_obj.make_image(fill_color=fill_color, back_color=back_color)

        # Parse size like "300x300"
        try:
            w, h = map(int, size.split("x"))
            img = img.resize((w, h))
        except Exception:
            pass

        output_path = os.path.join(output_dir, f"{qr_id}.png")
        img.save(output_path)
        generated.append(output_path)
        print(f"Generated: {output_path} -> {target_url}")

    return generated


def main():
    try:
        config = load_config()
    except FileNotFoundError:
        print(f"Error: config file not found at {CONFIG_PATH}")
        sys.exit(1)
    except json.JSONDecodeError as e:
        print(f"Error: invalid JSON in config: {e}")
        sys.exit(1)

    generated = generate_qr_codes(config)
    print(f"\nGenerated {len(generated)} QR code(s) in '{OUTPUT_DIR}/'")


if __name__ == "__main__":
    main()
