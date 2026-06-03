# MMFM @ CVPR 2026 — Speaker & Panel Questions

> Prepared for the moderator (Edson Araujo). Per-speaker questions are grounded in each speaker's recent papers and their talk abstract; each has a short *Why* note citing the work it draws on. The panel section keeps the meta-theme **"What is Next in Multimodal Foundation Models?"** and is calibrated so several panelists can engage (not trivially generic, not answerable by only one person).
>
> **Keynotes:** Serena Yeung-Levy · Vincent Sitzmann · Trevor Darrell · Hadar Averbuch-Elor · Shuai Bai
> **Panelists (5:00 PM):** Vincent Sitzmann · Trevor Darrell · Hadar Averbuch-Elor · Zhibo Yang (Qwen Team, Alibaba). *Serena and Shuai present remotely and are not on the panel; Zhibo Yang joins for the Qwen team.*

---

## Serena Yeung-Levy (Stanford) — *Multimodal Generative Models Towards Generating Biomedical Insights*

*Recent thread:* biomedical vision-language + reasoning (BIOMEDICA, MicroBench/MicroVQA, "No Tokens Wasted") and image-generative "virtual cell" models (CellFlux, CellFluxV2, CellFluxRL), plus the *Cell* 2024 "How to build the virtual cell with AI" position paper.

1. **Generalizing to unseen perturbations.** CellFlux separates true perturbation effects from batch effects via distribution-wise transport, but virtual-cell utility ultimately depends on predicting perturbations the model never saw. How far are we from generalizing CellFlux-style generation to genuinely novel compounds or gene targets, versus interpolating among known ones?
   *Why: CellFlux (ICML 2025) is trained/evaluated on known BBBC021/RxRx1/JUMP perturbations.*

2. **Honest evaluation of biomedical VQA.** MicroVQA shows frontier MLLMs top out near 53% on expert microscopy reasoning, and you built RefineBot to strip language shortcuts. For the "VQA-for-data-interpretation" direction in your talk, what does honest evaluation look like once we leave multiple-choice for the open-ended setting scientists actually need?
   *Why: MicroVQA (CVPR 2025) — 53% ceiling, MCQ limitation, RefineBot shortcut removal.*

3. **The literature distribution-shift wall.** BIOMEDICA scaled to 24M+ image-caption pairs from the literature, yet published figures are curated and idealized rather than raw experimental data. How much does this shift limit downstream VQA and generative models, and where do you still hit a true data wall?
   *Why: BIOMEDICA (CVPR 2025) was built to address scarce annotated data but is sourced from published figures.*

4. **Full-text grounding as the lever.** "No Tokens Wasted" found ~55% of biomedical caption tokens were being truncated and that long context gives large retrieval gains. Do you see richer full-text grounding as what pushes VQA models from perception toward the hypothesis-generation tier MicroVQA targets?
   *Why: BMC-LongCLIP / "No Tokens Wasted" (2025) long-context gains vs. MicroVQA's hypothesis-generation framing.*

5. **What counts as a trustworthy generated prediction.** For virtual-cell models you reported FID and mode-of-action accuracy, but a "scientific insight" is a higher bar than image realism. What validation would convince you a generated perturbation image is a trustworthy biological prediction rather than a plausible-looking artifact?
   *Why: CellFlux's FID/MoA metrics + the Cell 2024 paper's call for rigorous virtual-cell benchmarks.*

6. **Data-driven dynamics vs. mechanistic priors.** CellFluxRL adds biological constraints via RL on top of the generative model. As you scale toward a foundation-level virtual cell, how do you balance learning dynamics purely from data against injecting mechanistic priors — and where has each failed you?
   *Why: CellFluxRL ("biologically-constrained" RL) and the multi-scale integration debate in the Cell 2024 paper.*

---

## Vincent Sitzmann (MIT) — *World models for graphics, vision & robotics*

*Recent thread:* from explicit neural scene representations (SIREN, Scene Representation Networks, Light Field Networks) to generative world models as sequence/video diffusion — Diffusion Forcing, History-Guided Video Diffusion, Generative View Stitching, and self-supervised 3D-from-video. Contrarian position: explicit 3D is a human-designed bottleneck.

1. **The "bitter lesson" for 3D.** Your essay argues explicit 3D structure will become obsolete as an intermediate representation, yet most MMFMs still bolt on geometry-aware modules. If 3D is a bottleneck to distill away, what *minimal* inductive bias should an MMFM keep — and how would you verify a 2D-trained model has actually learned a usable geometric world model rather than memorized view statistics?
   *Why: his blog "The flavor of the bitter lesson for computer vision," contrarian to pure-scale 2D MMFMs.*

2. **Diffusion Forcing as a cross-modal objective.** Diffusion Forcing assigns independent per-token noise levels to unify next-token prediction and full-sequence diffusion. Is this the unifying training objective for multimodal foundation models broadly, or specific to temporally/spatially structured signals — and what breaks across language + video + action?
   *Why: Diffusion Forcing (NeurIPS 2024), his core recent method and a candidate cross-modal objective.*

3. **Learning action-relevant structure from passive video.** You frame world models around scalable video pretraining and action-conditional simulation, but flag the action-observation data chicken-and-egg problem. For a community awash in passive internet video, what pretraining objective extracts action-relevant structure without paired action labels?
   *Why: the world-model data bottleneck argued in his blog/talks.*

4. **Geometry as emergent, not engineered.** "True Self-Supervised Novel View Synthesis is Transferable" shows 3D understanding can emerge purely self-supervised from video and transfer. Does this argue geometry should be an emergent capability of a general video model rather than a separate task — and how far does that transfer reach into non-spatial reasoning?
   *Why: ICLR 2025 Oral — evidence for emergent vs. engineered 3D.*

5. **Is autoregression the wrong bias for world simulation?** Generative View Stitching gets consistent long video by denoising chunks jointly rather than autoregressively. Given the field's bet on autoregressive decoding, is autoregression the wrong inductive bias for spatially consistent simulation, and what's the scaling cost of parallel/bidirectional sampling at foundation scale?
   *Why: Generative View Stitching (ICLR 2025) critiques autoregressive rollout for consistency.*

6. **What survived from the explicit-representation era.** From SIREN and Light Field Networks to today's video diffusion world models, you traded hand-designed representations for learned ones. Which lessons from the explicit era did you build *into* your world models, and which were genuine dead ends?
   *Why: ties SIREN/LFN to the world-model agenda — which inductive biases survived distillation.*

---

## Trevor Darrell (UC Berkeley) — *Grounded, trustworthy & efficient multimodal models*

*Recent thread:* hallucination mitigation/alignment (LLaVA-RLHF, "Generate, but Verify"), grounded reasoning-segmentation (SegLLM, LISAt), agentic coordination of specialists (Cola), embodied multimodal memory (Embodied VideoAgent), and advocacy for open + efficient foundation models.

1. **Is factual reward calibration still needed?** LLaVA-RLHF introduced Factually Augmented RLHF, feeding captions into the reward model to curb hallucination. With RLVR/GRPO verifiable-reward training now dominant, is reward calibration on external factual signals still necessary, or can self-verification subsume it?
   *Why: "Aligning Large Multimodal Models with Factually Augmented RLHF" (ACL Findings 2024).*

2. **Inference-time verification vs. grounding in pretraining.** "Generate, but Verify" curbs hallucination by resampling and retrospectively checking at inference. Where should the next marginal effort go — inference-time verification or baking grounding into pretraining — and what's the cost/reliability tradeoff for deployment?
   *Why: "Generate, but Verify: Reducing Hallucination in VLMs with Retrospective Resampling" (2025).*

3. **Coordinator-of-specialists vs. monolithic MMFM.** Cola framed the LLM as a coordinator orchestrating specialist VLMs. As frontier MMFMs become end-to-end, is coordinator-of-specialists still the right bet or a transitional architecture — and where does it remain decisively better?
   *Why: "LLMs are Visual Reasoning Coordinators" / Cola (NeurIPS 2023).*

4. **Dense grounding as first-class.** SegLLM brings multi-round, conversational reasoning-segmentation into the VLM. What's the hardest open problem in making pixel-level, multi-round spatial grounding a first-class capability of general MMFMs rather than a bolted-on head?
   *Why: SegLLM (ICLR 2025).*

5. **Memory for agents that change the world.** Embodied VideoAgent builds persistent scene memory from egocentric video + embodied sensors. As MMFMs move to agents/robotics, what's the right representation for long-horizon multimodal memory, and where do current video VLMs most fail once actions change world state?
   *Why: "Embodied VideoAgent" (2025).*

6. **Where academia can still set the agenda.** You've argued open access and small, efficient VLMs are essential for academic research and edge deployment. As the open/closed gap shifts, where can academia still set the MMFM agenda, and is "efficient and open" winning or losing ground?
   *Why: his ICML 2024 open-foundation-models work and "efficient multimodal intelligence" talks.*

---

## Hadar Averbuch-Elor (Cornell) — *What Do Multimodal Foundation Models Learn Beyond What We Ask?*

*Recent thread:* uncovering emergent, unsupervised structure — visual-semantic hierarchies in CLIP (HierarCaps), localization/correspondence in diffusion attention (Cross-Image Attention, Localizing Object-level Shape Variations), color binding (Color Bind), and extreme-view geometry latent in 3D foundation models (Ext-3DFMs). Prefers lightweight probing/alignment over retraining.

1. **Knowledge in the backbone, misalignment in the heads.** In Ext-3DFMs you recover extreme-view geometry from VGGT by tuning only ~80k backbone bias terms with frozen decoder heads. Does this mean the geometric knowledge already exists and the heads are merely misaligned out-of-distribution — and would "align, don't retrain" transfer to DUSt3R/MASt3R-style models?
   *Why: Ext-3DFMs (CVPR 2026) — bias-only alignment surfacing latent extreme-view geometry.*

2. **Does emergent localization survive the U-Net → MM-DiT shift?** Your diffusion-attention work locates semantic correspondence in self/cross-attention. Now that the field moved from U-Net cross-attention to MM-DiT joint attention (FLUX, SD3), does the same emergent localization persist, or does fusing text and image tokens move where it lives?
   *Why: Localizing Object-level Shape Variations (ICCV 2023), Cross-Image Attention (SIGGRAPH 2024).*

3. **Is binding absent or just un-surfaced?** Color Bind shows T2I models render single colors faithfully but fail under multi-color, multi-object prompts. Is this a genuine failure of compositional binding, or is correct binding latently present but not surfaced — could a probing/alignment approach recover it without editing?
   *Why: Color Bind (WACV 2026) probes where T2I binding breaks vs. what is latently encoded.*

4. **A general tool for emergence.** HierarCaps exposed emergent hierarchies in CLIP via a Radial Embedding probe without retraining. Is there a unifying methodology — lightweight, geometry-adapting probes — that's the right general tool across both VLMs and 3D foundation models, and what are its limits?
   *Why: Emergent Visual-Semantic Hierarchies (ECCV 2024 Oral) — a probe-don't-retrain methodology echoed in Ext-3DFMs.*

5. **Benchmarks that measure latent structure.** A theme across your work is that standard benchmarks understate what models encode. What would a benchmark designed to *measure emergent latent structure* — rather than task accuracy — actually look like, and does MegaUnScene point toward it?
   *Why: Ext-3DFMs introduces MegaUnScene; your abstract contrasts "standard benchmarks" with emergent structure.*

6. **Discovering vs. engineering emergence.** When capabilities unlock so cheaply (80k params, frozen heads, text-only fine-tuning), are designers under-specifying training and getting capabilities "for free," or should pretraining objectives be deliberately reshaped to cultivate them? Where's the line between discovering and engineering emergence?
   *Why: cross-cutting position in your abstract + the cheap-unlock results in Ext-3DFMs and HierarCaps.*

---

## Shuai Bai (Alibaba, Qwen Team) — *From Multimodal Understanding to Agentic Visual Intelligence*

*Recent thread:* the Qwen-VL line — Qwen-VL (grounding via image-caption-box tuples), Qwen2-VL (naive dynamic resolution, M-RoPE), Qwen2.5-VL (native-resolution ViT, absolute time encoding, "interactive visual agent"), Qwen3-VL (Interleaved-MRoPE, DeepStack, visual coding, 256K–1M context) — shipped open-weight.

1. **Is GUI action a new capability or the same grounding stack?** Qwen2.5-VL reframed the model as an "interactive visual agent," yet grounding still emerges from the image-caption-box and coordinate objectives inherited since Qwen-VL. Is reliable GUI action fundamentally new, or does it bottom out on the same localization stack — and where does that decomposition break?
   *Why: Qwen-VL grounding tuples → Qwen2.5-VL absolute-coordinate grounding + "visual agent" claim (arXiv 2502.13923).*

2. **Why explicit timestamp alignment?** Temporal representation kept getting redesigned: M-RoPE, then absolute time encoding, then explicit textual timestamp alignment in Qwen3-VL. What did the earlier RoPE-style temporal approaches fail at for second-level video localization that pushed you to explicit timestamps?
   *Why: M-RoPE (2409.12191) → absolute time encoding (2502.13923) → textual timestamps (2511.21631).*

3. **Token-budget vs. fidelity for long-horizon agents.** Naive dynamic resolution emits a variable number of visual tokens — powerful for documents but unbounded for hours-long video or 256K-context workflows. How do you reason about the token-budget vs. fidelity tradeoff when a document or video agent must act over very long inputs?
   *Why: naive dynamic resolution (2409.12191) vs. 256K–1M context long-video agents (2511.21631).*

4. **What a workflow-level agentic benchmark measures.** Your abstract argues evaluation must move beyond isolated benchmarks, yet the Qwen3-VL report still headlines MMMU/MathVista/MMLongBench-Doc. What would a credible agentic, workflow-level benchmark for a GUI or document agent actually measure, and why hasn't the field converged on one?
   *Why: "beyond isolated benchmarks" position vs. benchmark-centric reporting (2511.21631).*

5. **Did visual coding need architecture, or just data?** Qwen3-VL adds visual coding (image/video → HTML/CSS/Draw.io) alongside DeepStack multi-level ViT fusion. Did visual coding require architectural support for fine-grained detail (motivating DeepStack), or is it mainly a data/post-training capability layered on existing perception?
   *Why: visual coding + DeepStack introduced in Qwen3-VL (2511.21631).*

6. **Open-weight agents that can act.** The Qwen-VL line ships open-weight under permissive licenses while matching closed frontier VLMs on vision benchmarks. As these models gain real computer/phone control, how does open-weight release change your thinking on scaling vs. data quality — and on the safety of shipping agents that can act?
   *Why: Apache-2.0 strategy + agentic control claims (2502.13923 / 2511.21631).*

---

## Panel Discussion — *What is Next in Multimodal Foundation Models?*

> **Panelists:** Vincent Sitzmann (world models / 3D & scene representation) · Trevor Darrell (grounded, trustworthy & efficient VLMs, open models) · Hadar Averbuch-Elor (emergent structure, interpretability, generative-as-representation) · Zhibo Yang (Qwen Team — agentic VLMs, GUI/document/video agents, large-scale post-training).
>
> Each question is pitched at the **overlap** of the panelists' research so they engage *each other*, not just the moderator. The italic *Crux* line is a short, neutral framing of what the question is really getting at — for the audience and panelists alike, not aimed at anyone in particular. Keep returning to the meta-theme: **what is genuinely next in MMFM.**

1. **Does acting require a world model, or just a bigger agent?** The Qwen line shows that a heavily post-trained 2D vision-language model can already operate GUIs, parse documents, and act over long videos — with no explicit model of how the world evolves. Vincent's work argues real embodied intelligence needs an action-conditioned *world model*. So for the next leap in agentic MMFMs: do we need to learn a simulator of the world, or will scaled multimodal agents learn to act without one?
   *Crux: does the path to capable agents run through learning how the world works, or through scaling perception-and-action directly?*

2. **Emergence vs. engineering as the source of new capability.** Hadar's work shows powerful capabilities sit *latent* in models and can be unlocked almost for free (tiny probes, frozen heads). The Qwen recipe instead *engineers* each new capability through massive curated data and post-training. Where does the next generation of capability actually come from — discovering what models already learned, or deliberately building it in?
   *Crux: does future capability come mostly from surfacing what models already learn, or from deliberately training it in?*

3. **Should geometry/3D be emergent or engineered?** Both Vincent and Hadar work on 3D foundation models from opposite angles — Vincent toward distilling explicit 3D away in favor of learned world models, Hadar showing geometric understanding already lurks (and is recoverable) inside 3D models that were never trained for it. As MMFMs ingest more 3D and video, should geometry be a built-in module or an emergent property we just learn to surface?
   *Crux: should 3D understanding be a built-in component, or left to emerge from large-scale learning?*

4. **What replaces the leaderboard?** Hadar argues benchmarks *understate* what models encode; the agentic-VLM community argues benchmarks *overstate* real competence and that we need workflow-level, task-oriented evaluation; Trevor's work ties evaluation to factual grounding and hallucination. If today's benchmarks are wrong in both directions, what does a credible next-gen evaluation for MMFMs actually measure?
   *Crux: what should a trustworthy next-generation evaluation actually measure when today's benchmarks mislead in both directions?*

5. **One end-to-end model, or a system of specialists?** Trevor's Cola framed the LLM as a coordinator orchestrating specialist models; Qwen ships an increasingly monolithic end-to-end VLM; Vincent's world models imagine a learned simulator as the substrate everything else plugs into. Which parts of multimodal intelligence stay modular, and which collapse into a single model over the next two years?
   *Crux: how much of multimodal intelligence consolidates into one model versus a coordinated system of parts?*

6. **Trust and verification before agents are let loose.** Trevor's recent work is all about catching hallucination and verifying outputs; Qwen is shipping open-weight agents that can control computers and phones today. When a model can *act*, errors stop being captions and start being clicks. What's the minimum verification or reliability bar an agentic MMFM must clear before real deployment — and who's responsible for it when the weights are open?
   *Crux: what reliability bar must an agent that can act meet, and who is accountable for it?*

7. **Is generation the right path to understanding?** Generative models increasingly double as the representation: Hadar mines T2I and diffusion attention for perception, Vincent treats video diffusion as a world model, and even VLMs are blending understanding with generation. Is "generation as pretraining" the road to general multimodal understanding, or does training to synthesize pixels bake in biases that hurt grounded reasoning?
   *Crux: is learning to generate a good route to general understanding, or a source of biases that hurt grounded reasoning?*

8. **Representation, or how you use it?** When a vision encoder improves a downstream task, how do we know the gain comes from the representation itself rather than from the way we adapt and consume it? The same features can rank one way under a linear probe and a completely different way once they're plugged into a VLM and reshaped by multimodal post-training. How should the field measure the intrinsic quality of a representation, separately from the protocol used to read it out?
   *Crux: is downstream performance attributable to the representation itself, or to the recipe that adapts and consumes it?*

9. **What's the binding data constraint?** Each of you is starved of a different kind of data: Vincent of paired action-observation data for world models, Trevor of grounded/factual and open data, Zhibo of high-quality agentic trajectories (GUI/document workflows), Hadar arguably of *labels* rather than raw data. Which data bottleneck most limits the next generation of MMFMs, and is the answer "collect more" or "need less"?
   *Crux: which data shortage most limits progress, and is the fix to collect more or to use what we have better?*

10. **Does reasoning/test-time compute actually transfer to vision?** The RL-and-reasoning wave (visual coding, chain-of-thought, verifiable rewards) is reshaping VLMs from the Qwen side, while Trevor's RLHF/verification work questions whether reward signals truly fix grounding, and Hadar's work asks whether such "reasoning" is emergent or just trained surface behavior. Is multimodal reasoning real, or a linguistic veneer over perception that doesn't fix the underlying seeing?
   *Crux: do recent reasoning and RL gains genuinely improve perception, or mostly add a language layer on top of it?*

11. **Long-horizon memory and consistency.** Vincent works on temporally consistent long-video generation, Zhibo on long-context video and document agents, and Trevor on persistent embodied memory from egocentric video. As tasks stretch from seconds to hours, what's the right representation for long-horizon multimodal state — generated, retrieved, or structured — and where do today's models break first?
   *Crux: how should models represent state as tasks stretch from seconds to hours — generated, retrieved, or structured?*

12. **The modality frontier — signal vs. hype.** Beyond image+text+video, which modality (3D, action/proprioception, GUI/computer state, scientific/biological signals, audio) will most change what MMFMs can do in the next two years — and which is currently the most overhyped? Argue it against the panelist most invested in a different answer.
   *Crux: which new modality will matter most in the next two years, and which is currently overhyped?*

13. **What would you retire?** If you had to kill one popular MMFM research direction because you think it's a distraction or a dead end, what is it — and where would you redirect that effort?
   *Crux: which currently popular direction is a distraction, and what deserves the effort instead?*

14. **The next-workshop bet.** Name one capability that doesn't reliably work today but that you'd bet is solved by the time this workshop meets again. What's the first domino — data, architecture, eval, or grounding — that has to fall for it?
   *Crux: what's the nearest-term capability about to be solved, and what unlocks it?*

15. **Academia and industry's division of labor.** With compute and data concentrated in industry (Qwen) and the open/efficient agenda driven from academia (Berkeley, MIT, Cornell), what is the one question about MMFMs that academia is genuinely better positioned to answer than a frontier lab — and is the community actually working on it?
   *Crux: what question about MMFMs is academia better placed to answer than a frontier lab — and is it being worked on?*
