# AI-EP Project Proof of Concept

### Description

This is an unofficial Proof of Concept (POC) for the AI-EP project. AI-EP aims to provide digitalized, summerized and translated Individualized Educational Plans (IEPs) to marginalized families with difficulty understanding the complex language within the 60-70 pages long educational plan crucial to students' academic success. This POC involves finding modulized solutions for potential technical challenges in the development of the mobile and web application software.

## Backend Functionalities

AI-EP's digital solution involves a backend server oriented to servicing core tasks:

### Minimum Tasks
- [x] OCR Scanning (Unstructured): IEP multi-page PDF document -> Text
- [] Batched Chat Completion: 3 Types of Prompts, Config & Run
- [] Native Batched Translation: English to Spanish

### Utility Tasks
- [] Automated Email: One-Button Communication between parents and school staff
- [] Lookup: Dictionary of Relevant Terms & Evaluative Goals
- [] Batch Transcription: Audio -> Text for Generating Parent Meeting Transcipts

### Advanced

- [] OCR Scanning (Structured): Detect and preserve checkboxes, lists and tables
- [] Strict Schema Validation
- [] Unit Testing
- [] Documentation Page
- [] Jenkins Pipeline for CI/CD
- [] Host Docker Image for Horizontal Scaling
- [] AWS Secret/Env Var for API Key
- [] User Login and Database