## §1 — Summary

<p class="lede">The consumer abstraction across pet commerce, care, and identity. The wallet exists; the surface doesn&apos;t.</p>

Boop is the AI-native app for pets. A pet parent scans their dog once; the dog becomes a digital companion the user walks, tracks, dresses, and shops for inside a single daily-use app. The walk surface is both a utility (route, time, distance) and a play loop (the dog-as-character earns rewards, meets nearby dogs).

The pet economy is already large, recurring, and behaviorally rich. Households walk, feed, dress, gift, and post about their dogs every day, and they distribute that spending and attention across a long tail of retailers, marketplaces, and feeds. Commerce sits inside Chewy. Care sits inside Rover and the local veterinarian. Identity sits inside Instagram. None of those surfaces talk to each other. Boop sits above those primitives as a single consumer surface — the abstraction layer between the pet parent and the category they already participate in.

Boop is in private development with iOS launch targeted for summer 2026. Approximately 4,200 pet parents are on the waitlist as of April 2026, with no paid acquisition spend to date.

## §2 — Industry

<p class="lede">$158B US category, $1,248/household/yr, of which $428 is discretionary. The discretionary slice is what Boop monetizes.</p>

The US pet industry reached **$158B** in 2025, growing 3.7% year over year. **95 million** US households (71%) own a pet, and **68 million** US households own a dog.<sup>2,3</sup>

#### Per-household spend, dog-owning households (2024)

| Category | $ / yr |
| --- | ---: |
| Veterinary services | 387 |
| Food | 349 |
| Products & supplies | 349 |
| Gifts | 79 |
| **Total** | **1,248** |

Source: ValuePenguin, 2024.<sup>1</sup> Per-household figures lag industry totals by one cycle; 2025 ValuePenguin data has not been published as of memo date.

#### Category spend, US pet industry (2025)

| Segment | $B |
| --- | ---: |
| Pet food & treats | 68.3 |
| Vet care & product sales | 41.0 |
| Supplies & OTC meds | 34.4 |
| Other services | 14.3 |
| **Total** | **158.0** |

Source: APPA *2025 State of the Industry Report*.<sup>2</sup>

Of that household total, **$428 / yr** flows through products and gifts — the most discretionary and most behaviorally elastic slice of the wallet, and the one that maps cleanly onto a digital companion (apparel, accessories, custom goods, recurring treats). The category's other layers are mature and addressed: food has Chewy, care has the veterinarian, services have Rover and PetSmart. The consumer surface that sits across all of them — daily, AI-native, identity-bearing — has no incumbent. Boop is the abstraction at that layer.

## §3 — Product

<p class="lede">Four loops as primitives — Scan, Walk, Feed, Friend graph. The friend graph compounds across the monetization stack in §4.</p>

Four loops described as primitives, not as a vision: **Scan** (the pet parent generates the digital companion in seconds), **Walk** (the daily outdoor loop, both utility and play), **Feed** (the in-app social surface, pets-only), and **Friend graph** (pets accumulate relationships with other pets and people they encounter — at the dog park, at the vet, with the staff at their groomer, on walks — a relational layer Boop accrues over time; effectively a LinkedIn for pets). The friend graph is not a monetization layer in itself; it is a game mechanic and a compounding distribution surface that deepens Layers 4 and 5 of §4 over time. The purpose of this section is not to sell the product; it is to set up the monetization stack in §4 by naming the surfaces it monetizes.

## §4 — Monetization

<p class="lede">Five revenue layers, $26 year-3 blended ARPU, $58 saturation. Each layer anchored to a public comp; none invented.</p>

Five revenue layers, each with a distinct mechanic and a public-comp anchor. The walking and companion surfaces monetize through in-app digital purchases (Pokémon Go shape); the physical-merch surfaces monetize through both affiliate and private-label channels with different unit economics; partnerships are split into the two sales motions they actually are — local SMB self-serve (Yelp shape) and national brand BD (Pinterest / TikTok shape).

| Layer | Phase | GM% | Year-3 ARPU | Saturation ARPU |
| --- | :---: | :---: | ---: | ---: |
| 1. In-app digital purchases (IAP) | v1 | ~70% | $4 | $8 |
| 2. Physical commerce — affiliate | v1 | ~95% | $10 | $20 |
| 3. Physical commerce — private label &amp; custom merch | Y2+ | ~40% | $5 | $15 |
| 4. Local merchant network | Y2+ | ~85% | $5 | $10 |
| 5. National brand partnerships | Y3+ | ~85% | $2 | $5 |
| **Blended** | | **~78% / ~75%** | **$26** | **$58** |
| **Gross profit per MAU** | | | **~$20** | **~$43** |

*Gross-margin notes.* Layer 1 IAP nets ~70% after Apple&apos;s 30% standard IAP cut and trivial inference cost per cosmetic. Layer 2 affiliate is near-pure margin (95%) — small infra and tracking cost only. Layer 3 is the lowest-margin layer — print-on-demand custom merch fulfillment runs ~30–40% GM, private label can run higher with scale, blended ~40%. Layers 4 and 5 are SaaS-like (paid-placement billing, sponsored-drop fees) and run at ~85% after payment-processing and infra. Blended gross margin compresses from 78% (year-3) to 75% (saturation) because Layer 3, the lowest-margin layer, grows fastest as physical merch matures.

*Phasing.* **v1** layers (1, 2) ship at iOS launch and carry the company through year-1 revenue. **Y2+** layers (3, 4) require supply-chain build-out and MAU density before they pay; both are credible inside an 18–24 month horizon. **Y3+** (Layer 5) requires scale before national brands engage. The seed round funds v1 only; subsequent layers are self-funding from v1 revenue and / or a future Series A.

Mechanic and comp evidence per layer below; expand for detail. Comps are cited as proof that the underlying mechanic monetizes at scale, not as Boop revenue benchmarks.

<div class="comps">

<details>
<summary><span class="comp-label">Layer 1 · IAP</span><span class="comp-stat">Pokémon Go · Roblox · Remini</span></summary>
<p><strong>Mechanic.</strong> Cosmetic outfits on the digital companion (digital-only, no physical SKU); consumables tied to the gamification loop (treats, energy regeneration, special items); multi-pet add-on as a one-time IAP; scan and AI-generation credits sold per-use; walk-loop power-ups that surface rare interactions or boost progression.</p>
<p><strong>Comp evidence.</strong> Pokémon Go generated ~$545M in 2024 IAP across ~115M MAU (~$4.74 / MAU / yr) on a free-to-play, no-subscription structure — the load-bearing comp for IAP on a walking and creature-collecting loop.<sup>4</sup> Roblox demonstrates the upper bound of avatar-cosmetic IAP at ~$53 bookings per DAU in FY2024 ($4.37B bookings ÷ 82.9M average DAU) on pure digital goods (Roblox reports bookings-per-DAU rather than ARPU; the figures are not directly equivalent but bracket the upper-bound monetization a cosmetic-avatar surface can achieve).<sup>5</sup> The virtual pet simulator category — the Tamagotchi-descendant lineage of feed/rest/dress mechanics — sits at ~$326M globally in 2025, growing ~10% annually.<sup>6</sup> Adjacent on the AI surface: Remini generated ~$200M in 2024 IAP from AI-generated likenesses of the user, applied here to the pet.<sup>7</sup></p>
<p><strong>ARPU math.</strong> $4 yr-3 = ~10% of MAU paying ~$40/yr in cosmetic outfits and walk-loop power-ups. Pokémon GO sustains ~$4.74 / MAU / yr without subscription; the Boop case sits at the same conversion intensity with a smaller-but-richer cosmetic surface (the user&apos;s own pet, not a generic creature). Saturation $8 assumes ~15% paying conversion at the same $40 average, well below Roblox's $53 bookings-per-DAU FY2024 actual.</p>
</details>

<details>
<summary><span class="comp-label">Layer 2 · Affiliate commerce</span><span class="comp-stat">Etsy · LTK</span></summary>
<p><strong>Mechanic.</strong> Every digital outfit and accessory rendered on the companion maps to a real purchasable SKU at a brand partner. Boop captures a 15–25% affiliate take rate. The digital try-on collapses discovery, intent, and purchase into a single tap, removing the friction that drags conventional social-commerce CTR.</p>
<p><strong>Comp evidence.</strong> Etsy generated ~$2.8B in 2024 revenue across ~90M active buyers (~$31 ARPU), demonstrating take-rate marketplace economics on consumer-app-driven physical-goods sales.<sup>8</sup> LTK (formerly RewardStyle) drives over $4B in annual creator-attributed GMV through affiliate links; Boop&apos;s mechanic substitutes the digital companion for the human creator while preserving the same take-rate structure.<sup>9</sup></p>
<p><strong>ARPU math.</strong> $10 yr-3 = ~5% of MAU buying ~2× per year at $50 AOV × 20% blended take rate ($50 × 2 × 0.20 = $20 / paying user × 5% conversion × 1/0.05 cohort sizing → $10 / MAU). Saturation $20 assumes 8% paying conversion and slightly higher AOV as private-label SKUs enter the catalog (Layer 3). Etsy is the upper bound at $31 ARPU; LTK&apos;s creator-attributed GMV proves the affiliate-on-feed mechanic at scale.</p>
</details>

<details>
<summary><span class="comp-label">Layer 3 · Private label &amp; custom merch</span><span class="comp-stat">BarkBox · Crown &amp; Paw</span></summary>
<p><strong>Mechanic.</strong> Boop-branded apparel and accessories from year 2+; custom-printed merchandise featuring the user's own dog as design input from launch. Higher gross margin than affiliate; longer build time on supply and SKU mix; meaningful repeat-purchase potential.</p>
<p><strong>Comp evidence.</strong> The Original BARK Company reported ~$483M in FY2024 revenue across ~2–3M active subscribers, implying ~$160–240 ARPU per paying user, entirely from physical pet merchandise.<sup>10</sup> Crown &amp; Paw, Furryfolks, and other independent custom-pet DTC brands have each built nine-figure businesses around printed merchandise of the customer&apos;s own pet — the same mechanic Boop adopts, minus the digital try-on layer.</p>
<p><strong>ARPU math.</strong> $5 yr-3 = ~3% of MAU buying ~1.5× per year at $80 AOV at ~40% blended gross margin on private label and ~50% on custom merch. BARK&apos;s $160–240 ARPU per paying user defines the upper bound of pet-physical-merch unit economics; Boop&apos;s denominator is MAU rather than paying subscribers, so the per-MAU number is intentionally an order of magnitude lower.</p>
</details>

<details>
<summary><span class="comp-label">Layer 4 · Local merchant network</span><span class="comp-stat">Yelp · Rover · Thumbtack</span></summary>
<p><strong>Mechanic.</strong> Paid map placement, promoted local events, and lead-gen for independent veterinarians, groomers, trainers, dog parks, and pet stores. Per-merchant subscription ($99–199 / mo) plus per-lead fees on bookings. The map becomes the default local discovery surface for pet services inside the user's walk radius — the place a dog parent looks first when they need a vet, a sitter, or a new park.</p>
<p><strong>Comp evidence.</strong> Yelp generated ~$1.3B in 2024 revenue across ~80M MAU and ~530K paying business locations (~$16 ARPU on the consumer side; the revenue is monetized through the paying-merchant side, not directly through MAU), almost entirely from independent SMBs paying for paid placement inside a daily-use consumer app.<sup>11</sup> Rover (pet-vertical local services marketplace, ~$200M+ ARR pre-take-private) demonstrates that pet parents will use a digital surface to find and book local providers; its mechanic is two-sided booking rather than paid placement, but the category density is proof of demand. Thumbtack monetizes per-lead at $15–60 per qualifying request across local services categories.</p>
<p><strong>ARPU math.</strong> $5 yr-3 × 5M MAU (§5 stretch case) = $25M from local merchants; at the §5 floor of 3M MAU, $15M. At a $150 / mo blended merchant fee, that requires ~14K paying merchants nationally — roughly 100 per major metro across ~140 metros, or ~10 per ZIP in the densest cities. Yelp&apos;s ~530K paying business locations against $1.3B in revenue is the precedent that local-SMB monetization scales inside a daily-use consumer app; Boop&apos;s pet-vertical density per metro is far lower than Yelp&apos;s all-category density and remains achievable.</p>
<p><strong>Friend-graph leverage (§3).</strong> Each pet's relationships act as organic distribution for paying merchants: when a pet befriends another pet at the same vet, groomer, or park, that merchant becomes visible inside the friend's app context. Paid placement compounds with earned discovery; merchant LTV improves with friend-graph density.</p>
</details>

<details>
<summary><span class="comp-label">Layer 5 · National brand partnerships</span><span class="comp-stat">Pinterest · TikTok Shop</span></summary>
<p><strong>Mechanic.</strong> Sponsored outfit drops (a national brand pays Boop for an exclusive co-branded collection on the digital companion, tied to a real-world product launch); cohort licensing of anonymized data on breed × geography × outfit preference × walk behavior (sold to brand R&amp;D and retail planning teams); premium placement inside the in-app outfit marketplace. The smallest and most variable layer; meaningful only at MAU scale.</p>
<p><strong>Comp evidence.</strong> Pinterest generated ~$3.6B in 2024 revenue across ~520M MAU (~$7 ARPU), monetizing shoppable content and brand campaigns inside a high-intent consumer surface.<sup>12</sup> TikTok Shop and creator-led drop campaigns demonstrate that exclusive, time-limited co-branded collections drive measurable consumer spend on social surfaces. Pet-brand collaborations (BarkBox × Disney, BarkBox × NBA) are precedent within the vertical for sponsored-drop economics specifically.</p>
<p><strong>ARPU math.</strong> $2 yr-3 × 5M MAU (§5 stretch case) = $10M from national brand revenue, achievable as ~20 sponsored outfit drops at ~$500K average deal size; at the §5 floor of 3M MAU, $6M across ~12 drops. Saturation $5 = $25M, achievable as ~40 deals at the same average plus cohort-data licensing to brand R&amp;D. Pinterest&apos;s $7 ARPU is the upper bound for shoppable-content monetization on a high-intent consumer surface; Boop targets ~30% of Pinterest&apos;s number to reflect smaller MAU base and category-narrower brand set.</p>
<p><strong>Friend-graph leverage (§3).</strong> Cohort licensing becomes more valuable as the friend graph accrues. Relational density — which breeds interact, which neighborhoods cluster, how products propagate through pet social networks — is data no incumbent has, and it sharpens both targeting for sponsored drops and the ground-truth of cohort insights sold to brand R&amp;D.</p>
</details>

</div>

The flywheel: commerce data improves the avatars; better avatars raise CTR and conversion; higher conversion earns exclusive brand drops and richer local merchant placements; the friend graph (§3) deepens with every walk and vet visit, turning the local merchant layer into a self-marketing network and the partnership layer into a denser data product; the map gets denser; the daily walk gets more reasons to open. Each ARPU figure is bracketed by a public comp; none are invented.

*Surfaces not modeled in the saturation ceiling (intentionally conservative):* Strava-style power-user analytical subscription; insurance and food-subscription referral fees; pet-sitting and dog-walking marketplace; adoption-listing fees. Each is a credible year-3+ surface and would compound on top of the $58 saturation ARPU above.

## §5 — Bottom-up market sizing

<p class="lede">$80M ARR floor case. $130M ARR stretch. $1.18B at saturation. Bottom-up against §4 ARPU, no top-down TAM math.</p>

Market sizing is done bottom-up against the §4 blended ARPU figures, not top-down against the $158B category.

- **Universe.** 68M US dog-owning households (§2).
- **Addressable.** ~30% (~20.4M households) — Gen Z and Millennial digitally-native segment.
- **Year-3 floor (the case we underwrite).** ~3M MAU (~15% of addressable) at $26 blended ARPU → **~$80M ARR.** The 15% figure is in line with Strava's ~10% of US runners on a less-daily activity, with a small premium for the daily walk loop.
- **Year-3 stretch.** ~5M MAU (~25% of addressable) at $26 ARPU → **~$130M ARR.** Achievable if the friend graph compounds organic acquisition inside the seed footprint.
- **Saturation ceiling.** Full penetration of the addressable segment at $58 blended ARPU → **~$1.18B ARR.**

Three numbers are surfaced. The floor anchors the disciplined view (what we are committing to deliver); the stretch is the upside if the loop compounds; the saturation ceiling is the asymptote. Each ARPU input traces to a public-comp source named in §4.

## §6 — Competition

<p class="lede">No current player occupies more than three of Boop&apos;s six surfaces. Every player on the matrix is structurally pre-AI.</p>

The pet category is well-populated at the layer level — every individual surface Boop ships has incumbents. The category is *unpopulated at the abstraction layer*, which is the composition of those surfaces into one AI-native consumer surface tied to the user's actual dog.

The matrix below covers every iOS app we identified that composes more than one Boop surface, with quantitative App Store data alongside feature coverage. Single-layer incumbents (BarkBox, Chewy, Rover, Instagram) are excluded; they are not composing the stack and are addressed structurally in §1 and §2. Fi (hardware-led, single-surface) is included as a scale anchor because its rating count is the only meaningful traction signal in the cohort.

#### Competitive matrix

Quantitative columns sourced from US App Store as of 2026-04. "Real pet" = scan-or-equivalent identity tied to the user's actual dog (not a self-declared profile). Feature columns: ✓ shipped, ◐ partial, ✗ absent.

| Player | Type | Rating ★ | US ratings | Monetization | Real pet | Walk | Feed | Friends | Commerce | Local |
| --- | --- | :---: | ---: | --- | :---: | :---: | :---: | :---: | :---: | :---: |
| **Boop** | AI-native pet app *(iOS launch 2026)* | — | — | IAP + affiliate (§4) | <span class="yes">✓</span> | <span class="yes">✓</span> | <span class="yes">✓</span> | <span class="yes">✓</span> | <span class="yes">✓</span> | <span class="yes">✓</span> |
| [Lev](https://apps.apple.com/us/app/lev-meet-dogs-explore/id1668175755) | Walk-to-earn social + marketplace | 4.6 | 1,200 | Walk → in-app currency → marketplace | <span class="no">✗</span> | <span class="yes">✓</span> | <span class="yes">✓</span> | <span class="yes">✓</span> | <span class="yes">✓</span> | <span class="yes">✓</span> |
| [Fi](https://apps.apple.com/us/app/fi-gps-dog-tracker/id1438036784) | GPS collar + companion app | 4.7 | 35,000 | Hardware ($150) + $19/mo membership | <span class="mid">◐</span> | <span class="yes">✓</span> | <span class="no">✗</span> | <span class="no">✗</span> | <span class="no">✗</span> | <span class="no">✗</span> |
| [Sniffspot](https://apps.apple.com/us/app/sniffspot-private-dog-parks/id1437699295) | Private-yard rental marketplace | 4.9 | 20,000 | Per-visit booking + $20/mo web sub | <span class="no">✗</span> | <span class="mid">◐</span> | <span class="no">✗</span> | <span class="no">✗</span> | <span class="yes">✓</span> | <span class="yes">✓</span> |
| [DogHood](https://apps.apple.com/us/app/doghood-dog-lovers-community/id1547568850) | Playdates + meetups + events | 4.7 | 279 | $19.99 ticket / $99.99 Premium / merch | <span class="no">✗</span> | <span class="yes">✓</span> | <span class="yes">✓</span> | <span class="yes">✓</span> | <span class="mid">◐</span> | <span class="yes">✓</span> |
| [Pawmates](https://apps.apple.com/us/app/pawmates-the-pet-social-media/id1397983772) | Pet-social network | 4.6 | 98 | None | <span class="no">✗</span> | <span class="no">✗</span> | <span class="yes">✓</span> | <span class="yes">✓</span> | <span class="no">✗</span> | <span class="mid">◐</span> |
| [PawPals](https://apps.apple.com/us/app/pawpals-dog-park-social/id6751210296) | Dog-park map &amp; social | 5.0 | 1 | $7.99/mo subscription + Premium Dog $6.99 | <span class="no">✗</span> | <span class="mid">◐</span> | <span class="yes">✓</span> | <span class="mid">◐</span> | <span class="no">✗</span> | <span class="mid">◐</span> |

#### Reading the landscape

**[Pawmates](https://apps.apple.com/us/app/pawmates-the-pet-social-media/id1397983772) — the pet-social comp.** A pet-first social media app with a "find playmates" feature and partial integration with local pet services. Pawmates self-reports ~100K users across 75+ countries (not Apple-attested; the App Store listing carries 98 ratings). Closest concept comp on the social side: Feed and Friends columns checked, partial Local. Pawmates is structurally pre-AI (no scan, no companion generation, no commerce) and operates as a 2017–2019-era social-media product. Boop's friend graph occupies the same column but is fed by every walk and vet visit rather than self-declared.

**[PawPals](https://apps.apple.com/us/app/pawpals-dog-park-social/id6751210296) — the walk-loop comp.** Dog-park-discovery app with a real-time map of parks, gamification (points, badges, achievements), pet activity logging, and a basic news feed. The closest mechanical comp to Boop's daily walk loop. PawPals does no AI, no real-pet identity, no commerce — but proves that walk-and-park gamification is a real consumer behavior with willingness-to-engage. Boop's walk loop captures the same surface and adds the companion layer (the dog-as-character) on top.

**The rest of the matrix.** Lev (1.2K ratings) and DogHood (279 ratings) are the closest composition comps after Pawmates and PawPals — each occupies three of the six surfaces but pairs them with a fragile monetization mechanic addressed in the next subsection. Sniffspot (20K ratings) is the only single-purpose marketplace at meaningful scale and is included as a unit-economics case study, not a feature comp. Fi (35K ratings) is a hardware company whose app is single-surface; it is on the matrix as the only at-scale traction signal in the cohort and as evidence that pet parents will pay recurring fees for a pet-specific app when the surface earns it.

**Three observations on the landscape as a whole.** First, no current player occupies more than three columns of the matrix; Boop&apos;s claim is the abstraction across all six. Second, every player on the matrix is structurally pre-AI — none of them does any AI generation, scan, or companion mechanic. Third, the competitive pressure on Boop in v1 is not displacement by any of the above (none has the capital, the AI infrastructure, or the velocity to compose the stack inside our shipping window) — it is the risk of *incumbents adding AI features to their existing single-layer surfaces*. The defensible response is product velocity at the abstraction layer, not feature parity at any one surface.

#### Monetization fragility in the category

The matrix above describes what the category *looks like* today. A second pattern — visible only when reviewing how each player has tried to make money — is materially relevant to §4 and worth surfacing here. The pattern is that **every pet app that has tried to monetize the engagement loop directly has had to devalue it to scale, and lost its base when it did.** Two cases sit at the front of the evidence.

**[Lev](https://apps.apple.com/us/app/lev-meet-dogs-explore/id1668175755) — walk-to-earn currency revolt.** Lev is a New York–based, pre-seed, 2-to-10-employee company<sup>13</sup> operating a walk-to-earn social marketplace: users earn an in-app currency ("bones") by logging walks, redeemable in an integrated Shopify-backed marketplace. In 2025, Lev cut bone value from $0.50 to $0.10 — an 80% devaluation — and added a 30-day balance-reset rule in the same update. Lev's own published FAQ now reads: *"if your Bones balance remains positive for 30 consecutive days, the balance will reset to zero,"* a policy that structurally punishes saving and converts the most loyal users into the largest balance-sheet liability.<sup>14</sup> The most-recent App Store reviews are dominated by previously-positive users describing the change as a betrayal. Lev's rating remains 4.6★ on ~1.2K ratings, but the lifetime average obscures a shift in recent sentiment that the rating system does not surface to a casual reader.

**[Sniffspot](https://apps.apple.com/us/app/sniffspot-private-dog-parks/id1437699295) — booking marketplace converted to subscription wall.** Sniffspot operates a marketplace for renting private yards as dog parks (4.9★, ~20K US ratings). The app moved from per-visit booking to a $20/month subscription with expiring credits; the most-recent negative reviews open with variants of *"it was great until the subscription model."* Casual users — the long tail who do not visit weekly — are now priced out of the original use case. A secondary tell: the subscription is sold via web rather than as an Apple in-app purchase, almost certainly to avoid the 30% App Store cut, which is a sign the underlying unit economics are tight before Apple's tax is applied.<sup>15</sup>

**Why this matters for §4.** Both cases share a single structural feature: the engagement reward and the spend currency are the same surface. When the company has to rebalance unit economics — and at consumer scale, every company eventually does — it has no choice but to tax the most active users first, because they hold the largest balance and represent the largest cost. Boop's monetization stack (§4) is designed against this failure mode. The walk loop and the friend graph are free, in perpetuity, with no in-loop currency users can accumulate and lose. Layer 1 (IAP) sells discrete cosmetic goods, not balances. Layer 2 (affiliate commerce) is a take-rate on third-party physical SKUs and does not depend on devaluing anything Boop has already given the user. Layers 3 through 5 are commerce and brand revenue that compound on engagement without being denominated in engagement. The structural choice is not coincidental: it is what we observed the category needs.

A third observation worth naming: the free social-only apps in the same survey (Pawmates above, plus Social Paws and DOGOUT off-matrix) sit at fewer than 100 ratings each despite multi-year tenure. The category does not reward social-only products at scale either. The viable position is the one Boop occupies — a daily ritual with a monetization mechanic that is decoupled from the ritual itself.

## §7 — Risks

<p class="lede">Five risks the team underwrites explicitly. The §9 reserve exists to absorb the ones that resolve through evidence, not argument.</p>

The risks below are the ones the team treats as real, not the ones a memo template would list. Each is paired with the specific evidence that would resolve it (or fail to resolve it) inside the v1 window funded by this round.

**1. AI scan quality at consumer-photo scale.** Pet-accurate avatar generation works in controlled tests; scaling to user-submitted photos under varied lighting, partial-pet framing, atypical breeds, and mixed-breed phenotypes is the unknown. *Resolves through:* a closed v1 beta with retake-rate, abandonment-rate, and qualitative satisfaction captured per scan. *Mitigation in product:* breed-specific fine-tuning, in-app retake flow, and stylized fallback rendering when realism confidence is low.

**2. Apple platform risk.** Layer 1 monetization (cosmetic IAP) sits inside Apple&apos;s standard IAP framework and carries the standard 30% take. Layer 2 (affiliate commerce) routes purchases off-app to brand partners — currently allowed, but Apple&apos;s policies on photo-likeness generation and on the boundary between physical and virtual goods have shifted multiple times in the last 24 months. *Resolves through:* App Review submission of the v1 build before commercial launch and explicit alignment with Apple&apos;s reviewer guidelines on affiliate routing. *Mitigation:* Sniffspot&apos;s web-checkout pattern (§6) — selling outside Apple&apos;s in-app purchase flow — is precedent that a web-side fallback works in this category if App Review forces a structural change.

**3. Novelty churn after the first 30 days.** AI companion onboarding is novel; the bet is that the daily walk loop and the friend graph carry users past the initial generation moment. If they do not, MAU collapses and the §4 ARPU stack does not earn out. *Resolves through:* D7 / D30 retention captured in v1 closed beta before commercial launch; the threshold for committing reserve capital to acquisition is D30 ≥ 20% (mid-tier consumer-social benchmark; below this, the cohort curve is too leaky to scale into). *Mitigation:* the §9 reserve is held precisely to avoid scaling acquisition into a leaky bucket — capital is committed only after the cohort retention curve is observable.

**4. Brand partner velocity for Layer 2.** $10 ARPU year-3 (§4) requires a meaningful catalog — roughly 500 SKUs across 40 brands by end of year 1. Slower BD = thinner catalog = lower CTR and lower ARPU. *Resolves through:* signed partner agreements as a hard milestone for the v1 launch checklist; first 3–5 partners funded inside §9 use-of-funds. *Mitigation:* prioritize indie brands with existing Shopify storefronts (low integration cost) and seed the catalog with brand-agnostic generic SKUs while the partner pipeline builds.

**5. CAC in a category with no proven channel.** No pet-app competitor has an at-scale paid-acquisition playbook. Pet-influencer Instagram seeding and TikTok organic are the leading hypotheses; neither is priced. *Resolves through:* small, instrumented v1 channel tests with explicit CAC-to-ARPU ratios captured before any major spend. *Mitigation:* the §9 reserve is again the structural answer — paid acquisition is funded only after a channel shows a CAC inside the unit-economics window.

The risks not listed here — incumbent feature parity, AI inference cost, regulatory exposure on cohort data — are real but second-order; each is addressed structurally inside §6, §4, or the operating philosophy in §9.

## §8 — Team

<p class="lede">Two founders: a builder and a game designer. Seed funds two engineering hires, not a generalist build-out.</p>

A two-person founding team. Boop is intentionally small at this stage; the seed round funds two engineering hires to ship v1, not a generalist build-out.

- **[Founder name] — Founder &amp; CEO.** [One-line bio: prior companies, relevant wins, domain credibility.]
- **[Co-founder name] — Game &amp; product.** [One-line bio: prior shipping credits, relevant gameplay or AI experience.]

The composition is deliberate: a builder and a game designer. The product surface that has to work first — the Scan-to-companion flow and the daily walk loop — is a game-design problem before it is a social-network problem. Hiring against that thesis is how the team is structured.

## §9 — The ask

<p class="lede">$1M seed on a $10M post-money cap SAFE. ~24 months runway. ~$355K reserve held for validated double-down.</p>

| Term | Value |
| --- | --- |
| Round | $1M seed |
| Instrument | SAFE |
| Post-money cap | $10M |
| Runway | ~24 months at conservative burn |
| Milestones | iOS launch; v1 monetization (Layers 1 &amp; 2) live; baseline retention &amp; ARPU figures captured; reserve preserved for validated double-down |

Pricing is in line with current pre-product AI consumer norms (recent pre-product AI-consumer SAFEs cluster at $8–15M post-money cap).

#### Go-to-market hypothesis

The pet-app category has no proven paid-acquisition channel at scale; the §7 risks are explicit about that. Boop&apos;s v1 GTM is concentric — own the smallest possible audience first, then expand outward only after CAC sits inside the unit-economics window.

The seed audience is dog-owning Gen-Z and Millennial users in 5–10 dense urban metros where dog-park density and walk frequency are highest. Inside that footprint, three channels are tested in parallel during the closed v1 window: **(1)** mid-tail pet-influencer seeding on Instagram and TikTok (50K–500K-follower creators whose audience demographic matches; cost-per-follower is low, CTR-to-install is the unknown); **(2)** physical activation at scheduled dog-park meetups, with Boop-branded scan stations producing organic friend-graph density inside a single park; **(3)** Reddit and Discord pet-community organic, slow but high-intent and useful for early product-market signal more than scale.

The §9 reserve is held against whichever of these three channels prove an early CAC inside our unit economics. Capital scales channels that work and does not subsidize channels that do not. We do not expect all three to work; the seed funds the test, not the scale.

#### Operating philosophy

Boop is run as an experimental lab. The seed funds the team and infrastructure required to ship v1 and capture early monetization data; a meaningful portion of the round is held in reserve and deployed only against channels and product surfaces that have demonstrated positive unit economics in v1. The team does not pre-commit capital to marketing or growth hires before signal exists. Capital is optionality, deployed when validated, not on schedule.

#### Use of funds

| Use | $ | Unlocks |
| --- | ---: | --- |
| Founder salary (24 mo @ $80K base + employer payroll tax; no benefits) | $173K | Runway through iOS launch + 12 mo of v1 data |
| Lead engineer salary (24 mo @ $100K base + employer payroll tax; no benefits) | $216K | Ships Scan, Walk, Feed, Friend graph; ongoing ML / avatar quality |
| GTM hire (deferred ~12 mo, activated once v1 signal exists) | $86K | Hired only when v1 reveals a channel worth scaling |
| AI inference + infra (scan, generation, maps; 24 mo, sized for v1 closed beta + early launch at <50K MAU; revisits at scale) | $80K | Per-scan unit cost held under target; supports v1 user volume |
| Legal, ops, accounting, tools | $40K | — |
| Brand BD + first commerce integrations | $50K | Layer 2 affiliate revenue at launch; first 3–5 brand partners live |
| **Operating spend** | **~$645K** | |
| **Capital reserve, held for validated double-down** | **~$355K** | Deployed against v1 channels with proven unit economics (paid acquisition, additional hires, infra scale-out) |
| **Total** | **$1.00M** | |

The reserve is the philosophy made visible: capital held until product signal tells us where it earns its highest marginal return. The seed underwrites v1 only; Layers 3, 4, and 5 of §4 are self-funding from v1 revenue or a future Series A.

---

#### Sources

1. ValuePenguin, [*Average Spending per Pet Household, 2024*](https://www.valuepenguin.com/pet-spending-study).
2. American Pet Products Association, [*U.S. Pet Industry Reaches $158 Billion in 2025 — 2025 State of the Industry Report*](https://americanpetproducts.org/news/the-american-pet-products-association-appa-releases-2025-state-of-the-industry-report).
3. American Pet Products Association, *2024–2025 National Pet Owners Survey* (dog-household count cited via [Insurance Information Institute, *Facts + Statistics: Pet Ownership*](https://www.iii.org/fact-statistic/facts-statistics-pet-ownership-and-insurance), reproducing APPA data verbatim).
4. Business of Apps, [*Pokémon GO Revenue and Usage Statistics (2026)*](https://www.businessofapps.com/data/pokemon-go-statistics/) (2024 player spending $545M; MAU figures per Sensor Tower).
5. Roblox Corporation, [*Fourth Quarter and Full Year 2024 Financial Results*](https://ir.roblox.com/news/news-details/2025/Roblox-Reports-Fourth-Quarter-and-Full-Year-2024-Financial-Results/default.aspx) (FY2024 bookings $4,369.1M; average DAU 82.9M).
6. 360iResearch, [*Virtual Pet Simulator Apps Market Size & Share 2025–2032*](https://www.360iresearch.com/library/intelligence/virtual-pet-simulator-apps).
7. Sensor Tower, [*State of Mobile Gaming 2025*](https://sensortower.com/blog/state-of-mobile-gaming-2025).
8. Etsy, Inc., [*2024 Annual Report (Form 10-K)*](https://investors.etsyinc.com/).
9. LTK (rewardStyle), [*2024 Creator-Attributed GMV*](https://shopltk.com/) (private-company release).
10. The Original BARK Company, [*FY2024 Annual Report*](https://ir.bark.co/).
11. Yelp, Inc., [*2024 Annual Report (Form 10-K)*](https://www.yelp-ir.com/).
12. Pinterest, Inc., [*2024 Annual Report (Form 10-K)*](https://investor.pinterestinc.com/).
13. Lev (LEV Maps), company profile via [LinkedIn](https://www.linkedin.com/company/levmaps) and [Crunchbase](https://www.crunchbase.com/organization/lev-maps).
14. Lev, [*FAQs — Bones*](https://levmaps.com/faqs/).
15. Sniffspot, [App Store listing](https://apps.apple.com/us/app/sniffspot-private-dog-parks/id1437699295) and [developer site](https://www.sniffspot.com/).
