// .claude/hooks/pre_tool_use.js — Financial Contract Risk Scanner
// Blocks all writes outside output/ and the .claude/ build folder.
const ALLOWED_DIRS = ['output'];
const BUILD_PATHS = ['.claude', 'CLAUDE.md', 'coordinator.md', 'README.md'];
const path = require('path');
let raw = '';
process.stdin.on('data', (chunk) => (raw += chunk));
process.stdin.on('end', () => {
    const event = JSON.parse(raw);
    const input = event.tool_input || {};
    const root = event.cwd || process.cwd();
    if (event.tool_name === 'Bash') { process.exit(0); }
    const target = path.resolve(root, input.file_path || '');
    const rel = path.relative(root, target).split(path.sep).join('/');
    const inside = (p) => rel === p || rel.startsWith(p + '/');
    if (!ALLOWED_DIRS.some(inside) && !BUILD_PATHS.some(inside)) {
        console.error('HOOK BLOCKED: writes are only allowed in output/. Attempted: ' + rel);
        process.exit(2);
    }
    process.exit(0);
});