import zipfile
import os

target_dir = os.path.join(os.path.dirname(__file__), 'portfolio', 'public', 'diagrams')
os.makedirs(target_dir, exist_ok=True)

files_to_check = [
    ('Sec#A_Group#7_P2514037_Design an ERP system (1).docx', 'erp'),
    ('Sec#A_Group#7_P2514037_ProcessModelling (1).docx', 'bpmn'),
    ('Sec#A_Group#7_P2514037_ProcessModelling.bpm.bpm (1).zip', 'bizagi_discharge'),
    ('group assignment o2c,p2p.bpm (1).zip', 'bizagi_o2c_p2p')
]

for filename, prefix in files_to_check:
    filepath = os.path.join(os.path.dirname(__file__), filename)
    if not os.path.exists(filepath):
        continue
    try:
        with zipfile.ZipFile(filepath, 'r') as z:
            for item in z.namelist():
                if 'media/' in item or item.lower().endswith(('.png', '.jpg', '.jpeg', '.svg', '.gif')):
                    basename = os.path.basename(item)
                    if basename:
                        out_name = f"{prefix}_{basename}"
                        out_path = os.path.join(target_dir, out_name)
                        with open(out_path, 'wb') as f_out:
                            f_out.write(z.read(item))
                        print(f"Extracted: {out_name} ({os.path.getsize(out_path)} bytes)")
    except Exception as e:
        print(f"Error {filename}: {e}")

print("Extraction completed.")
