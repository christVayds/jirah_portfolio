import os
import glob

_path = "water/"
extensions = [".jpg", ".jpeg", ".png"]
files = os.listdir(_path)
images = [file for file in files if os.path.isfile(_path + file) and os.path.splitext(_path+file)[1].lower() in extensions]

print(files)

# files = glob.glob("*.jpg") + glob.glob("*.jpeg") + glob.glob("*.png")
for file in images:
    newname = os.path.splitext(file)[0] + ".webp"
    command = f"cwebp -q 80 \"{_path}{file}\" -o \"{_path}{newname}\""
    os.system(command)
    print("done")
