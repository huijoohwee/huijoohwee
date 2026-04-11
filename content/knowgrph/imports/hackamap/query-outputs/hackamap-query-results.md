# query-results

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
      "or": [
        {
          "and": [
            {
              "field": "Location",
              "op": "contains",
              "value": "Singapore"
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
        {
          "or": [
            {
              "op": "any",
              "value": "claude"
            },
            {
              "op": "any",
              "value": "openai"
            },
            {
              "op": "any",
              "value": "google"
            },
            {
              "op": "any",
              "value": "openclaw"
            }
          ]
        }
      ]
    },
    "demos.md": {
      "or": [
        {
          "and": [
            {
              "field": "Location",
              "op": "contains",
              "value": "Singapore"
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
        {
          "or": [
            {
              "op": "any",
              "value": "claude"
            },
            {
              "op": "any",
              "value": "openai"
            },
            {
              "op": "any",
              "value": "google"
            },
            {
              "op": "any",
              "value": "openclaw"
            }
          ]
        }
      ]
    },
    "sources.md": {
      "or": [
        {
          "and": [
            {
              "field": "Location",
              "op": "contains",
              "value": "Singapore"
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
        {
          "or": [
            {
              "op": "any",
              "value": "claude"
            },
            {
              "op": "any",
              "value": "openai"
            },
            {
              "op": "any",
              "value": "google"
            },
            {
              "op": "any",
              "value": "openclaw"
            }
          ]
        }
      ]
    },
    "organizer.md": {
      "or": [
        {
          "and": [
            {
              "field": "Location",
              "op": "contains",
              "value": "Singapore"
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
        {
          "or": [
            {
              "op": "any",
              "value": "claude"
            },
            {
              "op": "any",
              "value": "openai"
            },
            {
              "op": "any",
              "value": "google"
            },
            {
              "op": "any",
              "value": "openclaw"
            }
          ]
        }
      ]
    },
    "team.md": {
      "or": [
        {
          "and": [
            {
              "field": "Location",
              "op": "contains",
              "value": "Singapore"
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
        {
          "or": [
            {
              "op": "any",
              "value": "claude"
            },
            {
              "op": "any",
              "value": "openai"
            },
            {
              "op": "any",
              "value": "google"
            },
            {
              "op": "any",
              "value": "openclaw"
            }
          ]
        }
      ]
    },
    "techstack.md": {
      "or": [
        {
          "field": "Tech",
          "op": "contains",
          "value": "claude"
        },
        {
          "field": "Tech",
          "op": "contains",
          "value": "openai"
        },
        {
          "field": "Tech",
          "op": "contains",
          "value": "google"
        },
        {
          "field": "Tech",
          "op": "contains",
          "value": "openclaw"
        },
        {
          "field": "Vendor/Org",
          "op": "contains",
          "value": "openai"
        },
        {
          "field": "Vendor/Org",
          "op": "contains",
          "value": "google"
        }
      ]
    }
  }
}
```

| _file | _row | id | event_id | Pain Point | Solution | Product | Team | Tech Stack | Demo URL | Repo URL | Video URL | Award | Source Type | Confidence | Extracted At |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| demos.md | 50 | demo-050 | evt-048 | hackathon organizers need a public recap to recognize winners and show outcomes; participants need post-event visibility to continue building | — | `["recap video", "winner recognition", "API credits for teams"]` | `["GovTech Singapore", "OpenAI", "top 3 teams (winners)"]` | `["OpenAI APIs (credits mentioned)"]` | https://www.linkedin.com/posts/govtech-singapore_govtechopenaihackathon-techevent-hackathon-activity-7269228880446590977-2hAs; https://www.linkedin.com/posts/govtech-singapore_govtechopenaihackathon-techevent-hackathon-activity-7269228880446590977-2hAs | — | — | — | `["linkedin", "event-recap"]` | low | — |
| events.md | 48 | evt-048 |  |  |  |  |  |  |  |  |  |  | `["linkedin", "event-recap"]` | low | — |
| events.md | 63 | evt-063 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | — |
| demos.md | 8 | demo-008 | evt-008 | APAC developers need hands-on access to Codex; teams need a venue to build and demo Codex projects quickly | — | `["agentic coding", "project demos", "winner showcase"]` | `["OpenAI Developers", "100+ developers (participants)"]` | `["Codex"]` | https://x.com/OpenAIDevs/status/2028588617095057902; https://x.com/OpenAIDevs/status/2028588617095057902 | — | — | — | `["announcement", "event-recap"]` | medium | — |
| demos.md | 51 | demo-051 | evt-049 | public sector teams need a safe, time-boxed environment to prototype AI-for-public-good use cases; builders need a stage + incentives to demo prototypes | — | `["prototype demos", "API credits for winners"]` | `["GovTech Singapore", "OpenAI", "hackathon participants"]` | `["GPT-4o Realtime (mentioned)", "o1 reasoning model (mentioned)"]` | https://www.linkedin.com/posts/govtech-singapore_govtechopenaihackathon-techevent-hackathon-activity-7264875053362610177-Fxf5; https://www.linkedin.com/posts/govtech-singapore_govtechopenaihackathon-techevent-hackathon-activity-7264875053362610177-Fxf5 | — | — | — | `["linkedin", "announcement"]` | low | — |
| demos.md | 65 | demo-065 | evt-063 | — | — | `["project gallery"]` | `["Google"]` | `["Beginner Friendly", "Machine Learning/AI", "Enterprise"]` | https://googlecloudjapanaihackathon.devpost.com/project-gallery; https://googlecloudjapanaihackathon.devpost.com/project-gallery | — | — | — | `["devpost", "project_gallery"]` | high | — |
| demos.md | 135 | demo-138 | evt-136 | — | — | `["project gallery"]` | `["HKU Centre for AI, Management and Organization (HKU CAMO)"]` | `["OpenClaw", "AI workflows", "builders meetup", "business"]` | https://camo.hku.hk/28-march-2026-openclaw-meet-up/; https://camo.hku.hk/28-march-2026-openclaw-meet-up/ | — | — | — | — | medium | — |
| events.md | 49 | evt-049 |  |  |  |  |  |  |  |  |  |  | `["linkedin", "announcement"]` | low | — |
| events.md | 56 | evt-056 |  |  |  |  |  |  |  |  |  |  | `["devpost", "event-site", "project_gallery"]` | high | — |
| events.md | 105 | evt-108 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| events.md | 110 | evt-113 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| events.md | 132 | evt-135 |  |  |  |  |  |  |  |  |  |  | — | medium | — |
| events.md | 133 | evt-136 |  |  |  |  |  |  |  |  |  |  | — | medium | — |
| events.md | 136 | evt-139 |  |  |  |  |  |  |  |  |  |  | — | medium | — |
| demos.md | 117 | demo-120 | evt-118 | — | — | `["project gallery"]` | `["Komunitas Flutter Indonesia (mentioned)", "Google Developers (mentioned)", "Google"]` | `["Flutter", "Dart", "Social Good", "Indonesia"]` | https://indonesiamajuhackfest.devpost.com/project-gallery; https://indonesiamajuhackfest.devpost.com/project-gallery | — | — | — | `["devpost", "details/dates", "project_gallery"]` | high | — |
| demos.md | 138 | demo-141 | evt-139 | — | — | `["project gallery"]` | `["OpenClaw Jakarta community"]` | `["OpenClaw", "AI agents", "builders meetup"]` | https://luma.com/claw; https://luma.com/claw | — | — | — | — | medium | — |
| events.md | 3 | evt-003 |  |  |  |  |  |  |  |  |  |  | `["linkedin", "winners-showcase", "demo-links"]` | medium | — |
| events.md | 7 | evt-007 |  |  |  |  |  |  |  |  |  |  | `["community", "event-recap", "demo"]` | low | — |
| events.md | 8 | evt-008 |  |  |  |  |  |  |  |  |  |  | `["announcement", "event-recap"]` | medium | — |
| events.md | 19 | evt-019 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project-gallery", "winners"]` | high | — |
| events.md | 20 | evt-020 |  |  |  |  |  |  |  |  |  |  | `["devpost", "event-page"]` | high | — |
| events.md | 22 | evt-022 |  |  |  |  |  |  |  |  |  |  | `["linkedin", "project-demo"]` | low | — |
| events.md | 29 | evt-029 |  |  |  |  |  |  |  |  |  |  | `["announcement", "marketing"]` | medium | — |
| events.md | 32 | evt-032 |  |  |  |  |  |  |  |  |  |  | `["devpost", "event-page"]` | high | — |
| events.md | 35 | evt-035 |  |  |  |  |  |  |  |  |  |  | `["announcement", "marketing"]` | medium | — |
| events.md | 36 | evt-036 |  |  |  |  |  |  |  |  |  |  | `["devpost", "event-page"]` | high | — |
| events.md | 41 | evt-041 |  |  |  |  |  |  |  |  |  |  | `["devpost", "event-page"]` | high | — |
| events.md | 42 | evt-042 |  |  |  |  |  |  |  |  |  |  | `["linkedin", "announcement"]` | medium | — |
| events.md | 43 | evt-043 |  |  |  |  |  |  |  |  |  |  | `["devpost", "event-page"]` | high | — |
| events.md | 52 | evt-052 |  |  |  |  |  |  |  |  |  |  | `["devpost", "official-site", "event-site", "project_gallery"]` | high | — |
| events.md | 54 | evt-054 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | — |
| events.md | 55 | evt-055 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | — |
| events.md | 57 | evt-057 |  |  |  |  |  |  |  |  |  |  | `["devpost", "event-site", "project_gallery"]` | high | — |
| events.md | 58 | evt-058 |  |  |  |  |  |  |  |  |  |  | `["devpost", "event-site", "project_gallery"]` | high | — |
| events.md | 97 | evt-100 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | — |
| events.md | 98 | evt-101 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | — |
| events.md | 99 | evt-102 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | — |
| events.md | 106 | evt-109 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| events.md | 107 | evt-110 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| events.md | 108 | evt-111 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| events.md | 109 | evt-112 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| events.md | 115 | evt-118 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| events.md | 134 | evt-137 |  |  |  |  |  |  |  |  |  |  | — | medium | — |
| events.md | 135 | evt-138 |  |  |  |  |  |  |  |  |  |  | — | medium | — |
| events.md | 137 | evt-140 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | — |
| events.md | 138 | evt-141 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | — |
| organizer.md | 64 | org-2b681c0a |  |  |  |  |  |  |  |  |  |  | — | — | — |
| organizer.md | 65 | org-d7b64618 |  |  |  |  |  |  |  |  |  |  | — | — | — |
| organizer.md | 124 | org-a19ee5a9 |  |  |  |  |  |  |  |  |  |  | — | — | — |
| sources.md | 59 | src-059 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | — | — |