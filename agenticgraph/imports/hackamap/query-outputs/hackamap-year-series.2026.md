# hackamap-year-series (2026)

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
          "field": "Date Start",
          "op": "contains",
          "value": "2026"
        },
        {
          "field": "Date End",
          "op": "contains",
          "value": "2026"
        },
        {
          "field": "Event",
          "op": "contains",
          "value": "2026"
        },
        {
          "field": "URL",
          "op": "contains",
          "value": "2026"
        }
      ]
    },
    "demos.md": {
      "or": [
        {
          "op": "any",
          "value": "2026"
        },
        {
          "field": "Demo URL",
          "op": "contains",
          "value": "2026"
        },
        {
          "field": "Repo URL",
          "op": "contains",
          "value": "2026"
        }
      ]
    },
    "sources.md": {
      "or": [
        {
          "field": "URL",
          "op": "contains",
          "value": "2026"
        },
        {
          "field": "Domain",
          "op": "contains",
          "value": "2026"
        },
        {
          "op": "any",
          "value": "2026"
        }
      ]
    },
    "organizer.md": {
      "op": "any",
      "value": "2026"
    },
    "team.md": {
      "op": "any",
      "value": "2026"
    },
    "techstack.md": {
      "op": "any",
      "value": "2026"
    }
  },
  "limit": 300,
  "output": {
    "title": "hackamap-year-series",
    "json_path": "hackamap-year-series.json",
    "md_path": "hackamap-year-series.md",
    "table_prefix": "year-series"
  }
}
```

| _file | _row | id | Tech | Category | FOSS | License | Vendor/Org | FOSS Alternatives | TCO Notes | Events | Demos | Source URLs | Source Type | Confidence | Extracted At |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| techstack.md | 24 | tech-024 | Beginner Friendly | — | — | — | — | — | — | `["evt-052", "evt-060", "evt-061", "evt-063", "evt-069", "evt-076", "evt-077", "evt-087", "evt-098", "evt-099", "evt-100", "evt-101", "evt-102", "evt-104", "evt-106", "evt-110", "evt-111", "evt-114", "evt-119", "evt-140"]` | `["demo-054", "demo-062", "demo-063", "demo-065", "demo-071", "demo-078", "demo-079", "demo-089", "demo-100", "demo-101", "demo-102", "demo-103", "demo-104", "demo-106", "demo-108", "demo-112", "demo-113", "demo-116", "demo-121", "demo-142"]` | `["https://hacknroll2023.devpost.com/", "https://hacknroll.nushackers.org/", "https://hacknroll2023.devpost.com/project-gallery", "https://minimax-hackathon-in-hk.devpost.com/", "https://minimax-hackathon-in-hk.devpost.com/project-gallery", "https://hack4hk-23258.devpost.com/", "https://hack4hk-23258.devpost.com/project-gallery", "https://googlecloudjapanaihackathon.devpost.com/", "https://googlecloudjapanaihackathon.devpost.com/project-gallery", "https://seoul-tech-impact-2024.devpost.com/", "https://www.seoultechimpact.com/register", "https://seoul-tech-impact-2024.devpost.com/project-gallery", "https://gh6.devpost.com/", "https://gh6.devpost.com/project-gallery", "https://garuda-hacks.devpost.com/", "https://garuda-hacks.devpost.com/project-gallery", "https://lotushacks2026.devpost.com/", "https://lotushacks2026.devpost.com/project-gallery", "https://xircus-apr-hackathon-manila.devpost.com/", "https://xircus-apr-hackathon-manila.devpost.com/project-gallery", "https://hack4good-2024.devpost.com/", "https://hack4good-2024.devpost.com/project-gallery", "https://nus-datathon-2024-cat-b.devpost.com/", "https://nus-datathon-2024-cat-b.devpost.com/project-gallery", "https://youthxhack2024.devpost.com/", "https://youthxhack2024.devpost.com/project-gallery", "https://cloudhacks-2024.devpost.com/", "https://cloudhacks-2024.devpost.com/project-gallery", "https://gh5.devpost.com/", "https://gh5.devpost.com/project-gallery", "https://buhack-28545.devpost.com/", "https://buhack-28545.devpost.com/details/dates", "https://buhack-28545.devpost.com/project-gallery", "https://scds-techfest-2026.devpost.com/", "https://scds-techfest-2026.devpost.com/details/dates", "https://scds-techfest-2026.devpost.com/project-gallery", "https://ntu-beyond-binary-2026.devpost.com/", "https://ntu-beyond-binary-2026.devpost.com/details/dates", "https://ntu-beyond-binary-2026.devpost.com/project-gallery", "https://international-prosolve-2026.devpost.com/", "https://international-prosolve-2026.devpost.com/details/dates", "https://international-prosolve-2026.devpost.com/project-gallery", "https://bsj-fobisia-hackathon.devpost.com/", "https://bsj-fobisia-hackathon.devpost.com/details/dates", "https://bsj-fobisia-hackathon.devpost.com/project-gallery", "https://acaciahackathonstudentlife.devpost.com/", "https://acaciahackathonstudentlife.devpost.com/project-gallery"]` | `["devpost", "official-site", "event-site", "project_gallery", "registration", "details/dates"]` | high | — |
| techstack.md | 52 | tech-052 | Devpost | platform | no | — | Devpost | — | SaaS platform; TCO mainly time + workflow lock-in rather than infra cost. | `["evt-006", "evt-010", "evt-011", "evt-012", "evt-013", "evt-014", "evt-015", "evt-017", "evt-019", "evt-020", "evt-025", "evt-026", "evt-036", "evt-040", "evt-041", "evt-043"]` | `["demo-006", "demo-010", "demo-011", "demo-013", "demo-014", "demo-015", "demo-016", "demo-018", "demo-020", "demo-021", "demo-026", "demo-027", "demo-038", "demo-042", "demo-043", "demo-045"]` | `["https://hackai-2026.devpost.com/project-gallery", "https://hack-for-humanity-2026.devpost.com/project-gallery", "https://hack-for-humanity-2026.devpost.com/", "https://developerweek-2026-hackathon.devpost.com/project-gallery", "https://developerweek-2026-hackathon.devpost.com/", "https://treehacks-2026.devpost.com/project-gallery", "https://treehacks-2026.devpost.com/", "https://redditdailygames2026.devpost.com/project-gallery", "https://hacknroll2026.devpost.com/project-gallery", "https://hacknroll2026.devpost.com/", "https://uksaei-hackathon.devpost.com/", "https://cursor-hack-my.devpost.com/project-gallery", "https://lifehack-2025.devpost.com/", "https://bitcoin-indonesia-hackathon.devpost.com/", "https://hacknroll2025.devpost.com/", "https://hacknroll2024.devpost.com/"]` | `["devpost", "project-gallery", "winners", "event-page"]` | high | — |
| techstack.md | 134 | tech-134 | Social Good | — | — | — | — | — | — | `["evt-053", "evt-054", "evt-056", "evt-061", "evt-066", "evt-068", "evt-069", "evt-071", "evt-076", "evt-077", "evt-080", "evt-083", "evt-099", "evt-101", "evt-104", "evt-111", "evt-112", "evt-113", "evt-116", "evt-118", "evt-122", "evt-123"]` | `["demo-055", "demo-056", "demo-058", "demo-063", "demo-068", "demo-070", "demo-071", "demo-073", "demo-078", "demo-079", "demo-082", "demo-085", "demo-101", "demo-103", "demo-106", "demo-113", "demo-114", "demo-115", "demo-118", "demo-120", "demo-124", "demo-125"]` | `["https://hack-for-good-2023.devpost.com/", "https://hack-for-good-2023.devpost.com/project-gallery", "https://youthxhack.devpost.com/", "https://youthxhack.devpost.com/project-gallery", "https://dothackathon.devpost.com/", "https://smudothack.surge.sh/", "https://dothackathon.devpost.com/project-gallery", "https://hack4hk-23258.devpost.com/", "https://hack4hk-23258.devpost.com/project-gallery", "https://makerpossible.devpost.com/", "https://makerpossible.devpost.com/project-gallery", "https://students-ai-seoul-hackathon.devpost.com/", "https://students-ai-seoul-hackathon.devpost.com/project-gallery", "https://seoul-tech-impact-2024.devpost.com/", "https://www.seoultechimpact.com/register", "https://seoul-tech-impact-2024.devpost.com/project-gallery", "https://iisc-ibm-india-ai-impact.devpost.com/", "https://iisc-ibm-india-ai-impact.devpost.com/project-gallery", "https://gh6.devpost.com/", "https://gh6.devpost.com/project-gallery", "https://garuda-hacks.devpost.com/", "https://garuda-hacks.devpost.com/project-gallery", "https://bitcoin-indonesia-hackathon.devpost.com/", "https://bitcoin-indonesia-hackathon.devpost.com/project-gallery", "https://yme-hackathon-2021.devpost.com/", "https://yme-hackathon-2021.devpost.com/project-gallery", "https://hack4good-2024.devpost.com/", "https://hack4good-2024.devpost.com/project-gallery", "https://youthxhack2024.devpost.com/", "https://youthxhack2024.devpost.com/project-gallery", "https://gh5.devpost.com/", "https://gh5.devpost.com/project-gallery", "https://ntu-beyond-binary-2026.devpost.com/", "https://ntu-beyond-binary-2026.devpost.com/details/dates", "https://ntu-beyond-binary-2026.devpost.com/project-gallery", "https://inter-hall-hackathon-2026.devpost.com/", "https://inter-hall-hackathon-2026.devpost.com/details/dates", "https://inter-hall-hackathon-2026.devpost.com/project-gallery", "https://build-for-impact-2026-28173.devpost.com/", "https://build-for-impact-2026-28173.devpost.com/details/dates", "https://build-for-impact-2026-28173.devpost.com/project-gallery", "https://zoohackathon2019-kk-malaysia.devpost.com/", "https://zoohackathon2019-kk-malaysia.devpost.com/details/dates", "https://zoohackathon2019-kk-malaysia.devpost.com/project-gallery", "https://indonesiamajuhackfest.devpost.com/", "https://indonesiamajuhackfest.devpost.com/details/dates", "https://indonesiamajuhackfest.devpost.com/project-gallery", "https://hackathonbojonegoro.devpost.com/", "https://hackathonbojonegoro.devpost.com/details/dates", "https://hackathonbojonegoro.devpost.com/project-gallery", "https://test-android-hackathon-2025.devpost.com/", "https://test-android-hackathon-2025.devpost.com/details/dates", "https://test-android-hackathon-2025.devpost.com/project-gallery"]` | `["devpost", "project_gallery", "event-site", "registration", "details/dates"]` | high | — |
| techstack.md | 59 | tech-059 | Education | — | — | — | — | — | — | `["evt-056", "evt-068", "evt-071", "evt-074", "evt-078", "evt-080", "evt-083", "evt-105", "evt-110", "evt-114", "evt-119", "evt-123", "evt-141"]` | `["demo-058", "demo-070", "demo-073", "demo-076", "demo-080", "demo-082", "demo-085", "demo-107", "demo-112", "demo-116", "demo-121", "demo-125", "demo-143"]` | `["https://dothackathon.devpost.com/", "https://smudothack.surge.sh/", "https://dothackathon.devpost.com/project-gallery", "https://students-ai-seoul-hackathon.devpost.com/", "https://students-ai-seoul-hackathon.devpost.com/project-gallery", "https://iisc-ibm-india-ai-impact.devpost.com/", "https://iisc-ibm-india-ai-impact.devpost.com/project-gallery", "https://ic-hack.devpost.com/", "https://ic-hack.devpost.com/project-gallery", "https://komodo-hacks.devpost.com/", "https://komodo-hacks.devpost.com/project-gallery", "https://bitcoin-indonesia-hackathon.devpost.com/", "https://bitcoin-indonesia-hackathon.devpost.com/project-gallery", "https://yme-hackathon-2021.devpost.com/", "https://yme-hackathon-2021.devpost.com/project-gallery", "https://onerecord-hkg.devpost.com/", "https://onerecord-hkg.devpost.com/details/dates", "https://onerecord-hkg.devpost.com/project-gallery", "https://scds-techfest-2026.devpost.com/", "https://scds-techfest-2026.devpost.com/details/dates", "https://scds-techfest-2026.devpost.com/project-gallery", "https://international-prosolve-2026.devpost.com/", "https://international-prosolve-2026.devpost.com/details/dates", "https://international-prosolve-2026.devpost.com/project-gallery", "https://bsj-fobisia-hackathon.devpost.com/", "https://bsj-fobisia-hackathon.devpost.com/details/dates", "https://bsj-fobisia-hackathon.devpost.com/project-gallery", "https://test-android-hackathon-2025.devpost.com/", "https://test-android-hackathon-2025.devpost.com/details/dates", "https://test-android-hackathon-2025.devpost.com/project-gallery", "https://ccds-tech-for-good-2026.devpost.com/", "https://ccds-tech-for-good-2026.devpost.com/project-gallery"]` | `["devpost", "event-site", "project_gallery", "details/dates"]` | high | — |
| techstack.md | 101 | tech-101 | Machine Learning/AI | — | — | — | — | — | — | `["evt-055", "evt-059", "evt-060", "evt-063", "evt-068", "evt-071", "evt-075", "evt-076", "evt-077", "evt-081", "evt-082", "evt-104", "evt-108", "evt-109", "evt-111", "evt-115", "evt-116", "evt-124"]` | `["demo-057", "demo-061", "demo-062", "demo-065", "demo-070", "demo-073", "demo-077", "demo-078", "demo-079", "demo-083", "demo-084", "demo-106", "demo-110", "demo-111", "demo-113", "demo-117", "demo-118", "demo-126"]` | `["https://nus-ftm-ideation-hackathon.devpost.com/", "https://nus-ftm-ideation-hackathon.devpost.com/project-gallery", "https://aws-hong-kong-hackathon.devpost.com/", "https://aws-hong-kong-hackathon.devpost.com/project-gallery", "https://minimax-hackathon-in-hk.devpost.com/", "https://minimax-hackathon-in-hk.devpost.com/project-gallery", "https://googlecloudjapanaihackathon.devpost.com/", "https://googlecloudjapanaihackathon.devpost.com/project-gallery", "https://students-ai-seoul-hackathon.devpost.com/", "https://students-ai-seoul-hackathon.devpost.com/project-gallery", "https://iisc-ibm-india-ai-impact.devpost.com/", "https://iisc-ibm-india-ai-impact.devpost.com/project-gallery", "https://coding-cup.devpost.com/", "https://coding-cup.devpost.com/project-gallery", "https://gh6.devpost.com/", "https://gh6.devpost.com/project-gallery", "https://garuda-hacks.devpost.com/", "https://garuda-hacks.devpost.com/project-gallery", "https://build-with-deepmind.devpost.com/", "https://build-with-deepmind.devpost.com/project-gallery", "https://mathworks-utm-2025.devpost.com/", "https://mathworks-utm-2025.devpost.com/project-gallery", "https://gh5.devpost.com/", "https://gh5.devpost.com/project-gallery", "https://elastic-forge-the-future.devpost.com/", "https://elastic-forge-the-future.devpost.com/details/dates", "https://elastic-forge-the-future.devpost.com/project-gallery", "https://pinus-hack-2026.devpost.com/", "https://pinus-hack-2026.devpost.com/details/dates", "https://pinus-hack-2026.devpost.com/project-gallery", "https://ntu-beyond-binary-2026.devpost.com/", "https://ntu-beyond-binary-2026.devpost.com/details/dates", "https://ntu-beyond-binary-2026.devpost.com/project-gallery", "https://payhack-2025.devpost.com/", "https://payhack-2025.devpost.com/details/dates", "https://payhack-2025.devpost.com/project-gallery", "https://zoohackathon2019-kk-malaysia.devpost.com/", "https://zoohackathon2019-kk-malaysia.devpost.com/details/dates", "https://zoohackathon2019-kk-malaysia.devpost.com/project-gallery", "https://onerecord-szx.devpost.com/", "https://onerecord-szx.devpost.com/details/dates", "https://onerecord-szx.devpost.com/project-gallery"]` | `["devpost", "project_gallery", "details/dates"]` | high | — |
| demos.md | 13 | demo-013 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project-gallery", "winners"]` | high | 2026-04-04 |
| demos.md | 15 | demo-015 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project-gallery", "winners"]` | high | 2026-04-04 |
| demos.md | 20 | demo-020 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project-gallery", "winners"]` | high | 2026-04-04 |
| events.md | 106 | evt-109 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | 2026-04-04 |
| events.md | 107 | evt-110 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | 2026-04-04 |
| events.md | 108 | evt-111 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | 2026-04-04 |
| events.md | 109 | evt-112 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | 2026-04-04 |
| events.md | 110 | evt-113 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | 2026-04-04 |
| events.md | 111 | evt-114 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | 2026-04-04 |
| techstack.md | 9 | tech-009 | AI prototyping | — | — | — | — | — | — | `["evt-113"]` | `["demo-115"]` | `["https://build-for-impact-2026-28173.devpost.com/", "https://build-for-impact-2026-28173.devpost.com/details/dates", "https://build-for-impact-2026-28173.devpost.com/project-gallery"]` | `["devpost", "details/dates", "project_gallery"]` | high | — |
| techstack.md | 40 | tech-040 | competitive programming | — | — | — | — | — | — | `["evt-114"]` | `["demo-116"]` | `["https://international-prosolve-2026.devpost.com/", "https://international-prosolve-2026.devpost.com/details/dates", "https://international-prosolve-2026.devpost.com/project-gallery"]` | `["devpost", "details/dates", "project_gallery"]` | high | — |
| techstack.md | 49 | tech-049 | design thinking | — | — | — | — | — | — | `["evt-113"]` | `["demo-115"]` | `["https://build-for-impact-2026-28173.devpost.com/", "https://build-for-impact-2026-28173.devpost.com/details/dates", "https://build-for-impact-2026-28173.devpost.com/project-gallery"]` | `["devpost", "details/dates", "project_gallery"]` | high | — |
| techstack.md | 84 | tech-084 | Hackathon | — | — | — | — | — | — | `["evt-111"]` | `["demo-113"]` | `["https://ntu-beyond-binary-2026.devpost.com/", "https://ntu-beyond-binary-2026.devpost.com/details/dates", "https://ntu-beyond-binary-2026.devpost.com/project-gallery"]` | `["devpost", "details/dates", "project_gallery"]` | high | — |
| techstack.md | 90 | tech-090 | Ideathon | — | — | — | — | — | — | `["evt-111"]` | `["demo-113"]` | `["https://ntu-beyond-binary-2026.devpost.com/", "https://ntu-beyond-binary-2026.devpost.com/details/dates", "https://ntu-beyond-binary-2026.devpost.com/project-gallery"]` | `["devpost", "details/dates", "project_gallery"]` | high | — |
| techstack.md | 99 | tech-099 | Low/No Code | — | — | — | — | — | — | `["evt-061", "evt-098", "evt-105", "evt-113", "evt-140"]` | `["demo-063", "demo-100", "demo-107", "demo-115", "demo-142"]` | `["https://hack4hk-23258.devpost.com/", "https://hack4hk-23258.devpost.com/project-gallery", "https://xircus-apr-hackathon-manila.devpost.com/", "https://xircus-apr-hackathon-manila.devpost.com/project-gallery", "https://onerecord-hkg.devpost.com/", "https://onerecord-hkg.devpost.com/details/dates", "https://onerecord-hkg.devpost.com/project-gallery", "https://build-for-impact-2026-28173.devpost.com/", "https://build-for-impact-2026-28173.devpost.com/details/dates", "https://build-for-impact-2026-28173.devpost.com/project-gallery", "https://acaciahackathonstudentlife.devpost.com/", "https://acaciahackathonstudentlife.devpost.com/project-gallery"]` | `["devpost", "project_gallery", "details/dates"]` | high | — |
| techstack.md | 102 | tech-102 | Machine Learning/AI (theme tag on listing) | — | — | — | — | — | — | `["evt-114"]` | `["demo-116"]` | `["https://international-prosolve-2026.devpost.com/", "https://international-prosolve-2026.devpost.com/details/dates", "https://international-prosolve-2026.devpost.com/project-gallery"]` | `["devpost", "details/dates", "project_gallery"]` | high | — |
| techstack.md | 104 | tech-104 | Mobile | — | — | — | — | — | — | `["evt-079", "evt-109"]` | `["demo-081", "demo-111"]` | `["https://hackidea.devpost.com/", "https://hackidea.devpost.com/project-gallery", "https://pinus-hack-2026.devpost.com/", "https://pinus-hack-2026.devpost.com/details/dates", "https://pinus-hack-2026.devpost.com/project-gallery"]` | `["devpost", "project_gallery", "details/dates"]` | high | — |
| techstack.md | 114 | tech-114 | Open Ended | — | — | — | — | — | — | `["evt-052", "evt-081", "evt-095", "evt-101", "evt-102", "evt-112", "evt-125"]` | `["demo-054", "demo-083", "demo-097", "demo-103", "demo-104", "demo-114", "demo-127"]` | `["https://hacknroll2023.devpost.com/", "https://hacknroll.nushackers.org/", "https://hacknroll2023.devpost.com/project-gallery", "https://build-with-deepmind.devpost.com/", "https://build-with-deepmind.devpost.com/project-gallery", "https://unihack2025.devpost.com/", "https://unihack.net/", "https://unihack2025.devpost.com/project-gallery", "https://youthxhack2024.devpost.com/", "https://youthxhack2024.devpost.com/project-gallery", "https://cloudhacks-2024.devpost.com/", "https://cloudhacks-2024.devpost.com/project-gallery", "https://inter-hall-hackathon-2026.devpost.com/", "https://inter-hall-hackathon-2026.devpost.com/details/dates", "https://inter-hall-hackathon-2026.devpost.com/project-gallery", "https://hackdevs.devpost.com/", "https://hackdevs.devpost.com/details/dates", "https://hackdevs.devpost.com/project-gallery"]` | `["devpost", "official-site", "event-site", "project_gallery", "details/dates"]` | high | — |
| techstack.md | 121 | tech-121 | Productivity | — | — | — | — | — | — | `["evt-053", "evt-081", "evt-086", "evt-106", "evt-110"]` | `["demo-055", "demo-083", "demo-088", "demo-108", "demo-112"]` | `["https://hack-for-good-2023.devpost.com/", "https://hack-for-good-2023.devpost.com/project-gallery", "https://build-with-deepmind.devpost.com/", "https://build-with-deepmind.devpost.com/project-gallery", "https://hackbangph.devpost.com/", "https://hackbangph.devpost.com/project-gallery", "https://buhack-28545.devpost.com/", "https://buhack-28545.devpost.com/details/dates", "https://buhack-28545.devpost.com/project-gallery", "https://scds-techfest-2026.devpost.com/", "https://scds-techfest-2026.devpost.com/details/dates", "https://scds-techfest-2026.devpost.com/project-gallery"]` | `["devpost", "project_gallery", "details/dates"]` | high | — |
| techstack.md | 137 | tech-137 | student hackathon | — | — | — | — | — | — | `["evt-109", "evt-127", "evt-133"]` | `["demo-111", "demo-129", "demo-135"]` | `["https://pinus-hack-2026.devpost.com/", "https://pinus-hack-2026.devpost.com/details/dates", "https://pinus-hack-2026.devpost.com/project-gallery", "https://hackpku2016.devpost.com/", "https://hackpku2016.devpost.com/details/dates", "https://hackpku2016.devpost.com/project-gallery", "https://hacknyu-nyush.devpost.com/", "https://hacknyu-nyush.devpost.com/details/dates", "https://hacknyu-nyush.devpost.com/project-gallery"]` | `["devpost", "details/dates", "project_gallery"]` | high | — |
| techstack.md | 150 | tech-150 | Web | — | — | — | — | — | — | `["evt-053", "evt-075", "evt-106", "evt-109"]` | `["demo-055", "demo-077", "demo-108", "demo-111"]` | `["https://hack-for-good-2023.devpost.com/", "https://hack-for-good-2023.devpost.com/project-gallery", "https://coding-cup.devpost.com/", "https://coding-cup.devpost.com/project-gallery", "https://buhack-28545.devpost.com/", "https://buhack-28545.devpost.com/details/dates", "https://buhack-28545.devpost.com/project-gallery", "https://pinus-hack-2026.devpost.com/", "https://pinus-hack-2026.devpost.com/details/dates", "https://pinus-hack-2026.devpost.com/project-gallery"]` | `["devpost", "project_gallery", "details/dates"]` | high | — |
| demos.md | 6 | demo-006 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project-gallery", "winners"]` | high | 2026-04-04 |
| demos.md | 10 | demo-010 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project-gallery", "winners"]` | high | 2026-04-04 |
| demos.md | 11 | demo-011 |  |  |  |  |  |  |  |  |  |  | `["devpost", "event-page"]` | high | 2026-04-04 |
| demos.md | 14 | demo-014 |  |  |  |  |  |  |  |  |  |  | `["devpost", "event-page"]` | high | 2026-04-04 |
| demos.md | 16 | demo-016 |  |  |  |  |  |  |  |  |  |  | `["devpost", "event-page"]` | high | 2026-04-04 |
| demos.md | 18 | demo-018 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project-gallery", "winners"]` | high | 2026-04-04 |
| demos.md | 19 | demo-019 |  |  |  |  |  |  |  |  |  |  | `["devpost", "event-page"]` | high | 2026-04-04 |
| demos.md | 21 | demo-021 |  |  |  |  |  |  |  |  |  |  | `["devpost", "event-page"]` | high | 2026-04-04 |
| demos.md | 86 | demo-089 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | 2026-04-04 |
| demos.md | 108 | demo-111 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | 2026-04-04 |
| demos.md | 109 | demo-112 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | 2026-04-04 |
| demos.md | 110 | demo-113 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | 2026-04-04 |
| demos.md | 111 | demo-114 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | 2026-04-04 |
| demos.md | 112 | demo-115 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | 2026-04-04 |
| demos.md | 113 | demo-116 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | 2026-04-04 |
| demos.md | 135 | demo-138 |  |  |  |  |  |  |  |  |  |  | — | medium | 2026-04-04 |
| demos.md | 140 | demo-143 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | 2026-04-04 |
| events.md | 84 | evt-087 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | 2026-04-04 |
| events.md | 138 | evt-141 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | 2026-04-04 |
| sources.md | 17 | src-017 |  |  |  |  |  |  |  | `["evt-113"]` | — |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 18 | src-018 |  |  |  |  |  |  |  | `["evt-113"]` | — |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 19 | src-019 |  |  |  |  |  |  |  | `["evt-113"]` | `["demo-115"]` |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 23 | src-023 |  |  |  |  |  |  |  | `["evt-141"]` | — |  | `["devpost", "project_gallery"]` | high | — |
| sources.md | 24 | src-024 |  |  |  |  |  |  |  | `["evt-141"]` | `["demo-143"]` |  | `["devpost", "project_gallery"]` | high | — |
| sources.md | 33 | src-033 |  |  |  |  |  |  |  | `["evt-013"]` | `["demo-014"]` |  | `["devpost", "event-page"]` | high | — |
| sources.md | 34 | src-034 |  |  |  |  |  |  |  | `["evt-012"]` | `["demo-013"]` |  | `["devpost", "project-gallery", "winners"]` | high | — |
| sources.md | 63 | src-063 |  |  |  |  |  |  |  | `["evt-011"]` | `["demo-011"]` |  | `["devpost", "event-page"]` | high | — |
| sources.md | 64 | src-064 |  |  |  |  |  |  |  | `["evt-010"]` | `["demo-010"]` |  | `["devpost", "project-gallery", "winners"]` | high | — |
| sources.md | 72 | src-072 |  |  |  |  |  |  |  | `["evt-006"]` | `["demo-006"]` |  | `["devpost", "project-gallery", "winners"]` | high | — |
| sources.md | 101 | src-101 |  |  |  |  |  |  |  | `["evt-020"]` | `["demo-021"]` |  | `["devpost", "event-page"]` | high | — |
| sources.md | 102 | src-102 |  |  |  |  |  |  |  | `["evt-019"]` | `["demo-020"]` |  | `["devpost", "project-gallery", "winners"]` | high | — |
| sources.md | 125 | src-125 |  |  |  |  |  |  |  | `["evt-112"]` | — |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 126 | src-126 |  |  |  |  |  |  |  | `["evt-112"]` | — |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 127 | src-127 |  |  |  |  |  |  |  | `["evt-112"]` | `["demo-114"]` |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 128 | src-128 |  |  |  |  |  |  |  | `["evt-114"]` | — |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 129 | src-129 |  |  |  |  |  |  |  | `["evt-114"]` | — |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 130 | src-130 |  |  |  |  |  |  |  | `["evt-114"]` | `["demo-116"]` |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 145 | src-145 |  |  |  |  |  |  |  | `["evt-087"]` | — |  | `["devpost", "project_gallery"]` | high | — |
| sources.md | 146 | src-146 |  |  |  |  |  |  |  | `["evt-087"]` | `["demo-089"]` |  | `["devpost", "project_gallery"]` | high | — |
| sources.md | 159 | src-159 |  |  |  |  |  |  |  | `["evt-111"]` | — |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 160 | src-160 |  |  |  |  |  |  |  | `["evt-111"]` | — |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 161 | src-161 |  |  |  |  |  |  |  | `["evt-111"]` | `["demo-113"]` |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 177 | src-177 |  |  |  |  |  |  |  | `["evt-109"]` | — |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 178 | src-178 |  |  |  |  |  |  |  | `["evt-109"]` | — |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 179 | src-179 |  |  |  |  |  |  |  | `["evt-109"]` | `["demo-111"]` |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 184 | src-184 |  |  |  |  |  |  |  | `["evt-018"]` | `["demo-019"]` |  | `["devpost", "event-page"]` | high | — |
| sources.md | 185 | src-185 |  |  |  |  |  |  |  | `["evt-017"]` | `["demo-018"]` |  | `["devpost", "project-gallery", "winners"]` | high | — |
| sources.md | 189 | src-189 |  |  |  |  |  |  |  | `["evt-110"]` | — |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 190 | src-190 |  |  |  |  |  |  |  | `["evt-110"]` | — |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 191 | src-191 |  |  |  |  |  |  |  | `["evt-110"]` | `["demo-112"]` |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 212 | src-212 |  |  |  |  |  |  |  | `["evt-015"]` | `["demo-016"]` |  | `["devpost", "event-page"]` | high | — |
| sources.md | 213 | src-213 |  |  |  |  |  |  |  | `["evt-014"]` | `["demo-015"]` |  | `["devpost", "project-gallery", "winners"]` | high | — |
| techstack.md | 23 | tech-023 | Azure OpenAI | llm-api | no | — | Microsoft Azure | `["self-hosted open models"]` | Usage-based API cost; enterprise procurement + regional availability can dominate TCO. | `["evt-141"]` | `["demo-143"]` | `["https://ccds-tech-for-good-2026.devpost.com/", "https://ccds-tech-for-good-2026.devpost.com/project-gallery"]` | `["devpost", "project_gallery"]` | high | — |
| techstack.md | 71 | tech-071 | Gaming | — | — | — | — | — | — | `["evt-141"]` | `["demo-143"]` | `["https://ccds-tech-for-good-2026.devpost.com/", "https://ccds-tech-for-good-2026.devpost.com/project-gallery"]` | `["devpost", "project_gallery"]` | high | — |
| techstack.md | 86 | tech-086 | Health | — | — | — | — | — | — | `["evt-066", "evt-074", "evt-123", "evt-141"]` | `["demo-068", "demo-076", "demo-125", "demo-143"]` | `["https://makerpossible.devpost.com/", "https://makerpossible.devpost.com/project-gallery", "https://ic-hack.devpost.com/", "https://ic-hack.devpost.com/project-gallery", "https://test-android-hackathon-2025.devpost.com/", "https://test-android-hackathon-2025.devpost.com/details/dates", "https://test-android-hackathon-2025.devpost.com/project-gallery", "https://ccds-tech-for-good-2026.devpost.com/", "https://ccds-tech-for-good-2026.devpost.com/project-gallery"]` | `["devpost", "project_gallery", "details/dates"]` | high | — |
| techstack.md | 95 | tech-095 | LangChain | agent-framework | yes | MIT (commonly) | LangChain | `["LlamaIndex", "Haystack"]` | FOSS framework; infra + model/API costs dominate; maintenance cost scales with integrations. | `["evt-141"]` | `["demo-143"]` | `["https://ccds-tech-for-good-2026.devpost.com/", "https://ccds-tech-for-good-2026.devpost.com/project-gallery"]` | `["devpost", "project_gallery"]` | high | — |
| techstack.md | 98 | tech-098 | LLMs | — | — | — | — | — | — | `["evt-141"]` | `["demo-143"]` | `["https://ccds-tech-for-good-2026.devpost.com/", "https://ccds-tech-for-good-2026.devpost.com/project-gallery"]` | `["devpost", "project_gallery"]` | high | — |
| techstack.md | 123 | tech-123 | Pygame | ui-framework | yes | LGPL (commonly) | pygame community | `["Godot (for games)", "SDL bindings"]` | No license cost; TCO is engineering time + packaging/distribution. | `["evt-141"]` | `["demo-143"]` | `["https://ccds-tech-for-good-2026.devpost.com/", "https://ccds-tech-for-good-2026.devpost.com/project-gallery"]` | `["devpost", "project_gallery"]` | high | — |
| demos.md | 1 | demo-001 |  |  |  |  |  |  |  |  |  |  | `["devpost", "event-page"]` | high | 2026-04-04 |
| demos.md | 2 | demo-002 |  |  |  |  |  |  |  |  |  |  | `["marketing"]` | low | 2026-04-04 |
| demos.md | 3 | demo-003 |  |  |  |  |  |  |  |  |  |  | `["linkedin", "winners-showcase", "demo-links"]` | medium | 2026-04-04 |
| demos.md | 4 | demo-004 |  |  |  |  |  |  |  |  |  |  | `["announcement", "marketing"]` | medium | 2026-04-04 |
| demos.md | 5 | demo-005 |  |  |  |  |  |  |  |  |  |  | `["community", "event-recap"]` | medium | 2026-04-04 |
| demos.md | 7 | demo-007 |  |  |  |  |  |  |  |  |  |  | `["community", "event-recap"]` | low | 2026-04-04 |
| demos.md | 8 | demo-008 |  |  |  |  |  |  |  |  |  |  | `["announcement", "event-recap"]` | medium | 2026-04-04 |
| demos.md | 9 | demo-009 |  |  |  |  |  |  |  |  |  |  | `["announcement", "marketing"]` | medium | 2026-04-04 |
| demos.md | 12 | demo-012 |  |  |  |  |  |  |  |  |  |  | `["community", "demo"]` | low | 2026-04-04 |
| demos.md | 17 | demo-017 |  |  |  |  |  |  |  |  |  |  | `["reddit", "winners-announcement"]` | high | 2026-04-04 |
| demos.md | 22 | demo-022 |  |  |  |  |  |  |  |  |  |  | `["x.com", "community", "curation"]` | medium | 2026-04-04 |
| demos.md | 23 | demo-023 |  |  |  |  |  |  |  |  |  |  | `["linkedin", "project-demo"]` | low | 2026-04-04 |
| demos.md | 24 | demo-024 |  |  |  |  |  |  |  |  |  |  | `["media", "event-recap"]` | low | 2026-04-04 |
| demos.md | 25 | demo-025 |  |  |  |  |  |  |  |  |  |  | `["community", "event-recap"]` | low | 2026-04-04 |
| demos.md | 26 | demo-026 |  |  |  |  |  |  |  |  |  |  | `["devpost", "event-page"]` | high | 2026-04-04 |
| demos.md | 27 | demo-027 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project-gallery"]` | medium | 2026-04-04 |
| demos.md | 28 | demo-028 |  |  |  |  |  |  |  |  |  |  | `["devpost", "event-page"]` | high | 2026-04-04 |
| demos.md | 29 | demo-029 |  |  |  |  |  |  |  |  |  |  | `["announcement", "marketing"]` | medium | 2026-04-04 |
| demos.md | 30 | demo-030 |  |  |  |  |  |  |  |  |  |  | `["reddit", "announcement"]` | medium | 2026-04-04 |
| demos.md | 31 | demo-031 |  |  |  |  |  |  |  |  |  |  | `["announcement", "marketing"]` | medium | 2026-04-04 |
| demos.md | 32 | demo-032 |  |  |  |  |  |  |  |  |  |  | `["devpost", "event-page"]` | high | 2026-04-04 |
| demos.md | 33 | demo-033 |  |  |  |  |  |  |  |  |  |  | `["announcement", "government"]` | low | 2026-04-04 |
| demos.md | 34 | demo-034 |  |  |  |  |  |  |  |  |  |  | `["devpost", "event-page"]` | high | 2026-04-04 |
| demos.md | 35 | demo-035 |  |  |  |  |  |  |  |  |  |  | `["announcement", "marketing"]` | low | 2026-04-04 |
| demos.md | 36 | demo-036 |  |  |  |  |  |  |  |  |  |  | `["announcement", "marketing"]` | medium | 2026-04-04 |
| demos.md | 37 | demo-037 |  |  |  |  |  |  |  |  |  |  | `["announcement", "marketing"]` | medium | 2026-04-04 |
| demos.md | 38 | demo-038 |  |  |  |  |  |  |  |  |  |  | `["devpost", "event-page"]` | high | 2026-04-04 |
| demos.md | 39 | demo-039 |  |  |  |  |  |  |  |  |  |  | `["producthunt", "story"]` | low | 2026-04-04 |
| demos.md | 40 | demo-040 |  |  |  |  |  |  |  |  |  |  | `["announcement", "marketing"]` | medium | 2026-04-04 |
| demos.md | 41 | demo-041 |  |  |  |  |  |  |  |  |  |  | `["producthunt", "community-post"]` | low | 2026-04-04 |
| demos.md | 42 | demo-042 |  |  |  |  |  |  |  |  |  |  | `["devpost", "event-page"]` | high | 2026-04-04 |
| demos.md | 43 | demo-043 |  |  |  |  |  |  |  |  |  |  | `["devpost", "event-page"]` | high | 2026-04-04 |
| demos.md | 44 | demo-044 |  |  |  |  |  |  |  |  |  |  | `["linkedin", "announcement"]` | medium | 2026-04-04 |
| demos.md | 45 | demo-045 |  |  |  |  |  |  |  |  |  |  | `["devpost", "event-page"]` | high | 2026-04-04 |
| demos.md | 46 | demo-046 |  |  |  |  |  |  |  |  |  |  | `["devpost", "event-page"]` | high | 2026-04-04 |
| demos.md | 47 | demo-047 |  |  |  |  |  |  |  |  |  |  | `["devpost", "event-page"]` | high | 2026-04-04 |
| demos.md | 48 | demo-048 |  |  |  |  |  |  |  |  |  |  | `["producthunt", "newsletter", "winners-announcement"]` | high | 2026-04-04 |
| demos.md | 49 | demo-049 |  |  |  |  |  |  |  |  |  |  | `["linkedin", "event-recap"]` | low | 2026-04-04 |
| demos.md | 50 | demo-050 |  |  |  |  |  |  |  |  |  |  | `["linkedin", "event-recap"]` | low | 2026-04-04 |
| demos.md | 51 | demo-051 |  |  |  |  |  |  |  |  |  |  | `["linkedin", "announcement"]` | low | 2026-04-04 |
| demos.md | 52 | demo-052 |  |  |  |  |  |  |  |  |  |  | `["producthunt", "story"]` | low | 2026-04-04 |
| demos.md | 53 | demo-053 |  |  |  |  |  |  |  |  |  |  | `["producthunt", "product-page"]` | low | 2026-04-04 |
| demos.md | 54 | demo-054 |  |  |  |  |  |  |  |  |  |  | `["devpost", "official-site", "event-site", "project_gallery"]` | high | 2026-04-04 |
| demos.md | 55 | demo-055 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | 2026-04-04 |
| demos.md | 56 | demo-056 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | 2026-04-04 |
| demos.md | 57 | demo-057 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | 2026-04-04 |
| demos.md | 58 | demo-058 |  |  |  |  |  |  |  |  |  |  | `["devpost", "event-site", "project_gallery"]` | high | 2026-04-04 |
| demos.md | 59 | demo-059 |  |  |  |  |  |  |  |  |  |  | `["devpost", "event-site", "project_gallery"]` | high | 2026-04-04 |
| demos.md | 60 | demo-060 |  |  |  |  |  |  |  |  |  |  | `["devpost", "event-site", "project_gallery"]` | high | 2026-04-04 |
| demos.md | 61 | demo-061 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | 2026-04-04 |
| demos.md | 62 | demo-062 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | 2026-04-04 |
| demos.md | 63 | demo-063 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | 2026-04-04 |
| demos.md | 64 | demo-064 |  |  |  |  |  |  |  |  |  |  | `["devpost", "eventbrite", "project_gallery"]` | high | 2026-04-04 |
| demos.md | 65 | demo-065 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | 2026-04-04 |
| demos.md | 66 | demo-067 |  |  |  |  |  |  |  |  |  |  | `["devpost", "event-site", "project_gallery"]` | high | 2026-04-04 |
| demos.md | 67 | demo-068 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | 2026-04-04 |
| demos.md | 68 | demo-069 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | 2026-04-04 |
| demos.md | 69 | demo-070 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | 2026-04-04 |
| demos.md | 70 | demo-071 |  |  |  |  |  |  |  |  |  |  | `["devpost", "registration", "project_gallery"]` | high | 2026-04-04 |
| demos.md | 71 | demo-073 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | 2026-04-04 |
| demos.md | 72 | demo-074 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | 2026-04-04 |
| demos.md | 73 | demo-075 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | 2026-04-04 |
| demos.md | 74 | demo-076 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | 2026-04-04 |
| demos.md | 75 | demo-077 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | 2026-04-04 |
| demos.md | 76 | demo-078 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | 2026-04-04 |
| demos.md | 77 | demo-079 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | 2026-04-04 |
| demos.md | 78 | demo-080 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | 2026-04-04 |
| demos.md | 79 | demo-081 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | 2026-04-04 |
| demos.md | 80 | demo-082 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | 2026-04-04 |
| demos.md | 81 | demo-083 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | 2026-04-04 |
| demos.md | 82 | demo-084 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | 2026-04-04 |
| demos.md | 83 | demo-085 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | 2026-04-04 |
| demos.md | 84 | demo-087 |  |  |  |  |  |  |  |  |  |  | `["devpost", "event-site", "project_gallery"]` | high | 2026-04-04 |
| demos.md | 85 | demo-088 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | 2026-04-04 |
| demos.md | 87 | demo-090 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | 2026-04-04 |
| demos.md | 88 | demo-091 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | 2026-04-04 |
| demos.md | 89 | demo-092 |  |  |  |  |  |  |  |  |  |  | `["devpost", "event-site", "project_gallery"]` | high | 2026-04-04 |
| demos.md | 90 | demo-093 |  |  |  |  |  |  |  |  |  |  | `["devpost", "event-site", "project_gallery"]` | high | 2026-04-04 |
| demos.md | 91 | demo-094 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | 2026-04-04 |
| demos.md | 92 | demo-095 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | 2026-04-04 |
| demos.md | 93 | demo-096 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | 2026-04-04 |
| demos.md | 94 | demo-097 |  |  |  |  |  |  |  |  |  |  | `["devpost", "official-site", "event-site", "project_gallery"]` | high | 2026-04-04 |
| demos.md | 95 | demo-098 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | 2026-04-04 |
| demos.md | 96 | demo-099 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | 2026-04-04 |
| demos.md | 97 | demo-100 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | 2026-04-04 |
| demos.md | 98 | demo-101 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | 2026-04-04 |
| demos.md | 99 | demo-102 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | 2026-04-04 |
| demos.md | 100 | demo-103 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | 2026-04-04 |
| demos.md | 101 | demo-104 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | 2026-04-04 |
| demos.md | 102 | demo-105 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | 2026-04-04 |
| demos.md | 103 | demo-106 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | 2026-04-04 |
| demos.md | 104 | demo-107 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | 2026-04-04 |
| demos.md | 105 | demo-108 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | 2026-04-04 |
| demos.md | 106 | demo-109 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | 2026-04-04 |
| demos.md | 107 | demo-110 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | 2026-04-04 |
| demos.md | 114 | demo-117 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | 2026-04-04 |
| demos.md | 115 | demo-118 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | 2026-04-04 |
| demos.md | 116 | demo-119 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | 2026-04-04 |
| demos.md | 117 | demo-120 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | 2026-04-04 |
| demos.md | 118 | demo-121 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | 2026-04-04 |
| demos.md | 119 | demo-122 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | 2026-04-04 |
| demos.md | 120 | demo-123 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | 2026-04-04 |
| demos.md | 121 | demo-124 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | 2026-04-04 |
| demos.md | 122 | demo-125 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | 2026-04-04 |
| demos.md | 123 | demo-126 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | 2026-04-04 |
| demos.md | 124 | demo-127 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | 2026-04-04 |
| demos.md | 125 | demo-128 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | 2026-04-04 |
| demos.md | 126 | demo-129 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | 2026-04-04 |
| demos.md | 127 | demo-130 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | 2026-04-04 |
| demos.md | 128 | demo-131 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | 2026-04-04 |
| demos.md | 129 | demo-132 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | 2026-04-04 |
| demos.md | 130 | demo-133 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | 2026-04-04 |
| demos.md | 131 | demo-134 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | 2026-04-04 |
| demos.md | 132 | demo-135 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | 2026-04-04 |
| demos.md | 133 | demo-136 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | 2026-04-04 |
| demos.md | 134 | demo-137 |  |  |  |  |  |  |  |  |  |  | — | medium | 2026-04-04 |
| demos.md | 136 | demo-139 |  |  |  |  |  |  |  |  |  |  | — | medium | 2026-04-04 |
| demos.md | 137 | demo-140 |  |  |  |  |  |  |  |  |  |  | — | medium | 2026-04-04 |
| demos.md | 138 | demo-141 |  |  |  |  |  |  |  |  |  |  | — | medium | 2026-04-04 |
| demos.md | 139 | demo-142 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | 2026-04-04 |
| events.md | 1 | evt-001 |  |  |  |  |  |  |  |  |  |  | `["devpost", "event-page"]` | high | 2026-04-04 |
| events.md | 2 | evt-002 |  |  |  |  |  |  |  |  |  |  | `["marketing"]` | low | 2026-04-04 |
| events.md | 4 | evt-004 |  |  |  |  |  |  |  |  |  |  | `["announcement", "marketing"]` | medium | 2026-04-04 |
| events.md | 5 | evt-005 |  |  |  |  |  |  |  |  |  |  | `["community", "event-recap"]` | medium | 2026-04-04 |
| events.md | 6 | evt-006 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project-gallery", "winners"]` | high | 2026-04-04 |
| events.md | 7 | evt-007 |  |  |  |  |  |  |  |  |  |  | `["community", "event-recap", "demo"]` | low | 2026-04-04 |
| events.md | 8 | evt-008 |  |  |  |  |  |  |  |  |  |  | `["announcement", "event-recap"]` | medium | 2026-04-04 |
| events.md | 9 | evt-009 |  |  |  |  |  |  |  |  |  |  | `["announcement", "marketing"]` | medium | 2026-04-04 |
| events.md | 10 | evt-010 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project-gallery", "winners"]` | high | 2026-04-04 |
| events.md | 11 | evt-011 |  |  |  |  |  |  |  |  |  |  | `["devpost", "event-page"]` | high | 2026-04-04 |
| events.md | 12 | evt-012 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project-gallery", "winners"]` | high | 2026-04-04 |
| events.md | 13 | evt-013 |  |  |  |  |  |  |  |  |  |  | `["devpost", "event-page"]` | high | 2026-04-04 |
| events.md | 14 | evt-014 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project-gallery", "winners"]` | high | 2026-04-04 |
| events.md | 15 | evt-015 |  |  |  |  |  |  |  |  |  |  | `["devpost", "event-page"]` | high | 2026-04-04 |
| events.md | 16 | evt-016 |  |  |  |  |  |  |  |  |  |  | `["reddit", "winners-announcement"]` | high | 2026-04-04 |
| events.md | 17 | evt-017 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project-gallery", "winners"]` | high | 2026-04-04 |
| events.md | 18 | evt-018 |  |  |  |  |  |  |  |  |  |  | `["devpost", "event-page"]` | high | 2026-04-04 |
| events.md | 19 | evt-019 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project-gallery", "winners"]` | high | 2026-04-04 |
| events.md | 20 | evt-020 |  |  |  |  |  |  |  |  |  |  | `["devpost", "event-page"]` | high | 2026-04-04 |
| events.md | 21 | evt-021 |  |  |  |  |  |  |  |  |  |  | `["x.com", "community", "curation"]` | medium | 2026-04-04 |
| events.md | 79 | evt-081 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | 2026-04-04 |
| events.md | 102 | evt-105 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | 2026-04-04 |
| events.md | 103 | evt-106 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | 2026-04-04 |
| events.md | 104 | evt-107 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | 2026-04-04 |
| events.md | 105 | evt-108 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | 2026-04-04 |
| events.md | 132 | evt-135 |  |  |  |  |  |  |  |  |  |  | — | medium | 2026-04-04 |
| events.md | 133 | evt-136 |  |  |  |  |  |  |  |  |  |  | — | medium | 2026-04-04 |
| events.md | 134 | evt-137 |  |  |  |  |  |  |  |  |  |  | — | medium | 2026-04-04 |
| events.md | 135 | evt-138 |  |  |  |  |  |  |  |  |  |  | — | medium | 2026-04-04 |
| events.md | 136 | evt-139 |  |  |  |  |  |  |  |  |  |  | — | medium | 2026-04-04 |
| events.md | 137 | evt-140 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | 2026-04-04 |
| organizer.md | 45 | org-045 |  |  |  |  |  |  |  | `["evt-012"]` |  |  | `["devpost", "project-gallery", "winners"]` | high | — |
| organizer.md | 71 | org-071 |  |  |  |  |  |  |  | `["evt-019"]` |  |  | `["devpost", "project-gallery", "winners"]` | high | — |
| organizer.md | 172 | org-172 |  |  |  |  |  |  |  | `["evt-014"]` |  |  | `["devpost", "project-gallery", "winners"]` | high | — |
| sources.md | 22 | src-022 |  |  |  |  |  |  |  | `["evt-136"]` | `["demo-138"]` |  | — | medium | — |
| team.md | 45 | team-045 |  |  |  |  |  |  |  |  | `["demo-013"]` |  | `["devpost", "project-gallery", "winners"]` | high | — |
| team.md | 71 | team-071 |  |  |  |  |  |  |  |  | `["demo-020"]` |  | `["devpost", "project-gallery", "winners"]` | high | — |
| team.md | 172 | team-172 |  |  |  |  |  |  |  |  | `["demo-015"]` |  | `["devpost", "project-gallery", "winners"]` | high | — |
| techstack.md | 1 | tech-001 | (React/Phaser/three.js or game engines mentioned) | — | — | — | — | — | — | `["evt-018"]` | `["demo-019"]` | `["https://redditdailygames2026.devpost.com/"]` | `["devpost", "event-page"]` | high | — |
| techstack.md | 2 | tech-002 | (various sponsor APIs) | — | — | — | — | — | — | `["evt-013"]` | `["demo-014"]` | `["https://developerweek-2026-hackathon.devpost.com/"]` | `["devpost", "event-page"]` | high | — |
| techstack.md | 11 | tech-011 | AI workflows | — | — | — | — | — | — | `["evt-136"]` | `["demo-138"]` | `["https://camo.hku.hk/28-march-2026-openclaw-meet-up/", "https://luma.com/6glx4b1y"]` | — | medium | — |
| techstack.md | 28 | tech-028 | builders meetup | — | — | — | — | — | — | `["evt-136", "evt-139"]` | `["demo-138", "demo-141"]` | `["https://camo.hku.hk/28-march-2026-openclaw-meet-up/", "https://luma.com/6glx4b1y", "https://luma.com/claw"]` | — | medium | — |
| techstack.md | 30 | tech-030 | business | — | — | — | — | — | — | `["evt-136"]` | `["demo-138"]` | `["https://camo.hku.hk/28-march-2026-openclaw-meet-up/", "https://luma.com/6glx4b1y"]` | — | medium | — |
| techstack.md | 54 | tech-054 | Devvit Web | — | — | — | — | — | — | `["evt-018"]` | `["demo-019"]` | `["https://redditdailygames2026.devpost.com/"]` | `["devpost", "event-page"]` | high | — |
| techstack.md | 57 | tech-057 | Discord (mentioned) | — | — | — | — | — | — | `["evt-011", "evt-025"]` | `["demo-011", "demo-026"]` | `["https://hack-for-humanity-2026.devpost.com/", "https://uksaei-hackathon.devpost.com/"]` | `["devpost", "event-page"]` | high | — |
| techstack.md | 76 | tech-076 | GitHub (submission requirement) | — | — | — | — | — | — | `["evt-011", "evt-036"]` | `["demo-011", "demo-038"]` | `["https://hack-for-humanity-2026.devpost.com/", "https://lifehack-2025.devpost.com/"]` | `["devpost", "event-page"]` | high | — |
| techstack.md | 118 | tech-118 | OpenClaw | — | — | — | — | — | — | `["evt-135", "evt-136", "evt-137", "evt-138", "evt-139"]` | `["demo-137", "demo-138", "demo-139", "demo-140", "demo-141"]` | `["https://hong-kong.aitinkerers.org/p/openclaw-global-unhackathon-hong-kong", "https://hong-kong.aitinkerers.org/hackathons/h_xM9rYwACgZE", "https://hong-kong.aitinkerers.org/meetup/mu_1tFOHM9tQ6Q/gallery", "https://camo.hku.hk/28-march-2026-openclaw-meet-up/", "https://luma.com/6glx4b1y", "https://luma.com/claw"]` | — | medium | — |