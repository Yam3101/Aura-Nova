import re
import sys
from pathlib import Path


def main() -> int:
    if len(sys.argv) < 3:
        print("Usage: python scripts/grep_text.py <file> <regex>")
        return 2

    path = Path(sys.argv[1])
    pattern = re.compile(sys.argv[2], re.IGNORECASE)
    text = path.read_text(encoding="utf-8", errors="replace").splitlines()

    for i, line in enumerate(text, start=1):
        if pattern.search(line):
            print(f"{i}:{line}")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())

