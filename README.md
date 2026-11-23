# Livestream Reaction Engine — Submission
## 1. Setup & Running Instructions
[Brief instructions on how to open or run your project locally]
## 2. Phase 1: CSS Keyframes Analysis
* **Paint Flashing Screenshot:** [Embed or link screenshot]
* **Performance Profile Screenshot:** [Embed or link screenshot]
* **Observations:**
* What regions of the screen flashed green during high-concurrency spawning,
and why?
* What did the main thread activity (Layout, Recalculate Style, Paint) look
like in the flame chart?
## 3. Phase 2: GSAP & Composited Rendering Analysis
* **Performance Profile Screenshot:** [Embed or link screenshot]
* **Observations:**
* How did the flame chart and frame rate change compared to Phase 1?
* What happened to the green paint invalidation areas once animations moved
to composited transforms (`x`, `y`)?
## 4. Architectural Reflection
* **Runtime Control & Developer Experience:** How does adjusting playback
speed or randomizing flight paths mid-flight compare between static CSS rules
and programmatic timelines?
* **Pipeline Considerations:** If our application needed to dynamically tint,
re-theme, or alter these reaction assets at runtime based on active user
preferences, what architectural considerations dictate choosing programmatic
vector manipulation over pre-rendered raster image sequences?
