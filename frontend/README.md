# XRPL Hub

XRPL Hub is a web application that helps users **create and manage XRP Ledger (XRPL) transactions** through a guided UI—then **sign safely in Xaman** (no private keys ever touch XRPL Hub).

XRPL Hub is a web application that helps **everyday people** use the XRP Ledger without needing to understand all the technical details.

---

## ✨ What XRPL Hub Does


XRPL Hub lets you fill out forms to generate **valid XRPL transactions** , then hands them off to **Xaman** for signing and submission.

Planned / supported features include:

- **Multi-sign (Multisig)**
  - Configure signer lists
  - Create multisig-ready accounts and transactions
  - Prepare multisig transaction payloads for signing

- **Payment Channels**
  - Create channels (source → destination, amount, settle delay, etc.)
  - Claim funds
  - Close channels

- **Escrow**
  - Create escrow
  - Finish escrow (after conditions)
  - Cancel escrow (when allowed)

- **Issued Assets (Tokens)**
  - Configure trust lines
  - Issue / manage tokens (issuer + distribution patterns)
  - (Optional / future) common token setup helpers (flags, freeze, etc.)

- **DEX / Offers (Future)**
  - Create offers, cancel offers
  - Basic trading helpers

---

## 🔐 Security Model

XRPL Hub is built around a simple rule:

### **No private keys. Ever.**
- XRPL Hub **never** asks for or stores secret keys / seed phrases.
- Transactions are **prepared unsigned** and then sent to **Xaman** for signing.
- Accounts (if created) store only **public information** (e.g., XRPL raddress) plus non-sensitive settings/history.

---

## 🧩 How It Works (High Level)

1. User chooses a module (Escrow / Payment Channel / Multisig / Issued Assets / etc.)
2. User fills out inputs in a guided form
3. XRPL Hub builds a valid **unsigned XRPL transaction**
4. XRPL Hub opens **Xaman** with the signing request
5. Xaman signs + submits to XRPL
6. XRPL Hub can show results by reading from the ledger (tx hash, status, history)

---

## 🧱 Tech Stack

- **Frontend:** React (Vite)
- **Backend:** Node.js / Express 
- **XRPL Integration:** xrpl.js 
- **Signing:** Xaman (XUMM) SDK 
- **Storage:** SQL

---
