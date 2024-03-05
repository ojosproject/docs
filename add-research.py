# add-research.py
# Ojos Project
# 
# Adds research automatically to docs/teams/research/work since it takes too much effort, and I don't want to use
# bash for this.
import json
from pathlib import Path

assert Path("data.json").exists(), "add-research: Please add the data.json file in this directory."

TEMPLATE_FOR_RESEARCH_FILES = "# {TITLE}\n\n" \
"## Summary\n\n" \
"{SUMMARY}\n\n" \
"## Notes\n\n" \
"{NOTES}\n\n" \
"## Notes written by...\n\n" \
"{AUTHOR}\n"

with open("data.json", "r") as f:
    db = json.loads(f.read())

for paper in db['papers']:
    if paper['submitted']:
        final = (TEMPLATE_FOR_RESEARCH_FILES
                .replace("{TITLE}", paper['title'])
                .replace("{SUMMARY}", paper['summary'])
                .replace("{NOTES}", paper['notes']))
        
        with open(f"docs/teams/research/work/{paper['id']}.md", "w+") as f:
            f.write(final)
