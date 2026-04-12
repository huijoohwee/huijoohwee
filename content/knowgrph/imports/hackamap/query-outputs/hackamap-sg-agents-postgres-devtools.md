# hackamap-sg-agents-postgres-devtools

Derived from HackaMap dataset markdown tables.

Query (JSON DSL):
```json
{
  "from": {
    "files": [
      "events.md",
      "demos.md",
      "sources.md",
      "organizer.md",
      "team.md",
      "techstack.md"
    ]
  },
  "where_by_file": {
    "events.md": {
      "and": [
        {
          "field": "Location",
          "op": "contains",
          "value": "Singapore"
        },
        {
          "or": [
            {
              "op": "any",
              "value": "agent"
            },
            {
              "op": "any",
              "value": "web agent"
            },
            {
              "op": "any",
              "value": "autonomous"
            },
            {
              "op": "any",
              "value": "agentic"
            },
            {
              "op": "any",
              "value": "mcp"
            },
            {
              "op": "any",
              "value": "langgraph"
            },
            {
              "op": "any",
              "value": "n8n"
            },
            {
              "op": "any",
              "value": "postgres"
            },
            {
              "op": "any",
              "value": "postgresql"
            },
            {
              "op": "any",
              "value": "neon"
            },
            {
              "op": "any",
              "value": "supabase"
            },
            {
              "op": "any",
              "value": "docker"
            },
            {
              "op": "any",
              "value": "vercel"
            },
            {
              "op": "any",
              "value": "cursor"
            },
            {
              "op": "any",
              "value": "devtools"
            }
          ]
        },
        {
          "field": "Confidence",
          "op": "in",
          "value": [
            "high",
            "medium"
          ]
        }
      ]
    },
    "demos.md": {
      "and": [
        {
          "field": "Confidence",
          "op": "in",
          "value": [
            "high",
            "medium"
          ]
        },
        {
          "or": [
            {
              "op": "any",
              "value": "agent"
            },
            {
              "op": "any",
              "value": "web agent"
            },
            {
              "op": "any",
              "value": "autonomous"
            },
            {
              "op": "any",
              "value": "agentic"
            },
            {
              "op": "any",
              "value": "langgraph"
            },
            {
              "op": "any",
              "value": "mcp"
            },
            {
              "op": "any",
              "value": "postgres"
            },
            {
              "op": "any",
              "value": "supabase"
            },
            {
              "op": "any",
              "value": "docker"
            },
            {
              "op": "any",
              "value": "vercel"
            },
            {
              "op": "any",
              "value": "cursor"
            }
          ]
        }
      ]
    },
    "sources.md": {
      "or": [
        {
          "field": "Domain",
          "op": "contains",
          "value": "github"
        },
        {
          "field": "Domain",
          "op": "contains",
          "value": "devpost"
        },
        {
          "op": "any",
          "value": "postgres"
        },
        {
          "op": "any",
          "value": "supabase"
        },
        {
          "op": "any",
          "value": "neon"
        },
        {
          "op": "any",
          "value": "vercel"
        },
        {
          "op": "any",
          "value": "cursor"
        }
      ]
    },
    "organizer.md": {
      "or": [
        {
          "field": "Organizer",
          "op": "contains",
          "value": "GovTech"
        },
        {
          "field": "Organizer",
          "op": "contains",
          "value": "NUS"
        },
        {
          "field": "Organizer",
          "op": "contains",
          "value": "OpenAI"
        },
        {
          "field": "Organizer",
          "op": "contains",
          "value": "Anthropic"
        },
        {
          "op": "any",
          "value": "agent"
        },
        {
          "op": "any",
          "value": "postgres"
        },
        {
          "op": "any",
          "value": "supabase"
        }
      ]
    },
    "team.md": {
      "or": [
        {
          "op": "any",
          "value": "agent"
        },
        {
          "op": "any",
          "value": "postgres"
        },
        {
          "op": "any",
          "value": "supabase"
        },
        {
          "op": "any",
          "value": "cursor"
        }
      ]
    },
    "techstack.md": {
      "or": [
        {
          "field": "Tech",
          "op": "contains",
          "value": "Postgres"
        },
        {
          "field": "Tech",
          "op": "contains",
          "value": "Supabase"
        },
        {
          "field": "Tech",
          "op": "contains",
          "value": "Docker"
        },
        {
          "field": "Tech",
          "op": "contains",
          "value": "Vercel"
        },
        {
          "field": "Tech",
          "op": "contains",
          "value": "Cursor"
        },
        {
          "field": "Tech",
          "op": "contains",
          "value": "MCP"
        },
        {
          "field": "Tech",
          "op": "contains",
          "value": "LangGraph"
        }
      ]
    }
  },
  "limit": 200,
  "output": {
    "title": "hackamap-sg-agents-postgres-devtools",
    "json_path": "hackamap-sg-agents-postgres-devtools.json",
    "md_path": "hackamap-sg-agents-postgres-devtools.md",
    "table_prefix": "sg-agents-postgres-devtools"
  }
}
```

| _file | _row | id | event_id | Pain Point | Solution | Product | Team | Tech Stack | Demo URL | Repo URL | Video URL | Award | Source Type | Confidence | Extracted At |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| demos.md | 3 | demo-003 | evt-003 | builders need a high-signal venue to ship autonomous web agents; winners need public recognition and links to demos/projects | in-person hackathon with a hard constraint (must require autonomous web agents) and awards for top projects | `["winner showcase", "autonomous web-agent demos", "143 projects (reported)"]` | `["TinyFish", "Acacia AI Society", "NUS", "350+ hackers (reported)"]` | `["TinyFish web agents", "OpenAI (powered by, mentioned)"]` | https://www.linkedin.com/posts/tinyfish-ai_we-just-hosted-singapores-largest-web-agent-activity-7444832567515811841-EqvM; https://lnkd.in/g52ftBkm; https://lnkd.in/gKJ5hhZu; https://lnkd.in/gMKstPsh; https://lnkd.in/gbnrajW9; https://lnkd.in/g7FyRCDn; https://lnkd.in/gDeJvw6P | — | — | — | `["linkedin", "winners-showcase", "demo-links"]` | medium | 2026-04-04 |
| demos.md | 28 | demo-028 | evt-023 | builders want a local venue to ship AI projects quickly; teams need incentives + credits to prototype with Cursor/Claude | 24-hour in-person hackathon with sponsor tracks and prize categories; submit projects on Devpost | `["in-person hackathon", "sponsor tracks", "project submissions"]` | `["Cursor", "Anthropic", "community partners", "participants"]` | `["Cursor", "Anthropic API", "Convex", "Vercel", "TiDB", "ElevenLabs", "LeanMCP (tracks mentioned)"]` | https://cursor-hack-my.devpost.com/ | — | — | — | `["devpost", "event-page"]` | high | 2026-04-04 |
| demos.md | 36 | demo-036 | evt-034 | teams want a vendor-neutral way to build and ship AI agents; builders need incentives/credits to test agent ideas quickly | online hackathon encouraging builders to submit agents built with a hosted AI gateway; prizes in AI credits | `["AI Gateway", "hackathon challenge", "agent submissions"]` | `["Vercel"]` | `["Vercel", "AI Gateway"]` | https://x.com/vercel/status/1959307873143665060 | — | — | — | `["announcement", "marketing"]` | medium | 2026-04-04 |
| events.md | 3 | evt-003 |  |  |  |  |  |  |  |  |  |  | `["linkedin", "winners-showcase", "demo-links"]` | medium | 2026-04-04 |
| events.md | 29 | evt-029 |  |  |  |  |  |  |  |  |  |  | `["announcement", "marketing"]` | medium | 2026-04-04 |
| demos.md | 4 | demo-004 | evt-004 | teams need to operationalize AI beyond code generation; orgs want agents for planning/security/compliance/deployments | hackathon encouraging teams to build workflow agents inside GitLab; prizes and deadline | `["AI agents for SDLC", "workflow automation"]` | `["Devpost", "GitLab"]` | `["GitLab workflows"]` | https://x.com/devpost/status/2020965804687446360 | — | — | — | `["announcement", "marketing"]` | medium | 2026-04-04 |
| demos.md | 31 | demo-031 | evt-029 | builders need a fast, high-signal way to ship projects in 24 hours; teams want credits/cash incentives to prototype rapidly | 24-hour hackathon format with cash + tool credits to ship projects (Cursor hackathon) | `["24h hackathon", "project shipping"]` | `["@cursor_ai", "hackathon organizers", "participants"]` | `["Cursor", "AI dev tools (mentioned in post)"]` | https://x.com/gabrielchua/status/1975949011409412425 | — | — | — | `["announcement", "marketing"]` | medium | 2026-04-04 |
| demos.md | 27 | demo-027 | evt-026 | hackathon demo projects need a stable gallery for discovery; sponsor tracks need a place to list submissions | publish a Devpost project gallery as a central index of demo projects | `["project gallery", "demo projects"]` | `["Cursor", "Anthropic", "participants"]` | `["Devpost"]` | https://cursor-hack-my.devpost.com/project-gallery | — | — | — | `["devpost", "project-gallery"]` | medium | 2026-04-04 |
| demos.md | 37 | demo-037 | evt-035 | builders want open(-weight) frontier-scale models to fine-tune and agentify; lack of structured events to showcase open-model builds | hackathon centered on building with open(-weight) reasoning models; prizes and deadline-driven build sprint | `["open-model hackathon", "fine-tuning", "agentification"]` | `["Devpost", "OpenAI"]` | `["gpt-oss-120b", "gpt-oss-20b"]` | https://x.com/devpost/status/1952806091022319670 | — | — | — | `["announcement", "marketing"]` | medium | 2026-04-04 |
| events.md | 134 | evt-137 |  |  |  |  |  |  |  |  |  |  | — | medium | 2026-04-04 |
| events.md | 135 | evt-138 |  |  |  |  |  |  |  |  |  |  | — | medium | 2026-04-04 |
| demos.md | 8 | demo-008 | evt-008 | APAC developers need hands-on access to Codex; teams need a venue to build and demo Codex projects quickly | in-person hackathon in Singapore with Codex; winners showcased their projects | `["agentic coding", "project demos", "winner showcase"]` | `["OpenAI Developers", "100+ developers (participants)"]` | `["Codex"]` | https://x.com/OpenAIDevs/status/2028588617095057902 | — | — | — | `["announcement", "event-recap"]` | medium | 2026-04-04 |
| demos.md | 134 | demo-137 | evt-135 | — | — | `["project gallery"]` | `["AI Tinkerers Hong Kong"]` | `["OpenClaw", "ClawdBot", "AI agents", "builders", "unhackathon"]` | https://hong-kong.aitinkerers.org/meetup/mu_1tFOHM9tQ6Q/gallery | — | — | — | — | medium | 2026-04-04 |
| demos.md | 136 | demo-139 | evt-137 | — | — | `["project gallery"]` | `["January Capital", "BLOCK71 Singapore"]` | `["OpenClaw", "Codex", "OpenAI", "Multimodal APIs", "AI agents", "builders session"]` | https://luma.com/claw | — | — | — | — | medium | 2026-04-04 |
| demos.md | 137 | demo-140 | evt-138 | — | — | `["project gallery"]` | `["StashAway"]` | `["OpenClaw", "Finance", "Fintech", "AI agents"]` | https://luma.com/claw | — | — | — | — | medium | 2026-04-04 |
| demos.md | 138 | demo-141 | evt-139 | — | — | `["project gallery"]` | `["OpenClaw Jakarta community"]` | `["OpenClaw", "AI agents", "builders meetup"]` | https://luma.com/claw | — | — | — | — | medium | 2026-04-04 |
| sources.md | 31 | src-031 |  |  |  |  |  |  |  |  |  |  | `["media", "event-recap", "devpost", "event-page"]` | high | — |
| sources.md | 32 | src-032 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project-gallery"]` | medium | — |
| team.md | 41 | team-041 |  |  |  |  | Cursor |  |  |  |  |  | `["media", "event-recap", "devpost", "project-gallery", "event-page"]` | high | — |
| organizer.md | 7 | org-007 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | — |
| organizer.md | 11 | org-011 |  |  |  |  |  |  |  |  |  |  | `["media", "event-recap", "devpost", "event-page", "project-gallery"]` | high | — |
| organizer.md | 44 | org-044 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | — |
| organizer.md | 68 | org-068 |  |  |  |  |  |  |  |  |  |  | `["linkedin", "event-recap", "announcement"]` | low | — |
| organizer.md | 116 | org-116 |  |  |  |  |  |  |  |  |  |  | `["linkedin", "winners-showcase", "demo-links"]` | medium | — |
| organizer.md | 117 | org-117 |  |  |  |  |  |  |  |  |  |  | `["devpost", "event-page"]` | high | — |
| organizer.md | 118 | org-118 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project-gallery", "winners", "event-page", "official-site", "event-site", "project_gallery"]` | high | — |
| organizer.md | 119 | org-119 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| organizer.md | 120 | org-120 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | — |
| organizer.md | 124 | org-124 |  |  |  |  |  |  |  |  |  |  | `["announcement", "marketing", "linkedin", "event-recap"]` | medium | — |
| organizer.md | 125 | org-125 |  |  |  |  |  |  |  |  |  |  | `["community", "event-recap", "demo"]` | low | — |
| organizer.md | 126 | org-126 |  |  |  |  |  |  |  |  |  |  | `["community", "event-recap", "demo"]` | low | — |
| organizer.md | 127 | org-127 |  |  |  |  |  |  |  |  |  |  | `["announcement", "event-recap"]` | medium | — |
| organizer.md | 136 | org-136 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 2 | src-002 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | — |
| sources.md | 3 | src-003 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | — |
| sources.md | 4 | src-004 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | — |
| sources.md | 5 | src-005 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | — |
| sources.md | 6 | src-006 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 7 | src-007 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 8 | src-008 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 9 | src-009 |  |  |  |  |  |  |  |  |  |  | `["devpost", "event-page", "project_gallery"]` | high | — |
| sources.md | 10 | src-010 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | — |
| sources.md | 11 | src-011 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 12 | src-012 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 13 | src-013 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 14 | src-014 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 15 | src-015 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 16 | src-016 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 17 | src-017 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 18 | src-018 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 19 | src-019 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 20 | src-020 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | — |
| sources.md | 21 | src-021 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | — |
| sources.md | 23 | src-023 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | — |
| sources.md | 24 | src-024 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | — |
| sources.md | 25 | src-025 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | — |
| sources.md | 26 | src-026 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | — |
| sources.md | 27 | src-027 |  |  |  |  |  |  |  |  |  |  | `["devpost", "event-page"]` | high | — |
| sources.md | 28 | src-028 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | — |
| sources.md | 29 | src-029 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | — |
| sources.md | 30 | src-030 |  |  |  |  |  |  |  |  |  |  | `["devpost", "event-page"]` | high | — |
| sources.md | 33 | src-033 |  |  |  |  |  |  |  |  |  |  | `["devpost", "event-page"]` | high | — |
| sources.md | 34 | src-034 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project-gallery", "winners"]` | high | — |
| sources.md | 35 | src-035 |  |  |  |  |  |  |  |  |  |  | `["devpost", "event-site", "project_gallery"]` | high | — |
| sources.md | 36 | src-036 |  |  |  |  |  |  |  |  |  |  | `["devpost", "event-site", "project_gallery"]` | high | — |
| sources.md | 38 | src-038 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | — |
| sources.md | 39 | src-039 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | — |
| sources.md | 40 | src-040 |  |  |  |  |  |  |  |  |  |  | `["devpost", "event-site", "project_gallery"]` | high | — |
| sources.md | 41 | src-041 |  |  |  |  |  |  |  |  |  |  | `["devpost", "event-site", "project_gallery"]` | high | — |
| sources.md | 42 | src-042 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 43 | src-043 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 44 | src-044 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 45 | src-045 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 46 | src-046 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 47 | src-047 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 49 | src-049 |  |  |  |  |  |  |  |  |  |  | `["devpost", "event-site", "project_gallery"]` | high | — |
| sources.md | 50 | src-050 |  |  |  |  |  |  |  |  |  |  | `["devpost", "event-site", "project_gallery"]` | high | — |
| sources.md | 51 | src-051 |  |  |  |  |  |  |  |  |  |  | `["devpost", "event-site", "project_gallery"]` | high | — |
| sources.md | 52 | src-052 |  |  |  |  |  |  |  |  |  |  | `["devpost", "event-site", "project_gallery"]` | high | — |
| sources.md | 53 | src-053 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | — |
| sources.md | 54 | src-054 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | — |
| sources.md | 55 | src-055 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | — |
| sources.md | 56 | src-056 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | — |
| sources.md | 57 | src-057 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | — |
| sources.md | 58 | src-058 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | — |
| sources.md | 59 | src-059 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | — |
| sources.md | 60 | src-060 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | — |
| sources.md | 61 | src-061 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | — |
| sources.md | 62 | src-062 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | — |
| sources.md | 63 | src-063 |  |  |  |  |  |  |  |  |  |  | `["devpost", "event-page"]` | high | — |
| sources.md | 64 | src-064 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project-gallery", "winners"]` | high | — |
| sources.md | 65 | src-065 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 66 | src-066 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 67 | src-067 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 68 | src-068 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | — |
| sources.md | 69 | src-069 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | — |
| sources.md | 70 | src-070 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | — |
| sources.md | 71 | src-071 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | — |
| sources.md | 72 | src-072 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project-gallery", "winners"]` | high | — |
| sources.md | 73 | src-073 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 74 | src-074 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 75 | src-075 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 76 | src-076 |  |  |  |  |  |  |  |  |  |  | `["devpost", "event-site", "project_gallery"]` | high | — |
| sources.md | 77 | src-077 |  |  |  |  |  |  |  |  |  |  | `["devpost", "event-site", "project_gallery"]` | high | — |
| sources.md | 78 | src-078 |  |  |  |  |  |  |  |  |  |  | `["devpost", "event-site", "project_gallery"]` | high | — |
| sources.md | 79 | src-079 |  |  |  |  |  |  |  |  |  |  | `["devpost", "event-site", "project_gallery"]` | high | — |
| sources.md | 80 | src-080 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | — |
| sources.md | 81 | src-081 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | — |
| sources.md | 82 | src-082 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 83 | src-083 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 84 | src-084 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 85 | src-085 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 86 | src-086 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 87 | src-087 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 88 | src-088 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | — |
| sources.md | 89 | src-089 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | — |
| sources.md | 90 | src-090 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | — |
| sources.md | 91 | src-091 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | — |
| sources.md | 92 | src-092 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 93 | src-093 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 94 | src-094 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 95 | src-095 |  |  |  |  |  |  |  |  |  |  | `["devpost", "event-page"]` | high | — |
| sources.md | 97 | src-097 |  |  |  |  |  |  |  |  |  |  | `["devpost", "official-site", "event-site", "project_gallery"]` | high | — |
| sources.md | 98 | src-098 |  |  |  |  |  |  |  |  |  |  | `["devpost", "official-site", "event-site", "project_gallery"]` | high | — |
| sources.md | 99 | src-099 |  |  |  |  |  |  |  |  |  |  | `["devpost", "event-page"]` | high | — |
| sources.md | 100 | src-100 |  |  |  |  |  |  |  |  |  |  | `["devpost", "event-page"]` | high | — |
| sources.md | 101 | src-101 |  |  |  |  |  |  |  |  |  |  | `["devpost", "event-page"]` | high | — |
| sources.md | 102 | src-102 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project-gallery", "winners"]` | high | — |
| sources.md | 103 | src-103 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 104 | src-104 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 105 | src-105 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 106 | src-106 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 107 | src-107 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 108 | src-108 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 112 | src-112 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 113 | src-113 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 114 | src-114 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 115 | src-115 |  |  |  |  |  |  |  |  |  |  | `["devpost", "event-page"]` | high | — |
| sources.md | 116 | src-116 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | — |
| sources.md | 117 | src-117 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | — |
| sources.md | 118 | src-118 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | — |
| sources.md | 119 | src-119 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | — |
| sources.md | 120 | src-120 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | — |
| sources.md | 121 | src-121 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | — |
| sources.md | 122 | src-122 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 123 | src-123 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 124 | src-124 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 125 | src-125 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 126 | src-126 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 127 | src-127 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 128 | src-128 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 129 | src-129 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 130 | src-130 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 131 | src-131 |  |  |  |  |  |  |  |  |  |  | `["devpost", "event-site", "project_gallery"]` | high | — |
| sources.md | 132 | src-132 |  |  |  |  |  |  |  |  |  |  | `["devpost", "event-site", "project_gallery"]` | high | — |
| sources.md | 133 | src-133 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 134 | src-134 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 135 | src-135 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 136 | src-136 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | — |
| sources.md | 137 | src-137 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | — |
| sources.md | 138 | src-138 |  |  |  |  |  |  |  |  |  |  | `["devpost", "event-page"]` | high | — |
| sources.md | 145 | src-145 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | — |
| sources.md | 146 | src-146 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | — |
| sources.md | 149 | src-149 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 150 | src-150 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 151 | src-151 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 152 | src-152 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | — |
| sources.md | 153 | src-153 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | — |
| sources.md | 154 | src-154 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | — |
| sources.md | 155 | src-155 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | — |
| sources.md | 156 | src-156 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | — |
| sources.md | 157 | src-157 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | — |
| sources.md | 158 | src-158 |  |  |  |  |  |  |  |  |  |  | `["devpost", "event-page"]` | high | — |
| sources.md | 159 | src-159 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 160 | src-160 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 161 | src-161 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 162 | src-162 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | — |
| sources.md | 163 | src-163 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | — |
| sources.md | 164 | src-164 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | — |
| sources.md | 165 | src-165 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | — |
| sources.md | 166 | src-166 |  |  |  |  |  |  |  |  |  |  | `["devpost", "eventbrite", "project_gallery"]` | high | — |
| sources.md | 167 | src-167 |  |  |  |  |  |  |  |  |  |  | `["devpost", "eventbrite", "project_gallery"]` | high | — |
| sources.md | 168 | src-168 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 169 | src-169 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 170 | src-170 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 171 | src-171 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 172 | src-172 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 173 | src-173 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 174 | src-174 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 175 | src-175 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 176 | src-176 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 177 | src-177 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 178 | src-178 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 179 | src-179 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 180 | src-180 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | — |
| sources.md | 181 | src-181 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | — |
| sources.md | 182 | src-182 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | — |
| sources.md | 183 | src-183 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | — |
| sources.md | 184 | src-184 |  |  |  |  |  |  |  |  |  |  | `["devpost", "event-page"]` | high | — |
| sources.md | 185 | src-185 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project-gallery", "winners"]` | high | — |