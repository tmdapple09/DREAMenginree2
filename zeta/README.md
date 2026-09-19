# Zeta zeros state

Managed by the Zeta zeros pipeline workflow.

- `zeros.txt` — append-only, one gamma per line, 17 sig figs.
- `latest.json` — most recent full report (JSON).
- `latest.md` — most recent full report (Markdown).
- `reports/` — timestamped history of every run's JSON report.
- `state/` — pipeline scratch (model list, skip list, per-phase output).

Do not edit `zeros.txt` by hand. Let the workflow append.
