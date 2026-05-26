#!/usr/bin/env node

// Custom build script to handle ESM/CommonJS compatibility
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔨 Building TanStack Start app...');

// Set environment to skip component tagger
process.env.SKIP_COMPONENT_TAGGER = 'true';
process.env.NODE_ENV = 'production';

try {
  // Run vite build
  execSync('vite build', { 
    stdio: 'inherit',
    env: {
      ...process.env,
      SKIP_COMPONENT_TAGGER: 'true',
      NODE_ENV: 'production'
    }
  });
  
  console.log('✅ Build completed successfully!');
  process.exit(0);
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}
