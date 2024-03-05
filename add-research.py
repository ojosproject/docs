# add-research.py
# Ojos Project
# 
# Adds research automatically to docs/teams/research/work since it takes too much effort, and I don't want to use
# bash for this.
import json
from pathlib import Path

assert Path("data.json").exists(), "add-research: Please add the data.json file in this directory."

TEMPLATE_FOR_RESEARCH_FILES = "# {TITLE_SHORT}\n\n" \
"## Information\n\n" \
"Notes on \"{TITLE}\". See the [internal Google Drive document]({URL}).\n\n" \
"## Summary\n\n" \
"{SUMMARY}\n\n" \
"## Notes\n\n" \
"{NOTES}\n" \

with open("data.json", "r") as f:
    db = json.loads(f.read())

for paper in db['papers']:
    if paper['submitted']:
        final = (TEMPLATE_FOR_RESEARCH_FILES
                .replace("{TITLE_SHORT}", f"{paper['title'][:50]}...")
                .replace("{TITLE}", paper['title'])
                .replace("{URL}", paper['url'])
                .replace("{SUMMARY}", paper['summary'])
                .replace("{NOTES}", paper['notes']))
        
        with open(f"docs/teams/research/notes/{paper['id']}.md", "w+") as f:
            f.write(final)
