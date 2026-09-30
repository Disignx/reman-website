#!/usr/bin/env node
/**
 * Plesk Node.js startup file — `next start` without Docker.
 * Plesk sets PORT; local fallback is 3003.
 */
const { spawn } = require("node:child_process");
const path = require("node:path");

const port = process.env.PORT || "3003";
const nextBin = path.join(__dirname, "node_modules", "next", "dist", "bin", "next");

const child = spawn(
  process.execPath,
  [nextBin, "start", "--hostname", "0.0.0.0", "--port", String(port)],
  {
    cwd: __dirname,
    env: process.env,
    stdio: "inherit",
  },
);

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }
  process.exit(code ?? 1);
});
