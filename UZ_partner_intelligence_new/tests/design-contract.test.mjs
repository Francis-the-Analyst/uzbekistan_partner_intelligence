import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
const read = (name) => readFile(new URL(name, root), 'utf8');

test('the public entry uses one recommended light experience', async () => {
  const html = await read('index_R_P.html');
  assert.doesNotMatch(html, /proposal_B\.html|proposal-btn-b|Switch proposal/i);
  assert.match(html, /Uzbekistan\s*<br>Partner\s*<br>Intelligence/i);
  assert.match(html, /class="channel[^\"]*retail-choice/);
  assert.doesNotMatch(html, /window\.(RETAIL_DATA|PROYECTOS_DATA|DEVELOPMENTS_DATA)/);
});

test('the intelligence page exposes the executive hierarchy and workspace', async () => {
  const html = await read('proposal_A.html');
  assert.match(html, /class="intelligence-brief"/);
  assert.match(html, /Where should the\s*<br>next conversation start\?/i);
  assert.match(html, /class="workspace-shell"/);
  assert.doesNotMatch(html, /switch-proposal-link|proposal_B\.html/i);
});

test('the light system uses a white mineral base and a disciplined three-column workspace', async () => {
  const css = (await read('base.css')) + (await read('proposal_A.css'));
  assert.match(css, /--bg:\s*#f3f3f0/i);
  assert.match(css, /--signal:\s*#2864dc/i);
  assert.match(css, /\.workspace-shell\s*\{[^}]*grid-template-columns:\s*250px\s+minmax\(0,1fr\)/is);
});

test('datasets are exposed to the shared application core', async () => {
  const js = await read('data.js');
  assert.match(js, /window\.RETAIL_DATA\s*=\s*RETAIL_DATA/);
  assert.match(js, /window\.PROYECTOS_DATA\s*=\s*PROYECTOS_DATA/);
  assert.match(js, /window\.DEVELOPMENTS_DATA\s*=\s*DEVELOPMENTS_DATA/);
});

test('project developments provide aligned project, developer, status and horizon selectors', async () => {
  const js = await read('app-core.js');
  const css = await read('base.css');
  for (const field of ['project', 'developer', 'status', 'horizon']) {
    assert.match(js, new RegExp(`devSelect\\('${field}'`));
  }
  assert.match(js, /function developmentHorizon\(/);
  assert.match(js, /developments-active/);
  assert.match(css, /\.developments-active\s+\.filters-bar\s*\{[^}]*display:\s*none/is);
});

test('the browser test runner does not request a missing favicon', async () => {
  const html = await read('tests/test-runner.html');
  assert.match(html, /<link\s+rel="icon"\s+href="data:">/i);
});
