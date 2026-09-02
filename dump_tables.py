import docx
import os

doc_path = os.path.join(os.path.dirname(__file__), 'KRUPA CRP (1).docx')
out_path = os.path.join(os.path.dirname(__file__), 'all_tables.txt')

doc = docx.Document(doc_path)
lines = []

for t_idx, t in enumerate(doc.tables):
    lines.append(f"=== TABLE {t_idx+1} ({len(t.rows)} rows, {len(t.columns)} cols) ===")
    for r_idx, r in enumerate(t.rows):
        cells = [c.text.strip().replace('\n', ' -- ') for c in r.cells]
        lines.append(f"Row {r_idx}: " + " | ".join(cells))

with open(out_path, 'w', encoding='utf-8') as f:
    f.write("\n".join(lines))

print("Dumped all tables.")
