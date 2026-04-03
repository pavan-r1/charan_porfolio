from pathlib import Path
pdf_path = Path(r"c:\Users\Pavan R\Downloads\Blue and Gray Simple Professional CV Resume (2).pdf")
try:
    from pypdf import PdfReader
except Exception as e:
    print("IMPORT_ERROR", e)
    raise SystemExit(2)
reader = PdfReader(str(pdf_path))
for i, page in enumerate(reader.pages, 1):
    text = page.extract_text() or ""
    print(f"\n--- PAGE {i} ---\n")
    print(text)
