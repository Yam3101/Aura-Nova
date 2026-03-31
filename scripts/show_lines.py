import sys
from pathlib import Path


def main() -> int:
    if len(sys.argv) < 4:
        print("Usage: python scripts/show_lines.py <file> <start_line> <end_line>")
        return 2

    path = Path(sys.argv[1])
    start = int(sys.argv[2])
    end = int(sys.argv[3])
    lines = path.read_text(encoding="utf-8", errors="replace").splitlines()

    start = max(1, start)
    end = min(len(lines), end)

    for i in range(start, end + 1):
        print(f"{i}:{lines[i - 1]}")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())

