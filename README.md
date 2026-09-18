# ArcEye

ArcEye is an Arc-native token launch intelligence interface. It combines a live launch terminal, creator history, likely bundle detection, wallet relationship mapping, fee-flow signals, and explorer-style chain inspection in one product.

This branch contains the interactive frontend prototype. Its data is representative until the Arc indexer and scoring services are connected.

## Run locally

No build step is required. Serve the repository with any static server:

```bash
npx serve .
```

Then open the printed local URL.

## Prototype surfaces

- Live Arc launch terminal with risk filters and search
- Creator launch and token-death history
- Likely launch-bundle percentage and risk labels
- Repeat creator-fee farmer radar
- Wallet relationship and launch-lineage graph
- Evidence and confidence panel for wallet links
- ArcEye Scan for tokens, wallets, transactions, and blocks
- Responsive mobile navigation

## Next engineering phase

1. Index Arc blocks, transactions, logs, token contracts, and Argus launch events.
2. Resolve creators, funders, fee recipients, first buyers, and wallet clusters.
3. Calculate explainable risk signals with evidence and confidence.
4. Replace representative frontend data with the indexed API.
5. Add saved watchlists and wallet-based alert preferences.

## Product principle

ArcEye should never present a suspicion as a fact. Every risk label must expose the underlying on-chain evidence and a confidence level.
