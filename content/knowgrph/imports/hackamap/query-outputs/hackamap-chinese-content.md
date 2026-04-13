# hackamap-chinese-content

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
  "where": {
    "or": [
      {
        "op": "any",
        "value": [
          "黑客松",
          "黑客马拉松",
          "开发者",
          "报名",
          "参赛",
          "奖池",
          "奖金",
          "决赛",
          "路演"
        ]
      },
      {
        "op": "any",
        "value": [
          "人工智能",
          "大模型",
          "生成式",
          "代理",
          "智能体",
          "多模态",
          "开源"
        ]
      },
      {
        "op": "any",
        "value": [
          "中文",
          "普通话",
          "简体",
          "繁体"
        ]
      },
      {
        "op": "any",
        "value": [
          "China",
          "Chinese",
          "Mandarin",
          "CN"
        ]
      }
    ]
  },
  "limit": 200,
  "output": {
    "title": "hackamap-chinese-content",
    "json_path": "hackamap-chinese-content.json",
    "md_path": "hackamap-chinese-content.md",
    "table_prefix": "chinese-content"
  }
}
```

| _file | _row | id | Event | Organizer | Format | Location | Date Start | Date End | Theme | Prize Pool | Tech Focus | Eligibility | URL | Source Type | Confidence | Extracted At |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| events.md | 126 | evt-129 | Uber Hackathon - Improving Cities with Uber API 为城市喝彩 | `["Uber", "Mobvoi (mentioned)", "SenseTime (mentioned)"]` | in-person | Microsoft Asia-Pacific R&D Group Building 1, Beijing, China | 2016-01-16 | 2016-01-17 | — | — | `["Uber API", "smart cities"]` | — | `["https://uber-china-hackathon.devpost.com/", "https://uber-china-hackathon.devpost.com/details/dates", "https://uber-china-hackathon.devpost.com/project-gallery"]` | `["devpost", "details/dates", "project_gallery"]` | high | 2026-04-04 |
| techstack.md | 132 | tech-132 |  |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| techstack.md | 145 | tech-145 |  |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 27 | src-027 |  |  |  |  |  |  |  |  |  |  | https://cny-hack-kuala-lumpur.devpost.com/ | `["devpost", "event-page"]` | high | — |
| sources.md | 214 | src-214 |  |  |  |  |  |  |  |  |  |  | https://uber-china-hackathon.devpost.com/ | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 215 | src-215 |  |  |  |  |  |  |  |  |  |  | https://uber-china-hackathon.devpost.com/details/dates | `["devpost", "details/dates", "project_gallery"]` | high | — |
| sources.md | 216 | src-216 |  |  |  |  |  |  |  |  |  |  | https://uber-china-hackathon.devpost.com/project-gallery | `["devpost", "details/dates", "project_gallery"]` | high | — |
| demos.md | 32 | demo-032 |  |  |  |  |  |  |  |  |  |  |  | `["devpost", "event-page"]` | high | 2026-04-04 |
| demos.md | 47 | demo-047 |  |  |  |  |  |  |  |  |  |  |  | `["devpost", "event-page"]` | high | 2026-04-04 |
| demos.md | 106 | demo-109 |  |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | 2026-04-04 |
| demos.md | 128 | demo-131 |  |  |  |  |  |  |  |  |  |  |  | `["devpost", "details/dates", "project_gallery"]` | high | 2026-04-04 |
| events.md | 30 | evt-030 | Community Shaper 2025: Hackathon Beta | `["CNHK", "Community Shaper participants"]` | in-person | Hong Kong, China | 2025-09-06 | 2025-09-23 | — | — | `["AI + emerging tech (unspecified)"]` | — | `["https://cs-2025-hackathon-beta.devpost.com/"]` | `["devpost", "event-page"]` | high | 2026-04-04 |
| events.md | 33 | evt-033 | ETHShenzhen Hackathon | `["OpenBuild", "ETHShenzhen participants"]` | in-person | Shenzhen, China | 2025-08-23 | 2025-08-24 | — | — | `["Ethereum (implied)"]` | — | `["https://x.com/OpenBuildxyz/status/1963547236585148902"]` | `["announcement", "marketing"]` | low | 2026-04-04 |
| events.md | 45 | evt-045 | KL Mini Hack | `["ETH KL", "cypherX", "participants"]` | in-person | Kuala Lumpur, Malaysia | 2023-02-11 | 2023-02-17 | — | — | `["web3 (various)"]` | — | `["https://cny-hack-kuala-lumpur.devpost.com/"]` | `["devpost", "event-page"]` | high | 2026-04-04 |
| events.md | 104 | evt-107 | RWA Demo Day | `["Nano Labs", "BNB Chain", "ICCombinator", "ABGAasia", "MetaEraCN"]` | hybrid | Hong Kong (anchored by Hong Kong Web3 Festival) + online final pitch event | 2026-03-10 | 2026-03-31 | — | — | `["RWA", "Web3", "Blockchain"]` | — | `["https://rwa-demo-day.devpost.com/", "https://rwa-demo-day.devpost.com/details/dates", "https://rwa-demo-day.devpost.com/project-gallery"]` | `["devpost", "details/dates", "project_gallery"]` | high | 2026-04-04 |
| events.md | 121 | evt-124 | IATA ONE Record Hackathon – hosted by ICCS | `["ICCS", "IATA"]` | in-person | Shenzhen Virtual University Park (SZVUP), Shenzhen, China | 2024-03-16 | 2024-03-17 | — | — | `["Enterprise", "IoT", "Machine Learning/AI", "aviation logistics", "APIs"]` | — | `["https://onerecord-szx.devpost.com/", "https://onerecord-szx.devpost.com/details/dates", "https://onerecord-szx.devpost.com/project-gallery"]` | `["devpost", "details/dates", "project_gallery"]` | high | 2026-04-04 |
| events.md | 123 | evt-126 | Celebrate Ubuntu Hackathon - Beijing | `["Canonical", "Ubuntu"]` | hybrid | Beijing, China | 2016-05-07 | 2016-05-08 | — | — | `["Ubuntu", "developer community"]` | — | `["https://beijing-hackathon.devpost.com/", "https://beijing-hackathon.devpost.com/details/dates", "https://beijing-hackathon.devpost.com/project-gallery"]` | `["devpost", "details/dates", "project_gallery"]` | high | 2026-04-04 |
| events.md | 124 | evt-127 | HackPKU2016 | `["Peking University (北京大学)"]` | in-person | Peking University, Beijing, China | 2016-04-08 | 2016-04-10 | — | — | `["student hackathon", "innovation"]` | — | `["https://hackpku2016.devpost.com/", "https://hackpku2016.devpost.com/details/dates", "https://hackpku2016.devpost.com/project-gallery"]` | `["devpost", "details/dates", "project_gallery"]` | high | 2026-04-04 |
| events.md | 125 | evt-128 | JUNCTIONxTsinghua 2018 | `["THUSAST", "Tsinghua University", "Junction (mentioned)"]` | in-person | Tsinghua University, Beijing, China | 2018-05-17 | 2018-05-20 | — | — | `["Smart City", "Second Brain", "Care for Senior Citizens"]` | — | `["https://junthu2018.devpost.com/", "https://junthu2018.devpost.com/details/dates", "https://junthu2018.devpost.com/project-gallery"]` | `["devpost", "details/dates", "project_gallery"]` | high | 2026-04-04 |
| events.md | 127 | evt-130 | TechCrunch Shanghai 2016 Hackathon | `["TechCrunch (mentioned)", "TechNode (mentioned)"]` | in-person | West Bund Art Center, Shanghai, China | 2016-06-25 | 2016-06-26 | — | — | `["startup", "product design"]` | — | `["https://tcsh-2016-hackathon.devpost.com/", "https://tcsh-2016-hackathon.devpost.com/details/dates", "https://tcsh-2016-hackathon.devpost.com/project-gallery"]` | `["devpost", "details/dates", "project_gallery"]` | high | 2026-04-04 |
| events.md | 128 | evt-131 | Hyperledger BlockChain Hackathon Shanghai 2017 | `["Wanda Internet Technology Group", "IBM", "Linux Foundation / Hyperledger"]` | in-person | Wanda Reign on the Bund, Shanghai, China | 2017-03-10 | 2017-03-12 | — | — | `["Blockchain", "Hyperledger"]` | — | `["https://hyperledger-shanghai.devpost.com/", "https://hyperledger-shanghai.devpost.com/details/dates", "https://hyperledger-shanghai.devpost.com/project-gallery"]` | `["devpost", "details/dates", "project_gallery"]` | high | 2026-04-04 |
| events.md | 129 | evt-132 | hack.init() 2017 | `["hack.init()"]` | in-person | ShanghaiTech University, Shanghai, China | 2017-07-08 | 2017-07-09 | — | — | `["youth hackathon", "Artificial Intelligence", "Hardware", "IoT", "AR/VR", "Web Development"]` | — | `["https://hackinit.devpost.com/", "https://hackinit.devpost.com/details/dates", "https://hackinit.devpost.com/project-gallery"]` | `["devpost", "details/dates", "project_gallery"]` | high | 2026-04-04 |
| events.md | 130 | evt-133 | HackNYU @ NYUSH | `["HackNYU", "NYU Shanghai"]` | in-person | NYU Shanghai Academic Building, Shanghai, China | 2019-02-15 | 2019-02-17 | — | — | `["student hackathon", "Sustainability & Social Impact", "Health and Well-Being", "Educational Technology", "Financial Empowerment"]` | — | `["https://hacknyu-nyush.devpost.com/", "https://hacknyu-nyush.devpost.com/details/dates", "https://hacknyu-nyush.devpost.com/project-gallery"]` | `["devpost", "details/dates", "project_gallery"]` | high | 2026-04-04 |
| events.md | 131 | evt-134 | Hack the Pearl | `["NYU Shanghai"]` | in-person | NYU Shanghai Main Campus Academic Building, Shanghai, China | 2019-04-19 | 2019-04-21 | — | — | `["student-run", "multi-theme hackathon"]` | — | `["https://hack-the-pearl.devpost.com/", "https://hack-the-pearl.devpost.com/details/dates", "https://hack-the-pearl.devpost.com/project-gallery"]` | `["devpost", "details/dates", "project_gallery"]` | high | 2026-04-04 |
| organizer.md | 35 | org-035 |  | CNHK |  |  |  |  |  |  |  |  | — | `["devpost", "event-page"]` | high | — |
| organizer.md | 104 | org-104 |  | MetaEraCN |  |  |  |  |  |  |  |  | — | `["devpost", "details/dates", "project_gallery"]` | high | — |
| team.md | 35 | team-035 |  |  |  |  |  |  |  |  |  |  | — | `["devpost", "event-page"]` | high | — |
| team.md | 104 | team-104 |  |  |  |  |  |  |  |  |  |  | — | `["devpost", "details/dates", "project_gallery"]` | high | — |
| techstack.md | 153 | tech-153 |  |  |  |  |  |  |  |  |  |  |  | `["devpost", "event-page"]` | high | — |