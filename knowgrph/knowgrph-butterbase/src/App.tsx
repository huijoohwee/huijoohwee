import { useEffect, useState } from 'react';
import { butterbase } from './lib';
import './App.css';

type Viewer = {
  email?: string | null;
} | null;

type GraphNode = {
  id: string;
  slug: string | null;
  title: string | null;
  kind: string | null;
  summary: string | null;
  tags: string[] | null;
  metadata: Record<string, unknown> | null;
  source_url: string | null;
  created_at: string | null;
};

type NodeDraft = {
  title: string;
  kind: string;
  summary: string;
  sourceUrl: string;
  tags: string;
};

const appId = import.meta.env.VITE_APP_ID;
const apiUrl = import.meta.env.VITE_API_URL;
const initialDraft: NodeDraft = {
  title: '',
  kind: 'concept',
  summary: '',
  sourceUrl: '',
  tags: '',
};

const workflowSteps = [
  'Map the domain into entities, links, and graph-ready metadata.',
  'Store source material in Butterbase so app state stays centralized.',
  'Layer retrieval, curation, and publishing flows on top of the same graph.',
];

const launchCards = [
  {
    title: 'Graph Workspace',
    description: 'Shape entities, relations, and topic clusters into a shared source of truth.',
  },
  {
    title: 'Agentic RAG',
    description: 'Ground retrieval and synthesis on durable graph context instead of prompt-only memory.',
  },
  {
    title: 'Publishing Flow',
    description: 'Move curated graph outputs into site, docs, and downstream automation surfaces.',
  },
];

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function toTags(value: string) {
  return value
    .split(',')
    .map((tag) => tag.trim())
    .filter(Boolean);
}

function asNodeArray(value: GraphNode | GraphNode[] | null) {
  if (!value) {
    return [];
  }

  return Array.isArray(value) ? value : [value];
}

function isGuestSessionError(message: string) {
  const normalized = message.toLowerCase();
  return normalized.includes('missing or invalid authorization header')
    || normalized.includes('authorization header')
    || normalized.includes('401');
}

function App() {
  const [viewer, setViewer] = useState<Viewer>(null);
  const [loading, setLoading] = useState(true);
  const [nodes, setNodes] = useState<GraphNode[]>([]);
  const [nodesLoading, setNodesLoading] = useState(true);
  const [nodesError, setNodesError] = useState<string | null>(null);
  const [saveError, setSaveError] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [draft, setDraft] = useState<NodeDraft>(initialDraft);

  useEffect(() => {
    void loadViewer();
    void loadNodes();
  }, []);

  async function loadViewer() {
    const { data, error } = await butterbase.auth.getUser();

    if (error) {
      if (isGuestSessionError(error.message)) {
        setViewer(null);
        setLoading(false);
        return;
      }

      setViewer(null);
      setLoading(false);
      return;
    }

    setViewer((data as Viewer) ?? null);
    setLoading(false);
  }

  async function loadNodes() {
    setNodesLoading(true);

    const { data, error } = await butterbase
      .from<GraphNode>('graph_nodes')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(12);

    if (error) {
      setNodesError(error.message);
      setNodes([]);
      setNodesLoading(false);
      return;
    }

    setNodes(asNodeArray(data));
    setNodesError(null);
    setNodesLoading(false);
  }

  async function handleSignOut() {
    await butterbase.auth.signOut();
    setViewer(null);
  }

  async function handleCreateNode(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSaving(true);
    setSaveError(null);

    const title = draft.title.trim();
    const summary = draft.summary.trim();
    const sourceUrl = draft.sourceUrl.trim();
    const tags = toTags(draft.tags);

    const { data, error } = await butterbase
      .from<GraphNode>('graph_nodes')
      .insert({
        title,
        slug: slugify(title),
        kind: draft.kind,
        summary: summary || null,
        source_url: sourceUrl || null,
        tags,
        metadata: {
          origin: 'knowgrph-butterbase-ui',
          createdBy: viewer?.email ?? 'guest',
        },
      })
      .select('*');

    if (error) {
      setSaveError(error.message);
      setIsSaving(false);
      return;
    }

    const inserted = asNodeArray(data);
    setNodes((current) => [...inserted, ...current].slice(0, 12));
    setDraft(initialDraft);
    setIsSaving(false);
  }

  const sessionLabel = loading
    ? 'Checking session'
    : viewer?.email
      ? `Signed in as ${viewer.email}`
      : 'Guest mode';

  const nodeStatusLabel = nodesLoading
    ? 'Loading graph nodes'
    : `${nodes.length} graph node${nodes.length === 1 ? '' : 's'} loaded`;

  return (
    <main className="app-shell">
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">Knowgrph x Butterbase</span>
          <h1>Build a graph-native workspace for source-grounded knowledge.</h1>
          <p className="hero-text">
            This starter turns the default auth demo into a focused surface for the next
            knowgrph phase: modeling context, wiring retrieval, and shipping reusable graph outputs.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="https://airvio.butterbase.dev" target="_blank" rel="noreferrer">
              Open Butterbase App
            </a>
            {viewer?.email ? (
              <button className="secondary-action" onClick={handleSignOut} type="button">
                Sign Out
              </button>
            ) : null}
          </div>
        </div>

        <aside className="status-panel">
          <div className="status-badge">{sessionLabel}</div>
          <dl className="status-list">
            <div>
              <dt>App ID</dt>
              <dd>{appId}</dd>
            </div>
            <div>
              <dt>API URL</dt>
              <dd>{apiUrl}</dd>
            </div>
            <div>
              <dt>Workspace State</dt>
              <dd>Starter UI running locally</dd>
            </div>
          </dl>
        </aside>
      </section>

      <section className="card-grid" aria-label="knowgrph launch surfaces">
        {launchCards.map((card) => (
          <article className="feature-card" key={card.title}>
            <h2>{card.title}</h2>
            <p>{card.description}</p>
          </article>
        ))}
      </section>

      <section className="data-grid">
        <article className="compose-card">
          <div className="section-heading">
            <div>
              <span className="section-label">Node Composer</span>
              <h2>Add a graph node</h2>
            </div>
            <span className="mini-badge">{viewer?.email ? 'Authenticated write' : 'Public write'}</span>
          </div>

          <form className="node-form" onSubmit={handleCreateNode}>
            <label className="field">
              <span>Title</span>
              <input
                name="title"
                value={draft.title}
                onChange={(event) => setDraft((current) => ({ ...current, title: event.target.value }))}
                placeholder="Agentic RAG"
                required
              />
            </label>

            <label className="field">
              <span>Kind</span>
              <select
                name="kind"
                value={draft.kind}
                onChange={(event) => setDraft((current) => ({ ...current, kind: event.target.value }))}
              >
                <option value="concept">Concept</option>
                <option value="source">Source</option>
                <option value="workflow">Workflow</option>
                <option value="artifact">Artifact</option>
              </select>
            </label>

            <label className="field field-wide">
              <span>Summary</span>
              <textarea
                name="summary"
                value={draft.summary}
                onChange={(event) => setDraft((current) => ({ ...current, summary: event.target.value }))}
                placeholder="What this node represents in the knowledge graph."
                rows={4}
              />
            </label>

            <label className="field">
              <span>Source URL</span>
              <input
                name="sourceUrl"
                type="url"
                value={draft.sourceUrl}
                onChange={(event) => setDraft((current) => ({ ...current, sourceUrl: event.target.value }))}
                placeholder="https://example.com"
              />
            </label>

            <label className="field">
              <span>Tags</span>
              <input
                name="tags"
                value={draft.tags}
                onChange={(event) => setDraft((current) => ({ ...current, tags: event.target.value }))}
                placeholder="graph, rag, workflow"
              />
            </label>

            <div className="field-actions field-wide">
              <p className="helper-text">Creates a row in `graph_nodes` and stores tags as JSON.</p>
              <button className="primary-action" type="submit" disabled={isSaving}>
                {isSaving ? 'Saving...' : 'Create Node'}
              </button>
            </div>

            {saveError ? <p className="error-text">Insert failed: {saveError}</p> : null}
          </form>
        </article>

        <article className="list-card">
          <div className="section-heading">
            <div>
              <span className="section-label">Graph Nodes</span>
              <h2>Live table preview</h2>
            </div>
            <button className="secondary-action" type="button" onClick={() => void loadNodes()}>
              Refresh
            </button>
          </div>

          <p className="helper-text">{nodeStatusLabel}</p>
          {nodesError ? <p className="error-text">Query failed: {nodesError}</p> : null}

          {nodes.length === 0 && !nodesLoading && !nodesError ? (
            <div className="empty-state">
              <strong>No nodes yet.</strong>
              <p>Create the first graph node with the composer on the left.</p>
            </div>
          ) : null}

          <div className="node-list">
            {nodes.map((node) => (
              <article className="node-item" key={node.id}>
                <div className="node-item-top">
                  <h3>{node.title || 'Untitled node'}</h3>
                  <span className="mini-badge">{node.kind || 'unknown'}</span>
                </div>
                <p>{node.summary || 'No summary yet.'}</p>
                <div className="tag-row">
                  {(node.tags ?? []).map((tag) => (
                    <span className="tag-chip" key={`${node.id}-${tag}`}>
                      {tag}
                    </span>
                  ))}
                </div>
                <dl className="meta-grid">
                  <div>
                    <dt>Slug</dt>
                    <dd>{node.slug || 'n/a'}</dd>
                  </div>
                  <div>
                    <dt>Created</dt>
                    <dd>{node.created_at ? new Date(node.created_at).toLocaleString() : 'n/a'}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </article>
      </section>

      <section className="workflow">
        <div>
          <span className="section-label">Workflow</span>
          <h2>Start with one clear graph pipeline.</h2>
        </div>
        <ol className="workflow-list">
          {workflowSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>
    </main>
  );
}

export default App;
