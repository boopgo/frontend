## §1 — Summary

Boop is the AI-native social app for pets. A pet parent scans their dog once; the dog becomes a digital companion the user walks, tracks, dresses, and shops for inside a single daily-use app. The walk surface is both a utility (route, time, distance) and a play loop (the dog-as-character earns rewards, meets nearby dogs).

The pet economy is already large, recurring, and behaviorally rich. Households walk, feed, dress, gift, and post about their dogs every day, and they distribute that spending and attention across a long tail of retailers, marketplaces, and feeds. Commerce sits inside Chewy. Care sits inside Rover and the local veterinarian. Identity sits inside Instagram. None of those surfaces talk to each other. Boop sits above those primitives as a single consumer surface — the abstraction layer between the pet parent and the category they already participate in.

## §2 — Industry

The US pet industry reached **$152B** in 2024, growing approximately 4% year over year. **94 million** US households (71%) own a pet, of which **68 million** own a dog.<sup>1,2</sup>

#### Per-household spend, dog-owning households (2024)

| Category | $ / yr |
| --- | ---: |
| Veterinary services | 387 |
| Food | 349 |
| Products & supplies | 349 |
| Gifts | 79 |
| **Total** | **1,248** |

Source: ValuePenguin, 2024.<sup>1</sup>

#### Category spend, US pet industry (2024)

| Segment | $B |
| --- | ---: |
| Pet food & treats | 68.3 |
| Vet care & product sales | 41.0 |
| Supplies & OTC meds | 34.4 |
| Other services | 14.3 |
| **Total** | **158.0** |

Source: APPA, 2024.<sup>2</sup>

Of that household total, **$428 / yr** flows through products and gifts — the most discretionary and most behaviorally elastic slice of the wallet, and the one that maps cleanly onto a digital companion (apparel, accessories, custom goods, recurring treats). The category's other layers are mature and addressed: food has Chewy, care has the veterinarian, services have Rover and PetSmart. The consumer surface that sits across all of them — daily, AI-native, identity-bearing — has no incumbent. Boop is the abstraction at that layer.

## §3 — Product

<span class="draft">In draft.</span> Four loops described as primitives, not as a vision: **Scan** (the pet parent generates the digital companion in seconds), **Walk** (the daily outdoor loop, both utility and play), **Feed** (the in-app social surface, pets-only), and **Friend graph** (pets accumulate relationships with other pets and people they encounter — at the dog park, at the vet, with the staff at their groomer, on walks — a relational layer Boop accrues over time; effectively a LinkedIn for pets). The friend graph is not a monetization layer in itself; it is a game mechanic and a compounding distribution surface that deepens Layers 4 and 5 of §4 over time. The purpose of this section is not to sell the product; it is to set up the monetization stack in §4 by naming the surfaces it monetizes.

## §4 — Monetization

<span class="draft">In draft. Centerpiece of the memo.</span> Five revenue layers, each with a distinct mechanic and a public-comp anchor. The walking and companion surfaces monetize through in-app digital purchases (Pokémon Go shape); the physical-merch surfaces monetize through both affiliate and private-label channels with different unit economics; partnerships are split into the two sales motions they actually are — local SMB self-serve (Yelp shape) and national brand BD (Pinterest / TikTok shape).

| Layer | Phase | Year-3 ARPU | Saturation ARPU |
| --- | :---: | ---: | ---: |
| 1. In-app digital purchases (IAP) | v1 | $4 | $8 |
| 2. Physical commerce — affiliate | v1 | $10 | $20 |
| 3. Physical commerce — private label &amp; custom merch | Y2+ | $5 | $15 |
| 4. Local merchant network | Y2+ | $5 | $10 |
| 5. National brand partnerships | Y3+ | $2 | $5 |
| **Blended** | | **$26** | **$58** |

*Phasing.* **v1** layers (1, 2) ship at iOS launch and carry the company through year-1 revenue. **Y2+** layers (3, 4) require supply-chain build-out and MAU density before they pay; both are credible inside an 18–24 month horizon. **Y3+** (Layer 5) requires scale before national brands engage. The seed round funds v1 only; subsequent layers are self-funding from v1 revenue and / or a future Series A.

Mechanic and comp evidence per layer below; expand for detail. Comps are cited as proof that the underlying mechanic monetizes at scale, not as Boop revenue benchmarks.

<div class="comps">

<details>
<summary><span class="comp-label">Layer 1 · IAP</span><span class="comp-stat">Pokémon Go · Roblox · Remini</span></summary>
<p><strong>Mechanic.</strong> Cosmetic outfits on the digital companion (digital-only, no physical SKU); consumables tied to the gamification loop (treats, energy regeneration, special items); multi-pet add-on as a one-time IAP; scan and AI-generation credits sold per-use; walk-loop power-ups that surface rare interactions or boost progression.</p>
<p><strong>Comp evidence.</strong> Pokémon Go generated ~$545M in 2024 IAP across ~115M MAU (~$4.74 / MAU / yr) on a free-to-play, no-subscription structure — the load-bearing comp for IAP on a walking and creature-collecting loop.<sup>1</sup> Roblox demonstrates the upper bound of avatar-cosmetic IAP at ~$70 ARPU on pure digital goods.<sup>2</sup> The virtual pet simulator category — the Tamagotchi-descendant lineage of feed/rest/dress mechanics — sits at ~$326M globally in 2025, growing ~10% annually.<sup>3</sup> Adjacent on the AI surface: Remini generated ~$200M in 2024 IAP from AI-generated likenesses of the user, applied here to the pet.<sup>4</sup></p>
</details>

<details>
<summary><span class="comp-label">Layer 2 · Affiliate commerce</span><span class="comp-stat">Etsy · LTK</span></summary>
<p><strong>Mechanic.</strong> Every digital outfit and accessory rendered on the companion maps to a real purchasable SKU at a brand partner. Boop captures a 15–25% affiliate take rate. The digital try-on collapses discovery, intent, and purchase into a single tap, removing the friction that drags conventional social-commerce CTR.</p>
<p><strong>Comp evidence.</strong> Etsy generated ~$2.8B in 2024 revenue across ~90M active buyers (~$31 ARPU), demonstrating take-rate marketplace economics on consumer-app-driven physical-goods sales.<sup>5</sup> LTK (formerly RewardStyle) drives over $4B in annual creator-attributed GMV through affiliate links; Boop's mechanic substitutes the digital companion for the human creator while preserving the same take-rate structure.<sup>6</sup></p>
</details>

<details>
<summary><span class="comp-label">Layer 3 · Private label &amp; custom merch</span><span class="comp-stat">BarkBox · Crown &amp; Paw</span></summary>
<p><strong>Mechanic.</strong> Boop-branded apparel and accessories from year 2+; custom-printed merchandise featuring the user's own dog as design input from launch. Higher gross margin than affiliate; longer build time on supply and SKU mix; meaningful repeat-purchase potential.</p>
<p><strong>Comp evidence.</strong> The Original BARK Company reported ~$483M in FY2024 revenue across ~2–3M active subscribers, implying ~$160–240 ARPU per paying user, entirely from physical pet merchandise.<sup>7</sup> Crown &amp; Paw, Furryfolks, and other independent custom-pet DTC brands have each built nine-figure businesses around printed merchandise of the customer's own pet — the same mechanic Boop adopts, minus the digital try-on layer.</p>
</details>

<details>
<summary><span class="comp-label">Layer 4 · Local merchant network</span><span class="comp-stat">Yelp · Rover · Thumbtack</span></summary>
<p><strong>Mechanic.</strong> Paid map placement, promoted local events, and lead-gen for independent veterinarians, groomers, trainers, dog parks, and pet stores. Per-merchant subscription ($99–199 / mo) plus per-lead fees on bookings. The map becomes the default local discovery surface for pet services inside the user's walk radius — the place a dog parent looks first when they need a vet, a sitter, or a new park.</p>
<p><strong>Comp evidence.</strong> Yelp generated ~$1.3B in 2024 revenue across ~80M MAU (~$16 ARPU), almost entirely from independent SMBs paying for paid placement inside a daily-use consumer app.<sup>8</sup> Rover (pet-vertical local services marketplace, ~$200M+ ARR pre-take-private) demonstrates that pet parents will use a digital surface to find and book local providers; its mechanic is two-sided booking rather than paid placement, but the category density is proof of demand. Thumbtack monetizes per-lead at $15–60 per qualifying request across local services categories.</p>
<p><strong>Friend-graph leverage (§3).</strong> Each pet's relationships act as organic distribution for paying merchants: when a pet befriends another pet at the same vet, groomer, or park, that merchant becomes visible inside the friend's app context. Paid placement compounds with earned discovery; merchant LTV improves with friend-graph density.</p>
</details>

<details>
<summary><span class="comp-label">Layer 5 · National brand partnerships</span><span class="comp-stat">Pinterest · TikTok Shop</span></summary>
<p><strong>Mechanic.</strong> Sponsored outfit drops (a national brand pays Boop for an exclusive co-branded collection on the digital companion, tied to a real-world product launch); cohort licensing of anonymized data on breed × geography × outfit preference × walk behavior (sold to brand R&amp;D and retail planning teams); premium placement inside the in-app outfit marketplace. The smallest and most variable layer; meaningful only at MAU scale.</p>
<p><strong>Comp evidence.</strong> Pinterest generated ~$3.6B in 2024 revenue across ~520M MAU (~$7 ARPU), monetizing shoppable content and brand campaigns inside a high-intent consumer surface.<sup>9</sup> TikTok Shop and creator-led drop campaigns demonstrate that exclusive, time-limited co-branded collections drive measurable consumer spend on social surfaces. Pet-brand collaborations (BarkBox × Disney, BarkBox × NBA) are precedent within the vertical for sponsored-drop economics specifically.</p>
<p><strong>Friend-graph leverage (§3).</strong> Cohort licensing becomes more valuable as the friend graph accrues. Relational density — which breeds interact, which neighborhoods cluster, how products propagate through pet social networks — is data no incumbent has, and it sharpens both targeting for sponsored drops and the ground-truth of cohort insights sold to brand R&amp;D.</p>
</details>

</div>

The flywheel: commerce data improves the avatars; better avatars raise CTR and conversion; higher conversion earns exclusive brand drops and richer local merchant placements; the friend graph (§3) deepens with every walk and vet visit, turning the local merchant layer into a self-marketing network and the partnership layer into a denser data product; the map gets denser; the daily walk gets more reasons to open. Each ARPU figure is bracketed by a public comp; none are invented.

*Surfaces not modeled in the saturation ceiling (intentionally conservative):* Strava-style power-user analytical subscription; insurance and food-subscription referral fees; pet-sitting and dog-walking marketplace; adoption-listing fees. Each is a credible year-3+ surface and would compound on top of the $58 saturation ARPU above.

## §5 — Bottom-up market sizing

<span class="draft">In draft.</span> Market sizing is done bottom-up against the §4 blended ARPU figures, not top-down against the $158B category.

- **Universe.** 68M US dog-owning households (§2).
- **Addressable.** ~30% (~20.4M households) — Gen Z and Millennial digitally-native segment.
- **Year-3 traction case.** ~5M MAU (~25% of addressable) at $26 blended ARPU → **~$130M ARR.**
- **Saturation ceiling.** Full penetration of the addressable segment at $58 blended ARPU → **~$1.18B ARR.**

Both numbers are surfaced. The traction case anchors the disciplined view (the floor we underwrite); the saturation ceiling anchors the upside view (what the company is worth if the loop works). Each ARPU input traces to a public-comp source named in §4; penetration assumptions are conservative against precedent (Strava has captured ~10% of US runners on a less-daily activity).

## §6 — Competition

The pet category is well-populated at the layer level — every individual surface Boop ships has incumbents. The category is *unpopulated at the abstraction layer*, which is the composition of those surfaces into one AI-native consumer surface tied to the user's actual dog.

Two direct attempts exist at composing more than one of Boop's surfaces. Single-layer incumbents (Fi, BarkBox, Chewy, Rover, Instagram) are excluded from the matrix below; they are not composing the stack and are addressed structurally in §1 and §2.

#### Competitive matrix

| Player | Type | Platform | Real pet | Walk | Feed | Friends | Commerce | Local |
| --- | --- | --- | :---: | :---: | :---: | :---: | :---: | :---: |
| **Boop** | AI-native social app | iOS *(launch 2026)* | <span class="yes">✓</span> | <span class="yes">✓</span> | <span class="yes">✓</span> | <span class="yes">✓</span> | <span class="yes">✓</span> | <span class="yes">✓</span> |
| [Pawmates](https://apps.apple.com/us/app/pawmates-the-pet-social-media/id1397983772) | Pet-social network | iOS + Android | <span class="no">✗</span> | <span class="no">✗</span> | <span class="yes">✓</span> | <span class="yes">✓</span> | <span class="no">✗</span> | <span class="mid">partial</span> |
| [PawPals](https://apps.apple.com/us/app/pawpals-dog-park-social/id6751210296) | Dog-park map &amp; social | iOS + Android | <span class="no">✗</span> | <span class="mid">partial</span> | <span class="yes">✓</span> | <span class="mid">partial</span> | <span class="no">✗</span> | <span class="mid">partial</span> |

#### Reading the landscape

**[Pawmates](https://apps.apple.com/us/app/pawmates-the-pet-social-media/id1397983772) — the pet-social comp.** A pet-first social media app with a "find playmates" feature and partial integration with local pet services, reportedly ~100K users across 75+ countries. Closest concept comp on the social side: Feed and Friends columns checked, partial Local. Pawmates is structurally pre-AI (no scan, no companion generation, no commerce) and operates as a 2017–2019-era social-media product. Boop's friend graph occupies the same column but is fed by every walk and vet visit rather than self-declared.

**[PawPals](https://apps.apple.com/us/app/pawpals-dog-park-social/id6751210296) — the walk-loop comp.** Dog-park-discovery app with a real-time map of parks, gamification (points, badges, achievements), pet activity logging, and a basic news feed. The closest mechanical comp to Boop's daily walk loop. PawPals does no AI, no real-pet identity, no commerce — but proves that walk-and-park gamification is a real consumer behavior with willingness-to-engage. Boop's walk loop captures the same surface and adds the companion layer (the dog-as-character) on top.

**Three observations on the landscape as a whole.** First, no current player occupies more than three columns of the matrix; Boop's claim is the abstraction across all six. Second, every player on the matrix is structurally pre-AI — neither Pawmates nor PawPals does any AI generation, scan, or companion mechanic. Third, the competitive pressure on Boop in v1 is not displacement by either of the above (neither has the capital, the AI infrastructure, or the velocity to compose the stack inside our shipping window) — it is the risk of *incumbents adding AI features to their existing single-layer surfaces*. The defensible response is product velocity at the abstraction layer, not feature parity at any one surface.

## §7 — Team

A two-person founding team. Boop is intentionally small at this stage; the seed round funds two engineering hires to ship v1, not a generalist build-out.

- **[Founder name] — Founder &amp; CEO.** [One-line bio: prior companies, relevant wins, domain credibility.]
- **[Co-founder name] — Game &amp; product.** [One-line bio: prior shipping credits, relevant gameplay or AI experience.]

The composition is deliberate: a builder and a game designer. The product surface that has to work first — the Scan-to-companion flow and the daily walk loop — is a game-design problem before it is a social-network problem. Hiring against that thesis is how the team is structured.

## §8 — The ask

| Term | Value |
| --- | --- |
| Round | $1M seed |
| Instrument | SAFE |
| Post-money cap | $10M |
| Runway | ~24 months at conservative burn |
| Milestones | iOS launch; v1 monetization (Layers 1 &amp; 2) live; baseline retention &amp; ARPU figures captured; reserve preserved for validated double-down |

Pricing is in line with current pre-product AI consumer norms.

#### Operating philosophy

Boop is run as an experimental lab. The seed funds the team and infrastructure required to ship v1 and capture early monetization data; a meaningful portion of the round is held in reserve and deployed only against channels and product surfaces that have demonstrated positive unit economics in v1. The team does not pre-commit capital to marketing or growth hires before signal exists. Capital is optionality, deployed when validated, not on schedule.

#### Use of funds

| Use | $ | Unlocks |
| --- | ---: | --- |
| Founder salary (24 mo @ $80K base, loaded) | $173K | Runway through iOS launch + 12 mo of v1 data |
| Lead engineer salary (24 mo @ $100K base, loaded) | $216K | Ships Scan, Walk, Feed, Friend graph; ongoing ML / avatar quality |
| GTM hire (deferred ~12 mo, activated once v1 signal exists) | $86K | Hired only when v1 reveals a channel worth scaling |
| AI inference + infra (scan, generation, maps; 24 mo) | $80K | Per-scan unit cost held under target; supports v1 user volume |
| Legal, ops, accounting, tools | $40K | — |
| Brand BD + first commerce integrations | $50K | Layer 2 affiliate revenue at launch; first 3–5 brand partners live |
| **Operating spend** | **~$645K** | |
| **Capital reserve, held for validated double-down** | **~$355K** | Deployed against v1 channels with proven unit economics (paid acquisition, additional hires, infra scale-out) |
| **Total** | **$1.00M** | |

The reserve is the philosophy made visible: capital held until product signal tells us where it earns its highest marginal return. The seed underwrites v1 only; Layers 3, 4, and 5 of §4 are self-funding from v1 revenue or a future Series A.

---

#### Sources

1. Sensor Tower / AppMagic, *Pokémon GO 2024 IAP Revenue & MAU*. sensortower.com/blog/pokemon-go-6-billion-revenue
2. Roblox Corporation, *2024 Annual Report (Form 10-K) — Bookings per DAU*. ir.roblox.com
3. 360iResearch, *Virtual Pet Simulator Apps Market Size & Share 2025–2032*. 360iresearch.com/library/intelligence/virtual-pet-simulator-apps
4. Sensor Tower, *State of Mobile Gaming 2025*. sensortower.com/blog/state-of-mobile-gaming-2025
5. Etsy, Inc., *2024 Annual Report (Form 10-K)*. investors.etsyinc.com
6. LTK (rewardStyle), *2024 Creator-Attributed GMV* (private-company release). shopltk.com
7. The Original BARK Company, *FY2024 Annual Report*. ir.bark.co
8. Yelp, Inc., *2024 Annual Report (Form 10-K)*. ir.yelp.com
9. Pinterest, Inc., *2024 Annual Report (Form 10-K)*. investor.pinterestinc.com
10. ValuePenguin, *Average Spending per Pet Household, 2024*. valuepenguin.com/pet-spending-study
11. American Pet Products Association, *Pet Industry Market Size, Trends & Statistics*. americanpetproducts.org/industry-trends-and-stats
12. American Pet Products Association, *2024 Dog and Cat Owner Insight Report*. americanpetproducts.org/news
