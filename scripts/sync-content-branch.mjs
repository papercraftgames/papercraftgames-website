import { existsSync, rmSync } from 'node:fs';
import { execFileSync } from 'node:child_process';

const ref = process.env.CONTENT_REF ?? 'origin/content';

function run(command, args, options = {}) {
  return execFileSync(command, args, { stdio: 'inherit', ...options });
}

try {
  run('git', ['rev-parse', '--verify', ref], { stdio: 'ignore' });
} catch {
  console.log(`No ${ref} ref found; building with repository content.`);
  process.exit(0);
}

for (const path of ['src/content', 'public/uploads']) {
  if (existsSync(path)) {
    rmSync(path, { recursive: true, force: true });
  }
  try {
    run('git', ['checkout', ref, '--', path]);
  } catch {
    console.log(`No ${path} found on ${ref}; keeping current repository state for that path.`);
  }
}
