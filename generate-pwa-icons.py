from PIL import Image
import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

INPUT_IMAGE = os.path.join(BASE_DIR, "icon.png")
OUTPUT_DIR = os.path.join(BASE_DIR, "public", "icons")

SIZES = [72, 96, 128, 144, 152, 192, 384, 512]

if not os.path.exists(INPUT_IMAGE):
    raise FileNotFoundError(f"❌ icon.png não encontrado em {INPUT_IMAGE}")

os.makedirs(OUTPUT_DIR, exist_ok=True)

img = Image.open(INPUT_IMAGE).convert("RGBA")

for size in SIZES:
    resized = img.resize((size, size), Image.LANCZOS)
    resized.save(os.path.join(OUTPUT_DIR, f"icon-{size}x{size}.png"))

print("✅ Ícones PWA gerados com sucesso!")
