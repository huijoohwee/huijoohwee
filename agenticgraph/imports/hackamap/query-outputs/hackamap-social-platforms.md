# hackamap-social-platforms

Derived from HackaMap dataset markdown tables.

Query (JSON DSL):
```json
{
  "from": {
    "files": [
      "sources.md",
      "events.md",
      "demos.md"
    ]
  },
  "where_by_file": {
    "sources.md": {
      "or": [
        {
          "field": "Domain",
          "op": "contains",
          "value": "x.com"
        },
        {
          "field": "Domain",
          "op": "contains",
          "value": "twitter.com"
        },
        {
          "field": "Domain",
          "op": "contains",
          "value": "t.co"
        },
        {
          "field": "Domain",
          "op": "contains",
          "value": "reddit.com"
        },
        {
          "field": "Domain",
          "op": "contains",
          "value": "linkedin.com"
        },
        {
          "field": "Domain",
          "op": "contains",
          "value": "producthunt.com"
        },
        {
          "op": "any",
          "value": [
            "x.com",
            "twitter",
            "tweet",
            "thread"
          ]
        },
        {
          "op": "any",
          "value": [
            "reddit",
            "subreddit",
            "r/"
          ]
        },
        {
          "op": "any",
          "value": [
            "linkedin",
            "linkedin post"
          ]
        },
        {
          "op": "any",
          "value": [
            "product hunt",
            "producthunt",
            "ph",
            "launch"
          ]
        }
      ]
    },
    "events.md": {
      "or": [
        {
          "op": "any",
          "value": [
            "x.com",
            "twitter",
            "tweet",
            "thread"
          ]
        },
        {
          "op": "any",
          "value": [
            "reddit",
            "subreddit",
            "r/"
          ]
        },
        {
          "op": "any",
          "value": [
            "linkedin",
            "linkedin post"
          ]
        },
        {
          "op": "any",
          "value": [
            "product hunt",
            "producthunt",
            "ph",
            "launch"
          ]
        }
      ]
    },
    "demos.md": {
      "or": [
        {
          "op": "any",
          "value": [
            "x.com",
            "twitter",
            "tweet",
            "thread"
          ]
        },
        {
          "op": "any",
          "value": [
            "reddit",
            "subreddit",
            "r/"
          ]
        },
        {
          "op": "any",
          "value": [
            "linkedin",
            "linkedin post"
          ]
        },
        {
          "op": "any",
          "value": [
            "product hunt",
            "producthunt",
            "ph",
            "launch"
          ]
        }
      ]
    }
  },
  "limit": 250,
  "output": {
    "title": "hackamap-social-platforms",
    "json_path": "hackamap-social-platforms.json",
    "md_path": "hackamap-social-platforms.md",
    "table_prefix": "social-platforms"
  }
}
```

| _file | _row | id | event_id | Pain Point | Solution | Product | Team | Tech Stack | Demo URL | Repo URL | Video URL | Award | Source Type | Confidence | Extracted At |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| demos.md | 17 | demo-017 | evt-016 | virtual hackathons need a transparent winners announcement and links to demo posts; developers need recognition + discoverability for winning demos | publish a winners announcement post with links to winning demo posts and the project gallery | `["winners announcement", "demo post links", "project gallery links"]` | `["r/Devvit (Reddit)", "Reddit Daily Games Hackathon judges", "GameMaker"]` | `["Reddit Devvit platform", "Devpost (project gallery)"]` | https://www.reddit.com/r/Devvit/comments/1rffubl/announcing_the_reddit_daily_games_hackathon/ | — | — | — | `["reddit", "winners-announcement"]` | high | 2026-04-04 |
| events.md | 16 | evt-016 |  |  |  |  |  |  |  |  |  |  | `["reddit", "winners-announcement"]` | high | 2026-04-04 |
| demos.md | 19 | demo-019 | evt-018 | developers need a structured venue to build and demo interactive daily games on Reddit; teams need clear submission artifacts (app listing + demo post) | virtual hackathon on Reddit Devvit platform; submit app listing and demo post for judging | `["daily games", "demo posts", "project gallery"]` | `["Reddit", "GameMaker"]` | `["Devvit Web", "(React/Phaser/three.js or game engines mentioned)"]` | https://redditdailygames2026.devpost.com/ | — | — | — | `["devpost", "event-page"]` | high | 2026-04-04 |
| sources.md | 239 | src-239 |  |  |  |  |  |  |  |  |  |  | `["reddit", "winners-announcement"]` | high | — |
| events.md | 17 | evt-017 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project-gallery", "winners"]` | high | 2026-04-04 |
| events.md | 18 | evt-018 |  |  |  |  |  |  |  |  |  |  | `["devpost", "event-page"]` | high | 2026-04-04 |
| events.md | 46 | evt-046 |  |  |  |  |  |  |  |  |  |  | `["producthunt", "newsletter", "winners-announcement"]` | high | 2026-04-04 |
| events.md | 83 | evt-086 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | 2026-04-04 |
| sources.md | 228 | src-228 |  |  |  |  |  |  |  |  |  |  | `["linkedin", "project-demo"]` | low | — |
| sources.md | 229 | src-229 |  |  |  |  |  |  |  |  |  |  | `["linkedin", "announcement"]` | low | — |
| sources.md | 230 | src-230 |  |  |  |  |  |  |  |  |  |  | `["linkedin", "event-recap"]` | low | — |
| sources.md | 231 | src-231 |  |  |  |  |  |  |  |  |  |  | `["linkedin", "announcement"]` | medium | — |
| sources.md | 232 | src-232 |  |  |  |  |  |  |  |  |  |  | `["linkedin", "event-recap"]` | low | — |
| sources.md | 233 | src-233 |  |  |  |  |  |  |  |  |  |  | `["linkedin", "winners-showcase", "demo-links"]` | medium | — |
| sources.md | 234 | src-234 |  |  |  |  |  |  |  |  |  |  | `["producthunt", "newsletter", "winners-announcement"]` | high | — |
| sources.md | 235 | src-235 |  |  |  |  |  |  |  |  |  |  | `["producthunt", "story"]` | low | — |
| sources.md | 236 | src-236 |  |  |  |  |  |  |  |  |  |  | `["producthunt", "community-post"]` | low | — |
| sources.md | 237 | src-237 |  |  |  |  |  |  |  |  |  |  | `["producthunt", "product-page"]` | low | — |
| sources.md | 238 | src-238 |  |  |  |  |  |  |  |  |  |  | `["producthunt", "story"]` | low | — |
| sources.md | 240 | src-240 |  |  |  |  |  |  |  |  |  |  | `["reddit", "announcement"]` | medium | — |
| sources.md | 245 | src-245 |  |  |  |  |  |  |  |  |  |  | `["x.com", "community", "curation"]` | medium | — |
| demos.md | 3 | demo-003 | evt-003 | builders need a high-signal venue to ship autonomous web agents; winners need public recognition and links to demos/projects | in-person hackathon with a hard constraint (must require autonomous web agents) and awards for top projects | `["winner showcase", "autonomous web-agent demos", "143 projects (reported)"]` | `["TinyFish", "Acacia AI Society", "NUS", "350+ hackers (reported)"]` | `["TinyFish web agents", "OpenAI (powered by, mentioned)"]` | https://www.linkedin.com/posts/tinyfish-ai_we-just-hosted-singapores-largest-web-agent-activity-7444832567515811841-EqvM; https://lnkd.in/g52ftBkm; https://lnkd.in/gKJ5hhZu; https://lnkd.in/gMKstPsh; https://lnkd.in/gbnrajW9; https://lnkd.in/g7FyRCDn; https://lnkd.in/gDeJvw6P | — | — | — | `["linkedin", "winners-showcase", "demo-links"]` | medium | 2026-04-04 |
| demos.md | 18 | demo-018 | evt-017 | virtual hackathons need a canonical page to browse winning demos; participants want direct links to demo-ready projects | publish Devpost gallery with winner ribbons and links to project demo pages | `["winner project gallery", "demo pages"]` | `["Reddit", "GameMaker", "hackathon participants"]` | `["Devpost"]` | https://redditdailygames2026.devpost.com/project-gallery | — | — | — | `["devpost", "project-gallery", "winners"]` | high | 2026-04-04 |
| demos.md | 22 | demo-022 | evt-021 | builders need timely discovery of hackathon opportunities; teams need a centralized shortlist of upcoming hackathons | curation post listing multiple hackathons with dates and links to register | `["hackathon roundup", "registration links"]` | `["TinTinLand"]` | `["Web3 ecosystems (Casper/Solana/Arbitrum mentioned)"]` | https://x.com/OurTinTinLand/status/1993995697256058967 | — | — | — | `["x.com", "community", "curation"]` | medium | 2026-04-04 |
| demos.md | 23 | demo-023 | evt-022 | builders need a venue to prototype and demo AI ideas in-person; hackathon teams want post-event visibility (repo + live demo) | project-demo recap post highlighting a hackathon build; shares repo + longer live demo | `["3D terrain flythrough", "Gemini tour guide", "topo-map to 3D mesh pipeline"]` | `["ruban sk", "Google DeepMind SG hackathon participants"]` | `["Gemini (Live API mentioned)", "Three.js", "AWS terrain tiles", "fal (Nano Banana Pro mentioned)"]` | https://www.linkedin.com/feed/update/urn:li:activity:7417460624286330881/ | — | — | — | `["linkedin", "project-demo"]` | low | 2026-04-04 |
| demos.md | 30 | demo-030 | evt-028 | builders need clear timelines and a venue to showcase demos after a hackathon; teams want global visibility and prizes | hybrid hackathon (online + Berlin) with a showcase day and prize pool | `["hackathon program", "project showcase day"]` | `["Cardano Foundation", "sponsor engineers/mentors"]` | `["Cardano ecosystem (implied)"]` | https://www.reddit.com/r/cardano/comments/1nr0sfe/build_the_future_at_the_cardano_summit_hackathon/ | — | — | — | `["reddit", "announcement"]` | medium | 2026-04-04 |
| demos.md | 39 | demo-039 | evt-037 | founders need credible distribution and validation for early demos; hackathon teams want pathways to accelerators | build and demo at a hackathon; winner prize includes accelerator interview; validate demand via landing page | `["voice email assistant demo", "landing page validation"]` | `["April team", "MCP Hackathon participants", "YC (accelerator)"]` | `["AI assistant (unspecified)"]` | https://www.producthunt.com/p/april-yc-s25/from-hackathon-to-yc | — | — | — | `["producthunt", "story"]` | low | 2026-04-04 |
| demos.md | 41 | demo-041 | evt-039 | makers need a lightweight format to ship and share demos quickly; hackathon participants want a place to submit and vote on projects | small in-person hackathon; participants submit projects in a Product Hunt thread and vote | `["hackathon submissions thread", "community voting"]` | `["Product Hunt community", "bolt.new"]` | `["bolt.new credits (mentioned)"]` | https://www.producthunt.com/p/bolt-new/product-hunt-x-bolt-march-2025-hackathon-submissions | — | — | — | `["producthunt", "community-post"]` | low | 2026-04-04 |
| demos.md | 44 | demo-044 | evt-042 | startups and developers need a venue to explore GenAI use cases in finance; teams need a demo day to present MVPs to judges | GenAI hackathon with registration and a scheduled Demo Day for participants | `["hackathon program", "demo day"]` | `["AWS", "Singapore FinTech Association", "MongoDB", "Mission Plus", "Nvidia", "Tenity"]` | `["GenAI (unspecified)"]` | https://www.linkedin.com/posts/jerome-li-4386b7a4_genai-for-finance-hackathon-registrations-activity-7184093490073542658-9t7j | — | — | — | `["linkedin", "announcement"]` | medium | 2026-04-04 |
| demos.md | 48 | demo-048 | evt-046 | global hackathon winners need a canonical public announcement; makers want a quick summary of category and grand prize winners | newsletter-style winners announcement summarizing category winners and grand prize winners | `["winners list", "category winners", "grand prize winners"]` | `["Product Hunt", "global makers"]` | `["Product Hunt newsletter"]` | https://www.producthunt.com/newsletters/archive/508-winners-of-the-ph-global-hackathon | — | — | — | `["producthunt", "newsletter", "winners-announcement"]` | high | 2026-04-04 |
| demos.md | 49 | demo-049 | evt-047 | enterprises need rapid ways to test GenAI for internal workflows; teams need a structured sprint to build working prototypes | five-day hackathon pairing staff with students to build GenAI prototypes for real problem statements | `["19 GenAI prototypes", "rapid experimentation format"]` | `["Temasek", "SUTD students", "Temasek staff"]` | `["GenAI (unspecified)"]` | https://www.linkedin.com/posts/sutd_5-days-19-problem-statements-33-temasek-activity-7194169234426380289-L2gM | — | — | — | `["linkedin", "event-recap"]` | low | 2026-04-04 |
| demos.md | 50 | demo-050 | evt-048 | hackathon organizers need a public recap to recognize winners and show outcomes; participants need post-event visibility to continue building | post-hackathon recap highlighting winners and outcomes; emphasizes continuing projects beyond the hackathon | `["recap video", "winner recognition", "API credits for teams"]` | `["GovTech Singapore", "OpenAI", "top 3 teams (winners)"]` | `["OpenAI APIs (credits mentioned)"]` | https://www.linkedin.com/posts/govtech-singapore_govtechopenaihackathon-techevent-hackathon-activity-7269228880446590977-2hAs | — | — | — | `["linkedin", "event-recap"]` | low | 2026-04-04 |
| demos.md | 51 | demo-051 | evt-049 | public sector teams need a safe, time-boxed environment to prototype AI-for-public-good use cases; builders need a stage + incentives to demo prototypes | one-day in-person hackathon with judging; winning teams receive API credits to continue building | `["prototype demos", "API credits for winners"]` | `["GovTech Singapore", "OpenAI", "hackathon participants"]` | `["GPT-4o Realtime (mentioned)", "o1 reasoning model (mentioned)"]` | https://www.linkedin.com/posts/govtech-singapore_govtechopenaihackathon-techevent-hackathon-activity-7264875053362610177-Fxf5 | — | — | — | `["linkedin", "announcement"]` | low | 2026-04-04 |
| demos.md | 52 | demo-052 | evt-050 | makers need time-boxed formats to build and launch quickly; communities need inclusive online hackathons for makers of all disciplines | virtual makers festival/hackathon encouraging makers to build and launch; offers prizes and partners | `["online hackathon program", "prizes"]` | `["Product Hunt", "partners (TechCrunch/Webflow, mentioned)"]` | `["no-code + code (inclusive)"]` | https://www.producthunt.com/stories/our-makers-festival-hackathon-is-here | — | — | — | `["producthunt", "story"]` | low | 2026-04-04 |
| demos.md | 53 | demo-053 | evt-051 | hackathon prototypes often lack distribution after the event; builders want a place to showcase hackathon-made demos | publish an open-source demo built during a hackathon on a discovery platform | `["AGI.Chat (open-source demo)"]` | `["AGI.Chat makers"]` | `["Cohere LLMs (mentioned)"]` | https://www.producthunt.com/products/agi-chat | — | — | — | `["producthunt", "product-page"]` | low | 2026-04-04 |
| events.md | 3 | evt-003 |  |  |  |  |  |  |  |  |  |  | `["linkedin", "winners-showcase", "demo-links"]` | medium | 2026-04-04 |
| events.md | 7 | evt-007 |  |  |  |  |  |  |  |  |  |  | `["community", "event-recap", "demo"]` | low | 2026-04-04 |
| events.md | 21 | evt-021 |  |  |  |  |  |  |  |  |  |  | `["x.com", "community", "curation"]` | medium | 2026-04-04 |
| events.md | 22 | evt-022 |  |  |  |  |  |  |  |  |  |  | `["linkedin", "project-demo"]` | low | 2026-04-04 |
| events.md | 28 | evt-028 |  |  |  |  |  |  |  |  |  |  | `["reddit", "announcement"]` | medium | 2026-04-04 |
| events.md | 37 | evt-037 |  |  |  |  |  |  |  |  |  |  | `["producthunt", "story"]` | low | 2026-04-04 |
| events.md | 39 | evt-039 |  |  |  |  |  |  |  |  |  |  | `["producthunt", "community-post"]` | low | 2026-04-04 |
| events.md | 42 | evt-042 |  |  |  |  |  |  |  |  |  |  | `["linkedin", "announcement"]` | medium | 2026-04-04 |
| events.md | 47 | evt-047 |  |  |  |  |  |  |  |  |  |  | `["linkedin", "event-recap"]` | low | 2026-04-04 |
| events.md | 48 | evt-048 |  |  |  |  |  |  |  |  |  |  | `["linkedin", "event-recap"]` | low | 2026-04-04 |
| events.md | 49 | evt-049 |  |  |  |  |  |  |  |  |  |  | `["linkedin", "announcement"]` | low | 2026-04-04 |
| events.md | 50 | evt-050 |  |  |  |  |  |  |  |  |  |  | `["producthunt", "story"]` | low | 2026-04-04 |
| events.md | 51 | evt-051 |  |  |  |  |  |  |  |  |  |  | `["producthunt", "product-page"]` | low | 2026-04-04 |
| sources.md | 80 | src-080 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | — |
| sources.md | 81 | src-081 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | — |
| sources.md | 184 | src-184 |  |  |  |  |  |  |  |  |  |  | `["devpost", "event-page"]` | high | — |
| sources.md | 185 | src-185 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project-gallery", "winners"]` | high | — |
| sources.md | 242 | src-242 |  |  |  |  |  |  |  |  |  |  | `["marketing"]` | low | — |
| sources.md | 243 | src-243 |  |  |  |  |  |  |  |  |  |  | `["announcement", "event-recap"]` | medium | — |
| sources.md | 244 | src-244 |  |  |  |  |  |  |  |  |  |  | `["announcement", "marketing"]` | low | — |
| sources.md | 246 | src-246 |  |  |  |  |  |  |  |  |  |  | `["community", "event-recap"]` | low | — |
| sources.md | 247 | src-247 |  |  |  |  |  |  |  |  |  |  | `["community", "event-recap", "demo"]` | low | — |
| sources.md | 248 | src-248 |  |  |  |  |  |  |  |  |  |  | `["announcement", "government"]` | low | — |
| sources.md | 249 | src-249 |  |  |  |  |  |  |  |  |  |  | `["announcement", "marketing"]` | medium | — |
| sources.md | 250 | src-250 |  |  |  |  |  |  |  |  |  |  | `["announcement", "marketing"]` | medium | — |
| sources.md | 251 | src-251 |  |  |  |  |  |  |  |  |  |  | `["announcement", "marketing"]` | medium | — |
| sources.md | 252 | src-252 |  |  |  |  |  |  |  |  |  |  | `["announcement", "marketing"]` | medium | — |
| sources.md | 253 | src-253 |  |  |  |  |  |  |  |  |  |  | `["community", "event-recap"]` | medium | — |
| sources.md | 254 | src-254 |  |  |  |  |  |  |  |  |  |  | `["community", "event-recap", "demo"]` | low | — |
| sources.md | 255 | src-255 |  |  |  |  |  |  |  |  |  |  | `["media", "event-recap", "devpost", "event-page"]` | high | — |
| sources.md | 256 | src-256 |  |  |  |  |  |  |  |  |  |  | `["announcement", "marketing"]` | medium | — |
| sources.md | 257 | src-257 |  |  |  |  |  |  |  |  |  |  | `["announcement", "marketing"]` | medium | — |
| sources.md | 258 | src-258 |  |  |  |  |  |  |  |  |  |  | `["announcement", "marketing"]` | medium | — |
| demos.md | 2 | demo-002 | evt-002 | content creators lack cinematic video production tools; high barrier to media production | AI-generated video from text and image input | `["text-to-video", "image-to-video", "cinematic output"]` | `["Building with AI community", "local MY creators"]` | `["Seedance model", "ModelArk"]` | https://x.com/BytePlusGlobal/status/2039621356195586166 | — | — | — | `["marketing"]` | low | 2026-04-04 |
| demos.md | 4 | demo-004 | evt-004 | teams need to operationalize AI beyond code generation; orgs want agents for planning/security/compliance/deployments | hackathon encouraging teams to build workflow agents inside GitLab; prizes and deadline | `["AI agents for SDLC", "workflow automation"]` | `["Devpost", "GitLab"]` | `["GitLab workflows"]` | https://x.com/devpost/status/2020965804687446360 | — | — | — | `["announcement", "marketing"]` | medium | 2026-04-04 |
| demos.md | 5 | demo-005 | evt-005 | filmmakers/creators need fast ways to produce short films; teams need rapid feedback on AI filmmaking tools under tight time constraints | AI filmmaking hackathon format enabling teams to create films in <3 hours using an AI tool | `["AI filmmaking tool testing", "rapid short-film creation"]` | `["SXSW community", "KoyalAI", "100+ filmmakers"]` | `["KoyalAI"]` | https://x.com/meh_agarwal/status/2033596708513341710 | — | — | — | `["community", "event-recap"]` | medium | 2026-04-04 |
| demos.md | 7 | demo-007 | evt-007 | builders need in-person hackathons to quickly prototype with Codex and iOS XR stacks | post-hackathon winner shoutout; highlights rapid ARKit prototyping with Codex | `["rapid prototyping", "ARKit experience"]` | `["Codex hackathon participants", "OpenAI community"]` | `["Codex", "ARKit (mentioned)"]` | https://x.com/romainhuet/status/2028586504407470503 | — | — | — | `["community", "event-recap"]` | low | 2026-04-04 |
| demos.md | 8 | demo-008 | evt-008 | APAC developers need hands-on access to Codex; teams need a venue to build and demo Codex projects quickly | in-person hackathon in Singapore with Codex; winners showcased their projects | `["agentic coding", "project demos", "winner showcase"]` | `["OpenAI Developers", "100+ developers (participants)"]` | `["Codex"]` | https://x.com/OpenAIDevs/status/2028588617095057902 | — | — | — | `["announcement", "event-recap"]` | medium | 2026-04-04 |
| demos.md | 9 | demo-009 | evt-009 | most AI apps don’t use the full multimodal stack; builders lack access to a complete multimodal toolchain for experiments | hackathon providing access to multiple multimodal models so teams can build end-to-end multimodal apps | `["multimodal hackathon", "model access", "rapid prototyping"]` | `["Y Combinator", "Google DeepMind"]` | `["Gemini 3.1", "Lyria", "NanoBanana 2"]` | https://x.com/ycombinator/status/2028564751882871056 | — | — | — | `["announcement", "marketing"]` | medium | 2026-04-04 |
| demos.md | 12 | demo-012 | evt-007 | hackathon participants need quick ways to share demos and artifacts; teams need community visibility for hackathon builds | short demo/video sneak peek from an in-person Codex hackathon | `["demo video", "hackathon showcase"]` | `["OpenAI Codex hackathon participants"]` | `["Codex"]` | https://x.com/agrimsingh/status/2027736501241700461 | — | — | — | `["community", "demo"]` | low | 2026-04-04 |
| demos.md | 14 | demo-014 | evt-013 | developers need a hybrid (online + in-person) venue to ship and demo projects with sponsors; teams need clear challenges and prize incentives | challenge-driven hackathon with online phase and in-person finals; submit demo video and project page | `["challenge tracks", "project submissions", "demo video"]` | `["DevNetwork", "DeveloperWeek community"]` | `["Devpost", "(various sponsor APIs)"]` | https://developerweek-2026-hackathon.devpost.com/ | — | — | — | `["devpost", "event-page"]` | high | 2026-04-04 |
| demos.md | 24 | demo-024 | evt-023 | teams want access to frontier AI tools for rapid prototyping; builders need a local venue to ship AI projects quickly | 24-hour AI hackathon recap; highlights scale (projects built in one weekend) | `["AI hackathon", "project showcase/recap"]` | `["Cursor", "Anthropic", "Malaysia hackathon participants"]` | `["Cursor", "Anthropic (implied)"]` | https://x.com/therakyatpost/status/2001218375389769766 | — | — | — | `["media", "event-recap"]` | low | 2026-04-04 |
| demos.md | 25 | demo-025 | evt-024 | builders want structured bootcamps + hackathons to ship blockchain projects; teams need recognition and visibility for winners | mini hackathon results recap for Sui Bootcamp Indonesia (Jakarta) | `["mini hackathon", "bootcamp project results"]` | `["Sui Malaysia", "Sui Indonesia", "builders (participants)"]` | `["Sui", "Move"]` | https://x.com/SuiCommunity_MY/status/2000233825423749530 | — | — | — | `["community", "event-recap"]` | low | 2026-04-04 |
| demos.md | 28 | demo-028 | evt-023 | builders want a local venue to ship AI projects quickly; teams need incentives + credits to prototype with Cursor/Claude | 24-hour in-person hackathon with sponsor tracks and prize categories; submit projects on Devpost | `["in-person hackathon", "sponsor tracks", "project submissions"]` | `["Cursor", "Anthropic", "community partners", "participants"]` | `["Cursor", "Anthropic API", "Convex", "Vercel", "TiDB", "ElevenLabs", "LeanMCP (tracks mentioned)"]` | https://cursor-hack-my.devpost.com/ | — | — | — | `["devpost", "event-page"]` | high | 2026-04-04 |
| demos.md | 29 | demo-029 | evt-027 | hardcore product builders need a fast way to prototype with frontier models; limited access to upcoming models/APIs outside special programs | time-boxed hackathon with exclusive early access to upcoming models and platform APIs | `["hackathon program", "early model/API access", "rapid prototyping (24h)"]` | `["xAI"]` | `["Grok models", "X APIs"]` | https://x.com/xai/status/1987696575314104339 | — | — | — | `["announcement", "marketing"]` | medium | 2026-04-04 |
| demos.md | 31 | demo-031 | evt-029 | builders need a fast, high-signal way to ship projects in 24 hours; teams want credits/cash incentives to prototype rapidly | 24-hour hackathon format with cash + tool credits to ship projects (Cursor hackathon) | `["24h hackathon", "project shipping"]` | `["@cursor_ai", "hackathon organizers", "participants"]` | `["Cursor", "AI dev tools (mentioned in post)"]` | https://x.com/gabrielchua/status/1975949011409412425 | — | — | — | `["announcement", "marketing"]` | medium | 2026-04-04 |
| demos.md | 32 | demo-032 | evt-030 | youth innovators need a structured program to go from ideation to prototype and launch; teams need prompts and a live demo/pitch artifact | design-thinking hackathon with workshops; requires slides and intro video (pitch or live demo) | `["project slides", "short intro video", "prototype demo"]` | `["CNHK", "Community Shaper participants"]` | `["AI + emerging tech (unspecified)"]` | https://cs-2025-hackathon-beta.devpost.com/ | — | — | — | `["devpost", "event-page"]` | high | 2026-04-04 |
| demos.md | 33 | demo-033 | evt-031 | Indonesia needs innovation in digital finance and economic digitization; teams need a pathway from selection to final showcase | national hackathon program selecting finalists and progressing toward a final showcase | `["hackathon program", "finalist selection"]` | `["Bank Indonesia", "OJK Indonesia"]` | `["fintech (unspecified)"]` | https://x.com/bank_indonesia/status/1964290193348772338 | — | — | — | `["announcement", "government"]` | low | 2026-04-04 |
| demos.md | 34 | demo-034 | evt-032 | healthcare teams face burnout and rising care costs; builders need a structured venue to prototype health-tech solutions with clinical input | in-person healthcare hackathon with kickoff, video pitch submission, demo day pitching, and finals | `["health-tech prototypes", "demo day pitching", "video pitch submissions"]` | `["Pharmaceutical Society of Singapore", "hackathon participants (2-5 per team)"]` | `["Cogniss (no-code platform, mentioned)", "AWS (scaling support, mentioned)"]` | https://hackitrx.devpost.com/ | — | — | — | `["devpost", "event-page"]` | high | 2026-04-04 |
| demos.md | 35 | demo-035 | evt-033 | hackathon participants need visibility and clear results after judging; teams want public winner lists and links to projects | publish hackathon winner announcement thread/list after a 2-day in-person hackathon | `["winner announcement", "project list"]` | `["OpenBuild", "ETHShenzhen participants"]` | `["Ethereum (implied)"]` | https://x.com/OpenBuildxyz/status/1963547236585148902 | — | — | — | `["announcement", "marketing"]` | low | 2026-04-04 |
| demos.md | 36 | demo-036 | evt-034 | teams want a vendor-neutral way to build and ship AI agents; builders need incentives/credits to test agent ideas quickly | online hackathon encouraging builders to submit agents built with a hosted AI gateway; prizes in AI credits | `["AI Gateway", "hackathon challenge", "agent submissions"]` | `["Vercel"]` | `["Vercel", "AI Gateway"]` | https://x.com/vercel/status/1959307873143665060 | — | — | — | `["announcement", "marketing"]` | medium | 2026-04-04 |
| demos.md | 37 | demo-037 | evt-035 | builders want open(-weight) frontier-scale models to fine-tune and agentify; lack of structured events to showcase open-model builds | hackathon centered on building with open(-weight) reasoning models; prizes and deadline-driven build sprint | `["open-model hackathon", "fine-tuning", "agentification"]` | `["Devpost", "OpenAI"]` | `["gpt-oss-120b", "gpt-oss-20b"]` | https://x.com/devpost/status/1952806091022319670 | — | — | — | `["announcement", "marketing"]` | medium | 2026-04-04 |
| demos.md | 40 | demo-040 | evt-038 | devs need examples and recognition after hackathons conclude; winners need visibility for projects | announce winners and link to their projects after the hackathon wraps | `["winner announcement", "project links"]` | `["Azure", "GitHub Copilot", "Devpost", "hackathon winners"]` | `["Azure", "GitHub Copilot"]` | https://x.com/devpost/status/1915951678274097425 | — | — | — | `["announcement", "marketing"]` | medium | 2026-04-04 |
| demos.md | 47 | demo-047 | evt-045 | local web3 builders need hands-on experience and an IRL pitch venue; teams need a hybrid online-to-IRL workflow to ship demos | week-long hackathon: hack online, then gather IRL for final judging and pitching | `["project demos", "IRL pitches", "winner announcement"]` | `["ETH KL", "cypherX", "participants"]` | `["web3 (various)"]` | https://cny-hack-kuala-lumpur.devpost.com/ | — | — | — | `["devpost", "event-page"]` | high | 2026-04-04 |
| demos.md | 85 | demo-088 | evt-086 | — | — | `["project gallery"]` | — | `["Productivity", "Lifehacks", "COVID-19"]` | https://hackbangph.devpost.com/project-gallery | — | — | — | `["devpost", "project_gallery"]` | high | 2026-04-04 |
| demos.md | 95 | demo-098 | evt-096 | — | — | `["project gallery"]` | `["Meta"]` | `["AR/VR"]` | https://presence-platform-japan-2024.devpost.com/project-gallery | — | — | — | `["devpost", "project_gallery"]` | high | 2026-04-04 |
| demos.md | 96 | demo-099 | evt-097 | — | — | `["project gallery"]` | `["Meta"]` | `["AR/VR"]` | https://presence-platform-seoul-2024.devpost.com/project-gallery | — | — | — | `["devpost", "project_gallery"]` | high | 2026-04-04 |
| demos.md | 104 | demo-107 | evt-105 | — | — | `["project gallery"]` | `["IATA", "Cathay Cargo", "CHAMP Cargosystems"]` | `["ONE Record", "aviation logistics", "APIs", "AR/VR", "Education", "Low/No Code"]` | https://onerecord-hkg.devpost.com/project-gallery | — | — | — | `["devpost", "details/dates", "project_gallery"]` | high | 2026-04-04 |
| demos.md | 131 | demo-134 | evt-132 | — | — | `["project gallery"]` | `["hack.init()"]` | `["youth hackathon", "Artificial Intelligence", "Hardware", "IoT", "AR/VR", "Web Development"]` | https://hackinit.devpost.com/project-gallery | — | — | — | `["devpost", "details/dates", "project_gallery"]` | high | 2026-04-04 |
| events.md | 2 | evt-002 |  |  |  |  |  |  |  |  |  |  | `["marketing"]` | low | 2026-04-04 |
| events.md | 4 | evt-004 |  |  |  |  |  |  |  |  |  |  | `["announcement", "marketing"]` | medium | 2026-04-04 |
| events.md | 5 | evt-005 |  |  |  |  |  |  |  |  |  |  | `["community", "event-recap"]` | medium | 2026-04-04 |
| events.md | 8 | evt-008 |  |  |  |  |  |  |  |  |  |  | `["announcement", "event-recap"]` | medium | 2026-04-04 |
| events.md | 9 | evt-009 |  |  |  |  |  |  |  |  |  |  | `["announcement", "marketing"]` | medium | 2026-04-04 |
| events.md | 23 | evt-023 |  |  |  |  |  |  |  |  |  |  | `["media", "event-recap", "devpost", "event-page"]` | high | 2026-04-04 |
| events.md | 24 | evt-024 |  |  |  |  |  |  |  |  |  |  | `["community", "event-recap"]` | low | 2026-04-04 |
| events.md | 27 | evt-027 |  |  |  |  |  |  |  |  |  |  | `["announcement", "marketing"]` | medium | 2026-04-04 |
| events.md | 29 | evt-029 |  |  |  |  |  |  |  |  |  |  | `["announcement", "marketing"]` | medium | 2026-04-04 |
| events.md | 31 | evt-031 |  |  |  |  |  |  |  |  |  |  | `["announcement", "government"]` | low | 2026-04-04 |
| events.md | 32 | evt-032 |  |  |  |  |  |  |  |  |  |  | `["devpost", "event-page"]` | high | 2026-04-04 |
| events.md | 33 | evt-033 |  |  |  |  |  |  |  |  |  |  | `["announcement", "marketing"]` | low | 2026-04-04 |
| events.md | 34 | evt-034 |  |  |  |  |  |  |  |  |  |  | `["announcement", "marketing"]` | medium | 2026-04-04 |
| events.md | 35 | evt-035 |  |  |  |  |  |  |  |  |  |  | `["announcement", "marketing"]` | medium | 2026-04-04 |
| events.md | 38 | evt-038 |  |  |  |  |  |  |  |  |  |  | `["announcement", "marketing"]` | medium | 2026-04-04 |
| events.md | 45 | evt-045 |  |  |  |  |  |  |  |  |  |  | `["devpost", "event-page"]` | high | 2026-04-04 |
| events.md | 82 | evt-085 |  |  |  |  |  |  |  |  |  |  | `["devpost", "event-site", "project_gallery"]` | high | 2026-04-04 |
| events.md | 93 | evt-096 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | 2026-04-04 |
| events.md | 94 | evt-097 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | 2026-04-04 |
| events.md | 95 | evt-098 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project_gallery"]` | high | 2026-04-04 |
| events.md | 102 | evt-105 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | 2026-04-04 |
| events.md | 129 | evt-132 |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | 2026-04-04 |
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
| sources.md | 31 | src-031 |  |  |  |  |  |  |  |  |  |  | `["media", "event-recap", "devpost", "event-page"]` | high | — |
| sources.md | 32 | src-032 |  |  |  |  |  |  |  |  |  |  | `["devpost", "project-gallery"]` | medium | — |
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
| sources.md | 139 | src-139 |  |  |  |  |  |  |  |  |  |  | `["linkedin", "winners-showcase", "demo-links"]` | medium | — |
| sources.md | 140 | src-140 |  |  |  |  |  |  |  |  |  |  | `["linkedin", "winners-showcase", "demo-links"]` | medium | — |
| sources.md | 141 | src-141 |  |  |  |  |  |  |  |  |  |  | `["linkedin", "winners-showcase", "demo-links"]` | medium | — |
| sources.md | 142 | src-142 |  |  |  |  |  |  |  |  |  |  | `["linkedin", "winners-showcase", "demo-links"]` | medium | — |
| sources.md | 143 | src-143 |  |  |  |  |  |  |  |  |  |  | `["linkedin", "winners-showcase", "demo-links"]` | medium | — |
| sources.md | 144 | src-144 |  |  |  |  |  |  |  |  |  |  | `["linkedin", "winners-showcase", "demo-links"]` | medium | — |