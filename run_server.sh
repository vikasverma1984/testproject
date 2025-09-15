#!/usr/bin/env bash

set -euo pipefail

# Usage: ./run_server.sh [port]
# Starts a Python HTTP server in the directory of this script.

SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" &> /dev/null && pwd)"
PORT="${1:-8000}"

cd "$SCRIPT_DIR"

echo "Starting server at http://localhost:${PORT} (Ctrl+C to stop)"
exec python3 -m http.server "${PORT}"

