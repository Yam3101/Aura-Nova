import sys
from pathlib import Path

from PyPDF2 import PdfReader


def main() -> int:
    if len(sys.argv) < 2:
        print("Usage: python scripts/extract_pdf_text.py <pdf_path> [out_txt_path]")
        return 2

    pdf_path = Path(sys.argv[1])
    out_path = Path(sys.argv[2]) if len(sys.argv) >= 3 else None

    reader = PdfReader(str(pdf_path))
    chunks: list[str] = []
    for idx, page in enumerate(reader.pages, start=1):
        text = page.extract_text() or ""
        text = text.replace("\r\n", "\n").replace("\r", "\n").strip()
        chunks.append(f"\n\n=== PAGE {idx} ===\n{text}\n")

    out_text = "".join(chunks).strip() + "\n"

    if out_path:
        out_path.parent.mkdir(parents=True, exist_ok=True)
        out_path.write_text(out_text, encoding="utf-8")
        print(f"Wrote: {out_path}")
    else:
        print(out_text)

    return 0


if __name__ == "__main__":
    raise SystemExit(main())

