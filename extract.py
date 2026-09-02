import glob
import os
from docx import Document

docx_files = glob.glob('*.docx')

results = []
for file in docx_files:
    try:
        doc = Document(file)
        text = [p.text.strip() for p in doc.paragraphs if p.text.strip()]
        # Get first 15 non-empty paragraphs
        preview = " ".join(text[:20])
        results.append(f"--- FILE: {file} ---\n{preview}\n")
    except Exception as e:
        results.append(f"--- FILE: {file} ---\nERROR: {str(e)}\n")

with open('extracted_data.txt', 'w', encoding='utf-8') as f:
    f.write("\n\n".join(results))
