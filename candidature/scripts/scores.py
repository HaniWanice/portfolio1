"""Agrège les notes du panel : python3 candidature/scripts/scores.py
Lit 04-evaluation/rounds/round-*/agent-*.md et écrit 04-evaluation/SCORES.md."""
import re, glob, os, statistics as st

root = os.path.join(os.path.dirname(__file__), "..", "04-evaluation")
rounds = sorted(glob.glob(os.path.join(root, "rounds", "round-*")))
keys = ["humain", "credibilite", "clarte", "pertinence", "differenciation", "design", "ton", "envie", "convocation", "global", "portfolio", "portfolio_humain", "portfolio_ux"]
rows = {}
for r in rounds:
    name = os.path.basename(r)
    for f in sorted(glob.glob(os.path.join(r, "agent-*.md"))):
        txt = open(f, encoding="utf-8").read()
        for m in re.finditer(r"PROFIL:\s*(P\d+)\s*\n(.*?)(?:```|\n\n)", txt, re.S):
            prof, body = m.group(1), m.group(2)
            vals = {}
            for k in keys:
                mm = re.search(rf"\b{k}:\s*([\d.,]+)", body)
                if mm:
                    vals[k] = float(mm.group(1).replace(",", "."))
            rows.setdefault(name, {})[prof] = vals

out = ["# Notes du panel, round par round", "", "Généré par `candidature/scripts/scores.py`. Moyennes sur les 15 profils.", ""]
out.append("| Indicateur | " + " | ".join(rows) + " |")
out.append("|---|" + "---|" * len(rows))
for k in keys:
    cells = []
    for r in rows:
        v = [p[k] for p in rows[r].values() if k in p]
        cells.append(f"{st.mean(v):.1f}" if v else "—")
    out.append(f"| {k} | " + " | ".join(cells) + " |")
out += ["", "## Note globale par profil (sur 20)", "", "| Profil | " + " | ".join(rows) + " |", "|---|" + "---|" * len(rows)]
profs = sorted({p for r in rows.values() for p in r}, key=lambda x: int(x[1:]))
for p in profs:
    out.append(f"| {p} | " + " | ".join(str(rows[r].get(p, {}).get("global", "—")) for r in rows) + " |")
open(os.path.join(root, "SCORES.md"), "w", encoding="utf-8").write("\n".join(out) + "\n")
print("\n".join(out))
