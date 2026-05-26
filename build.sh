#!/bin/bash
set -e

echo "🔨 Building TanStack Start app..."

# Set environment variables
export SKIP_COMPONENT_TAGGER=true
export NODE_ENV=production

# Run vite build
npm run build

echo "✅ Build completed successfully!"
