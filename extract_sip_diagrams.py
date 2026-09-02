import zipfile
import os

target_dir = os.path.join(os.path.dirname(__file__), 'portfolio', 'public', 'diagrams')
os.makedirs(target_dir, exist_ok=True)

filename = 'Krupa+Raju-P2514037-SIP+Report (2).docx'
filepath = os.path.join(os.path.dirname(__file__), filename)
if os.path.exists(filepath):
    try:
        with zipfile.ZipFile(filepath, 'r') as z:
            for item in z.namelist():
                if 'media/' in item:
                    basename = os.path.basename(item)
                    if basename:
                        out_name = f"sip_{basename}"
                        out_path = os.path.join(target_dir, out_name)
                        with open(out_path, 'wb') as f_out:
                            f_out.write(z.read(item))
                        print(f"Extracted: {out_name} ({os.path.getsize(out_path)} bytes)")
    except Exception as e:
        print(f"Error {filename}: {e}")

print("SIP Extraction completed.")
